import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";
import { Card, CardContent } from "@/components/ui/card";

const committeeMembers = [
  { no: 1, name: "Mr. Kiran Shewale",    designation: "Committee Head", representation: "Librarian" },
  { no: 2, name: "Dr. Sudhir Atwadkar", designation: "Member",         representation: "Vice Principal" },
  { no: 3, name: "Mrs. Gauri Shirude",   designation: "Member",         representation: "Academic Head / CEO" },
  { no: 4, name: "Mr. Amol Bade",        designation: "Member",         representation: "Coordinator (BA)" },
  { no: 5, name: "Mrs. Sushma Pingale",  designation: "Member",         representation: "Training & Placement Officer" },
  { no: 6, name: "Mrs. Manisha Dhaybar", designation: "Member",         representation: "Coordinator BSc (CS)" },
  { no: 7, name: "Mr. Atul Jadhav",      designation: "Member",         representation: "Faculty Member" },
];

const workingHours = [
  { days: "Working Days",    time: "9.00 a.m. To 4.00 p.m." },
  { days: "Examination Days", time: "9.00 a.m. To 6.00 p.m." },
  { days: "During Vacation", time: "9.00 a.m. To 3.00 p.m." },
  { days: "On Holidays",     time: "Restricted" },
];

const layoutAreas = [
  { particulars: "Individual reading carrels",             area: "1500 sq. ft." },
  { particulars: "Lounge area for browsing and relaxed reading", area: "500 sq. ft." },
  { particulars: "IT zone for accessing e-resources",      area: "500 sq. ft." },
];

const policyPoints = [
  "Preparation of the budget with Library Committee including infrastructure and resources to ensure purchase of reading materials.",
  "The library regularly entertains requisitions for books, journals, magazines and other reading materials from staff and students and tries to acquire the same at the earliest.",
  "The publisher's catalogues are received in the library periodically. Then they are circulated to the concerned departments. The books for purchases are recommended and they are placed on approval through local vendors for selection by the Staff.",
  "Once the proposed books are received the faculty members review and then the order is placed for the same.",
  "The current titles purchased by the library are regularly displayed in library, staff room and students notice board for their references.",
  "Library receives books on approval from local vendors on regular basis. These books are displayed in the library and concerned faculty is informed about the arrival for selection.",
  "The library conducts the books fair and exhibition wherein teachers and students participate and recommend books for the library.",
  "To develop, organize and enhance the library resources and services to fulfill the demands in terms of curricular, instructional and research for students and staff.",
  "To provide seamless access to comprehensive, quality resources in physical and digital formats in support of teaching, research and learning needs of the students and staff.",
];

