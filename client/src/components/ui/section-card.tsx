import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

interface SectionCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "mystical" | "grimoire" | "scroll";
  hover?: boolean;
}

export function SectionCard({ children, className, variant = "mystical", hover = true }: SectionCardProps) {
  const variants = {
    mystical: "card-mystical",
    grimoire: "grimoire-card",
    scroll: "scroll-bg"
  };

  return (
    <Card className={cn(
      variants[variant],
      hover && "card-hover",
      "transition-all duration-300",
      className
    )}>
      <CardContent className="p-6 h-full">
        {children}
      </CardContent>
    </Card>
  );
}
