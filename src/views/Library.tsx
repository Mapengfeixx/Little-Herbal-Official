import React from "react";
import Navigation from "../components/Navigation";

export default function Library({
  navigate,
}: {
  navigate: (view: string) => void;
}) {
  const customStyles = `
    .texture-bg {
        background-image: url('data:image/svg+xml;utf8,<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/></filter><rect width="100" height="100" filter="url(%23noise)" opacity="0.05"/></svg>');
    }
    .cloud-pattern {
        background-image: radial-gradient(circle at 50% 50%, rgba(255,255,255,0.4) 0%, transparent 60%);
    }
    .bamboo-slip {
        transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    .bamboo-slip:hover {
        transform: translateY(-4px) rotate(1deg);
    }
    .ai-glass {
        background: rgba(123, 163, 97, 0.1);
        backdrop-filter: blur(8px);
        border: 1px solid rgba(123, 163, 97, 0.3);
        box-shadow: 0 0 15px rgba(123, 163, 97, 0.2);
    }
    .scroll-container::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    }
    .scroll-container::-webkit-scrollbar-track {
        background: var(--color-surface-container-low, #f3f4ec);
        border-radius: 4px;
    }
    .scroll-container::-webkit-scrollbar-thumb {
        background: var(--color-tertiary-container, #b1ad7d);
        border-radius: 4px;
    }
    @keyframes shimmer {
        100% {
            transform: translateX(100%);
        }
    }
  `;

  const books = [
    {
      id: "jinyinhua",
      title: "《金银花小精灵》",
      subtitle: "认识金银花名字里的颜色秘密。看它们如何在清晨变魔术。",
      img: "/images/image_6d78bc3fa3.png",
      status: "reading",
      progress: "80%",
    },
    {
      id: "aicao",
      title: "《艾草香囊的故事》",
      subtitle: "端午节为什么要挂艾草？一起动手做一个香香的魔法袋吧。",
      img: "/images/image_622e11e3b7.png",
      status: "unread",
    },
    {
      id: "juhua",
      title: "《菊花姐姐的秋日信》",
      subtitle: "秋风起，菊花开。看看菊花姐姐给大自然写了什么信？",
      img: "/images/image_0373fe5adb.png",
      status: "unread",
    },
    {
      id: "shanzha",
      title: "《山楂红了》",
      subtitle: "酸酸甜甜的红果果，不仅好吃，还能让肚子舒舒服服哦。",
      img: "/images/image_11eee79bfe.png",
      status: "finished",
    },
    {
      id: "bohe",
      title: "《薄荷森林的清凉风》",
      subtitle: "呼——感受薄荷叶带来的魔法清凉感！",
      img: "/images/image_287e20bd9d.png",
      status: "unread",
    },
    {
      id: "guihua",
      title: "《桂花落满小院》",
      subtitle: "甜甜的桂花香里，藏着秋天的秘密和小小的惊喜。",
      img: "/images/image_8098b1bcf7.png",
      status: "unread",
    },
    {
      id: "fuling",
      title: "《茯苓爷爷的木头屋》",
      subtitle: "藏在松树底下的宝贝，能让人安安稳稳睡好觉。",
      img: "/images/image_2351abcc5d.png",
      status: "unread",
    },
    {
      id: "heye",
      title: "《荷叶伞下的小故事》",
      subtitle: "下雨啦！小青蛙躲在圆圆的荷叶伞下听雨声。",
      img: "/images/image_89f4ef6566.png",
      status: "unread",
    },
  ];

  return (
    <div className="bg-background text-on-surface font-body-base flex flex-col texture-bg relative overflow-hidden h-screen w-full mx-auto shadow-2xl">
      <style>{customStyles}</style>

      {/* Decorative Clouds Background */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary-fixed/20 to-transparent -z-10 pointer-events-none"></div>
      <div className="absolute top-20 right-0 w-[400px] h-[400px] cloud-pattern opacity-50 -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[300px] bg-gradient-to-tr from-tertiary-fixed/30 to-transparent -z-10 pointer-events-none rounded-tr-full"></div>

      <Navigation currentView="library" onNavigate={navigate} />

      {/* Main Content Canvas */}
      <main className="flex-grow w-full max-w-7xl mx-auto px-6 py-6 relative z-10 flex flex-col md:flex-row gap-8 overflow-hidden h-full">
        {/* Left/Center Column: Bookshelf Grid */}
        <section className="flex-1 flex flex-col h-full overflow-hidden">
          {/* Header */}
          <div className="mb-6 text-left relative shrink-0">
            <h1 className="text-display-lg font-display-lg text-primary mb-2 relative z-10">
              本草故事绘本馆
            </h1>
            <p className="text-title-sm font-title-sm text-on-surface-variant">
              跟着小小本草官，听懂藏在植物里的中国故事
            </p>
            <span className="material-symbols-outlined absolute -top-4 -right-8 text-6xl text-primary-fixed/40 -z-0 rotate-12">
              energy_savings_leaf
            </span>
          </div>

          {/* Grid Container (Scrollable) */}
          <div className="flex-grow overflow-y-auto scroll-container pr-2 pb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {books.map((book) => (
                <div
                  key={book.id}
                  className="bg-surface-container-lowest rounded-xl p-4 shadow-sm border border-outline-variant/30 hover:shadow-md transition-shadow flex flex-col group h-full bamboo-slip cursor-pointer"
                  onClick={() => navigate(`reader:${book.id}`)}
                >
                  <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden mb-4 bg-tertiary-fixed-dim/20 flex items-center justify-center">
                    <img
                      alt=""
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                      src={book.img}
                    />

                    {book.status === "reading" && (
                      <div className="absolute top-2 right-2 bg-surface/90 backdrop-blur-sm px-2 py-1 rounded-full border border-primary/20 flex items-center gap-1 shadow-sm">
                        <span
                          className="material-symbols-outlined text-[14px] text-primary"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          auto_awesome
                        </span>
                        <span className="text-label-caps font-label-caps text-primary">
                          {book.progress}
                        </span>
                      </div>
                    )}
                    {book.status === "unread" && (
                      <div className="absolute top-2 right-2 bg-surface/90 backdrop-blur-sm px-2 py-1 rounded-full border border-outline-variant/50 flex items-center gap-1 shadow-sm">
                        <span className="text-label-caps font-label-caps text-on-surface-variant">
                          未开始
                        </span>
                      </div>
                    )}
                    {book.status === "finished" && (
                      <div className="absolute top-2 right-2 bg-surface/90 backdrop-blur-sm px-2 py-1 rounded-full border border-primary/20 flex items-center gap-1 shadow-sm">
                        <span
                          className="material-symbols-outlined text-[14px] text-primary"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          check_circle
                        </span>
                        <span className="text-label-caps font-label-caps text-primary">
                          已读完
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="flex-grow flex flex-col">
                    <h3 className="text-title-sm font-title-sm text-on-surface mb-1">
                      {book.title}
                    </h3>
                    <p className="text-body-base font-body-base text-on-surface-variant text-sm line-clamp-2 mb-4 flex-grow">
                      {book.subtitle}
                    </p>

                    {book.status === "reading" && (
                      <button className="w-full py-3 bg-primary-container text-on-primary-container rounded-lg font-label-caps text-label-caps shadow-sm hover:bg-primary hover:text-on-primary transition-colors flex items-center justify-center gap-2 mt-auto">
                        <span className="material-symbols-outlined text-[18px]">
                          menu_book
                        </span>
                        继续阅读
                      </button>
                    )}
                    {book.status === "unread" && (
                      <button className="w-full py-3 border-2 border-primary/20 text-primary rounded-lg font-label-caps text-label-caps hover:bg-primary-container/20 transition-colors flex items-center justify-center gap-2 mt-auto">
                        <span className="material-symbols-outlined text-[18px]">
                          play_arrow
                        </span>
                        开始阅读
                      </button>
                    )}
                    {book.status === "finished" && (
                      <button className="w-full py-3 bg-surface-container text-on-surface-variant rounded-lg font-label-caps text-label-caps hover:bg-surface-variant transition-colors flex items-center justify-center gap-2 mt-auto">
                        <span className="material-symbols-outlined text-[18px]">
                          replay
                        </span>
                        再看一遍
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Right Sidebar */}
        <aside className="w-full md:w-80 flex flex-col gap-6 shrink-0 h-full overflow-y-auto scroll-container pr-2 pb-6">
          {/* Featured Book */}
          <div
            className="bg-surface-container-low rounded-2xl border border-outline-variant/20 shadow-md relative overflow-hidden p-4 cursor-pointer"
            onClick={() => navigate("reader:jinyinhua")}
          >
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary-fixed rounded-full blur-3xl opacity-40"></div>
            <div className="flex items-center gap-2 mb-2">
              <span
                className="material-symbols-outlined text-primary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <h2 className="text-title-sm font-title-sm text-on-surface font-bold">
                今日推荐绘本
              </h2>
            </div>
            <div className="relative rounded-xl overflow-hidden aspect-square shadow-sm border border-outline-variant/10 mb-2">
              <img
                alt=""
                className="object-cover w-full h-full"
                src="/images/image_6d78bc3fa3.png"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <h3 className="text-title-sm font-title-sm font-bold">
                  《金银花小精灵》
                </h3>
              </div>
            </div>
            <p className="font-body-base text-on-surface-variant text-sm bg-surface p-3 rounded-lg border border-outline-variant/20 mb-4">
              认识金银花名字里的颜色秘密。看它们如何在清晨变魔术，是一本充满奇幻色彩的自然故事。
            </p>
            <button className="w-full bg-primary text-on-primary rounded-xl font-label-caps text-label-caps shadow-sm hover:opacity-90 hover:shadow-md transition-all flex items-center justify-center gap-2 transform active:scale-95 py-2.5">
              <span className="material-symbols-outlined">menu_book</span>
              开始阅读
            </button>
          </div>

          {/* Reading Achievements */}
          <div className="bg-tertiary-fixed/20 rounded-2xl p-6 border border-tertiary/10 shadow-sm relative bamboo-slip">
            <div className="flex items-center gap-2 mb-4 border-b border-outline-variant/20 pb-2">
              <span
                className="material-symbols-outlined text-tertiary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                emoji_events
              </span>
              <h2 className="text-title-sm font-title-sm text-on-surface font-bold">
                我的阅读成就
              </h2>
            </div>
            <div className="flex justify-between items-center mb-6">
              <div className="text-center">
                <p className="text-headline-md font-headline-md text-primary font-bold">
                  3
                </p>
                <p className="text-label-caps font-label-caps text-on-surface-variant">
                  已读绘本
                </p>
              </div>
              <div className="w-px h-10 bg-outline-variant/30"></div>
              <div className="text-center">
                <p className="text-headline-md font-headline-md text-tertiary font-bold">
                  2
                </p>
                <p className="text-label-caps font-label-caps text-on-surface-variant">
                  故事徽章
                </p>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-end mb-2">
                <span className="text-label-caps font-label-caps text-on-surface-variant">
                  下一级：本草故事家
                </span>
                <span className="text-label-caps font-label-caps text-primary font-bold">
                  还差2本
                </span>
              </div>
              <div className="h-3 w-full bg-surface-variant rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full relative"
                  style={{ width: "60%" }}
                >
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>
                </div>
              </div>
            </div>
          </div>

          {/* AI Helper Promo */}
          <div className="ai-glass rounded-2xl p-4 flex items-center gap-4 cursor-pointer hover:bg-primary-container/20 transition-colors">
            <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center shadow-sm relative">
              <span className="material-symbols-outlined text-primary text-2xl">
                smart_toy
              </span>
              <span className="absolute top-0 right-0 w-3 h-3 bg-error rounded-full border-2 border-surface"></span>
            </div>
            <div>
              <h4 className="text-label-caps font-label-caps text-primary font-bold">
                遇到不认识的草药？
              </h4>
              <p className="text-[12px] font-body-base text-on-surface-variant mt-1">
                呼叫AI小助手帮忙解答
              </p>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}
