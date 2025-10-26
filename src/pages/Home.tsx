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
      <section className="relative min-h-[90vh] flex flex-col md:flex-row items-center justify-center text-center px-6 md:px-16 gap-10">
        <div className="z-10 max-w-xl space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#195885] leading-tight drop-shadow-md">
            DOMOBRAND & SECURITY
          </h1>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            Experts en <strong>branding physique</strong> et <strong>communication digitale</strong>.  
            Habillage et déshabillage de vitres, autocollants au sol, branding véhicules et signalétique complète pour valoriser votre marque et vos espaces.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button
              onClick={() => onNavigate("services")}
              className="bg-[#195885] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#2F6FA5] transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2"
            >
              Voir nos services <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => onNavigate("partnership")}
              className="border-2 border-[#195885] text-[#195885] px-8 py-4 rounded-xl font-semibold hover:bg-[#195885] hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Demander un devis
            </button>
          </div>
        </div>

        <div className="relative w-full md:w-1/2 flex justify-center">
          <div
            className="w-[90%] h-[400px] md:h-[500px] rounded-3xl overflow-hidden border-4 border-[#195885] shadow-2xl"
            style={{ transform: `translate(${offset.x / 5}px, ${offset.y / 5}px)` }}
          >
            {carouselImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`carousel-${index}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  index === currentImage ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* === SERVICES === */}
      <section className="py-24 px-6 md:px-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#195885] mb-12">
          Nos Domaines d’Expertise
        </h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto justify-items-center">
          <div className="bg-[#11263B] p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center">
            <div className="bg-[#195885] w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <Palette size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-3">Branding Physique & Signalétique</h3>
            <p className="text-gray-300 mb-4">
              Habillage et déshabillage de vitres, autocollants au sol, branding véhicules, enseignes et signalétique complète pour mettre en valeur votre marque dans vos espaces.
            </p>
            <button
              onClick={() => onNavigate("services")}
              className="text-[#195885] font-semibold flex items-center gap-2 hover:gap-3 transition-all mx-auto"
            >
              En savoir plus <ArrowRight size={18} />
            </button>
          </div>

          <div className="bg-[#11263B] p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center">
            <div className="bg-[#195885] w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <Shield size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-3">Télécoms & Domotique</h3>
            <p className="text-gray-300 mb-4">
              Installation de systèmes de vidéosurveillance, contrôle d’accès, alarmes intrusion/incendie, interphones et solutions connectées pour protéger vos espaces.
            </p>
            <button
              onClick={() => onNavigate("services")}
              className="text-[#195885] font-semibold flex items-center gap-2 hover:gap-3 transition-all mx-auto"
            >
              En savoir plus <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* === À PROPOS === */}
      <section className="py-20 px-6 md:px-16 bg-[#11263B] text-center rounded-3xl mx-6 md:mx-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#195885] mb-6">
          À propos de nous
        </h2>
        <p className="max-w-3xl mx-auto text-gray-300 leading-relaxed">
          DOMOBRAND & SECURITY est une entreprise béninoise spécialisée dans le <strong>branding physique</strong> et la <strong>communication digitale</strong>.  
          Nous accompagnons les entreprises dans la valorisation de leur marque et la protection de leurs espaces grâce à nos solutions complètes.
        </p>
      </section>

      {/* === POURQUOI NOUS CHOISIR === */}
      <section className="py-20 px-6 md:px-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#195885] mb-12">
          Pourquoi nous choisir ?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto justify-items-center">
          {[
            { title: "Qualité", text: "Des prestations professionnelles et durables." },
            { title: "Fiabilité", text: "Une équipe compétente et engagée." },
            { title: "Réactivité", text: "Une prise en charge rapide et efficace." },
            { title: "Innovation", text: "Des solutions modernes et évolutives." },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 bg-[#11263B] rounded-2xl shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-center"
            >
              <h3 className="text-xl font-semibold text-[#195885] mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* === CTA FINAL === */}
      <section className="py-20 px-6 md:px-16 text-center bg-[#195885] rounded-3xl mx-6 md:mx-16">
        <Users size={56} className="mx-auto mb-6 opacity-90" />
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Démarrez votre projet avec nous
        </h2>
        <p className="text-lg text-gray-100 mb-8 max-w-xl mx-auto">
          Contactez-nous pour un devis gratuit et découvrez comment notre <strong>branding physique</strong> et notre <strong>communication digitale</strong> peuvent valoriser votre marque.
        </p>
        <button
          onClick={() => onNavigate("partnership")}
          className="bg-white text-[#195885] px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
        >
          Demander un devis gratuit
        </button>
      </section>
    </div>
  );
}

export default Home;
