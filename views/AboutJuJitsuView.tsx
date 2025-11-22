import React from 'react';
import { Section } from '../components/Section';

export const AboutJuJitsuView: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Section 1: Philosophy (Text Left, Image Right) */}
      <Section className="min-h-[60vh] flex flex-col justify-center border-b border-[#1a1a1a]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-1 lg:order-1">
             <div>
                <h2 className="text-[#e34b17] font-bold tracking-[0.3em] uppercase mb-2 text-xs">
                    Filosofien
                </h2>
                <h1 className="text-4xl md:text-5xl font-black uppercase text-white leading-none">
                    Den Myke Kunst
                </h1>
             </div>
             
             <div className="space-y-6 text-gray-300 font-light leading-relaxed text-base md:text-lg">
                <p>
                    Ju Jitsu (柔術) oversettes ofte som "myk kunst" eller "fleksibel teknikk". 
                    Kjernen i filosofien er ikke å møte kraft med motkraft, men heller å absorbere og omdirigere angriperens energi.
                </p>
                <p>
                    Det handler om fysikk fremfor rå styrke. Ved å bruke balansebrytning, vektstangprinsipper og timing, kan en mindre person effektivt nøytralisere en større og sterkere motstander. Det er sjakk med kroppen.
                </p>
             </div>
          </div>

          <div className="relative h-[350px] md:h-[400px] hidden lg:block order-2 lg:order-2">
             <div className="absolute inset-0 border-2 border-[#e34b17] transform translate-x-4 translate-y-4" />
             <img 
                 src="https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=2070&auto=format&fit=crop" 
                 alt="Ju Jitsu Philosophy"
                 className="w-full h-full object-cover filter grayscale contrast-125 relative z-10"
             />
          </div>
        </div>
      </Section>

      {/* Section 2: History (Image Left, Text Right) */}
      <Section darker className="min-h-[60vh] flex flex-col justify-center border-b border-[#1a1a1a]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="relative h-[350px] md:h-[400px] hidden lg:block order-2 lg:order-1">
             <div className="absolute inset-0 border-2 border-[#e34b17] transform -translate-x-4 translate-y-4" />
             <img 
                 src="https://images.unsplash.com/photo-1583684977172-528983104c31?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                 alt="Samurai History"
                 className="w-full h-full object-cover filter grayscale contrast-125 relative z-10"
             />
          </div>

          <div className="space-y-6 order-1 lg:order-2">
             <div>
                <h2 className="text-[#e34b17] font-bold tracking-[0.3em] uppercase mb-2 text-xs">
                    Historien
                </h2>
                <h1 className="text-4xl md:text-5xl font-black uppercase text-white leading-none">
                    Fra Samurai Til Sport
                </h1>
             </div>
             
             <div className="space-y-6 text-gray-300 font-light leading-relaxed text-base md:text-lg">
                <p>
                    Opprinnelig ble Ju Jitsu utviklet av samuraiene i det føydale Japan. Når sverdet knakk eller ble mistet på slagmarken, trengte krigeren et system for å forsvare seg ubevæpnet, ofte mot tungt rustede motstandere.
                </p>
                <p>
                    Gjennom århundrene har kunsten utviklet seg. Mens de dødelige teknikkene fra slagmarken er bevart i formene (kata), har idretten tilpasset seg moderne tider med fokus på selvutvikling, konkurranse og trygg trening.
                </p>
             </div>
          </div>

        </div>
      </Section>

      {/* Section 3: Modern System (Text Left, Image Right) */}
      <Section className="min-h-[60vh] flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-1 lg:order-1">
             <div>
                <h2 className="text-[#e34b17] font-bold tracking-[0.3em] uppercase mb-2 text-xs">
                    Systemet
                </h2>
                <h1 className="text-4xl md:text-5xl font-black uppercase text-white leading-none">
                    Et Komplett Selvforsvar
                </h1>
             </div>
             
             <div className="space-y-6 text-gray-300 font-light leading-relaxed text-base md:text-lg">
                <p>
                    Ju Jitsu Norge tilbyr et komplett system som dekker alle distanser av kamp. Vi trener på slag og spark (atemi), kast og fellinger (nage waza), samt låser og kontroll på bakken (ne waza).
                </p>
                <p>
                    I tillegg til det tekniske, legger vi stor vekt på mental robusthet, situasjonsforståelse og unnvikelse. Målet er å gjøre deg i stand til å håndtere stressende situasjoner med ro og selvsikkerhet.
                </p>
             </div>
          </div>

          <div className="relative h-[350px] md:h-[400px] hidden lg:block order-2 lg:order-2">
             <div className="absolute inset-0 border-2 border-[#e34b17] transform translate-x-4 translate-y-4" />
             <img 
                 src="https://images.unsplash.com/photo-1644594570589-ef85bd03169f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                 alt="Modern Training"
                 className="w-full h-full object-cover filter grayscale contrast-125 relative z-10"
             />
          </div>
        </div>
      </Section>
    </div>
  );
};