import React from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { MapPin, Mail, Phone } from 'lucide-react';

export const ContactView: React.FC = () => {
  return (
    <div className="pt-20">
      <Section className="min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div className="space-y-12">
                <div>
                    <h1 className="text-5xl font-black uppercase text-white mb-6">Ta Kontakt</h1>
                    <p className="text-gray-400 text-lg">
                        Har du spørsmål? Fyll ut skjemaet under, eller kom innom dojoen for en prat. Vi svarer så fort vi kan.
                    </p>
                </div>

                <div className="space-y-6">
                    <div className="flex items-start gap-6 p-6 border border-[#1a1a1a] bg-[#080808] hover:border-[#e34b17] transition-colors group">
                        <MapPin className="text-[#e34b17] w-8 h-8 mt-1 group-hover:animate-bounce" />
                        <div>
                            <h3 className="text-white font-bold uppercase tracking-wider mb-2">Dojo Lokasjon</h3>
                            <p className="text-gray-400">Storgata 12, 0155 Oslo</p>
                            <p className="text-gray-500 text-sm mt-1">Inngang fra bakgården</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-6 p-6 border border-[#1a1a1a] bg-[#080808] hover:border-[#e34b17] transition-colors">
                        <Mail className="text-[#e34b17] w-8 h-8 mt-1" />
                        <div>
                            <h3 className="text-white font-bold uppercase tracking-wider mb-2">E-post</h3>
                            <p className="text-gray-400">kontakt@jujitsunorge.no</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-6 p-6 border border-[#1a1a1a] bg-[#080808] hover:border-[#e34b17] transition-colors">
                        <Phone className="text-[#e34b17] w-8 h-8 mt-1" />
                        <div>
                            <h3 className="text-white font-bold uppercase tracking-wider mb-2">Telefon</h3>
                            <p className="text-gray-400">+47 123 45 678</p>
                            <p className="text-gray-500 text-sm mt-1">Man-Fre: 16:00 - 21:00</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form */}
            <div className="bg-[#121212] p-8 md:p-12 border border-[#1a1a1a]">
                <h2 className="text-2xl font-bold text-white uppercase mb-8 flex items-center gap-4">
                    <span className="w-2 h-8 bg-[#e34b17]"></span>
                    Send Melding
                </h2>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs uppercase font-bold tracking-widest text-gray-500">Navn</label>
                            <input type="text" className="w-full bg-[#0c0c0c] border border-[#333] p-4 text-white focus:border-[#e34b17] focus:outline-none transition-colors" placeholder="Ditt navn" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs uppercase font-bold tracking-widest text-gray-500">E-post</label>
                            <input type="email" className="w-full bg-[#0c0c0c] border border-[#333] p-4 text-white focus:border-[#e34b17] focus:outline-none transition-colors" placeholder="din@epost.no" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs uppercase font-bold tracking-widest text-gray-500">Emne</label>
                        <input type="text" className="w-full bg-[#0c0c0c] border border-[#333] p-4 text-white focus:border-[#e34b17] focus:outline-none transition-colors" placeholder="Hva gjelder det?" />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs uppercase font-bold tracking-widest text-gray-500">Melding</label>
                        <textarea rows={5} className="w-full bg-[#0c0c0c] border border-[#333] p-4 text-white focus:border-[#e34b17] focus:outline-none transition-colors" placeholder="Skriv din melding her..."></textarea>
                    </div>

                    <Button type="submit" fullWidth className="mt-4">
                        Send Melding
                    </Button>
                </form>
            </div>

        </div>
      </Section>
    </div>
  );
};