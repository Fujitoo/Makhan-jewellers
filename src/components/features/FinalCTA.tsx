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
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C5A059' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-white mb-4">
            Ready to Find Your Perfect Piece?
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
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
