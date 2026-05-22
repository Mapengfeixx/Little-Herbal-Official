import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation";

interface GameLevelProps {
  navigate: (view: string) => void;
  level: number;
}

export default function GameLevel({ navigate, level }: GameLevelProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    setSelectedOption(null);
    setShowError(false);
  }, [level]);

  const levelsData = [
    {
      title: "看图识本草",
      question: "哪种植物因为花朵初开为纯白，后转为黄色，被称为“金银花”？",
      img: "/images/image_7f91e46017.png",
      options: [
        { id: "A", text: "菊花" },
        { id: "B", text: "金银花" },
        { id: "C", text: "薄荷" },
      ],
      correctAnswer: "B",
    },
    {
      title: "看图识本草",
      question: "哪种本草的果子圆圆箢箢，叶片边缘有小锯齿？",
      img: "/images/image_1959c19d3d.png",
      options: [
        { id: "A", text: "菊花" },
        { id: "B", text: "山楂" },
        { id: "C", text: "薄荷" },
      ],
      correctAnswer: "B",
    },
    {
      title: "看图识本草",
      question: "哪种本草生长在松树根部，看起来像块木头，可以用来煮粥健脾？",
      img: "/images/image_0ea461f5d8.png",
      options: [
        { id: "A", text: "菊花" },
        { id: "B", text: "山楂" },
        { id: "C", text: "茯苓" },
      ],
      correctAnswer: "C",
    },
  ];

  const currentLevelData = levelsData[level - 1] || levelsData[0];
  const progressPercent = (level / 3) * 100;

  const handleConfirm = () => {
    if (!selectedOption) return;
    if (selectedOption === currentLevelData.correctAnswer) {
      if (level < 3) {
        navigate(`games:level:${level + 1}`);
      } else {
        navigate("games:success");
      }
    } else {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
    }
  };

  const customStyles = `
    @keyframes subtleFloat {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-5px); }
        100% { transform: translateY(0px); }
    }
    .animate-float {
        animation: subtleFloat 6s ease-in-out infinite;
    }
    .texture-bg {
        background-image: url('data:image/svg+xml;utf8,<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/></filter><rect width="100" height="100" filter="url(%23noise)" opacity="0.05"/></svg>');
    }
  `;

  return (
    <div className="bg-background text-on-surface font-body-base flex flex-col texture-bg relative overflow-hidden h-screen w-full mx-auto shadow-2xl">
      <style>{customStyles}</style>

      {/* Decorative Ambient Background Graphic */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-30 mix-blend-multiply"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 20%, #a8d38c22 0%, transparent 40%), radial-gradient(circle at 20% 80%, #cdc89722 0%, transparent 40%)",
        }}
      ></div>

      <Navigation currentView="games" onNavigate={navigate} />

      <main className="flex-grow flex items-center justify-center p-4 md:p-6 relative z-10 overflow-hidden h-full">
        <div className="w-full max-w-5xl bg-surface-container-lowest rounded-2xl shadow-lg relative flex flex-col border border-outline-variant/30 h-full max-h-[80vh] overflow-hidden">
          {/* Scroll Top Decoration */}
          <div className="h-4 bg-surface-container-high w-full rounded-t-2xl border-b border-outline-variant/20 flex items-center justify-center shrink-0">
            <div className="w-16 h-1 bg-outline-variant/30 rounded-full"></div>
          </div>

          <div className="p-6 md:p-10 flex flex-col relative z-10 h-full overflow-y-auto">
            {/* Progress Header */}
            <div className="flex items-center justify-between mb-8 shrink-0">
              <button
                onClick={() => navigate("games")}
                aria-label="返回"
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-low transition-colors text-on-surface-variant"
              >
                <span className="material-symbols-outlined">arrow_back</span>
              </button>
              <div className="flex-grow mx-6 max-w-md">
                <div className="flex justify-between text-label-caps font-label-caps text-on-surface-variant mb-2">
                  <span>第 {level} 关</span>
                  <span>进度 {level}/3</span>
                </div>
                {/* Progress Bar */}
                <div className="h-3 w-full bg-surface-container-high rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${progressPercent}%` }}
                  ></div>
                </div>
              </div>
              <button
                aria-label="提示"
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-low transition-colors text-on-surface-variant"
              >
                <span className="material-symbols-outlined">lightbulb</span>
              </button>
            </div>

            {/* Split Content Area */}
            <div className="flex flex-col md:flex-row gap-10 items-center justify-center flex-grow mb-6">
              {/* Left Side: Herb Image */}
              <div className="w-full md:w-[45%] relative group cursor-pointer flex justify-center">
                <div className="absolute -inset-2 bg-gradient-to-tr from-primary-container/40 to-tertiary-container/40 rounded-[2rem] blur-sm group-hover:blur-md transition-all duration-500 -z-10"></div>
                <div className="aspect-square w-full max-w-[400px] rounded-2xl overflow-hidden border-4 border-surface shadow-md relative bg-surface-container-low animate-float flex items-center justify-center">
                  <img
                    alt={currentLevelData.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src={currentLevelData.img}
                  />

                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <div className="w-16 h-16 rounded-full border-2 border-primary-fixed border-dashed animate-spin flex items-center justify-center shadow-[0_0_15px_rgba(168,211,140,0.5)]">
                      <span
                        className="material-symbols-outlined text-primary-fixed"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        center_focus_strong
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: Question & Options */}
              <div className="w-full md:w-[55%] flex flex-col justify-center">
                <div className="text-left mb-8">
                  <div className="inline-flex items-center justify-center px-4 py-1.5 bg-tertiary-container/30 text-on-tertiary-container rounded-full text-label-caps font-label-caps mb-4 border border-tertiary-container/50">
                    <span className="material-symbols-outlined text-[16px] mr-1">
                      nature
                    </span>
                    {currentLevelData.title}
                  </div>
                  <h1 className="text-headline-md font-headline-md text-on-surface leading-tight">
                    {currentLevelData.question}
                  </h1>
                </div>

                {/* Options Grid */}
                <div className="grid grid-cols-1 gap-4 w-full max-w-md">
                  {currentLevelData.options.map((option) => {
                    const isSelected = selectedOption === option.id;
                    return (
                      <label
                        key={option.id}
                        className={`relative flex items-center p-4 rounded-xl border-2 ${isSelected ? "border-primary" : "border-outline-variant"} bg-surface cursor-pointer hover:border-primary hover:bg-surface-container-low transition-all duration-200 shadow-sm overflow-hidden group`}
                      >
                        <input
                          className="peer sr-only"
                          name="quiz-option"
                          type="radio"
                          value={option.id}
                          checked={isSelected}
                          onChange={() => setSelectedOption(option.id)}
                        />
                        <div
                          className={`absolute inset-0 bg-primary/5 transition-opacity ${isSelected ? "opacity-100" : "opacity-0"}`}
                        ></div>

                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center text-title-sm font-title-sm transition-colors mr-4 z-10 
                          ${isSelected ? "bg-primary text-on-primary" : "bg-surface-container-high text-on-surface-variant group-hover:bg-primary group-hover:text-on-primary"}`}
                        >
                          {option.id}
                        </div>
                        <span className="text-title-sm font-title-sm text-on-surface z-10">
                          {option.text}
                        </span>

                        <span
                          className={`material-symbols-outlined absolute right-4 text-primary transform transition-all duration-300 z-10
                            ${isSelected ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          eco
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Error Message Toast */}
            {showError && (
              <div className="mx-auto mb-4 px-6 py-3 bg-error-container text-on-error-container rounded-full text-title-sm font-title-sm animate-bounce shadow-md">
                再仔细看看，正确答案另有其人哦！
              </div>
            )}

            {/* Action Area */}
            <div className="flex justify-center shrink-0 mt-4 mb-2">
              <button
                onClick={handleConfirm}
                disabled={!selectedOption}
                className={`px-12 py-4 rounded-xl text-title-sm font-title-sm flex items-center gap-2 transition-all duration-200
                  ${selectedOption ? "bg-primary text-on-primary shadow-md hover:bg-primary/90 hover:shadow-lg active:scale-95" : "bg-surface-container-highest text-on-surface-variant/50 cursor-not-allowed"}`}
              >
                确认答案
                <span className="material-symbols-outlined text-[20px]">
                  check_circle
                </span>
              </button>
            </div>
          </div>

          {/* Scroll Bottom Decoration */}
          <div className="h-6 bg-surface-container-high w-full flex items-center justify-center rounded-b-2xl border-t border-outline-variant/20 shrink-0 mt-auto">
            <div className="w-8 h-1 bg-outline-variant/30 rounded-full"></div>
          </div>
        </div>
      </main>
    </div>
  );
}
