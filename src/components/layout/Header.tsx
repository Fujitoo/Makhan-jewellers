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
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <span className="font-serif text-xl font-bold text-gold-600 md:text-2xl">
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
                "text-sm font-medium transition-colors hover:text-gold-600",
                isActive(link.href) ? "text-gold-600" : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Call Button - Desktop */}
        <div className="hidden md:block">
          <a href={`tel:${BUSINESS_INFO.phone}`}>
            <Button className="bg-gold-600 hover:bg-gold-700 text-white">
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
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col space-y-6 mt-8">
              <div className="flex items-center justify-between">
                <span className="font-serif text-lg font-bold text-gold-600">
                  {BUSINESS_INFO.name}
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </div>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-gold-600",
                    isActive(link.href) ? "text-gold-600" : "text-muted-foreground"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <a href={`tel:${BUSINESS_INFO.phone}`}>
                <Button className="w-full bg-gold-600 hover:bg-gold-700 text-white mt-4">
                  <Phone className="mr-2 h-4 w-4" />
                  Call {BUSINESS_INFO.phone}
                </Button>
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
