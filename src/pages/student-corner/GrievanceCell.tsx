import React from 'react';
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";

const committeeMembers = [
  { sr: 1, name: "Dr. D. K. Bhosale", designation: "Chairperson", representative: "Head of Institute" },
  { sr: 2, name: "Dr. Sudhir Atwadkar", designation: "Member", representative: "Vice Principal" },
  { sr: 3, name: "Mrs. Gauri Shirude", designation: "Member", representative: "CEO" },
  { sr: 4, name: "Mrs. Rashna Golande", designation: "Member", representative: "ISO Co-ordinator" },
  { sr: 5, name: "Mr. Amol Bade", designation: "Member", representative: "Programme Coordinator" },
  { sr: 6, name: "Mr. Danish Sayyad", designation: "Member", representative: "Physical Director" },
  { sr: 7, name: "Mr. Kamlakar Lalage", designation: "Member", representative: "Administration" },
  { sr: 8, name: "Mr. Rajesh Kumar Bohara", designation: "Member", representative: "Parent Representative" },
  { sr: 9, name: "Mr. Sharad Deshmukh", designation: "Member", representative: "Social Representatives" },
];

const objectives = [
  "To uphold the dignity of the College by ensuring strife free atmosphere through promotion of cordial Student-Student relationship and Student-teacher relationship.",
  "To provide responsive, accountable and easily accessible machinery for settlement of grievances and to maintain a harmonious educational atmosphere.",
  "To deal with complex situations in a tactful manner to lessen the condition felt to be oppressive or dissatisfied and ensure effective solutions.",
  "Encouraging Students to express their grievances / problems freely and frankly, without any fear of being victimized.",
  "Advising Students to respect the right and dignity of one another and show utmost restraint and patience whenever any occasion of rift arises.",
  "Advising all staffs to be affectionate to the students and not behave in a vindictive manner towards any of them for any reason.",
  "To make officials of the College responsive, accountable and courteous in dealing with the students and vice versa.",
];

const functions = [
  "Look into the complaints lodged by any student and judge its merit.",
  "Empowered to look into matters of harassment.",
  "Anyone with a genuine grievance may approach department members in person, or in consultation with the class in-charge.",
  "Complaints may be dropped in writing at the letterbox/suggestion box of the Grievance Cell at Administrative Block.",
  "Act upon cases forwarded along with the necessary documents.",
  "Assure that the grievance has been properly solved within a stipulated time limit.",
  "Formally review all cases and prepare statistical reports about the number of cases received.",
  "Give report to the authority about cases attended and number of pending cases, if any.",
];

const SectionHeading = ({ title }: { title: string }) => (
  <div style={{ marginBottom: "20px" }}>
    <h2 style={{
      fontSize: "clamp(18px, 3vw, 22px)",
      fontWeight: "700",
      color: "#1565c0",
      margin: "0 0 8px",
      fontFamily: "'Georgia', serif",
    }}>
      {title}
    </h2>
    <div style={{
      height: "3px",
      width: "60px",
      background: "linear-gradient(90deg, #2196f3, #64b5f6)",
      borderRadius: "2px",
    }} />
  </div>
);

