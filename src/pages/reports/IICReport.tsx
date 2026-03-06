import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const BASE_URL = import.meta.env.VITE_STATIC_ASSETS;

const IICReport = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8 px-4">
        <PageHeader
          title="IIC Reports"
          description="IIC activity reports at SNBP ACS."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Reports & Downloads", href: "/reports/academic" },
            { label: "IIC" },
          ]}
        />

        <div className="flex justify-center mt-8">
          <Card className="w-56 text-center cursor-pointer transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl border-t-4 border-t-indigo-600 rounded-2xl">
            <CardContent className="pt-6 pb-5 px-4 flex flex-col items-center gap-3">
              <img
                src="https://cdn-icons-png.flaticon.com/512/337/337946.png"
                alt="PDF"
                className="w-20 drop-shadow-xl"
              />
              <span className="text-xs font-bold tracking-wide uppercase px-3 py-1 rounded-full border text-center leading-tight bg-indigo-100 text-indigo-700 border-indigo-200">
                IIC Annual Report
              </span>
              <Button
                size="sm"
                className="rounded-full gap-2 w-full bg-indigo-600 hover:bg-indigo-700 text-white"
                onClick={() => window.open(`${BASE_URL}/PDF/ReportsDownloads/IIC_Annual_Report.pdf`, "_blank")}
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

export default IICReport;