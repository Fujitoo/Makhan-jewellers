"use client";

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { BUSINESS_INFO } from "@/lib/constants";
import { navLinks } from "@/data/mockData";
import { cn } from "@/lib/utils";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo with Golden Glow Effect */}
        <Link to="/" className="flex items-center space-x-2 group">
          <span className="font-serif text-xl md:text-2xl font-bold bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 bg-clip-text text-transparent drop-shadow-lg group-hover:drop-shadow-[0_0_8px_rgba(197,160,89,0.6)] transition-all duration-300">
            {BUSINESS_INFO.name}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "text-sm font-medium transition-all duration-300 relative py-2",
                "hover:text-gold-600",
                isActive(link.href) ? "text-gold-600" : "text-slate-700"
              )}
            >
              {link.label}
              {/* Golden underline animation on hover */}
              <span className={cn(
                "absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-gold-500 to-gold-600 transition-all duration-300",
                isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
              )} />
            </Link>
          ))}
        </nav>

        {/* Call Button - Desktop */}
        <div className="hidden md:block">
          <a href={`tel:${BUSINESS_INFO.phone}`}>
            <Button className="bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-700 hover:to-gold-600 text-white shadow-md hover:shadow-lg transition-all">
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </Button>
          </a>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-foreground">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:w-[400px] p-0 bg-white">
            <nav className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b">
                <span className="font-serif text-lg font-bold bg-gradient-to-r from-gold-600 to-gold-500 bg-clip-text text-transparent">
                  {BUSINESS_INFO.name}
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-gold-50"
                >
                  <X className="h-5 w-5 text-slate-700" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </div>

              {/* Navigation Links - Full Screen */}
              <div className="flex-1 overflow-y-auto py-8">
                <div className="flex flex-col space-y-2 px-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "text-lg font-medium py-4 px-4 rounded-lg transition-all duration-300 border-l-4",
                        isActive(link.href)
                          ? "bg-gold-50 text-gold-600 border-gold-600"
                          : "text-slate-700 border-transparent hover:bg-gold-50 hover:text-gold-600 hover:border-gold-400"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Call Button - Footer */}
              <div className="p-6 border-t bg-slate-50">
                <a href={`tel:${BUSINESS_INFO.phone}`}>
                  <Button className="w-full bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-700 hover:to-gold-600 text-white shadow-md py-6 text-lg">
                    <Phone className="mr-2 h-5 w-5" />
                    Call {BUSINESS_INFO.phone}
                  </Button>
                </a>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
