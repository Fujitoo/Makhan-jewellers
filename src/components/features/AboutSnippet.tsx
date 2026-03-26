import { motion } from 'framer-motion';
import { businessInfo } from '@/data/mockData';

export function AboutSnippet() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?w=800&h=600&fit=crop"
                alt="Makhan Jewellers store interior"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              {/* Overlay Badge */}
              <div className="absolute bottom-4 left-4 bg-gold-600 text-white px-4 py-2 rounded font-semibold">
                Est. {businessInfo.established}
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold-600 text-sm uppercase tracking-wider font-medium mb-2">
              About Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-slate-900 mb-6">
              A Legacy of Trust in Munshipura
            </h2>
            
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p className="font-medium">
                For over 30 years, Makhan Jewellers has been serving the people of Mau with pure, hallmarked jewellery.
              </p>
              <p className="font-medium">
                Located near Halima Hospital in Munshi Pura, we specialize in traditional and contemporary designs for weddings, festivals, and special occasions.
              </p>
              <p className="font-medium">
                Every piece is BIS HUID certified, ensuring 100% purity and your complete trust.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-8">
              <div>
                <p className="text-2xl font-bold text-gold-600">30+</p>
                <p className="text-sm text-slate-600 font-medium">Years</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gold-600">5000+</p>
                <p className="text-sm text-slate-600 font-medium">Happy Customers</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gold-600">100%</p>
                <p className="text-sm text-slate-600 font-medium">Hallmarked</p>
              </div>
            </div>

            {/* CTA Link */}
            <a
              href="/about"
              className="inline-block mt-8 text-gold-600 font-medium hover:underline"
            >
              Learn More About Us →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
