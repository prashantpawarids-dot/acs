import React from "react";
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Arts = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <PageHeader
          title="Department of Arts"
          description="Explore our comprehensive Arts programs designed to nurture creativity, critical thinking, and academic excellence."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Academics", href: "/academics" },
            { label: "Department of Arts" },
          ]}
        />

        <div className="mt-8">
          <div className="rounded-lg border shadow-sm overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-bold bg-gray-50">Category</TableHead>
                  <TableHead className="font-bold bg-gray-50 text-center">Bachelor of Arts</TableHead>
                  <TableHead className="font-bold bg-gray-50 text-center">Master of Arts Eco</TableHead>
                  <TableHead className="font-bold bg-gray-50 text-center">Master of Arts Journalism</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-semibold bg-gray-50">Course Intake</TableCell>
                  <TableCell className="text-center">120</TableCell>
                  <TableCell className="text-center">60</TableCell>
                  <TableCell className="text-center">60</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-semibold bg-gray-50">Duration</TableCell>
                  <TableCell className="text-center">4 Years</TableCell>
                  <TableCell className="text-center">2 Years</TableCell>
                  <TableCell className="text-center">2 Years</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-semibold bg-gray-50">Eligibility</TableCell>
                  <TableCell>12th pass in any stream</TableCell>
                  <TableCell>Bachelor in any stream</TableCell>
                  <TableCell>Bachelor in any stream</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-semibold bg-gray-50">Admission Process</TableCell>
                  <TableCell>Online and in Campus enquiry</TableCell>
                  <TableCell>Online and in Campus enquiry</TableCell>
                  <TableCell>Online and in Campus enquiry</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-semibold bg-gray-50">Fee Structure</TableCell>
                  <TableCell>BA I-10000</TableCell>
                  <TableCell>MA I Eco-15000</TableCell>
                  <TableCell>MA I Journalism - 20000</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-semibold bg-gray-50">Documents Required</TableCell>
                  <TableCell>10th and 12th mark sheets, Aadhar card, photos</TableCell>
                  <TableCell>11th, 12th and bachelor mark sheets, Aadhar card, photos</TableCell>
                  <TableCell>11th, 12th and bachelor mark sheets, Aadhar card, photos</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-semibold bg-gray-50">Syllabus Overview</TableCell>
                  <TableCell>
                    <a href="http://collegecirculars.unipune.ac.in/sites/documents/Syllabus2024/Forms/AllItems.aspx" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      View Syllabus
                    </a>
                  </TableCell>
                  <TableCell>
                    <a href="http://collegecirculars.unipune.ac.in/sites/documents/Syllabus2024/Forms/AllItems.aspx" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      View Syllabus
                    </a>
                  </TableCell>
                  <TableCell>
                    <a href="http://collegecirculars.unipune.ac.in/sites/documents/Syllabus2024/Forms/AllItems.aspx" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      View Syllabus
                    </a>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Arts;