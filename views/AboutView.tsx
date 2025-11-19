import React from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';

export const AboutView: React.FC = () => {
  return (
    <div className="pt-20">
      <Section className="min-h-screen flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="space-y-8">
             <div>
                <h2 className="text-[#e34b17] font-bold tracking-[0.3em] uppercase mb-2 text-sm">
                    Vår Historie
                </h2>
                <h1 className="text-5xl font-black uppercase text-white leading-none">
                    Mer enn bare <br/>Trening
                </h1>
             </div>
             
             <div className="space-y-6 text-gray-300 font-light leading-relaxed text-lg">
                <p>
                    <strong className="text-white font-bold">Ju Jitsu Norge</strong> ble grunnlagt på prinsippet om at sann styrke ikke handler om å dominere andre, men om å mestre seg selv. Vi dyrker et miljø hvor tradisjonelle japanske verdier møter moderne, effektivt selvforsvar.
                </p>
                <p>
                    Vi er ikke et treningssenter for de som vil vise seg frem. Vi er en dojo for de som vil grave dypt, svette, feile, og reise seg opp igjen sterkere.
                </p>
                <p>
                    Vårt fellesskap er bygget på gjensidig respekt. På matta er vi alle like – fra nybegynneren med hvitt belte til mesteren med svart.
                </p>
             </div>

             <div className="flex gap-8 border-t border-[#1a1a1a] pt-8">
                <div>
                    <span className="block text-4xl font-black text-[#e34b17]">200+</span>
                    <span className="text-xs uppercase tracking-widest text-gray-500">Medlemmer</span>
                </div>
                <div>
                    <span className="block text-4xl font-black text-[#e34b17]">25</span>
                    <span className="text-xs uppercase tracking-widest text-gray-500">År med historie</span>
                </div>
                <div>
                    <span className="block text-4xl font-black text-[#e34b17]">15</span>
                    <span className="text-xs uppercase tracking-widest text-gray-500">Svartbelter</span>
                </div>
             </div>
          </div>

          {/* Image Collage */}
          <div className="relative h-[600px] hidden lg:block">
             <div className="absolute top-0 right-0 w-3/4 h-3/4 border border-[#1a1a1a] z-0 transform translate-x-4 -translate-y-4" />
             <div className="absolute inset-0 z-10">
                <img 
                    src="https://images.unsplash.com/photo-1595590424283-b8f17842773f?q=80&w=2070&auto=format&fit=crop" 
                    alt="About Dojo"
                    className="w-full h-full object-cover filter grayscale contrast-125"
                />
             </div>
             <div className="absolute -bottom-8 -left-8 w-1/2 h-1/2 z-20 border-4 border-[#0c0c0c]">
                <img 
                    src="https://images.unsplash.com/photo-1544367563-12123d8965cd?q=80&w=2070&auto=format&fit=crop" 
                    alt="Detail"
                    className="w-full h-full object-cover filter sepia-[.5] grayscale"
                />
             </div>
          </div>

        </div>
      </Section>
    </div>
  );
};
