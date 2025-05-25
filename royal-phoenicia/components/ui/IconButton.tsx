import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const iconButtonVariants = cva(
  "group inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 px-4",
        sm: "h-9 px-3",
        lg: "h-11 px-6",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  icon: React.ReactNode;
  label?: string;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon, label, className, variant, size, ...props }, ref) => {
    return (
    <button
        ref={ref}
        className={cn(
          "relative flex items-center justify-center",
          iconButtonVariants({ variant, size, className })
        )}
        {...props}
      >
        <span className="group relative flex items-center justify-center w-10 h-10">
         
          <span className="absolute inset-0 flex items-center justify-center transition-all  duration-1000 group-hover:opacity-0">
            {icon}
          </span>

          {label && (
            <span className="absolute inset-0 flex items-center justify-center text-md font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
              {label}
            </span>
          )}
        </span>
      </button>

    );
  }
);

IconButton.displayName = "IconButton";
