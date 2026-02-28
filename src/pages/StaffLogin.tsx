import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";

const StaffLogin = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <PageHeader
          title="Staff Login"
          description="Login portal for faculty and staff."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Staff Login" },
          ]}
        />
        <div className="mt-8 bg-card rounded-xl p-6 shadow-soft border border-border">
          <p className="text-foreground mb-6">
            Faculty and staff can log in to access attendance, salary slips, leave management, and academic resources.
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Attendance</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Salary slips</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Leave management</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default StaffLogin;
