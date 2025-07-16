import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { forwardRef } from "react";

interface MagicalButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "gold";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const MagicalButton = forwardRef<HTMLButtonElement, MagicalButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseClasses = "btn-mystical font-cinzel font-semibold transition-all duration-300";
    
    const variants = {
      primary: "bg-gradient-to-r from-emerald-dark to-emerald-medium hover:from-emerald-medium hover:to-emerald-dark text-white",
      secondary: "bg-emerald-dark hover:bg-emerald-medium text-white",
      gold: "bg-gold-soft hover:bg-gold-light text-black-rich"
    };
    
    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg"
    };

    return (
      <Button
        ref={ref}
        className={cn(
          baseClasses,
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </Button>
    );
  }
);

MagicalButton.displayName = "MagicalButton";

export { MagicalButton };
