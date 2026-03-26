import { Award, Shield, Star, Gem } from 'lucide-react';
import { TrustBadge } from '@/components/shared/TrustBadge';

export function TrustBar() {
  return (
    <section className="bg-white py-12 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <TrustBadge
            icon={Award}
            title="30+ Years Experience"
            subtitle="Serving since 1994"
            delay={0}
          />
          <TrustBadge
            icon={Shield}
            title="BIS HUID Hallmarked"
            subtitle="100% Pure Gold"
            delay={0.1}
          />
          <TrustBadge
            icon={Star}
            title="5.0★ Google Rated"
            subtitle="Trusted by thousands"
            delay={0.2}
          />
          <TrustBadge
            icon={Gem}
            title="Custom Designs"
            subtitle="Made to order"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
}
