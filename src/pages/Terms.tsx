import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";

const Terms = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <PageHeader
          title="Terms of Use"
          description="Terms and conditions for using the SNBP ACS website."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Terms of Use" },
          ]}
        />
        <div className="mt-8 bg-card rounded-xl p-6 shadow-soft border border-border">
          <p className="text-foreground mb-6">
            By using the SNBP ACS website, you agree to these terms and conditions.
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Acceptable use</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Intellectual property</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Disclaimer</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;
