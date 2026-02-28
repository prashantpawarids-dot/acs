import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";

const ActionTaken = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <PageHeader
          title="Action Taken Report"
          description="Actions taken based on feedback at SNBP ACS."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Feedback", href: "/feedback/form" },
            { label: "Action Taken" },
          ]}
        />
        <div className="mt-8 bg-card rounded-xl p-6 shadow-soft border border-border">
          <p className="text-foreground mb-6">
            The action taken report documents improvements implemented based on feedback.
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Improvements</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Policy changes</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Infrastructure upgrades</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default ActionTaken;
