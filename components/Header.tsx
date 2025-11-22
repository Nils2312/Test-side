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
  const [hoveredLabel, setHoveredLabel] = useState<string | null>(null);
  const [isNavHovered, setIsNavHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex items-center px-4 md:px-8 ${
        isScrolled ? 'bg-[#0c0c0c]/95 backdrop-blur-md h-16' : 'bg-transparent h-24'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center w-full h-full">
        {/* Logo Area */}
        <div 
          className="flex items-center cursor-pointer group h-full shrink-0" 
          onClick={() => onNavigate(View.HOME)}
        >
          <div className={`relative w-auto transition-all duration-300 group-hover:scale-105 flex items-center ${isScrolled ? 'h-10' : 'h-10 md:h-16'}`}>
            <img 
              src={LOGO_URL} 
              alt="Ju Jitsu Norge Logo" 
              className="h-full w-auto object-contain drop-shadow-lg block" 
            />
          </div>
        </div>

        {/* Desktop Nav - Animated Underline Effect */}
        <nav 
          className="hidden lg:flex items-center gap-8"
          onMouseEnter={() => setIsNavHovered(true)}
          onMouseLeave={() => {
            setIsNavHovered(false);
            setHoveredLabel(null);
          }}
        >
          {NAV_ITEMS.map((item) => {
            const isActive = currentView === item.view;
            const isHovered = hoveredLabel === item.label;

            // Logic:
            // 1. Text is orange if: (It's active AND we aren't hovering the menu elsewhere) OR (It's currently hovered)
            // 2. Line is shown if: (It's active AND we aren't hovering the menu elsewhere) OR (It's currently hovered)
            
            // This prevents the "Active" line from flashing back on when moving between buttons in the gap.
            const shouldHighlight = (isActive && !isNavHovered) || isHovered;

            return (
              <button
                key={item.label}
                onClick={() => onNavigate(item.view)}
                onMouseEnter={() => setHoveredLabel(item.label)}
                onMouseLeave={() => setHoveredLabel(null)}
                className="group relative py-2"
              >
                <span className={`
                  text-xs xl:text-sm font-bold uppercase tracking-wider transition-colors duration-300
                  ${shouldHighlight ? 'text-[#e34b17]' : 'text-gray-300'}
                `}>
                  {item.label}
                </span>
                
                {/* The Animated Line */}
                <span className={`
                  absolute bottom-0 left-0 w-full h-[2px] bg-[#e34b17] 
                  transition-transform duration-300 ease-out
                  ${shouldHighlight 
                    ? 'scale-x-100 origin-left' 
                    : 'scale-x-0 origin-right'
                  }
                `} />
              </button>
            );
          })}
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-white hover:text-[#e34b17] flex items-center justify-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#0c0c0c] border-b border-[#e34b17] p-4 flex flex-col gap-4 shadow-2xl max-h-[80vh] overflow-y-auto">
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