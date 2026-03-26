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
    <header className="sticky top-0 z-50 w-full border-b bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 supports-[backdrop-filter]:bg-slate-900/95">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo with Golden Glow Effect */}
        <Link to="/" className="flex items-center space-x-2 group">
          <span className="font-serif text-xl md:text-2xl font-bold bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 bg-clip-text text-transparent drop-shadow-lg group-hover:drop-shadow-[0_0_10px_rgba(251,191,36,0.8)] transition-all duration-300">
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
                "text-white hover:text-gold-400",
                isActive(link.href) ? "text-gold-400" : "text-white"
              )}
            >
              {link.label}
              {/* Golden underline animation on hover */}
              <span className={cn(
                "absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-gold-400 to-gold-500 transition-all duration-300",
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
          <SheetContent side="right" className="w-full p-0 bg-slate-900 border-none [&>button]:hidden">
            <nav className="flex flex-col h-full">
              {/* Header with Close Button */}
              <div className="flex items-center justify-between p-6 border-b border-slate-700">
                <span className="font-serif text-lg font-bold bg-gradient-to-r from-gold-400 to-gold-500 bg-clip-text text-transparent">
                  {BUSINESS_INFO.name}
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-slate-800 text-gray-300 hover:text-white transition-colors"
                >
                  <X className="h-6 w-6" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </div>

              {/* Navigation Links - Full Screen with Blue Background */}
              <div className="flex-1 overflow-y-auto py-8 px-6">
                <div className="flex flex-col space-y-3">
                  {navLinks.map((link, index) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className="group relative overflow-hidden rounded-lg p-4 transition-all duration-300"
                      style={{
                        animation: `slideInRight 0.4s ease-out ${index * 0.1}s both`
                      }}
                    >
                      {/* Background gradient on hover */}
                      <span className="absolute inset-0 bg-gradient-to-r from-gold-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Content */}
                      <div className="relative flex items-center justify-between">
                        <span className={cn(
                          "text-lg font-medium transition-all duration-300",
                          isActive(link.href)
                            ? "text-gold-400"
                            : "text-white group-hover:text-gold-400"
                        )}>
                          {link.label}
                        </span>
                        {/* Arrow icon on hover */}
                        <span className="transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                          <svg className="w-5 h-5 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                      
                      {/* Bottom border animation */}
                      <span className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-gold-500 to-gold-400 w-0 group-hover:w-full transition-all duration-500" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Call Button - Footer */}
              <div className="p-6 border-t border-slate-700 bg-slate-800/50">
                <a href={`tel:${BUSINESS_INFO.phone}`}>
                  <Button className="w-full bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-700 hover:to-gold-600 text-white shadow-lg py-6 text-lg font-semibold transition-all hover:shadow-gold-500/20">
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
