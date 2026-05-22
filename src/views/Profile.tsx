import React from "react";
import Navigation from "../components/Navigation";

export default function Profile({
  navigate,
}: {
  navigate: (view: string) => void;
}) {
  const customStyles = `
    .material-symbols-outlined {
        font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
    }
    .paper-texture {
        background-image: url(/images/image_8610e45390.png);
    }
    .bamboo-texture {
        background-image: repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(100,80,50,0.03) 40px, rgba(100,80,50,0.03) 42px);
    }
    .font-guofeng {
        font-family: 'Noto Serif SC', serif;
    }
  `;

  return (
    <div className="bg-background font-body-base text-on-surface h-screen flex flex-col overflow-hidden">
      <style>{customStyles}</style>

      {/* Navigation */}
      <Navigation currentView="profile" onNavigate={navigate} />

      {/* Main Container */}
      <main className="flex-grow flex items-center justify-center bamboo-texture p-6 overflow-hidden">
        <div className="w-full max-w-[1280px] h-full max-h-[800px] bg-white/80 backdrop-blur-md rounded-[2rem] shadow-2xl border border-white/40 flex overflow-hidden relative">
          {/* Left Column: User Profile (35%) */}
          <aside className="w-full md:w-[35%] border-r border-outline-variant/30 flex flex-col items-center justify-center p-6 md:p-12 bg-[#e8f5e9]">
            <div className="relative mb-8 group">
              <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full group-hover:bg-primary/30 transition-all"></div>
              <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-[2.5rem] border-4 border-white shadow-xl overflow-hidden bg-white">
                <img
                  alt="User Avatar"
                  className="w-full h-full object-contain"
                  src="/images/image_20443d298c.png"
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-primary text-on-primary px-6 py-2 rounded-full shadow-lg font-bold text-sm tracking-wide border-2 border-white">
                Lv.4
              </div>
            </div>

            <div className="text-center">
              <h1 className="font-guofeng text-3xl md:text-4xl text-primary mb-2">
                小小本草官
              </h1>
              <div className="flex justify-center gap-3 mb-8">
                <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-bold">
                  8 岁
                </span>
                <span className="bg-primary-container text-on-primary-container px-4 py-1 rounded-full text-sm font-bold">
                  本草小学徒
                </span>
              </div>
            </div>

            <div className="w-full space-y-4">
              <div className="bg-white/80 p-5 rounded-2xl border border-white shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    eco
                  </span>
                  <span className="text-secondary font-bold">已识本草</span>
                </div>
                <span className="text-primary font-extrabold text-xl">
                  10
                  <span className="text-sm font-normal text-secondary">
                    /50
                  </span>
                </span>
              </div>
              <div className="bg-white/80 p-5 rounded-2xl border border-white shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    auto_stories
                  </span>
                  <span className="text-secondary font-bold">阅读绘本</span>
                </div>
                <span className="text-primary font-extrabold text-xl">
                  5
                  <span className="text-sm font-normal text-secondary">
                    {" "}
                    本
                  </span>
                </span>
              </div>
              <div className="bg-white/80 p-5 rounded-2xl border border-white shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    grade
                  </span>
                  <span className="text-secondary font-bold">获得星数</span>
                </div>
                <span className="text-primary font-extrabold text-xl">120</span>
              </div>
            </div>

            <div className="mt-8 md:mt-12 flex flex-col gap-4 w-full">
              <button className="w-full py-4 bg-primary text-on-primary rounded-xl font-bold text-lg shadow-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 active:scale-95">
                <span className="material-symbols-outlined">edit</span>
                编辑资料
              </button>
              <button
                onClick={() => navigate("home")}
                className="w-full py-4 bg-white border-2 border-primary text-primary rounded-xl font-bold text-lg hover:bg-primary/5 transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <span className="material-symbols-outlined">arrow_back</span>
                返回首页
              </button>
            </div>
          </aside>

          {/* Right Column: Achievement Badge Wall (65%) */}
          <section className="hidden md:flex w-[65%] p-16 flex-col overflow-hidden">
            <div className="flex items-center justify-between mb-12 shrink-0">
              <h2 className="font-guofeng text-3xl text-on-surface flex items-center gap-4">
                <span
                  className="material-symbols-outlined text-primary text-4xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  military_tech
                </span>
                成就徽章墙
              </h2>
              <span className="text-primary font-bold cursor-pointer hover:underline">
                查看全部成就
              </span>
            </div>

            <div className="grid grid-cols-3 gap-8 overflow-y-auto pr-4 pb-8">
              {/* Earned Badges */}
              <div className="group flex flex-col items-center gap-4">
                <div className="w-full aspect-square bg-surface-container-low rounded-3xl p-6 border border-outline-variant/30 shadow-sm group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-300 flex items-center justify-center relative overflow-hidden">
                  <img
                    alt="金银花观察员"
                    className="w-full h-full object-contain relative z-10"
                    src="/images/image_20cf04eea1.png"
                  />
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity z-0"></div>
                </div>
                <span className="font-bold text-on-surface-variant">
                  金银花观察员
                </span>
              </div>

              <div className="group flex flex-col items-center gap-4">
                <div className="w-full aspect-square bg-surface-container-low rounded-3xl p-6 border border-outline-variant/30 shadow-sm group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-300 flex items-center justify-center relative overflow-hidden">
                  <img
                    alt="山楂小侦探"
                    className="w-full h-full object-contain relative z-10"
                    src="/images/image_61fbabbbc0.png"
                  />
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity z-0"></div>
                </div>
                <span className="font-bold text-on-surface-variant">
                  山楂小侦探
                </span>
              </div>

              <div className="group flex flex-col items-center gap-4">
                <div className="w-full aspect-square bg-surface-container-low rounded-3xl p-6 border border-outline-variant/30 shadow-sm group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-300 flex items-center justify-center relative overflow-hidden">
                  <img
                    alt="绘本小达人"
                    className="w-full h-full object-contain relative z-10"
                    src="/images/image_df96cd274a.png"
                  />
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity z-0"></div>
                </div>
                <span className="font-bold text-on-surface-variant">
                  绘本小达人
                </span>
              </div>

              {/* Locked Badges */}
              <div className="flex flex-col items-center gap-4 opacity-40 grayscale cursor-not-allowed">
                <div className="w-full aspect-square bg-surface-container-high rounded-3xl p-6 border border-outline-variant/20 flex items-center justify-center relative">
                  <img
                    alt="Locked Badge"
                    className="w-full h-full object-contain blur-sm"
                    src="/images/image_0635a3b9f0.png"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="material-symbols-outlined text-5xl text-on-surface-variant">
                      lock
                    </span>
                  </div>
                </div>
                <span className="font-bold text-on-surface-variant">
                  灵芝守卫者
                </span>
              </div>

              <div className="flex flex-col items-center gap-4 opacity-40 grayscale cursor-not-allowed">
                <div className="w-full aspect-square bg-surface-container-high rounded-3xl p-6 border border-outline-variant/20 flex items-center justify-center relative">
                  <img
                    alt="Locked Badge"
                    className="w-full h-full object-contain blur-sm"
                    src="/images/image_0635a3b9f0.png"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="material-symbols-outlined text-5xl text-on-surface-variant">
                      lock
                    </span>
                  </div>
                </div>
                <span className="font-bold text-on-surface-variant">
                  人参寻踪者
                </span>
              </div>

              <div className="flex flex-col items-center gap-4 opacity-40 grayscale cursor-not-allowed">
                <div className="w-full aspect-square bg-surface-container-high rounded-3xl p-6 border border-outline-variant/20 flex items-center justify-center relative">
                  <img
                    alt="Locked Badge"
                    className="w-full h-full object-contain blur-sm"
                    src="/images/image_0635a3b9f0.png"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="material-symbols-outlined text-5xl text-on-surface-variant">
                      lock
                    </span>
                  </div>
                </div>
                <span className="font-bold text-on-surface-variant">
                  枸杞达人
                </span>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container mt-auto w-full border-t border-outline-variant shrink-0">
        <div className="flex flex-col md:flex-row justify-between items-center py-4 px-6 md:px-8 w-full max-w-7xl mx-auto gap-4">
          <div className="text-center md:text-left text-on-surface-variant">
            <p className="text-sm">
              © 2026 小小本草官 |{" "}
              <span className="text-error bg-error-container/50 px-2 py-0.5 rounded">
                本平台仅用于传统文化学习与科普教育，不作为诊断、治疗或用药依据。
              </span>
            </p>
          </div>
          <nav className="flex gap-4 text-sm font-medium text-on-surface-variant">
            <a className="hover:text-primary underline transition-all" href="#">
              关于我们
            </a>
            <a className="hover:text-primary underline transition-all" href="#">
              使用协议
            </a>
            <a className="hover:text-primary underline transition-all" href="#">
              隐私政策
            </a>
            <a className="hover:text-primary underline transition-all" href="#">
              联系教师
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
