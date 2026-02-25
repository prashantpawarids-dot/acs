import React from 'react';
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";

const committeeMembers = [
  { sr: 1, name: "Dr. Sudhir Atwadkar", designation: "Chairperson", representative: "Vice-Principal", contact: "8390819061" },
  { sr: 2, name: "Mrs. Gauri Shirude", designation: "Secretary", representative: "CEO", contact: "9922175010" },
  { sr: 3, name: "Mr. Danish Sayyed", designation: "Member", representative: "Physical Director", contact: "9890026877" },
  { sr: 4, name: "Ms. Sushma Pingale", designation: "Member", representative: "Faculty Representative", contact: "8600998766" },
  { sr: 5, name: "Mr. Amol Bade", designation: "Member", representative: "Faculty Representative", contact: "9689058971" },
  { sr: 6, name: "Mr. Shreekant Mahajan", designation: "Member", representative: "Faculty Representative", contact: "7020045465" },
  { sr: 7, name: "Mr. Kamlakar Lalage", designation: "Member", representative: "Non-Teaching Staff", contact: "7488997575" },
  { sr: 8, name: "Mr. Edwin Augustin", designation: "Member", representative: "Senior Student", contact: "8329906091" },
  { sr: 9, name: "Ms. Farah Shaikh", designation: "Member", representative: "Senior Student", contact: "7040151863" },
  { sr: 10, name: "Ms. Dhanashree Jogdand", designation: "Member", representative: "Fresher Student", contact: "9764383283" },
  { sr: 11, name: "Mr. Aditya Chavare", designation: "Member", representative: "Fresher Student", contact: "8010445321" },
  { sr: 12, name: "Mr. Pratap More", designation: "Member", representative: "Parent Representative", contact: "9518983556" },
  { sr: 13, name: "Mr. Arvind Navagire", designation: "Member", representative: "NGO Representative", contact: "8446006580" },
  { sr: 14, name: "PSI, Pimpri Police", designation: "Member", representative: "Police Representative", contact: "020-27412318" },
];

const squadMembers = [
  { sr: 1, name: "Mrs. Danish Sayyed", designation: "Squad Head", representative: "Physical Director", contact: "9890026877" },
  { sr: 2, name: "Mrs. Manisha Dhayber", designation: "Member", representative: "BSc (CS) Coordinator", contact: "9890150872" },
  { sr: 3, name: "Miss. Madhura Kulkarni", designation: "Member", representative: "Faculty Representative", contact: "9762648818" },
  { sr: 4, name: "Mr. Amol Bade", designation: "Member", representative: "BA Coordinator", contact: "9689058971" },
  { sr: 5, name: "Mr. Shreekant Mahajan", designation: "Member", representative: "B.Com Co-ordinator", contact: "7020045465" },
  { sr: 6, name: "Ms. Mukta Kashid", designation: "Member", representative: "BBA(CA) Co-ordinator", contact: "7709794989" },
  { sr: 7, name: "Mr. Kiran Shewale", designation: "Member", representative: "Librarian", contact: "7743878029" },
];

const DesignationBadge = ({ designation }: { designation: string }) => {
  if (designation === "Chairperson")
    return <span className="badge rounded-pill px-3 py-2 text-black fw-semibold" style={{ background: "#b6d4fe" }}>{designation}</span>;
  if (designation === "Secretary")
    return <span className="badge rounded-pill px-3 py-2 text-black fw-semibold" style={{ background: "#a3cfbb" }}>{designation}</span>;
  if (designation === "Squad Head")
    return <span className="badge rounded-pill px-3 py-2 text-black fw-semibold" style={{ background: "#f1aeb5" }}>{designation}</span>;
  return <span className="badge rounded-pill px-3 py-2 text-black fw-semibold" style={{ background: "#cfe2ff" }}>{designation}</span>;
};

