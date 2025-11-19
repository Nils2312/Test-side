import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS, LOGO_URL } from '../constants';
import { View } from '../types';

interface HeaderProps {
  currentView: View;
  onNavigate: (view: View) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0c0c0c]/95 backdrop-blur-md border-b border-[#1a1a1a] py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo Area */}
        <div 
          className="flex items-center gap-3 cursor-pointer group" 
          onClick={() => onNavigate(View.HOME)}
        >
          <div className="relative h-12 w-12 md:h-16 md:w-16 transition-transform duration-300 group-hover:scale-105">
            <img src={LOGO_URL} alt="Ju Jitsu Norge Logo" className="h-full w-full object-contain drop-shadow-lg" />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold text-lg md:text-xl uppercase tracking-widest leading-none">Ju Jitsu</span>
            <span className="text-[#e34b17] font-bold text-sm md:text-base uppercase tracking-[0.3em] leading-none">Norge</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              onClick={() => onNavigate(item.view)}
              className={`text-sm font-bold uppercase tracking-wider transition-colors duration-200 hover:text-[#e34b17] ${
                currentView === item.view ? 'text-[#e34b17] border-b-2 border-[#e34b17]' : 'text-gray-300'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white hover:text-[#e34b17]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0c0c0c] border-b border-[#e34b17] p-4 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top-5">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              onClick={() => {
                onNavigate(item.view);
                setMobileMenuOpen(false);
              }}
              className={`text-lg font-bold uppercase tracking-wider py-2 text-left border-l-4 pl-4 transition-all ${
                currentView === item.view 
                  ? 'border-[#e34b17] text-white bg-[#1a1a1a]' 
                  : 'border-transparent text-gray-400 hover:text-[#e34b17] hover:border-[#e34b17]/50'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
