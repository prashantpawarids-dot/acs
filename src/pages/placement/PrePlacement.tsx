import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const activities = [
  { sr: 1,  date: "13-08-24",              program: "Lecture on Career Path",                                                  type: "Pre-Placement Training",    organiser: "T & P Cell", link: "https://www.facebook.com/share/p/1YYudwkUb6/" },
  { sr: 2,  date: "13-08-24",              program: "Online Workshop on Resume Building & Interview Skills",                  type: "Pre-Placement Training",    organiser: "T & P Cell", link: null },
  { sr: 3,  date: "24-08-24",              program: "Industrial Visit to TATA Motors",                                        type: "Exposure Visit",            organiser: "T & P Cell", link: "https://www.facebook.com/share/p/15LZ2CnXNc/" },
  { sr: 4,  date: "27-08-24",              program: "Guest Lecture on Career in MNC & PMO",                                   type: "Pre-Placement Training",    organiser: "T & P Cell", link: "https://www.facebook.com/share/p/17pcEqUVzz/" },
  { sr: 5,  date: "12-09-24",              program: "Seminar on Career Insights & Employability Skills",                      type: "Pre-Placement Training",    organiser: "T & P Cell", link: null },
  { sr: 6,  date: "13-09-24",              program: "Seminar on Exploring Opportunities in Emerging Technologies",            type: "Pre-Placement Training",    organiser: "T & P Cell", link: "https://www.facebook.com/share/p/1Afj76xdah/" },
  { sr: 7,  date: "18-09-24",              program: "Placement Drive of Varroc Lighting System Ltd.",                         type: "Placement Activity",        organiser: "T & P Cell", link: null },
  { sr: 8,  date: "19-09-24",              program: "Workshop on Intellectual Property Rights",                               type: "Pre-Placement Training",    organiser: "IIC Cell",   link: "https://www.facebook.com/snbp.pimpri/posts/pfbid06ZHrzEoCJsg4b8hULPsTJqNgFBFmVXvDqbaoqm7UxnNXwohuZin2MqrcvkcXsFXVl" },
  { sr: 9,  date: "21-09-24 to 13-10-24", program: "Training on WordPress Technology",                                       type: "Pre-Placement Training",    organiser: "T & P Cell", link: null },
  { sr: 10, date: "19-10-24",              program: "Industrial Visit to Infosys BPM Pvt. Ltd.",                              type: "Exposure Visit",            organiser: "T & P Cell", link: "https://www.facebook.com/share/p/1EMtuD6mwb/" },
  { sr: 11, date: "09-01-25",              program: "Seminar on Effective Sales And Marketing Strategies For Entrepreneurs",  type: "",                          organiser: "IIC Cell",   link: "https://www.facebook.com/snbp.pimpri/posts/pfbid0XZVXFTvU8HQQ94KTd5WTeAKRm36kzP6gpkV2tQzyfbFQ8tzw2nb3XB6ixpzYD2tul" },
  { sr: 12, date: "17-01-25",              program: "Workshop on Guidelines for Competitive Exam Preparation",                type: "Pre-Placement Training",    organiser: "T & P Cell", link: "https://www.facebook.com/share/p/16HDC1pDfw/" },
  { sr: 13, date: "30-01-25",              program: "Industrial Visit to Sai Roses Polyhouse",                                type: "Pre-Placement Training",    organiser: "T & P Cell", link: "https://www.facebook.com/share/p/1Ek1BNV46C/" },
  { sr: 14, date: "06-02-25",              program: "Seminar on Campus to Tech Enabled Financial Careers",                    type: "Mentoring Session",         organiser: "T & P Cell", link: null },
  { sr: 15, date: "13-03-25",              program: "Exposure Visit to Autocluster Development & Research Institute",         type: "Exposure Visit",            organiser: "IIC Cell",   link: "https://www.facebook.com/share/p/1AfgseSKNd/" },
  { sr: 16, date: "22-03-25",              program: "Alumni Meet",                                                            type: "Alumni Connected Activity", organiser: "T & P Cell", link: "https://www.facebook.com/snbp.pimpri/posts/pfbid02KncSe9qLP1A5HNNneySpWeo4dMyAc4UACdQThbGnf8hBy2A2VHoJf6aYJgsFay9l" },
];

const typeVariant: Record<string, "default" | "secondary" | "outline" | "destructive"> = {
  "Pre-Placement Training":    "default",
  "Exposure Visit":            "secondary",
  "Placement Activity":        "destructive",
  "Mentoring Session":         "outline",
  "Alumni Connected Activity": "secondary",
};

const PrePlacement = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8 px-4">
        <PageHeader
          title="Pre-Placement Training"
          description="Placement and training activities at SNBP ACS."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Placement & Career", href: "/placement/training-activities" },
            { label: "Pre-Placement Training" },
          ]}
        />

        <div className="mt-8">
          <div className="flex flex-col items-center mb-4 gap-1">
            <h2 className="text-lg font-semibold text-foreground">Academic Year: 2024–25</h2>
            <span className="text-sm text-muted-foreground">{activities.length} Activities</span>
          </div>

          <div className="rounded-xl border border-border overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="px-4 py-3 text-left font-semibold w-12">Sr.</th>
                    <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">Date</th>
                    <th className="px-4 py-3 text-left font-semibold">Name of Program</th>
                    <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">Type</th>
                    <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">Organiser</th>
                    <th className="px-4 py-3 text-center font-semibold">View</th>
                  </tr>
                </thead>
                <tbody>
                  {activities.map((a, idx) => (
                    <tr
                      key={a.sr}
                      className={`border-t border-border transition-colors hover:bg-muted/50 ${idx % 2 === 0 ? "bg-background" : "bg-muted/20"}`}
                    >
                      <td className="px-4 py-3 font-bold text-primary text-center">{a.sr}</td>
                      <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">{a.date}</td>
                      <td className="px-4 py-3 font-medium text-foreground">{a.program}</td>
                      <td className="px-4 py-3">
                        {a.type && (
                          <Badge variant={typeVariant[a.type] ?? "outline"} className="whitespace-nowrap text-xs">
                            {a.type}
                          </Badge>
                        )}
                      </td>
                      <td className="px-4 py-3 text-muted-foreground font-medium whitespace-nowrap">{a.organiser}</td>
                      <td className="px-4 py-3 text-center">
                        {a.link ? (
                          <a
                            href={a.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold hover:opacity-80 transition-opacity no-underline"
                          >
                            <ExternalLink className="w-3 h-3" />
                            View
                          </a>
                        ) : (
                          <span className="text-muted-foreground">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrePlacement;