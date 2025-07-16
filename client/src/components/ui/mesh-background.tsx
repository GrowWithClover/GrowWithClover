import { cn } from "@/lib/utils";

interface MeshBackgroundProps {
  children: React.ReactNode;
  className?: string;
  variant?: "light" | "dark";
}

export function MeshBackground({ children, className, variant = "light" }: MeshBackgroundProps) {
  return (
    <div 
      className={cn(
        variant === "light" ? "mesh-bg bg-black-rich" : "mesh-bg-dark bg-black-medium",
        className
      )}
    >
      {children}
    </div>
  );
}
