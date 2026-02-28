import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";

const HealthFacilities = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <PageHeader
          title="Health Facilities"
          description="Medical and health support for students."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Student Corner", href: "/student-corner/grievance-cell" },
            { label: "Health Facilities" },
          ]}
        />
        <div className="mt-8 bg-card rounded-xl p-6 shadow-soft border border-border">
          <p className="text-foreground mb-6">
            SNBP ACS provides first-aid, health check-up camps, and counseling support.
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> First-aid room</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Health check-up camps</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Mental health counseling</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default HealthFacilities;
