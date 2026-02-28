import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";

const Linkages = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <PageHeader
          title="Linkages"
          description="Academic linkages and collaborations."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Academics", href: "/academics/arts" },
            { label: "Linkages" },
          ]}
        />
        <div className="mt-8 bg-card rounded-xl p-6 shadow-soft border border-border">
          <p className="text-foreground mb-6">
            SNBP ACS maintains linkages with SPPU, industries in Pimpri-Chinchwad, and national organizations.
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> SPPU affiliation</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Industry partnerships</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Placement tie-ups</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Linkages;
