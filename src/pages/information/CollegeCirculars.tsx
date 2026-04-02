import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const BASE_URL = import.meta.env.VITE_STATIC_ASSETS;
const PDF_URL = `${BASE_URL}/PDF/informationcorner/CircularsandNotice.pdf`;

const CollegeCirculars = () => {
  return (
    <Layout>
      <PageHeader
        title="College Circulars"
        description="Official circulars and notices from SNBP ACS."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Information Corner", href: "/information/circulars/college" },
          { label: "College Circulars" },
        ]}
      />

      <section className="py-8">
        <div className="container px-4">

         

          {/* PDF Card (same UI as Prospectus) */}
          <div className="flex justify-center">
            <div
              onClick={() => window.open(PDF_URL, "_blank")}
              className="w-52 text-center cursor-pointer transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl border border-border rounded-2xl border-t-4 border-t-orange-500 p-5 flex flex-col items-center gap-3 bg-card"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/337/337946.png"
                alt="PDF"
                className="w-20 drop-shadow-xl"
              />
              <p className="text-xs font-semibold text-foreground text-center leading-snug">
                Circulars & Notices
              </p>
              <Button
                size="sm"
                className="rounded-full gap-2 w-full bg-orange-500 hover:bg-orange-600 text-white"
              >
                <ExternalLink className="w-3.5 h-3.5" /> View PDF
              </Button>
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
};

export default CollegeCirculars;