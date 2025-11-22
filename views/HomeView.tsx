import React from 'react';
import { View } from '../types';
import { Button } from '../components/Button';
import { Section } from '../components/Section';
import { Calendar } from 'lucide-react';

interface HomeViewProps {
  onNavigate: (view: View) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden flex items-center justify-center pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
            <img 
                src="https://images.unsplash.com/photo-1585537884613-1a9bcd024983?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Ju Jitsu Training"
                className="w-full h-full object-cover filter grayscale brightness-50"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-[#0c0c0c]/60 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0c0c0c_120%)]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl px-4 pt-20">
          <h2 className="text-[#e34b17] font-bold tracking-[0.3em] uppercase mb-4 text-xs md:text-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
            Norges Tøffeste Kampsportmiljø
          </h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase text-white mb-6 tracking-tighter leading-[0.9] animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            MESTRE KUNSTEN AV <br/>
            SELVFORSVAR
          </h1>
          <p className="text-gray-300 text-sm md:text-base max-w-xl mx-auto mb-10 font-light animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            Ju Jitsu Norge tilbyr moderne trening med røtter i tradisjon. 
            Bli sterkere, tryggere og en del av et unikt fellesskap.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
            <Button onClick={() => onNavigate(View.CURRICULUM)} className="text-base px-8 py-3">
              Se Pensum
            </Button>
            <Button variant="outline" onClick={() => onNavigate(View.ABOUT_JUJITSU)} className="text-base px-8 py-3">
              Lær om Ju Jitsu
            </Button>
          </div>
        </div>
      </div>

      {/* About Us Teaser Section */}
      <Section className="border-t border-[#1a1a1a]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-black text-white uppercase">
                    Hvem <span className="text-[#e34b17]">Er Vi?</span>
                </h2>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                    Ju Jitsu Norge er en paraplyorganisasjon som samler klubber over hele landet. 
                    Vårt mål er å fremme idretten, skape et trygt treningsmiljø og utvikle utøvere på alle nivåer.
                    Vi bygger broer mellom tradisjon og effektivitet.
                </p>
                <Button variant="outline" onClick={() => onNavigate(View.ABOUT)}>
                    Lær Mer Om Oss
                </Button>
            </div>
            <div className="relative h-[350px] md:h-[400px] hidden md:block">
                <div className="absolute inset-0 border-2 border-[#e34b17] transform translate-x-4 translate-y-4" />
                <img 
                    src="https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=2070&auto=format&fit=crop" 
                    alt="Dojo Community"
                    className="w-full h-full object-cover filter grayscale contrast-125 relative z-10"
                />
            </div>
        </div>
      </Section>

      {/* What is Ju Jitsu Teaser Section (New) */}
      <Section className="border-t border-[#1a1a1a]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[350px] md:h-[400px] hidden md:block order-2 md:order-1">
                <div className="absolute inset-0 border-2 border-[#e34b17] transform -translate-x-4 translate-y-4" />
                <img 
                    src="https://images.unsplash.com/photo-1599677100542-907e96e98c09?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Ju Jitsu Action"
                    className="w-full h-full object-cover filter grayscale contrast-125 relative z-10"
                />
            </div>
            <div className="space-y-6 order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-black text-white uppercase">
                    Hva Er <span className="text-[#e34b17]">Ju Jitsu?</span>
                </h2>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                    Ju Jitsu, "den myke kunst", er et komplett selvforsvarssystem. 
                    Det handler ikke om å møte styrke med styrke, men om å bruke motstanderens kraft til din fordel.
                    Vi kombinerer slag, spark, kast og bakkekamp til et effektivt system for moderne selvforsvar.
                </p>
                <Button variant="outline" onClick={() => onNavigate(View.ABOUT_JUJITSU)}>
                    Les Om Ju Jitsu
                </Button>
            </div>
        </div>
      </Section>

      {/* Grading System Teaser */}
      <Section darker className="border-y border-[#1a1a1a]">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase mb-4">Gradering</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
                Veien til svart belte starter her. Vi har tilpassede pensum for både barn og voksne.
            </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Barn & Ungdom Card */}
            <div 
                onClick={() => onNavigate(View.CURRICULUM)}
                className="relative h-[350px] group cursor-pointer overflow-hidden border border-[#1a1a1a] hover:border-[#e34b17] transition-all duration-500"
            >
                {/* Background Image */}
                <img 
                    src="https://images.unsplash.com/photo-1688744248782-eb3194911ade?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Kids Training" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-white uppercase mb-2 group-hover:text-[#e34b17] transition-colors">Barn & Ungdom</h3>
                    <p className="text-gray-300 text-sm md:text-base mb-6 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                        Junior 8-16 år. Fokus på disiplin, respekt og teknisk utvikling i trygge rammer.
                    </p>
                    <span className="text-[#e34b17] uppercase font-bold text-xs tracking-wider flex items-center gap-2">
                        Se Barnepensum <span className="group-hover:translate-x-2 transition-transform">&rarr;</span>
                    </span>
                </div>
            </div>

            {/* Voksne Card */}
            <div 
                onClick={() => onNavigate(View.CURRICULUM)}
                className="relative h-[350px] group cursor-pointer overflow-hidden border border-[#1a1a1a] hover:border-[#e34b17] transition-all duration-500"
            >
                {/* Background Image */}
                <img 
                    src="https://images.unsplash.com/photo-1599677099973-995395c04be1?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Adult Training" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-white uppercase mb-2 group-hover:text-[#e34b17] transition-colors">Voksne</h3>
                    <p className="text-gray-300 text-sm md:text-base mb-6 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                        Komplett teknisk system for selvforsvar og fysisk utvikling.
                    </p>
                    <span className="text-[#e34b17] uppercase font-bold text-xs tracking-wider flex items-center gap-2">
                        Se Voksenpensum <span className="group-hover:translate-x-2 transition-transform">&rarr;</span>
                    </span>
                </div>
            </div>
        </div>
      </Section>

      {/* Facebook Events Teaser */}
      <Section>
        <div className="max-w-4xl mx-auto text-center">
             <h2 className="text-3xl md:text-4xl font-black text-white uppercase mb-8 flex items-center justify-center gap-4">
                <Calendar className="text-[#e34b17] w-8 h-8" />
                Hva Skjer?
             </h2>
             <p className="text-gray-400 mb-12 text-base md:text-lg">
                 Hold deg oppdatert på leire, graderinger og sosiale samlinger via vår Facebook-feed.
             </p>
             
             {/* Placeholder for Facebook Feed Widget */}
             <div className="bg-[#1a1a1a] border border-[#333] p-8 min-h-[300px] flex items-center justify-center flex-col gap-4 rounded-sm">
                 <div className="text-gray-500 font-mono text-sm">-- Facebook Event Feed Integration --</div>
                 <p className="text-gray-400 max-w-md">
                     Her vil kommende arrangementer fra Ju Jitsu Norge sin Facebook-side vises automatisk.
                 </p>
                 <Button variant="outline" onClick={() => onNavigate(View.EVENTS)}>
                     Gå til Arrangementer
                 </Button>
             </div>
        </div>
      </Section>
    </>
  );
};