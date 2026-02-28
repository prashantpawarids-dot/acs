import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";

const NSS = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <PageHeader
          title="NSS"
          description="National Service Scheme activities at SNBP ACS."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Student Corner", href: "/student-corner/grievance-cell" },
            { label: "NSS" },
          ]}
        />
        <div className="mt-8 bg-card rounded-xl p-6 shadow-soft border border-border">
          <p className="text-foreground mb-6">
            The NSS unit undertakes blood donation camps, Swachhata Abhiyan, voter awareness, and community service.
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Blood donation camps</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Swachhata Abhiyan</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Village adoption</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default NSS;
