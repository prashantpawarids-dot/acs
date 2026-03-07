// import React from "react";
// import { Layout } from "@/components/layout/Layout";
// import { PageHeader } from "@/components/common/PageHeader";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";

// const Arts = () => {
//   return (
//     <Layout>
//       <div className="container mx-auto py-8">
//         <PageHeader
//           title="Department of Arts"
//           description="Explore our comprehensive Arts programs designed to nurture creativity, critical thinking, and academic excellence."
//           breadcrumbs={[
//             { label: "Home", href: "/" },
//             { label: "Academics", href: "/academics" },
//             { label: "Department of Arts" },
//           ]}
//         />

//         <div className="mt-8">
//           <div className="rounded-lg border shadow-sm overflow-hidden">
//             <Table>
//               <TableHeader>
//                 <TableRow>
//                   <TableHead className="font-bold bg-gray-50">Category</TableHead>
//                   <TableHead className="font-bold bg-gray-50 text-center">Bachelor of Arts</TableHead>
//                   <TableHead className="font-bold bg-gray-50 text-center">Master of Arts Eco</TableHead>
//                   <TableHead className="font-bold bg-gray-50 text-center">Master of Arts Journalism</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 <TableRow>
//                   <TableCell className="font-semibold bg-gray-50">Course Intake</TableCell>
//                   <TableCell className="text-center">120</TableCell>
//                   <TableCell className="text-center">60</TableCell>
//                   <TableCell className="text-center">60</TableCell>
//                 </TableRow>

//                 <TableRow>
//                   <TableCell className="font-semibold bg-gray-50">Duration</TableCell>
//                   <TableCell className="text-center">4 Years</TableCell>
//                   <TableCell className="text-center">2 Years</TableCell>
//                   <TableCell className="text-center">2 Years</TableCell>
//                 </TableRow>

//                 <TableRow>
//                   <TableCell className="font-semibold bg-gray-50">Eligibility</TableCell>
//                   <TableCell>12th pass in any stream</TableCell>
//                   <TableCell>Bachelor in any stream</TableCell>
//                   <TableCell>Bachelor in any stream</TableCell>
//                 </TableRow>

//                 <TableRow>
//                   <TableCell className="font-semibold bg-gray-50">Admission Process</TableCell>
//                   <TableCell>Online and in Campus enquiry</TableCell>
//                   <TableCell>Online and in Campus enquiry</TableCell>
//                   <TableCell>Online and in Campus enquiry</TableCell>
//                 </TableRow>

//                 <TableRow>
//                   <TableCell className="font-semibold bg-gray-50">Fee Structure</TableCell>
//                   <TableCell>BA I-10000</TableCell>
//                   <TableCell>MA I Eco-15000</TableCell>
//                   <TableCell>MA I Journalism - 20000</TableCell>
//                 </TableRow>

//                 <TableRow>
//                   <TableCell className="font-semibold bg-gray-50">Documents Required</TableCell>
//                   <TableCell>10th and 12th mark sheets, Aadhar card, photos</TableCell>
//                   <TableCell>11th, 12th and bachelor mark sheets, Aadhar card, photos</TableCell>
//                   <TableCell>11th, 12th and bachelor mark sheets, Aadhar card, photos</TableCell>
//                 </TableRow>

//                 <TableRow>
//                   <TableCell className="font-semibold bg-gray-50">Syllabus Overview</TableCell>
//                   <TableCell>
//                     <a href="http://collegecirculars.unipune.ac.in/sites/documents/Syllabus2024/Forms/AllItems.aspx" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
//                       View Syllabus
//                     </a>
//                   </TableCell>
//                   <TableCell>
//                     <a href="http://collegecirculars.unipune.ac.in/sites/documents/Syllabus2024/Forms/AllItems.aspx" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
//                       View Syllabus
//                     </a>
//                   </TableCell>
//                   <TableCell>
//                     <a href="http://collegecirculars.unipune.ac.in/sites/documents/Syllabus2024/Forms/AllItems.aspx" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
//                       View Syllabus
//                     </a>
//                   </TableCell>
//                 </TableRow>
//               </TableBody>
//             </Table>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Arts;

import React from "react";
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const courses = [
  {
    name: "Bachelor of Arts",
    short: "B.A.",
    intake: "120",
    duration: "4 Years",
    eligibility: "12th pass in any stream",
    admission: "Online and in Campus enquiry",
    fee: "BA I — ₹10,000",
    docs: "10th and 12th mark sheets, Aadhar card, photos",
    syllabus: "http://collegecirculars.unipune.ac.in/sites/documents/Syllabus2024/Forms/AllItems.aspx",
    color: "border-t-blue-500",
    badge: "bg-blue-100 text-blue-700",
  },
  {
    name: "Master of Arts (Economics)",
    short: "M.A. Eco",
    intake: "60",
    duration: "2 Years",
    eligibility: "Bachelor in any stream",
    admission: "Online and in Campus enquiry",
    fee: "MA I Eco — ₹15,000",
    docs: "11th, 12th and bachelor mark sheets, Aadhar card, photos",
    syllabus: "http://collegecirculars.unipune.ac.in/sites/documents/Syllabus2024/Forms/AllItems.aspx",
    color: "border-t-emerald-500",
    badge: "bg-emerald-100 text-emerald-700",
  },
  {
    name: "Master of Arts (Journalism)",
    short: "M.A. Journalism",
    intake: "60",
    duration: "2 Years",
    eligibility: "Bachelor in any stream",
    admission: "Online and in Campus enquiry",
    fee: "MA I Journalism — ₹20,000",
    docs: "11th, 12th and bachelor mark sheets, Aadhar card, photos",
    syllabus: "http://collegecirculars.unipune.ac.in/sites/documents/Syllabus2024/Forms/AllItems.aspx",
    color: "border-t-orange-500",
    badge: "bg-orange-100 text-orange-700",
  },
];

const rows = [
  { label: "Course Intake",       key: "intake" },
  { label: "Duration",            key: "duration" },
  { label: "Eligibility",         key: "eligibility" },
  { label: "Admission Process",   key: "admission" },
  { label: "Fee Structure",       key: "fee" },
  { label: "Documents Required",  key: "docs" },
];

const Arts = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8 px-4">
        <PageHeader
          title="Department of Arts"
          description="Explore our comprehensive Arts programs designed to nurture creativity, critical thinking, and academic excellence."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Academics", href: "/academics" },
            { label: "Department of Arts" },
          ]}
        />

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
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

export default Arts;