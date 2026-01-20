
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
  const currentSlide = slides[currentSlideIndex];

  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Click anywhere to navigate: left 15% goes back, rest goes forward
  const handleScreenClick = useCallback((e: React.MouseEvent) => {
    const clickX = e.clientX;
    const screenWidth = window.innerWidth;
    const leftThreshold = screenWidth * 0.15; // 15% from left edge
    
    if (clickX < leftThreshold) {
      prevSlide();
    } else {
      nextSlide();
    }
  }, [nextSlide, prevSlide]);

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
        className="fixed inset-0 w-full h-full overflow-hidden select-none"
      >
        <Slide slide={currentSlide} lang={lang} />

        {/* Click overlay for navigation */}
        <div 
          className="absolute inset-0 z-50 cursor-pointer"
          onClick={handleScreenClick}
        />

        {/* Slide counter - bottom center, subtle */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-60 opacity-0 hover:opacity-100 transition-opacity pointer-events-none">
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
      <main className="flex-grow flex items-center justify-center relative overflow-hidden">
        <div key={`${lang}-${currentSlideIndex}`} className="slide-active h-full flex items-center w-full">
          <Slide slide={currentSlide} lang={lang} />
        </div>
      </main>

      {/* Click overlay for navigation */}
      <div 
        className="absolute inset-0 z-40 cursor-pointer"
        onClick={handleScreenClick}
      />

      {/* Slide Navigation Dots & Info - floating at bottom */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center space-x-8">
        <div className="flex space-x-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => { e.stopPropagation(); setCurrentSlideIndex(idx); }}
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