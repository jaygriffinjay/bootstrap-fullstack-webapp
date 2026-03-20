"use client";

import { MenuIcon, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { navRoutes } from "./routes";
import NextLink from "next/link";

interface NavMenuProps {
  className?: string;
}

export function NavMenu({ className }: NavMenuProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "size-9 text-muted-foreground hover:text-foreground hover:!bg-transparent focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0",
            className,
          )}
          aria-label="Open menu"
        >
          <MenuIcon className="size-5" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-48">
        {navRoutes.map((link) => (
          <DropdownMenuItem key={link.href} asChild>
            <NextLink href={link.href}>{link.label}</NextLink>
          </DropdownMenuItem>
        ))}

        <DropdownMenuSeparator />

        {/* Theme toggle — icon shows what you'd switch TO */}
        <DropdownMenuItem
          onSelect={(e) => e.preventDefault()}
          onClick={() => setTheme(isDark ? "light" : "dark")}
          className="flex items-center justify-between"
        >
          <span>Theme</span>
          {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
