import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { clsx } from "clsx";
import { Button } from "./ui/button";

const navLinks = [
  { to: "/", label: "Accueil" },
  { to: "/product", label: "Produit" },
  { to: "/use-cases", label: "Cas d'usage" },
  { to: "/why", label: "Pourquoi DCID-RH" },
  { to: "/about", label: "À propos" },
  { to: "/contact", label: "Contact" },
];

function Navbar() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl text-primary">
          DCID-RH
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.slice(0, 5).map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={clsx(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === to ? "text-primary" : "text-muted-foreground"
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/contact" className="hidden md:block">
            <Button size="sm" className="rounded-full">
              Demander une démo
            </Button>
          </Link>

          {/* Hamburger button — mobile only */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Ouvrir le menu"
            onClick={() => setMenuOpen(true)}
          >
            <span className="block w-5 h-0.5 bg-foreground rounded" />
            <span className="block w-5 h-0.5 bg-foreground rounded" />
            <span className="block w-5 h-0.5 bg-foreground rounded" />
          </button>
        </div>
      </div>

      {/* Mobile full-screen overlay */}
      <div
        className={clsx(
          "fixed inset-0 z-50 flex flex-col bg-white transition-all duration-300 ease-in-out md:hidden",
          menuOpen
            ? "opacity-100 translate-x-0 pointer-events-auto"
            : "opacity-0 translate-x-full pointer-events-none"
        )}
      >
        {/* Overlay header */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-border/40">
          <Link to="/" className="font-bold text-xl text-primary" onClick={() => setMenuOpen(false)}>
            DCID-RH
          </Link>
          <button
            className="flex items-center justify-center w-9 h-9 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Fermer le menu"
            onClick={() => setMenuOpen(false)}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="4" y1="4" x2="16" y2="16" />
              <line x1="16" y1="4" x2="4" y2="16" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col px-6 py-8 gap-2 flex-1">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={clsx(
                "text-lg font-medium py-3 border-b border-border/30 transition-colors hover:text-primary",
                pathname === to ? "text-primary" : "text-foreground"
              )}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}

          <div className="mt-6">
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              <Button size="sm" className="rounded-full w-full" style={{ backgroundColor: "#185FA5" }}>
                Demander une démo
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/40 bg-slate-50/50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="font-bold text-xl text-primary mb-3">DCID-RH</div>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              La plateforme HR Tech qui mesure la compatibilité culturelle pour des décisions RH éclairées.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">Produit</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/product" className="hover:text-primary transition-colors">Fonctionnalités</Link></li>
              <li><Link to="/use-cases" className="hover:text-primary transition-colors">Cas d'usage</Link></li>
              <li><Link to="/why" className="hover:text-primary transition-colors">Pourquoi DCID-RH</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">Entreprise</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary transition-colors">À propos</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/40 text-sm text-muted-foreground text-center">
          © {new Date().getFullYear()} DCID-RH. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
