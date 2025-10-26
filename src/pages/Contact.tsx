import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, MessageSquare } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
        message: '',
      });

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }, 1500);
  };

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-[#195885] to-[#2F6FA5] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contactez-nous</h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Une question ? Un projet ? Notre équipe est à votre écoute
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-[#195885] to-[#2F6FA5] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Phone size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Téléphone</h3>
              <a
                href="tel:+22901678065"
                className="text-[#195885] font-semibold text-lg hover:underline"
              >
                +229 01 67 80 65 47
              </a>
              <p className="text-gray-600 text-sm mt-2">Lun - Sam: 8h - 18h</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-[#195885] to-[#2F6FA5] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Mail size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Email</h3>
              <a
                href="mailto:contact@domobrand.com"
                className="text-[#195885] font-semibold text-lg hover:underline"
              >
                contact@domobrand.com
              </a>
              <p className="text-gray-600 text-sm mt-2">Réponse sous 24h</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-[#195885] to-[#2F6FA5] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <MapPin size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Adresse</h3>
              <p className="text-gray-700 font-semibold">Cotonou, Bénin</p>
              <p className="text-gray-600 text-sm mt-2">Visite sur rendez-vous</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Envoyez-nous un message
                </h2>

                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
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

                  <div className="mb-6">
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

                  <div className="mb-6">
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

                  <div className="mb-6">
                    <label className="block text-gray-700 font-semibold mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#195885] focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Votre message..."
                    />
                  </div>

                  {submitStatus === 'success' && (
                    <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-6 py-4 rounded-lg flex items-center">
                      <CheckCircle size={24} className="mr-3" />
                      <span className="font-semibold">
                        Message envoyé ! Nous vous répondrons rapidement.
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
                        Envoyer le message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <Clock size={28} className="mr-3 text-[#195885]" />
                  Horaires d'ouverture
                </h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="font-semibold">Lundi - Vendredi</span>
                    <span>8h00 - 18h00</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="font-semibold">Samedi</span>
                    <span>9h00 - 15h00</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="font-semibold">Dimanche</span>
                    <span className="text-red-500">Fermé</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#195885] to-[#2F6FA5] p-8 rounded-2xl shadow-lg text-white">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <MessageSquare size={28} className="mr-3" />
                  Urgence ?
                </h3>
                <p className="mb-6 text-gray-100">
                  Pour une réponse immédiate, contactez-nous via WhatsApp
                </p>
                <a
                  href="https://wa.me/22967806547"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#25D366] text-white text-center px-8 py-4 rounded-lg font-bold hover:bg-[#20BA5A] transition-all duration-300 transform hover:scale-105"
                >
                  Ouvrir WhatsApp
                </a>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-lg h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126719.09264837262!2d2.3644065!3d6.3702928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1024a9b8f2f4f7e5%3A0xc58d7a7f8e8a8e8e!2sCotonou%2C%20Benin!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Carte de localisation"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
