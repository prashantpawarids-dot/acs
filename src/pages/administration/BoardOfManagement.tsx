import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";

const BoardOfManagement = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <PageHeader
          title="Board of Management"
          description="The Board of Management oversees the governance and strategic direction of SNBP ACS."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Administration", href: "/administration/code-of-conduct" },
            { label: "Board of Management" },
          ]}
        />
        <div className="mt-8 bg-card rounded-xl p-6 shadow-soft border border-border">
          <p className="text-foreground mb-6">
            The Board of Management at SNBP College of Arts, Commerce, Science & Management Studies is responsible for the overall governance and strategic direction of the institution.
          </p>
          <h3 className="text-lg font-semibold text-foreground mb-3">Key Responsibilities</h3>
          <ul className="space-y-2 text-muted-foreground mb-6">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Policy formulation and approval</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Academic oversight</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Financial planning</li>
          </ul>
          <h3 className="text-lg font-semibold text-foreground mb-3">Board Composition</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Chairman - Dr. D.K. Bhosale</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Secretary - S.E. Society</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Faculty representatives</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default BoardOfManagement;
