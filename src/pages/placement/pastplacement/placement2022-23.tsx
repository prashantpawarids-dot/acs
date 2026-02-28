import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";

const BASE_URL = import.meta.env.VITE_STATIC_ASSETS;

const students = [
  { sr: 1,  name: "Siddhi Shinde",              cls: "BBA(CA)",  company: "Panacea BPO Service Pvt Ltd",     post: "Customer Care Executive" },
  { sr: 2,  name: "Patel Chetan Prabhulal",      cls: "BBA(CA)",  company: "Panacea BPO Service Pvt Ltd",     post: "Customer Care Executive" },
  { sr: 3,  name: "Akshada Bhapkar",             cls: "BBA(CA)",  company: "Panacea BPO Service Pvt Ltd",     post: "Customer Care Executive" },
  { sr: 4,  name: "Hussain Sadia",               cls: "BBA(CA)",  company: "Panacea BPO Service Pvt Ltd",     post: "Customer Care Executive" },
  { sr: 5,  name: "Varma Rohit Rajkumar",        cls: "BBA(CA)",  company: "Panacea BPO Service Pvt Ltd",     post: "Customer Care Executive" },
  { sr: 6,  name: "Shinde Mansi Sunil",          cls: "BBA(CA)",  company: "Locohelp Pvt. Ltd.",              post: "Sales Executive" },
  { sr: 7,  name: "Parajakta Hingade",           cls: "BBA(CA)",  company: "Finaleap Pvt. Ltd.",              post: "Manager Quality Assurance" },
  { sr: 8,  name: "Anish Rajendra Singh",        cls: "BBA(CA)",  company: "Finaleap Pvt. Ltd.",              post: "Manager Quality Assurance" },
  { sr: 9,  name: "Madane Rushikesh Dasharth",   cls: "BBA(CA)",  company: "Finaleap Pvt. Ltd.",              post: "Manager Quality Assurance" },
  { sr: 10, name: "Gaurav Deshmukh",             cls: "BBA(CA)",  company: "Finaleap Pvt. Ltd.",              post: "Manager Quality Assurance" },
  { sr: 11, name: "Jagtap Ketan Dadasaheb",      cls: "BBA(CA)",  company: "Finaleap Pvt. Ltd.",              post: "Manager Quality Assurance" },
  { sr: 12, name: "Pradeep Gowda",               cls: "BSc(CS)",  company: "Script Analytica",                post: "Business Intelligence Associate" },
  { sr: 13, name: "Tushar Rithe",                cls: "BA",       company: "SNBP International School",       post: "Music Teacher" },
  { sr: 14, name: "Abhishek Bhairgond",          cls: "BSc(CS)",  company: "Pimpri Chinchwad Smart City Ltd.", post: "Associate" },
  { sr: 15, name: "Monu Pardeshi",               cls: "BSc(CS)",  company: "Collab Solution Pvt. Ltd.",       post: "Associate" },
];

const clsColors: Record<string, string> = {
  "BCOM":    "#4f46e5",
  "BBA":     "#0891b2",
  "BA":      "#059669",
  "BBA(CA)": "#d97706",
  "BSc(CS)": "#7c3aed",
  "BSc(R)":  "#db2777",
};

const summary = [
  { label: "Total Recruited", value: 15,                                                                     icon: "🎓" },
  { label: "BBA(CA)",         value: students.filter(s => s.cls === "BBA(CA)").length,                       icon: "💼" },
  { label: "BSc(CS)",         value: students.filter(s => s.cls === "BSc(CS)").length,                       icon: "🔬" },
  { label: "BA",              value: students.filter(s => s.cls === "BA").length,                            icon: "📚" },
];

const recruiterLogos = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  src: `${BASE_URL}/images/requiter/${i + 1}.png`,
}));

