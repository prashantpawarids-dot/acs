import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ChevronRight } from "lucide-react";

type Paper = { type: string; title: string };
type StaffMember = { name: string; papers: Paper[]; pdfUrl: string; };

const staffData: StaffMember[] = [
  {
    name: "Prof (Dr.) Sudhir Atwadkar",
    pdfUrl: "http://snbpacsms.com/WebsitePages/PDF/Research_Papers.pdf",
    papers: [
      { type: "International", title: "\"Employee Performance & Satisfaction Through Employee Engagement\", Yashomanthan International Research Journal, Vol. 5, Issue-5, Page 27, July 2018, ISSN: 2347-8039." },
      { type: "International", title: "\"Employee Engagement Its Impact on Performance & Satisfaction\" Journal of Advance Management Research, Vol. 6, Issue-2, Page 247, Feb. 2018, ISSN: 2393-9664, UGC INDEX No. 42888." },
      { type: "International", title: "\"Future of Ecommerce In India\" International Research Journal of Multidisciplinary Studies, Vol. IV, Issue VIII, Page 31, Feb. 2018, ISSN: 2454-8499." },
      { type: "International", title: "\"Information Technology Led To Global Transformation\" International Research Journal of Multidisciplinary Studies, Vol. IV, Issue VIII, Page 37, Feb. 2018, ISSN: 2454-8499." },
      { type: "International", title: "\"Customer Satisfaction and Internet Banking\" GENIUS-An International Journal, Vol. VI, Issue-2, Page-1, Feb 2018, ISSN: 2279-0489, Impact Factor 4.954." },
      { type: "International", title: "\"Customer Satisfaction & Internet Banking\" IRJCBS, Vol. IV, Issue 5(1), Page 72, August 15, ISSN:2277-9310." },
      { type: "International", title: "\"Spiritual Intelligence for Business Leadership\", B-Shastra International Journal of Management, Vol. II, Issue-I, Page 67-73, March 2011, ISSN: 2229-2010." },
      { type: "National", title: "\"Customer Satisfaction & Rural Consumer\" NCRD's Business Review: E-Journal, Vol.3, Issue-1, Jan-Dec. 2018, ISSN: 2455-0264." },
      { type: "National", title: "\"Post Purchase Behaviour & Consumer Goods\", Rural Management Review, Volume no.1. Issue no.1. Jan-June 2015. Page.39-50. ISSN no.2394-6261." },
      { type: "National", title: "\"The Evaluation of Consumer Satisfaction With Reference To FMCG In Kolhapur & Belgaum District\", Journal of Management and Administration Tomorrow, Vol.4 No.1, Page 73-84, July-Dec 2015, ISSN: 2278-9316." },
      { type: "National", title: "\"Employee Involvement in Organization Development\", Journal of Management and Administration Tomorrow, Vol.3 No.1, Page 8, July-Dec 2014, ISSN: 2278-9316." },
      { type: "National", title: "\"The Evaluation of Consumer Satisfaction: A Study of Household Care Products in Kolhapur District\", Journal of Management and Administration Tomorrow, Vol.1 No.1, Page 59-82, June-Dec 2012, ISSN: 2278-9316." },
      { type: "National", title: "\"Building A Customer Satisfaction\", Job Search - News Magazine, January 2008, Vol. VI/Issue III, No.: MAHMAR/2002/11065." },
    ],
  },
  {
    name: "Mrs. Gauri Shirude",
    pdfUrl: "http://snbpacsms.com/WebsitePages/PDF/2.Gauri%20Shirude-Journal.pdf",
    papers: [
      { type: "International", title: "\"Digitalization in Teaching & Learning: A Compressive Study\", Anvesak, Volume 54 Issue No.1 (UGC Care Group 1), June 2024, ISSN: 0378-4568." },
      { type: "International", title: "\"Effective Project Management using IoT\", Madhya Bharati- Humanities and Social Science (UGC Care Group 1), June 2024, ISSN: 0974-0066." },
    ],
  },
  {
    name: "Mrs. Sushma Pingale",
    pdfUrl: "http://snbpacsms.com/WebsitePages/PDF/sushmaPingale_Journal.pdf",
    papers: [
      { type: "International", title: "\"Automated Glaucoma Screening using CDR from 2D fundus images\", International Journal of Computational Engineering Research, Volume IV Issue VI May 2014, ISSN-2250-3005." },
      { type: "International", title: "\"Detecting the Optic Disc and Optic Cup Boundary for Glaucoma Screening- A Review\", IJRITCC, Volume 2, Issue 2, March 2014, ISSN 2321-8169." },
      { type: "International", title: "\"Effective Project Management with an IoT\", Madhya Bharati- Humanities and Social Sciences, Volume-85 No.20, Jan-June 2024, ISSN: 0974-0066." },
      { type: "International", title: "\"Digitalization in Teaching and Learning: A Comprehensive Study\", ANVESAK, Volume-54, No.1, Jan-June 2024, ISSN: 0378-4568." },
      { type: "Book Chapter", title: "\"IoT and Smart Home System: A New Way of Management\", Futuristic Trends in Management, IIP Series, Volume III, Book-15, Part-8 Chapter 7, e-ISBN: 978-93-5747-817-5." },
    ],
  },
  {
    name: "Ms. Ruchira Pawar",
    pdfUrl: "http://snbpacsms.com/WebsitePages/PDF/Journal/RuchiraPawarResearchPapers.pdf",
    papers: [],
  },
  {
    name: "Mr. Danish Sayyed",
    pdfUrl: "",
    papers: [],
  },
  {
    name: "Mr. Atul Jadhav",
    pdfUrl: "http://snbpacsms.com/WebsitePages/PDF/5.Atul%20Jadhav.pdf",
    papers: [
      { type: "International", title: "\"Effective Methods of Teaching and Learning Second Language\" in IJRAR, July 2023, Volume 10, Issue 3." },
      { type: "International", title: "\"Opportunities and Challenges of NEP 2020\" in IJFMR, July-August 2023, Volume 5, Issue 4." },
    ],
  },
  {
    name: "Mrs. Rashna Golande",
    pdfUrl: "http://snbpacsms.com/WebsitePages/PDF/6.Rashana%20Golande.pdf",
    papers: [
      { type: "International", title: "\"Consequences of Working from Home on Management\", IJRAR, Volume 11 Issue 1, January 2024, ISSN: 2349-5138." },
      { type: "International", title: "\"Consumer Behaviour in Product Selection: Implications for Market Dynamics and Economic Growth\", IJRAR, Volume 10 Issue 4, December 2023, ISSN: 2349-5138." },
    ],
  },
  {
    name: "Ms. Snehal Phalle",
    pdfUrl: "http://snbpacsms.com/WebsitePages/new%20pdf/7.Snehal%20Phalle.pdf",
    papers: [
      { type: "International", title: "\"Consequences of Working from Home on Management\", IJRAR, Volume 11 Issue 1, January 2024, ISSN: 2349-5138." },
      { type: "International", title: "\"Consumer Behaviour in Product Selection: Implications for Market Dynamics and Economic Growth\", IJRAR, Volume 10 Issue 4, December 2023, ISSN: 2349-5138." },
    ],
  },
  {
    name: "Ms. Kavita Sandbhor",
    pdfUrl: "http://snbpacsms.com/WebsitePages/PDF/Journal/Kavita_Sandbhor_Journal.pdf",
    papers: [],
  },
  {
    name: "Ms. Madhavi Chinchwade",
    pdfUrl: "http://snbpacsms.com/WebsitePages/new%20pdf/10.Madhavi%20Chinchwade.pdf",
    papers: [
      { type: "International", title: "\"Proficient Teacher Recruitment Policies in Indian Higher Education\", www.alladvancedjournal.com, Vol.2 issue-8, page 23-25, Aug 2023, E-ISSN: 2583-6528." },
    ],
  },
  {
    name: "Ms. Swati Inamdar",
    pdfUrl: "http://snbpacsms.com/WebsitePages/PDF/Journal/SwatiInamdar_Journal.pdf",
    papers: [
      { type: "International", title: "\"The Impact of Social Media in Employee Engagement of Manufacturing Organizations in Pune City\", Anvesak Journal vol.53, Issue no-1, UGC Care Group-1, Jan-June 2023, Page no 183-187, ISSN: 0378-4568." },
    ],
  },
];

