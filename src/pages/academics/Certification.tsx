import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";

const Certification = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <PageHeader
          title="Online / Offline Certification"
          description="Certificate courses and skill development programs at SNBP ACS."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Academics", href: "/academics/arts" },
            { label: "Certification" },
          ]}
        />
        <div className="mt-8 bg-card rounded-xl p-6 shadow-soft border border-border">
          <p className="text-foreground mb-6">
            SNBP ACS offers various online and offline certification courses in collaboration with industry partners and SPPU.
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Skill development programs</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Add-on courses (Tally, GST)</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Industry certifications</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> NPTEL and SWAYAM</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Certification;
