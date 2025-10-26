import { useEffect, useRef } from 'react';
import {
  Palette,
  Printer,
  Car,
  Lightbulb,
  Camera,
  Lock,
  Bell,
  Zap,
  Phone,
  Video,
  Shield,
  Grid,
} from 'lucide-react';

type Page = 'partnership';

interface ServicesProps {
  onNavigate: (page: Page) => void;
}

function Services({ onNavigate }: ServicesProps) {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const brandingServices = [
    {
      icon: Palette,
      title: 'Autocollants & Vinyles',
      description: 'Création et pose d\'autocollants personnalisés pour tous supports',
    },
    {
      icon: Grid,
      title: 'Vitrophanie',
      description: 'Habillage de vitrines et surfaces vitrées pour votre communication',
    },
    {
      icon: Lightbulb,
      title: 'Enseignes Lumineuses',
      description: 'Conception et installation d\'enseignes LED et néon',
    },
    {
      icon: Car,
      title: 'Covering Véhicules',
      description: 'Total covering et marquage publicitaire de véhicules',
    },
    {
      icon: Printer,
      title: 'Impression Grand Format',
      description: 'Banderoles, bâches, panneaux publicitaires',
    },
    {
      icon: Shield,
      title: 'Signalétique',
      description: 'Panneaux directionnels, plaques professionnelles',
    },
  ];

  const securityServices = [
    {
      icon: Camera,
      title: 'Vidéosurveillance',
      description: 'Installation de systèmes IP avec accès distant',
    },
    {
      icon: Lock,
      title: 'Contrôle d\'Accès',
      description: 'Badges, biométrie, lecteurs de cartes',
    },
    {
      icon: Bell,
      title: 'Alarme Intrusion',
      description: 'Détection de mouvements et protection périmétrique',
    },
    {
      icon: Zap,
      title: 'Alarme Incendie',
      description: 'Détecteurs de fumée et systèmes d\'alerte',
    },
    {
      icon: Shield,
      title: 'Clôture Électrique',
      description: 'Sécurisation de périmètres et zones sensibles',
    },
    {
      icon: Phone,
      title: 'Interphone',
      description: 'Systèmes audio pour immeubles et entreprises',
    },
    {
      icon: Video,
      title: 'Vidéoportier',
      description: 'Contrôle visuel des entrées avec écran',
    },
    {
      icon: Grid,
      title: 'Domotique',
      description: 'Automatisation et pilotage intelligent',
    },
  ];

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-[#195885] to-[#2F6FA5] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nos Services</h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Des solutions complètes et sur-mesure pour votre communication visuelle et votre sécurité
          </p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={(el) => (sectionsRef.current[0] = el)}
            className="text-center mb-16 opacity-0"
          >
            <div className="inline-block bg-green-100 text-green-700 px-6 py-2 rounded-full font-semibold mb-4">
              Branding
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Communication Visuelle
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Donnez vie à votre identité de marque avec nos solutions créatives
            </p>
            <div className="w-24 h-1 bg-green-500 mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brandingServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  ref={(el) => (sectionsRef.current[index + 1] = el)}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 opacity-0"
                >
                  <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <button
                    onClick={() => onNavigate('partnership')}
                    className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors w-full"
                  >
                    Demander un devis
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={(el) => (sectionsRef.current[7] = el)}
            className="text-center mb-16 opacity-0"
          >
            <div className="inline-block bg-blue-100 text-blue-700 px-6 py-2 rounded-full font-semibold mb-4">
              Sécurité
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Télécoms & Domotique
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Protégez vos biens et automatisez votre quotidien avec nos technologies avancées
            </p>
            <div className="w-24 h-1 bg-[#195885] mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  ref={(el) => (sectionsRef.current[index + 8] = el)}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 opacity-0"
                >
                  <div className="bg-gradient-to-br from-[#195885] to-[#2F6FA5] w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <button
                    onClick={() => onNavigate('partnership')}
                    className="bg-[#195885] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2F6FA5] transition-colors w-full"
                  >
                    Demander un devis
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#195885] to-[#2F6FA5] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Un projet en tête ?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Nos experts sont à votre écoute pour transformer vos idées en réalité
          </p>
          <button
            onClick={() => onNavigate('partnership')}
            className="bg-white text-[#195885] px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Obtenir un devis gratuit
          </button>
        </div>
      </section>
    </div>
  );
}

export default Services;
