import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";

const Calendar = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <PageHeader
          title="IQAC Calendar"
          description="IQAC activities calendar."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "IQAC", href: "/iqac/meeting" },
            { label: "Calendar" },
          ]}
        />
        <div className="mt-8 bg-card rounded-xl p-6 shadow-soft border border-border">
          <p className="text-foreground mb-6">
            The IQAC calendar lists meeting schedules, workshop dates, and reporting deadlines.
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Meeting schedules</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Workshop dates</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Reporting deadlines</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Calendar;
