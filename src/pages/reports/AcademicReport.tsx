import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";

const AcademicReport = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <PageHeader
          title="Academic Reports"
          description="Annual academic reports at SNBP ACS."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Reports & Downloads", href: "/reports/academic" },
            { label: "Academic" },
          ]}
        />
        <div className="mt-8 bg-card rounded-xl p-6 shadow-soft border border-border">
          <p className="text-foreground mb-6">
            The academic report presents enrollment data, result analysis, and faculty development.
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Enrollment statistics</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Result analysis</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Research output</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default AcademicReport;