const AboutLibrary = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8 px-4">
        <PageHeader
          title="About Library"
          description="Library resources and facilities at SNBP ACS."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Library & Publications", href: "/library/about" },
            { label: "About Library" },
          ]}
        />

        {/* Intro */}
        <Card className="mt-8">
          <CardContent className="pt-6 pb-5">
            <h2 className="text-lg font-bold text-foreground mb-3">Library as Learning Resources</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The library of the College was established in 2008, since then library has made consistent progress
              in terms of collection of books, periodicals, e-resources and services. The college library has a
              furnished room. It provides open access facilities which helps easy access and use of the library
              as a learning knowledge centre which have partially automated. Since the college is in the morning
              session the reading rooms cum classes are available for the students after 1.00 pm. The college has
              very enriched in terms of availability of reference books and text books. The library has total
              <strong className="text-foreground"> 1446 text</strong> and <strong className="text-foreground">547 reference books</strong>,{" "}
              <strong className="text-foreground">12 Journals and Magazines</strong> and{" "}
              <strong className="text-foreground">5 Newspapers</strong>.
            </p>
          </CardContent>
        </Card>

        {/* Library Committee */}
        <Card className="mt-6">
          <CardContent className="pt-6 pb-5">
            <h2 className="text-lg font-bold text-foreground mb-4">Library Committee</h2>
            <div className="rounded-xl border border-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-primary text-primary-foreground">
                      <th className="px-4 py-3 text-left font-semibold w-12">No.</th>
                      <th className="px-4 py-3 text-left font-semibold">Name</th>
                      <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">Designation</th>
                      <th className="px-4 py-3 text-left font-semibold">Representation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {committeeMembers.map((m, idx) => (
                      <tr key={m.no} className={`border-t border-border hover:bg-muted/50 transition-colors ${idx % 2 === 0 ? "bg-background" : "bg-muted/20"}`}>
                        <td className="px-4 py-3 font-bold text-primary text-center">{m.no}</td>
                        <td className="px-4 py-3 font-medium text-foreground">{m.name}</td>
                        <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">{m.designation}</td>
                        <td className="px-4 py-3 text-muted-foreground">{m.representation}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />The Library Committee meets periodically to discuss on various aspects for enhancement and effective use of library facilities.</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />The Library Committee prepares budget for the purchase of books, journals, other reading materials and augmentation of infrastructure. The Library Committee and IQAC have recommended enhancement of computer facilities and total automation of the library.</li>
            </ul>
          </CardContent>
        </Card>

        {/* Infrastructure */}
        <Card className="mt-6">
          <CardContent className="pt-6 pb-5">
            <h2 className="text-lg font-bold text-foreground mb-4">Library Infrastructure</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="rounded-xl bg-muted/40 border border-border px-5 py-4">
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1">Total Area</p>
                <p className="text-2xl font-extrabold text-primary">2500 <span className="text-sm font-medium text-muted-foreground">sq. ft.</span></p>
              </div>
              <div className="rounded-xl bg-muted/40 border border-border px-5 py-4">
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1">Seating Capacity</p>
                <p className="text-2xl font-extrabold text-primary">50 <span className="text-sm font-medium text-muted-foreground">Nos.</span></p>
              </div>
            </div>

            {/* Working Hours */}
            <h3 className="text-sm font-bold text-foreground mb-3">Working Hours</h3>
            <div className="rounded-xl border border-border overflow-hidden mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="px-4 py-3 text-left font-semibold">Days</th>
                    <th className="px-4 py-3 text-left font-semibold">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {workingHours.map((w, idx) => (
                    <tr key={w.days} className={`border-t border-border hover:bg-muted/50 transition-colors ${idx % 2 === 0 ? "bg-background" : "bg-muted/20"}`}>
                      <td className="px-4 py-3 font-medium text-foreground">{w.days}</td>
                      <td className="px-4 py-3 text-muted-foreground">{w.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Layout */}
            <h3 className="text-sm font-bold text-foreground mb-3">Layout of the Library</h3>
            <div className="rounded-xl border border-border overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="px-4 py-3 text-left font-semibold">Particulars</th>
                    <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">Area</th>
                  </tr>
                </thead>
                <tbody>
                  {layoutAreas.map((l, idx) => (
                    <tr key={l.particulars} className={`border-t border-border hover:bg-muted/50 transition-colors ${idx % 2 === 0 ? "bg-background" : "bg-muted/20"}`}>
                      <td className="px-4 py-3 font-medium text-foreground">{l.particulars}</td>
                      <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">{l.area}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Policy */}
        <Card className="mt-6 mb-4">
          <CardContent className="pt-6 pb-5">
            <h2 className="text-lg font-bold text-foreground mb-4">Library Policy & IT Facilities</h2>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Library has well-organized and specific racks for reference section, periodical section and book bank
              section to facilitate easy accessibility. IT facilities exist in the library. In order to improve the
              teaching and learning updated information is required. The library adopted a well-defined policy to
              accumulate reading materials. The following steps are adhered to:
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {policyPoints.map((p, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                  {p}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

      </div>
    </Layout>
  );
};

export default AboutLibrary;