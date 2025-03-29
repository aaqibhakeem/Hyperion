import { cn } from "@/lib/utils";
import { type HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function Container({
  children,
  className,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "px-4 md:px-6 lg:px-8",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
