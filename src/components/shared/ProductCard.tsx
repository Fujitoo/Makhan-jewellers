import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Product } from "@/data/mockData";

interface ProductCardProps {
  product: Product;
  className?: string;
  onEnquire?: (product: Product) => void;
}

export const ProductCard = ({ product, className, onEnquire }: ProductCardProps) => {
  return (
    <Card className={cn(
      "group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
      "bg-card border-border",
      className
    )}>
      <div className="relative aspect-square overflow-hidden rounded-t-lg">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {product.isHallmarked && (
          <Badge
            className="absolute left-2 top-2 bg-slate-900 text-white border-none shadow-md font-bold px-2 py-0.5"
          >
            Hallmarked
          </Badge>
        )}
        {product.isNew && (
          <Badge
            className="absolute right-2 top-2 bg-gold-600 text-white border-none shadow-md font-bold px-2 py-0.5"
          >
            New
          </Badge>
        )}
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-1">
          <p className="text-xs font-bold text-gold-600 uppercase tracking-wider">{product.category}</p>
          <p className="text-sm font-bold text-slate-900">{product.price}</p>
        </div>
        <h3 className="font-serif text-lg font-bold text-slate-900 line-clamp-1 mb-2">
          {product.name}
        </h3>
        {product.description && (
          <p className="text-sm text-slate-600 line-clamp-2 font-medium leading-relaxed mb-1">
            {product.description}
          </p>
        )}
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          className="w-full bg-gold-600 hover:bg-gold-700 text-white"
          variant="default"
          onClick={() => onEnquire?.(product)}
        >
          Enquire Now
        </Button>
      </CardFooter>
    </Card>
  );
};
