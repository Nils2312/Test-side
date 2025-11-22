import React from 'react';
import { Section } from '../components/Section';
import { MapPin } from 'lucide-react';

export const ClubsView: React.FC = () => {
  const clubs = [
      { city: "Oslo", name: "Oslo Ju Jitsu Klubb", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
      { city: "Bærum", name: "Bærum Ju Jitsu Klubb", desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
      { city: "Sarpsborg", name: "Sentrum Kampsport", desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." }
  ];

  return (
    <div className="pt-20">
      <Section>
          <div className="text-center mb-16">
            <h1 className="text-5xl font-black uppercase text-white mb-6">Våre Klubber</h1>
            <p className="text-gray-400">Finn en klubb nær deg og bli en del av fellesskapet.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {clubs.map((club, idx) => (
                  <div key={idx} className="bg-[#121212] border border-[#1a1a1a] p-8 hover:border-[#e34b17] transition-colors group">
                      <MapPin className="text-[#e34b17] w-10 h-10 mb-6 group-hover:animate-bounce" />
                      <h2 className="text-2xl font-bold text-white uppercase mb-2">{club.name}</h2>
                      <h3 className="text-[#e34b17] font-bold uppercase text-sm tracking-widest mb-4">{club.city}</h3>
                      <p className="text-gray-500 italic">
                          {club.desc}
                      </p>
                  </div>
              ))}
          </div>
      </Section>
    </div>
  );
};