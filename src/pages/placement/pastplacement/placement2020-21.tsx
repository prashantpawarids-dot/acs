import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const BASE_URL = import.meta.env.VITE_STATIC_ASSETS;

const students = [
  { sr: 1,  name: "Mr. Chauhan Amit Raisingh",      cls: "BCOM",     company: "Panacea BPO Service Pvt Ltd",                   post: "Customer Support" },
  { sr: 2,  name: "Mr. Bhandari Ajaykumar Baburao", cls: "BCOM",     company: "Panacea BPO Service Pvt Ltd",                   post: "Customer Support" },
  { sr: 3,  name: "Mr. Pawar Ashish Ajay",           cls: "BCOM",     company: "The-Connections ITES Business Service Pvt Ltd", post: "Trainee" },
  { sr: 4,  name: "Mr. Patwari Shahid Hayyum",       cls: "BCOM",     company: "Gallagher Service Centre LLP",                  post: "Operation Service Analyst" },
  { sr: 5,  name: "Mr. Naidu Nandini Rammurthi",     cls: "BCOM",     company: "Gallagher Service Centre LLP",                  post: "Operation Service Analyst" },
  { sr: 6,  name: "Mr. Bhalerao Trupti Vikram",      cls: "BBA",      company: "Megamind Systech Pvt. Ltd.",                    post: "Operation Service Analyst" },
  { sr: 7,  name: "Mr. Gaikwad Gaurav Pravin",       cls: "BA",       company: "Tech Mahindra Business Services",               post: "Trainee" },
  { sr: 8,  name: "Mr. Yasinsoheb Rajkhan Shaikh",   cls: "BA",       company: "Cultifit Healthcare Pvt. Ltd.",                 post: "Technician" },
  { sr: 9,  name: "Mr. Chawade Kaustubh Rajendra",   cls: "BBA(CA)",  company: "WNS Global Services Pvt. Ltd.",                 post: "Customer Service Operator" },
  { sr: 10, name: "Mr. Kabla Surjit Bharat",         cls: "BBA(CA)",  company: "D-Orbit Technologies",                          post: "Data Analyst" },
  { sr: 11, name: "Mr. Naidu Sudarshan Ramswami",    cls: "BBA(CA)",  company: "D-Orbit Technologies",                          post: "Data Analyst" },
  { sr: 12, name: "Ms. Sutar Shivani Balu",          cls: "BBA(CA)",  company: "e-Zest Solutions Ltd.",                         post: "—" },
  { sr: 13, name: "Ms. Yadav Anita Surajpal",        cls: "BBA(CA)",  company: "Gallagher Service Centre LLP",                  post: "Operation Service Analyst" },
  { sr: 14, name: "Mr. Rajput Rohit Bharat",         cls: "BBA(CA)",  company: "Techbharti",                                    post: "Process Executive" },
  { sr: 15, name: "Ms. Aware Santoshi Sitaram",      cls: "BSc(CS)",  company: "Integrity Verification Services",               post: "Sales Executive Manager" },
  { sr: 16, name: "Mr. Bhalerao Pradeep Sunil",      cls: "BSc(CS)",  company: "AMDOCS",                                        post: "Operation Service Analyst" },
  { sr: 17, name: "Mr. Choure Krishna Ankush",       cls: "BSc(CS)",  company: "e-Zest Solutions Ltd.",                         post: "Process Executive" },
  { sr: 18, name: "Mr. Dakhave Priyank Prashant",    cls: "BSc(CS)",  company: "D-Orbit Technologies",                          post: "Data Analyst" },
  { sr: 19, name: "Mr. Desai Shantanu Sachin",       cls: "BSc(CS)",  company: "Bajaj Finance",                                 post: "Sales Executive Manager" },
  { sr: 20, name: "Mr. Kore Akash Rajkumar",         cls: "BSc(CS)",  company: "D-Orbit Technologies",                          post: "Data Analyst" },
  { sr: 21, name: "Ms. Mohite Vanita Mahadev",       cls: "BSc(CS)",  company: "D-Orbit Technologies",                          post: "Data Analyst" },
  { sr: 22, name: "Ms. Pardeshi Urmila Manoj",       cls: "BSc(CS)",  company: "D-Orbit Technologies",                          post: "Data Analyst" },
  { sr: 23, name: "Mr. Sejal Anand Dhanawade",       cls: "BCOM",     company: "Kotak Mahindra Bank Ltd",                       post: "Business Executive" },
  { sr: 24, name: "Mr. Londhe Pramod Manoj",         cls: "BCOM",     company: "Megamind Systech Pvt. Ltd.",                    post: "Business Executive" },
  { sr: 25, name: "Ms. Mahi Gupta",                  cls: "BCOM",     company: "Coforge Business Process Solution Pvt Ltd",     post: "Data Analyst" },
  { sr: 26, name: "Mr. Nilesh Rajesh Kanojia",       cls: "BCOM",     company: "Concentric Process Microsoft",                  post: "Operation Service Analyst" },
  { sr: 27, name: "Ms. Akshata Ankush Jadhav",       cls: "BCOM",     company: "DBS Mintek Pvt Ltd",                            post: "Customer Support Executive" },
  { sr: 28, name: "Mr. Sharma Ankitkumar Mahipal",   cls: "BCOM",     company: "Bajaj Finance",                                 post: "Customer Support Executive" },
  { sr: 29, name: "Mr. Bansal Rahul Hariom",         cls: "BCOM",     company: "The-Connections ITES Business Service Pvt Ltd", post: "Trainee" },
  { sr: 30, name: "Mr. Gupta Aman Sunil",            cls: "BCOM",     company: "Gallagher Service Centre LLP",                  post: "Operation Service Analyst" },
  { sr: 31, name: "Mr. Walmiki Aniket Sunil",        cls: "BCOM",     company: "DBS Mintek Pvt Ltd",                            post: "Customer Support Executive" },
  { sr: 32, name: "Mr. Kate Yash Uttam",             cls: "BBA",      company: "VSYN Organization",                             post: "Business Executive" },
  { sr: 33, name: "Mr. Kushwaha Pradeep Ramayodhya", cls: "BBA",      company: "Pune Metro",                                    post: "Operation Service Analyst" },
  { sr: 34, name: "Mr. Viegas Cheryll Alistair",     cls: "BBA",      company: "Gallagher Service Centre LLP",                  post: "Operation Service Analyst" },
  { sr: 35, name: "Ms. Bharmal Vaishnavi Mohan",     cls: "BBA",      company: "Kotak Mahindra",                                post: "Business Executive" },
  { sr: 36, name: "Ms. Borhade Vaishnavi Rajendra",  cls: "BBA",      company: "GHO Logistics",                                 post: "Supply Chain Analyst" },
  { sr: 37, name: "Mr. Rajput Abhishek Girish",      cls: "BBA",      company: "Gallagher Service Centre LLP",                  post: "Operation Service Analyst" },
];

