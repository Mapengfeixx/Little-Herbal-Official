import React, { useState, useRef } from "react";
import Navigation from "../components/Navigation";

export default function AiUpload({
  navigate,
  uploadedImage,
  setUploadedImage,
}: {
  navigate: (view: string) => void;
  uploadedImage?: string | null;
  setUploadedImage: (url: string | null) => void;
}) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setUploadedImage(url);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setUploadedImage(url);
    }
  };

  const triggerUpload = () => {
    fileInputRef.current?.click();
  };

  const customStyles = `
    @keyframes scan-line {
        0% { top: 5%; opacity: 0; box-shadow: 0 0 0px 0px rgba(123, 163, 97, 0); }
        10% { opacity: 1; box-shadow: 0 0 15px 5px rgba(123, 163, 97, 0.5); }
        90% { opacity: 1; box-shadow: 0 0 15px 5px rgba(123, 163, 97, 0.5); }
        100% { top: 95%; opacity: 0; box-shadow: 0 0 0px 0px rgba(123, 163, 97, 0); }
    }
    .animate-scan-line {
        animation: scan-line 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    }
    .bg-guofeng-texture {
        background-color: var(--color-background);
        background-image: radial-gradient(circle at 100% 0%, rgba(196, 239, 165, 0.1) 0%, transparent 40%),
                          radial-gradient(circle at 0% 100%, rgba(205, 200, 151, 0.15) 0%, transparent 40%);
    }
    @keyframes pulse-subtle {
        0% { box-shadow: 0 0 0 0 rgba(123, 163, 97, 0.4); }
        70% { box-shadow: 0 0 0 10px rgba(123, 163, 97, 0); }
        100% { box-shadow: 0 0 0 0 rgba(123, 163, 97, 0); }
    }
    .animate-pulse-subtle {
        animation: pulse-subtle 2s infinite;
    }
  `;

  return (
    <div className="bg-guofeng-texture text-on-background font-body-base antialiased h-screen w-full flex flex-col overflow-hidden relative">
      <style>{customStyles}</style>

      <Navigation currentView="upload" onNavigate={navigate} />

      <input
        type="file"
        accept="image/jpeg, image/png"
        className="hidden"
        ref={fileInputRef}
        onChange={handleFileChange}
      />

      {/* Main Canvas Area */}
      <main className="flex-1 flex flex-col md:flex-row w-full max-w-7xl mx-auto px-6 py-6 gap-8 overflow-hidden relative z-10">
        {/* Left Panel: Context & Info (Glassmorphism Bento) */}
        <section className="flex-1 flex flex-col justify-between h-full space-y-6">
          {/* Title Area */}
          <div className="space-y-2">
            <h1 className="text-display-lg font-display-lg text-primary tracking-tight">
              AI识本草
            </h1>
            <p className="text-body-base font-body-base text-on-surface-variant opacity-90 max-w-md">
              上传一张本草图片，让AI小助手帮你认识它。探索大自然的奇妙草本世界！
            </p>
          </div>

          {/* Recognition Process Flow */}
          <div className="bg-surface/80 backdrop-blur-md rounded-2xl p-6 shadow-sm border border-surface-variant">
            <h2 className="text-title-sm font-title-sm text-on-surface mb-4 flex items-center gap-2">
              <span
                className="material-symbols-outlined text-primary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                psychology
              </span>
              探索步骤
            </h2>
            <div className="flex items-center justify-between relative">
              <div className="absolute top-1/2 left-8 right-8 h-[2px] bg-secondary-container -translate-y-1/2 z-0"></div>

              <div className="relative z-10 flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shadow-md border-2 border-surface">
                  <span className="material-symbols-outlined">add_a_photo</span>
                </div>
                <span className="text-label-caps font-label-caps text-on-surface-variant">
                  1. 上传图片
                </span>
              </div>

              <div className="relative z-10 flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-surface-container-high text-primary flex items-center justify-center shadow-sm border-2 border-surface">
                  <span className="material-symbols-outlined">
                    document_scanner
                  </span>
                </div>
                <span className="text-label-caps font-label-caps text-on-surface-variant">
                  2. AI观察特征
                </span>
              </div>

              <div className="relative z-10 flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-surface-container-high text-primary flex items-center justify-center shadow-sm border-2 border-surface">
                  <span className="material-symbols-outlined">
                    auto_awesome_mosaic
                  </span>
                </div>
                <span className="text-label-caps font-label-caps text-on-surface-variant">
                  3. 生成知识卡
                </span>
              </div>
            </div>
          </div>

          {/* Recognized Herbs Mini Cards */}
          <div className="flex-1 flex flex-col overflow-hidden border-t-transparent pt-2">
            <h2 className="text-title-sm font-title-sm text-on-surface mb-3 flex items-center gap-2 shrink-0">
              <span
                className="material-symbols-outlined text-tertiary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                spa
              </span>
              可以识别的本草朋友
            </h2>
            <div className="flex-1 overflow-y-auto no-scrollbar pb-2">
              <div className="flex flex-wrap gap-3 content-start">
                {[
                  { name: "金银花", icon: "local_florist" },
                  { name: "艾草", icon: "grass" },
                  { name: "菊花", icon: "filter_vintage" },
                  { name: "薄荷", icon: "eco" },
                  { name: "山楂", icon: "nutrition" },
                  { name: "陈皮", icon: "texture" },
                  { name: "枸杞", icon: "grain" },
                  { name: "荷叶", icon: "energy_savings_leaf" },
                  { name: "桂花", icon: "hive" },
                  { name: "茯苓", icon: "medication_liquid" },
                ].map((herb, idx) => (
                  <div
                    key={idx}
                    className="bg-surface shadow-sm hover:shadow-md transition-shadow duration-200 rounded-xl p-2 border border-surface-variant flex items-center gap-3 pr-4 cursor-default"
                  >
                    <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-secondary">
                      <span className="material-symbols-outlined text-sm">
                        {herb.icon}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-body-base font-body-base text-on-surface font-semibold leading-tight">
                        {herb.name}
                      </span>
                      <span className="text-[10px] text-primary-container bg-primary-container/10 px-1.5 py-0.5 rounded-sm mt-0.5 w-max">
                        可识别
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Right Panel: AI Scanner Action Area */}
        <section className="flex-1 flex flex-col justify-center items-center h-full">
          {/* Scanning Canvas */}
          <div
            onClick={triggerUpload}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            className="w-full max-w-lg aspect-square bg-surface/50 backdrop-blur-xl rounded-[2.5rem] border-4 border-dashed border-primary/30 relative overflow-hidden flex flex-col items-center justify-center shadow-lg group cursor-pointer hover:border-primary/60 transition-colors duration-300"
          >
            {/* Animated Scanning Line */}
            <div className="absolute left-0 right-0 h-[2px] bg-primary animate-scan-line z-20 pointer-events-none w-[90%] mx-auto rounded-full"></div>

            {/* Inner Decoration Corners */}
            <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-primary/40 rounded-tl-lg z-20"></div>
            <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-primary/40 rounded-tr-lg z-20"></div>
            <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-primary/40 rounded-bl-lg z-20"></div>
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-primary/40 rounded-br-lg z-20"></div>

            {uploadedImage ? (
              <img
                src={uploadedImage}
                alt="Preview"
                className="absolute inset-0 w-full h-full object-cover z-10"
              />
            ) : (
              <div className="flex flex-col items-center gap-4 z-10">
                <div className="flex gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary-container/20 flex items-center justify-center text-primary group-hover:bg-primary-container/40 transition-colors duration-300">
                    <span
                      className="material-symbols-outlined text-4xl"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      cloud_upload
                    </span>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-tertiary-container/20 flex items-center justify-center text-tertiary group-hover:bg-tertiary-container/40 transition-colors duration-300">
                    <span
                      className="material-symbols-outlined text-4xl"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      photo_camera
                    </span>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-title-sm font-title-sm text-on-surface-variant font-medium">
                    点击上传图片，或将图片拖到这里
                  </p>
                  <p className="text-label-caps font-label-caps text-outline mt-1">
                    支持 JPG, PNG 格式
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex gap-4 w-full max-w-lg">
            <div className="flex-[3] flex flex-col gap-4">
              <button
                onClick={triggerUpload}
                className="w-full h-14 bg-primary text-on-primary rounded-2xl flex items-center justify-center gap-2 hover:bg-surface-tint hover:shadow-md active:scale-[0.98] transition-all duration-200 text-title-sm font-title-sm shadow-sm relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                <span className="material-symbols-outlined relative z-10">
                  upload
                </span>
                <span className="relative z-10">上传图片</span>
              </button>
              <button
                onClick={() => navigate("result")}
                className="w-full h-14 bg-primary text-on-primary rounded-2xl flex items-center justify-center gap-3 hover:bg-surface-tint hover:shadow-lg active:scale-[0.98] transition-all duration-200 text-title-sm font-title-sm shadow-md animate-pulse-subtle group"
              >
                <span
                  className="material-symbols-outlined text-2xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  psychology
                </span>
                <span>开始识别</span>
              </button>
            </div>
            <div className="flex-[2]">
              <button className="w-full h-full min-h-[3.5rem] bg-surface text-primary border-2 border-primary rounded-2xl flex flex-col items-center justify-center gap-2 hover:bg-primary-container/10 active:scale-[0.98] transition-all duration-200 text-title-sm font-title-sm shadow-sm">
                <span className="material-symbols-outlined text-3xl">
                  photo_camera
                </span>
                <span>打开摄像头</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Safety Footer */}
      <footer className="bg-surface-container-highest/80 backdrop-blur-sm border-t border-outline-variant/30 py-3 px-6 shrink-0 relative z-20">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-center">
          <span
            className="material-symbols-outlined text-error text-sm"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            info
          </span>
          <p className="text-[11px] font-label-caps text-on-surface-variant tracking-wide leading-relaxed">
            温馨提示：本功能仅用于本草文化学习和图像识别体验，不作为植物采食、诊断、治疗或用药依据。儿童请在家长或教师陪同下使用。
          </p>
        </div>
      </footer>
    </div>
  );
}
