import { useState } from 'react';
import { Tag } from 'lucide-react';

function Realisations() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Tous');

  const categories = [
    'Tous',
    'Branding',
    'Enseignes',
    'Covering',
    'Vidéosurveillance',
    'Contrôle d\'accès',
    'Domotique',
  ];

  const realisations = [
    {
      id: 1,
      title: 'Enseigne Lumineuse Restaurant',
      category: 'Enseignes',
      image: 'https://images.pexels.com/photos/2313037/pexels-photo-2313037.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Création d\'une enseigne LED pour un restaurant moderne',
    },
    {
      id: 2,
      title: 'Covering Véhicule Entreprise',
      category: 'Covering',
      image: 'https://images.pexels.com/photos/3752169/pexels-photo-3752169.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Marquage publicitaire complet d\'une flotte de véhicules',
    },
    {
      id: 3,
      title: 'Vitrophanie Boutique',
      category: 'Branding',
      image: 'https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Habillage de vitrine pour une boutique de mode',
    },
    {
      id: 4,
      title: 'Système de Vidéosurveillance',
      category: 'Vidéosurveillance',
      image: 'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Installation de 24 caméras IP pour un complexe commercial',
    },
    {
      id: 5,
      title: 'Contrôle d\'Accès Biométrique',
      category: 'Contrôle d\'accès',
      image: 'https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Système de contrôle d\'accès par empreintes digitales',
    },
    {
      id: 6,
      title: 'Signalétique Corporate',
      category: 'Branding',
      image: 'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Création de panneaux directionnels pour bureaux',
    },
    {
      id: 7,
      title: 'Domotique Résidentielle',
      category: 'Domotique',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Automatisation complète d\'une villa',
    },
    {
      id: 8,
      title: 'Impression Grand Format',
      category: 'Branding',
      image: 'https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Bâches publicitaires pour événement',
    },
    {
      id: 9,
      title: 'Enseigne Pharmacie',
      category: 'Enseignes',
      image: 'https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Enseigne LED avec croix lumineuse',
    },
  ];

  const filteredRealisations =
    selectedCategory === 'Tous'
      ? realisations
      : realisations.filter((item) => item.category === selectedCategory);

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-[#195885] to-[#2F6FA5] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nos Réalisations</h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Découvrez nos projets récents et l'étendue de notre savoir-faire
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-[#195885] text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRealisations.map((realisation) => (
              <div
                key={realisation.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={realisation.image}
                    alt={realisation.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-sm leading-relaxed">
                        {realisation.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur-sm text-[#195885] px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-2">
                      <Tag size={14} />
                      {realisation.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {realisation.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{realisation.description}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredRealisations.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-600 text-lg">
                Aucune réalisation trouvée pour cette catégorie
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Votre projet mérite le meilleur
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Chaque réalisation est unique et conçue sur-mesure pour répondre à vos besoins spécifiques
          </p>
          <a
            href="https://wa.me/22967806547"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#195885] text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#2F6FA5] transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Discutons de votre projet
          </a>
        </div>
      </section>
    </div>
  );
}

export default Realisations;
