import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";

const Publications = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <PageHeader
          title="Research & Publication"
          description="Research publications at SNBP ACS."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Research & Development", href: "/research/iic" },
            { label: "Publications" },
          ]}
        />
        <div className="mt-8 bg-card rounded-xl p-6 shadow-soft border border-border">
          <p className="text-foreground mb-6">
            Faculty and students publish research in national and international journals.
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Journal papers</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Conference proceedings</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Student research</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Publications;
