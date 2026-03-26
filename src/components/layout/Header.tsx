import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { navLinks, businessInfo } from '@/data/mockData';
import { cn } from '@/lib/utils';

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleCall = () => {
    window.location.href = `tel:${businessInfo.phone}`;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold font-serif text-slate-900">
              {businessInfo.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-gold-600",
                  location.pathname === link.href 
                    ? "text-gold-600" 
                    : "text-slate-600"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              onClick={handleCall}
              className="bg-gold-600 text-white hover:bg-gold-700"
              size="sm"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-slate-900">
                <Menu className="w-5 h-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <nav className="flex flex-col space-y-4 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-gold-600",
                      location.pathname === link.href 
                        ? "text-gold-600" 
                        : "text-slate-600"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button 
                  onClick={() => {
                    handleCall();
                    setOpen(false);
                  }}
                  className="w-full bg-gold-600 text-white hover:bg-gold-700"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call {businessInfo.phone}
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
