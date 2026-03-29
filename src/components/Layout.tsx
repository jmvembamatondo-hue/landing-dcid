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

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl" style={{ color: "#185FA5" }}>
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

            {/* Hamburger — mobile only */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px]"
              aria-label="Ouvrir le menu"
              onClick={() => setMenuOpen(true)}
            >
              <span className="block w-6 h-[2px] bg-gray-800" />
              <span className="block w-6 h-[2px] bg-gray-800" />
              <span className="block w-6 h-[2px] bg-gray-800" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay — OUTSIDE header to avoid stacking context issues */}
      <div
        aria-hidden={!menuOpen}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          backgroundColor: "#ffffff",
          zIndex: 9999,
          display: "flex",
          flexDirection: "column",
          transition: "transform 0.25s ease, opacity 0.25s ease",
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
        }}
        className="md:hidden"
      >
        {/* Overlay top bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 24px",
            height: "64px",
            borderBottom: "1px solid #e5e7eb",
            backgroundColor: "#ffffff",
          }}
        >
          <Link
            to="/"
            style={{ fontWeight: 700, fontSize: "1.25rem", color: "#185FA5", textDecoration: "none" }}
            onClick={() => setMenuOpen(false)}
          >
            DCID-RH
          </Link>
          <button
            aria-label="Fermer le menu"
            onClick={() => setMenuOpen(false)}
            style={{
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#111827" strokeWidth="2.5" strokeLinecap="round">
              <line x1="4" y1="4" x2="18" y2="18" />
              <line x1="18" y1="4" x2="4" y2="18" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "32px 24px",
            gap: 0,
            flex: 1,
            backgroundColor: "#ffffff",
          }}
        >
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: "1.125rem",
                fontWeight: 500,
                color: pathname === to ? "#185FA5" : "#111827",
                textDecoration: "none",
                padding: "16px 0",
                borderBottom: "1px solid #f3f4f6",
                display: "block",
              }}
            >
              {label}
            </Link>
          ))}

          <div style={{ marginTop: "32px" }}>
            <Link to="/contact" onClick={() => setMenuOpen(false)} style={{ textDecoration: "none" }}>
              <button
                style={{
                  width: "100%",
                  padding: "14px 24px",
                  backgroundColor: "#185FA5",
                  color: "#ffffff",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  borderRadius: "9999px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Demander une démo
              </button>
            </Link>
          </div>
        </nav>
      </div>
    </>
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
