import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";

const IIQA = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <PageHeader
          title="IIQA"
          description="Institutional Information for Quality Assessment."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "IQAC", href: "/iqac/meeting" },
            { label: "IIQA" },
          ]}
        />
        <div className="mt-8 bg-card rounded-xl p-6 shadow-soft border border-border">
          <p className="text-foreground mb-6">
            IIQA contains institutional profile, quality indicators, and self-assessment data for NAAC.
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Institutional profile</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Quality indicators</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> NAAC preparation</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default IIQA;
