import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";

const AdmissionProcess = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <PageHeader
          title="Admission Process & Guidelines"
          description="Step-by-step admission process and eligibility criteria."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Academics", href: "/academics/arts" },
            { label: "Admission Process" },
          ]}
        />
        <div className="mt-8 bg-card rounded-xl p-6 shadow-soft border border-border">
          <p className="text-foreground mb-6">
            Admissions at SNBP ACS are conducted as per SPPU guidelines. Apply online or visit campus.
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Online application</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Document verification</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Merit list publication</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Documents: 10th, 12th marksheets, Aadhar, photos</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default AdmissionProcess;