const studentPdfs = [
  { label: "Students Research Papers", href: "http://snbpacsms.com/WebsitePages/PDF/StudentsResearchPapers.pdf", color: "border-t-emerald-500", badge: "bg-emerald-100 text-emerald-700 border-emerald-200", btn: "bg-emerald-500 hover:bg-emerald-600 text-white" },
  { label: "Research Paper 2024–25",   href: "http://snbpacsms.com/WebsitePages/PDF/Researchpaper2024-25.pdf",  color: "border-t-indigo-600", badge: "bg-indigo-100 text-indigo-700 border-indigo-200",   btn: "bg-indigo-600 hover:bg-indigo-700 text-white" },
  { label: "Research Paper 2023–24",   href: "http://snbpacsms.com/WebsitePages/PDF/Researchpaper2023-24.pdf",  color: "border-t-red-500",    badge: "bg-red-100 text-red-700 border-red-200",         btn: "bg-red-500 hover:bg-red-600 text-white" },
];

const typeColor: Record<string, string> = {
  International: "bg-blue-100 text-blue-700",
  National:      "bg-amber-100 text-amber-700",
  "Book Chapter":"bg-purple-100 text-purple-700",
};

const Journals = () => {
  const [selected, setSelected] = useState<StaffMember | null>(null);

  return (
    <Layout>
      <div className="container mx-auto py-8 px-4">
        <PageHeader
          title="College Journals"
          description="Academic journals at SNBP ACS."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Library & Publications", href: "/library/about" },
            { label: "Journals" },
          ]}
        />

        <div className="mt-8 flex flex-col lg:flex-row gap-6 items-start">

          {/* LEFT — Staff */}
          <div className="w-full lg:w-80 flex-shrink-0">
            <Card>
              <CardContent className="pt-5 pb-4 px-4">
                <h2 className="text-base font-bold text-foreground mb-3">Staff Research Papers</h2>
                <div className="space-y-1">
                  {staffData.map((s, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelected(selected?.name === s.name ? null : s)}
                      className={`w-full flex items-center justify-between gap-2 px-3 py-2.5 rounded-lg text-left text-sm font-medium transition-all duration-200
                        ${selected?.name === s.name
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-muted/60 text-foreground"
                        }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center flex-shrink-0
                          ${selected?.name === s.name ? "bg-white/20 text-white" : "bg-muted text-muted-foreground"}`}>
                          {idx + 1}
                        </span>
                        {s.name}
                      </div>
                      <ChevronRight className={`w-4 h-4 flex-shrink-0 transition-transform ${selected?.name === s.name ? "rotate-90" : ""}`} />
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* RIGHT — Details + Student PDFs */}
          <div className="flex-1 space-y-6">

            {/* Staff Paper Detail Card */}
            {selected ? (
              <Card className="border-t-4 border-t-primary">
                <CardContent className="pt-5 pb-5 px-5">
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <h3 className="text-base font-bold text-foreground">{selected.name}</h3>
                    {selected.pdfUrl && (
                      <Button
                        size="sm"
                        className="rounded-full gap-1.5 bg-primary hover:bg-primary/90 text-primary-foreground flex-shrink-0"
                        onClick={() => window.open(selected.pdfUrl, "_blank")}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        View PDF
                      </Button>
                    )}
                  </div>

                  {selected.papers.length > 0 ? (
                    <div className="space-y-3">
                      {selected.papers.map((p, i) => (
                        <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 border border-border">
                          <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                            {i + 1}
                          </span>
                          <div className="flex-1">
                            <Badge className={`text-xs mb-1.5 ${typeColor[p.type] ?? "bg-gray-100 text-gray-700"}`}>
                              {p.type}
                            </Badge>
                            <p className="text-xs text-muted-foreground leading-relaxed">{p.title}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground">Click "View PDF" to see research papers.</p>
                  )}
                </CardContent>
              </Card>
            ) : (
              <Card className="border border-dashed border-border">
                <CardContent className="py-10 flex flex-col items-center text-center gap-2">
                  <ChevronRight className="w-8 h-8 text-muted-foreground/40" />
                  <p className="text-sm text-muted-foreground">Select a staff member to view their research papers</p>
                </CardContent>
              </Card>
            )}

            {/* Student Research Papers */}
            <div>
              <h2 className="text-base font-bold text-foreground mb-3">Student Research Papers</h2>
              <div className="flex flex-wrap gap-4">
                {studentPdfs.map((p) => (
                  <Card
                    key={p.label}
                    className={`w-52 text-center cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-t-4 ${p.color} rounded-2xl`}
                  >
                    <CardContent className="pt-5 pb-4 px-4 flex flex-col items-center gap-3">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/337/337946.png"
                        alt="PDF"
                        className="w-16 drop-shadow-lg"
                      />
                      <span className={`text-xs font-bold tracking-wide uppercase px-2 py-1 rounded-full border text-center leading-tight ${p.badge}`}>
                        {p.label}
                      </span>
                      <Button
                        size="sm"
                        className={`rounded-full gap-1.5 w-full text-xs ${p.btn}`}
                        onClick={() => window.open(p.href, "_blank")}
                      >
                        <ExternalLink className="w-3 h-3" />
                        View PDF
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Journals;