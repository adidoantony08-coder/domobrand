import { Calendar, User, ArrowRight } from 'lucide-react';

function Blog() {
  const articles = [
    {
      id: 1,
      title: 'Les tendances 2025 en communication visuelle',
      excerpt: 'Découvrez les dernières innovations qui transforment le secteur du branding et de la signalétique professionnelle.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Branding',
      author: 'DOMOBRAND Team',
      date: '15 Janvier 2025',
    },
    {
      id: 2,
      title: 'Comment choisir son système de vidéosurveillance ?',
      excerpt: 'Guide complet pour sélectionner la solution de sécurité adaptée à vos besoins et votre budget.',
      image: 'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Sécurité',
      author: 'DOMOBRAND Team',
      date: '10 Janvier 2025',
    },
    {
      id: 3,
      title: 'L\'importance du covering véhicule pour votre entreprise',
      excerpt: 'Transformez vos véhicules en supports publicitaires mobiles et augmentez votre visibilité.',
      image: 'https://images.pexels.com/photos/3752169/pexels-photo-3752169.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Branding',
      author: 'DOMOBRAND Team',
      date: '5 Janvier 2025',
    },
    {
      id: 4,
      title: 'Domotique : confort et sécurité au quotidien',
      excerpt: 'Les avantages d\'une maison intelligente et comment l\'automatisation améliore votre vie.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Domotique',
      author: 'DOMOBRAND Team',
      date: '28 Décembre 2024',
    },
    {
      id: 5,
      title: 'Contrôle d\'accès biométrique : la sécurité du futur',
      excerpt: 'Pourquoi les entreprises adoptent massivement les systèmes de contrôle par reconnaissance.',
      image: 'https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Sécurité',
      author: 'DOMOBRAND Team',
      date: '20 Décembre 2024',
    },
    {
      id: 6,
      title: 'Créer une enseigne lumineuse impactante',
      excerpt: 'Les règles d\'or pour une signalétique qui attire l\'attention et marque les esprits.',
      image: 'https://images.pexels.com/photos/2313037/pexels-photo-2313037.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Branding',
      author: 'DOMOBRAND Team',
      date: '15 Décembre 2024',
    },
  ];

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-[#195885] to-[#2F6FA5] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog & Actualités</h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Conseils, tendances et actualités du monde du branding et de la sécurité
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-[#195885] px-4 py-2 rounded-full text-xs font-bold">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center">
                      <User size={16} className="mr-2" />
                      <span>{article.author}</span>
                    </div>
                  </div>

                  <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 hover:text-[#195885] transition-colors">
                    {article.title}
                  </h2>

                  <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>

                  <button className="text-[#195885] font-semibold flex items-center hover:gap-3 gap-2 transition-all group">
                    Lire la suite
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Restez informé
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Suivez-nous sur nos réseaux sociaux pour ne rien manquer de nos actualités
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#195885] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#2F6FA5] transition-all duration-300 transform hover:scale-105"
            >
              Facebook
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#195885] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#2F6FA5] transition-all duration-300 transform hover:scale-105"
            >
              Instagram
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#195885] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#2F6FA5] transition-all duration-300 transform hover:scale-105"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
