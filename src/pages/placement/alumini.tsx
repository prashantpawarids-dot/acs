import React from "react";
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";

const BASE_URL = import.meta.env.VITE_STATIC_ASSETS;

/* ─── Data ───────────────────────────────────────────────── */

const objectives = [
  "To strengthen the bond between alumni and the college by creating a supportive and engaged community.",
  "To develop a platform for alumni to contribute to academic growth, student development, and institutional progress.",
  "To maintain a lifelong relationship with former students and encourage their participation in college activities.",
  "To promote networking among alumni for professional growth, collaborations, and career advancement.",
  "To involve alumni in mentorship, internships, placements, and knowledge-sharing initiatives for current students.",
  "To recognize and celebrate achievements of alumni and motivate them to contribute back to society and the institution.",
  "To support the strategic vision of the college by encouraging alumni participation in development programs.",
];

const functions_ = [
  "Maintaining an updated alumni database with contact details, achievements, and career information.",
  "Organizing alumni meets, reunions, networking events, guest lectures, and interactive sessions.",
  "Facilitating communication through newsletters, social media, and email updates.",
  "Coordinating alumni involvement in placement drives, internship opportunities, and industry interactions.",
  "Engaging notable alumni as resource persons for workshops, seminars, and motivational talks.",
  "Promoting alumni contributions such as scholarships, departmental support, and community service activities.",
  "Collecting feedback from alumni to improve academic quality and institutional initiatives.",
  "Collaborating with IQAC to showcase alumni participation during accreditation processes.",
  "Managing the Alumni Association registration, membership drives, and related administrative work.",
];

const committee = [
  { sr: 1, name: "Adv. Rutuja Dasharath Bhosale", designation: "President",  representative: "Management Nominee" },
  { sr: 2, name: "Mr. Santosh Ramdas Chaudhary",  designation: "Secretary",  representative: "Alumni" },
  { sr: 3, name: "Mr. Ravindra Balasaheb Chavan",  designation: "Treasurer",  representative: "Account Section" },
  { sr: 4, name: "Mr. Vishal Shivkumar Rajbhar",   designation: "Member",     representative: "Current Student" },
  { sr: 5, name: "Mr. Pradeep Kantaraj Gowda",     designation: "Member",     representative: "Alumni" },
  { sr: 6, name: "Mr. Jayesh Vijay Jadhav",         designation: "Member",     representative: "Alumni" },
  { sr: 7, name: "Mr. Suhas Kailas Kadam",          designation: "Member",     representative: "Alumni" },
  { sr: 8, name: "Ms. Kavita Pratap More",          designation: "Member",     representative: "Alumni" },
  { sr: 9, name: "Mr. Danish Sohail Sayyed",        designation: "Member",     representative: "Faculty Member" },
];

const designationColors: Record<string, { bg: string; text: string }> = {
  President:  { bg: "#fef3c7", text: "#92400e" },
  Secretary:  { bg: "#dbeafe", text: "#1e40af" },
  Treasurer:  { bg: "#dcfce7", text: "#166534" },
  Member:     { bg: "#f3f4f6", text: "#374151" },
};

const repColors: Record<string, { bg: string; text: string }> = {
  "Management Nominee": { bg: "#ede9fe", text: "#5b21b6" },
  "Alumni":             { bg: "#fce7f3", text: "#9d174d" },
  "Account Section":    { bg: "#ecfdf5", text: "#064e3b" },
  "Current Student":    { bg: "#fff7ed", text: "#7c2d12" },
  "Faculty Member":     { bg: "#eff6ff", text: "#1e3a5f" },
};

const reports = [
  {
    year: "2024–25",
    label: "Alumni Meet Report 2024–25",
    path: `${BASE_URL}/PDF/placement/AlumniMeetReport24-25.pdf`,
    icon: "📄",
    accent: "#4f46e5",
  },
  {
    year: "2023–24",
    label: "Alumni Meet Report 2023–24",
    path: `${BASE_URL}/PDF/placement/AlumniMeetReport23-24.pdf`,
    icon: "📄",
    accent: "#0891b2",
  },
];

