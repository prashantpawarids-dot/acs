import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";

const Announcements = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <PageHeader
          title="Announcements"
          description="Latest announcements from SNBP ACS."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Information Corner", href: "/information/circulars/college" },
            { label: "Announcements" },
          ]}
        />
        <div className="mt-8 bg-card rounded-xl p-6 shadow-soft border border-border">
          <p className="text-foreground mb-6">
            Important announcements regarding admissions, examinations, placements, and events.
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Admissions</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Examinations</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Placements</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Announcements;
