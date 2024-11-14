import React, { useState } from 'react';
import {
  Camera,
  Github,
  Image as ImageIcon,
  Instagram,
  Mail,
} from 'lucide-react';
import Gallery from './components/Gallery';
import Navbar from './components/Navbar';

function App() {
  const [activeSection, setActiveSection] = useState('gallery');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      <div className="relative">
        {/* Animated background shapes */}
        <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="fixed top-1/3 right-1/3 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="fixed bottom-1/4 left-1/3 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>

        {/* Additional decorative shapes */}
        <div className="fixed top-1/2 right-1/4 w-64 h-64 bg-purple-500 rounded-lg rotate-45 mix-blend-multiply filter blur-xl opacity-5 animate-blob animation-delay-3000"></div>
        <div className="fixed bottom-1/3 right-1/2 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-blob animation-delay-5000"></div>

        {/* Main content */}
        <div className="relative min-h-screen">
          <Navbar
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />

          <main className="container mx-auto px-4 pt-24 pb-20">
            {activeSection === 'gallery' ? (
              <>
                <header className="text-center mb-16">
                  <div className="mb-8 relative w-40 h-40 mx-auto">
                    <img
                      src="/images/logo.jpg"
                      alt="Portrait"
                      className="rounded-full object-cover w-full h-full border-4 border-blue-500/20"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-transparent"></div>
                  </div>
                  <h1
                    className="text-5xl font-bold mb-4 bg-clip-text text-transparent inline-block tit"
                    style={{
                      backgroundImage:
                        'linear-gradient(to right, #2980b9, #005C97)',
                    }}
                  >
                    TCDev
                  </h1>

                  <div className="text-gray-300 text-xl max-w-3xl mx-auto space-y-4 backdrop-blur-sm bg-white/5 rounded-lg p-6 border border-white/10">
                    <p>
                      I'm TCDev, an Italian photographer passionate about
                      cosplay and street photography. What started with a simple
                      phone evolved into using a Canon, and now I capture
                      moments with my Sony, blending fantasy with urban life.
                    </p>
                  </div>
                </header>

                <Gallery />
              </>
            ) : (
              <Contact />
            )}
          </main>

          {/* Footer */}
          <footer className="fixed bottom-0 w-full backdrop-blur-md bg-black/20 border-t border-white/10 py-4">
            <div className="container mx-auto px-4 flex justify-between items-center">
              <div className="flex items-center gap-2 text-blue-400">
                <Camera size={20} />
                <span className="text-sm">© 2024 TCDev</span>
              </div>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/tcdev"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  target="_blank"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://github.com/TCDev69 "
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  target="_blank"
                >
                  <Github size={20} />
                </a>
                <a
                  href="mailto:email@tcdev.xyz"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  target="_blank"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
