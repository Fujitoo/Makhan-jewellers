import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { BUSINESS_INFO, SOCIAL_LINKS } from "@/lib/constants";
import { navLinks } from "@/data/mockData";
import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { FacebookIcon } from "@/components/icons/FacebookIcon";

export const Footer = () => {
  return (
    <footer className="bg-luxury-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Column */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-gold-600 mb-4">
              {BUSINESS_INFO.name}
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Crafting exquisite jewellery since {BUSINESS_INFO.established}.
              Trusted for purity, quality, and timeless designs.
            </p>
            <div className="flex space-x-4">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gold-600 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-6 w-6" />
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gold-600 transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="text-gray-300 hover:text-gold-600 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gold-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">{BUSINESS_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gold-600 flex-shrink-0" />
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="text-gray-300 hover:text-gold-600 transition-colors text-sm"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gold-600 flex-shrink-0" />
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="text-gray-300 hover:text-gold-600 transition-colors text-sm"
                >
                  {BUSINESS_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-gold-600 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{BUSINESS_INFO.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-gray-700 mb-6" />

        {/* Bottom Bar */}
        <div className="text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
