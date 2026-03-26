import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface TrustBadgeProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  className?: string;
  delay?: number;
}

export const TrustBadge = ({ icon: IconComponent, title, subtitle, className }: TrustBadgeProps) => {
  return (
    <div className={cn(
      "flex flex-col items-center text-center p-4",
      className
    )}>
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-gold-500 to-gold-600 text-white mb-4 shadow-md">
        <IconComponent className="h-8 w-8" />
      </div>
      <h3 className="font-bold text-slate-900 text-base mb-1">{title}</h3>
      <p className="text-sm text-slate-700 font-semibold">{subtitle}</p>
    </div>
  );
};
