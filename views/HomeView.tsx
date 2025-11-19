import React from 'react';
import { View } from '../types';
import { Button } from '../components/Button';
import { Section } from '../components/Section';
import { ChevronRight, Shield, Users, Zap } from 'lucide-react';
import { BELT_LEVELS, INSTRUCTORS } from '../constants';

interface HomeViewProps {
  onNavigate: (view: View) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
            <img 
                src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2069&auto=format&fit=crop"
                alt="Ju Jitsu Training"
                className="w-full h-full object-cover filter grayscale brightness-50"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-[#0c0c0c]/60 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0c0c0c_120%)]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl px-4 animate-in fade-in zoom-in duration-700">
          <h2 className="text-[#e34b17] font-bold tracking-[0.3em] uppercase mb-4 text-sm md:text-lg">
            Norges Tøffeste Kampsportmiljø
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase text-white mb-8 tracking-tighter leading-[0.9]">
            Mestre <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Kunsten</span><br/>
            <span className="relative inline-block">
                Av Selvforsvar
                <div className="absolute -bottom-2 left-0 w-full h-2 bg-[#e34b17] skew-x-[-20deg]" />
            </span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
            Ju Jitsu Norge tilbyr moderne trening med røtter i tradisjon. 
            Bli sterkere, tryggere og en del av et unikt fellesskap.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Button onClick={() => onNavigate(View.CURRICULUM)} className="text-lg px-10 py-4">
              Lær Pensum <ChevronRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" onClick={() => onNavigate(View.ABOUT)} className="text-lg px-10 py-4">
              Om Oss
            </Button>
          </div>
        </div>
      </div>

      {/* Quick Links / Teasers */}
      <Section className="border-t border-[#1a1a1a]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#121212] p-8 border border-[#1a1a1a] hover:border-[#e34b17] transition-colors group cursor-pointer" onClick={() => onNavigate(View.CURRICULUM)}>
            <Shield className="w-12 h-12 text-[#e34b17] mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold text-white uppercase mb-4">Pensum</h3>
            <p className="text-gray-400 mb-6">Fra hvitt til svart belte. Utforsk teknikkene som definerer vår stilart. Detaljerte beskrivelser og video.</p>
            <span className="text-[#e34b17] uppercase font-bold text-sm tracking-wider group-hover:underline">Se Pensum &rarr;</span>
          </div>

          <div className="bg-[#121212] p-8 border border-[#1a1a1a] hover:border-[#e34b17] transition-colors group cursor-pointer" onClick={() => onNavigate(View.INSTRUCTORS)}>
            <Users className="w-12 h-12 text-[#e34b17] mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold text-white uppercase mb-4">Instruktører</h3>
            <p className="text-gray-400 mb-6">Lær fra de beste. Våre instruktører har tiår med erfaring og dedikasjon til faget.</p>
            <span className="text-[#e34b17] uppercase font-bold text-sm tracking-wider group-hover:underline">Møt Teamet &rarr;</span>
          </div>

          <div className="bg-[#121212] p-8 border border-[#1a1a1a] hover:border-[#e34b17] transition-colors group cursor-pointer" onClick={() => onNavigate(View.INSPIRATION)}>
            <Zap className="w-12 h-12 text-[#e34b17] mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold text-white uppercase mb-4">Inspirasjon</h3>
            <p className="text-gray-400 mb-6">Galleri, sitater og høydepunkter fra trening og konkurranser. Få motivasjon til din neste økt.</p>
            <span className="text-[#e34b17] uppercase font-bold text-sm tracking-wider group-hover:underline">Bli Inspirert &rarr;</span>
          </div>
        </div>
      </Section>

      {/* Quick Belt Preview */}
      <Section darker className="border-y border-[#1a1a1a]">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
                <h2 className="text-4xl md:text-5xl font-black text-white uppercase mb-2">Graderingssystem</h2>
                <div className="h-1 w-24 bg-[#e34b17]" />
            </div>
            <Button variant="ghost" onClick={() => onNavigate(View.CURRICULUM)}>Se alle grader &rarr;</Button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {BELT_LEVELS.map((belt, index) => (
                <div key={index} className="bg-[#121212] p-4 text-center hover:-translate-y-2 transition-transform duration-300 cursor-default">
                    <div className={`w-full h-3 mb-4 ${belt.color} shadow-sm`} />
                    <h4 className="text-white font-bold uppercase text-sm tracking-wider">{belt.name}</h4>
                </div>
            ))}
        </div>
      </Section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <img 
            src="https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=2070&auto=format&fit=crop" 
            className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 brightness-[0.25]"
            alt="Dojo Background" 
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase mb-6 italic">
                "Smerten er midlertidig.<br/> <span className="text-[#e34b17]">Æren</span> er evig."
            </h2>
            <p className="text-gray-300 mb-10 text-lg">Start din reise i dag. Ta kontakt for prøvetime.</p>
            <Button onClick={() => onNavigate(View.CONTACT)} className="text-xl px-12 py-5 shadow-[0_0_30px_rgba(227,75,23,0.4)] hover:shadow-[0_0_50px_rgba(227,75,23,0.6)]">
                Start Nå
            </Button>
        </div>
      </section>
    </>
  );
};
