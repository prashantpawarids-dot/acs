import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const IIQA = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8 px-4">
        <PageHeader
          title="IIQA"
          description="Institutional Information for Quality Assessment."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "IQAC", href: "/iqac/meeting" },
            { label: "IIQA" },
          ]}
        />

        <div className="flex justify-center mt-8">
          <Card className="w-72 text-center cursor-pointer transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl border-t-4 border-t-red-500 rounded-2xl">
            <CardContent className="pt-8 pb-6 px-5 flex flex-col items-center gap-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/337/337946.png"
                alt="PDF"
                className="w-24 drop-shadow-xl"
              />
              <span className="text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-red-100 text-red-600 border border-red-200">
                IIQA
              </span>
              <Button
                size="sm"
                className="rounded-full gap-2 bg-red-500 hover:bg-red-600 text-white"
                onClick={() => window.open("http://snbpacsms.com/WebsitePages/PDF/NAAC/IIAQ.pdf", "_blank")}
              >
                <ExternalLink className="w-3.5 h-3.5" />
                View PDF
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default IIQA;