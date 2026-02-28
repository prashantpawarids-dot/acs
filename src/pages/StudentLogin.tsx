import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";

const StudentLogin = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <PageHeader
          title="Student Login"
          description="Login portal for students."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Student Login" },
          ]}
        />
        <div className="mt-8 bg-card rounded-xl p-6 shadow-soft border border-border">
          <p className="text-foreground mb-6">
            Students can log in to access academic records, fee payment, examination, and placement portal.
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Academic records</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Fee payment</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Placement portal</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default StudentLogin;
