import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";

const FeesChart = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <PageHeader
          title="Fees Chart"
          description="Detailed fee structure for all programs at SNBP ACS."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Academics", href: "/academics/arts" },
            { label: "Fees Chart" },
          ]}
        />
        <div className="mt-8 bg-card rounded-xl p-6 shadow-soft border border-border">
          <p className="text-foreground mb-6">
            Fee structure varies by program. BA/B.Com: Rs. 10,000-12,000 per year. B.Sc/BCA: Rs. 15,000-18,000 per year. BBA: Rs. 20,000 per year.
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Tuition fees by program</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Examination fees (SPPU)</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Library and lab fees</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default FeesChart;
