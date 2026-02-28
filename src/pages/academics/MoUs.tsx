import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";

const MoUs = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <PageHeader
          title="MoUs"
          description="Memoranda of Understanding with industries and institutions."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Academics", href: "/academics/arts" },
            { label: "MoUs" },
          ]}
        />
        <div className="mt-8 bg-card rounded-xl p-6 shadow-soft border border-border">
          <p className="text-foreground mb-6">
            SNBP ACS has signed MoUs with industries and institutions for internships, research, and placement opportunities.
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Industry collaboration</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Research partnerships</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Placement tie-ups</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default MoUs;
