import React from 'react';
import { Section } from '../components/Section';
import { INSTRUCTORS } from '../constants';

export const AboutView: React.FC = () => {
  return (
    <div className="pt-20">
      {/* History & Mission */}
      <Section className="min-h-[60vh] flex flex-col justify-center border-b border-[#1a1a1a]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
             <div>
                <h2 className="text-[#e34b17] font-bold tracking-[0.3em] uppercase mb-2 text-xs">
                    Om Oss
                </h2>
                <h1 className="text-4xl md:text-5xl font-black uppercase text-white leading-none">
                    Styrke Gjennom <br/>Fellesskap
                </h1>
             </div>
             
             <div className="space-y-6 text-gray-300 font-light leading-relaxed text-base md:text-lg">
                <p>
                    Ju Jitsu Norge er dedikert til å spre kunnskapen om en av verdens eldste og mest effektive kampsporter. Vi tror på en helhetlig tilnærming hvor mental styrke er like viktig som fysisk teknikk.
                </p>
                <p>
                    Vårt fellesskap består av utøvere i alle aldre, fra nybegynnere til erfarne svartbelter. Vi legger vekt på trygghet, respekt og treningsglede i alle våre klubber.
                </p>
             </div>
          </div>

          <div className="relative h-[350px] md:h-[400px] hidden lg:block">
             <div className="absolute inset-0 border-2 border-[#e34b17] transform translate-x-4 translate-y-4" />
             <img 
                 src="https://images.unsplash.com/photo-1595590424283-b8f17842773f?q=80&w=2070&auto=format&fit=crop" 
                 alt="About Dojo"
                 className="w-full h-full object-cover filter grayscale contrast-125 relative z-10"
             />
          </div>
        </div>
      </Section>

      {/* Instructors Section */}
      <Section darker>
        <div className="text-center mb-12">
           <h2 className="text-[#e34b17] font-bold tracking-[0.3em] uppercase mb-4 text-xs">
            Lederskap
          </h2>
          <h1 className="text-3xl md:text-5xl font-black uppercase text-white">
            Våre Instruktører
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {INSTRUCTORS.map((instructor) => (
            <div key={instructor.id} className="bg-[#121212] border border-[#1a1a1a] group hover:border-[#e34b17] transition-colors">
              <div className="aspect-[4/5] overflow-hidden relative">
                <img 
                  src={instructor.image} 
                  alt={instructor.name} 
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-6 pt-20">
                    <span className="bg-[#e34b17] text-white text-xs font-bold px-2 py-1 mb-2 inline-block">{instructor.rank}</span>
                    <h3 className="text-xl font-bold text-white uppercase">{instructor.name}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-400 text-sm leading-relaxed">
                  {instructor.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};