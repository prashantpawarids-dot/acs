import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";

const BASE_URL = import.meta.env.VITE_STATIC_ASSETS;

const students = [
  { sr: 1,  name: "Kondaji Mujawar",                   cls: "BSc(CS)",  company: "Axv Technologies",                                   salary: "₹25,000/mo" },
  { sr: 2,  name: "Kaif",                              cls: "BBA(CA)",  company: "Senwell Solutions LLP",                              salary: "3.5 LPA" },
  { sr: 3,  name: "Dhanashree Umesh Jogdand",          cls: "BSc(CS)",  company: "TATA Consultancy Services Limited",                  salary: "₹15,539/mo" },
  { sr: 4,  name: "Arya Sunilkumar Pillai",            cls: "BSc(CS)",  company: "TATA Consultancy Services Limited",                  salary: "₹15,539/mo" },
  { sr: 5,  name: "Neelam Hemant Das",                 cls: "BCOM",     company: "Vbros Auto Pvt. Ltd",                                salary: "3.5 LPA" },
  { sr: 6,  name: "Ajit Gupta",                        cls: "BBA(CA)",  company: "Varroc Engineering Ltd.",                            salary: "₹16,500/mo" },
  { sr: 7,  name: "Tilk Singh",                        cls: "BBA(CA)",  company: "Varroc Engineering Ltd.",                            salary: "₹16,500/mo" },
  { sr: 8,  name: "Abhijit Shinde",                    cls: "BBA(CA)",  company: "Varroc Engineering Ltd.",                            salary: "₹16,500/mo" },
  { sr: 9,  name: "Ankita Mankare",                    cls: "BSc(CS)",  company: "Varroc Engineering Ltd.",                            salary: "₹16,500/mo" },
  { sr: 10, name: "Madhura Salunke",                   cls: "BBA(CA)",  company: "Varroc Engineering Ltd.",                            salary: "₹16,500/mo" },
  { sr: 11, name: "Sayali Dherenge",                   cls: "BSc(CS)",  company: "Varroc Engineering Ltd.",                            salary: "₹16,500/mo" },
  { sr: 12, name: "Yougesh Ambapkar",                  cls: "BBA(CA)",  company: "Varroc Engineering Ltd.",                            salary: "₹16,500/mo" },
  { sr: 13, name: "Vivek Borate",                      cls: "BSc(CS)",  company: "Varroc Engineering Ltd.",                            salary: "₹16,500/mo" },
  { sr: 14, name: "Vikas Kushwaha",                    cls: "BBA(CA)",  company: "Varroc Engineering Ltd.",                            salary: "₹16,500/mo" },
  { sr: 15, name: "Vijay Dotonde",                     cls: "BSc(CS)",  company: "Varroc Engineering Ltd.",                            salary: "₹16,500/mo" },
  { sr: 16, name: "Umra Shaikh",                       cls: "BBA(CA)",  company: "Varroc Engineering Ltd.",                            salary: "₹16,500/mo" },
  { sr: 17, name: "Udit Singh",                        cls: "BBA",      company: "Varroc Engineering Ltd.",                            salary: "₹16,500/mo" },
  { sr: 18, name: "Sanket Desai",                      cls: "BSc(CS)",  company: "Varroc Engineering Ltd.",                            salary: "₹16,500/mo" },
  { sr: 19, name: "Pragati Mahagovind",                cls: "BBA",      company: "Varroc Engineering Ltd.",                            salary: "₹16,500/mo" },
  { sr: 20, name: "Pooja Salunke",                     cls: "BCOM",     company: "Varroc Engineering Ltd.",                            salary: "₹16,500/mo" },
  { sr: 21, name: "Kartiki Kamble",                    cls: "BCOM",     company: "Varroc Engineering Ltd.",                            salary: "₹16,500/mo" },
  { sr: 22, name: "Karishma Vishwakarama",             cls: "BSc(CS)",  company: "Varroc Engineering Ltd.",                            salary: "₹16,500/mo" },
  { sr: 23, name: "Dipanshu Pandey",                   cls: "BBA(CA)",  company: "Varroc Engineering Ltd.",                            salary: "₹16,500/mo" },
  { sr: 24, name: "Apeksha Dhole",                     cls: "BSc(CS)",  company: "Varroc Engineering Ltd.",                            salary: "₹16,500/mo" },
  { sr: 25, name: "Alphiya Shaikh",                    cls: "BBA",      company: "Varroc Engineering Ltd.",                            salary: "₹16,500/mo" },
  { sr: 26, name: "Khan Dastagir",                     cls: "BBA(CA)",  company: "QUESS Corp Limited",                                 salary: "₹17,750/mo" },
  { sr: 27, name: "Pushpendendra Singh Devra",         cls: "BBA",      company: "Crowe Advisory Services (India) LLP",                salary: "₹19,000/mo" },
  { sr: 28, name: "Aastha Bakshi",                     cls: "BSc(CS)",  company: "Proisystems Inc",                                    salary: "₹17,000/mo" },
  { sr: 29, name: "Om Shingote",                       cls: "BSc(CS)",  company: "Proisystems Inc",                                    salary: "₹17,000/mo" },
  { sr: 30, name: "Jeevanti Kaitwar",                  cls: "BSc(CS)",  company: "Proisystems Inc",                                    salary: "₹17,000/mo" },
  { sr: 31, name: "Ajay Raju Shinde",                  cls: "BSc(CS)",  company: "D.Y. Patil Unitech Society, Pune",                   salary: "₹20,000/mo" },
  { sr: 32, name: "Rohit Sahane",                      cls: "BCOM",     company: "Atharv Associates",                                  salary: "₹20,000/mo" },
  { sr: 33, name: "Neelam Hemant Das",                 cls: "BCOM",     company: "Vbros Auto Pvt. Ltd",                                salary: "₹16,500/mo" },
  { sr: 34, name: "Arya Sunilkumar Pillai",            cls: "BSc(CS)",  company: "TATA Consultancy Services Limited",                  salary: "₹7,950/mo" },
  { sr: 35, name: "Dhanashree Umesh Jogdand",          cls: "BSc(CS)",  company: "TATA Consultancy Services Limited",                  salary: "₹7,950/mo" },
  { sr: 36, name: "Kaif",                              cls: "BBA(CA)",  company: "Senwell Solutions LLP",                              salary: "3.5 LPA" },
  { sr: 37, name: "Kondaji Mujawar",                   cls: "BSc(CS)",  company: "Axv Technologies",                                   salary: "₹15,000/mo" },
  { sr: 38, name: "Jadhao Shital Shankar",             cls: "BA",       company: "Panacea BPO Services Pvt. Ltd",                      salary: "2.92 LPA" },
  { sr: 39, name: "Patil Janvi Devendra",              cls: "BA",       company: "Panacea BPO Services Pvt. Ltd",                      salary: "2.92 LPA" },
  { sr: 40, name: "Sharma Hitesh Joginder",            cls: "BA",       company: "Panacea BPO Services Pvt. Ltd",                      salary: "2.92 LPA" },
  { sr: 41, name: "Patil Janvi Devendra",              cls: "BA",       company: "Panacea BPO Services Pvt. Ltd",                      salary: "2.92 LPA" },
  { sr: 42, name: "Lande Harshad Dattatray",           cls: "BSc(CS)",  company: "Sidtyati Technologies Pvt. Ltd",                     salary: "₹16,000/mo" },
  { sr: 43, name: "Lanke Vaishnavi Nivrutti",          cls: "BSc(CS)",  company: "Sidtyati Technologies Pvt. Ltd",                     salary: "₹16,000/mo" },
  { sr: 44, name: "Mahajan Mayank Upendra",            cls: "BSc(CS)",  company: "Sidtyati Technologies Pvt. Ltd",                     salary: "₹16,000/mo" },
  { sr: 45, name: "Mandal Ritu Naresh",                cls: "BSc(CS)",  company: "Sidtyati Technologies Pvt. Ltd",                     salary: "₹16,000/mo" },
  { sr: 46, name: "Mandal Vishal Virendra",            cls: "BSc(CS)",  company: "Sidtyati Technologies Pvt. Ltd",                     salary: "₹16,000/mo" },
  { sr: 47, name: "Momin Soyal Abdulrazak",            cls: "BSc(CS)",  company: "Sidtyati Technologies Pvt. Ltd",                     salary: "₹16,000/mo" },
  { sr: 48, name: "Naikare Rushabh Ganesh",            cls: "BSc(CS)",  company: "Sidtyati Technologies Pvt. Ltd",                     salary: "₹16,000/mo" },
  { sr: 49, name: "Nimbalkar Vaishnavi Bandu",         cls: "BSc(CS)",  company: "Sidtyati Technologies Pvt. Ltd",                     salary: "₹16,000/mo" },
  { sr: 50, name: "Pal Khushboo Rajendra Kumar",       cls: "BSc(CS)",  company: "Sidtyati Technologies Pvt. Ltd",                     salary: "₹16,000/mo" },
  { sr: 51, name: "Pardeshi Arun Rajendra",            cls: "BSc(CS)",  company: "D-Orbit Technologies",                               salary: "₹22,000/mo" },
  { sr: 52, name: "Parge Abhishek Arun",               cls: "BSc(CS)",  company: "D-Orbit Technologies",                               salary: "₹22,000/mo" },
  { sr: 53, name: "Pathade Sumeet Adhik",              cls: "BSc(CS)",  company: "D-Orbit Technologies",                               salary: "₹22,000/mo" },
  { sr: 54, name: "Patil Swarup Sachin",               cls: "BSc(CS)",  company: "D-Orbit Technologies",                               salary: "₹22,000/mo" },
  { sr: 55, name: "Ram Aniket Veerbahadur",            cls: "BSc(CS)",  company: "D-Orbit Technologies",                               salary: "₹22,000/mo" },
  { sr: 56, name: "Anerao Yash Dhananjay",             cls: "BBA",      company: "The Connections ITES Business Services Pvt. Ltd.",   salary: "1.92 LPA" },
  { sr: 57, name: "Arescheril Norman John",            cls: "BBA",      company: "The Connections ITES Business Services Pvt. Ltd.",   salary: "1.92 LPA" },
  { sr: 58, name: "Arya Halwai Apeksha Vishwaraj",     cls: "BBA",      company: "The Connections ITES Business Services Pvt. Ltd.",   salary: "1.92 LPA" },
  { sr: 59, name: "Bhandari Shrinivas Basavaraj",      cls: "BBA",      company: "DBS Mintek Pvt. Ltd",                                salary: "₹15,000/mo" },
  { sr: 60, name: "Bhati Yogesh Lumbaram",             cls: "BBA",      company: "DBS Mintek Pvt. Ltd",                                salary: "₹15,000/mo" },
  { sr: 61, name: "Chaudhary Saziya Fazlurrehman",     cls: "BBA",      company: "DBS Mintek Pvt. Ltd",                                salary: "₹15,000/mo" },
  { sr: 62, name: "Chavare Aditya Dattatraya",         cls: "BBA",      company: "DBS Mintek Pvt. Ltd",                                salary: "₹15,000/mo" },
  { sr: 63, name: "Choudhary Naresh Bhuraram",         cls: "BBA",      company: "DBS Mintek Pvt. Ltd",                                salary: "₹15,000/mo" },
  { sr: 64, name: "Deshmukh Harshwardhan Dattatray",   cls: "BBA",      company: "DBS Mintek Pvt. Ltd",                                salary: "₹15,000/mo" },
  { sr: 65, name: "Dhanwade Ankita Ankush",            cls: "BBA",      company: "DBS Mintek Pvt. Ltd",                                salary: "₹15,000/mo" },
  { sr: 66, name: "Admane Ajinkya Rambhau",            cls: "BBA(CA)",  company: "Sidtyati Technologies Pvt. Ltd",                     salary: "₹16,000/mo" },
  { sr: 67, name: "Agalme Srushti Sunil",              cls: "BBA(CA)",  company: "Sidtyati Technologies Pvt. Ltd",                     salary: "₹16,000/mo" },
  { sr: 68, name: "Ambegave Havgi Balu",               cls: "BBA(CA)",  company: "Sidtyati Technologies Pvt. Ltd",                     salary: "₹16,000/mo" },
  { sr: 69, name: "Aneesh Radhakrishnan",              cls: "BBA(CA)",  company: "Sidtyati Technologies Pvt. Ltd",                     salary: "₹16,000/mo" },
  { sr: 70, name: "Avallalu Preeti Hanumanta",         cls: "BBA(CA)",  company: "Sidtyati Technologies Pvt. Ltd",                     salary: "₹16,000/mo" },
  { sr: 71, name: "Bagwan Anjum Firoz",                cls: "BBA(CA)",  company: "Sidtyati Technologies Pvt. Ltd",                     salary: "₹16,000/mo" },
  { sr: 72, name: "Bhagat Abhishek Harendra",          cls: "BBA(CA)",  company: "Sidtyati Technologies Pvt. Ltd",                     salary: "₹16,000/mo" },
  { sr: 73, name: "Bhagat Bhimraj Dipak",              cls: "BBA(CA)",  company: "Sidtyati Technologies Pvt. Ltd",                     salary: "₹16,000/mo" },
  { sr: 74, name: "Bhalerao Harshvardhan Gautam",      cls: "BBA(CA)",  company: "The Connections ITES Business Services Pvt. Ltd.",   salary: "1.92 LPA" },
  { sr: 75, name: "Biradar Ritesh Narayan",            cls: "BBA(CA)",  company: "The Connections ITES Business Services Pvt. Ltd.",   salary: "1.92 LPA" },
  { sr: 76, name: "Borse Mansi Swaroop",               cls: "BBA(CA)",  company: "The Connections ITES Business Services Pvt. Ltd.",   salary: "1.92 LPA" },
  { sr: 77, name: "Chouhan Rajani Jaishankar",         cls: "BBA(CA)",  company: "The Connections ITES Business Services Pvt. Ltd.",   salary: "1.92 LPA" },
  { sr: 78, name: "Dagadgave Gauri Shivsamb",          cls: "BBA(CA)",  company: "The Connections ITES Business Services Pvt. Ltd.",   salary: "1.92 LPA" },
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
  { label: "Total Recruited", value: 78,                                                                        icon: "🎓" },
  { label: "BBA(CA)",         value: students.filter(s => s.cls === "BBA(CA)").length,                          icon: "💼" },
  { label: "BSc(CS)",         value: students.filter(s => s.cls === "BSc(CS)").length,                          icon: "🔬" },
  { label: "BBA",             value: students.filter(s => s.cls === "BBA").length,                              icon: "📊" },
];

const recruiterLogos = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  src: `${BASE_URL}/images/requiter/${i + 1}.png`,
}));

const Placement5 = () => {
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
        .p3-salary { color: #059669; font-weight: 600; white-space: nowrap; }
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
          title="Past Placements 2024–25"
          description="Placement records for the academic year 2024–25."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Placement & Career", href: "/placement/training-activities" },
            { label: "2024–25" },
          ]}
        />

        {/* Hero */}
        <div className="p3-hero">
          <div className="p3-year-chip">Academic Year 2024 – 25</div>
          <h1 className="p3-hero-title">Placement Report 2024–25</h1>
          <p className="p3-hero-sub">
            SE Society's SNBP College of Arts Commerce Science &amp; Management Studies, Morwadi–Pimpri, Pune.
            The Training &amp; Placement Cell is proud to present the placement report for 2024–25. Through
            strong industry connections, targeted training programs, and dedicated student grooming, the T&amp;P
            Cell has successfully placed 78 students in reputed organisations across diverse sectors.
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
            <div className="p3-section-title">Placed Students — 2024–25</div>
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
                  <th>Program</th>
                  <th>Name of Employer</th>
                  <th>Pay Package</th>
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
                    <td className="p3-salary">{s.salary}</td>
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

export default Placement5;