const clsVariant: Record<string, "default" | "secondary" | "outline" | "destructive"> = {
  "BCOM":    "default",
  "BBA":     "secondary",
  "BA":      "outline",
  "BBA(CA)": "destructive",
  "BSc(CS)": "secondary",
};

const clsColors: Record<string, string> = {
  "BCOM":    "#4f46e5",
  "BBA":     "#0891b2",
  "BA":      "#059669",
  "BBA(CA)": "#d97706",
  "BSc(CS)": "#7c3aed",
};

const summary = [
  { label: "Total Recruited",  value: 37,  icon: "🎓" },
  { label: "BCOM",             value: students.filter(s => s.cls === "BCOM").length,    icon: "📊" },
  { label: "BBA / BBA(CA)",    value: students.filter(s => s.cls.startsWith("BBA")).length, icon: "💼" },
  { label: "BA / BSc(CS)",     value: students.filter(s => s.cls === "BA" || s.cls === "BSc(CS)").length, icon: "🔬" },
];

const recruiterLogos = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  src: `${BASE_URL}/images/requiter/${i + 1}.png`,
}));

const Placement1 = () => {
  return (
    <Layout>
      <style>{`
        @keyframes p1-fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes p1-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes p1-shimmer {
          0%   { background-position: -400px 0; }
          100% { background-position:  400px 0; }
        }

        .p1-hero {
          background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 45%, #312e81 100%);
          border-radius: 20px;
          padding: 2.5rem 2rem;
          position: relative;
          overflow: hidden;
          margin-top: 1.5rem;
        }
        .p1-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 70% 30%, rgba(99,102,241,0.25) 0%, transparent 65%);
          pointer-events: none;
        }
        .p1-hero::after {
          content: '';
          position: absolute;
          bottom: -40px; right: -40px;
          width: 200px; height: 200px;
          border-radius: 50%;
          background: rgba(99,102,241,0.12);
          pointer-events: none;
        }
        .p1-year-chip {
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
        .p1-hero-title {
          font-size: clamp(1.4rem, 3vw, 2.2rem);
          font-weight: 800;
          color: #fff;
          margin: 0 0 0.5rem;
          line-height: 1.2;
        }
        .p1-hero-sub {
          color: #c7d2fe;
          font-size: 0.9rem;
          line-height: 1.7;
          max-width: 600px;
        }
        .p1-stat-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          margin-top: 2rem;
        }
        @media (max-width: 640px) { .p1-stat-grid { grid-template-columns: repeat(2, 1fr); } }
        .p1-stat {
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 14px;
          padding: 1rem;
          text-align: center;
          backdrop-filter: blur(10px);
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .p1-stat:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 30px rgba(99,102,241,0.3);
        }
        .p1-stat-icon { font-size: 1.4rem; margin-bottom: 4px; }
        .p1-stat-num {
          font-size: 2rem;
          font-weight: 800;
          background: linear-gradient(90deg, #fff, #a5b4fc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .p1-stat-lbl { color: #c7d2fe; font-size: 0.72rem; letter-spacing: 1px; text-transform: uppercase; margin-top: 2px; }

        .p1-section-head {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 1.5rem;
          gap: 4px;
        }
        .p1-section-title {
          font-size: 1.25rem;
          font-weight: 700;
          background: linear-gradient(135deg, #4338ca, #6366f1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .p1-title-bar {
          width: 50px; height: 3px;
          background: linear-gradient(90deg, #6366f1, #818cf8);
          border-radius: 4px;
        }

        .p1-table-wrap {
          border-radius: 16px;
          border: 1px solid #e5e7eb;
          overflow: hidden;
          box-shadow: 0 4px 24px rgba(99,102,241,0.08);
        }
        .p1-table { width: 100%; border-collapse: collapse; font-size: 0.85rem; min-width: 620px; }
        .p1-table thead tr {
          background: linear-gradient(135deg, #4338ca, #6366f1);
          color: #fff;
        }
        .p1-table thead th { padding: 13px 14px; text-align: left; font-weight: 600; letter-spacing: 0.3px; white-space: nowrap; }
        .p1-table tbody tr { border-bottom: 1px solid #f3f4f6; transition: background 0.18s; }
        .p1-table tbody tr:last-child { border-bottom: none; }
        .p1-table tbody tr:hover { background: #f5f3ff !important; }
        .p1-table tbody td { padding: 11px 14px; vertical-align: middle; }
        .p1-sr { font-weight: 700; color: #6366f1; text-align: center; }
        .p1-name { font-weight: 600; color: #111827; }
        .p1-company { color: #374151; }
        .p1-post { color: #6b7280; white-space: nowrap; }
        .p1-cls-pill {
          display: inline-block;
          padding: 2px 10px;
          border-radius: 50px;
          font-size: 0.72rem;
          font-weight: 700;
          color: #fff;
          white-space: nowrap;
        }

        .p1-divider {
          border: none;
          height: 1px;
          background: linear-gradient(90deg, transparent, #6366f1, transparent);
          margin: 2.5rem 0;
        }

        .p1-marquee-wrap { overflow: hidden; border-radius: 14px; }
        .p1-marquee-track {
          display: flex;
          gap: 1.5rem;
          animation: p1-marquee 30s linear infinite;
          width: max-content;
        }
        .p1-marquee-track:hover { animation-play-state: paused; }
        .p1-marquee-logo {
          background: #fff;
          border-radius: 12px;
          border: 1px solid #e5e7eb;
          padding: 0.5rem 0.8rem;
          height: 70px; width: 130px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
          transition: transform 0.3s;
        }
        .p1-marquee-logo:hover { transform: scale(1.08); }
        .p1-marquee-logo img { max-width: 100%; max-height: 48px; object-fit: contain; }

        .p1-animate { animation: p1-fadeUp 0.6s ease both; }
      `}</style>

      <div className="container mx-auto py-8 px-4">
        <PageHeader
          title="Past Placements 2020–21"
          description="Placement records for the academic year 2020–21."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Placement & Career", href: "/placement/training-activities" },
            { label: "2020–21" },
          ]}
        />

        {/* Hero Banner */}
        <div className="p1-hero">
          <div className="p1-year-chip">Academic Year 2020 – 21</div>
          <h1 className="p1-hero-title">Placement Report 2020–21</h1>
          <p className="p1-hero-sub">
            SE Society's SNBP College of Arts Commerce Science &amp; Management Studies, Morwadi–Pimpri, Pune.
            The Training &amp; Placement Cell actively implemented various online programmes to support students
            for placement after graduation. Pre-placement modules were introduced and students were given
            personal attention to prepare them as per market and industry requirements.
          </p>

          {/* Stats */}
          <div className="p1-stat-grid">
            {summary.map((s) => (
              <div className="p1-stat" key={s.label}>
                <div className="p1-stat-icon">{s.icon}</div>
                <div className="p1-stat-num">{s.value}</div>
                <div className="p1-stat-lbl">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <hr className="p1-divider" />

        {/* Table */}
        <div className="p1-animate" style={{ animationDelay: "0.1s" }}>
          <div className="p1-section-head">
            <div className="p1-section-title">Placed Students — 2020–21</div>
            <div className="p1-title-bar" />
            <span style={{ fontSize: "0.82rem", color: "#6b7280", marginTop: 4 }}>
              Total {students.length} students successfully recruited in reputed industries
            </span>
          </div>

          <div className="overflow-x-auto p1-table-wrap">
            <table className="p1-table">
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
                    <td className="p1-sr">{s.sr}</td>
                    <td className="p1-name">{s.name}</td>
                    <td>
                      <span className="p1-cls-pill" style={{ background: clsColors[s.cls] ?? "#6366f1" }}>
                        {s.cls}
                      </span>
                    </td>
                    <td className="p1-company">{s.company}</td>
                    <td className="p1-post">{s.post}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <hr className="p1-divider" />

        {/* Recruiters Marquee */}
        <div className="p1-animate" style={{ animationDelay: "0.2s", marginBottom: "1rem" }}>
          <div className="p1-section-head">
            <div className="p1-section-title">Recruiters of SNBPACS Students</div>
            <div className="p1-title-bar" />
            <span style={{ fontSize: "0.82rem", color: "#6b7280", marginTop: 4 }}>On Campus &amp; Off Campus</span>
          </div>
          <div className="p1-marquee-wrap">
            <div className="p1-marquee-track">
              {[...recruiterLogos, ...recruiterLogos].map((logo, idx) => (
                <div className="p1-marquee-logo" key={idx}>
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

export default Placement1;