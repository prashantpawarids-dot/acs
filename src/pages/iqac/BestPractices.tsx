import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";

const BestPractices = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <PageHeader
          title="Best Practices"
          description="Best practices adopted by SNBP ACS."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "IQAC", href: "/iqac/meeting" },
            { label: "Best Practices" },
          ]}
        />
        <div className="mt-8 bg-card rounded-xl p-6 shadow-soft border border-border">
          <p className="text-foreground mb-6">
            SNBP ACS has adopted best practices in teaching-learning, student support, innovation.
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Student mentoring</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Digital learning</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Transparent governance</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default BestPractices;
