import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";

const FeedbackAnalysis = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <PageHeader
          title="Feedback Analysis"
          description="Analysis of feedback at SNBP ACS."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Feedback", href: "/feedback/form" },
            { label: "Analysis" },
          ]}
        />
        <div className="mt-8 bg-card rounded-xl p-6 shadow-soft border border-border">
          <p className="text-foreground mb-6">
            IQAC analyzes feedback to identify strengths and areas of improvement.
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Trend analysis</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Strengths</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Recommendations</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default FeedbackAnalysis;
