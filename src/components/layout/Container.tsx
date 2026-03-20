import { cn } from "@/lib/utils";

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

/**
 * Centered max-width content container.
 * Defaults to max-w-xl (576px) with standard page margins.
 * Override width via className: <Container className="max-w-4xl">
 */
export function Container({ className, children }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-xl px-4",
        "mt-16 mb-80 max-sm:mb-48",
        className,
      )}
    >
      {children}
    </div>
  );
}
