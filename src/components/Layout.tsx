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
  const scrollYRef = { current: 0 };

  const close = () => setMenuOpen(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (menuOpen) {
      // iOS-safe scroll lock: freeze body at current scroll position
      scrollYRef.current = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollYRef.current}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflow = "hidden";
    } else {
      // Restore scroll position on close
      const savedY = scrollYRef.current;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
      window.scrollTo(0, savedY);
    }
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header style={{ position: "sticky", top: 0, zIndex: 40, width: "100%", backgroundColor: "#ffffff", borderBottom: "1px solid #e5e7eb" }}>
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
              className="md:hidden"
              aria-label="Ouvrir le menu"
              onClick={() => setMenuOpen(true)}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "5px",
                width: "40px",
                height: "40px",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            >
              <span style={{ display: "block", width: "24px", height: "2px", backgroundColor: "#111827", borderRadius: "2px" }} />
              <span style={{ display: "block", width: "24px", height: "2px", backgroundColor: "#111827", borderRadius: "2px" }} />
              <span style={{ display: "block", width: "24px", height: "2px", backgroundColor: "#111827", borderRadius: "2px" }} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile fullscreen overlay — rendered as sibling to avoid stacking context from header */}
      {menuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navigation"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "#ffffff",
            zIndex: 9999,
            display: "flex",
            flexDirection: "column",
            overscrollBehavior: "contain",
          }}
        >
          {/* Top bar */}
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 24px",
            height: "64px",
            borderBottom: "1px solid #e5e7eb",
            flexShrink: 0,
          }}>
            <Link
              to="/"
              style={{ fontWeight: 700, fontSize: "1.25rem", color: "#185FA5", textDecoration: "none" }}
              onClick={close}
            >
              DCID-RH
            </Link>
            <button
              aria-label="Fermer le menu"
              onClick={close}
              style={{
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#111827" strokeWidth="2.5" strokeLinecap="round">
                <line x1="4" y1="4" x2="18" y2="18" />
                <line x1="18" y1="4" x2="4" y2="18" />
              </svg>
            </button>
          </div>

          {/* Links */}
          <nav style={{
            display: "flex",
            flexDirection: "column",
            padding: "24px 24px",
            overflowY: "auto",
            flex: 1,
          }}>
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={close}
                style={{
                  fontSize: "1.125rem",
                  fontWeight: 500,
                  color: pathname === to ? "#185FA5" : "#111827",
                  textDecoration: "none",
                  padding: "18px 0",
                  borderBottom: "1px solid #f3f4f6",
                  display: "block",
                  lineHeight: 1.4,
                }}
              >
                {label}
              </Link>
            ))}

            <div style={{ marginTop: "32px" }}>
              <Link to="/contact" onClick={close} style={{ textDecoration: "none" }}>
                <button style={{
                  width: "100%",
                  padding: "14px 24px",
                  backgroundColor: "#185FA5",
                  color: "#ffffff",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  borderRadius: "9999px",
                  border: "none",
                  cursor: "pointer",
                }}>
                  Demander une démo
                </button>
              </Link>
            </div>
          </nav>
        </div>
      )}
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
