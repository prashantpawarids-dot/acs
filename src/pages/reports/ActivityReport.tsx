import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";

const ActivityReport = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <PageHeader
          title="Activity Reports"
          description="Co-curricular activity reports at SNBP ACS."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Reports & Downloads", href: "/reports/academic" },
            { label: "Activity" },
          ]}
        />
        <div className="mt-8 bg-card rounded-xl p-6 shadow-soft border border-border">
          <p className="text-foreground mb-6">
            The activity report documents sports, cultural events, NSS, and workshops.
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Sports</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Cultural events</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> NSS, Workshops</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default ActivityReport;
