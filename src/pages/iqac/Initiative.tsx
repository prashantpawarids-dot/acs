import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";

const Initiative = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <PageHeader
          title="IQAC Initiative"
          description="Quality enhancement initiatives."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "IQAC", href: "/iqac/meeting" },
            { label: "Initiative" },
          ]}
        />
        <div className="mt-8 bg-card rounded-xl p-6 shadow-soft border border-border">
          <p className="text-foreground mb-6">
            IQAC undertakes academic audits, feedback analysis, best practices, and benchmarking.
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Quality audits</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Feedback systems</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Best practices</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Initiative;
