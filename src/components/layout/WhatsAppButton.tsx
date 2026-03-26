import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { businessInfo } from '@/data/mockData';

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const message = "Hello Makhan Jewellers, I'm interested in your jewellery collection";
    const url = `https://wa.me/${businessInfo.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <motion.a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        handleWhatsAppClick();
      }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </motion.a>
  );
}
