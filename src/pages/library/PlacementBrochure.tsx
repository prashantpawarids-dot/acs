import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const BASE_URL = import.meta.env.VITE_STATIC_ASSETS;

const PlacementBrochure = () => {
  return (
    <Layout>
      <PageHeader
        title="Placement Brochure"
        description="Placement brochure at SNBP ACS."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Library & Publications", href: "/library/about" },
          { label: "Placement Brochure" },
        ]}
      />

      <section className="py-8">
        <div className="container px-4">

          {/* Info card */}
          <div className="bg-card rounded-xl p-6 shadow-soft border border-border mb-8">
            <p className="text-foreground mb-4">
              The placement brochure highlights programs, infrastructure, faculty, and placement statistics.
            </p>
           
          </div>

          {/* PDF Card */}
          <div className="flex justify-center">
            <div
              onClick={() => window.open(`${BASE_URL}/PDF/library/PlacementBroucher.pdf`, "_blank")}
              className="w-52 text-center cursor-pointer transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl border border-border rounded-2xl border-t-4 border-t-emerald-600 p-5 flex flex-col items-center gap-3 bg-card"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/337/337946.png"
                alt="PDF"
                className="w-20 drop-shadow-xl"
              />
              <p className="text-xs font-semibold text-foreground text-center leading-snug">
                Placement Brochure
              </p>
              <Button size="sm" className="rounded-full gap-2 w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                <ExternalLink className="w-3.5 h-3.5" /> View PDF
              </Button>
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
};

export default PlacementBrochure;