import { useState, useMemo } from "react";
import { Package, Shield, Clock, MessageCircle, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Layout } from "@/components/shared/Layout";
import { ProductCard } from "@/components/shared/ProductCard";
import { products, type Product } from "@/data/mockData";
import { BUSINESS_INFO } from "@/data/constants";

const CATEGORIES = ["All", "Rings", "Necklaces", "Earrings", "Bracelets", "Bangles"];

export const Collection = () => {
  // Filter states
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [searchQuery, setSearchQuery] = useState("");

  // Pagination
  const [visibleProducts, setVisibleProducts] = useState(9);

  // Filter and sort logic
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search filter
    if (searchQuery) {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category filter
    if (activeCategory !== "All") {
      result = result.filter((p) => p.category === activeCategory);
    }

    // Sorting
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => {
          const priceA = parseFloat(a.price.replace(/[₹,]/g, "")) || 0;
          const priceB = parseFloat(b.price.replace(/[₹,]/g, "")) || 0;
          return priceA - priceB;
        });
        break;
      case "price-high":
        result.sort((a, b) => {
          const priceA = parseFloat(a.price.replace(/[₹,]/g, "")) || 0;
          const priceB = parseFloat(b.price.replace(/[₹,]/g, "")) || 0;
          return priceB - priceA;
        });
        break;
      case "newest":
        result.sort((a, b) => {
          const dateA = a.isNew ? 1 : 0;
          const dateB = b.isNew ? 1 : 0;
          return dateB - dateA;
        });
        break;
      default:
        // Featured - keep featured items first
        result.sort((a, b) => {
          const featuredA = a.isFeatured || a.featured ? 1 : 0;
          const featuredB = b.isFeatured || b.featured ? 1 : 0;
          return featuredB - featuredA;
        });
    }

    return result;
  }, [activeCategory, sortBy, searchQuery]);

  // WhatsApp inquiry handler
  const handleEnquire = (product: Product) => {
    const message = `Hello ${BUSINESS_INFO.name},

I'm interested in: ${product.name}
Category: ${product.category}
Price: ${product.price}

Please provide more details about this piece.

Thank you!`;

    const url = `https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  // Load more handler
  const handleLoadMore = () => {
    setVisibleProducts((prev) => prev + 6);
  };

  // Clear all filters
  const handleClearAll = () => {
    setActiveCategory("All");
    setSortBy("featured");
    setSearchQuery("");
  };

  return (
    <Layout>
      {/* Filter Bar - Sticky below header */}
      <div className="bg-white py-3 px-4 border-b border-gray-100 sticky top-16 z-40">
        <div className="container mx-auto">
          <div className="flex flex-col gap-3">
            {/* Categories - Horizontal Scroll */}
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all flex-shrink-0
                    ${
                      activeCategory === cat
                        ? "bg-gold-600 text-white shadow-sm"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search and Sort - Compact Row */}
            <div className="flex gap-2">
              {/* Search */}
              <Input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 min-w-0 h-9 text-sm border-gray-200 bg-gray-50 text-slate-900 focus:border-gold-600 focus:ring-gold-600"
              />

              {/* Sort */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-24 h-9 border-gray-200 bg-gray-50 text-slate-900 focus:ring-gold-600 focus:border-gold-600 text-xs">
                  <SelectValue placeholder="Sort" />
                </SelectTrigger>
                <SelectContent className="bg-white border border-gray-200 shadow-lg z-50">
                  <SelectItem value="featured" className="text-slate-900 hover:bg-gold-50">
                    Featured
                  </SelectItem>
                  <SelectItem value="price-low" className="text-slate-900 hover:bg-gold-50">
                    Price ↑
                  </SelectItem>
                  <SelectItem value="price-high" className="text-slate-900 hover:bg-gold-50">
                    Price ↓
                  </SelectItem>
                  <SelectItem value="newest" className="text-slate-900 hover:bg-gold-50">
                    Newest
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Product Count */}
            <div className="text-xs text-slate-500">
              {filteredProducts.length} products
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="container mx-auto px-4 py-12">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <Package className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-slate-900">No products found</h3>
            <p className="text-gray-600 mt-2">Try adjusting your filters or search query</p>
            <Button
              onClick={handleClearAll}
              className="mt-4 bg-gold-600 hover:bg-gold-700 text-white"
            >
              Clear All Filters
            </Button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredProducts.slice(0, visibleProducts).map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onEnquire={() => handleEnquire(product)}
                />
              ))}
            </div>

            {/* Load More */}
            {visibleProducts < filteredProducts.length && (
              <div className="text-center mt-12">
                <Button
                  onClick={handleLoadMore}
                  variant="outline"
                  size="lg"
                  className="border-gold-600 text-gold-600 hover:bg-gold-50"
                >
                  Load More Products
                </Button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Trust Banner */}
      <div className="bg-slate-50 border-t border-gray-200 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mb-3">
                <Shield className="w-6 h-6 text-gold-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-1">BIS HUID Hallmarked</h3>
              <p className="text-sm text-gray-600">100% certified pure gold</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mb-3">
                <Clock className="w-6 h-6 text-gold-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-1">Business Hours</h3>
              <p className="text-sm text-gray-600">Mon-Sat: 10AM-9PM</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mb-3">
                <MessageCircle className="w-6 h-6 text-gold-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-1">Quick Response</h3>
              <p className="text-sm text-gray-600">WhatsApp reply in 1-2 hrs</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mb-3">
                <MapPin className="w-6 h-6 text-gold-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-1">Visit Us</h3>
              <p className="text-sm text-gray-600">Near Halima Hospital, Mau</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
