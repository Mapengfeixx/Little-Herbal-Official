import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation";

interface ReaderProps {
  navigate: (view: string) => void;
  bookId: string;
}

export default function Reader({ navigate, bookId }: ReaderProps) {
  const customStyles = `
    .paper-texture {
        background-color: #f3f4ec;
        background-image: 
            linear-gradient(90deg, rgba(200,195,185,0.05) 1px, transparent 1px),
            linear-gradient(rgba(200,195,185,0.05) 1px, transparent 1px);
        background-size: 20px 20px;
        box-shadow: inset 0 0 40px rgba(100, 95, 80, 0.05);
    }
    .scroll-edge {
        background: linear-gradient(to right, #d4cfc1, #eae4b1, #d4cfc1);
        border-radius: 8px;
        box-shadow: 2px 4px 10px rgba(0,0,0,0.15);
    }
    .book-page-container {
        position: relative;
        perspective: 1500px;
    }
    .page-shadow {
        box-shadow: 
            -10px 0 20px -5px rgba(0,0,0,0.1),
            10px 0 20px -5px rgba(0,0,0,0.1);
    }
    .page-image {
        transition: opacity 0.3s ease-in-out;
    }
  `;

  const bookData: Record<string, { title: string; pages: string[] }> = {
    jinyinhua: {
      title: "《金银花小精灵》",
      pages: [
        "/images/image_241377c9ce.png",
        "/images/image_30e59089f1.png",
        "/images/image_f924323fdc.png",
        "/images/image_e058338d01.png",
      ],
    },
    shanzha: {
      title: "《山楂红了》",
      pages: [
        "/images/image_d496c93ecf.png",
        "/images/image_afafa45703.png",
        "/images/image_05babe5174.png",
        "/images/image_6c7528bcf5.png",
      ],
    },
    juhua: {
      title: "《菊花姐姐的秋日信》",
      pages: [
        "/images/image_83a4a8c0dc.png",
        "/images/image_440c0d5bf8.png",
        "/images/image_829fedffba.png",
        "/images/image_555ed3d073.png",
      ],
    },
    aicao: {
      title: "《艾草香囊的故事》",
      pages: [
        "/images/image_d30cc7eb1d.png",
        "/images/image_5c4c730526.png",
        "/images/image_68810c22c1.png",
        "/images/image_847b11dffc.png",
      ],
    },
    guihua: {
      title: "《桂花落满小院》",
      pages: [
        "/images/image_4e29f51b0e.png",
        "/images/image_f0c4c10aa7.png",
        "/images/image_8fd49b6307.png",
        "/images/image_3cad1e4798.png",
      ],
    },
    fuling: {
      title: "《茯苓爷爷的木头屋》",
      pages: [
        "/images/image_c9749c1931.png",
        "/images/image_5c4c730526.png",
        "/images/image_68810c22c1.png",
        "/images/image_847b11dffc.png",
      ],
    },
    bohe: {
      title: "《薄荷森林的清凉风》",
      pages: [
        "/images/image_241377c9ce.png",
        "/images/image_30e59089f1.png",
        "/images/image_f924323fdc.png",
        "/images/image_e058338d01.png",
      ],
    },
    heye: {
      title: "《荷叶伞下的小故事》",
      pages: [
        "/images/image_241377c9ce.png",
        "/images/image_30e59089f1.png",
        "/images/image_f924323fdc.png",
        "/images/image_e058338d01.png",
      ],
    },
  };

  const book = bookData[bookId] || bookData["jinyinhua"];

  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [imageSrc, setImageSrc] = useState(book.pages[0]);

  const updatePage = (newIndex: number) => {
    setOpacity(0);
    setTimeout(() => {
      setImageSrc(book.pages[newIndex]);
      setCurrentPageIndex(newIndex);
      setOpacity(1);
    }, 150);
  };

  const prevPage = () => {
    if (currentPageIndex > 0) updatePage(currentPageIndex - 1);
  };

  const nextPage = () => {
    if (currentPageIndex < book.pages.length - 1)
      updatePage(currentPageIndex + 1);
  };

  return (
    <div className="bg-background text-on-background flex flex-col items-center antialiased w-full h-screen overflow-hidden relative">
      <style>{customStyles}</style>

      <Navigation currentView="library" onNavigate={navigate} />

      {/* Main Content Canvas */}
      <main className="w-full h-full pt-16 flex flex-col items-center justify-center relative z-10 flex-grow">
        {/* Decorative Background Elements */}
        <div className="absolute top-24 left-10 opacity-20 pointer-events-none">
          <span
            className="material-symbols-outlined text-[120px] text-primary"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            eco
          </span>
        </div>
        <div className="absolute bottom-10 right-10 opacity-10 pointer-events-none">
          <span
            className="material-symbols-outlined text-[180px] text-tertiary"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            cloud
          </span>
        </div>

        {/* Book Header Area */}
        <div className="mb-6 text-center z-20">
          <h1 className="font-headline-md text-headline-md text-primary mb-2">
            {book.title}
          </h1>
          <div className="inline-flex items-center gap-2 bg-surface-container-high px-4 py-1.5 rounded-full border border-outline-variant shadow-sm">
            <span className="material-symbols-outlined text-tertiary text-sm">
              auto_stories
            </span>
            <span className="font-label-caps text-label-caps text-on-surface-variant">
              第 {currentPageIndex + 1} / {book.pages.length} 页
            </span>
          </div>
        </div>

        {/* Reading Interface (Portrait Book) */}
        <div className="relative flex items-center justify-center w-full max-w-2xl lg:max-w-4xl z-20 h-[65vh] md:h-[70vh] book-page-container">
          {/* Previous Button */}
          <button
            onClick={prevPage}
            disabled={currentPageIndex === 0}
            className="absolute left-[-20px] md:left-[-60px] top-1/2 -translate-y-1/2 bg-surface-container border-2 border-outline-variant rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center shadow-lg transition-transform text-on-surface z-30 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95 hover:bg-surface-container-high"
          >
            <span className="material-symbols-outlined text-2xl md:text-3xl">
              arrow_back_ios_new
            </span>
          </button>

          {/* The Book Frame (Scroll Style) */}
          <div className="relative h-full aspect-[0.75] bg-surface-container-lowest rounded-sm page-shadow flex border-x-[8px] md:border-x-[12px] border-surface-container-highest">
            {/* Scroll Rods */}
            <div className="absolute top-[-10px] left-[-24px] w-[calc(100%+48px)] h-[24px] scroll-edge z-10"></div>
            <div className="absolute bottom-[-10px] left-[-24px] w-[calc(100%+48px)] h-[24px] scroll-edge z-10"></div>

            {/* Page Content Area */}
            <div className="w-full h-full p-4 md:p-6 paper-texture relative overflow-hidden flex flex-col border border-outline-variant/30">
              <div className="absolute top-4 left-4 opacity-30 text-tertiary">
                <span className="material-symbols-outlined">psychiatry</span>
              </div>

              <div className="w-full h-full bg-surface-container-low rounded-lg border border-outline-variant/50 overflow-hidden shadow-inner relative flex items-center justify-center">
                <img
                  alt="Book Page"
                  className="w-full h-full object-contain page-image"
                  src={imageSrc}
                  style={{ opacity }}
                />
              </div>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={nextPage}
            disabled={currentPageIndex === book.pages.length - 1}
            className="absolute right-[-20px] md:right-[-60px] top-1/2 -translate-y-1/2 bg-primary border-2 border-primary-container rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center shadow-lg transition-transform text-on-primary z-30 group disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95 hover:bg-primary-container"
          >
            <span className="material-symbols-outlined text-2xl md:text-3xl transition-transform group-hover:translate-x-1">
              arrow_forward_ios
            </span>
          </button>
        </div>

        {/* Interactive Controls / Tools */}
        <div className="mt-8 flex gap-4 md:gap-6 z-20 pb-4">
          <button className="flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-surface-container border border-outline-variant rounded-full hover:bg-surface-container-high transition-colors shadow-sm text-on-surface">
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              volume_up
            </span>
            <span className="font-title-sm text-title-sm">朗读</span>
          </button>
          <button
            onClick={() => navigate("library")}
            className="flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-full transition-colors bg-surface-container text-on-surface border border-outline-variant hover:bg-surface-container-high shadow-sm"
          >
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              arrow_back
            </span>
            <span className="font-title-sm text-title-sm">返回</span>
          </button>
        </div>
      </main>
    </div>
  );
}
