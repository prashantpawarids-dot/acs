import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const practices = [
  {
    id: "01",
    title: "",
    href: "http://snbpacsms.com/WebsitePages/PDF/NAAC/BestPractice1.pdf",
    badge: "Best Practice — 01",
    badgeClass: "bg-red-100 text-red-600 border border-red-200",
    btnClass: "bg-red-500 hover:bg-red-600 text-white",
    borderClass: "border-t-4 border-t-red-500",
  },
  {
    id: "02",
    title: "",
    href: "http://snbpacsms.com/WebsitePages/PDF/NAAC/BestPractice2.pdf",
    badge: "Best Practice — 02",
    badgeClass: "bg-indigo-100 text-indigo-600 border border-indigo-200",
    btnClass: "bg-indigo-600 hover:bg-indigo-700 text-white",
    borderClass: "border-t-4 border-t-indigo-600",
  },
];

const BestPractices = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8 px-4">
        <PageHeader
          title="Best Practices"
          description="Best practices adopted by SNBP ACS."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "IQAC", href: "/iqac/meeting" },
            { label: "Best Practices" },
          ]}
        />

        {/* Hero */}
        {/* <div className="mt-6 rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-950 to-indigo-900 py-12 px-6 text-center">
          <Badge className="mb-3 bg-white/10 text-indigo-200 border border-white/20 tracking-widest text-xs uppercase">
            NAAC — IQAC
          </Badge>
          <h1 className="text-2xl md:text-3xl font-extrabold text-white mb-2">Best Practices</h1>
          <p className="text-indigo-200 text-sm max-w-md mx-auto leading-relaxed">
            Institutional best practices adopted by SNBP College of Arts Commerce Science &amp; Management Studies
            to enhance quality in education and student development.
          </p>
        </div> */}

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-8 mt-5">
          {practices.map((p) => (
            <a key={p.id} href={p.href} target="_blank" rel="noopener noreferrer" className="no-underline">
              <Card
                className={`w-72 text-center cursor-pointer transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl ${p.borderClass} rounded-2xl`}
              >
                <CardContent className="pt-8 pb-6 px-5 flex flex-col items-center gap-4">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/337/337946.png"
                    alt="PDF"
                    className="w-24 drop-shadow-xl transition-transform duration-300 hover:-rotate-3"
                  />
                  <span className={`text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full ${p.badgeClass}`}>
                    {p.badge}
                  </span>
                  <p className="text-sm font-semibold text-foreground leading-snug">{p.title}</p>
                  <Button size="sm" className={`rounded-full gap-2 ${p.btnClass}`}>
                    <ExternalLink className="w-3.5 h-3.5" />
                    View PDF
                  </Button>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default BestPractices;