import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";

const Meeting = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <PageHeader
          title="IQAC Meeting"
          description="Internal Quality Assurance Cell meetings."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "IQAC", href: "/iqac/meeting" },
            { label: "Meeting" },
          ]}
        />
        <div className="mt-8 bg-card rounded-xl p-6 shadow-soft border border-border">
          <p className="text-foreground mb-6">
            IQAC meets regularly to review academic quality, plan initiatives, and monitor implementation.
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Quarterly meetings</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Quality initiatives</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Action plans</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Meeting;
