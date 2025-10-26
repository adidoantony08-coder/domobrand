import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

type Page = 'home' | 'services' | 'realisations' | 'partnership' | 'blog' | 'contact';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { page: Page; label: string }[] = [
    { page: 'home', label: 'Accueil' },
    { page: 'services', label: 'Services' },
    { page: 'realisations', label: 'Réalisations' },
    { page: 'partnership', label: 'Partenariat & Devis' },
    { page: 'blog', label: 'Blog' },
    { page: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`relative fixed top-0 left-0 right-0 z-50 transition-all duration-300 
      overflow-hidden rounded-b-2xl
      ${isScrolled ? 'shadow-xl shadow-blue-500/20' : ''}`}
    >
      {/* --- Lumière bleue/blanche diffuse derrière --- */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-400/10 via-slate-900 to-slate-950 blur-2xl" />

      {/* --- Animation du contour lumineux --- */}
      <div className="absolute inset-0 rounded-b-2xl pointer-events-none border border-transparent before:absolute before:inset-0 before:rounded-b-2xl before:border-2 before:border-blue-400/40 before:animate-borderGlow" />

      {/* --- Contenu du header --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer select-none"
            onClick={() => handleNavClick('home')}
          >
            <div className="text-2xl font-bold text-white drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]">
              DOMOBRAND <span className="text-amber-400">&</span> SECURITY
            </div>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400/40 px-1 py-1 rounded-sm ${
                  currentPage === item.page
                    ? 'text-white border-b-2 border-amber-400 drop-shadow-[0_0_5px_rgba(255,255,255,0.7)]'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* CTA bouton */}
            <button
              onClick={() => handleNavClick('partnership')}
              className="ml-4 bg-amber-400 text-slate-900 px-5 py-2 rounded-full text-sm font-semibold hover:bg-amber-300 transition-all duration-300 shadow-md"
            >
              Demander un devis
            </button>
          </nav>

          {/* Mobile Menu Icon */}
          <button
            className="lg:hidden text-slate-200 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Ouvrir le menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-slate-900/95 backdrop-blur-lg text-white shadow-xl transform transition-transform duration-300 ease-in-out z-40 ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="flex justify-between items-center px-5 py-5 border-b border-slate-800">
          <div className="text-lg font-bold">Menu</div>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-slate-200 hover:text-white"
            aria-label="Fermer le menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-col px-4 py-6 space-y-3">
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => handleNavClick(item.page)}
              className={`text-left text-sm font-medium rounded-lg px-4 py-3 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400/30 ${
                currentPage === item.page
                  ? 'bg-amber-400/10 text-white'
                  : 'text-slate-200 hover:bg-slate-800'
              }`}
            >
              {item.label}
            </button>
          ))}

          <button
            onClick={() => handleNavClick('partnership')}
            className="mt-6 bg-amber-400 text-slate-900 w-full py-3 rounded-full text-sm font-semibold hover:bg-amber-300 transition-all duration-300"
          >
            Demander un devis
          </button>
        </nav>

        <div className="mt-auto px-4 py-6 border-t border-slate-800 text-sm text-slate-400">
          <div>Contact rapide</div>
          <div className="mt-2">info@domobrand.example</div>
        </div>
      </div>

      {/* Overlay mobile */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
}

export default Header;
