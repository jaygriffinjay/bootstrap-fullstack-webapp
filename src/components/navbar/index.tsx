import { NavMenu } from "./nav-menu";
import { cn } from "@/lib/utils";
import styles from "./navbar.module.css";

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  return (
    <header className={cn(styles.header, className)}>
      <div className={styles.inner}>
        <NavMenu />
      </div>
    </header>
  );
}
