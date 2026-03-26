import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, MessageCircle } from 'lucide-react';
import { businessInfo } from '@/data/mockData';

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  isHallmarked: boolean;
  description?: string;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const handleWhatsAppClick = () => {
    const message = `Hi, I'm interested in ${product.name}. Please share more details.`;
    const url = `https://wa.me/${businessInfo.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4, scale: 1.02 }}
    >
      <Card className="overflow-hidden border-gray-200 hover:shadow-lg transition-shadow duration-300">
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
          {product.isHallmarked && (
            <Badge className="absolute top-3 left-3 bg-gold-600 text-white hover:bg-gold-700">
              <Shield className="w-3 h-3 mr-1" />
              BIS HUID
            </Badge>
          )}
        </div>
        <CardContent className="p-4">
          <p className="text-xs text-gray-500 mb-1">{product.category}</p>
          <h3 className="font-semibold text-slate-900 mb-2 line-clamp-1">{product.name}</h3>
          {product.description && (
            <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
          )}
          <p className="text-gold-600 font-bold mb-3">{product.price}</p>
          <Button 
            onClick={handleWhatsAppClick}
            className="w-full bg-slate-900 text-white hover:bg-slate-800"
            size="sm"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Enquire on WhatsApp
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
