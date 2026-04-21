"use client";

export default function WhatsappButton() {
  const whatsappMessage = encodeURIComponent(
    "Hi AIShyp Team, I am a new customer and want to get started. Please share details.",
  );

  return (
    <a
      href={`https://wa.me/917045814007?text=${whatsappMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed right-6 bottom-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_12px_30px_rgba(37,211,102,0.45)] transition-colors duration-200 hover:bg-[#22c55e] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.04 2C6.52 2 2.05 6.48 2.05 12c0 1.93.55 3.74 1.5 5.28L2 22l4.88-1.52A9.93 9.93 0 0 0 12.04 22c5.52 0 10-4.48 10-10S17.56 2 12.04 2zm0 18.18c-1.67 0-3.22-.45-4.55-1.24l-.33-.2-2.9.9.94-2.82-.22-.35A8.1 8.1 0 1 1 12.04 20.18zm4.45-6.05c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.37-1.94-1.19-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.41-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 1.99 0 1.17.86 2.3.98 2.46.12.16 1.68 2.57 4.07 3.6.57.24 1.01.38 1.36.48.57.18 1.09.16 1.5.1.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.03.14-1.14-.06-.11-.22-.18-.46-.3z" />
      </svg>
    </a>
  );
}
