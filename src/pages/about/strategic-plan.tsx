import { useEffect, useRef, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";
import { BookOpen, Building2, UserCheck } from "lucide-react";

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

const strategicPillars = [
  {
    heading: "Academic Excellence",
    icon: BookOpen,
    color: "border-indigo-200 bg-indigo-50",
    headingColor: "text-indigo-700",
    dotColor: "bg-indigo-500",
    bulletColor: "bg-indigo-300",
    items: [
      "Curriculum enhancement aligned with industry needs",
      "Faculty development and research promotion",
      "Quality assurance and accreditation readiness",
    ],
  },
  {
    heading: "Infrastructure & Resources",
    icon: Building2,
    color: "border-emerald-200 bg-emerald-50",
    headingColor: "text-emerald-700",
    dotColor: "bg-emerald-500",
    bulletColor: "bg-emerald-300",
    items: [
      "Modernization of labs and learning spaces",
      "Digital library and e-resources expansion",
      "Sports and cultural facility upgrades",
    ],
  },
  {
    heading: "Student Success",
    icon: UserCheck,
    color: "border-orange-200 bg-orange-50",
    headingColor: "text-orange-700",
    dotColor: "bg-orange-500",
    bulletColor: "bg-orange-300",
    items: [
      "Placement and career support enhancement",
      "Skill development and certification programs",
      "Student welfare and support services",
    ],
  },
];

const StrategicPlan = () => {
  return (
    <Layout>
      <div className="container mx-auto py-4 px-4">
        <PageHeader
          title="Strategic Plan"
          description="Institutional strategic plan and development roadmap at SNBP ACS."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "About Us", href: "/about" },
            { label: "Strategic Plan" },
          ]}
        />

        {/* ── Intro ── */}
        <div className="mt-6 max-w-4xl mx-auto">
          <Reveal from="up" delay={0}>
            <p className="text-base text-foreground leading-relaxed text-justify">
              SNBP ACS has developed a comprehensive strategic plan to guide institutional
              growth and excellence. Our strategic priorities are designed to align academic
              rigor with industry demands, strengthen infrastructure, and ensure every student
              receives the support and opportunities needed to thrive. The strategic plan is
              reviewed annually and updated to reflect changing educational needs and
              institutional goals.
            </p>
          </Reveal>
        </div>

        {/* ── Divider ── */}
        <Reveal from="up">
          <div className="flex items-center gap-4 my-10">
            <div className="flex-1 h-px bg-border" />
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-sm font-bold text-primary tracking-wide uppercase">
                Strategic Priorities
              </span>
            </div>
            <div className="flex-1 h-px bg-border" />
          </div>
        </Reveal>

        {/* ── Pillars ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {strategicPillars.map((section, si) => {
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

        {/* ── Annual Review Note ── */}
        <Reveal from="up" delay={100}>
          <p className="text-sm text-muted-foreground italic text-center mt-8 mb-10 max-w-2xl mx-auto">
            The strategic plan is reviewed annually and updated to reflect changing educational
            needs and institutional goals.
          </p>
        </Reveal>
      </div>
    </Layout>
  );
};

export default StrategicPlan;