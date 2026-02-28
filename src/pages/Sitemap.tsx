import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";
import { Link } from "react-router-dom";

const Sitemap = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <PageHeader
          title="Sitemap"
          description="Complete sitemap of the SNBP ACS website."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Sitemap" },
          ]}
        />
        <div className="mt-8 bg-card rounded-xl p-6 shadow-soft border border-border">
          <p className="text-foreground mb-6">
            Navigate through all sections of the SNBP ACS website.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
            <ul className="space-y-2">
              <li><Link to="/about/se-society" className="hover:text-primary">About Us</Link></li>
              <li><Link to="/academics/arts" className="hover:text-primary">Academics</Link></li>
              <li><Link to="/administration/code-of-conduct" className="hover:text-primary">Administration</Link></li>
              <li><Link to="/placement/training-activities" className="hover:text-primary">Placements</Link></li>
              <li><Link to="/downloads" className="hover:text-primary">Downloads</Link></li>
              <li><Link to="/gallery" className="hover:text-primary">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
            <ul className="space-y-2">
              <li><Link to="/library/about" className="hover:text-primary">Library</Link></li>
              <li><Link to="/reports/academic" className="hover:text-primary">Reports</Link></li>
              <li><Link to="/iqac/meeting" className="hover:text-primary">IQAC</Link></li>
              <li><Link to="/feedback/form" className="hover:text-primary">Feedback</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Sitemap;
