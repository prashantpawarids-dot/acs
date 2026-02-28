import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";

const AboutLibrary = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <PageHeader
          title="About Library"
          description="Library resources and facilities at SNBP ACS."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Library & Publications", href: "/library/about" },
            { label: "About Library" },
          ]}
        />
        <div className="mt-8 bg-card rounded-xl p-6 shadow-soft border border-border">
          <p className="text-foreground mb-6">
            The SNBP ACS library houses over 25,000 books, journals, and digital resources.
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> 25,000+ volumes</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Digital resources</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> 9 AM - 5 PM</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default AboutLibrary;
