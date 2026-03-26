import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { reviews, businessInfo } from '@/data/mockData';

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="What Our Customers Say"
          subtitle="Trusted by thousands in Mau and beyond"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              className="bg-white rounded-lg p-6 shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-gold-500 text-gold-500"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-slate-700 italic mt-4 line-clamp-3 font-medium">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="mt-4">
                <p className="font-semibold text-slate-900">{review.user}</p>
                <span className="inline-block mt-2 bg-gold-50 text-gold-700 text-xs px-2 py-1 rounded font-medium">
                  Verified Google Review
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Signal */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-white border-2 border-gray-200 rounded-lg px-6 py-3 hover:border-gold-600 transition-colors"
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold-500 text-gold-500" />
              ))}
            </div>
            <div className="text-left">
              <p className="font-semibold text-slate-900">{businessInfo.rating} ★</p>
              <p className="text-xs text-slate-600 font-medium">({businessInfo.reviewCount} Reviews)</p>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
