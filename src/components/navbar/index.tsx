import { siteConfig } from "@/site";
import { NavMenu } from "./nav-menu";
import { cn } from "@/lib/utils";

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  // Logo: image if available, emoji as fallback
  const logoSrc = siteConfig.logo.png ?? siteConfig.logo.svg;

  return (
    <header
      className={cn(
        "border-border/40 bg-background/80 sticky top-0 z-40 border-b backdrop-blur-md",
        className,
      )}
    >
      <div className="mx-auto flex h-14 max-w-xl items-center justify-between px-4">
        {/* Left: logo + title */}
        <div className="flex items-center gap-2.5">
          {logoSrc ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={logoSrc}
              alt={siteConfig.name}
              className="size-7 rounded-md object-contain"
            />
          ) : (
            <span className="text-xl leading-none" aria-hidden>
              {siteConfig.logo.emoji}
            </span>
          )}
          <span
            className="text-foreground text-sm font-semibold tracking-tight"
            style={{ fontFamily: "var(--font-geist-sans)" }}
          >
            {siteConfig.name}
          </span>
        </div>

        {/* Right: hamburger menu (links come from routes.ts) */}
        <NavMenu />
      </div>
    </header>
  );
}
