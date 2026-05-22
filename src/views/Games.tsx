import React from "react";
import Navigation from "../components/Navigation";

export default function Games({
  navigate,
}: {
  navigate: (view: string) => void;
}) {
  const customStyles = `
    .map-path {
        stroke-dasharray: 10, 10;
        animation: dash 20s linear infinite;
    }
    @keyframes dash {
        to {
            stroke-dashoffset: -1000;
        }
    }
    .level-node {
        transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    .level-node:hover {
        transform: scale(1.1);
    }
  `;

  return (
    <div className="bg-background text-on-surface font-body-base flex flex-col h-screen overflow-hidden">
      <style>{customStyles}</style>

      <Navigation currentView="games" onNavigate={navigate} />

      <main
        className="flex-grow relative w-full overflow-hidden bg-secondary-container"
        style={{
          backgroundImage: "url('/images/image_8df4f469fd.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* User Info HUD */}
        <div className="absolute top-6 left-6 z-40 bg-surface-container-low/90 backdrop-blur-md rounded-xl shadow-lg border-2 border-primary/20 p-4 flex flex-col gap-2 w-64 max-w-[90vw]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary-container border-2 border-primary flex items-center justify-center overflow-hidden shrink-0">
              <span
                className="material-symbols-outlined text-primary text-[28px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                face
              </span>
            </div>
            <div>
              <h2 className="text-title-sm font-title-sm text-on-surface">
                小小本草官
              </h2>
              <p className="text-body-base font-body-base text-primary font-bold">
                本草小学徒
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center bg-surface rounded-lg p-2 mt-1 border border-outline-variant">
            <div className="flex items-center gap-1">
              <span
                className="material-symbols-outlined text-tertiary text-[20px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span className="font-bold text-on-surface">15</span>
            </div>
            <div className="w-px h-4 bg-outline-variant"></div>
            <div className="flex items-center gap-1">
              <span
                className="material-symbols-outlined text-primary text-[20px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                military_tech
              </span>
              <span className="font-bold text-on-surface">3</span>
            </div>
          </div>
        </div>

        {/* SVG Map Path Layer */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          preserveAspectRatio="none"
        >
          <path
            className="map-path opacity-60"
            d="M 20% 70% Q 30% 40% 50% 50% T 70% 30% T 85% 65%"
            fill="none"
            stroke="#7ba361"
            strokeLinecap="round"
            strokeWidth="6"
          ></path>
        </svg>

        {/* Node 1: 看图识本草 */}
        <div
          onClick={() => navigate("games:level:1")}
          className="absolute top-[65%] left-[15%] level-node group cursor-pointer"
        >
          <div className="relative flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-surface shadow-xl border-4 border-primary flex items-center justify-center z-10 bg-gradient-to-br from-surface to-surface-container-high">
              <span
                className="material-symbols-outlined text-primary text-[32px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                image_search
              </span>
            </div>
            <div className="mt-2 bg-surface-container-high/90 backdrop-blur-sm px-3 py-1 rounded-full border border-outline-variant shadow-sm group-hover:bg-primary group-hover:text-on-primary transition-colors">
              <span className="text-title-sm font-title-sm whitespace-nowrap">
                看图识本草
              </span>
            </div>
            <div className="absolute -bottom-4 w-2 h-4 border-l-4 border-dotted border-primary/50"></div>
          </div>
        </div>

        {/* Node 2: 特征找朋友 */}
        <div className="absolute top-[45%] left-[40%] level-node group cursor-pointer opacity-80">
          <div className="relative flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-surface shadow-xl border-4 border-tertiary flex items-center justify-center z-10 bg-gradient-to-br from-surface to-surface-container-high">
              <span className="material-symbols-outlined text-tertiary text-[32px]">
                group_add
              </span>
            </div>
            <div className="absolute -top-3 -right-3 bg-surface rounded-full p-1 shadow-md border border-outline-variant z-20">
              <span className="material-symbols-outlined text-outline text-[16px]">
                lock
              </span>
            </div>
            <div className="mt-2 bg-surface-container-high/90 backdrop-blur-sm px-3 py-1 rounded-full border border-outline-variant shadow-sm text-on-surface-variant">
              <span className="text-title-sm font-title-sm whitespace-nowrap">
                特征找朋友
              </span>
            </div>
          </div>
        </div>

        {/* Node 3: 绘本小问答 */}
        <div className="absolute top-[25%] left-[65%] level-node group cursor-pointer opacity-80">
          <div className="relative flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-surface shadow-xl border-4 border-tertiary flex items-center justify-center z-10 bg-gradient-to-br from-surface to-surface-container-high">
              <span className="material-symbols-outlined text-tertiary text-[32px]">
                menu_book
              </span>
            </div>
            <div className="absolute -top-3 -right-3 bg-surface rounded-full p-1 shadow-md border border-outline-variant z-20">
              <span className="material-symbols-outlined text-outline text-[16px]">
                lock
              </span>
            </div>
            <div className="mt-2 bg-surface-container-high/90 backdrop-blur-sm px-3 py-1 rounded-full border border-outline-variant shadow-sm text-on-surface-variant">
              <span className="text-title-sm font-title-sm whitespace-nowrap">
                绘本小问答
              </span>
            </div>
          </div>
        </div>

        {/* Node 4: 安全小卫士 */}
        <div className="absolute top-[45%] left-[80%] level-node group cursor-pointer opacity-80">
          <div className="relative flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-surface shadow-xl border-4 border-tertiary flex items-center justify-center z-10 bg-gradient-to-br from-surface to-surface-container-high">
              <span className="material-symbols-outlined text-tertiary text-[32px]">
                health_and_safety
              </span>
            </div>
            <div className="absolute -top-3 -right-3 bg-surface rounded-full p-1 shadow-md border border-outline-variant z-20">
              <span className="material-symbols-outlined text-outline text-[16px]">
                lock
              </span>
            </div>
            <div className="mt-2 bg-surface-container-high/90 backdrop-blur-sm px-3 py-1 rounded-full border border-outline-variant shadow-sm text-on-surface-variant">
              <span className="text-title-sm font-title-sm whitespace-nowrap">
                安全小卫士
              </span>
            </div>
          </div>
        </div>

        {/* Node 5: 本草小侦探 */}
        <div className="absolute top-[75%] left-[75%] level-node group cursor-pointer opacity-80">
          <div className="relative flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-surface shadow-xl border-4 border-tertiary flex items-center justify-center z-10 bg-gradient-to-br from-surface to-surface-container-high">
              <span className="material-symbols-outlined text-tertiary text-[40px]">
                explore
              </span>
            </div>
            <div className="absolute -top-3 -right-3 bg-surface rounded-full p-1 shadow-md border border-outline-variant z-20">
              <span className="material-symbols-outlined text-outline text-[20px]">
                lock
              </span>
            </div>
            <div className="mt-2 bg-surface-container-high/90 backdrop-blur-sm px-4 py-1 rounded-full border border-outline-variant shadow-sm text-on-surface-variant">
              <span className="text-title-sm font-title-sm whitespace-nowrap">
                本草小侦探
              </span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-4 px-6 flex flex-col md:flex-row justify-between items-center gap-[12px] bg-surface-container border-t border-outline-variant shrink-0 z-50">
        <div className="text-title-sm font-title-sm text-secondary flex items-center gap-2">
          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            eco
          </span>
          小小本草官
        </div>
        <div className="flex gap-4">
          <a
            className="text-on-surface-variant text-body-base font-body-base hover:text-primary hover:underline transition-opacity duration-200"
            href="#"
          >
            安全须知
          </a>
          <a
            className="text-on-surface-variant text-body-base font-body-base hover:text-primary hover:underline transition-opacity duration-200"
            href="#"
          >
            隐私政策
          </a>
          <a
            className="text-on-surface-variant text-body-base font-body-base hover:text-primary hover:underline transition-opacity duration-200"
            href="#"
          >
            家长手册
          </a>
        </div>
        <div className="text-label-caps font-label-caps text-secondary max-w-xl text-center md:text-right">
          © 2026 小小本草官.
          本平台仅用于传统文化学习与科普教育，不作为诊断、治疗或用药依据。
        </div>
      </footer>
    </div>
  );
}
