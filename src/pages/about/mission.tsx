import { useEffect, useRef, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";
import { aboutData } from "@/data/about/aboutData";
import { Target } from "lucide-react";

const data = aboutData["mission"];

const useReveal = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.12 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
};

const Reveal = ({
  children, from = "up", delay = 0,
}: { children: React.ReactNode; from?: "left" | "right" | "up"; delay?: number }) => {
  const { ref, visible } = useReveal();
  const init = from === "left" ? "translateX(-50px)" : from === "right" ? "translateX(50px)" : "translateY(30px)";
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translate(0)" : init,
      transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
    }}>
      {children}
    </div>
  );
};

const parseBlocks = (raw: string) => {
  return raw.split("\n\n").filter(Boolean).map((block) => {
    const lines = block.split("\n").map((l) => l.trim()).filter(Boolean);
    const isHeadingOnly = lines.length === 1 && !lines[0].startsWith("•");
    const headingLine = !lines[0].startsWith("•") ? lines[0] : null;
    const bulletLines = lines.filter((l) => l.startsWith("•")).map((l) => l.replace(/^•\s*/, ""));
    const prose = bulletLines.join(", ");
    return { isHeadingOnly, headingLine, prose, plain: lines.join(" ") };
  });
};

const Mission = () => {
  const [heroVisible, setHeroVisible] = useState(false);
  useEffect(() => { setTimeout(() => setHeroVisible(true), 80); }, []);

  const blocks = parseBlocks(data.content);

  return (
    <Layout>
      <PageHeader
        title={data.title}
        description={data.description}
        breadcrumbs={[
          { label: "About Us", href: "/about/se-society" },
          { label: data.title },
        ]}
      />

      <section className="py-8">
        <div className="container max-w-3xl mx-auto px-4">

          {/* ── Hero icon badge ── */}
          <div
            className="flex justify-center mb-6"
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateY(0) scale(1)" : "translateY(30px) scale(0.85)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            <div className="relative flex items-center justify-center">
              <span
                className="absolute w-20 h-20 rounded-full bg-emerald-400/20"
                style={{ animation: "ping-slow 2.5s ease-in-out infinite" }}
              />
              <div className="relative z-10 w-16 h-16 rounded-2xl bg-emerald-500 flex items-center justify-center shadow-xl">
                <Target className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>

          {/* ── Content card ── */}
          <div
            className="bg-card rounded-2xl shadow-soft border border-border overflow-hidden"
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateY(0)" : "translateY(40px)",
              transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
            }}
          >
            {/* Top accent bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-emerald-500 via-emerald-300 to-transparent" />

            <div className="p-8 space-y-2">
              {blocks.map((b, i) => {
                if (b.isHeadingOnly) {
                  return (
                    <Reveal key={i} from="left" delay={i * 80}>
                      <h2 className="text-xl font-bold text-foreground mt-2 mb-1 flex items-center gap-2">
                        <span className="w-1 h-6 rounded-full bg-emerald-500 inline-block flex-shrink-0" />
                        {b.plain}
                      </h2>
                    </Reveal>
                  );
                }
                return (
                  <Reveal key={i} from={i % 2 === 0 ? "left" : "right"} delay={i * 80}>
                    <div className="mb-3">
                      {b.headingLine && (
                        <p className="text-sm font-bold text-emerald-600 uppercase tracking-wide mb-1">
                          {b.headingLine}
                        </p>
                      )}
                      {b.prose ? (
                        <p className="text-base text-muted-foreground leading-relaxed text-justify">
                          {b.prose}.
                        </p>
                      ) : (
                        <p className="text-base text-muted-foreground leading-relaxed text-justify">
                          {b.plain}
                        </p>
                      )}
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      <style>{`
        @keyframes ping-slow {
          0%   { transform: scale(0.9); opacity: 0.5; }
          70%  { transform: scale(1.6); opacity: 0; }
          100% { transform: scale(1.6); opacity: 0; }
        }
      `}</style>
    </Layout>
  );
};

export default Mission;