const GrievanceCell = () => {
  return (
    <Layout>
      <PageHeader
        title="Student Grievance Redressal Cell"
        description="Constituted in 2017 — Ensuring a harmonious, dignified and strife-free educational environment for all students"
        breadcrumbs={[
          { label: "Student Corner", href: "/student-corner/grievance-cell" },
          { label: "Grievance Redressal Cell" },
        ]}
      />

      <section className="py-12">
        <div className="container">
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

            {/* Objectives Section */}
            <section style={{ marginBottom: "40px" }}>
              <SectionHeading title="Objectives of Grievance Redressal Committee" />
              <div style={{
                background: "#fff",
                borderRadius: "12px",
                padding: "32px",
                boxShadow: "0 2px 16px rgba(33,150,243,0.08)",
                borderLeft: "4px solid #2196f3",
              }}>
                <ol style={{ margin: 0, paddingLeft: "22px" }}>
                  {objectives.map((obj, i) => (
                    <li key={i} style={{
                      color: "#37474f",
                      fontSize: "15px",
                      lineHeight: "1.8",
                      marginBottom: "12px",
                      paddingLeft: "6px",
                    }}>
                      {obj}
                    </li>
                  ))}
                </ol>
              </div>
            </section>

            {/* Functions Section */}
            <section style={{ marginBottom: "40px" }}>
              <SectionHeading title="Functions of the Grievance Cell" />
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "16px",
              }}>
                {functions.map((fn, i) => (
                  <div key={i} style={{
                    background: "#fff",
                    borderRadius: "10px",
                    padding: "20px 20px 20px 16px",
                    boxShadow: "0 2px 10px rgba(33,150,243,0.07)",
                    display: "flex",
                    gap: "14px",
                    alignItems: "flex-start",
                    borderTop: "3px solid #64b5f6",
                  }}>
                    <div style={{
                      minWidth: "28px", height: "28px",
                      background: "linear-gradient(135deg, #2196f3, #1565c0)",
                      borderRadius: "50%",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#fff", fontSize: "13px", fontWeight: "700",
                      fontFamily: "sans-serif",
                    }}>
                      {i + 1}
                    </div>
                    <p style={{ margin: 0, color: "#455a64", fontSize: "14px", lineHeight: "1.7" }}>{fn}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Committee Table */}
            <section style={{ marginBottom: "40px" }}>
              <SectionHeading title="Student Grievance Redressal Committee (2022–23)" />
              <div style={{
                background: "#fff",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 20px rgba(33,150,243,0.10)",
              }}>
                <div style={{ overflowX: "auto" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                      <tr style={{
                        background: "linear-gradient(90deg, #1565c0, #2196f3)",
                        color: "#fff",
                      }}>
                        {["Sr. No.", "Name", "Designation", "Representative"].map((h) => (
                          <th key={h} style={{
                            padding: "16px 20px",
                            textAlign: "left",
                            fontSize: "14px",
                            fontWeight: "600",
                            letterSpacing: "0.5px",
                            fontFamily: "sans-serif",
                            whiteSpace: "nowrap",
                          }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {committeeMembers.map((m, i) => (
                        <tr
                          key={m.sr}
                          style={{ background: i % 2 === 0 ? "#f0f7ff" : "#ffffff", transition: "background 0.2s" }}
                          onMouseEnter={e => (e.currentTarget.style.background = "#dbeafe")}
                          onMouseLeave={e => (e.currentTarget.style.background = i % 2 === 0 ? "#f0f7ff" : "#ffffff")}
                        >
                          <td style={{ padding: "14px 20px", fontFamily: "sans-serif", color: "#1565c0", fontWeight: "700", fontSize: "14px" }}>{m.sr}</td>
                          <td style={{ padding: "14px 20px", fontFamily: "sans-serif", color: "#1a1a2e", fontSize: "15px", fontWeight: "600" }}>{m.name}</td>
                          <td style={{ padding: "14px 20px", fontFamily: "sans-serif" }}>
                            <span style={{
                              background: m.designation === "Chairperson" ? "linear-gradient(90deg,#1565c0,#2196f3)" : "#e3f2fd",
                              color: m.designation === "Chairperson" ? "#fff" : "#1565c0",
                              padding: "4px 12px",
                              borderRadius: "20px",
                              fontSize: "13px",
                              fontWeight: "600",
                              whiteSpace: "nowrap",
                            }}>
                              {m.designation}
                            </span>
                          </td>
                          <td style={{ padding: "14px 20px", fontFamily: "sans-serif", color: "#546e7a", fontSize: "14px" }}>{m.representative}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Info Box */}
            <div style={{
              background: "linear-gradient(135deg, #e3f2fd, #bbdefb)",
              border: "1px solid #90caf9",
              borderRadius: "12px",
              padding: "24px 28px",
              display: "flex",
              gap: "16px",
              alignItems: "flex-start",
              fontFamily: "sans-serif",
            }}>
              <div style={{ fontSize: "28px" }}>📬</div>
              <div>
                <p style={{ margin: "0 0 6px", fontWeight: "700", color: "#1565c0", fontSize: "15px" }}>
                  How to Submit a Grievance?
                </p>
                <p style={{ margin: 0, color: "#37474f", fontSize: "14px", lineHeight: "1.7" }}>
                  Students may approach department members in person, in consultation with the class in-charge, or drop a written complaint at the{" "}
                  <strong>letterbox / suggestion box</strong> of the Grievance Cell located at the{" "}
                  <strong>Administrative Block</strong>. Please attach all necessary documents with your complaint.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GrievanceCell;