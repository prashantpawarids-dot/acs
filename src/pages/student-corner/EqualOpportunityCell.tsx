import React from 'react';
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";

const cellMembers = [
  { sr: 1, name: "Dr. D.K Bhosale", designation: "President", representative: "Institute Head" },
  { sr: 2, name: "Dr. Sudhir Atwadkar", designation: "Secretary", representative: "IQAC Coordinator" },
  { sr: 3, name: "Mr. Danish Sayyed", designation: "Member", representative: "Student Development Officer" },
  { sr: 4, name: "Mr. Amol Bade", designation: "Member", representative: "Faculty Representative" },
  { sr: 5, name: "Mrs. Gauri Shirude", designation: "Member", representative: "Women Faculty Representative" },
  { sr: 6, name: "Mr. Firoj Shaikh", designation: "Member", representative: "Social Counsellor" },
  { sr: 7, name: "Mr. Indrajit Jadhav", designation: "Member", representative: "Social Counsellor" },
  { sr: 8, name: "Mr. Imran Sayyed", designation: "Member", representative: "Student Representative" },
  { sr: 9, name: "Mr. Abhishek Jamadar", designation: "Member", representative: "Student Representative" },
  { sr: 10, name: "Mr. Hemant Mahajan", designation: "Member", representative: "Parent Representative" },
  { sr: 11, name: "Ms. Shama Kamble", designation: "Member", representative: "Parent Representative" },
];

const objectives = [
  { icon: "bi-megaphone-fill", text: "To create an atmosphere of Equal Opportunity through awareness generation programmes." },
  { icon: "bi-graph-up-arrow", text: "To provide auxiliary support towards skill development and enhancing the employability of students." },
  { icon: "bi-people-fill", text: "To tailor development and sensitization programmes to meet the distinct needs of the students." },
  { icon: "bi-balance-scale", text: "To expedite legal redressal in matters of violation of equal opportunity." },
];

const DesignationBadge = ({ designation }: { designation: string }) => {
  if (designation === "President")
    return <span className="badge rounded-pill px-3 py-2 text-black fw-semibold" style={{ background: "#b6d4fe" }}>{designation}</span>;
  if (designation === "Secretary")
    return <span className="badge rounded-pill px-3 py-2 text-black fw-semibold" style={{ background: "#a3cfbb" }}>{designation}</span>;
  return <span className="badge rounded-pill px-3 py-2 text-black fw-semibold" style={{ background: "#cfe2ff" }}>{designation}</span>;
};

const EqualOpportunityCell = () => {
  return (
    <Layout>
      <PageHeader
        title="Equal Opportunity Cell"
        description="Promoting inclusivity, equality and empowerment for every student at SNBP ACS & MS College"
        breadcrumbs={[
          { label: "Student Corner", href: "/student-corner/equal-opportunity" },
          { label: "Equal Opportunity Cell" },
        ]}
      />

      <section className="py-5" style={{ background: "#f0f7ff" }}>
        <div className="container">

          {/* About Section */}
          <div className="card border-0 rounded-4 shadow-sm mb-5 overflow-hidden">
            <div className="py-3 px-4 d-flex align-items-center gap-2" style={{ background: "#1565c0" }}>
              <i className="bi bi-info-circle-fill fs-5" style={{ color: "#cfe2ff" }}></i>
              <h5 className="fw-bold mb-0" style={{ color: "#cfe2ff" }}>About Equal Opportunity Cell</h5>
            </div>
            <div className="card-body p-4" style={{ background: "#e7f3ff" }}>
              <div className="rounded-3 p-3 mb-3" style={{ background: "#dbeafe" }}>
                <p className="text-black mb-3 lh-lg fs-6">
                  The main problem faced by persons with disabilities and those belonging to the marginalized sections of society stem
                  from disabling environment and socio-cultural and economic barriers. Discrimination against any person on the grounds
                  of his/her disability or physical limitations and minority status is a gross violation of universally accepted
                  principles of equality and human rights and even constitutional obligations.
                </p>
                <p className="text-black mb-3 lh-lg fs-6">
                  The Indian Society is singular in terms of the multifarious hues it has absorbed in its fabric. Living within its
                  clinch are numerous groups that are segregated on the basis of language, ethnicity, class, caste, religion, etc.
                  This inequitable situation warrants a redemption which is possible through Equal Opportunity measures and policies.
                </p>
                <p className="text-black mb-0 lh-lg fs-6">
                  To address these and other urgent issues concerning <strong>SC, ST, OBC, and PwD</strong>, the Equal Opportunity
                  Cell was set up by the <strong>SNBP ACS &amp; MS College</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Objectives */}
          <div className="card border-0 rounded-4 shadow-sm mb-5 overflow-hidden">
            <div className="py-3 px-4 d-flex align-items-center gap-2" style={{ background: "#1565c0" }}>
              <i className="bi bi-flag-fill fs-5" style={{ color: "#cfe2ff" }}></i>
              <h5 className="fw-bold mb-0" style={{ color: "#cfe2ff" }}>Objectives of the Cell</h5>
            </div>
            <div className="card-body p-4" style={{ background: "#e7f3ff" }}>
              <div className="row g-3">
                {objectives.map((obj, i) => (
                  <div key={i} className="col-md-6">
                    <div className="d-flex align-items-start gap-3 rounded-3 p-3 h-100" style={{ background: "#dbeafe", border: "1px solid #90caf9" }}>
                      <div className="rounded-3 p-2 flex-shrink-0">
                        <i className={`bi ${obj.icon} fs-6`} style={{ color: "#cfe2ff" }}></i>
                      </div>
                      <p className="text-black mb-0 lh-lg small fw-semibold">{obj.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Committee Table */}
          <div className="mb-4">
            <div className="d-flex align-items-center gap-3 mb-4">
              <div className="rounded-3 p-2">
                <i className="bi bi-people-fill fs-5" style={{ color: "#cfe2ff" }}></i>
              </div>
              <div>
                <h2 className="fw-bold text-black mb-0">Equal Opportunity Cell-2022–23</h2>
                {/* <small className="fw-semibold" style={{ color: "#1565c0" }}>2022–23</small> */}
              </div>
            </div>

            <div className="d-flex justify-content-center">
              <div className="w-75">
                <div className="table-responsive rounded-3 overflow-hidden shadow-sm">
                  <table className="table align-middle mb-0 w-100">
                    <thead>
                      <tr>
                        <th className="py-3 ps-4 text-black fw-bold border-0 text-center" style={{ background: "#cfe2ff" }}>Sr. No.</th>
                        <th className="py-3 text-black fw-bold border-0" style={{ background: "#cfe2ff" }}>
                          <i className="bi bi-person-fill me-1"></i>Name
                        </th>
                        <th className="py-3 text-black fw-bold border-0" style={{ background: "#cfe2ff" }}>Designation</th>
                        <th className="py-3 text-black fw-bold border-0" style={{ background: "#cfe2ff" }}>
                          <i className="bi bi-briefcase-fill me-1"></i>Representative
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {cellMembers.map((m, i) => (
                        <tr key={m.sr} style={{ background: i % 2 === 0 ? "#f0f7ff" : "#e7f3ff" }}>
                          <td className="py-3 fw-bold text-black text-center ps-4">{m.sr}.</td>
                          <td className="py-3 fw-semibold text-black">{m.name}</td>
                          <td className="py-3"><DesignationBadge designation={m.designation} /></td>
                          <td className="py-3 text-black">{m.representative}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
};

export default EqualOpportunityCell;