const Placement3 = () => {
  return (
    <Layout>
      <style>{`
        @keyframes p3-fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes p3-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .p3-hero {
          background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 45%, #312e81 100%);
          border-radius: 20px;
          padding: 2.5rem 2rem;
          position: relative;
          overflow: hidden;
          margin-top: 1.5rem;
        }
        .p3-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 70% 30%, rgba(99,102,241,0.25) 0%, transparent 65%);
          pointer-events: none;
        }
        .p3-hero::after {
          content: '';
          position: absolute;
          bottom: -40px; right: -40px;
          width: 200px; height: 200px;
          border-radius: 50%;
          background: rgba(99,102,241,0.12);
          pointer-events: none;
        }
        .p3-year-chip {
          display: inline-block;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 50px;
          padding: 4px 16px;
          font-size: 0.75rem;
          color: #a5b4fc;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 0.75rem;
        }
        .p3-hero-title { font-size: clamp(1.4rem, 3vw, 2.2rem); font-weight: 800; color: #fff; margin: 0 0 0.5rem; line-height: 1.2; }
        .p3-hero-sub { color: #c7d2fe; font-size: 0.9rem; line-height: 1.7; max-width: 600px; }
        .p3-stat-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-top: 2rem; }
        @media (max-width: 640px) { .p3-stat-grid { grid-template-columns: repeat(2, 1fr); } }
        .p3-stat {
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 14px;
          padding: 1rem;
          text-align: center;
          backdrop-filter: blur(10px);
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .p3-stat:hover { transform: translateY(-4px); box-shadow: 0 10px 30px rgba(99,102,241,0.3); }
        .p3-stat-icon { font-size: 1.4rem; margin-bottom: 4px; }
        .p3-stat-num { font-size: 2rem; font-weight: 800; background: linear-gradient(90deg, #fff, #a5b4fc); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .p3-stat-lbl { color: #c7d2fe; font-size: 0.72rem; letter-spacing: 1px; text-transform: uppercase; margin-top: 2px; }
        .p3-section-head { display: flex; flex-direction: column; align-items: center; margin-bottom: 1.5rem; gap: 4px; }
        .p3-section-title { font-size: 1.25rem; font-weight: 700; background: linear-gradient(135deg, #4338ca, #6366f1); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .p3-title-bar { width: 50px; height: 3px; background: linear-gradient(90deg, #6366f1, #818cf8); border-radius: 4px; }
        .p3-table-wrap { border-radius: 16px; border: 1px solid #e5e7eb; overflow: hidden; box-shadow: 0 4px 24px rgba(99,102,241,0.08); }
        .p3-table { width: 100%; border-collapse: collapse; font-size: 0.85rem; min-width: 620px; }
        .p3-table thead tr { background: linear-gradient(135deg, #4338ca, #6366f1); color: #fff; }
        .p3-table thead th { padding: 13px 14px; text-align: left; font-weight: 600; letter-spacing: 0.3px; white-space: nowrap; }
        .p3-table tbody tr { border-bottom: 1px solid #f3f4f6; transition: background 0.18s; }
        .p3-table tbody tr:last-child { border-bottom: none; }
        .p3-table tbody tr:hover { background: #f5f3ff !important; }
        .p3-table tbody td { padding: 11px 14px; vertical-align: middle; }
        .p3-sr { font-weight: 700; color: #6366f1; text-align: center; }
        .p3-name { font-weight: 600; color: #111827; }
        .p3-company { color: #374151; }
        .p3-post { color: #6b7280; white-space: nowrap; }
        .p3-cls-pill { display: inline-block; padding: 2px 10px; border-radius: 50px; font-size: 0.72rem; font-weight: 700; color: #fff; white-space: nowrap; }
        .p3-divider { border: none; height: 1px; background: linear-gradient(90deg, transparent, #6366f1, transparent); margin: 2.5rem 0; }
        .p3-marquee-wrap { overflow: hidden; border-radius: 14px; }
        .p3-marquee-track { display: flex; gap: 1.5rem; animation: p3-marquee 30s linear infinite; width: max-content; }
        .p3-marquee-track:hover { animation-play-state: paused; }
        .p3-marquee-logo { background: #fff; border-radius: 12px; border: 1px solid #e5e7eb; padding: 0.5rem 0.8rem; height: 70px; width: 130px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; box-shadow: 0 2px 8px rgba(0,0,0,0.05); transition: transform 0.3s; }
        .p3-marquee-logo:hover { transform: scale(1.08); }
        .p3-marquee-logo img { max-width: 100%; max-height: 48px; object-fit: contain; }
        .p3-animate { animation: p3-fadeUp 0.6s ease both; }
      `}</style>

      <div className="container mx-auto py-8 px-4">
        <PageHeader
          title="Past Placements 2022–23"
          description="Placement records for the academic year 2022–23."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Placement & Career", href: "/placement/training-activities" },
            { label: "2022–23" },
          ]}
        />

        {/* Hero */}
        <div className="p3-hero">
          <div className="p3-year-chip">Academic Year 2022 – 23</div>
          <h1 className="p3-hero-title">Placement Report 2022–23</h1>
          <p className="p3-hero-sub">
            SE Society's SNBP College of Arts Commerce Science &amp; Management Studies, Morwadi–Pimpri, Pune.
            The Training &amp; Placement Cell is committed to bridging the gap between academics and industry.
            The placement season 2022–23 witnessed notable participation from reputed companies across diverse
            sectors, reflecting the growing reputation of the college and the competency of its students.
          </p>
          <div className="p3-stat-grid">
            {summary.map((s) => (
              <div className="p3-stat" key={s.label}>
                <div className="p3-stat-icon">{s.icon}</div>
                <div className="p3-stat-num">{s.value}</div>
                <div className="p3-stat-lbl">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <hr className="p3-divider" />

        {/* Table */}
        <div className="p3-animate" style={{ animationDelay: "0.1s" }}>
          <div className="p3-section-head">
            <div className="p3-section-title">Placed Students — 2022–23</div>
            <div className="p3-title-bar" />
            <span style={{ fontSize: "0.82rem", color: "#6b7280", marginTop: 4 }}>
              Total {students.length} students successfully recruited in reputed industries
            </span>
          </div>
          <div className="overflow-x-auto p3-table-wrap">
            <table className="p3-table">
              <thead>
                <tr>
                  <th>Sr. No.</th>
                  <th>Name of Student</th>
                  <th>Class</th>
                  <th>Name of Company</th>
                  <th>Post</th>
                </tr>
              </thead>
              <tbody>
                {students.map((s, idx) => (
                  <tr key={s.sr} style={{ background: idx % 2 === 0 ? "#fff" : "#fafafa" }}>
                    <td className="p3-sr">{s.sr}</td>
                    <td className="p3-name">{s.name}</td>
                    <td>
                      <span className="p3-cls-pill" style={{ background: clsColors[s.cls] ?? "#6366f1" }}>
                        {s.cls}
                      </span>
                    </td>
                    <td className="p3-company">{s.company}</td>
                    <td className="p3-post">{s.post}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <hr className="p3-divider" />

        {/* Recruiters Marquee */}
        <div className="p3-animate" style={{ animationDelay: "0.2s", marginBottom: "1rem" }}>
          <div className="p3-section-head">
            <div className="p3-section-title">Recruiters of SNBPACS Students</div>
            <div className="p3-title-bar" />
            <span style={{ fontSize: "0.82rem", color: "#6b7280", marginTop: 4 }}>On Campus &amp; Off Campus</span>
          </div>
          <div className="p3-marquee-wrap">
            <div className="p3-marquee-track">
              {[...recruiterLogos, ...recruiterLogos].map((logo, idx) => (
                <div className="p3-marquee-logo" key={idx}>
                  <img src={logo.src} alt={`Recruiter ${logo.id}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Placement3;