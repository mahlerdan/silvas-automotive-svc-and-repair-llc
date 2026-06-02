import { Link, useLocation } from "wouter";
import { Phone, MapPin, Clock, Menu, X, ShieldAlert, Hammer, Star } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <div className="min-h-screen flex flex-col relative industrial-grid">
      {/* Top Technical Bar */}
      <div className="bg-black/80 border-b border-border text-[11px] font-mono py-1.5 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-muted-foreground">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              STATUS: GARAGE OPEN
            </span>
            <span className="text-border">|</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-primary" />
              695 YELLOWSTONE AVE, IDAHO FALLS, ID
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-primary" />
              MON - FRI: 8:00 AM - 5:00 PM
            </span>
            <span className="text-border">|</span>
            <a href="tel:2085280092" className="text-primary hover:text-primary/80 transition-colors font-bold flex items-center gap-1">
              <Phone className="w-3.5 h-3.5" />
              (208) 528-0092
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled ? "bg-black/95 border-b border-primary/40 shadow-lg shadow-primary/5" : "bg-black/80 border-b border-border"
      }`}>
        <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative bg-primary text-primary-foreground p-2.5 flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-200">
              <Hammer className="w-6 h-6" />
              <div className="absolute -top-1 -left-1 w-1.5 h-1.5 bg-black" />
              <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-black" />
            </div>
            <div>
              <div className="font-display text-xl sm:text-2xl font-black tracking-tight leading-none text-foreground group-hover:text-primary transition-colors">
                SILVA'S <span className="text-primary">AUTOMOTIVE</span>
              </div>
              <div className="text-[10px] font-mono text-muted-foreground tracking-widest mt-0.5">
                SVC & REPAIR LLC
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = location === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 font-display text-sm tracking-wider uppercase relative transition-colors ${
                    isActive ? "text-primary font-bold" : "text-foreground/80 hover:text-primary"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Header CTA Button */}
          <div className="hidden md:block">
            <Button asChild variant="default" className="font-display tracking-wider uppercase rounded-none metal-shine px-6 bg-primary text-primary-foreground hover:bg-primary/90 border border-primary/50 relative active:scale-95 transition-transform">
              <a href="tel:2085280092" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                CALL NOW: (208) 528-0092
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors border border-border bg-card"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 border-b border-border py-4 px-4 animate-in fade-in slide-in-from-top-4 duration-200">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = location === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`py-3 px-4 font-display text-base tracking-wider uppercase border-l-2 transition-all ${
                      isActive ? "border-primary bg-primary/10 text-primary font-bold" : "border-transparent text-foreground/80 hover:bg-card hover:text-primary"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <div className="mt-4 pt-4 border-t border-border">
                <Button asChild className="w-full font-display tracking-wider uppercase rounded-none py-6 bg-primary text-primary-foreground">
                  <a href="tel:2085280092" className="flex items-center justify-center gap-2">
                    <Phone className="w-5 h-5" />
                    (208) 528-0092
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black border-t-2 border-primary/40 mt-auto pt-16 pb-24 md:pb-16 relative overflow-hidden">
        {/* Decorative corner lines for raw industrial feel */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary" />

        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand and Tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-primary text-primary-foreground p-2 flex items-center justify-center">
                <Hammer className="w-5 h-5" />
              </div>
              <span className="font-display text-xl font-black tracking-tight text-foreground">
                SILVA'S <span className="text-primary">AUTOMOTIVE</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm">
              Professional automotive service and repair in Idaho Falls, ID. From complex engine diagnostics to routine oil changes, we keep your vehicle running strong with certified expertise.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground pt-2">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span>4.2 Stars (108 Google Reviews)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-display text-lg tracking-wider text-foreground border-b border-border pb-2">
              QUICK <span className="text-primary">LINKS</span>
            </h3>
            <ul className="grid grid-cols-2 gap-2 font-mono text-sm">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
                    <span className="text-primary">▶</span> {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Location */}
          <div className="space-y-4">
            <h3 className="font-display text-lg tracking-wider text-foreground border-b border-border pb-2">
              GARAGE <span className="text-primary">INFO</span>
            </h3>
            <div className="space-y-3 text-sm text-muted-foreground font-mono">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-foreground font-sans font-bold">Silva's Automotive SVC & Repair LLC</p>
                  <p>695 Yellowstone Ave</p>
                  <p>Idaho Falls, ID 83402</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:2085280092" className="text-foreground hover:text-primary font-bold transition-colors">
                  (208) 528-0092
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p>Monday - Friday</p>
                  <p className="text-foreground">8:00 AM - 5:00 PM</p>
                  <p className="text-xs text-amber-500 mt-1">Saturday - Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Technical / Copyright */}
        <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-muted-foreground">
          <p>© {new Date().getFullYear()} Silva's Automotive SVC & Repair LLC. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <ShieldAlert className="w-4 h-4 text-primary" />
              Idaho Falls Certified Techs
            </span>
            <span>|</span>
            <span>Design by Summit Forge Digital</span>
          </div>
        </div>
      </footer>

      {/* Floating / Sticky Mobile Call CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden p-4 bg-black/95 border-t border-primary/40 backdrop-blur-md">
        <Button asChild className="w-full font-display tracking-wider uppercase rounded-none py-6 bg-primary text-primary-foreground text-base shadow-lg shadow-primary/20 relative active:scale-95 transition-transform">
          <a href="tel:2085280092" className="flex items-center justify-center gap-3">
            <Phone className="w-5 h-5 fill-primary-foreground animate-bounce" />
            TAP TO CALL: (208) 528-0092
          </a>
        </Button>
      </div>
    </div>
  );
}
