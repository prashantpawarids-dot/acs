import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";

const DifferentlyAbled = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <PageHeader
          title="Facilities for Differently Abled Students"
          description="Accessibility and support for differently abled students."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Student Corner", href: "/student-corner/grievance-cell" },
            { label: "Differently Abled Facilities" },
          ]}
        />
        <div className="mt-8 bg-card rounded-xl p-6 shadow-soft border border-border">
          <p className="text-foreground mb-6">
            SNBP ACS provides ramp access, reserved seating, and scribe facilities. The Equal Opportunity Cell assists students.
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Wheelchair-accessible ramps</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Reserved seating</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Scribe for examinations</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default DifferentlyAbled;
