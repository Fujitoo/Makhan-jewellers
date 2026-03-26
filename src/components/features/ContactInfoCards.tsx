import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BUSINESS_INFO } from '@/lib/constants';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';

export const ContactInfoCards = () => {
  const cards = [
    {
      icon: Phone,
      iconBg: 'bg-gold-50',
      iconColor: 'text-gold-600',
      title: 'Call Us',
      content: BUSINESS_INFO.phone,
      subtext: 'Mon-Sat, 10am-9pm',
      actionText: 'Call Now',
      actionLink: `tel:+91${BUSINESS_INFO.phone}`,
      variant: 'outline' as const,
    },
    {
      icon: WhatsAppIcon,
      iconBg: 'bg-green-50',
      iconColor: 'text-green-500',
      title: 'WhatsApp Us',
      content: 'Quick Response',
      subtext: 'We usually reply within 1 hour',
      actionText: 'Chat on WhatsApp',
      actionLink: `https://wa.me/${BUSINESS_INFO.whatsapp}`,
      variant: 'default' as const,
      customClass: 'bg-green-500 hover:bg-green-600',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-md border border-gray-100 p-6 hover:shadow-lg transition"
          >
            <div
              className={`w-16 h-16 ${card.iconBg} rounded-full flex items-center justify-center mb-4`}
            >
              <card.icon className={`w-8 h-8 ${card.iconColor}`} />
            </div>
            <h3 className="font-semibold text-slate-900 text-lg">{card.title}</h3>
            <p className="text-gray-700 mt-2">{card.content}</p>
            <p className="text-sm text-gray-500 mt-1">{card.subtext}</p>
            <Button
              className={`w-full mt-4 ${
                card.variant === 'outline'
                  ? 'border-gold-600 text-gold-600 hover:bg-gold-50'
                  : card.customClass
              }`}
              variant={card.variant}
              asChild
            >
              <a
                href={card.actionLink}
                target={card.actionLink.startsWith('http') ? '_blank' : '_self'}
                rel={card.actionLink.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {card.actionText}
              </a>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
