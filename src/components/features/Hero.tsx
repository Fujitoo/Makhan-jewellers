import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { businessInfo } from '@/data/mockData';

export function Hero() {
  const handleWhatsAppClick = () => {
    const message = "Hello, I'm interested in your jewellery collection";
    const url = `https://wa.me/${businessInfo.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=1920&h=1080&fit=crop"
          alt="Luxury gold jewellery"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay - Increased opacity for better text readability */}
        <div className="absolute inset-0 bg-slate-900/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.p 
            className="text-gold-600 text-sm uppercase tracking-widest mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            ✨ Serving Since {businessInfo.established}
          </motion.p>

          {/* Headline */}
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Crafting Trust Through Generations
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl text-white/90 font-medium max-w-2xl mx-auto mb-8 drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            100% BIS HUID Hallmarked Jewellery in Mau, Uttar Pradesh
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-gold-600 text-white hover:bg-gold-700 text-lg px-8 py-6"
            >
              <Link to="/collection">
                View Collection
              </Link>
            </Button>
            <Button
              onClick={handleWhatsAppClick}
              variant="outline"
              size="lg"
              className="bg-white text-slate-900 border-2 border-white hover:bg-gray-100 text-lg px-8 py-6"
            >
              WhatsApp Us
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
