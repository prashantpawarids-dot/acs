import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";

const AQAR = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <PageHeader
          title="AQAR"
          description="Annual Quality Assurance Report."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "IQAC", href: "/iqac/meeting" },
            { label: "AQAR" },
          ]}
        />
        <div className="mt-8 bg-card rounded-xl p-6 shadow-soft border border-border">
          <p className="text-foreground mb-6">
            The AQAR documents IQAC activities, outcomes achieved, and best practices for the academic year.
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Annual activities</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Outcomes achieved</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Best practices</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default AQAR;
