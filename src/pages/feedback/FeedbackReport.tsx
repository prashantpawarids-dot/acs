import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";

const FeedbackReport = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <PageHeader
          title="Feedback Report"
          description="Compiled feedback reports at SNBP ACS."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Feedback", href: "/feedback/form" },
            { label: "Report" },
          ]}
        />
        <div className="mt-8 bg-card rounded-xl p-6 shadow-soft border border-border">
          <p className="text-foreground mb-6">
            Feedback reports compile responses from students and stakeholders.
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Summary</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Ratings</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Action items</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default FeedbackReport;
