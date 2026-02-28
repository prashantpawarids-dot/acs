import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";

const TeachingNotes = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <PageHeader
          title="Teaching Notes"
          description="Teaching notes and study materials."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Library & Publications", href: "/library/about" },
            { label: "Teaching Notes" },
          ]}
        />
        <div className="mt-8 bg-card rounded-xl p-6 shadow-soft border border-border">
          <p className="text-foreground mb-6">
            Teaching notes, reference materials, previous question papers, and e-resources.
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Subject notes</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Question papers</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> NPTEL, SWAYAM</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default TeachingNotes;
