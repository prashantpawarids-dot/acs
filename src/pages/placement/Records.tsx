import { useEffect, useRef, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";
import { Card, CardContent } from "@/components/ui/card";

const yearData = [
  { year: "2024–25", placed: 185, companies: 35, dept: [{ name: "Arts", pct: 80 }, { name: "Commerce", pct: 90 }, { name: "Science", pct: 95 }] },
  { year: "2023–24", placed: 168, companies: 30, dept: [{ name: "Arts", pct: 78 }, { name: "Commerce", pct: 87 }, { name: "Science", pct: 92 }] },
  { year: "2022–23", placed: 145, companies: 22, dept: [{ name: "Arts", pct: 75 }, { name: "Commerce", pct: 84 }, { name: "Science", pct: 88 }] },
  { year: "2021–22", placed: 120, companies: 18, dept: [{ name: "Arts", pct: 72 }, { name: "Commerce", pct: 80 }, { name: "Science", pct: 85 }] },
  { year: "2020–21", placed: 98,  companies: 14, dept: [{ name: "Arts", pct: 68 }, { name: "Commerce", pct: 76 }, { name: "Science", pct: 82 }] },
];

const deptColors: Record<string, string> = {
  Arts:     "bg-violet-500",
  Commerce: "bg-orange-500",
  Science:  "bg-blue-500",
};

function useCountUp(target: number, duration = 1400, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatCard({ label, value, delay = 0, inView }: { label: string; value: number; delay?: number; inView: boolean }) {
  const [started, setStarted] = useState(false);
  useEffect(() => {
    if (inView) {
      const t = setTimeout(() => setStarted(true), delay);
      return () => clearTimeout(t);
    }
  }, [inView, delay]);
  const count = useCountUp(value, 1400, started);
  return (
    <Card
      className="text-center transition-all duration-700 hover:-translate-y-1 hover:shadow-lg"
      style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(24px)", transitionDelay: `${delay}ms` }}
    >
      <CardContent className="pt-6 pb-5">
        <div className="text-4xl font-extrabold text-primary tabular-nums">{count}</div>
        <div className="text-sm text-muted-foreground mt-1 font-medium">{label}</div>
      </CardContent>
    </Card>
  );
}

function DeptBar({ name, pct, inView, delay }: { name: string; pct: number; inView: boolean; delay: number }) {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    if (inView) {
      const t = setTimeout(() => setWidth(pct), delay);
      return () => clearTimeout(t);
    }
  }, [inView, pct, delay]);
  return (
    <div className="mb-3">
      <div className="flex justify-between text-xs font-medium mb-1">
        <span className="text-foreground">{name}</span>
        <span className="text-primary">{pct}%</span>
      </div>
      <div className="h-2.5 bg-muted rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-1000 ease-out ${deptColors[name] ?? "bg-primary"}`}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

const Records = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      <div className="container mx-auto py-8 px-4" ref={ref}>
        <PageHeader
          title="Placement Records"
          description="Year-wise placement statistics at SNBP ACS."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Placement & Career", href: "/placement/training-activities" },
            { label: "Placement Records" },
          ]}
        />

        <div className="mt-10 space-y-12">
          {yearData.map((y, yi) => (
            <div key={y.year}>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px flex-1 bg-border" />
                <span className="text-sm font-semibold text-muted-foreground px-3 py-1 rounded-full border border-border bg-muted/30">
                  Academic Year {y.year}
                </span>
                <div className="h-px flex-1 bg-border" />
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <StatCard label="Students Placed" value={y.placed} inView={inView} delay={yi * 100} />
                <StatCard label="Companies Visited" value={y.companies} inView={inView} delay={yi * 100 + 100} />
              </div>

              <Card>
                <CardContent className="pt-5 pb-4">
                  <p className="text-sm font-semibold text-foreground mb-4">Department-wise Placement %</p>
                  {y.dept.map((d, di) => (
                    <DeptBar key={d.name} name={d.name} pct={d.pct} inView={inView} delay={yi * 100 + di * 150 + 200} />
                  ))}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Records;