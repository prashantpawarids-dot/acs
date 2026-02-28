import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";

const StartupInnovation = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <PageHeader
          title="Startup & Innovation"
          description="Startup ecosystem at SNBP ACS."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Research & Development", href: "/research/iic" },
            { label: "Startup & Innovation" },
          ]}
        />
        <div className="mt-8 bg-card rounded-xl p-6 shadow-soft border border-border">
          <p className="text-foreground mb-6">
            SNBP ACS encourages entrepreneurship with mentorship, incubation support, and industry connects.
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Incubation support</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Mentorship</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Funding guidance</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default StartupInnovation;
