import { useEffect, useRef, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const internships = [
  { sr: 1,  year: "2024–25", dept: "Commerce", company: "Leading Private Bank, Pune",         duration: "30 Days", type: "Finance" },
  { sr: 2,  year: "2024–25", dept: "Commerce", company: "NBFC Financial Services, Pune",      duration: "45 Days", type: "Finance" },
  { sr: 3,  year: "2024–25", dept: "Science",  company: "Pharmaceutical Company, Pune",       duration: "30 Days", type: "Research" },
  { sr: 4,  year: "2024–25", dept: "Arts",     company: "Regional Media House, Pune",         duration: "30 Days", type: "Media" },
  { sr: 5,  year: "2024–25", dept: "Commerce", company: "Audit & Consultancy Firm, Pune",     duration: "60 Days", type: "Accounting" },
  { sr: 6,  year: "2024–25", dept: "Science",  company: "Research Lab, Pune",                 duration: "45 Days", type: "Research" },
  { sr: 7,  year: "2023–24", dept: "Commerce", company: "Nationalised Bank, Pimpri",          duration: "30 Days", type: "Finance" },
  { sr: 8,  year: "2023–24", dept: "Arts",     company: "News Media Group, Pune",             duration: "30 Days", type: "Media" },
  { sr: 9,  year: "2023–24", dept: "Science",  company: "Biotech Institute, Pune",            duration: "45 Days", type: "Research" },
  { sr: 10, year: "2023–24", dept: "Commerce", company: "Private Sector Bank, Pune",          duration: "30 Days", type: "Finance" },
  { sr: 11, year: "2023–24", dept: "Arts",     company: "Digital Media Company, Pune",        duration: "30 Days", type: "Media" },
  { sr: 12, year: "2023–24", dept: "Science",  company: "Pharmaceutical Lab, Pune",           duration: "60 Days", type: "Research" },
  { sr: 13, year: "2022–23", dept: "Commerce", company: "Co-operative Bank, Pune",            duration: "30 Days", type: "Finance" },
  { sr: 14, year: "2022–23", dept: "Arts",     company: "Publishing House, Pune",             duration: "30 Days", type: "Media" },
  { sr: 15, year: "2022–23", dept: "Science",  company: "Chemical Industry, Pune",            duration: "45 Days", type: "Research" },
  { sr: 16, year: "2022–23", dept: "Commerce", company: "Tax Consultancy Firm, Pune",         duration: "30 Days", type: "Accounting" },
];

const typeVariant: Record<string, "default" | "secondary" | "outline" | "destructive"> = {
  Finance:    "default",
  Research:   "secondary",
  Media:      "outline",
  Accounting: "destructive",
};

const summary = [
  { label: "Total Internships", value: internships.length },
  { label: "Arts",              value: internships.filter(i => i.dept === "Arts").length },
  { label: "Commerce",          value: internships.filter(i => i.dept === "Commerce").length },
  { label: "Science",           value: internships.filter(i => i.dept === "Science").length },
];

const years = [...new Set(internships.map(i => i.year))];

function AnimatedCard({ children, direction, delay }: { children: React.ReactNode; direction: "left" | "right"; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : direction === "left" ? "translateX(-60px)" : "translateX(60px)",
      }}
    >
      {children}
    </div>
  );
}

const Internship = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8 px-4">
        <PageHeader
          title="Internship"
          description="Internship opportunities at SNBP ACS."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Placement & Career", href: "/placement/training-activities" },
            { label: "Internship" },
          ]}
        />

        {/* Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {summary.map((s, i) => (
            <AnimatedCard key={s.label} direction={i % 2 === 0 ? "left" : "right"} delay={i * 100}>
              <Card className="text-center hover:-translate-y-1 hover:shadow-md transition-all duration-300 h-full">
                <CardContent className="pt-5 pb-4">
                  <div className="text-3xl font-extrabold text-primary">{s.value}</div>
                  <div className="text-xs text-muted-foreground mt-1 font-medium">{s.label}</div>
                </CardContent>
              </Card>
            </AnimatedCard>
          ))}
        </div>

        {/* Year-wise Tables */}
        {years.map((year) => {
          const list = internships.filter(i => i.year === year);
          return (
            <div className="mt-10" key={year}>
              <div className="flex flex-col items-center mb-4 gap-1">
                <h2 className="text-lg font-semibold text-foreground">Academic Year: {year}</h2>
                <span className="text-sm text-muted-foreground">{list.length} Internships</span>
              </div>

              <div className="space-y-3">
                {list.map((a, idx) => (
                  <AnimatedCard key={a.sr} direction={idx % 2 === 0 ? "left" : "right"} delay={idx * 80}>
                    <Card className="hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                      <CardContent className="py-4 px-5">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <div className="flex items-center gap-3">
                            <span className="text-xs font-bold text-primary bg-primary/10 rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0">
                              {idx + 1}
                            </span>
                            <div>
                              <p className="font-medium text-foreground text-sm">{a.company}</p>
                              <p className="text-xs text-muted-foreground mt-0.5">{a.dept} · {a.duration}</p>
                            </div>
                          </div>
                          <Badge variant={typeVariant[a.type] ?? "outline"} className="text-xs whitespace-nowrap">
                            {a.type}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedCard>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Internship;