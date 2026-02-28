import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";

const IICReport = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <PageHeader
          title="IIC Reports"
          description="IIC activity reports at SNBP ACS."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Reports & Downloads", href: "/reports/academic" },
            { label: "IIC" },
          ]}
        />
        <div className="mt-8 bg-card rounded-xl p-6 shadow-soft border border-border">
          <p className="text-foreground mb-6">
            The IIC report documents innovation activities, startup support, and workshops.
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Innovation workshops</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Startup support</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Hackathons</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default IICReport;
