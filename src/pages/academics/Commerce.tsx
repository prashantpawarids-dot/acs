import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Commerce = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <PageHeader
          title="Department of Commerce"
          description="Explore our Commerce programs including B.Com, M.Com and related courses."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Academics", href: "/academics/arts" },
            { label: "Commerce" },
          ]}
        />
        <div className="mt-8">
          <p className="text-foreground mb-6">
            The Department of Commerce at SNBP ACS offers comprehensive programs designed to equip students with business acumen and accounting skills.
          </p>
          <div className="rounded-lg border shadow-sm overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-bold bg-gray-50">Category</TableHead>
                  <TableHead className="font-bold bg-gray-50 text-center">B.Com</TableHead>
                  <TableHead className="font-bold bg-gray-50 text-center">M.Com</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-semibold bg-gray-50">Course Intake</TableCell>
                  <TableCell className="text-center">120</TableCell>
                  <TableCell className="text-center">60</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold bg-gray-50">Duration</TableCell>
                  <TableCell className="text-center">4 Years</TableCell>
                  <TableCell className="text-center">2 Years</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold bg-gray-50">Eligibility</TableCell>
                  <TableCell>12th pass in Commerce/Science/Arts</TableCell>
                  <TableCell>B.Com from recognized university</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold bg-gray-50">Fee Structure</TableCell>
                  <TableCell>B.Com I - Rs. 12,000</TableCell>
                  <TableCell>M.Com I - Rs. 18,000</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Commerce;
