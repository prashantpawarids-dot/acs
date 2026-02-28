import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";

const IIC = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <PageHeader
          title="IIC - Institution's Innovation Council"
          description="Innovation and entrepreneurship at SNBP ACS."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Research & Development", href: "/research/iic" },
            { label: "IIC" },
          ]}
        />
        <div className="mt-8 bg-card rounded-xl p-6 shadow-soft border border-border">
          <p className="text-foreground mb-6">
            The IIC promotes innovation, entrepreneurship, hackathons, and startup support at SNBP ACS.
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Innovation workshops</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Hackathons</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> IPR awareness</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default IIC;
