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
            variant="secondary"
            className="absolute left-2 top-2 bg-white/90 text-foreground backdrop-blur-sm"
          >
            Hallmarked
          </Badge>
        )}
        {product.isNew && (
          <Badge
            className="absolute right-2 top-2 bg-gold-600 text-white"
          >
            New
          </Badge>
        )}
      </div>
      <CardContent className="p-4">
        <p className="text-sm text-muted-foreground mb-1">{product.category}</p>
        <h3 className="font-semibold text-foreground line-clamp-1 mb-2">
          {product.name}
        </h3>
        <p className="text-lg font-bold text-gold-600">{product.price}</p>
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
