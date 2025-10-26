import { Facebook, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

type Page = 'home' | 'services' | 'realisations' | 'partnership' | 'blog' | 'contact';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

function Footer({ onNavigate }: FooterProps) {
  return (
    <>
      {/* ✅ Barre tricolore avant le footer */}
      <div className="w-full h-2 flex">
        <div className="flex-1 bg-green-600"></div>
        <div className="flex-1 bg-yellow-400"></div>
        <div className="flex-1 bg-red-600"></div>
      </div>

      <footer className="bg-[#123E61] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#2F6FA5]">
                DOMOBRAND & SECURITY
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Votre partenaire de confiance pour le branding, la communication visuelle
                et les solutions de sécurité intelligentes.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    onClick={() => onNavigate('home')}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Accueil
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('services')}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('realisations')}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Réalisations
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('blog')}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Blog
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center space-x-2">
                  <Phone size={16} className="text-[#2F6FA5]" />
                  <span className="text-gray-300">+229 01 67 80 65 47</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail size={16} className="text-[#2F6FA5]" />
                  <a
                    href="mailto:contact@domobrand.com"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    contact@domobrand.com
                  </a>
                </li>
                <li className="flex items-start space-x-2">
                  <MapPin size={16} className="text-[#2F6FA5] mt-1" />
                  <span className="text-gray-300">Cotonou, Bénin</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Suivez-nous</h4>
              <div className="flex space-x-4 mb-6">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#195885] p-3 rounded-full hover:bg-[#2F6FA5] transition-colors"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#195885] p-3 rounded-full hover:bg-[#2F6FA5] transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#195885] p-3 rounded-full hover:bg-[#2F6FA5] transition-colors"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex space-x-6 text-sm text-gray-400">
                <button className="hover:text-white transition-colors">
                  Mentions légales
                </button>
                <button className="hover:text-white transition-colors">
                  CGU
                </button>
              </div>
              <p className="text-sm text-gray-400 text-center">
                Développé par Rénato TCHOBO © 2025 DOMOBRAND & SECURITY
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
