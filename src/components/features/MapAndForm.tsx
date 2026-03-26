import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/constants';
import { toast } from 'sonner';

export const MapAndForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const interest = formData.get('interest') as string;
    const message = formData.get('message') as string;

    const text = `Hello, my name is ${name}. Phone: ${phone}. Interest: ${interest}. ${message}`;
    toast.success('Opening WhatsApp...');
    window.open(
      `https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(text)}`,
      '_blank'
    );
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column: Map */}
        <div>
          <div className="rounded-lg overflow-hidden shadow-lg h-[400px] bg-gray-200">
            <iframe
              src={BUSINESS_INFO.googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Makhan Jewellers Location"
            />
          </div>

          {/* Visit Store Card - Below Map */}
          <div className="mt-6 bg-white rounded-lg shadow-md border border-gray-100 p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gold-50 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-gold-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-slate-900 text-lg">Visit Store</h3>
                <p className="text-gray-700 mt-1">{BUSINESS_INFO.address}</p>
                <Button
                  className="mt-4 border-gold-600 text-gold-600 hover:bg-gold-50"
                  variant="outline"
                  asChild
                >
                  <a 
                    href="https://share.google/7geD9s1nynZTVcpqo"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Get Directions
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div>
          <h2 className="font-serif text-2xl font-bold text-slate-900 mb-2">
            Send Us a Message
          </h2>
          <p className="text-gray-600 mb-6">
            Fill out the form below and we'll get back to you
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-slate-900 font-medium">Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Your Name"
                required
                className="bg-white text-slate-900 placeholder:text-gray-400"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-slate-900 font-medium">Phone</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Your Phone Number"
                required
                className="bg-white text-slate-900 placeholder:text-gray-400"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="interest" className="text-slate-900 font-medium">Interest</Label>
              <Select name="interest" required>
                <SelectTrigger className="bg-white text-slate-900">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent className="z-[100] bg-white text-slate-900">
                  <SelectItem value="gold" className="text-slate-900">Gold Jewelry</SelectItem>
                  <SelectItem value="silver" className="text-slate-900">Silver Jewelry</SelectItem>
                  <SelectItem value="custom" className="text-slate-900">Custom Design</SelectItem>
                  <SelectItem value="other" className="text-slate-900">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-slate-900 font-medium">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="How can we help you?"
                rows={4}
                required
                className="bg-white text-slate-900 placeholder:text-gray-400"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-gold-600 hover:bg-gold-700 text-white py-3"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