const MemberTable = ({ members }: { members: typeof committeeMembers }) => (
  <div className="table-responsive rounded-3 overflow-hidden shadow-sm border w-100" style={{ borderColor: "#a8d5f5" }}>
    <table className="table align-middle mb-0 w-100">
      <thead style={{ background: "#1565c0" }}>
        <tr>
          <th className="py-3 ps-4 text-black fw-bold border-0" style={{ background: "#cfe2ff" }}>Sr. No.</th>
          <th className="py-3 text-black fw-bold border-0" style={{ background: "#cfe2ff" }}>
            <i className="bi bi-person-fill me-1"></i>Name
          </th>
          <th className="py-3 text-black fw-bold border-0" style={{ background: "#cfe2ff" }}>Designation</th>
          <th className="py-3 text-black fw-bold border-0" style={{ background: "#cfe2ff" }}>
            <i className="bi bi-briefcase-fill me-1"></i>Representative
          </th>
          <th className="py-3 text-black fw-bold border-0" style={{ background: "#cfe2ff" }}>
            <i className="bi bi-telephone-fill me-1"></i>Contact No.
          </th>
        </tr>
      </thead>
      <tbody>
        {members.map((m, i) => (
          <tr key={m.sr} style={{ background: i % 2 === 0 ? "#f0f7ff" : "#e7f3ff" }}>
            <td className="ps-4 py-3 fw-bold text-black">{m.sr}.</td>
            <td className="py-3 fw-semibold text-black">{m.name}</td>
            <td className="py-3"><DesignationBadge designation={m.designation} /></td>
            <td className="py-3 text-black">{m.representative}</td>
            <td className="py-3">
              <a href={`tel:${m.contact}`} className="text-decoration-none text-black fw-semibold">
                <i className="bi bi-telephone-fill me-2" style={{ color: "#1565c0" }}></i>
                {m.contact}
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const SectionTitle = ({ icon, title, year }: { icon: string; title: string; year: string }) => (
  <div className="d-flex align-items-center gap-3 mb-4">
    <div className="rounded-3 p-2" style={{ background: "#1565c0" }}>
      <i className={`bi ${icon} text-black fs-5`} style={{ color: "#cfe2ff" }}></i>
    </div>
    <div>
      <h5 className="fw-bold text-black mb-0">{title}</h5>
      <small className="fw-semibold" style={{ color: "#1565c0" }}>{year}</small>
    </div>
  </div>
);

const AntiRagging = () => {
  return (
    <Layout>
      <PageHeader
        title="Anti-Ragging Committee"
        description="Building and preserving a Culture of Ragging Free Environment in the College Campus"
        breadcrumbs={[
          { label: "Student Corner", href: "/student-corner/anti-ragging" },
          { label: "Anti-Ragging Committee" },
        ]}
      />

      <section className="py-5" style={{ background: "#f0f7ff" }}>
        <div className="container">

          {/* About Anti-Ragging Committee */}
          <div className="card border-0 rounded-4 shadow-sm mb-5 overflow-hidden">
            <div className="py-3 px-4 d-flex align-items-center gap-2" style={{ background: "#1565c0" }}>
              <i className="bi bi-shield-check fs-5" style={{ color: "#cfe2ff" }}></i>
              <h5 className="fw-bold mb-0" style={{ color: "#cfe2ff" }}>About Anti-Ragging Committee</h5>
            </div>
            <div className="card-body p-4" style={{ background: "#e7f3ff" }}>
              <div className="rounded-3 p-3 border-start border-4" style={{ borderColor: "#1565c0", background: "#dbeafe" }}>
                <p className="text-black mb-0 lh-lg fs-6">
                  Anti-Ragging Committee will be the Supervisory Committee on matters of planning for building and preserving a
                  <strong> Culture of Ragging Free Environment</strong> in the College Campus. The Anti-Ragging Squad will work under
                  the Supervision of Anti-Ragging Committee and engage in the works of checking places like <strong>Canteens,
                  Classrooms</strong> and other places of student congregation, for any incidences of Ragging, and shall educate
                  the students at large in the college about risk of ragging and related punishment provisions. Anti-Ragging Committee
                  will be involved in designing strategies and action plan for curbing the risk of ragging in the college by adopting
                  array of activities.
                </p>
              </div>
            </div>
          </div>

          {/* Committee Table */}
          <div className="mb-5">
            <SectionTitle icon="bi-people-fill" title="Anti-Ragging Committee" year="2022–23" />
            <MemberTable members={committeeMembers} />
          </div>

          {/* Divider */}
          <div className="d-flex align-items-center gap-3 my-5">
            <div className="flex-grow-1" style={{ height: "2px", background: "#90caf9" }}></div>
            <span className="rounded-pill px-4 py-2 fw-bold text-black" style={{ background: "#cfe2ff", fontSize: "14px" }}>
              <i className="bi bi-person-badge-fill me-2" style={{ color: "#1565c0" }}></i>
              Anti-Ragging Squad
            </span>
            <div className="flex-grow-1" style={{ height: "2px", background: "#90caf9" }}></div>
          </div>

          {/* About Anti-Ragging Squad */}
          <div className="card border-0 rounded-4 shadow-sm mb-5 overflow-hidden">
            <div className="py-3 px-4 d-flex align-items-center gap-2" style={{ background: "#1565c0" }}>
              <i className="bi bi-person-badge-fill fs-5" style={{ color: "#cfe2ff" }}></i>
              <h5 className="fw-bold mb-0" style={{ color: "#cfe2ff" }}>Anti-Ragging Squad</h5>
            </div>
            <div className="card-body p-4" style={{ background: "#e7f3ff" }}>
              <div className="rounded-3 p-3 border-start border-4" style={{ borderColor: "#1565c0", background: "#dbeafe" }}>
                <p className="text-black mb-0 lh-lg fs-6">
                  Anti-Ragging Squad will be working under the monitoring of Anti-Ragging Committee and will seek advice from the
                  Anti-Ragging Committee. The Functions of Anti-Ragging Squad will be to keep a vigil and stop the incidences of
                  Ragging, if any, happening/reported in the places of Student aggregation including <strong>Classrooms, Canteens,
                  Grounds, Laboratories</strong>, etc. The Squad will also educate the students at large by adopting various means
                  about the risk of Ragging and related Punishments thereto. A positive strengthening activity will have to be adopted
                  by Anti-Ragging Squad to prevent ragging and orienting students and melding their personality for a better cause.
                  They shall work in consonance and Guidance of Anti-Ragging Committee.
                </p>
              </div>
            </div>
          </div>

          {/* Squad Table */}
          <div className="mb-5">
            <SectionTitle icon="bi-person-badge-fill" title="Anti-Ragging Squad" year="2022–23" />
            <MemberTable members={squadMembers} />
          </div>

          {/* Warning Notice */}
          <div className="rounded-4 p-4 d-flex align-items-start gap-3 shadow-sm" style={{ background: "#fff3cd", border: "1px solid #ffe082" }}>
            <i className="bi bi-exclamation-triangle-fill fs-4 mt-1" style={{ color: "#f57c00" }}></i>
            <div>
              <h6 className="fw-bold text-black mb-1">Zero Tolerance Towards Ragging</h6>
              <p className="text-black mb-0 lh-lg small">
                Ragging in any form is <strong>strictly prohibited</strong> on campus. Any student found guilty of ragging shall be
                subject to <strong>severe disciplinary action</strong> as per UGC Regulations and applicable law. Students are
                encouraged to report any incident <strong>immediately</strong> to the Anti-Ragging Committee.
              </p>
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
};

export default AntiRagging;