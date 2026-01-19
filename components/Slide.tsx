
import React from 'react';
import { SlideData } from '../types';
import { Language } from '../translations';

interface SlideProps {
  slide: SlideData;
  lang: Language;
}

const Slide: React.FC<SlideProps> = ({ slide, lang }) => {
  const isRightLayout = slide.layout === 'right';
  const isFullscreen = slide.layout === 'fullscreen';

  // Fullscreen layout - just display the image
  if (isFullscreen) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <img
          alt="Slide"
          className="max-w-full max-h-full object-contain"
          src={slide.image}
        />
      </div>
    );
  }

  return (
    <div className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-start lg:items-center w-full h-full max-h-[85vh] pt-6 lg:pt-0 ${isRightLayout ? 'lg:flex-row-reverse' : ''}`}>
      {/* Content Column */}
      <div className="flex-1 flex flex-col justify-start lg:justify-center space-y-6 lg:space-y-10 w-full overflow-hidden">
        <div className="mb-8 lg:mb-12">
          <span
            className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-widest shadow-sm"
            style={{ backgroundColor: `${slide.accentColor}10`, color: slide.accentColor }}
          >
            <span className="material-icons text-sm">{slide.badgeIcon}</span>
            <span>{slide.badge}</span>
          </span>
        </div>

        <div>
          <h1 className="text-4xl lg:text-6xl xl:text-7xl font-black tracking-tight text-gray-900 leading-[0.98] lg:leading-[1.05]">
            {slide.title.split(' ').map((word, idx) => {
              const highlights = [
                'table', 'rassembler', 'copiloter', 'automatisé', 'pivot', 'center', 'automation', 'connection', 'center', 'hub'
              ];
              const normalizedWord = word.toLowerCase().replace(/[^a-zàâçéèêëîïôûùüÿ]/g, '');
              const isHighlight = highlights.includes(normalizedWord);
              return (
                <span key={idx} style={{ color: isHighlight ? slide.accentColor : 'inherit' }}>
                  {word}{' '}
                </span>
              );
            })}
          </h1>
        </div>

        <div className="space-y-4 lg:space-y-6">
          {slide.features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-6">
              <div
                className="w-12 h-12 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-lg"
                style={{ backgroundColor: `${slide.accentColor}08`, color: slide.accentColor }}
              >
                <span className="material-icons text-2xl lg:text-3xl">{feature.icon}</span>
              </div>
              <div>
                <h3 className="text-lg lg:text-xl font-black text-gray-900">{feature.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Visual Column */}
      <div className="flex-1 relative w-full h-full flex items-center justify-center min-h-[300px] lg:min-h-0">
        <div className="relative z-10 w-full max-w-[600px] xl:max-w-[700px]">
          <img
            alt="Slide Graphic"
            className="w-full h-auto object-contain rounded-2xl"
            src={slide.image}
          />

          {slide.uiCards.map((card, idx) => (
            <div
              key={idx}
              className={`absolute ${card.position} z-30 bg-white/95 backdrop-blur-xl px-4 py-3 lg:px-6 lg:py-4 rounded-2xl lg:rounded-3xl shadow-xl border border-white/50 w-44 lg:w-56 transform hover:scale-105 transition-transform`}
            >
              <div className="flex flex-col">
                <span className="text-[9px] font-black tracking-widest uppercase opacity-40" style={{ color: slide.accentColor }}>{card.label}</span>
                <span className="text-sm lg:text-lg font-black text-gray-900 tracking-tight">{card.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slide;
