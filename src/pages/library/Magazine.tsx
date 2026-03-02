import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const magazines = [
  { year: "2023–24", href: "http://snbpacsms.com/WebsitePages/PDF/SNBPCollegeAspire2023-24.pdf", color: "border-t-indigo-600", badge: "bg-indigo-100 text-indigo-600 border-indigo-200", btn: "bg-indigo-600 hover:bg-indigo-700 text-white" },
  { year: "2019–20", href: "http://snbpacsms.com/WebsitePages/PDF/2019-2020.pdf",                color: "border-t-red-500",    badge: "bg-red-100 text-red-600 border-red-200",       btn: "bg-red-500 hover:bg-red-600 text-white" },
  { year: "2018–19", href: "http://snbpacsms.com/WebsitePages/PDF/2018-2019.pdf",                color: "border-t-emerald-500", badge: "bg-emerald-100 text-emerald-600 border-emerald-200", btn: "bg-emerald-500 hover:bg-emerald-600 text-white" },
  { year: "2017–18", href: "http://snbpacsms.com/WebsitePages/PDF/2017-2018.pdf",                color: "border-t-orange-500", badge: "bg-orange-100 text-orange-600 border-orange-200", btn: "bg-orange-500 hover:bg-orange-600 text-white" },
];

const Magazine = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8 px-4">
        <PageHeader
          title="College Magazine"
          description="Annual college magazine at SNBP ACS."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Library & Publications", href: "/library/about" },
            { label: "Magazine" },
          ]}
        />

        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {magazines.map((m) => (
            <Card
              key={m.year}
              className={`w-56 text-center cursor-pointer transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl border-t-4 ${m.color} rounded-2xl`}
            >
              <CardContent className="pt-6 pb-5 px-4 flex flex-col items-center gap-3">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/337/337946.png"
                  alt="PDF"
                  className="w-20 drop-shadow-xl"
                />
                <span className={`text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full border ${m.badge}`}>
                  Magazine {m.year}
                </span>
                <Button
                  size="sm"
                  className={`rounded-full gap-2 w-full ${m.btn}`}
                  onClick={() => window.open(m.href, "_blank")}
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

export default Magazine;