
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { SLIDES } from './constants';
import Slide from './components/Slide';
import { translations, Language } from './translations';

const App: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showStartScreen, setShowStartScreen] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  // French only (no language toggle)
  const lang: Language = 'fr';
  const slides = SLIDES[lang];
  const t = translations[lang];

  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const startPresentation = () => {
    containerRef.current?.requestFullscreen();
    setIsFullscreen(true);
    setShowStartScreen(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'f') toggleFullscreen();
    };

    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, [nextSlide, prevSlide]);

  const currentSlide = slides[currentSlideIndex];
  const isFullscreenSlide = currentSlide.layout === 'fullscreen';

  // Start screen overlay
  if (showStartScreen) {
    return (
      <div
        ref={containerRef}
        className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 select-none"
      >
        <div className="text-center space-y-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <span className="text-white text-5xl font-black tracking-tight">PIVOT</span>
          </div>
          <p className="text-white/80 text-lg max-w-md">
            Présentation pour les employés
          </p>
          <button
            onClick={startPresentation}
            className="px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center space-x-3 mx-auto"
          >
            <span className="material-icons">fullscreen</span>
            <span>Commencer la présentation</span>
          </button>
          <p className="text-white/60 text-sm">
            Appuyez sur Esc pour quitter le mode plein écran
          </p>
        </div>
      </div>
    );
  }

  // For fullscreen slides, render without any chrome
  if (isFullscreenSlide) {
    return (
      <div
        ref={containerRef}
        className="h-screen w-screen overflow-hidden select-none relative"
      >
        <Slide slide={currentSlide} lang={lang} />

        {/* Navigation Overlays - invisible until hover */}
        <div className="absolute inset-y-0 left-0 w-20 cursor-pointer z-40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center" onClick={prevSlide}>
          <span className="material-icons text-white/50 text-5xl drop-shadow-lg">chevron_left</span>
        </div>
        <div className="absolute inset-y-0 right-0 w-20 cursor-pointer z-40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center" onClick={nextSlide}>
          <span className="material-icons text-white/50 text-5xl drop-shadow-lg">chevron_right</span>
        </div>

        {/* Slide counter - bottom center, subtle */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-40 opacity-0 hover:opacity-100 transition-opacity">
          <span className="text-[10px] font-bold text-white/60 bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm">
            {currentSlideIndex + 1} / {slides.length}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="h-screen w-full flex flex-col overflow-hidden bg-white select-none"
    >
      {/* Main Content Area */}
      <main className="flex-grow flex items-center justify-center relative overflow-hidden px-8 lg:px-16">
        <div key={`${lang}-${currentSlideIndex}`} className="slide-active h-full flex items-center w-full max-w-[1600px]">
          <Slide slide={currentSlide} lang={lang} />
        </div>

        {/* Navigation Overlays */}
        <div className="absolute inset-y-0 left-0 w-16 cursor-pointer z-40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center bg-gradient-to-r from-white/20 to-transparent" onClick={prevSlide}>
           <span className="material-icons text-gray-400 text-4xl">chevron_left</span>
        </div>
        <div className="absolute inset-y-0 right-0 w-16 cursor-pointer z-40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center bg-gradient-to-l from-white/20 to-transparent" onClick={nextSlide}>
           <span className="material-icons text-gray-400 text-4xl">chevron_right</span>
        </div>
      </main>

      {/* Slide Navigation Dots & Info */}
      <div className="h-12 border-t border-gray-50 flex items-center justify-center space-x-8 px-8 flex-shrink-0">
        <div className="flex space-x-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlideIndex(idx)}
              className={`h-1.5 transition-all duration-500 rounded-full ${idx === currentSlideIndex ? 'w-10 bg-primary' : 'w-2 bg-gray-200'}`}
            />
          ))}
        </div>
        <span className="text-[9px] font-black text-gray-300 uppercase tracking-[0.4em]">
          {t.slideCount.replace('{current}', (currentSlideIndex + 1).toString()).replace('{total}', slides.length.toString())}
        </span>
      </div>
    </div>
  );
};

export default App;