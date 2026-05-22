import React from "react";
import Navigation from "../components/Navigation";

export default function AiResult4({
  navigate,
  uploadedImage,
}: {
  navigate: (view: string) => void;
  uploadedImage?: string | null;
}) {
  const customStyles = `
    .bg-guofeng-corners {
        background-color: var(--color-background);
        background-image: radial-gradient(circle at top right, rgba(168, 211, 140, 0.15) 0%, transparent 40%),
                          radial-gradient(circle at bottom left, rgba(234, 228, 177, 0.15) 0%, transparent 40%);
    }
    .paper-card {
        background-color: var(--color-surface-container-lowest);
        box-shadow: 0 4px 12px rgba(67, 73, 61, 0.08), 0 2px 4px rgba(67, 73, 61, 0.04);
        border: 1px solid var(--color-surface-variant);
        position: relative;
        overflow: hidden;
    }
    .paper-card::before {
        content: '';
        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        background-image: url('data:image/svg+xml,%3Csvg width="100" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100" height="100" filter="url(%23noise)" opacity="0.03"/%3E%3C/svg%3E');
        pointer-events: none;
        z-index: 0;
    }
    .card-content {
        position: relative;
        z-index: 1;
    }
    .btn-primary {
        background: linear-gradient(to bottom, #7ba361, #43682d);
        box-shadow: 0 4px 0 #2c4f17, 0 6px 10px rgba(22, 56, 2, 0.3);
        color: #ffffff;
        transition: all 0.1s ease;
    }
    .btn-primary:active {
        transform: translateY(4px);
        box-shadow: 0 0 0 #2c4f17, 0 2px 4px rgba(22, 56, 2, 0.3);
    }
    .btn-secondary {
        background-color: var(--color-surface-container-low);
        border: 2px solid var(--color-outline-variant);
        color: var(--color-primary);
        box-shadow: 0 2px 0 var(--color-outline-variant);
        transition: all 0.1s ease;
    }
    .btn-secondary:active {
        transform: translateY(2px);
        box-shadow: 0 0 0 var(--color-outline-variant);
    }
    .leaf-tag {
        background-color: var(--color-surface-container-high);
        border-radius: 12px 0 12px 0;
        border: 1px solid var(--color-outline-variant);
    }
    .custom-scrollbar::-webkit-scrollbar {
        width: 6px;
        height: 6px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
        background: var(--color-surface-container-low);
        border-radius: 10px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
        background: var(--color-outline-variant);
        border-radius: 10px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
        background: var(--color-primary-container);
    }
  `;

  return (
    <div className="bg-guofeng-corners text-on-surface h-screen flex flex-col font-body-base overflow-hidden relative">
      <style>{customStyles}</style>

      <Navigation currentView="upload" onNavigate={navigate} />

      {/* Main Workspace (Fixed Layout) */}
      <main className="flex-grow flex flex-col items-center justify-center relative p-6 overflow-hidden z-10 w-full max-w-7xl mx-auto gap-6">
        {/* Page Header */}
        <div className="w-full flex items-center justify-center relative shrink-0">
          <h1 className="text-headline-md font-headline-md text-on-surface-variant flex items-center gap-2">
            <span
              className="material-symbols-outlined text-primary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              auto_awesome
            </span>
            AI识别结果
          </h1>
        </div>

        {/* Bento Grid Layout for Content */}
        <div className="w-full h-full max-h-[70vh] grid grid-cols-1 md:grid-cols-12 gap-4 relative z-10">
          {/* Left Column: Images */}
          <div className="md:col-span-5 h-full flex flex-col gap-3">
            {/* Top Image: User Upload */}
            <div className="paper-card rounded-xl w-full flex-1 min-h-0 p-3 flex flex-col relative">
              <div className="flex items-center gap-2 mb-2 px-1">
                <span
                  className="material-symbols-outlined text-outline"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  photo_camera
                </span>
                <span className="text-label-caps font-label-caps text-on-surface-variant">
                  你拍摄的照片
                </span>
              </div>
              <div className="card-content w-full flex-grow relative rounded-lg overflow-hidden border-2 border-dashed border-outline-variant bg-surface-container-lowest flex items-center justify-center min-h-[120px]">
                {uploadedImage ? (
                  <img
                    src={uploadedImage}
                    alt="上传的图片"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-outline">
                    <span className="material-symbols-outlined text-4xl mb-1">
                      image
                    </span>
                    <span className="text-xs">照片原图</span>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Image: AI Match */}
            <div className="paper-card rounded-xl w-full flex-1 min-h-0 p-3 flex flex-col relative">
              <div className="flex items-center gap-2 mb-2 px-1">
                <span
                  className="material-symbols-outlined text-primary"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  auto_awesome
                </span>
                <span className="text-label-caps font-label-caps text-primary">
                  匹配的图鉴
                </span>
              </div>
              <div className="card-content w-full flex-grow relative rounded-lg overflow-hidden border-2 border-primary-container/50 bg-surface-container-lowest flex items-center justify-center min-h-[120px]">
                <img
                  alt="艾草"
                  className="absolute inset-0 w-full h-full object-cover"
                  src="/images/image_23291fcc41.png"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Knowledge Scroll & Actions */}
          <div className="md:col-span-7 h-full flex flex-col gap-3">
            {/* Knowledge Card */}
            <div className="paper-card rounded-xl flex-grow p-6 flex flex-col gap-4 relative">
              <div className="card-content h-full flex flex-col">
                {/* Header */}
                <div className="flex justify-between items-start border-b border-surface-variant pb-4 mb-2">
                  <div>
                    <div className="flex items-center gap-3">
                      <h2 className="text-display-lg font-display-lg text-on-surface">
                        艾草
                      </h2>
                      <span className="text-title-sm font-title-sm text-outline">
                        (Ài Cǎo)
                      </span>
                    </div>
                    <div className="flex gap-2 mt-2">
                      <span className="leaf-tag px-3 py-1 text-label-caps font-label-caps text-on-surface-variant flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">
                          eco
                        </span>
                        菊科
                      </span>
                    </div>
                  </div>
                  {/* Decorative Stamp */}
                  <div
                    className="w-12 h-12 rounded bg-error-container text-error border-2 border-error/50 flex items-center justify-center text-label-caps font-bold rotate-12 opacity-80"
                    style={{ fontFamily: "Kaiti, serif" }}
                  >
                    鉴真
                  </div>
                </div>

                {/* Content Sections */}
                <div className="flex-grow overflow-y-auto pr-2 space-y-4 custom-scrollbar">
                  {/* Feature */}
                  <div className="bg-surface-container-low rounded-lg p-3 border border-surface-variant">
                    <h3 className="text-title-sm font-title-sm text-primary flex items-center gap-2 mb-1">
                      <span
                        className="material-symbols-outlined"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        visibility
                      </span>
                      本草特征
                    </h3>
                    <p className="text-body-base font-body-base text-on-surface-variant pl-8">
                      叶子像羽毛，背面有白色的绒毛，闻起来有一股浓浓的清香味。
                    </p>
                  </div>

                  {/* Story */}
                  <div className="bg-tertiary-container/20 rounded-lg p-3 border border-tertiary-fixed-dim">
                    <h3 className="text-title-sm font-title-sm text-tertiary flex items-center gap-2 mb-1">
                      <span
                        className="material-symbols-outlined"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        menu_book
                      </span>
                      本草小故事
                    </h3>
                    <p className="text-body-base font-body-base text-on-surface-variant pl-8">
                      它是端午节的小卫士，人们会把它挂在门口，或者做成香囊带在身上，据说可以驱赶蚊虫、保护健康。
                    </p>
                  </div>

                  {/* Culture */}
                  <div className="bg-secondary-container/30 rounded-lg p-3 border border-secondary-fixed-dim">
                    <h3 className="text-title-sm font-title-sm text-on-secondary-container flex items-center gap-2 mb-1">
                      <span
                        className="material-symbols-outlined"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        local_library
                      </span>
                      民俗传统
                    </h3>
                    <p className="text-body-base font-body-base text-on-surface-variant pl-8">
                      在民间，有“清明插柳，端午插艾”的说法，艾草也是制作青团的重要材料。
                    </p>
                  </div>

                  {/* Kid's Tip / Warning */}
                  <div className="bg-error-container/30 rounded-lg p-3 border border-error/20 mt-auto">
                    <h3 className="text-title-sm font-title-sm text-on-error-container flex items-center gap-2 mb-1">
                      <span
                        className="material-symbols-outlined text-error"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        campaign
                      </span>
                      小提示
                    </h3>
                    <p className="text-body-base font-body-base text-on-error-container pl-8 font-medium">
                      认识本草很有趣，但不要随意采摘、品尝或使用不认识的植物哦！
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons Area */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 shrink-0">
              <button
                onClick={() => navigate("atlas")}
                className="btn-primary rounded-xl py-3 px-4 flex flex-col items-center justify-center gap-1 min-h-[64px] col-span-2"
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  library_add
                </span>
                <span className="font-bold text-sm">加入我的本草图鉴</span>
              </button>
              <button className="btn-secondary rounded-xl py-2 px-2 flex flex-col items-center justify-center gap-1 min-h-[64px]">
                <span className="material-symbols-outlined">
                  import_contacts
                </span>
                <span className="text-xs font-bold">阅读它的故事</span>
              </button>
              <button className="btn-secondary rounded-xl py-2 px-2 flex flex-col items-center justify-center gap-1 min-h-[64px]">
                <span className="material-symbols-outlined">
                  sports_esports
                </span>
                <span className="text-xs font-bold">开始相关闯关</span>
              </button>
            </div>
          </div>
        </div>

        {/* Related Recommendations */}
        <div className="w-full shrink-0 flex items-center gap-4 z-10 pt-2 border-t border-outline-variant/30">
          <span className="text-label-caps font-label-caps text-outline shrink-0">
            你可能还想认识：
          </span>
          <div className="flex gap-3 overflow-x-auto pb-2 custom-scrollbar">
            {[
              { name: "山楂", icon: "local_florist" },
              { name: "金银花", icon: "spa" },
              { name: "薄荷", icon: "grass" },
            ].map((item, i) => (
              <div
                key={i}
                className="paper-card rounded-lg flex items-center gap-2 p-1.5 pr-3 cursor-pointer hover:bg-surface-container-low transition-colors min-w-fit"
              >
                <div className="w-10 h-10 rounded bg-surface-variant overflow-hidden flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">
                    {item.icon}
                  </span>
                </div>
                <span className="text-sm font-medium text-on-surface-variant">
                  {item.name}
                </span>
              </div>
            ))}
          </div>

          <button
            onClick={() => navigate("upload")}
            className="ml-auto flex items-center gap-1 text-sm font-bold text-primary hover:bg-primary-container/10 px-3 py-2 rounded-lg transition-colors shrink-0"
          >
            <span className="material-symbols-outlined text-[18px]">
              refresh
            </span>
            重新识别
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container border-t border-outline-variant w-full rounded-t-xl shrink-0 z-50">
        <div className="flex flex-col md:flex-row justify-between items-center py-2 px-6 w-full max-w-7xl mx-auto gap-3 text-center md:text-left">
          <div className="text-label-caps font-label-caps text-on-surface-variant">
            © 2026 小小本草官 |
            本平台仅用于传统文化学习与科普教育，不作为诊断、治疗或用药依据。
          </div>
          <div className="flex gap-4">
            <button className="text-label-caps font-label-caps text-on-surface-variant hover:text-primary transition-all hover:opacity-80">
              关于我们
            </button>
            <button className="text-label-caps font-label-caps text-on-surface-variant hover:text-primary transition-all hover:opacity-80">
              使用协议
            </button>
            <button className="text-label-caps font-label-caps text-on-surface-variant hover:text-primary transition-all hover:opacity-80">
              隐私政策
            </button>
            <button className="text-label-caps font-label-caps text-on-surface-variant hover:text-primary transition-all hover:opacity-80">
              联系教师
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
