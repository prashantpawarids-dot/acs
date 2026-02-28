import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const activities = [
  { sr: 1,  date: "10-07-24", program: "Personality Development Workshop",            type: "Soft Skills",        organiser: "T & P Cell", dept: "All" },
  { sr: 2,  date: "22-07-24", program: "Communication Skills Training",               type: "Soft Skills",        organiser: "T & P Cell", dept: "All" },
  { sr: 3,  date: "05-08-24", program: "Aptitude Test Preparation – Quantitative",    type: "Aptitude",           organiser: "T & P Cell", dept: "Commerce & Science" },
  { sr: 4,  date: "14-08-24", program: "Group Discussion Practice Sessions",          type: "Interview Prep",     organiser: "T & P Cell", dept: "All" },
  { sr: 5,  date: "26-08-24", program: "Resume Writing & LinkedIn Profile Building",  type: "Career Readiness",   organiser: "T & P Cell", dept: "All" },
  { sr: 6,  date: "09-09-24", program: "Mock Interview Sessions",                     type: "Interview Prep",     organiser: "T & P Cell", dept: "All" },
  { sr: 7,  date: "18-09-24", program: "Logical Reasoning & Verbal Ability",          type: "Aptitude",           organiser: "T & P Cell", dept: "Arts & Commerce" },
  { sr: 8,  date: "30-09-24", program: "Tally & Accounting Software Training",        type: "Technical",          organiser: "T & P Cell", dept: "Commerce" },
  { sr: 9,  date: "14-10-24", program: "MS Office & Digital Literacy Program",        type: "Technical",          organiser: "T & P Cell", dept: "All" },
  { sr: 10, date: "28-10-24", program: "Email & Business Etiquette Workshop",         type: "Soft Skills",        organiser: "T & P Cell", dept: "All" },
  { sr: 11, date: "11-11-24", program: "Competitive Exam Guidance – UPSC / MPSC",     type: "Career Readiness",   organiser: "T & P Cell", dept: "Arts" },
  { sr: 12, date: "25-11-24", program: "Banking & Finance Career Seminar",            type: "Career Readiness",   organiser: "T & P Cell", dept: "Commerce" },
  { sr: 13, date: "09-12-24", program: "Data Entry & Typing Speed Certification",     type: "Technical",          organiser: "T & P Cell", dept: "All" },
  { sr: 14, date: "06-01-25", program: "Entrepreneurship & Start-up Awareness",       type: "Career Readiness",   organiser: "IIC Cell",   dept: "All" },
  { sr: 15, date: "20-01-25", program: "Aptitude Test – Full Mock Drive",             type: "Aptitude",           organiser: "T & P Cell", dept: "All" },
  { sr: 16, date: "03-02-25", program: "Final Placement Readiness Workshop",          type: "Interview Prep",     organiser: "T & P Cell", dept: "All" },
];

const typeVariant: Record<string, "default" | "secondary" | "outline" | "destructive"> = {
  "Soft Skills":      "default",
  "Aptitude":         "secondary",
  "Interview Prep":   "destructive",
  "Technical":        "outline",
  "Career Readiness": "secondary",
};

const summary = [
  { label: "Total Sessions", value: activities.length },
  { label: "Soft Skills", value: activities.filter(a => a.type === "Soft Skills").length },
  { label: "Aptitude", value: activities.filter(a => a.type === "Aptitude").length },
  { label: "Interview Prep", value: activities.filter(a => a.type === "Interview Prep").length },
];

const TrainingActivities = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8 px-4">
        <PageHeader
          title="Training Activities"
          description="Pre-placement and skill development at SNBP ACS."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Placement & Career", href: "/placement/training-activities" },
            { label: "Training Activities" },
          ]}
        />

        {/* Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {summary.map((s) => (
            <Card key={s.label} className="text-center hover:-translate-y-1 hover:shadow-md transition-all duration-300">
              <CardContent className="pt-5 pb-4">
                <div className="text-3xl font-extrabold text-primary">{s.value}</div>
                <div className="text-xs text-muted-foreground mt-1 font-medium">{s.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Table */}
        <div className="mt-8">
          <div className="flex flex-col items-center mb-4 gap-1">
            <h2 className="text-lg font-semibold text-foreground">Academic Year: 2024–25</h2>
            <span className="text-sm text-muted-foreground">{activities.length} Sessions Conducted</span>
          </div>

          <div className="rounded-xl border border-border overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="px-4 py-3 text-left font-semibold w-12">Sr.</th>
                    <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">Date</th>
                    <th className="px-4 py-3 text-left font-semibold">Name of Program</th>
                    <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">Type</th>
                    <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">Department</th>
                    <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">Organiser</th>
                  </tr>
                </thead>
                <tbody>
                  {activities.map((a, idx) => (
                    <tr
                      key={a.sr}
                      className={`border-t border-border transition-colors hover:bg-muted/50 ${idx % 2 === 0 ? "bg-background" : "bg-muted/20"}`}
                    >
                      <td className="px-4 py-3 font-bold text-primary text-center">{a.sr}</td>
                      <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">{a.date}</td>
                      <td className="px-4 py-3 font-medium text-foreground">{a.program}</td>
                      <td className="px-4 py-3">
                        <Badge variant={typeVariant[a.type] ?? "outline"} className="whitespace-nowrap text-xs">
                          {a.type}
                        </Badge>
                      </td>
                      <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">{a.dept}</td>
                      <td className="px-4 py-3 text-muted-foreground font-medium whitespace-nowrap">{a.organiser}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TrainingActivities;