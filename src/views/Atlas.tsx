import React from "react";
import Navigation from "../components/Navigation";

export default function Atlas({
  navigate,
}: {
  navigate: (view: string) => void;
}) {
  const customStyles = `
    .paper-shadow {
        box-shadow: 0 4px 15px -3px rgba(101, 100, 96, 0.15), 0 2px 6px -2px rgba(101, 100, 96, 0.1);
    }
    
    .bamboo-border {
        border: 2px solid var(--color-tertiary-container);
        border-radius: 12px;
        position: relative;
    }
    .bamboo-border::before {
        content: '';
        position: absolute;
        top: -4px; left: -4px; right: -4px; bottom: -4px;
        border: 1px dashed var(--color-tertiary-fixed-dim);
        border-radius: 14px;
        pointer-events: none;
    }

    .scroll-container::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    }
    .scroll-container::-webkit-scrollbar-track {
        background: var(--color-surface-container-low);
        border-radius: 4px;
    }
    .scroll-container::-webkit-scrollbar-thumb {
        background: var(--color-tertiary-container);
        border-radius: 4px;
    }
    
    .filter-grayscale {
        filter: grayscale(100%) opacity(0.6);
    }

    .bg-texture-gradient {
        background: linear-gradient(135deg, rgba(249, 250, 241, 0.95), rgba(226, 227, 219, 0.8)),
                    url('data:image/svg+xml;utf8,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><path d="M10 10c20 0 20 20 40 20s20-20 40-20v80H10V10z" fill="none" stroke="%23d0d0c0" stroke-width="0.5" opacity="0.3"/></svg>') repeat;
    }
  `;

  const unlockedHerbs = [
    {
      name: "金银花",
      img: "/images/image_e45cbc0709.png",
      ssr: true,
      tags: [
        { text: "已识别", color: "primary" },
        { text: "已读故事", color: "tertiary" },
        { text: "已完成问答", color: "secondary" },
      ],
    },
    {
      name: "艾草",
      img: "/images/image_d8a5d390a8.png",
      ssr: false,
      tags: [{ text: "已识别", color: "primary" }],
    },
    {
      name: "菊花",
      img: "/images/image_3563dc3f2e.png",
      ssr: false,
      tags: [
        { text: "已识别", color: "primary" },
        { text: "已完成问答", color: "secondary" },
      ],
    },
    {
      name: "薄荷",
      img: "/images/image_bf587580f8.png",
      ssr: false,
      tags: [
        { text: "已识别", color: "primary" },
        { text: "已读故事", color: "tertiary" },
      ],
    },
    {
      name: "山楂",
      img: "/images/image_56406f8d01.png",
      ssr: false,
      tags: [{ text: "已识别", color: "primary" }],
    },
    {
      name: "桂花",
      img: "/images/image_6f6649dbe8.png",
      ssr: false,
      tags: [{ text: "已识别", color: "primary" }],
    },
    {
      name: "茯苓",
      img: "/images/image_f2a260ee81.png",
      ssr: false,
      tags: [{ text: "已识别", color: "primary" }],
    },
  ];

  const lockedHerbs = [
    "枸杞",
    "荷叶",
    "莲子",
    "陈皮",
    "桑叶",
    "紫苏",
    "蒲公英",
    "百合",
    "红枣",
    "甘草",
  ];

  return (
    <div className="bg-texture-gradient text-on-surface h-screen flex flex-col font-body-base overflow-hidden relative">
      <style>{customStyles}</style>

      <Navigation currentView="atlas" onNavigate={navigate} />

      {/* Main Content Canvas */}
      <main className="flex-1 flex flex-col md:flex-row max-w-7xl mx-auto w-full px-6 py-4 gap-6 overflow-hidden">
        {/* Left/Center Canvas: Herb Collection Book */}
        <section className="flex-1 flex flex-col bg-surface-container-lowest rounded-2xl paper-shadow border border-outline-variant/30 overflow-hidden relative h-full">
          {/* Decorative Corners */}
          <div className="absolute top-0 left-0 w-16 h-16 bg-primary-container/20 rounded-br-3xl -z-10"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 bg-tertiary-container/20 rounded-tl-3xl -z-10"></div>

          {/* Header Area */}
          <div className="p-6 border-b border-outline-variant/20 bg-surface-container-low/50">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h1 className="font-display-lg text-display-lg text-primary flex items-center gap-2">
                  <span className="material-symbols-outlined text-4xl text-tertiary">
                    menu_book
                  </span>
                  我的本草图鉴
                </h1>
                <p className="font-body-base text-body-base text-secondary mt-1 flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">
                    auto_awesome
                  </span>
                  每认识一种本草，就点亮一张文化卡片。
                </p>
              </div>

              {/* Stats Badge */}
              <div className="bg-primary-container/30 border border-primary/20 rounded-xl p-3 flex gap-4 text-on-surface">
                <div className="flex flex-col items-center px-2 border-r border-outline-variant/30">
                  <span className="font-label-caps text-label-caps text-secondary">
                    已收集
                  </span>
                  <span className="font-headline-md text-headline-md text-primary">
                    10<span className="text-title-sm">/20</span>
                  </span>
                </div>
                <div className="flex flex-col items-center px-2 border-r border-outline-variant/30">
                  <span className="font-label-caps text-label-caps text-secondary">
                    今日新增
                  </span>
                  <span className="font-headline-md text-headline-md text-tertiary">
                    +1
                  </span>
                </div>
                <div className="flex flex-col items-center px-2">
                  <span className="font-label-caps text-label-caps text-secondary">
                    当前等级
                  </span>
                  <span className="font-title-sm text-title-sm text-on-primary-container flex items-center gap-1">
                    <span
                      className="material-symbols-outlined text-primary text-sm"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      eco
                    </span>
                    本草小学徒
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Scrollable Card Grid Area */}
          <div className="flex-1 overflow-y-auto scroll-container p-6 relative">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 pb-6">
              {/* Unlocked Cards */}
              {unlockedHerbs.map((herb, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    if (herb.name === "金银花") navigate("result2");
                    else if (herb.name === "山楂") navigate("result");
                  }}
                  className="bg-surface rounded-xl paper-shadow border border-surface-variant overflow-hidden group hover:shadow-lg transition-all duration-300 relative flex flex-col cursor-pointer transform hover:-translate-y-1"
                >
                  <div className="h-32 bg-primary-container/20 relative overflow-hidden flex items-center justify-center">
                    <img
                      alt={herb.name}
                      className="w-full h-full object-cover"
                      src={herb.img}
                    />
                    {herb.ssr && (
                      <div className="absolute top-2 right-2 bg-gradient-to-br from-yellow-300 to-yellow-600 text-white font-label-caps text-label-caps px-2 py-0.5 rounded shadow-sm border border-yellow-200">
                        SSR
                      </div>
                    )}
                  </div>
                  <div className="p-3 flex-1 flex flex-col">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-title-sm text-title-sm text-on-surface">
                        {herb.name}
                      </h3>
                      {herb.name === "金银花" && (
                        <span
                          className="material-symbols-outlined text-error text-sm"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          favorite
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-1 mt-auto">
                      {herb.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className={`bg-${tag.color}/10 text-${tag.color} font-label-caps text-[10px] px-1.5 py-0.5 rounded`}
                        >
                          {tag.text}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              {/* Locked Cards */}
              {lockedHerbs.map((name, idx) => (
                <div
                  key={idx}
                  className="bg-surface-container-lowest rounded-xl border border-dashed border-outline-variant/50 overflow-hidden relative flex flex-col items-center justify-center filter-grayscale"
                >
                  <div className="h-32 bg-primary-container/20 relative overflow-hidden flex items-center justify-center w-full">
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <span className="material-symbols-outlined text-4xl text-outline-variant/80">
                        lock
                      </span>
                    </div>
                    <div className="w-full h-full bg-surface-dim/20"></div>
                  </div>
                  <div className="p-3 w-full text-center border-t border-dashed border-outline-variant/30">
                    <h3 className="font-title-sm text-title-sm text-outline opacity-60">
                      {name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Action Bar */}
            <div className="w-full mt-6 pt-6 border-t border-outline-variant/30 flex flex-wrap justify-center gap-4 pb-2">
              <button
                onClick={() => navigate("upload")}
                className="bg-primary text-on-primary font-title-sm text-title-sm py-3 px-6 rounded-xl shadow-md hover:bg-primary/90 transition-colors flex items-center gap-2 shrink-0"
              >
                <span className="material-symbols-outlined">
                  center_focus_weak
                </span>
                继续识别本草
              </button>
              <button
                onClick={() => navigate("library")}
                className="bg-tertiary-container text-on-tertiary-container font-title-sm text-title-sm py-3 px-6 rounded-xl shadow-md hover:bg-tertiary-container/90 transition-colors flex items-center gap-2 bamboo-border shrink-0"
              >
                <span className="material-symbols-outlined">auto_stories</span>
                去绘本馆
              </button>
              <button
                onClick={() => navigate("games")}
                className="bg-surface-container-high text-on-surface font-title-sm text-title-sm py-3 px-6 rounded-xl shadow border border-outline-variant hover:bg-surface-variant transition-colors flex items-center gap-2 shrink-0"
              >
                <span className="material-symbols-outlined">
                  sports_esports
                </span>
                去闯关
              </button>
            </div>
          </div>
        </section>

        {/* Right Side: Task Panel (Bento style) */}
        <aside className="w-full md:w-80 flex flex-col gap-4">
          <div className="bg-surface-container-low rounded-2xl p-5 paper-shadow border border-outline-variant/30 flex flex-col h-full">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">
                assignment
              </span>
              图鉴任务
            </h2>
            <div className="flex flex-col gap-4">
              <div className="bg-surface-container-lowest p-4 rounded-xl border border-surface-variant shadow-sm flex items-start gap-3 relative overflow-hidden">
                <div className="w-10 h-10 rounded-full bg-primary-container/30 flex items-center justify-center shrink-0">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    visibility
                  </span>
                </div>
                <div className="flex-1">
                  <h4 className="font-title-sm text-title-sm text-on-surface text-sm">
                    再认识2种本草
                  </h4>
                  <p className="font-label-caps text-label-caps text-secondary mt-1">
                    奖励：本草观察员徽章
                  </p>
                  <div className="w-full bg-surface-variant h-1.5 rounded-full mt-2">
                    <div
                      className="bg-primary h-1.5 rounded-full"
                      style={{ width: "33%" }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="bg-surface-container-lowest p-4 rounded-xl border border-surface-variant shadow-sm flex items-start gap-3 relative overflow-hidden">
                <div className="w-10 h-10 rounded-full bg-tertiary-container/30 flex items-center justify-center shrink-0">
                  <span
                    className="material-symbols-outlined text-tertiary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    menu_book
                  </span>
                </div>
                <div className="flex-1">
                  <h4 className="font-title-sm text-title-sm text-on-surface text-sm">
                    完成1个绘本故事
                  </h4>
                  <p className="font-label-caps text-label-caps text-secondary mt-1">
                    奖励：故事小读者徽章
                  </p>
                  <div className="w-full bg-surface-variant h-1.5 rounded-full mt-2">
                    <div
                      className="bg-tertiary h-1.5 rounded-full"
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="bg-surface-container-lowest p-4 rounded-xl border border-surface-variant shadow-sm flex items-start gap-3 relative overflow-hidden">
                <div className="w-10 h-10 rounded-full bg-secondary-container/50 flex items-center justify-center shrink-0">
                  <span
                    className="material-symbols-outlined text-secondary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    quiz
                  </span>
                </div>
                <div className="flex-1">
                  <h4 className="font-title-sm text-title-sm text-on-surface text-sm">
                    完成5道问答
                  </h4>
                  <p className="font-label-caps text-label-caps text-secondary mt-1">
                    奖励：问答小达人徽章
                  </p>
                  <div className="w-full bg-surface-variant h-1.5 rounded-full mt-2">
                    <div
                      className="bg-secondary h-1.5 rounded-full"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-auto pt-6 flex justify-center opacity-80">
              <span className="material-symbols-outlined text-6xl text-outline-variant">
                shopping_basket
              </span>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}
