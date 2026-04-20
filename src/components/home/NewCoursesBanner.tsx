import { Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const courses = [
  { label: "B.Sc. (Animation)", emoji: "🎨" },
  { label: "B.Sc. (AI/ML)", emoji: "🤖" },
  { label: "B.Sc. (Data Science)", emoji: "📊" },
  { label: "B.Sc. (Cyber Security)", emoji: "🔐" },
  { label: "B.Sc. (IT)", emoji: "💻" },
  { label: "B.Sc. (Fashion Designing)", emoji: "👗" },
  { label: "M.Sc. (Data Science)", emoji: "🧠" },
];

export const NewCoursesBanner = () => {
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (document.getElementById("courses-kf")) return;
    const s = document.createElement("style");
    s.id = "courses-kf";
    s.textContent =
      "@keyframes ticker2 { from { transform: translateX(0); } to { transform: translateX(-50%); } }";
    document.head.appendChild(s);
  }, []);

  return (
    <section
      className="py-3 relative overflow-hidden"
      style={{ background: "linear-gradient(to right, #7c3aed, #4f46e5, #7c3aed)" }}
    >
      <div className="container relative z-10">
        <div className="flex items-center gap-4">

          <div
            className="flex items-center gap-2 px-4 py-1.5 border border-white/30 rounded-full text-white font-bold text-xs whitespace-nowrap shadow-lg flex-shrink-0"
            style={{ background: "rgba(255,255,255,0.15)" }}
          >
            <Sparkles className="w-3.5 h-3.5 text-yellow-300 animate-pulse" />
            <span className="tracking-wide uppercase">New Courses</span>
          </div>

          <div
            className="flex-1 overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className="flex gap-4"
              style={{
                width: "max-content",
                animation: "ticker2 28s linear infinite",
                animationPlayState: isPaused ? "paused" : "running",
              }}
            >
              {[...courses, ...courses].map((course, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 hover:scale-105 transition-all duration-200 cursor-pointer whitespace-nowrap group"
                  style={{ background: "rgba(255,255,255,0.1)" }}
                >
                  <span className="text-base leading-none">{course.emoji}</span>
                  <span className="text-sm font-semibold text-white group-hover:text-yellow-200 transition-colors">
                    {course.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <a
            href="/academics/courses"
            className="hidden md:flex items-center gap-1.5 px-4 py-1.5 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 font-bold text-xs rounded-full whitespace-nowrap transition-all duration-200 hover:scale-105 shadow-md flex-shrink-0"
          >
            <Sparkles className="w-3 h-3" />
            Explore Now
          </a>

        </div>
      </div>
    </section>
  );
};