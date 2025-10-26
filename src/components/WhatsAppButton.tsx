import { MessageCircle } from 'lucide-react';

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/22967806547"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20BA5A] transition-all duration-300 hover:scale-110 animate-pulse"
      aria-label="Contactez-nous sur WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}

export default WhatsAppButton;
