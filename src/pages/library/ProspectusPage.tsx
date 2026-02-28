import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";

const ProspectusPage = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <PageHeader
          title="Library Prospectus"
          description="Library prospectus and resource overview."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Library & Publications", href: "/library/about" },
            { label: "Prospectus" },
          ]}
        />
        <div className="mt-8 bg-card rounded-xl p-6 shadow-soft border border-border">
          <p className="text-foreground mb-6">
            The library prospectus contains collection statistics, services, timings, and membership rules.
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Collection stats</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Services offered</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Membership rules</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default ProspectusPage;
