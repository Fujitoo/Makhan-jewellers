import { useEffect } from 'react';
import { Hero } from '@/components/features/Hero';
import { TrustBar } from '@/components/features/TrustBar';
import { FeaturedCollection } from '@/components/features/FeaturedCollection';
import { AboutSnippet } from '@/components/features/AboutSnippet';
import { TestimonialsSection } from '@/components/features/TestimonialsSection';
import { FinalCTA } from '@/components/features/FinalCTA';
import { businessInfo } from '@/data/mockData';

export function Home() {
  // SEO Meta Tags
  useEffect(() => {
    document.title = `${businessInfo.name} | BIS Hallmarked Jewellery in Mau | Since ${businessInfo.established}`;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    const description = `Trusted jewellery store in Mau, Uttar Pradesh. 100% BIS HUID Hallmarked gold, silver, diamond jewellery. Serving since ${businessInfo.established}. Visit us near Halima Hospital.`;
    
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    const metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    metaKeywords.content = 'jeweller Mau, gold jewellery Mau, BIS hallmarked, Makhan Jewellers, Munshipura jewellery, wedding jewellery';
    document.head.appendChild(metaKeywords);

    return () => {
      document.head.removeChild(metaKeywords);
    };
  }, []);

  return (
    <main className="min-h-screen">
      <Hero />
      <TrustBar />
      <FeaturedCollection />
      <AboutSnippet />
      <TestimonialsSection />
      <FinalCTA />
    </main>
  );
}
