import { cn } from "@/lib/utils";

export function Badge({ className, variant = "default", children, ...props }) {
  const variants = {
    default: "bg-surface border-border text-muted",
    success: "bg-success/10 border-success/20 text-success",
    primary: "bg-primary/10 border-primary/20 text-primary",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-colors",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
