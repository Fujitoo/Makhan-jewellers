"use client";

import { Button } from "@/components/ui/button";
import { BUSINESS_INFO } from "@/lib/constants";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export const WhatsAppFloat = () => {
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsapp}`;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
          >
            <Button
              className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg transition-transform hover:scale-110 max-[400px]:h-11 max-[400px]:w-11"
              size="icon"
            >
              <WhatsAppIcon className="h-6 w-6 sm:h-8 sm:w-8" />
            </Button>
          </a>
        </TooltipTrigger>
        <TooltipContent side="left" className="bg-slate-900 text-white">
          <p>Chat on WhatsApp</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
