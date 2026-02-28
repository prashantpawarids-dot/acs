import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";
import { Card, CardContent } from "@/components/ui/card";

const BASE_URL = import.meta.env.VITE_STATIC_ASSETS;

const students = [
  { sr: 1,  name: "Ms. Ansari Najrin Shahid",              cls: "BBA(CA)",  company: "Wipro Technologies Ltd.",                        post: "Trainee" },
  { sr: 2,  name: "Ms. Ade Harshada Santosh",              cls: "BSc(CS)",  company: "Sai Control System",                             post: "Technician" },
  { sr: 3,  name: "Mr. Chande Mahesh Mangesh",             cls: "BSc(CS)",  company: "Thermax",                                        post: "IT Support Associate" },
  { sr: 4,  name: "Ms. Gaikwad Mahima Ramchandra",         cls: "BBA(CA)",  company: "Access Healthcare",                              post: "Medical Coder" },
  { sr: 5,  name: "Ms. Goud Sapana Vinod",                 cls: "BBA(CA)",  company: "4 Phase Media",                                  post: "Back Office Operator" },
  { sr: 6,  name: "Mr. Jangam Shreyash Sachin",            cls: "BSc(CS)",  company: "Accenture",                                      post: "Process Executive" },
  { sr: 7,  name: "Ms. Komal Pannalal Yadav",              cls: "BSc(CS)",  company: "Infosys",                                        post: "Business Executive" },
  { sr: 8,  name: "Mr. Vishwakarma Pramod Bachchelal",     cls: "BSc(CS)",  company: "Transaction Solution International",             post: "IT Support Associate" },
  { sr: 9,  name: "Mr. Abhishek Bhairgond",                cls: "BSc(R)",   company: "Pimpri Chinchwad Corporation",                   post: "Labourer" },
  { sr: 10, name: "Mr. Rushikesh Deshmukh",                cls: "BSc(CS)",  company: "DevOps Engineer",                                post: "Trainee" },
  { sr: 11, name: "Mr. Shaikh Avesh Aslam",                cls: "BBA(CA)",  company: "Muskan Enterprises",                             post: "Sales Executive Manager" },
  { sr: 12, name: "Mr. Shaikh Baba Allabaksh",             cls: "BBA(CA)",  company: "WNS Global Services Pvt. Ltd.",                  post: "Customer Service Operator" },
  { sr: 13, name: "Ms. Singh Manisha Gupteshwar",          cls: "BBA(CA)",  company: "Avians Pvt. Ltd.",                               post: "Trainee" },
  { sr: 14, name: "Mr. Soni Suraj Ghanshyam",              cls: "BBA(CA)",  company: "HDFC Bank",                                      post: "Sales Executive Manager" },
  { sr: 15, name: "Mr. Vijay Gimire",                      cls: "BCOM",     company: "WNS Global Services Pvt. Ltd.",                  post: "Customer Service Operator" },
  { sr: 16, name: "Ms. Wartika Sharma",                    cls: "BSc(CS)",  company: "Wipro Technologies Ltd.",                        post: "Back Office Operator" },
  { sr: 17, name: "Mr. Ansari Tanveer Mustafa",            cls: "BSc(CS)",  company: "DevOps Engineer",                                post: "Trainee" },
  { sr: 18, name: "Mr. Palrajput Aman Ranjit",             cls: "BSc(CS)",  company: "DevOps Engineer",                                post: "Trainee" },
  { sr: 19, name: "Mr. Sharma Prince Rajesh",              cls: "BSc(CS)",  company: "Wipro Technologies Ltd.",                        post: "Back Office Operator" },
  { sr: 20, name: "Mr. Singh Abhinesh Sanjay",             cls: "BSc(CS)",  company: "Wipro Technologies Ltd.",                        post: "Back Office Operator" },
  { sr: 21, name: "Mr. Tamboli Talha Salim",               cls: "BSc(CS)",  company: "DevOps Engineer",                                post: "Trainee" },
  { sr: 22, name: "Ms. Bhapkar Akshada Nanaso",            cls: "BBA(CA)",  company: "Panacea BPO Services Pvt. Ltd.",                 post: "Customer Service Operator" },
  { sr: 23, name: "Mr. Patel Chetan Prabhulal",            cls: "BBA(CA)",  company: "Panacea BPO Services Pvt. Ltd.",                 post: "Customer Service Operator" },
  { sr: 24, name: "Ms. Shinde Siddhi Rajendra",            cls: "BBA(CA)",  company: "Panacea BPO Services Pvt. Ltd.",                 post: "Customer Service Operator" },
  { sr: 25, name: "Mr. Yadav Nitin Satiram",               cls: "BBA(CA)",  company: "Futurism Technologies",                          post: "Data Analyst" },
  { sr: 26, name: "Ms. Yadav Pooja Dhananjay",             cls: "BBA(CA)",  company: "Futurism Technologies",                          post: "Data Analyst" },
  { sr: 27, name: "Mr. Bigala Harikrishna Venkatnarayana", cls: "BCOM",     company: "Finaleap Pvt. Ltd.",                             post: "Relationship Manager" },
  { sr: 28, name: "Mr. Lodhe Nilesh Manoj",                cls: "BCOM",     company: "Credit System India",                            post: "Financial Analyst" },
  { sr: 29, name: "Ms. Londhe Purvaja Ramakant",           cls: "BCOM",     company: "Credit System India",                            post: "Financial Analyst" },
  { sr: 30, name: "Mr. Meshram Mayank Milind",             cls: "BCOM",     company: "Finaleap Pvt. Ltd.",                             post: "Relationship Manager" },
  { sr: 31, name: "Ms. Safi Qais Ahmed",                   cls: "BCOM",     company: "Gallagher Service Centre LLP",                   post: "Operation Service Analyst" },
  { sr: 32, name: "Mr. Hussain Sadia Md Shahid",           cls: "BCOM",     company: "Panacea BPO Service Pvt Ltd",                    post: "Customer Service Operator" },
  { sr: 33, name: "Mr. Prajapati Vicky Ravikumar",         cls: "BCOM",     company: "Credit System India",                            post: "Financial Analyst" },
  { sr: 34, name: "Ms. Murhe Saudnya Shantaram",           cls: "BCOM",     company: "The-Connections ITES Business Service Pvt Ltd",  post: "Trainee" },
  { sr: 35, name: "Ms. Mahadik Samruddhi Avinash",         cls: "BCOM",     company: "Credit System India",                            post: "Financial Analyst" },
  { sr: 36, name: "Mr. Sawant Prajval Bhagwat",            cls: "BCOM",     company: "Gallagher Service Centre LLP",                   post: "Operation Service Analyst" },
  { sr: 37, name: "Mr. Gaikwad Sandesh Sanjay",            cls: "BCOM",     company: "DBS Mintek Pvt Ltd",                             post: "Customer Support Executive" },
  { sr: 38, name: "Ms. Shinde Prachi Sunil",               cls: "BCOM",     company: "Futurism Technologies",                          post: "Data Analyst" },
  { sr: 39, name: "Mr. Waghmare Manoj Raju",               cls: "BCOM",     company: "Gallagher Service Centre LLP",                   post: "Operation Service Analyst" },
  { sr: 40, name: "Mr. Shinde Siddhanth Ashok",            cls: "BCOM",     company: "Futurism Technologies",                          post: "Data Analyst" },
  { sr: 41, name: "Ms. Sauant Shruti Sharad",              cls: "BCOM",     company: "Credit System India",                            post: "Financial Analyst" },
  { sr: 42, name: "Mr. Vetal Sudarshan Janardan",          cls: "BCOM",     company: "Gallagher Service Centre LLP",                   post: "Operation Service Analyst" },
  { sr: 43, name: "Mr. Pawar Dipak Ramesh",                cls: "BCOM",     company: "Futurism Technologies",                          post: "Data Analyst" },
  { sr: 44, name: "Mr. Solanki Prabhu Gomaram",            cls: "BCOM",     company: "Credit System India",                            post: "Financial Analyst" },
  { sr: 45, name: "Mr. Guher Vishal Khemchand",            cls: "BCOM",     company: "Gallagher Service Centre LLP",                   post: "Operation Service Analyst" },
  { sr: 46, name: "Mr. Pathan Saddam Shabbir",             cls: "BCOM",     company: "Credit System India",                            post: "Financial Analyst" },
  { sr: 47, name: "Mr. Poojari Shreyash Uday",             cls: "BCOM",     company: "DBS Mintek Pvt Ltd",                             post: "Customer Support Executive" },
  { sr: 48, name: "Mr. Jha Sunny Babloo",                  cls: "BCOM",     company: "Gallagher Service Centre LLP",                   post: "Operation Service Analyst" },
  { sr: 49, name: "Mr. Kadam Yogiraj Uday",                cls: "BBA",      company: "Credit System India",                            post: "Financial Analyst" },
  { sr: 50, name: "Mr. Rankhambe Aryan Dinesh",            cls: "BBA",      company: "Futurism Technologies",                          post: "Data Analyst" },
  { sr: 51, name: "Mr. Akshay Shinde",                     cls: "BBA",      company: "DBS Mintek Pvt Ltd",                             post: "Customer Support Executive" },
  { sr: 52, name: "Mr. Dash Mishal Kshitiswar",            cls: "BBA",      company: "Credit System India",                            post: "Financial Analyst" },
  { sr: 53, name: "Ms. Singh Savita Akhilesh",             cls: "BBA",      company: "Gallagher Service Centre LLP",                   post: "Operation Service Analyst" },
  { sr: 54, name: "Ms. Thakare Shravani P",                cls: "BBA",      company: "Credit System India",                            post: "Financial Analyst" },
  { sr: 55, name: "Mr. Varma Rohit Rajkumar",              cls: "BBA",      company: "Panacea BPO Service Pvt Ltd",                    post: "Customer Service Operator" },
  { sr: 56, name: "Ms. Vishwakarma Priya R",               cls: "BBA",      company: "Pimpri Chinchwad Corporation",                   post: "Labourer" },
  { sr: 57, name: "Ms. Bishowkarma Uma S",                 cls: "BBA",      company: "Gallagher Service Centre LLP",                   post: "Operation Service Analyst" },
  { sr: 58, name: "Mr. Jagdale Suraj Uttamrao",            cls: "BBA",      company: "Credit System India",                            post: "Financial Analyst" },
  { sr: 59, name: "Mr. Shaikh Kaif Mohid",                 cls: "BA",       company: "Pimpri Chinchwad Corporation",                   post: "Labourer" },
  { sr: 60, name: "Ms. Chandragiri Catrina Malang",        cls: "BA",       company: "New English Medium School",                      post: "Teacher" },
  { sr: 61, name: "Mr. Abhishek Dhimate",                  cls: "BSc(R)",   company: "Yogini Pathology Laboratory",                    post: "Phlebotomist" },
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
  { label: "Total Recruited", value: 61,                                                                    icon: "🎓" },
  { label: "BCOM",            value: students.filter(s => s.cls === "BCOM").length,                         icon: "📊" },
  { label: "BBA / BBA(CA)",   value: students.filter(s => s.cls.startsWith("BBA")).length,                  icon: "💼" },
  { label: "BSc / BA",        value: students.filter(s => s.cls.startsWith("BSc") || s.cls === "BA").length, icon: "🔬" },
];

