// import { Layout } from "@/components/layout/Layout";
// import { PageHeader } from "@/components/common/PageHeader";
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

// const Science = () => {
//   return (
//     <Layout>
//       <div className="container mx-auto py-8">
//         <PageHeader
//           title="Department of Science"
//           description="Our Science programs in B.Sc. and related disciplines."
//           breadcrumbs={[
//             { label: "Home", href: "/" },
//             { label: "Academics", href: "/academics/arts" },
//             { label: "Science" },
//           ]}
//         />
//         <div className="mt-8">
//           <p className="text-foreground mb-6">
//             The Department of Science offers B.Sc. programs in General Science and Computer Science with well-equipped labs.
//           </p>
//           <div className="rounded-lg border shadow-sm overflow-hidden">
//             <Table>
//               <TableHeader>
//                 <TableRow>
//                   <TableHead className="font-bold bg-gray-50">Category</TableHead>
//                   <TableHead className="font-bold bg-gray-50 text-center">B.Sc. (General)</TableHead>
//                   <TableHead className="font-bold bg-gray-50 text-center">B.Sc. (Computer Science)</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 <TableRow>
//                   <TableCell className="font-semibold bg-gray-50">Course Intake</TableCell>
//                   <TableCell className="text-center">60</TableCell>
//                   <TableCell className="text-center">60</TableCell>
//                 </TableRow>
//                 <TableRow>
//                   <TableCell className="font-semibold bg-gray-50">Duration</TableCell>
//                   <TableCell className="text-center">4 Years</TableCell>
//                   <TableCell className="text-center">4 Years</TableCell>
//                 </TableRow>
//                 <TableRow>
//                   <TableCell className="font-semibold bg-gray-50">Eligibility</TableCell>
//                   <TableCell>12th PCB/PCM</TableCell>
//                   <TableCell>12th with Mathematics</TableCell>
//                 </TableRow>
//                 <TableRow>
//                   <TableCell className="font-semibold bg-gray-50">Fee Structure</TableCell>
//                   <TableCell>B.Sc I - Rs. 15,000</TableCell>
//                   <TableCell>B.Sc I - Rs. 18,000</TableCell>
//                 </TableRow>
//               </TableBody>
//             </Table>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Science;


import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const courses = [
  {
    name: "Bachelor of Science (General)",
    short: "B.Sc. General",
    intake: "60",
    duration: "4 Years",
    eligibility: "12th PCB / PCM",
    admission: "Online and in Campus enquiry",
    fee: "B.Sc I — ₹15,000",
    docs: "10th and 12th mark sheets, Aadhar card, photos",
    syllabus: "http://collegecirculars.unipune.ac.in/sites/documents/Syllabus2024/Forms/AllItems.aspx",
    color: "border-t-emerald-500",
    badge: "bg-emerald-100 text-emerald-700",
  },
  {
    name: "Bachelor of Science (Computer Science)",
    short: "B.Sc. CS",
    intake: "60",
    duration: "4 Years",
    eligibility: "12th with Mathematics",
    admission: "Online and in Campus enquiry",
    fee: "B.Sc I — ₹18,000",
    docs: "10th and 12th mark sheets, Aadhar card, photos",
    syllabus: "http://collegecirculars.unipune.ac.in/sites/documents/Syllabus2024/Forms/AllItems.aspx",
    color: "border-t-purple-500",
    badge: "bg-purple-100 text-purple-700",
  },
];

const rows = [
  { label: "Course Intake",      key: "intake" },
  { label: "Duration",           key: "duration" },
  { label: "Eligibility",        key: "eligibility" },
  { label: "Admission Process",  key: "admission" },
  { label: "Fee Structure",      key: "fee" },
  { label: "Documents Required", key: "docs" },
];

const Science = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8 px-4">
        <PageHeader
          title="Department of Science"
          description="Our Science programs in B.Sc. and related disciplines."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Academics", href: "/academics/arts" },
            { label: "Science" },
          ]}
        />

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
          {courses.map((c) => (
            <Card key={c.short} className={`border-t-4 ${c.color} rounded-2xl hover:-translate-y-1 hover:shadow-xl transition-all duration-300`}>
              <CardContent className="pt-5 pb-5 px-5">
                <Badge className={`text-xs mb-3 ${c.badge}`}>{c.short}</Badge>
                <h3 className="text-base font-bold text-foreground mb-4">{c.name}</h3>
                <div className="space-y-2 text-sm">
                  {rows.map((r) => (
                    <div key={r.key} className="flex flex-col gap-0.5">
                      <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">{r.label}</span>
                      <span className="text-foreground">{c[r.key as keyof typeof c] as string}</span>
                    </div>
                  ))}
                </div>
                <Button size="sm" variant="outline" className="rounded-full gap-2 w-full mt-5" asChild>
                  <a href={c.syllabus} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-3.5 h-3.5" />
                    View Syllabus
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Comparison Table */}
        <Card className="mt-8">
          <CardContent className="pt-5 pb-2 px-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="px-5 py-3 text-left font-semibold w-44">Category</th>
                    {courses.map((c) => (
                      <th key={c.short} className="px-5 py-3 text-center font-semibold whitespace-nowrap">{c.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r, idx) => (
                    <tr key={r.key} className={`border-t border-border hover:bg-muted/40 transition-colors ${idx % 2 === 0 ? "bg-background" : "bg-muted/20"}`}>
                      <td className="px-5 py-3 font-semibold text-foreground whitespace-nowrap">{r.label}</td>
                      {courses.map((c) => (
                        <td key={c.short} className="px-5 py-3 text-center text-muted-foreground">
                          {c[r.key as keyof typeof c] as string}
                        </td>
                      ))}
                    </tr>
                  ))}
                  <tr className="border-t border-border bg-muted/20">
                    <td className="px-5 py-3 font-semibold text-foreground">Syllabus</td>
                    {courses.map((c) => (
                      <td key={c.short} className="px-5 py-3 text-center">
                        <a href={c.syllabus} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-xs font-medium">
                          View Syllabus
                        </a>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

      </div>
    </Layout>
  );
};

export default Science;