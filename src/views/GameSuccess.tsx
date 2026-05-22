import React from 'react';
import Navigation from '../components/Navigation';

export default function GameSuccess({ navigate }: { navigate: (view: string) => void }) {
  const customStyles = `
    .cloud-bg {
        background: url('data:image/svg+xml;utf8,<svg width="200" height="100" xmlns="http://www.w3.org/2000/svg"><path d="M50 50 Q75 25 100 50 Q125 25 150 50 Q175 75 150 100 L50 100 Q25 75 50 50 Z" fill="rgba(243, 244, 236, 0.5)"/></svg>') no-repeat center center;
        background-size: contain;
    }
    .shimmer {
        animation: shimmer 2s infinite linear;
        background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 100%);
        background-size: 200% 100%;
    }
    @keyframes shimmer {
        0% { background-position: 200% 0; }
        100% { background-position: -200% 0; }
    }
    .pulse-slow {
        animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }
    @keyframes pulse {
        0%, 100% { opacity: 1; transform: scale(1); }
        50% { opacity: .7; transform: scale(1.05); }
    }
  `;

  return (
    <div className="bg-background text-on-background font-body-base flex flex-col h-screen w-full mx-auto relative overflow-hidden" style={{ backgroundImage: "radial-gradient(#e5e2dc 1px, transparent 1px)", backgroundSize: "20px 20px" }}>
      <style>{customStyles}</style>

      <Navigation currentView="games" onNavigate={navigate} />

      <main className="flex-grow flex flex-col items-center justify-center relative px-6 py-8 z-10 h-full overflow-y-auto">
        <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
          <div className="w-[800px] h-[800px] bg-primary-container/10 rounded-full blur-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          {/* Cloud Decorations */}
          <div className="absolute top-10 left-20 opacity-60 hidden md:block">
            <img alt="Clouds" className="w-48 h-auto mix-blend-multiply opacity-50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCeFp1n1UwiBkgkiLPZUL8UUTWWdT2xN9HjtyVcjNYl96CMxAjV4oyUOOZ1s5xQ0kUQSuZ9IMYZPNnDwprDsd_kI2ektDAvZcKCRaKZifIkj8Y1kEAmeR8xfhxGI6AruUUBNHlbjllHu1Fal6Lvp6W51oLdaAjUWnkdQspwri1VVN4I1IXb6_YGnzFPeZhepcg4u7Zub0CpnMkAOMOsl3HAlUI81M40KH3JyBmH-2JV9crhooRVSNLwkvOMBX2HKWJfh3sja9fyAg" />
          </div>
          {/* Bamboo Decorations */}
          <div className="absolute bottom-10 right-20 opacity-60 hidden md:block">
            <img alt="Bamboo Leaves" className="w-64 h-auto mix-blend-multiply opacity-40" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdgqJMTmVhyxhlF1Hkar5AhY4Lz5HWe88V2eKp25pVm5U-DoJ7zeK22PPwsXF_kMWh5C5lP7xj4VP9uE8mrRrtALUox3NcTKQNTGltotO08tCainb0MVWSDxNkmnqtLGieK8pfPqLRSi3yidU58NlJvYtMGX6pYUiT3YfBoKj9IxJsL4q3gsu9Dtmy6HnU9zSPmIWWf8Xuqi5RDF4298mrSlGA7gX4Het3WBShPMuQ0Ngatw6AACodEPx8McM7WCt78xHMqbYM8JM" />
          </div>
        </div>

        <div className="relative w-full max-w-4xl flex flex-col items-center z-20 bg-surface/90 backdrop-blur-sm rounded-[32px] shadow-xl border-4 border-surface-container-high p-6 md:p-10 pt-16 mt-12 mb-8">
          
          {/* Hanging Ribbon Title */}
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            <div className="bg-gradient-to-b from-[#f2a65a] to-[#e76f51] px-12 py-4 rounded-full shadow-lg border-2 border-[#ffdab9] relative overflow-hidden">
              <div className="absolute inset-0 shimmer opacity-30"></div>
              <h1 className="font-display-lg text-display-lg text-white font-extrabold tracking-widest drop-shadow-md whitespace-nowrap">
                挑战大成功！
              </h1>
            </div>
            {/* Sparkle Icons */}
            <span className="material-symbols-outlined absolute -top-4 -left-6 text-yellow-400 text-4xl pulse-slow" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
            <span className="material-symbols-outlined absolute -top-2 -right-8 text-yellow-400 text-5xl pulse-slow delay-150" style={{ fontVariationSettings: "'FILL' 1" }}>colors_spark</span>
          </div>

          {/* Medal Section */}
          <div className="relative mb-8 mt-4">
            <div className="absolute inset-0 bg-yellow-400/30 blur-2xl rounded-full scale-150 pulse-slow"></div>
            <div className="relative z-10 w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">
              <img alt="本草小达人徽章" className="w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_smt4EZdJH3a32bIoXbztWyqMuW8MHaVrUFIiQA09KiUASdorYWLNcWSL1wRGNiiCSbohatKqvOesIBptfXMvkyAOwjQxy4XX_5yRMeGiEHyzFcevRDUK_7TtWDC5yu9faZYVvDL9Dsi5ltJepXFvRi_VrylZ0RZdwyVd5SgK_2IYAH3JiiZdmgzCWgSB7a92SgpaL7et-byc2o1yQTabh_OER3ImPWpI8pu9GMBL0J6ykIaGOOwKlsTkvJuSkeBAV1hxebuWAvM" />
            </div>
            {/* Floating Leaves */}
            <span className="material-symbols-outlined absolute top-10 -left-10 text-primary-container text-3xl animate-bounce" style={{ animationDuration: '3s' }}>eco</span>
            <span className="material-symbols-outlined absolute bottom-10 -right-10 text-primary-container text-4xl animate-bounce" style={{ animationDuration: '4s' }}>psychiatry</span>
          </div>

          {/* Stats Row */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 mb-10 w-full justify-center">
            <div className="bg-surface-container-lowest border-2 border-surface-container-highest rounded-2xl py-4 px-8 flex items-center gap-4 shadow-sm min-w-[240px]">
              <div className="w-12 h-12 rounded-full bg-tertiary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-on-tertiary-container text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
              <div>
                <p className="text-on-surface-variant font-label-caps text-label-caps">获得本草星</p>
                <p className="font-headline-md text-headline-md text-tertiary font-bold">15 颗</p>
              </div>
            </div>
            <div className="bg-surface-container-lowest border-2 border-surface-container-highest rounded-2xl py-4 px-8 flex items-center gap-4 shadow-sm min-w-[240px]">
              <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-on-primary-container text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>menu_book</span>
              </div>
              <div>
                <p className="text-on-surface-variant font-label-caps text-label-caps">已点亮图鉴</p>
                <p className="font-headline-md text-headline-md text-primary font-bold">12 张</p>
              </div>
            </div>
          </div>

          {/* New Cards Section */}
          <div className="w-full bg-surface-container-low rounded-[24px] p-6 mb-10 border border-outline-variant/30">
            <h3 className="font-title-sm text-title-sm text-on-surface mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">auto_awesome</span>
              新解锁的本草伙伴
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: '金银花', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdtEwVG8sc5GFlFqq0HRsOC740afdQWdXJVBFKUw5HRwS2acgbUeLt9TjHQkoG66sUN3KTHqI8MexANb_djkXoKuUqdsJgY1CnbVXQa8GcKo3amuXh4RWrlqiW0hi4CcZ2xqAF1eIzExsalynA2QI6dPjL3_0D0-5YPS6eL91yIn57a1pi90vUKSy1HrSdGGahggXpEbhQidAa_WDfXEP_pplIECTXuHGZGsrfPtYIwY3h4InQgb1ltfIoD0I-kzRflnYJj5PCXq8' },
                { name: '山楂', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCP9KjL2492VFJnB94pqcaE56iH5qvrd3ifSPOowSzkXpEE4x6EOXUUjqR3iEnWb7FO32WVMHVNoJTw-iUS8h-Nn7tEJnhgBVLqWH57J7CGEmFCN6-ycd5x5rbFeG-vr-A_Pvf4tvS5z29QH_h_9Iwu6nom0LMxDUPVAdoCx0iMab5Q1-hP0U4A67jXILWr9jnHQdsAnK8WABkUKNyFeyLMDP3R3Y29IeomEkm7Fb_QFRqN09HWiDSy_j336u4XBVuiq7uzaBuuNmI' },
                { name: '菊花', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAz6s6xvPXON1bzlfIiQjRfVW9lHxw5MD60GZDfTufMZWsonYcPQosc2EspWYFDw9fyWX_NYYSIuJb0b6jayvZE5V0lhGNSng_0swxVchY6p-WDW2Y-jEjqsilPRtPy_hAdc9k9PWjprIfMaPcvoRyN-XAjd4a-O9k1F6OOBhXrY4p2Ym-ZSkgYp6XPz1Q3TVQz2-j3YEp1-AW29h8UPVYBtrTvqEpTIqUITlM8BL_DbV7FCKt7x4wtkanSr0YOamaWmHzRFzr3Nb4' }
              ].map((item, i) => (
                <div key={i} className="relative group bg-surface-container-lowest rounded-xl p-3 shadow-sm hover:shadow-md transition-shadow border border-outline-variant/20 flex flex-col items-center cursor-pointer">
                  <div className="absolute -top-3 -right-3 bg-error text-on-error font-label-caps text-[10px] px-2 py-1 rounded-full shadow-sm z-10 transform rotate-12">NEW</div>
                  <div className="w-full h-32 rounded-lg bg-secondary-container mb-3 overflow-hidden border border-outline-variant/20">
                    <img alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={item.img} />
                  </div>
                  <span className="font-title-sm text-title-sm text-on-surface">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 w-full justify-center">
            <button 
              onClick={() => navigate('games')}
              className="px-6 md:px-8 py-3 md:py-4 rounded-full border-2 border-outline text-on-surface-variant font-headline-md text-lg md:text-[20px] font-bold hover:bg-surface-container-high transition-colors flex items-center gap-2 shadow-sm"
            >
              <span className="material-symbols-outlined">map</span>
              返回地图
            </button>
            <button 
              onClick={() => navigate('home')}
              className="px-8 md:px-10 py-3 md:py-4 rounded-full bg-primary text-on-primary font-headline-md text-xl md:text-[24px] font-bold hover:bg-on-primary-fixed-variant hover:-translate-y-1 transition-all duration-200 flex items-center gap-2 shadow-lg shadow-primary/30"
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>explore</span>
              返回首页
            </button>
            <button className="px-6 md:px-8 py-3 md:py-4 rounded-full border-2 border-outline text-on-surface-variant font-headline-md text-lg md:text-[20px] font-bold hover:bg-surface-container-high transition-colors flex items-center gap-2 shadow-sm">
              <span className="material-symbols-outlined">analytics</span>
              学习报告
            </button>
          </div>

        </div>
      </main>
    </div>
  );
}