/* ─── Component ──────────────────────────────────────────── */

export default function Alumni() {
  return (
    <Layout>
      <style>{`
        @keyframes al-fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .al-page { font-family: 'Georgia', serif; }

        /* Hero */
        .al-hero {
          background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0c4a6e 100%);
          border-radius: 20px;
          padding: 2.5rem 2rem 2rem;
          margin-top: 1.5rem;
          position: relative;
          overflow: hidden;
        }
        .al-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 75% 20%, rgba(14,165,233,0.2) 0%, transparent 60%);
          pointer-events: none;
        }
        .al-hero::after {
          content: '';
          position: absolute;
          bottom: -50px; right: -50px;
          width: 220px; height: 220px;
          border-radius: 50%;
          background: rgba(14,165,233,0.08);
          pointer-events: none;
        }
        .al-chip {
          display: inline-block;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 50px;
          padding: 4px 16px;
          font-size: 0.72rem;
          color: #7dd3fc;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          font-family: 'Arial', sans-serif;
          margin-bottom: 0.75rem;
        }
        .al-hero-title {
          font-size: clamp(1.6rem, 3.5vw, 2.6rem);
          font-weight: 700;
          color: #fff;
          margin: 0 0 0.6rem;
          line-height: 1.2;
          font-family: 'Georgia', serif;
        }
        .al-hero-title span { color: #7dd3fc; }
        .al-hero-sub {
          color: #bae6fd;
          font-size: 0.92rem;
          line-height: 1.75;
          max-width: 680px;
          font-family: 'Arial', sans-serif;
        }
        .al-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 1.25rem;
          background: rgba(14,165,233,0.18);
          border: 1px solid rgba(14,165,233,0.35);
          border-radius: 8px;
          padding: 6px 14px;
          font-size: 0.8rem;
          color: #7dd3fc;
          font-family: 'Arial', sans-serif;
        }

        /* Divider */
        .al-divider {
          border: none;
          height: 1px;
          background: linear-gradient(90deg, transparent, #0ea5e9, transparent);
          margin: 2.5rem 0;
        }

        /* Section header */
        .al-sec-head { display: flex; flex-direction: column; align-items: center; gap: 6px; margin-bottom: 1.75rem; }
        .al-sec-title {
          font-size: 1.3rem;
          font-weight: 700;
          background: linear-gradient(135deg, #0369a1, #0ea5e9);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-family: 'Georgia', serif;
        }
        .al-sec-bar { width: 48px; height: 3px; background: linear-gradient(90deg, #0ea5e9, #38bdf8); border-radius: 4px; }
        .al-sec-sub { font-size: 0.82rem; color: #6b7280; font-family: 'Arial', sans-serif; }

        /* Two-column grid for objectives/functions */
        .al-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
        @media (max-width: 768px) { .al-two-col { grid-template-columns: 1fr; } }
        .al-card {
          background: #fff;
          border: 1px solid #e0f2fe;
          border-radius: 16px;
          padding: 1.5rem;
          box-shadow: 0 2px 12px rgba(14,165,233,0.07);
        }
        .al-card-title {
          font-size: 1rem;
          font-weight: 700;
          color: #0c4a6e;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: 'Georgia', serif;
        }
        .al-card-title-icon {
          width: 30px; height: 30px;
          background: linear-gradient(135deg, #0369a1, #0ea5e9);
          border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          font-size: 0.9rem; flex-shrink: 0;
        }
        .al-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px; }
        .al-list li {
          display: flex; align-items: flex-start; gap: 10px;
          font-size: 0.84rem; color: #374151; line-height: 1.6;
          font-family: 'Arial', sans-serif;
        }
        .al-list-dot {
          width: 20px; height: 20px; flex-shrink: 0;
          background: linear-gradient(135deg, #0ea5e9, #38bdf8);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          margin-top: 2px;
        }
        .al-list-dot svg { width: 10px; height: 10px; fill: #fff; }

        /* Committee table */
        .al-table-wrap {
          border-radius: 16px;
          border: 1px solid #e0f2fe;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(14,165,233,0.08);
        }
        .al-table { width: 100%; border-collapse: collapse; font-size: 0.85rem; min-width: 560px; font-family: 'Arial', sans-serif; }
        .al-table thead tr { background: linear-gradient(135deg, #0369a1, #0ea5e9); color: #fff; }
        .al-table thead th { padding: 13px 15px; text-align: left; font-weight: 600; letter-spacing: 0.3px; white-space: nowrap; }
        .al-table tbody tr { border-bottom: 1px solid #f0f9ff; transition: background 0.15s; }
        .al-table tbody tr:last-child { border-bottom: none; }
        .al-table tbody tr:hover { background: #f0f9ff !important; }
        .al-table tbody td { padding: 12px 15px; vertical-align: middle; }
        .al-sr { font-weight: 700; color: #0ea5e9; text-align: center; }
        .al-name { font-weight: 600; color: #0c4a6e; }
        .al-pill {
          display: inline-block;
          padding: 3px 11px;
          border-radius: 50px;
          font-size: 0.72rem;
          font-weight: 700;
          white-space: nowrap;
        }

        /* PDF cards */
        .al-pdf-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.25rem; }
        @media (max-width: 560px) { .al-pdf-grid { grid-template-columns: 1fr; } }
        .al-pdf-card {
          display: flex; align-items: center; gap: 1rem;
          background: #fff;
          border-radius: 14px;
          border: 1px solid #e0f2fe;
          padding: 1.1rem 1.25rem;
          box-shadow: 0 2px 10px rgba(14,165,233,0.07);
          text-decoration: none;
          transition: transform 0.25s, box-shadow 0.25s;
        }
        .al-pdf-card:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(14,165,233,0.18); }
        .al-pdf-icon {
          width: 48px; height: 48px; flex-shrink: 0;
          border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.4rem;
        }
        .al-pdf-meta { flex: 1; min-width: 0; }
        .al-pdf-year { font-size: 0.7rem; color: #6b7280; letter-spacing: 1px; text-transform: uppercase; font-family: 'Arial', sans-serif; }
        .al-pdf-name { font-size: 0.9rem; font-weight: 700; color: #0c4a6e; margin: 2px 0 0; font-family: 'Georgia', serif; }
        .al-pdf-action {
          display: inline-flex; align-items: center; gap: 4px;
          font-size: 0.75rem; font-weight: 600; padding: 4px 12px;
          border-radius: 6px; border: none; cursor: pointer;
          font-family: 'Arial', sans-serif;
          text-decoration: none;
        }

        /* Animate */
        .al-animate { animation: al-fadeUp 0.6s ease both; }
      `}</style>

      <div className="al-page container mx-auto py-8 px-4">
        <PageHeader
          title="Alumni Cell"
          description="Connecting graduates with their alma mater — fostering community, growth, and lifelong bonds."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Alumni Cell" },
          ]}
        />

        {/* ── Hero ─────────────────────────────────────── */}
        <div className="al-hero al-animate" style={{ animationDelay: "0s" }}>
          <div className="al-chip">Est. 2022 – 23</div>
          <h1 className="al-hero-title">
            SNBP College <span>Alumni Cell</span>
          </h1>
          <p className="al-hero-sub">
            SNBP College of Arts, Commerce, Science &amp; Management Studies, Morwadi, proudly established
            its Alumni Association in the academic year 2022–23. This dynamic platform connects the institution
            with its graduates, creating a bridge between past and present — fostering lifelong relationships
            and supporting the holistic development of students.
          </p>
          <div className="al-hero-badge">
            <span>🎓</span>
            <span>Alumni Association established in 2022–23 | Active community of graduates</span>
          </div>
        </div>

        <hr className="al-divider" />

        {/* ── Objectives & Functions ───────────────────── */}
        <div className="al-animate" style={{ animationDelay: "0.1s" }}>
          <div className="al-sec-head">
            <div className="al-sec-title">Purpose &amp; Functions</div>
            <div className="al-sec-bar" />
            <div className="al-sec-sub">What the Alumni Cell aims to achieve and how it operates</div>
          </div>

          <div className="al-two-col">
            {/* Objectives */}
            <div className="al-card">
              <div className="al-card-title">
                <div className="al-card-title-icon">🎯</div>
                Objectives of the Alumni Cell
              </div>
              <ul className="al-list">
                {objectives.map((obj, i) => (
                  <li key={i}>
                    <div className="al-list-dot">
                      <svg viewBox="0 0 10 10"><polyline points="2,5 4.5,7.5 8,3" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Functions */}
            <div className="al-card">
              <div className="al-card-title">
                <div className="al-card-title-icon">⚙️</div>
                Functions of the Alumni Cell
              </div>
              <ul className="al-list">
                {functions_.map((fn, i) => (
                  <li key={i}>
                    <div className="al-list-dot">
                      <svg viewBox="0 0 10 10"><polyline points="2,5 4.5,7.5 8,3" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <span>{fn}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <hr className="al-divider" />

        {/* ── Alumni Association Committee ─────────────── */}
        <div className="al-animate" style={{ animationDelay: "0.15s" }}>
          <div className="al-sec-head">
            <div className="al-sec-title">Alumni Association Committee</div>
            <div className="al-sec-bar" />
            <div className="al-sec-sub">Governing body of the SNBP College Alumni Association</div>
          </div>

          <div className="overflow-x-auto al-table-wrap">
            <table className="al-table">
              <thead>
                <tr>
                  <th style={{ width: 56 }}>Sr. No.</th>
                  <th>Name</th>
                  <th>Designation</th>
                  <th>Representative</th>
                </tr>
              </thead>
              <tbody>
                {committee.map((m, idx) => {
                  const dc = designationColors[m.designation] ?? designationColors["Member"];
                  const rc = repColors[m.representative] ?? repColors["Alumni"];
                  return (
                    <tr key={m.sr} style={{ background: idx % 2 === 0 ? "#fff" : "#f9feff" }}>
                      <td className="al-sr">{m.sr}</td>
                      <td className="al-name">{m.name}</td>
                      <td>
                        <span className="al-pill" style={{ background: dc.bg, color: dc.text }}>
                          {m.designation}
                        </span>
                      </td>
                      <td>
                        <span className="al-pill" style={{ background: rc.bg, color: rc.text }}>
                          {m.representative}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <hr className="al-divider" />

        {/* ── Alumni Meet Reports ──────────────────────── */}
        <div className="al-animate" style={{ animationDelay: "0.2s" }}>
          <div className="al-sec-head">
            <div className="al-sec-title">Alumni Meet Reports</div>
            <div className="al-sec-bar" />
            <div className="al-sec-sub">Download official reports from our Alumni Meet events</div>
          </div>

          <div className="al-pdf-grid">
            {reports.map((r) => (
              <a
                key={r.year}
                href={r.path}
                target="_blank"
                rel="noopener noreferrer"
                className="al-pdf-card"
              >
                <div
                  className="al-pdf-icon"
                  style={{ background: `${r.accent}18`, border: `1px solid ${r.accent}30` }}
                >
                  {r.icon}
                </div>
                <div className="al-pdf-meta">
                  <div className="al-pdf-year">Academic Year {r.year}</div>
                  <div className="al-pdf-name">{r.label}</div>
                </div>
                <span
                  className="al-pdf-action"
                  style={{ background: `${r.accent}15`, color: r.accent }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M6 1v7M3 5.5l3 3 3-3M1 10h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  PDF
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}