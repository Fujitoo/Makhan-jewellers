import { ContactHeader } from '@/components/features/ContactHeader';
import { ContactInfoCards } from '@/components/features/ContactInfoCards';
import { MapAndForm } from '@/components/features/MapAndForm';
import { BusinessHours } from '@/components/features/BusinessHours';
import { FAQSection } from '@/components/features/FAQSection';
import { SocialMediaSection } from '@/components/features/SocialMediaSection';
import { WhatsAppFloat } from '@/components/shared/WhatsAppFloat';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* SEO Meta Tags would be handled by react-helmet or similar in production */}
      {/* 
        <title>Contact Us | Makhan Jewellers | Mau, Uttar Pradesh</title>
        <meta name="description" content="Visit Makhan Jewellers near Halima Hospital, Munshi Pura, Mau. Call 099564 84670. Open Mon-Sat 10am-9pm. BIS Hallmarked Jewellery." />
      */}

      {/* Local Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'JewelryStore',
            name: 'Makhan Jewellers',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Near Halima Hospital, Munshi Pura',
              addressLocality: 'Mau',
              addressRegion: 'Uttar Pradesh',
              postalCode: '275101',
              addressCountry: 'IN',
            },
            telephone: '+91-99564-84670',
            openingHours: 'Mo-Sa 10:00-21:00',
          }),
        }}
      />

      {/* Page Header */}
      <ContactHeader />

      {/* Contact Info Cards */}
      <ContactInfoCards />

      {/* Map & Contact Form */}
      <MapAndForm />

      {/* Business Hours */}
      <BusinessHours />

      {/* FAQ Section */}
      <FAQSection />

      {/* Social Media Section */}
      <SocialMediaSection />

      {/* Floating WhatsApp Button */}
      <WhatsAppFloat />
    </div>
  );
};

export default Contact;
