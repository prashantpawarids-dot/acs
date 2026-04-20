import { useEffect, useRef, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, FileText, BookOpen, GraduationCap, Users } from "lucide-react";

/* ── Scroll-reveal hook ── */
const useReveal = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
        else setVisible(false);
      },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
};

const Reveal = ({
  children,
  from = "up",
  delay = 0,
}: {
  children: React.ReactNode;
  from?: "left" | "right" | "up";
  delay?: number;
}) => {
  const { ref, visible } = useReveal();
  const init =
    from === "left"
      ? "translateX(-50px)"
      : from === "right"
      ? "translateX(50px)"
      : "translateY(40px)";
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translate(0)" : init,
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

/* ── Data ── */
const policyPoints = [
  {
    heading: "Academic Policies",
    icon: GraduationCap,
    color: "border-indigo-200 bg-indigo-50",
    headingColor: "text-indigo-700",
    dotColor: "bg-indigo-500",
    bulletColor: "bg-indigo-300",
    items: [
      "Attendance requirements and regulations",
      "Examination and evaluation procedures",
      "Academic integrity and plagiarism guidelines",
      "Credit transfer and migration policies",
    ],
  },
  {
    heading: "Student Welfare Policies",
    icon: Users,
    color: "border-emerald-200 bg-emerald-50",
    headingColor: "text-emerald-700",
    dotColor: "bg-emerald-500",
    bulletColor: "bg-emerald-300",
    items: [
      "Anti-ragging policy with zero tolerance",
      "Grievance redressal mechanism",
      "Equal opportunity and non-discrimination policy",
      "Scholarship and financial aid guidelines",
    ],
  },
  {
    heading: "Administrative Policies",
    icon: BookOpen,
    color: "border-orange-200 bg-orange-50",
    headingColor: "text-orange-700",
    dotColor: "bg-orange-500",
    bulletColor: "bg-orange-300",
    items: [
      "Faculty development programs and research encouragement",
      "Student support services and grievance redressal mechanisms",
      "Industry collaboration and placement activities",
      "Extension and outreach programs",
      "Infrastructure upgradation and maintenance",
      "Environmental sustainability initiatives",
    ],
  },
];

const policyDocuments = [
  {
    label: "Code of Conduct for Student",
    href: "http://snbpacsms.com/WebsitePages/PDF/CODE%20OF%20CONDUCT%20FOR%20STUDENT.pdf",
    topColor: "border-t-orange-500",
    badge: "bg-orange-100 text-orange-700 border-orange-200",
    btn: "bg-orange-500 hover:bg-orange-600 text-white",
  },
  {
    label: "Code of Conduct for Teachers",
    href: "http://snbpacsms.com/WebsitePages/PDF/CODE%20OF%20CONDUCT%20FOR%20TEACHERS.pdf",
    topColor: "border-t-indigo-600",
    badge: "bg-indigo-100 text-indigo-700 border-indigo-200",
    btn: "bg-indigo-600 hover:bg-indigo-700 text-white",
  },
  {
    label: "Core Values",
    href: "http://snbpacsms.com/WebsitePages/PDF/core_values.pdf",
    topColor: "border-t-emerald-500",
    badge: "bg-emerald-100 text-emerald-700 border-emerald-200",
    btn: "bg-emerald-500 hover:bg-emerald-600 text-white",
  },
  {
    label: "General Policy ACS",
    href: "http://snbpacsms.com/WebsitePages/PDF/General_policy_acs.pdf",
    topColor: "border-t-rose-500",
    badge: "bg-rose-100 text-rose-700 border-rose-200",
    btn: "bg-rose-500 hover:bg-rose-600 text-white",
  },
  {
    label: "SPPU Code of Conduct",
    href: "http://snbpacsms.com/WebsitePages/PDF/SPPU_Code_of_Conduct.pdf",
    topColor: "border-t-violet-500",
    badge: "bg-violet-100 text-violet-700 border-violet-200",
    btn: "bg-violet-500 hover:bg-violet-600 text-white",
  },
];

/* ── Page ── */
const Policy = () => {
  return (
    <Layout>
      <div className="container mx-auto py-4 px-4">
        <PageHeader
          title="Institution Policy"
          description="Our institutional policies and guidelines at SNBP ACS."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "About Us", href: "/about" },
            { label: "Institution Policy" },
          ]}
        />

        {/* ── Intro ── */}
        <div className="mt-6 max-w-4xl mx-auto">
          <Reveal from="up" delay={0}>
            <p className="text-base text-foreground leading-relaxed text-justify">
              SNBP ACS operates under a comprehensive set of policies designed to ensure
              transparency, fairness, and excellence in all operations. These policies govern
              academic processes, student welfare, and administrative functioning to create a
              conducive environment for holistic development of every student and staff member.
            </p>
          </Reveal>
        </div>

        {/* ── Section Divider ── */}
        <Reveal from="up">
          <div className="flex items-center gap-4 my-10">
            <div className="flex-1 h-px bg-border" />
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10">
              <FileText className="w-4 h-4 text-primary" />
              <span className="text-sm font-bold text-primary tracking-wide uppercase">
                Policy Overview
              </span>
            </div>
            <div className="flex-1 h-px bg-border" />
          </div>
        </Reveal>

        {/* ── Policy Sections ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {policyPoints.map((section, si) => {
            const Icon = section.icon;
            return (
              <Reveal key={si} from={si % 2 === 0 ? "left" : "right"} delay={si * 100}>
                <div
                  className={`rounded-2xl border ${section.color} p-5 shadow-sm hover:shadow-md transition-shadow duration-300 h-full`}
                >
                  <h3
                    className={`text-sm font-bold ${section.headingColor} mb-3 flex items-center gap-2`}
                  >
                    <span
                      className={`w-7 h-7 rounded-full ${section.dotColor} text-white flex items-center justify-center flex-shrink-0`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </span>
                    {section.heading}
                  </h3>
                  <ul className="space-y-2">
                    {section.items.map((item, ii) => (
                      <li
                        key={ii}
                        className="flex items-start gap-2 text-sm text-foreground leading-relaxed"
                      >
                        <span
                          className={`mt-2 w-1.5 h-1.5 rounded-full ${section.bulletColor} flex-shrink-0`}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* ── PDF Section Divider ── */}
        <Reveal from="up">
          <div className="flex items-center gap-4 my-10">
            <div className="flex-1 h-px bg-border" />
            <span className="text-sm font-bold text-muted-foreground tracking-wide uppercase px-4">
              Policy Documents
            </span>
            <div className="flex-1 h-px bg-border" />
          </div>
        </Reveal>

        {/* ── PDF Cards — 3 per row ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
          {policyDocuments.map((p, i) => (
            <Reveal key={p.label} from={i % 2 === 0 ? "left" : "right"} delay={i * 80}>
              <Card
                className={`text-center cursor-pointer transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl border-t-4 ${p.topColor} rounded-2xl h-full`}
              >
                <CardContent className="pt-6 pb-5 px-4 flex flex-col items-center gap-3">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/337/337946.png"
                    alt="PDF"
                    className="w-16 drop-shadow-xl"
                  />
                  <span
                    className={`text-xs font-bold tracking-wide uppercase px-3 py-1 rounded-full border text-center leading-tight ${p.badge}`}
                  >
                    {p.label}
                  </span>
                  <Button
                    size="sm"
                    className={`rounded-full gap-2 w-full ${p.btn}`}
                    onClick={() => window.open(p.href, "_blank")}
                  >
                    <ExternalLink className="w-3.5 h-3.5" /> View PDF
                  </Button>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Policy;