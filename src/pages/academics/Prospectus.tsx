import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";

const Prospectus = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <PageHeader
          title="Prospectus"
          description="Download the college prospectus with complete information."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Academics", href: "/academics/arts" },
            { label: "Prospectus" },
          ]}
        />
        <div className="mt-8 bg-card rounded-xl p-6 shadow-soft border border-border">
          <p className="text-foreground mb-6">
            The SNBP ACS prospectus contains information about programs, fee structure, infrastructure, and admission procedures. Download from the Downloads section.
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Program overview</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Fee structure</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Infrastructure</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Prospectus;
