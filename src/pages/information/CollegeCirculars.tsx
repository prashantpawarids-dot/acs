import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";

const CollegeCirculars = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <PageHeader
          title="College Circulars"
          description="Official circulars and notices from SNBP ACS."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Information Corner", href: "/information/circulars/college" },
            { label: "College Circulars" },
          ]}
        />
        <div className="mt-8 bg-card rounded-xl p-6 shadow-soft border border-border">
          <p className="text-foreground mb-6">
            College circulars include academic notices, holiday lists, examination schedules, and event announcements.
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Academic calendar</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Holiday list</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Examination schedule</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default CollegeCirculars;
