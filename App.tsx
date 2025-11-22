import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { View } from './types';
import { HomeView } from './views/HomeView';
import { CurriculumView } from './views/CurriculumView';
import { AboutView } from './views/AboutView';
import { ContactView } from './views/ContactView';
import { AboutJuJitsuView } from './views/AboutJuJitsuView';
import { ClubsView } from './views/ClubsView';
import { EventsView } from './views/EventsView';
import { PageTransition } from './components/PageTransition';
import { LOGO_URL } from './constants';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.HOME);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const renderView = () => {
    switch (currentView) {
      case View.HOME:
        return <HomeView onNavigate={setCurrentView} />;
      case View.ABOUT:
        return <AboutView />;
      case View.ABOUT_JUJITSU:
        return <AboutJuJitsuView />;
      case View.CLUBS:
        return <ClubsView />;
      case View.EVENTS:
        return <EventsView />;
      case View.CURRICULUM:
        return <CurriculumView />;
      case View.CONTACT:
        return <ContactView />;
      default:
        return <HomeView onNavigate={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0c0c0c] text-gray-200 font-sans selection:bg-[#e34b17] selection:text-white flex flex-col">
      <Header currentView={currentView} onNavigate={setCurrentView} />
      
      <main className="flex-grow pt-0 flex flex-col">
        {/* The key prop ensures the component unmounts and remounts, triggering the animation */}
        <PageTransition key={currentView}>
            {renderView()}
        </PageTransition>
      </main>

      <footer className="bg-black py-12 px-4 md:px-8 border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <img 
              src={LOGO_URL} 
              alt="Ju Jitsu Norge" 
              className="h-12 w-auto mb-4 opacity-80 hover:opacity-100 transition-opacity" 
            />
            <p className="text-sm text-gray-500">Tradisjon. Effektivitet. Fellesskap.</p>
          </div>
          <div className="flex gap-6 text-gray-500 text-sm font-medium uppercase tracking-wider flex-wrap justify-center">
            <button onClick={() => setCurrentView(View.ABOUT)} className="hover:text-[#e34b17] transition-colors">Om Oss</button>
            <button onClick={() => setCurrentView(View.CONTACT)} className="hover:text-[#e34b17] transition-colors">Kontakt</button>
            <button onClick={() => setCurrentView(View.CURRICULUM)} className="hover:text-[#e34b17] transition-colors">Pensum</button>
          </div>
          <div className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Ju Jitsu Norge.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;