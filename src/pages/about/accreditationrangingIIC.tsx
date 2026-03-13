import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";
import { aboutData } from "@/data/about/aboutData";
import { CheckCircle2, Lightbulb } from "lucide-react";

const AccreditationRankingIIC = () => {
  const iic = aboutData["iic"];

  const lines = iic.content
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);

  const mainHeading = lines.find((l) => !l.startsWith("•"));
  const introLines  = lines.filter((l) => !l.startsWith("•") && l !== mainHeading);
  const bullets     = lines.filter((l) => l.startsWith("•")).map((l) => l.replace(/^•\s*/, ""));

  return (
    <Layout>
      <PageHeader
        title={iic.title}
        description={iic.description}
        breadcrumbs={[
          { label: "About Us", href: "/about/se-society" },
          { label: "Accreditation & Ranking", href: "/about/accreditation-naac" },
          { label: "IIC" },
        ]}
      />

      <section className="py-10">
        <div className="container max-w-3xl mx-auto px-4">
          <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm">

            {/* Emerald accent bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-emerald-600 via-emerald-300 to-transparent" />

            <div className="p-6 sm:p-8">

              {/* Icon + Title */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-emerald-600 flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-0.5">
                    Accreditation & Ranking
                  </p>
                  <h2 className="text-xl font-bold text-foreground leading-tight">{mainHeading}</h2>
                </div>
              </div>

              {/* Intro paragraphs */}
              {introLines.map((para, i) => (
                <p key={i} className="text-sm text-muted-foreground leading-relaxed mb-3 text-justify">
                  {para}
                </p>
              ))}

              {/* Bullet points — one per row */}
              {bullets.length > 0 && (
                <div className="mt-5 space-y-2">
                  {bullets.map((point, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 bg-muted/30 rounded-xl px-4 py-3 border border-border/60 hover:bg-emerald-50/60 hover:border-emerald-200 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5 text-emerald-500" />
                      <p className="text-sm text-foreground leading-snug">{point}</p>
                    </div>
                  ))}
                </div>
              )}

            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AccreditationRankingIIC;