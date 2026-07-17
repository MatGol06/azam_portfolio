import { cn } from "@/lib/utils";

export function Card({ className, children, ...props }) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-card border border-border p-6 shadow-lg backdrop-blur-sm transition-all duration-300",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
