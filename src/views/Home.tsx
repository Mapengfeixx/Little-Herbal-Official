import React from 'react';
import Navigation from '../components/Navigation';

export default function Home({ navigate }: { navigate: (view: string) => void }) {
  const customStyles = `
    .ai-glass {
        background: rgba(255, 255, 255, 0.7);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(123, 163, 97, 0.3);
    }
    .bamboo-texture {
        background-color: var(--color-background);
        background-image: repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(100,80,50,0.03) 40px, rgba(100,80,50,0.03) 42px);
    }
  `;

  return (
    <div className="bg-background text-on-background font-body-base antialiased h-screen w-screen overflow-hidden flex flex-col selection:bg-primary-container selection:text-on-primary-container">
      <style>{customStyles}</style>
      
      <Navigation currentView="home" onNavigate={navigate} />

      {/* Main Content Canvas (Dashboard Layout) */}
      <main className="flex-1 min-h-0 w-full max-w-[1600px] mx-auto p-4 md:p-6 bamboo-texture flex flex-col gap-4 md:gap-6 overflow-hidden">
        
        {/* Top Section: Hero Banner (~35-40%) */}
        <section className="h-[35%] md:h-[40%] shrink-0 relative rounded-3xl overflow-hidden shadow-scroll group">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" 
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida/ADBb0uiOChR5cDXr22YB29Q3dGL6IZjZkLCxZ8bQbJ4LvC6BBTdWyPkAG0u2nM1T0rSUpig1fAzpwv7ihjUUyhJE3QL1OtMFt1mbvJxIif5yZwO88uJ6Q_kfcMNsJnnbXdlok8I_MDE7uwXoszwWCD_eKDo5zdImroRai2la2HCmmkk8vBfJGeeQYRwr4TTLKe7p7nyI6YO_d1h0CsMZH_iPnc7DmLnRyF3VzuMb6e5mBZRemBvvEDHIufva6Vg')" }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-surface/95 via-surface/70 to-transparent"></div>
          
          <div className="relative z-10 h-full p-6 md:p-10 flex flex-col justify-center w-full md:w-3/4 lg:w-2/3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full ai-glass text-primary shadow-ai-glow mb-4 w-fit">
              <span className="material-symbols-outlined text-sm">auto_awesome</span>
              <span className="text-[10px] md:text-xs font-bold tracking-wider">魔法AI学习体验</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-display-lg text-primary mb-2 md:mb-4 font-guofeng leading-tight">小小本草官</h1>
            <p className="text-lg md:text-2xl font-headline-md text-on-surface mb-2 md:mb-3">AI驱动的儿童中华本草文化互动学习平台</p>
            <p className="text-sm md:text-base text-on-surface-variant mb-6 max-w-md hidden sm:block">"识一味本草，听一个故事，懂一种文化。"</p>
            
            <button 
                onClick={() => navigate('upload')}
                className="flex items-center justify-center px-6 py-3 h-12 w-fit rounded-xl bg-primary text-on-primary font-bold text-sm md:text-base hover:bg-primary/90 transition-all shadow-ai-glow hover:-translate-y-1 active:scale-95 group/btn"
            >
              <span className="material-symbols-outlined mr-2 group-hover/btn:rotate-12 transition-transform">explore</span>
              开启探索之旅
            </button>
          </div>
        </section>

        {/* Bottom Section: Features & Today's Herb (~60-65%) */}
        <div className="flex-1 min-h-0 flex flex-col lg:flex-row gap-4 md:gap-6">
          
          {/* Left: Functional Cards Grid */}
          <section className="flex-1 lg:flex-[1.2] flex flex-col gap-4 min-h-0">
            <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full">
              
              {/* Feature 1 */}
              <div onClick={() => navigate('upload')} className="bg-surface rounded-3xl p-4 md:p-6 shadow-paper border border-surface-container hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer flex flex-col justify-center gap-3 group overflow-hidden relative">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-container/10 rounded-full -z-10 group-hover:scale-125 transition-transform"></div>
                <div className="shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container shadow-sm group-hover:shadow-ai-glow transition-shadow">
                  <span className="material-symbols-outlined text-2xl md:text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>linked_camera</span>
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-bold text-on-surface mb-1">AI识本草</h3>
                  <p className="text-xs md:text-sm text-on-surface-variant line-clamp-2 leading-snug">拍一拍，认识身边的本草朋友.</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div onClick={() => navigate('atlas')} className="bg-surface rounded-3xl p-4 md:p-6 shadow-paper border border-surface-container hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer flex flex-col justify-center gap-3 group overflow-hidden relative">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-tertiary-container/10 rounded-full -z-10 group-hover:scale-125 transition-transform"></div>
                <div className="shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-tertiary-container flex items-center justify-center text-on-tertiary-container shadow-sm transition-shadow">
                  <span className="material-symbols-outlined text-2xl md:text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>menu_book</span>
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-bold text-on-surface mb-1">本草图鉴</h3>
                  <p className="text-xs md:text-sm text-on-surface-variant line-clamp-2 leading-snug">收集卡片，建立文化图鉴.</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div onClick={() => navigate('library')} className="bg-surface rounded-3xl p-4 md:p-6 shadow-paper border border-surface-container hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer flex flex-col justify-center gap-3 group overflow-hidden relative">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary-container/10 rounded-full -z-10 group-hover:scale-125 transition-transform"></div>
                <div className="shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container shadow-sm transition-shadow">
                  <span className="material-symbols-outlined text-2xl md:text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>auto_stories</span>
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-bold text-on-surface mb-1">数字绘本</h3>
                  <p className="text-xs md:text-sm text-on-surface-variant line-clamp-2 leading-snug">跟随小草官走进中华故事.</p>
                </div>
              </div>

              {/* Feature 4 */}
              <div 
                onClick={() => navigate('games')}
                className="bg-surface rounded-3xl p-4 md:p-6 shadow-paper border border-surface-container hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer flex flex-col justify-center gap-3 group overflow-hidden relative"
              >
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-error-container/10 rounded-full -z-10 group-hover:scale-125 transition-transform"></div>
                <div className="shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-error-container flex items-center justify-center text-on-error-container shadow-sm transition-shadow">
                  <span className="material-symbols-outlined text-2xl md:text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>sports_esports</span>
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-bold text-on-surface mb-1">闯关游戏</h3>
                  <p className="text-xs md:text-sm text-on-surface-variant line-clamp-2 leading-snug">边玩边学，获得本草徽章.</p>
                </div>
              </div>
              
            </div>
          </section>

          {/* Right: Today's Recommended Herb */}
          <section className="flex-1 lg:flex-[1.5] bg-surface-bright rounded-3xl p-6 md:p-8 shadow-scroll relative overflow-hidden border border-surface-container-high flex flex-col min-h-0">
            {/* Decorative BG Elements */}
            <div className="absolute -right-10 -top-10 w-48 h-48 bg-primary-container rounded-full blur-3xl opacity-20 pointer-events-none"></div>
            
            <div className="flex justify-between items-start mb-4 relative z-10 shrink-0">
              <div>
                <h2 className="text-3xl md:text-4xl font-display-lg text-primary font-guofeng mb-1">金银花</h2>
                <p className="text-sm text-secondary font-guofeng">Honeysuckle</p>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-tertiary-container text-on-tertiary-container text-xs shadow-sm">
                <span className="material-symbols-outlined text-[14px]">calendar_today</span>
                <span className="font-bold">今日明星</span>
              </div>
            </div>

            {/* Herb Image Area */}
            <div className="flex-1 min-h-0 relative flex items-center justify-center py-4 z-10">
              <div className="h-full aspect-square max-h-[300px] md:max-h-full rounded-full border-8 border-surface shadow-lg overflow-hidden relative group">
                <img 
                  alt="金银花手绘插画" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfrAqPisoltO6-6nbGuUW6P40krH1BHXh5sa_rfOjjFAD6f7oXvzJhPUKM4ZAoFqA-WNdSJTIS6qlX267mTlWZ4EqrwJCKDBG_FvtizQenaLakOBuqH_yxnSnYEHVV1RCic9hEkgj3LDYno8LXnpTM2ce1IsPX3036xTt15pNUgusotbT2iG4106IXga7w9OvRSQ0rBdUKqNpU0n19l85mNK0oAu7cyfE6bYGGpIXuSssx6OzEsoIFeo5X00eKL2-LY9SYeJzERhk" 
                />
                <div className="absolute inset-0 m-auto w-[105%] h-[105%] rounded-full border-2 border-primary/20 border-dashed animate-[spin_60s_linear_infinite] pointer-events-none"></div>
              </div>
            </div>

            {/* Herb Info & Action */}
            <div className="shrink-0 mt-4 relative z-10">
              <p className="text-sm md:text-base text-on-surface-variant mb-4 bg-surface-container-low p-4 rounded-2xl border border-surface-container leading-relaxed">
                "金银花是一种名字很有趣的本草植物，它的花朵颜色会从白色慢慢变成黄色，所以有了‘金银’这个名字。"
              </p>
              <button 
                onClick={() => navigate('reader:jinyinhua')}
                className="w-full flex items-center justify-center px-6 py-3 h-14 rounded-2xl bg-primary text-on-primary font-bold text-base hover:bg-primary/90 transition-all shadow-md active:scale-95 group/btn2"
              >
                开始学习
                <span className="material-symbols-outlined ml-2 text-lg group-hover/btn2:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>
            
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="shrink-0 bg-surface-container border-t border-outline-variant z-10">
        <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-6 w-full max-w-[1600px] mx-auto h-12 md:h-14 gap-2">
          <div className="flex items-center gap-4 text-on-surface-variant text-[10px] md:text-xs">
            <span>© 2026 小小本草官</span>
            <span className="hidden md:inline-block text-error bg-error-container/50 px-2 py-0.5 rounded">
                本平台仅用于科普教育，不作为用药依据。
            </span>
          </div>
          <nav className="flex gap-4 text-[10px] md:text-xs text-on-surface-variant">
            <button className="hover:text-primary transition-colors">关于我们</button>
            <button className="hover:text-primary transition-colors">使用协议</button>
            <button className="hover:text-primary transition-colors">隐私政策</button>
          </nav>
        </div>
      </footer>
    </div>
  );
}
