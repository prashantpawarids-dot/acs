import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";

const News = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <PageHeader
          title="News / Letters"
          description="News and updates from the college."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Information Corner", href: "/information/circulars/college" },
            { label: "News" },
          ]}
        />
        <div className="mt-8 bg-card rounded-xl p-6 shadow-soft border border-border">
          <p className="text-foreground mb-6">
            Stay updated with achievements, events, and institutional milestones at SNBP ACS.
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Achievements</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Events coverage</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Institutional updates</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default News;
