import React from 'react';

export default function Login({ navigate }: { navigate: (view: string) => void }) {
  const bgUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuAyrUbqwkKebvxEoQakTrl9UPYlDqDOEpqnTAF_oWvXaPeHbQAx4yhDkLl2xTB1ghUQltAilX91Z08X4se7d_cBorazVKpBvYbbM9ZEOCFJ6gJp4e84KPzU55J77v14x_-K5qYy5CwLysrVUTH-GVGGxKR-w9LGbLQ5hbRzP49m1U36ypyQP2k5GKFng78DQ75CnBW-LYJmzOTZBSzdyYxHzDCGaMa3GhWjBnrS7x4PwWi4j667RdB927Ia66PeZlC3mfmGf7qupoA";

  const customStyles = `
    @keyframes subtle-pulse {
        0%, 100% { box-shadow: 0 0 15px rgba(123, 163, 97, 0.2); }
        50% { box-shadow: 0 0 25px rgba(123, 163, 97, 0.5); }
    }
    .ai-glow-border {
        animation: subtle-pulse 4s infinite ease-in-out;
    }
    .scroll-edge::before, .scroll-edge::after {
        content: '';
        position: absolute;
        left: -10px;
        right: -10px;
        height: 16px;
        background: linear-gradient(90deg, #b1ad7d 0%, #eae4b1 20%, #b1ad7d 50%, #eae4b1 80%, #b1ad7d 100%);
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        z-index: 10;
    }
    .scroll-edge::before { top: -8px; }
    .scroll-edge::after { bottom: -8px; }
    .bg-cloud-pattern {
        background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 50 Q30 30 50 50 T80 50' fill='none' stroke='rgba(195,201,186,0.2)' stroke-width='1' stroke-linecap='round'/%3E%3Cpath d='M10 70 Q25 55 40 70 T70 70' fill='none' stroke='rgba(195,201,186,0.15)' stroke-width='1' stroke-linecap='round'/%3E%3C/svg%3E");
        background-size: 150px;
    }
  `;

  return (
    <div className="bg-surface text-on-surface antialiased h-screen overflow-hidden relative font-body-base">
      <style>{customStyles}</style>

      {/* Fullscreen Background */}
      <div className="fixed inset-0 z-0">
        <img 
          alt="A magical, nature-inspired scene" 
          className="w-full h-full object-cover object-center filter saturate-110" 
          src={bgUrl} 
        />
        {/* Soft gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-surface/30 to-surface/90"></div>
      </div>

      {/* Main Content Area */}
      <main className="relative z-10 flex h-screen w-full items-center justify-center md:justify-end px-4 sm:px-8 md:pr-16 lg:pr-32">
        
        {/* Login Card / Scroll */}
        <div className="relative w-full max-w-[420px] ai-glow-border scroll-edge">
          
          {/* Card Body */}
          <div className="bg-surface/85 backdrop-blur-xl border border-tertiary-container/50 rounded-2xl p-8 sm:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.08)] bg-cloud-pattern relative overflow-hidden flex flex-col gap-6">
            
            {/* Floating Leaves Decoration */}
            <span className="material-symbols-outlined absolute top-4 right-6 text-primary-fixed-dim/40 rotate-45 text-4xl">energy_savings_leaf</span>
            <span className="material-symbols-outlined absolute bottom-24 left-4 text-primary-fixed-dim/30 -rotate-12 text-3xl">psychiatry</span>
            
            {/* Header */}
            <div className="text-center space-y-2 relative z-10 mt-4">
              <h1 className="font-headline-md text-headline-md text-primary tracking-tight">欢迎来到百草园</h1>
              <p className="font-body-base text-body-base text-on-surface-variant">开启小小本草官的智能探索之旅</p>
            </div>
            
            {/* Form */}
            <form 
              className="space-y-5 relative z-10 mt-4" 
              onSubmit={(e) => {
                e.preventDefault();
                navigate('home');
              }}
            >
              {/* ID Input */}
              <div className="space-y-1">
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-primary group-focus-within:text-surface-tint transition-colors">local_florist</span>
                  </div>
                  <input 
                    className="block w-full pl-12 pr-4 py-4 rounded-xl border border-outline-variant bg-surface-container-low/80 text-on-surface font-body-base placeholder:text-on-surface-variant/50 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all duration-300" 
                    placeholder="小药童编号" 
                    required 
                    type="text" 
                  />
                </div>
              </div>
              
              {/* Password Input */}
              <div className="space-y-1">
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-primary group-focus-within:text-surface-tint transition-colors">key</span>
                  </div>
                  <input 
                    className="block w-full pl-12 pr-4 py-4 rounded-xl border border-outline-variant bg-surface-container-low/80 text-on-surface font-body-base placeholder:text-on-surface-variant/50 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all duration-300" 
                    placeholder="通行密令" 
                    required 
                    type="password" 
                  />
                </div>
              </div>
              
              {/* Action Button */}
              <button 
                className="w-full flex items-center justify-center gap-2 py-4 mt-4 bg-primary text-on-primary rounded-full font-title-sm text-title-sm shadow-[0_4px_12px_rgba(67,104,45,0.25)] hover:bg-surface-tint hover:shadow-[0_6px_16px_rgba(67,104,45,0.4)] active:scale-[0.98] transition-all duration-200 group overflow-hidden relative" 
                type="submit"
              >
                <span className="relative z-10">开启探索</span>
                <span className="material-symbols-outlined relative z-10 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                {/* Button Glow Effect */}
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
            </form>
            
            {/* Footer Links */}
            <div className="flex items-center justify-between mt-2 text-sm font-body-base text-secondary relative z-10 px-2">
              <button className="hover:text-primary transition-colors flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">family_restroom</span>
                家长入口
              </button>
              <button className="hover:text-primary transition-colors flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">person_add</span>
                注册新药童
              </button>
            </div>
            
            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-outline-variant/40 to-transparent my-2"></div>
            
            {/* Mandatory Safety Notice */}
            <div className="text-center px-2 pb-4">
              <p className="font-body-base text-[13px] leading-relaxed text-tertiary/90 font-medium">
                本平台仅用于传统文化学习与科普教育，不作为诊断、治疗或用药依据。
              </p>
            </div>
            
          </div>
        </div>
      </main>
    </div>
  );
}
