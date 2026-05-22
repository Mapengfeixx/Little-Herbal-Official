import React from 'react';

interface NavigationProps {
  currentView: string;
  onNavigate: (view: string) => void;
}

export default function Navigation({ currentView, onNavigate }: NavigationProps) {
  const tabs = [
    { id: 'home', label: '首页' },
    { id: 'upload', label: 'AI识本草' },
    { id: 'atlas', label: '本草图鉴' },
    { id: 'library', label: '数字绘本' },
    { id: 'games', label: '闯关游戏' },
    { id: 'helper', label: 'AI小助手' }
  ];

  const logoUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuBDfqVCk6l8KNT7j4RJavrzE2mjXhm_nUaFuJrVctO5s1--DDcU4oqq10ltpKPMSiLUBAnJe6zhoa7Q61qZ5ingojE21jM3csFFjBNa7vSP_qgrao9yFgtaGJb0YBn2xVnfoH-P-_I36UO9OBjA3FuNUA1S0AtHJ7fQv8I5IqggSr7rUGxYpQG3mVTIOen9C5w5AIIAKfWKs6-QhvBk_sFY6GCo46n2Jgxr8e0TCvvYSFZq3USV-T2JGZIVfIjHt7tsP7oIHPWlSnM";

  return (
    <header className="shrink-0 z-50 bg-surface shadow-sm opacity-90 relative">
      <div className="flex justify-between items-center px-4 md:px-10 w-full max-w-[1600px] mx-auto h-[72px]">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <img 
            alt="小小本草官 Logo" 
            className="h-10 w-10 object-contain rounded-full border-2 border-primary-container bg-surface shadow-sm" 
            src={logoUrl} 
          />
          <span className="text-title-sm font-title-sm text-primary font-bold hidden sm:block">小小本草官</span>
        </div>
        
        {/* Navigation Links */}
        <nav className="hidden md:flex gap-6 lg:gap-10 items-center h-full">
          {tabs.map(tab => {
            const isActive = currentView === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  if (tab.id === 'home' || tab.id === 'upload' || tab.id === 'atlas' || tab.id === 'library' || tab.id === 'games' || tab.id === 'helper') onNavigate(tab.id);
                }}
                className={`text-sm h-full flex items-center transition-all duration-300 active:scale-95 ${
                  isActive || currentView.startsWith(tab.id + ':')
                    ? 'text-primary font-bold border-b-[3px] border-primary pt-[3px]'
                    : 'text-on-surface-variant font-medium hover:text-primary pt-[3px] border-b-[3px] border-transparent'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </nav>
        
        {/* Actions / Avatar */}
        <div className="flex items-center gap-4 hidden md:flex">
          <button 
            onClick={() => onNavigate('profile')}
            className="w-10 h-10 rounded-full hover:bg-surface-container-high flex items-center justify-center text-on-surface-variant transition-colors"
          >
            <div className="w-10 h-10 rounded-full border-2 border-primary/20 p-[1px] overflow-hidden bg-white cursor-pointer hover:border-primary transition-colors flex items-center justify-center">
              <img 
                alt="User Avatar" 
                className="w-full h-full rounded-full object-contain" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbrkGMV6RVvklHezoSUS461pOmcOc7_V3WV9dvvQDHRXI-aFef3R008SBxUvTobj9YIVtojTcwAFGioot9j-Y5Yp0m4011D4Z4P4QrXCX3JlShvFOi-sOk3E0nFN8Sjh468p879ytOBMQM1yLJQJMCzksZxcbTyvCCZTKSRF1q_3kGgFMAcBYBm60xC_XD0UY26M-_rMXzFrsuM04Nq-Tc1TTrBWMEsnYB1kLoL-RkAGdIUvt5u2sVrodyyUY0mjhY-x01on1cvO2Baw" 
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button aria-label="Menu" className="md:hidden flex items-center justify-center p-2 text-primary">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </header>
  );
}
