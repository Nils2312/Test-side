import React, { useState } from 'react';
import { Section } from '../components/Section';
import { BELT_LEVELS } from '../constants';
import { Button } from '../components/Button';
import { getTechniqueDetails } from '../services/geminiService';
import { Brain, X } from 'lucide-react';

export const CurriculumView: React.FC = () => {
  const [selectedBelt, setSelectedBelt] = useState<number | null>(null);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiContent, setAiContent] = useState<string | null>(null);
  const [activeTechnique, setActiveTechnique] = useState<string | null>(null);

  const handleExplainTechnique = async (technique: string) => {
    setActiveTechnique(technique);
    setAiLoading(true);
    setAiContent(null);
    
    const explanation = await getTechniqueDetails(technique);
    setAiContent(explanation);
    setAiLoading(false);
  };

  return (
    <div className="pt-20">
      <Section darker className="min-h-screen">
        <div className="mb-12 text-center">
          <h1 className="text-5xl md:text-7xl font-black uppercase text-white mb-4 tracking-tight">
            Vårt <span className="text-[#e34b17]">Pensum</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Strukturert læring fra nybegynner til mester. Velg et belte for å se kravene.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Belt List Navigation */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {BELT_LEVELS.map((belt, index) => (
              <button
                key={index}
                onClick={() => {
                    setSelectedBelt(index);
                    setAiContent(null);
                    setActiveTechnique(null);
                }}
                className={`p-6 text-left group transition-all duration-300 relative overflow-hidden border-l-4 ${
                  selectedBelt === index 
                    ? 'bg-[#1a1a1a] border-[#e34b17]' 
                    : 'bg-[#0c0c0c] border-gray-800 hover:bg-[#121212]'
                }`}
              >
                <div className="flex items-center justify-between relative z-10">
                   <div>
                       <h3 className={`text-xl font-bold uppercase ${selectedBelt === index ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                           {belt.name}
                       </h3>
                   </div>
                   <div className={`h-4 w-4 rounded-full ${belt.color} shadow-sm`} />
                </div>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="lg:col-span-8">
            {selectedBelt !== null ? (
              <div className="bg-[#121212] border border-[#1a1a1a] p-8 animate-in slide-in-from-right-5 duration-500 relative">
                 {/* Belt Header */}
                 <div className="flex items-center gap-4 mb-6 border-b border-[#1a1a1a] pb-6">
                    <div className={`h-8 w-8 md:h-12 md:w-12 ${BELT_LEVELS[selectedBelt].color} shadow-lg`} />
                    <div>
                        <h2 className="text-3xl md:text-4xl font-black uppercase text-white">
                            {BELT_LEVELS[selectedBelt].name}
                        </h2>
                        <p className="text-gray-400 mt-1">{BELT_LEVELS[selectedBelt].description}</p>
                    </div>
                 </div>

                 {/* Techniques List */}
                 <div className="grid grid-cols-1 gap-4">
                    {BELT_LEVELS[selectedBelt].techniques.map((tech, idx) => (
                        <div key={idx} className="bg-[#0c0c0c] p-4 border border-[#1a1a1a] flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                            <span className="text-lg font-medium text-gray-200">{tech}</span>
                            <Button 
                                variant="outline" 
                                className="text-xs py-2 px-4"
                                onClick={() => handleExplainTechnique(tech)}
                            >
                                <Brain className="w-4 h-4 mr-2" />
                                Sensei AI: Forklar
                            </Button>
                        </div>
                    ))}
                 </div>

                 {/* AI Overlay/Modal for explanation */}
                 {(aiLoading || aiContent) && (
                     <div className="mt-8 bg-[#1a1a1a] border-l-4 border-[#e34b17] p-6 relative animate-in fade-in">
                        <div className="flex items-center gap-2 mb-4 text-[#e34b17] font-bold uppercase tracking-wider text-sm">
                            <Brain className="w-5 h-5" />
                            <span>Sensei AI Forklarer: {activeTechnique}</span>
                        </div>
                        {aiLoading ? (
                            <div className="flex gap-2 items-center text-gray-400">
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
                            </div>
                        ) : (
                            <p className="text-gray-300 italic leading-relaxed">
                                "{aiContent}"
                            </p>
                        )}
                        <button 
                            onClick={() => {
                                setAiContent(null);
                                setActiveTechnique(null);
                                setAiLoading(false);
                            }}
                            className="absolute top-2 right-2 text-gray-500 hover:text-white"
                        >
                            <X size={20} />
                        </button>
                     </div>
                 )}

              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-gray-500 border-2 border-dashed border-[#1a1a1a] p-12 min-h-[400px]">
                <Brain className="w-16 h-16 mb-4 opacity-20" />
                <p className="uppercase tracking-widest">Velg et beltegrad for å se detaljer</p>
              </div>
            )}
          </div>
        </div>
      </Section>
    </div>
  );
};
