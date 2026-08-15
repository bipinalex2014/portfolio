import Container from "@/components/ui/Container";
import NavLogo from "./NavLogo";
import NavLinks from "./NavLinks";
import ResumeButton from "./ResumeButton";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <NavLogo />
          <NavLinks />
          {/* Desktop */}
          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
            {/* <ResumeButton /> */}
          </div>

          {/* Mobile */}
          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <MobileMenu />
          </div>
          
        </div>
      </Container>
    </nav>
  );
}