import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";

const Privacy = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <PageHeader
          title="Privacy Policy"
          description="Privacy policy at SNBP ACS."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Privacy Policy" },
          ]}
        />
        <div className="mt-8 bg-card rounded-xl p-6 shadow-soft border border-border">
          <p className="text-foreground mb-6">
            SNBP ACS respects your privacy. This policy describes how we collect, use, and protect your information.
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Data collection</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Security measures</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> User rights</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;
