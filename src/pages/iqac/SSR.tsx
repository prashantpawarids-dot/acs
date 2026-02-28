import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";

const SSR = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <PageHeader
          title="SSR"
          description="Self Study Report for NAAC accreditation."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "IQAC", href: "/iqac/meeting" },
            { label: "SSR" },
          ]}
        />
        <div className="mt-8 bg-card rounded-xl p-6 shadow-soft border border-border">
          <p className="text-foreground mb-6">
            The SSR is prepared for NAAC accreditation. SNBP ACS achieved B++ Grade.
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Executive summary</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> CRITERION-wise data</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> SWOC analysis</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default SSR;
