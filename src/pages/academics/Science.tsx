import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Science = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <PageHeader
          title="Department of Science"
          description="Our Science programs in B.Sc. and related disciplines."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Academics", href: "/academics/arts" },
            { label: "Science" },
          ]}
        />
        <div className="mt-8">
          <p className="text-foreground mb-6">
            The Department of Science offers B.Sc. programs in General Science and Computer Science with well-equipped labs.
          </p>
          <div className="rounded-lg border shadow-sm overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-bold bg-gray-50">Category</TableHead>
                  <TableHead className="font-bold bg-gray-50 text-center">B.Sc. (General)</TableHead>
                  <TableHead className="font-bold bg-gray-50 text-center">B.Sc. (Computer Science)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-semibold bg-gray-50">Course Intake</TableCell>
                  <TableCell className="text-center">60</TableCell>
                  <TableCell className="text-center">60</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold bg-gray-50">Duration</TableCell>
                  <TableCell className="text-center">4 Years</TableCell>
                  <TableCell className="text-center">4 Years</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold bg-gray-50">Eligibility</TableCell>
                  <TableCell>12th PCB/PCM</TableCell>
                  <TableCell>12th with Mathematics</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold bg-gray-50">Fee Structure</TableCell>
                  <TableCell>B.Sc I - Rs. 15,000</TableCell>
                  <TableCell>B.Sc I - Rs. 18,000</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Science;
