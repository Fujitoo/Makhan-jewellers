import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { faqs } from '@/lib/mockData';

export const FAQSection = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h2 className="font-serif text-2xl font-bold text-slate-900 text-center mb-8">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, idx) => (
          <AccordionItem key={idx} value={`item-${idx}`}>
            <AccordionTrigger className="text-slate-900 font-medium">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
