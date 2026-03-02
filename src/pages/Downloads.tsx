import { FileText, Download, ExternalLink } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const downloadsData = [
  { id: 1,  name: "COVID-19 Students",               url: "http://snbpacsms.com/WebsitePages/PDF/1.Covid-19_Student.pdf" },
  { id: 2,  name: "Industrial Visit",                 url: "http://snbpacsms.com/WebsitePages/new%20pdf/Field%20Visit%20Student%20_%20Parent%20Undertaking%20(1).pdf" },
  { id: 3,  name: "Trip Consent By Parent",           url: "http://snbpacsms.com/WebsitePages/PDF/3.TRIP%20CONSENT%20BY%20PARENT.pdf" },
  { id: 4,  name: "Registration Form NSS",            url: "http://snbpacsms.com/WebsitePages/PDF/4.REGISTRATION%20FORM%20NSS.pdf" },
  { id: 5,  name: "NSS Regular Activity",             url: "http://snbpacsms.com/WebsitePages/PDF/5.NSS%20REGULAR%20ACTIVITY.pdf" },
  { id: 6,  name: "COVID-19 Staff",                   url: "http://snbpacsms.com/WebsitePages/PDF/6.Covid-19_Staff.pdf" },
  { id: 7,  name: "Faculty For Exam",                 url: "http://snbpacsms.com/WebsitePages/PDF/7.FACULTY%20FOR%20EXAM.pdf" },
  { id: 8,  name: "Enrollment Form",                  url: "http://snbpacsms.com/WebsitePages/new%20pdf/Enrollment%20Form%20.pdf" },
  { id: 9,  name: "Institutional Level Form SNBP",    url: "http://snbpacsms.com/WebsitePages/new%20pdf/Institutional%20level%20form_SNBP.pdf" },
  { id: 10, name: "Institutional Level Form (Govt.)", url: "http://snbpacsms.com/WebsitePages/new%20pdf/Institutional%20level%20form%20(Govt.).pdf" },
];

const cardColors = [
  { border: "border-t-blue-500",    icon: "bg-blue-100 text-blue-600",      num: "bg-blue-500" },
  { border: "border-t-indigo-600",  icon: "bg-indigo-100 text-indigo-600",  num: "bg-indigo-600" },
  { border: "border-t-emerald-500", icon: "bg-emerald-100 text-emerald-600", num: "bg-emerald-500" },
  { border: "border-t-orange-500",  icon: "bg-orange-100 text-orange-600",  num: "bg-orange-500" },
  { border: "border-t-red-500",     icon: "bg-red-100 text-red-600",        num: "bg-red-500" },
  { border: "border-t-purple-500",  icon: "bg-purple-100 text-purple-600",  num: "bg-purple-500" },
  { border: "border-t-teal-500",    icon: "bg-teal-100 text-teal-600",      num: "bg-teal-500" },
  { border: "border-t-rose-500",    icon: "bg-rose-100 text-rose-600",      num: "bg-rose-500" },
  { border: "border-t-cyan-500",    icon: "bg-cyan-100 text-cyan-600",      num: "bg-cyan-500" },
  { border: "border-t-amber-500",   icon: "bg-amber-100 text-amber-600",    num: "bg-amber-500" },
];

const Downloads = () => {
  return (
    <Layout>
      <PageHeader
        title="Downloads"
        description="Download important documents, forms, and resources."
        breadcrumbs={[
          { label: "Reports & Downloads", href: "/reports/academic" },
          { label: "Downloads" },
        ]}
      />

      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {downloadsData.map((file, idx) => {
              const color = cardColors[idx % cardColors.length];
              return (
                <Card
                  key={file.id}
                  className={`border-t-4 ${color.border} rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group`}
                >
                  <CardContent className="pt-5 pb-5 px-5 flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <span className={`w-7 h-7 rounded-full text-white text-xs font-bold flex items-center justify-center ${color.num}`}>
                        {file.id}
                      </span>
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${color.icon} group-hover:scale-110 transition-transform duration-300`}>
                        <FileText className="w-5 h-5" />
                      </div>
                    </div>

                    <p className="text-sm font-semibold text-foreground leading-snug min-h-[2.5rem]">
                      {file.name}
                    </p>

                    <p className="text-xs text-muted-foreground -mt-2">PDF Document</p>

                    <div className="flex gap-2 mt-auto">
                      <Button variant="outline" size="sm" className="flex-1 rounded-full text-xs gap-1" asChild>
                        <a href={file.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3 h-3" />
                          View
                        </a>
                      </Button>
                      <Button size="sm" className="flex-1 rounded-full text-xs gap-1" asChild>
                        <a href={file.url} download>
                          <Download className="w-3 h-3" />
                          Download
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Downloads;