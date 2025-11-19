import React from 'react';
import { JJN_ORANGE } from '../constants';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  
  const baseStyles = "uppercase font-bold tracking-wider py-3 px-6 transition-all duration-200 flex items-center justify-center gap-2 text-sm md:text-base group relative overflow-hidden";
  
  const variants = {
    primary: `bg-[#e34b17] text-white hover:bg-[#c23a0e] border border-[#e34b17]`,
    outline: `bg-transparent text-[#e34b17] border-2 border-[#e34b17] hover:bg-[#e34b17] hover:text-white`,
    ghost: `bg-transparent text-white hover:text-[#e34b17]`
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className} skew-x-[-10deg] hover:skew-x-0`}
      {...props}
    >
      <span className="skew-x-[10deg] group-hover:skew-x-0 inline-block transition-transform duration-200">
        {children}
      </span>
    </button>
  );
};
