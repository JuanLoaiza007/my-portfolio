import { h } from "preact";
import { useState } from "preact/hooks";

export default function MobileMenu({ sections }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Botón hamburguesa */}
      <button
        class="md:hidden p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 z-50 relative"
        onClick={() => setIsOpen(!isOpen)}
        aria-controls="mobile-menu"
        aria-expanded={isOpen}
        type="button"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Menú */}
      {isOpen && (
        <div class="fixed inset-0 z-40 flex justify-center items-start pt-24">
          {/* Div fondo oscuro para detectar clic fuera */}
          <div
            class="absolute inset-0 bg-black/90 h-screen w-screen"
            onClick={() => setIsOpen(false)}
          />

          {/* Contenedor del menú */}
          <div class="w-full absolute top-12 rounded-md shadow-md p-4 z-50 bg-white dark:bg-gray-900">
            <nav class="flex flex-col space-y-4">
              {sections.map(({ title, href }) => (
                <a
                  key={href}
                  href={href}
                  class="text-gray-800 dark:text-white font-medium hover:underline"
                  onClick={() => setIsOpen(false)}
                >
                  {title}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
