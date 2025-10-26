import { useState } from 'react';
import { Handshake, Users, TrendingUp, Award, CheckCircle, Send } from 'lucide-react';

function Partnership() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceType: '',
        message: '',
      });

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }, 1500);
  };

  const partners = [
    {
      name: 'LA ROCHE BENIN',
      logo: 'https://i.ibb.co/gFgjGRb4/larochecotonoujpg-5f69e644915a4.jpg',
      testimonial: 'Un partenaire fiable et professionnel',
    },
    {
      name: 'CHAFTEL',
      logo: 'https://i.ibb.co/84P9yW8D/images.jpg',
      testimonial: 'Excellence et qualité au rendez-vous',
    },
    {
      name: 'GOLDEN TULIP',
      logo: 'https://i.ibb.co/hbX75Bp/images.png',
      testimonial: 'Service client exceptionnel',
    },
    {
      name: 'RENATO TCHOBO',
      logo: 'https://i.ibb.co/GQrF0Db5/Renato.webp',
      testimonial: 'Technologie de pointe',
    },
  ];

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-[#195885] to-[#2F6FA5] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Partenariat & Devis
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Ensemble, construisons l'avenir de votre entreprise
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Nos Partenaires
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ils nous font confiance pour leurs projets
            </p>
            <div className="w-24 h-1 bg-[#195885] mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden bg-white shadow-lg">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {partner.name}
                </h3>
                <p className="text-sm text-gray-600 italic">"{partner.testimonial}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Pourquoi collaborer avec nous ?
            </h2>
            <div className="w-24 h-1 bg-[#195885] mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[#195885] to-[#2F6FA5] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Handshake size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Partenariat gagnant
              </h3>
              <p className="text-gray-600">
                Relations durables et mutuellement bénéfiques
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[#195885] to-[#2F6FA5] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Users size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Équipe experte
              </h3>
              <p className="text-gray-600">
                Professionnels qualifiés et passionnés
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[#195885] to-[#2F6FA5] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <TrendingUp size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Croissance commune
              </h3>
              <p className="text-gray-600">
                Accompagnement dans votre développement
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[#195885] to-[#2F6FA5] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Award size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Qualité garantie
              </h3>
              <p className="text-gray-600">
                Standards élevés sur tous nos projets
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Demander un devis gratuit
            </h2>
            <p className="text-gray-600">
              Remplissez le formulaire ci-dessous et recevez une réponse sous 24h
            </p>
            <div className="w-24 h-1 bg-[#195885] mx-auto mt-6 rounded-full" />
          </div>

          <form onSubmit={handleSubmit} className="bg-gray-50 p-8 md:p-12 rounded-2xl shadow-xl">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#195885] focus:border-transparent outline-none transition-all"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#195885] focus:border-transparent outline-none transition-all"
                  placeholder="votre@email.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Téléphone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#195885] focus:border-transparent outline-none transition-all"
                  placeholder="+229 XX XX XX XX"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Type de service *
                </label>
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#195885] focus:border-transparent outline-none transition-all"
                >
                  <option value="">Sélectionnez un service</option>
                  <option value="branding">Branding & Communication</option>
                  <option value="videosurveillance">Vidéosurveillance</option>
                  <option value="controle-acces">Contrôle d'accès</option>
                  <option value="alarme">Système d'alarme</option>
                  <option value="domotique">Domotique</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Message / Détails du projet *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#195885] focus:border-transparent outline-none transition-all resize-none"
                placeholder="Décrivez votre projet en détail..."
              />
            </div>

            {submitStatus === 'success' && (
              <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-6 py-4 rounded-lg flex items-center">
                <CheckCircle size={24} className="mr-3" />
                <span className="font-semibold">
                  Votre demande a été envoyée avec succès ! Nous vous contacterons sous 24h.
                </span>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-gradient-to-r from-[#195885] to-[#2F6FA5] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-2xl'
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3" />
                  Envoi en cours...
                </>
              ) : (
                <>
                  <Send size={24} className="mr-3" />
                  Envoyer ma demande
                </>
              )}
            </button>
          </form>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#195885] to-[#2F6FA5] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Besoin d'une réponse immédiate ?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Contactez-nous directement par téléphone ou WhatsApp
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+22901678065"
              className="bg-white text-[#195885] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              +229 01 67 80 65 47
            </a>
            <a
              href="https://wa.me/22967806547"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#20BA5A] transition-all duration-300 transform hover:scale-105"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Partnership;
