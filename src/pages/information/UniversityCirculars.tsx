import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";

const UniversityCirculars = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <PageHeader
          title="University Circulars"
          description="Circulars from Savitribai Phule Pune University."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Information Corner", href: "/information/circulars/college" },
            { label: "University Circulars" },
          ]}
        />
        <div className="mt-8 bg-card rounded-xl p-6 shadow-soft border border-border">
          <p className="text-foreground mb-6">
            SPPU circulars regarding examinations, syllabus, academic calendar, and policy changes.
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Exam notifications</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Syllabus updates</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Academic calendar</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default UniversityCirculars;
