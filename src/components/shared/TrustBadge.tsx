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
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-100 text-gold-600 mb-4">
        <IconComponent className="h-8 w-8" />
      </div>
      <h3 className="font-semibold text-foreground mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground">{subtitle}</p>
    </div>
  );
};
