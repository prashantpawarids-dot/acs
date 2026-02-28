import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";

const Feedback = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <PageHeader
          title="Feedback"
          description="Share your feedback with SNBP ACS."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Feedback" },
          ]}
        />
        <div className="mt-8 bg-card rounded-xl p-6 shadow-soft border border-border">
          <p className="text-foreground mb-6">
            SNBP ACS values feedback from students, parents, alumni, and stakeholders.
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Student feedback</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Parent feedback</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Alumni feedback</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Feedback;
