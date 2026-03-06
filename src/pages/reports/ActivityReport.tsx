import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const BASE_URL = import.meta.env.VITE_STATIC_ASSETS;

const reports = [
  { label: "Annual Report Placement",          href: `${BASE_URL}/PDF/ReportsDownloads/AnnualReportPlacement.pdf`,          color: "border-t-indigo-600", badge: "bg-indigo-100 text-indigo-700 border-indigo-200", btn: "bg-indigo-600 hover:bg-indigo-700 text-white" },
  { label: "Activity Department Annual Report 2024–25", href: `${BASE_URL}/PDF/ReportsDownloads/ACTIVITYDEPARTMENTANNUALREPORT24-25.pdf`, color: "border-t-emerald-500", badge: "bg-emerald-100 text-emerald-700 border-emerald-200", btn: "bg-emerald-500 hover:bg-emerald-600 text-white" },
];

const ActivityReport = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8 px-4">
        <PageHeader
          title="Activity Reports"
          description="Co-curricular activity reports at SNBP ACS."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Reports & Downloads", href: "/reports/academic" },
            { label: "Activity" },
          ]}
        />

        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {reports.map((p) => (
            <Card
              key={p.label}
              className={`w-56 text-center cursor-pointer transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl border-t-4 ${p.color} rounded-2xl`}
            >
              <CardContent className="pt-6 pb-5 px-4 flex flex-col items-center gap-3">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/337/337946.png"
                  alt="PDF"
                  className="w-20 drop-shadow-xl"
                />
                <span className={`text-xs font-bold tracking-wide uppercase px-3 py-1 rounded-full border text-center leading-tight ${p.badge}`}>
                  {p.label}
                </span>
                <Button
                  size="sm"
                  className={`rounded-full gap-2 w-full ${p.btn}`}
                  onClick={() => window.open(p.href, "_blank")}
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  View PDF
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ActivityReport;