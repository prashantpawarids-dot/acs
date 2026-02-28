import { useState, useEffect, useRef } from "react";
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";

const BASE_URL = import.meta.env.VITE_STATIC_ASSETS;

const recruiterLogos = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  src: `${BASE_URL}/images/requiter/${i + 1}.png`,
}));

const CampusDrive = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (gridRef.current) observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      {/* Scoped styles — only apply inside .cd-scope */}
      <style>{`
        .cd-scope * { box-sizing: border-box; }

        @keyframes cd-floatIn {
          0%   { opacity: 0; transform: perspective(600px) rotateY(-25deg) translateY(35px); }
          100% { opacity: 1; transform: perspective(600px) rotateY(0deg) translateY(0); }
        }
        @keyframes cd-pulseGlow {
          0%, 100% { box-shadow: 0 0 0px rgba(99,102,241,0); }
          50%       { box-shadow: 0 0 22px rgba(99,102,241,0.45); }
        }
        @keyframes cd-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes cd-shimmer {
          0%   { background-position: -400px 0; }
          100% { background-position:  400px 0; }
        }

        .cd-hero {
          background: linear-gradient(135deg, #1e1b4b 0%, #312e81 40%, #4338ca 70%, #6366f1 100%);
          border-radius: 20px;
          padding: 3rem 2rem;
          position: relative;
          overflow: hidden;
        }
        .cd-hero::before {
          content: '';
          position: absolute;
          top: -50%; left: -50%;
          width: 200%; height: 200%;
          background: radial-gradient(circle at 60% 40%, rgba(255,255,255,0.06) 0%, transparent 60%);
          pointer-events: none;
        }
        .cd-badge {
          display: inline-block;
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.25);
          border-radius: 50px;
          padding: 6px 20px;
          font-size: 0.78rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #c7d2fe;
          backdrop-filter: blur(8px);
          margin-bottom: 1rem;
        }
        .cd-hero-title {
          font-size: clamp(1.4rem, 3vw, 2rem);
          font-weight: 800;
          color: #fff;
          margin: 0 0 0.75rem;
          text-align: center;
        }
        .cd-hero-sub {
          color: #c7d2fe;
          max-width: 520px;
          margin: 0 auto 1.5rem;
          text-align: center;
          font-size: 0.95rem;
          line-height: 1.6;
        }
        .cd-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          margin-top: 1.5rem;
        }
        @media (max-width: 600px) { .cd-stats { grid-template-columns: repeat(2, 1fr); } }
        .cd-stat {
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.18);
          border-radius: 14px;
          padding: 1rem;
          text-align: center;
          transition: transform 0.3s;
          backdrop-filter: blur(10px);
        }
        .cd-stat:hover { transform: translateY(-4px); }
        .cd-stat-num {
          font-size: 1.8rem;
          font-weight: 800;
          background: linear-gradient(90deg, #fff, #a5b4fc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .cd-stat-lbl { color: #c7d2fe; font-size: 0.75rem; letter-spacing: 1px; text-transform: uppercase; margin-top: 2px; }

        .cd-shimmer-btn {
          display: inline-block;
          background: linear-gradient(135deg, #4338ca, #6366f1);
          border: none;
          border-radius: 50px;
          color: #fff;
          font-weight: 600;
          padding: 10px 28px;
          font-size: 0.9rem;
          letter-spacing: 0.5px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: transform 0.2s, box-shadow 0.2s;
          text-decoration: none !important;
        }
        .cd-shimmer-btn::after {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 60%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent);
          animation: cd-shimmer 2.5s infinite;
        }
        .cd-shimmer-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(99,102,241,0.4); }

        .cd-divider {
          border: none;
          height: 1px;
          background: linear-gradient(90deg, transparent, #6366f1, transparent);
          margin: 2rem 0;
        }

        .cd-marquee-wrap { overflow: hidden; border-radius: 12px; }
        .cd-marquee-track {
          display: flex;
          gap: 1.5rem;
          animation: cd-marquee 30s linear infinite;
          width: max-content;
        }
        .cd-marquee-track:hover { animation-play-state: paused; }
        .cd-marquee-logo {
          background: #fff;
          border-radius: 12px;
          border: 1px solid #e5e7eb;
          padding: 0.5rem 0.8rem;
          height: 70px;
          width: 130px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
          transition: transform 0.3s;
        }
        .cd-marquee-logo:hover { transform: scale(1.08); }
        .cd-marquee-logo img { max-width: 100%; max-height: 48px; object-fit: contain; }

        .cd-section-title {
          font-size: 1.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, #4338ca, #6366f1, #818cf8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: 1px;
          text-align: center;
        }
        .cd-title-bar {
          width: 60px; height: 4px;
          background: linear-gradient(90deg, #6366f1, #818cf8);
          border-radius: 4px;
          margin: 8px auto 0;
        }

        .cd-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
          gap: 1rem;
        }

        .cd-card {
          background: #fff;
          border-radius: 16px;
          border: 1.5px solid #e5e7eb;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          height: 110px;
          cursor: pointer;
          transition: all 0.35s cubic-bezier(0.34,1.56,0.64,1);
          transform-style: preserve-3d;
          perspective: 800px;
          position: relative;
          overflow: hidden;
        }
        .cd-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(99,102,241,0.08), rgba(129,140,248,0.04));
          opacity: 0;
          transition: opacity 0.3s;
          border-radius: 16px;
        }
        .cd-card:hover::before { opacity: 1; }
        .cd-card:hover {
          transform: translateY(-8px) rotateX(6deg) scale(1.04);
          border-color: #6366f1;
          box-shadow: 0 20px 40px rgba(99,102,241,0.2), 0 0 0 1px rgba(99,102,241,0.15);
          animation: cd-pulseGlow 2s infinite;
        }
        .cd-card img {
          max-width: 100%; max-height: 70px;
          object-fit: contain;
          filter: grayscale(15%) opacity(0.9);
          transition: filter 0.3s;
        }
        .cd-card:hover img { filter: grayscale(0%) opacity(1); }
        .cd-card.cd-animate {
          animation: cd-floatIn 0.5s ease forwards;
          opacity: 0;
        }

        .cd-footer-badge {
          display: inline-block;
          background: linear-gradient(135deg, #4338ca, #6366f1);
          color: #fff;
          border-radius: 50px;
          padding: 8px 24px;
          font-size: 0.85rem;
          font-weight: 500;
          text-align: center;
        }
      `}</style>

      <div className="cd-scope" style={{ padding: "2rem 1rem", maxWidth: 1200, margin: "0 auto" }}>
        <PageHeader
          title="Campus Drive"
          description="Campus recruitment drives at SNBP ACS."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Placement & Career", href: "/placement/training-activities" },
            { label: "Campus Drive" },
          ]}
        />

        {/* Hero */}
        <div className="cd-hero" style={{ marginTop: "1.5rem" }}>
          <div style={{ textAlign: "center" }}>
            <span className="cd-badge">🎓 Placement Season Active</span>
            <h1 className="cd-hero-title">Industry Connections That Matter</h1>
            {/* <p className="cd-hero-sub">
              Top companies visit SNBP ACS every year to recruit the brightest talent.
              Campus drives run from <strong style={{ color: "#fff" }}>August to April</strong> across all departments.
            </p> */}
            {/* <button className="cd-shimmer-btn">Explore Opportunities →</button> */}
          </div>
          <hr style={{ borderColor: "rgba(255,255,255,0.12)", margin: "1.5rem 0" }} />
          <div className="cd-stats">
            {[
              { number: "30+", label: "Recruiters" },
              { number: "1000+", label: "Students Placed" },
              { number: "8", label: "Months Active" },
              { number: "6th", label: "Sem Eligible" },
            ].map((s) => (
              <div className="cd-stat" key={s.label}>
                <div className="cd-stat-num">{s.number}</div>
                <div className="cd-stat-lbl">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <hr className="cd-divider" />

        {/* Marquee */}
        <div className="cd-marquee-wrap" style={{ marginBottom: "0.5rem" }}>
          <div className="cd-marquee-track">
            {[...recruiterLogos, ...recruiterLogos].map((logo, idx) => (
              <div className="cd-marquee-logo" key={idx}>
                <img src={logo.src} alt={`Recruiter ${logo.id}`} />
              </div>
            ))}
          </div>
        </div>

        <hr className="cd-divider" />

        {/* Grid Title */}
        <div style={{ marginBottom: "2rem" }}>
          <div className="cd-section-title">Our Recruiters</div>
          <div className="cd-title-bar" />
          <p style={{ textAlign: "center", color: "#6b7280", fontSize: "0.88rem", marginTop: "0.5rem" }}>
            Hover over a logo to explore — {recruiterLogos.length} companies and counting
          </p>
        </div>

        {/* Logo Grid */}
        <div className="cd-grid" ref={gridRef}>
          {recruiterLogos.map((logo, index) => (
            <div
              key={logo.id}
              className={`cd-card${visible ? " cd-animate" : ""}`}
              style={{ animationDelay: `${index * 60}ms` }}
              onMouseEnter={() => setHoveredId(logo.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <img src={logo.src} alt={`Recruiter ${logo.id}`} />
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <span className="cd-footer-badge">
            🏆 All recruiters visit SNBP ACS — On Campus &amp; Off Campus
          </span>
        </div>
      </div>
    </Layout>
  );
};

export default CampusDrive;