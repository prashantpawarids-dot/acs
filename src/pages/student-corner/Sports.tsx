import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";

const Sports = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <PageHeader
          title="Sports"
          description="Sports facilities and activities at SNBP ACS."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Student Corner", href: "/student-corner/grievance-cell" },
            { label: "Sports" },
          ]}
        />
        <div className="mt-8 bg-card rounded-xl p-6 shadow-soft border border-border">
          <p className="text-foreground mb-6">
            SNBP ACS promotes sports through annual Sporto-Cultural Carnival and SPPU inter-college tournaments.
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Annual Sports Day</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Cricket, Football, Volleyball</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Indoor: Chess, Carrom, Table Tennis</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Sports;
