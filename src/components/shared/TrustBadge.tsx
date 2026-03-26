import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface TrustBadgeProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  delay?: number;
}

export function TrustBadge({ icon: Icon, title, subtitle, delay = 0 }: TrustBadgeProps) {
  return (
    <motion.div
      className="flex flex-col items-center text-center p-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gold-50 mb-3">
        <Icon className="w-6 h-6 text-gold-600" />
      </div>
      <h3 className="font-semibold text-slate-900 mb-1">{title}</h3>
      <p className="text-sm text-gray-600">{subtitle}</p>
    </motion.div>
  );
}
