import React from 'react';
import Navigation from '../components/Navigation';

export default function AiAssistant({ navigate }: { navigate: (view: string) => void }) {
  const customStyles = `
    .chat-scroll::-webkit-scrollbar {
        width: 8px;
    }
    .chat-scroll::-webkit-scrollbar-track {
        background: rgba(226, 227, 219, 0.5); 
        border-radius: 4px;
    }
    .chat-scroll::-webkit-scrollbar-thumb {
        background: #c3c9ba; 
        border-radius: 4px;
    }
    .chat-scroll::-webkit-scrollbar-thumb:hover {
        background: #7ba361; 
    }
    .ai-glow {
        box-shadow: 0 0 15px rgba(123, 163, 97, 0.3);
        border: 1px solid rgba(123, 163, 97, 0.2);
    }
  `;

  return (
    <div 
      className="w-full h-screen overflow-hidden flex flex-col font-body-base text-on-surface bg-background relative" 
      style={{ backgroundImage: "radial-gradient(circle at 10% 20%, rgba(123, 163, 97, 0.05) 0%, transparent 20%), radial-gradient(circle at 90% 80%, rgba(123, 163, 97, 0.05) 0%, transparent 20%)" }}
    >
      <style>{customStyles}</style>

      <Navigation currentView="helper" onNavigate={navigate} />

      <main className="flex-1 flex px-6 py-6 md:px-10 gap-8 h-auto w-full max-w-7xl mx-auto overflow-hidden">
        {/* Left Panel: Helpful Tips (Scroll Style) */}
        <aside className="hidden md:flex w-[30%] bg-surface-container-lowest rounded-xl shadow-xl border border-surface-variant p-6 flex-col gap-6 relative overflow-hidden h-full">
          {/* Decorative corner elements */}
          <div className="absolute top-0 right-0 w-16 h-16 bg-surface-container opacity-50 rounded-bl-full pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-surface-container opacity-50 rounded-tr-full pointer-events-none"></div>
          
          <div className="flex items-center gap-3 border-b border-surface-variant pb-4 shrink-0">
            <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
            <h2 className="font-headline-md text-headline-md text-on-surface">助手锦囊</h2>
          </div>
          
          <div className="flex-1 flex flex-col gap-4 overflow-y-auto pr-2 chat-scroll">
            {/* Tip Category 1 */}
            <div className="bg-surface-container-low p-4 rounded-lg hover:bg-surface-container transition-colors cursor-pointer border border-transparent hover:border-primary-fixed-dim">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-tertiary">local_florist</span>
                <h3 className="font-title-sm text-title-sm text-on-surface">认识本草</h3>
              </div>
              <p className="text-on-surface-variant text-sm">"什么是金银花？"<br/>"人参长在哪里？"</p>
            </div>
            {/* Tip Category 2 */}
            <div className="bg-surface-container-low p-4 rounded-lg hover:bg-surface-container transition-colors cursor-pointer border border-transparent hover:border-primary-fixed-dim">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-tertiary">menu_book</span>
                <h3 className="font-title-sm text-title-sm text-on-surface">本草故事</h3>
              </div>
              <p className="text-on-surface-variant text-sm">"讲一个神农尝百草的故事"<br/>"李时珍是谁？"</p>
            </div>
            {/* Tip Category 3 */}
            <div className="bg-surface-container-low p-4 rounded-lg hover:bg-surface-container transition-colors cursor-pointer border border-transparent hover:border-primary-fixed-dim">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-tertiary">health_and_safety</span>
                <h3 className="font-title-sm text-title-sm text-on-surface">健康小常识</h3>
              </div>
              <p className="text-on-surface-variant text-sm">"冬天怎么保暖？"<br/>"多吃什么水果好？"</p>
            </div>
          </div>
        </aside>

        {/* Right Panel: Chat Interface */}
        <section className="w-full md:w-[70%] bg-surface-container-lowest rounded-xl shadow-xl border border-surface-variant flex flex-col overflow-hidden relative ai-glow h-full">
          {/* Chat Header */}
          <div className="px-6 py-4 border-b border-surface-variant bg-surface-container-low flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center border-2 border-primary-fixed p-1">
                <img alt="AI小助手头像" className="w-full h-full object-cover rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_BiecaWgXcF8zur6pD0UjW7oH1AxS_8R5rgbpjjtouqCXl8XPjOXezAXO8DKp5T3jZ09hUEzMk5a2jKgQL5scc9kt-u-LXWDRE1dXAHdAj_8X5KZxe-SLc6XcWofN3Li0LADEzIh385BQcWp_LvlivDfW9q5c_holGnvTJNQa0zKH_sj26epXd6mjVhW_6nJ4wMPEO9HivM0olBj3ZgYDwusG4APYRDAfY5EwTwEMVXjTi856Fz6uOI7MMA7OR2V3SVCtvQYiLww" />
              </div>
              <div>
                <h2 className="font-title-sm text-title-sm text-on-surface">AI草本小精灵</h2>
                <p className="text-sm text-primary flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  在线为您解答
                </p>
              </div>
            </div>
            <button className="p-2 rounded-full hover:bg-surface-variant text-on-surface-variant transition-colors" title="清除对话">
              <span className="material-symbols-outlined">delete_sweep</span>
            </button>
          </div>

          {/* Chat History Area */}
          <div className="flex-1 p-6 overflow-y-auto chat-scroll flex flex-col gap-6 bg-surface">
            {/* AI Message */}
            <div className="flex items-start gap-4 max-w-[85%] md:max-w-[80%]">
              <div className="w-10 h-10 rounded-full flex-shrink-0 bg-primary-container p-1 border border-primary-fixed-dim shadow-sm">
                <img alt="AI小助手头像" className="w-full h-full object-cover rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBV24HOemXn4Fw7_NzoL5eDGyOJrS00a3cwYHJv0j9WVDFlLQ7W9mwC-AObTTW_uwkvxmk9JvbB9Foo5Qcrq9vsXtZ2nUbq_thM0_jIgOznlkhtuV-Jp-KivQvhfsN6pD844IalRGEyGd-qkt5wwRBh1fxUEtGijcIUozuRkMAlFEu4FXDu4bOhcnWjAxyElQY7PIeUp-dQq_nEKuTv9uMJYkqSFHD4R_doM-7xMgJ2UlHiImh5DmrwM2xRipJ59F9BuydHiBxEhfw" />
              </div>
              <div className="bg-surface-container p-4 rounded-2xl rounded-tl-none shadow-sm text-on-surface font-body-base text-body-base leading-relaxed relative">
                你好呀，小小本草官！🌿 我是你的AI草本小精灵。你想了解哪种神奇的本草，或者想听听金银花的故事？
              </div>
            </div>

            {/* User Message */}
            <div className="flex items-start gap-4 max-w-[85%] md:max-w-[80%] self-end flex-row-reverse">
              <div className="w-10 h-10 rounded-full flex-shrink-0 bg-secondary-container p-1 border border-outline-variant shadow-sm flex items-center justify-center text-on-surface-variant">
                <span className="material-symbols-outlined">face</span>
              </div>
              <div className="bg-primary-container text-on-primary-container p-4 rounded-2xl rounded-tr-none shadow-sm font-body-base text-body-base leading-relaxed">
                我想听听金银花的故事！它为什么叫金银花呀？
              </div>
            </div>

            {/* AI Message Loading/Typing Indicator */}
            <div className="flex items-start gap-4 max-w-[85%] md:max-w-[80%]">
              <div className="w-10 h-10 rounded-full flex-shrink-0 bg-primary-container p-1 border border-primary-fixed-dim shadow-sm">
                <img alt="AI小助手头像" className="w-full h-full object-cover rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdROZmEKGCg_Su_s6p2Ile9m_Wwko1Owa7t0OlTCoz3cnANU3AqAefQPY0U8Cno-FWSndvUsLg3xnUzLaKHsP4qkKP6jmB7OnFn8CjobDZEJmiODSiaG5ho32OPHRpmG2_8l3gW0IgJ75kNAr3RQL9A1Lo8tq5FpQ7WZ5xtP1Z1XWNrCbrCene_Oy2dubhpwfPfzZsjmvcaAo1hVbr7nKy2xZLurE6HdIAVryl9X_X9rlheWyBZaYBJk7FOjU23TTyv1BJE2bmx6c" />
              </div>
              <div className="bg-surface-container p-4 rounded-2xl rounded-tl-none shadow-sm text-on-surface flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></span>
                <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></span>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 bg-surface-container-lowest border-t border-surface-variant shrink-0">
            <div className="flex items-center gap-3 bg-surface-container-low rounded-full px-4 py-2 border border-outline-variant focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
              <button className="p-2 rounded-full text-on-surface-variant hover:text-primary hover:bg-surface-variant transition-colors flex-shrink-0">
                <span className="material-symbols-outlined text-2xl">mic</span>
              </button>
              <input className="flex-1 bg-transparent border-none outline-none text-on-surface placeholder:text-on-surface-variant py-3 px-2 font-body-base text-body-base" placeholder="问问小精灵关于本草的问题吧..." type="text" />
              <button className="p-3 rounded-full bg-primary text-on-primary hover:bg-surface-tint shadow-md transition-transform active:scale-95 flex-shrink-0 flex items-center justify-center">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>send</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-surface-dim border-t border-outline-variant flex flex-col items-center justify-center gap-2 py-4 px-6 shrink-0">
        <p className="font-label-caps text-label-caps text-on-surface-variant text-center">
          © 2026 小小本草官 | 本平台仅用于传统文化学习与科普教育，不作为诊断、治疗或用药依据。
        </p>
        <div className="flex gap-4">
          <a className="text-on-surface-variant hover:text-primary hover:underline font-label-caps text-label-caps transition-colors" href="#">关于我们</a>
          <a className="text-on-surface-variant hover:text-primary hover:underline font-label-caps text-label-caps transition-colors" href="#">使用说明</a>
          <a className="text-on-surface-variant hover:text-primary hover:underline font-label-caps text-label-caps transition-colors" href="#">隐私保护</a>
        </div>
      </footer>
    </div>
  );
}
