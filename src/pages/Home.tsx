import { useEffect, useState } from "react";
import { Palette, Shield, Users, ArrowRight } from "lucide-react";

type Page = "services" | "partnership";

interface HomeProps {
  onNavigate: (page: Page) => void;
}

function Home({ onNavigate }: HomeProps) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [currentImage, setCurrentImage] = useState(0);

  const carouselImages = [
    "https://i.ibb.co/NgMLycY9/3da8b3679757c5925969bb57aa4e98c5.jpg",
    "https://i.ibb.co/1YY3D056/e04a7650e330d447a4138cbae4851257.jpg",
    "https://i.ibb.co/G4XNTnvv/4727a22dfaf89f7fc6b767accc96b056.jpg",
    "https://i.ibb.co/kVhD44mj/bf60b2868b0ae899edb3cbe37b855748.jpg",
    "https://i.ibb.co/TCwdLtV/e9e8cc9e24cedcb70f43b77e553d56c6.jpg",
  ];

  // Animation douce du fond
  useEffect(() => {
    let animationFrameId: number;
    let time = 0;
    const animate = () => {
      time += 0.01;
      setOffset({
        x: Math.sin(time) * 15,
        y: Math.cos(time * 0.8) * 15,
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Changement automatique d’image
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="pt-20 bg-[#0D1B2A] text-white overflow-hidden">
      {/* === HERO === */}
      <section className="relative flex flex-col items-center justify-center px-6 md:px-16 space-y-12">
        {/* Carrousel */}
        <div className="relative w-full max-w-6xl rounded-2xl overflow-hidden border-4 border-[#195885] shadow-2xl">
          {carouselImages.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`slide-${i}`}
              className={`absolute inset-0 w-full h-[75vh] object-cover transition-opacity duration-[1200ms] ${
                i === currentImage ? "opacity-100" : "opacity-0"
              }`}
              style={{
                transform: `translate(${offset.x / 5}px, ${offset.y / 5}px)`,
              }}
            />
          ))}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        {/* Texte et boutons */}
        <div className="text-center space-y-6 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-[#195885] drop-shadow-xl">
            DOMOBRAND & SECURITY
          </h1>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            Spécialiste du <strong>branding</strong>, de la{" "}
            <strong>communication visuelle</strong> et des{" "}
            <strong>solutions de sécurité domotique</strong> :
            vidéosurveillance, contrôle d’accès, alarme intrusion, clôture
            électrique, et plus encore.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <button
              onClick={() => onNavigate("services")}
              className="bg-[#195885] text-white px-10 py-4 rounded-lg font-semibold hover:bg-[#2F6FA5] transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              Découvrir nos services <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => onNavigate("partnership")}
              className="border-2 border-[#195885] text-[#195885] px-10 py-4 rounded-lg font-semibold hover:bg-[#195885] hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Demander un devis
            </button>
          </div>
        </div>
      </section>

      {/* === SERVICES === */}
      <section className="py-24 px-6 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#195885] text-center mb-16">
          Nos Services
        </h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Branding */}
          <div className="bg-[#11263B] p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="bg-[#195885] w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Palette size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Branding & Communication Visuelle
            </h3>
            <p className="text-gray-300 mb-6">
              Autocollants, vinyles, enseignes lumineuses, covering véhicules,
              impression grand format.
            </p>
            <button
              onClick={() => onNavigate("services")}
              className="text-[#195885] font-semibold flex items-center gap-2 hover:gap-3 transition-all"
            >
              En savoir plus <ArrowRight size={20} />
            </button>
          </div>

          {/* Domotique */}
          <div className="bg-[#11263B] p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="bg-[#195885] w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Shield size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Télécoms & Domotique
            </h3>
            <p className="text-gray-300 mb-6">
              Vidéosurveillance, contrôle d'accès, alarme intrusion/incendie,
              interphone, vidéoportier.
            </p>
            <button
              onClick={() => onNavigate("services")}
              className="text-[#195885] font-semibold flex items-center gap-2 hover:gap-3 transition-all"
            >
              En savoir plus <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* === À PROPOS === */}
      <section className="py-24 px-6 md:px-16 bg-[#11263B] text-center rounded-2xl mx-6 md:mx-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#195885] mb-8">
          À propos de nous
        </h2>
        <p className="max-w-3xl mx-auto text-gray-300 leading-relaxed mb-6">
          DOMOBRAND & SECURITY est une structure béninoise spécialisée dans la
          communication visuelle et les solutions domotiques. Notre mission est
          d’offrir des prestations professionnelles pour valoriser votre image et
          sécuriser vos espaces.
        </p>
      </section>

      {/* === POURQUOI NOUS CHOISIR === */}
      <section className="py-24 px-6 md:px-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#195885] mb-12">
          Pourquoi nous choisir ?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {[
            { title: "Qualité", text: "Des prestations haut de gamme et durables." },
            { title: "Fiabilité", text: "Une équipe expérimentée et engagée." },
            { title: "Réactivité", text: "Des interventions rapides et efficaces." },
            { title: "Innovation", text: "Des solutions modernes et connectées." },
          ].map((item, i) => (
            <div
              key={i}
              className="p-8 bg-[#11263B] rounded-2xl shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-[#195885] mb-2">
                {item.title}
              </h3>
              <p className="text-gray-300">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* === CTA === */}
      <section className="py-24 px-6 md:px-16 text-center bg-[#195885] rounded-2xl mx-6 md:mx-16">
        <Users size={64} className="mx-auto mb-6 opacity-90" />
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Prêt à démarrer votre projet ?
        </h2>
        <p className="text-lg text-gray-100 mb-8">
          Contactez-nous dès aujourd'hui pour un devis gratuit et personnalisé
        </p>
        <button
          onClick={() => onNavigate("partnership")}
          className="bg-white text-[#195885] px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
        >
          Demander un devis gratuit
        </button>
      </section>
    </div>
  );
}

export default Home;
