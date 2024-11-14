import React from 'react';
import { Camera } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

function Navbar({ activeSection, setActiveSection }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 backdrop-blur-md bg-black/20 border-b border-white/10 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => setActiveSection('gallery')}
            className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors"
          >
            <Camera size={24} />
            <span className="font-semibold">TCDev</span>
          </button>

          <div className="flex gap-6">
            <button
              onClick={() => setActiveSection('gallery')}
              className={`px-4 py-2 rounded-full transition-all ${
                activeSection === 'gallery'
                  ? 'bg-white/10 text-blue-400'
                  : 'text-white hover:text-blue-400'
              }`}
            >
              Gallery
            </button>
            <button
              className={`px-4 py-2 rounded-full transition-all ${
                activeSection === 'contact'
                  ? 'bg-white/10 text-blue-400'
                  : 'text-white hover:text-blue-400'
              }`}
            >
              <a href="https://instagram.com/tcdev" target="_blank">
                Contact
              </a>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
