import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { businessInfo } from '@/data/mockData';

export function FinalCTA() {
  const handleCall = () => {
    window.location.href = `tel:${businessInfo.phone}`;
  };

  return (
    <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Decorative Golden Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold-600/5 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-white mb-4 drop-shadow-lg">
            Ready to Find Your Perfect Piece?
          </h2>
          <p className="text-white/90 text-lg font-medium max-w-2xl mx-auto mb-8 drop-shadow-md">
            Visit our store or WhatsApp us for personalized assistance
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gold-600 text-white hover:bg-gold-700 text-lg px-8 py-6"
            >
              <Link to="/contact">
                Visit Our Store
              </Link>
            </Button>
            <Button
              onClick={handleCall}
              variant="outline"
              size="lg"
              className="bg-white text-slate-900 border-2 border-white hover:bg-gray-100 text-lg px-8 py-6"
            >
              Call Now: {businessInfo.phone}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
