// import { useState } from "react";
// import { Layout } from "@/components/layout/Layout";
// import { PageHeader } from "@/components/common/PageHeader";
// import { teachingStaffData, FacultyMember } from "@/data/human-capital/teachingStaffData";
// import { FacultyCard } from "@/components/faculty/FacultyCard";
// import { FacultyProfileModal } from "@/components/faculty/FacultyProfileModal";

// const TeachingStaff = () => {
//   const [selectedFaculty, setSelectedFaculty] = useState<FacultyMember | null>(null);

//   return (
//     <Layout>
//       <PageHeader
//         title="Teaching Staff"
//         description="Meet our dedicated faculty members committed to academic excellence"
//         breadcrumbs={[
//           { label: "Human Capital", href: "/human-capital/teaching-staff" },
//           { label: "Teaching Staff" },
//         ]}
//       />
      
//       <section className="py-12">
//         <div className="container">
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             {teachingStaffData.map((faculty) => (
//               <FacultyCard
//                 key={faculty.id}
//                 faculty={faculty}
//                 onReadMore={() => setSelectedFaculty(faculty)}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       <FacultyProfileModal
//         faculty={selectedFaculty}
//         isOpen={!!selectedFaculty}
//         onClose={() => setSelectedFaculty(null)}
//       />
//     </Layout>
//   );
// };

// export default TeachingStaff;


import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";
import { X, BookOpen, Trophy, Briefcase, GraduationCap, Building2, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { teachingStaffData, FacultyMember } from "@/data/human-capital/teachingStaffData";

const deptBadge: Record<string, string> = {
  "Science":               "bg-emerald-100 text-emerald-700 border-emerald-200",
  "Management":            "bg-purple-100 text-purple-700 border-purple-200",
  "Computer Science":      "bg-blue-100 text-blue-700 border-blue-200",
  "Computer":              "bg-sky-100 text-sky-700 border-sky-200",
  "Commerce & Management": "bg-orange-100 text-orange-700 border-orange-200",
  "Arts":                  "bg-rose-100 text-rose-700 border-rose-200",
  "Physical Director":     "bg-teal-100 text-teal-700 border-teal-200",
};

const deptGrad: Record<string, string> = {
  "Science":               "from-emerald-600 to-emerald-400",
  "Management":            "from-purple-600 to-purple-400",
  "Computer Science":      "from-blue-600 to-blue-400",
  "Computer":              "from-sky-600 to-sky-400",
  "Commerce & Management": "from-orange-600 to-orange-400",
  "Arts":                  "from-rose-600 to-rose-400",
  "Physical Director":     "from-teal-600 to-teal-400",
};

const fallback = (name: string) =>
  `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=6366f1&color=fff&size=160`;

const fmt = (v: number | "NIL") => (v === "NIL" || v === 0 ? "NIL" : v);

/* ─── Profile Modal ─── */
const ProfileModal = ({ s, onClose }: { s: FacultyMember; onClose: () => void }) => {
  const grad = deptGrad[s.department] ?? "from-indigo-600 to-indigo-400";
  const badge = deptBadge[s.department] ?? "bg-gray-100 text-gray-700 border-gray-200";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-card rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden"
        style={{ animation: "modal-pop 0.35s cubic-bezier(0.34,1.56,0.64,1) both" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Gradient header */}
        <div className={`bg-gradient-to-br ${grad} h-28 relative`}>
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4 text-white" />
          </button>
          {/* Sr badge */}
          <span className="absolute top-3 left-4 bg-white/25 text-white text-xs font-bold px-2.5 py-1 rounded-full">
            #{s.sr}
          </span>
        </div>

        {/* Avatar */}
        <div className="flex justify-center -mt-14 mb-3 px-6">
          <div className="relative">
            <img
              src={s.photo}
              alt={s.name}
              className="w-28 h-28 rounded-full object-cover border-4 border-card shadow-xl"
              onError={(e) => { (e.target as HTMLImageElement).src = fallback(s.name); }}
            />
          </div>
        </div>

        <div className="px-6 pb-6 text-center">
          <h2 className="text-lg font-bold text-foreground leading-tight">{s.name}</h2>
          <p className="text-sm text-primary font-semibold mt-0.5">{s.designation}</p>
          <span className={`inline-block mt-2 text-xs font-semibold px-3 py-1 rounded-full border ${badge}`}>
            {s.department}
          </span>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-2 mt-5">
            {[
              { icon: Briefcase, label: "Experience",   value: `${s.experience} Yrs`, color: "bg-indigo-50 text-indigo-700" },
              { icon: BookOpen,  label: "Publications", value: fmt(s.publications),   color: "bg-emerald-50 text-emerald-700" },
              { icon: Trophy,    label: "Awards",       value: fmt(s.awards),         color: "bg-orange-50 text-orange-700" },
            ].map((stat) => (
              <div key={stat.label} className={`${stat.color} rounded-xl py-3 px-2 flex flex-col items-center gap-1`}>
                <stat.icon className="w-4 h-4" />
                <p className="text-sm font-bold">{stat.value}</p>
                <p className="text-[10px] font-medium">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Detail rows */}
          <div className="mt-4 space-y-2 text-left">
            {[
              { icon: GraduationCap, label: "Qualification",  value: s.qualification },
              { icon: Building2,     label: "Specialisation", value: s.specialisation },
            ].map((row) => (
              <div key={row.label} className="flex items-start gap-3 bg-muted/40 rounded-xl px-3 py-2.5">
                <row.icon className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wide">{row.label}</p>
                  <p className="text-xs font-semibold text-foreground">{row.value}</p>
                </div>
              </div>
            ))}
          </div>

          <Button size="sm" className="mt-5 w-full rounded-full" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>

      <style>{`
        @keyframes modal-pop {
          from { opacity: 0; transform: scale(0.82) translateY(24px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
};

/* ─── Main Page ─── */
const TeachingStaff = () => {
  const [selected, setSelected] = useState<FacultyMember | null>(null);

  const totalExp  = teachingStaffData.reduce((a, s) => a + s.experience, 0);
  const totalPub  = teachingStaffData.reduce((a, s) => (typeof s.publications === "number" ? a + s.publications : a), 0);
  const totalAwd  = teachingStaffData.reduce((a, s) => (typeof s.awards === "number" ? a + s.awards : a), 0);

  return (
    <Layout>
      <PageHeader
        title="Teaching Staff"
        description="Meet our dedicated faculty members committed to academic excellence"
        breadcrumbs={[
          { label: "Human Capital", href: "/human-capital/teaching-staff" },
          { label: "Teaching Staff" },
        ]}
      />

      <section className="py-8">
        <div className="container px-4">

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            {[
              { label: "Total Faculty",    value: teachingStaffData.length, color: "border-t-indigo-600" },
              { label: "Total Experience", value: `${totalExp}+ Yrs`,       color: "border-t-emerald-500" },
              { label: "Publications",     value: totalPub,                  color: "border-t-orange-500" },
              { label: "Awards",           value: totalAwd,                  color: "border-t-rose-500" },
            ].map((stat) => (
              <div key={stat.label} className={`bg-card border border-border border-t-4 ${stat.color} rounded-2xl px-5 py-4 text-center shadow-sm hover:shadow-md transition-shadow`}>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>

          <p className="text-xs text-muted-foreground mb-3 italic">
            💡 Click on any row to view the full faculty profile card
          </p>

          {/* Full table — all 10 columns, horizontal scroll on small screens */}
          <div className="rounded-2xl border border-border overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse" style={{ minWidth: "1000px" }}>

                {/* Header */}
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="px-3 py-3 text-center font-bold text-xs uppercase tracking-wide whitespace-nowrap w-12">Sr No.</th>
                    <th className="px-3 py-3 text-center font-bold text-xs uppercase tracking-wide w-16">Photo</th>
                    <th className="px-3 py-3 text-left font-bold text-xs uppercase tracking-wide whitespace-nowrap">Name of Staff</th>
                    <th className="px-3 py-3 text-left font-bold text-xs uppercase tracking-wide">Designation</th>
                    <th className="px-3 py-3 text-left font-bold text-xs uppercase tracking-wide">Department</th>
                    <th className="px-3 py-3 text-left font-bold text-xs uppercase tracking-wide">Qualification</th>
                    <th className="px-3 py-3 text-left font-bold text-xs uppercase tracking-wide">Specialisation</th>
                    <th className="px-3 py-3 text-center font-bold text-xs uppercase tracking-wide whitespace-nowrap">Experience</th>
                    <th className="px-3 py-3 text-center font-bold text-xs uppercase tracking-wide">Publication</th>
                    <th className="px-3 py-3 text-center font-bold text-xs uppercase tracking-wide">Awards</th>
                  </tr>
                </thead>

                {/* Body */}
                <tbody>
                  {teachingStaffData.map((s, idx) => (
                    <tr
                      key={s.id}
                      onClick={() => setSelected(s)}
                      className={`border-t border-border cursor-pointer hover:bg-primary/5 hover:shadow-inner transition-colors duration-150 ${
                        idx % 2 === 0 ? "bg-background" : "bg-muted/20"
                      }`}
                    >
                      {/* Sr */}
                      <td className="px-3 py-3 text-center text-xs font-bold text-muted-foreground">{s.sr}</td>

                      {/* Photo */}
                      <td className="px-3 py-3 text-center">
                        <img
                          src={s.photo}
                          alt={s.name}
                          className="w-11 h-11 rounded-xl object-cover border-2 border-primary/20 shadow-sm mx-auto hover:scale-110 transition-transform duration-300"
                          onError={(e) => { (e.target as HTMLImageElement).src = fallback(s.name); }}
                        />
                      </td>

                      {/* Name */}
                      <td className="px-3 py-3">
                        <p className="text-xs font-bold text-foreground whitespace-nowrap">{s.name}</p>
                      </td>

                      {/* Designation */}
                      <td className="px-3 py-3">
                        <p className="text-xs text-muted-foreground">{s.designation}</p>
                      </td>

                      {/* Department */}
                      <td className="px-3 py-3">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border whitespace-nowrap ${deptBadge[s.department] ?? "bg-gray-100 text-gray-700 border-gray-200"}`}>
                          {s.department}
                        </span>
                      </td>

                      {/* Qualification */}
                      <td className="px-3 py-3">
                        <p className="text-xs text-muted-foreground">{s.qualification}</p>
                      </td>

                      {/* Specialisation */}
                      <td className="px-3 py-3">
                        <p className="text-xs text-muted-foreground whitespace-nowrap">{s.specialisation}</p>
                      </td>

                      {/* Experience */}
                      <td className="px-3 py-3 text-center">
                        <span className="inline-block bg-indigo-50 text-indigo-700 text-[10px] font-bold px-2.5 py-1 rounded-full border border-indigo-200 whitespace-nowrap">
                          {s.experience} Yrs
                        </span>
                      </td>

                      {/* Publication */}
                      <td className="px-3 py-3 text-center">
                        {s.publications !== "NIL" && s.publications > 0 ? (
                          <span className="inline-block bg-emerald-50 text-emerald-700 text-[10px] font-bold px-2.5 py-1 rounded-full border border-emerald-200">
                            {s.publications}
                          </span>
                        ) : (
                          <span className="text-xs text-muted-foreground">NIL</span>
                        )}
                      </td>

                      {/* Awards */}
                      <td className="px-3 py-3 text-center">
                        {s.awards !== "NIL" && s.awards > 0 ? (
                          <span className="inline-block bg-orange-50 text-orange-700 text-[10px] font-bold px-2.5 py-1 rounded-full border border-orange-200">
                            {s.awards}
                          </span>
                        ) : (
                          <span className="text-xs text-muted-foreground">NIL</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-xs text-muted-foreground mt-3 text-right">
            Total: {teachingStaffData.length} staff members
          </p>
        </div>
      </section>

      {selected && <ProfileModal s={selected} onClose={() => setSelected(null)} />}
    </Layout>
  );
};

export default TeachingStaff;
