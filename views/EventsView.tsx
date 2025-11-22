import React from 'react';
import { Section } from '../components/Section';
import { Facebook } from 'lucide-react';

export const EventsView: React.FC = () => {
  return (
    <div className="pt-20">
      <Section className="min-h-screen">
        <div className="text-center mb-16">
            <h1 className="text-5xl font-black uppercase text-white mb-6">Arrangementer</h1>
            <p className="text-gray-400">Følg med på hva som skjer i Ju Jitsu Norge.</p>
        </div>

        <div className="max-w-3xl mx-auto">
            {/* Visual representation of a Facebook Feed Plugin */}
            <div className="bg-white h-[600px] w-full flex flex-col items-center justify-center text-black relative overflow-hidden border-4 border-[#1877F2]">
                <div className="absolute top-0 left-0 right-0 bg-[#1877F2] p-4 flex items-center gap-4 text-white">
                    <Facebook className="w-8 h-8 fill-white" />
                    <span className="font-bold text-lg">Ju Jitsu Norge - Facebook Feed</span>
                </div>
                
                <div className="text-center p-8 opacity-50">
                    <Facebook className="w-24 h-24 mx-auto mb-4 text-[#1877F2]" />
                    <h3 className="text-2xl font-bold mb-2">Koblet til Facebook</h3>
                    <p>Her vil det dukke opp arrangementer, innlegg og nyheter direkte fra vår Facebook-side.</p>
                    <p className="mt-4 text-xs font-mono bg-gray-200 p-2 inline-block rounded">
                        &lt;iframe src="facebook-page-plugin" ... &gt;&lt;/iframe&gt;
                    </p>
                </div>
            </div>
        </div>
      </Section>
    </div>
  );
};