import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { ProductCard } from '@/components/shared/ProductCard';
import { products } from '@/data/mockData';

export function FeaturedCollection() {
  const featuredProducts = products.filter(p => p.featured).slice(0, 2);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionHeading
          title="Featured Collection"
          subtitle="Handpicked pieces that define elegance and tradition"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            asChild
            variant="outline"
            className="border-gold-600 text-gold-600 hover:bg-gold-50 px-8"
            size="lg"
          >
            <Link to="/collection">
              View All Products
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
