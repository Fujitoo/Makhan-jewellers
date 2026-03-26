import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeading = ({
  title,
  subtitle,
  centered = true,
  className
}: SectionHeadingProps) => {
  return (
    <div className={cn(
      "mb-12",
      centered && "text-center",
      className
    )}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-slate-900 mb-4">
        {title}
      </h2>
      {subtitle && (
        <div className="flex items-center justify-center gap-2">
          <div className="h-0.5 w-12 bg-gold-600" />
          <p className="text-slate-600 text-base md:text-lg max-w-2xl">
            {subtitle}
          </p>
          <div className="h-0.5 w-12 bg-gold-600" />
        </div>
      )}
    </div>
  );
};
