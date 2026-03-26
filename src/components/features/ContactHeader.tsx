import { Badge } from '@/components/ui/badge';

export const ContactHeader = () => {
  return (
    <div className="container mx-auto px-4 py-12 text-center">
      <Badge className="bg-gold-600 text-white mb-4">Get in Touch</Badge>
      <h1 className="font-serif text-3xl md:text-4xl font-bold text-slate-900">
        Visit Our Store
      </h1>
      <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
        We'd love to help you find the perfect piece. Visit us or reach out anytime.
      </p>
    </div>
  );
};