const recruiterLogos = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  src: `${BASE_URL}/images/requiter/${i + 1}.png`,
}));

const Placement2 = () => {
  return (
    <Layout>
      <style>{`
        @keyframes p2-fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes p2-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .p2-hero {
          background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 45%, #312e81 100%);
          border-radius: 20px;
          padding: 2.5rem 2rem;
          position: relative;
          overflow: hidden;
          margin-top: 1.5rem;
        }
        .p2-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 70% 30%, rgba(99,102,241,0.25) 0%, transparent 65%);
          pointer-events: none;
        }
        .p2-hero::after {
          content: '';
          position: absolute;
          bottom: -40px; right: -40px;
          width: 200px; height: 200px;
          border-radius: 50%;
          background: rgba(99,102,241,0.12);
          pointer-events: none;
        }
        .p2-year-chip {
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
        .p2-hero-title { font-size: clamp(1.4rem, 3vw, 2.2rem); font-weight: 800; color: #fff; margin: 0 0 0.5rem; line-height: 1.2; }
        .p2-hero-sub { color: #c7d2fe; font-size: 0.9rem; line-height: 1.7; max-width: 600px; }
        .p2-stat-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-top: 2rem; }
        @media (max-width: 640px) { .p2-stat-grid { grid-template-columns: repeat(2, 1fr); } }
        .p2-stat {
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 14px;
          padding: 1rem;
          text-align: center;
          backdrop-filter: blur(10px);
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .p2-stat:hover { transform: translateY(-4px); box-shadow: 0 10px 30px rgba(99,102,241,0.3); }
        .p2-stat-icon { font-size: 1.4rem; margin-bottom: 4px; }
        .p2-stat-num { font-size: 2rem; font-weight: 800; background: linear-gradient(90deg, #fff, #a5b4fc); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .p2-stat-lbl { color: #c7d2fe; font-size: 0.72rem; letter-spacing: 1px; text-transform: uppercase; margin-top: 2px; }
        .p2-section-head { display: flex; flex-direction: column; align-items: center; margin-bottom: 1.5rem; gap: 4px; }
        .p2-section-title { font-size: 1.25rem; font-weight: 700; background: linear-gradient(135deg, #4338ca, #6366f1); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .p2-title-bar { width: 50px; height: 3px; background: linear-gradient(90deg, #6366f1, #818cf8); border-radius: 4px; }
        .p2-table-wrap { border-radius: 16px; border: 1px solid #e5e7eb; overflow: hidden; box-shadow: 0 4px 24px rgba(99,102,241,0.08); }
        .p2-table { width: 100%; border-collapse: collapse; font-size: 0.85rem; min-width: 620px; }
        .p2-table thead tr { background: linear-gradient(135deg, #4338ca, #6366f1); color: #fff; }
        .p2-table thead th { padding: 13px 14px; text-align: left; font-weight: 600; letter-spacing: 0.3px; white-space: nowrap; }
        .p2-table tbody tr { border-bottom: 1px solid #f3f4f6; transition: background 0.18s; }
        .p2-table tbody tr:last-child { border-bottom: none; }
        .p2-table tbody tr:hover { background: #f5f3ff !important; }
        .p2-table tbody td { padding: 11px 14px; vertical-align: middle; }
        .p2-sr { font-weight: 700; color: #6366f1; text-align: center; }
        .p2-name { font-weight: 600; color: #111827; }
        .p2-company { color: #374151; }
        .p2-post { color: #6b7280; white-space: nowrap; }
        .p2-cls-pill { display: inline-block; padding: 2px 10px; border-radius: 50px; font-size: 0.72rem; font-weight: 700; color: #fff; white-space: nowrap; }
        .p2-divider { border: none; height: 1px; background: linear-gradient(90deg, transparent, #6366f1, transparent); margin: 2.5rem 0; }
        .p2-marquee-wrap { overflow: hidden; border-radius: 14px; }
        .p2-marquee-track { display: flex; gap: 1.5rem; animation: p2-marquee 30s linear infinite; width: max-content; }
        .p2-marquee-track:hover { animation-play-state: paused; }
        .p2-marquee-logo { background: #fff; border-radius: 12px; border: 1px solid #e5e7eb; padding: 0.5rem 0.8rem; height: 70px; width: 130px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; box-shadow: 0 2px 8px rgba(0,0,0,0.05); transition: transform 0.3s; }
        .p2-marquee-logo:hover { transform: scale(1.08); }
        .p2-marquee-logo img { max-width: 100%; max-height: 48px; object-fit: contain; }
        .p2-animate { animation: p2-fadeUp 0.6s ease both; }
      `}</style>

      <div className="container mx-auto py-8 px-4">
        <PageHeader
          title="Past Placements 2021–22"
          description="Placement records for the academic year 2021–22."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Placement & Career", href: "/placement/training-activities" },
            { label: "2021–22" },
          ]}
        />

        {/* Hero */}
        <div className="p2-hero">
          <div className="p2-year-chip">Academic Year 2021 – 22</div>
          <h1 className="p2-hero-title">Placement Report 2021–22</h1>
          <p className="p2-hero-sub">
            SE Society's SNBP College of Arts Commerce Science &amp; Management Studies, Morwadi–Pimpri, Pune.
            The Training &amp; Placement Cell actively implemented various online programmes to support students
            for placement after graduation. Pre-placement modules were introduced and students were given
            personal attention to prepare them as per market and industry requirements.
          </p>
          <div className="p2-stat-grid">
            {summary.map((s) => (
              <div className="p2-stat" key={s.label}>
                <div className="p2-stat-icon">{s.icon}</div>
                <div className="p2-stat-num">{s.value}</div>
                <div className="p2-stat-lbl">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <hr className="p2-divider" />

        {/* Table */}
        <div className="p2-animate" style={{ animationDelay: "0.1s" }}>
          <div className="p2-section-head">
            <div className="p2-section-title">Placed Students — 2021–22</div>
            <div className="p2-title-bar" />
            <span style={{ fontSize: "0.82rem", color: "#6b7280", marginTop: 4 }}>
              Total {students.length} students successfully recruited in reputed industries
            </span>
          </div>
          <div className="overflow-x-auto p2-table-wrap">
            <table className="p2-table">
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
                    <td className="p2-sr">{s.sr}</td>
                    <td className="p2-name">{s.name}</td>
                    <td>
                      <span className="p2-cls-pill" style={{ background: clsColors[s.cls] ?? "#6366f1" }}>
                        {s.cls}
                      </span>
                    </td>
                    <td className="p2-company">{s.company}</td>
                    <td className="p2-post">{s.post}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <hr className="p2-divider" />

        {/* Recruiters Marquee */}
        <div className="p2-animate" style={{ animationDelay: "0.2s", marginBottom: "1rem" }}>
          <div className="p2-section-head">
            <div className="p2-section-title">Recruiters of SNBPACS Students</div>
            <div className="p2-title-bar" />
            <span style={{ fontSize: "0.82rem", color: "#6b7280", marginTop: 4 }}>On Campus &amp; Off Campus</span>
          </div>
          <div className="p2-marquee-wrap">
            <div className="p2-marquee-track">
              {[...recruiterLogos, ...recruiterLogos].map((logo, idx) => (
                <div className="p2-marquee-logo" key={idx}>
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

export default Placement2;