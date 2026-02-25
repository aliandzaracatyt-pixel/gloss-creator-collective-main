import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Why Gloss", href: "#why-gloss" },
    { label: "Process", href: "#process" },
    { label: "FAQ", href: "#faq" },
  ];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4" aria-label="Main navigation">
        <a href="#" className="flex items-center gap-1" aria-label="GLOSS MEDIA home">
          <span className="font-serif text-2xl font-bold tracking-wider text-foreground">GLOSS</span>
          <span className="font-serif text-2xl font-medium tracking-wider text-primary">MEDIA</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button onClick={scrollToContact} variant="default" size="lg" className="min-h-[48px] px-6">
            Book a Neuroinclusive Strategy Call
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-3 min-w-[48px] min-h-[48px] flex items-center justify-center"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden glass border-t border-border/50 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base font-medium text-muted-foreground hover:text-foreground py-2"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button onClick={scrollToContact} variant="default" size="lg" className="min-h-[48px] w-full mt-2">
            Book a Neuroinclusive Strategy Call
          </Button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
