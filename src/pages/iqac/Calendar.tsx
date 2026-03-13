import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const IQAC_CALENDAR_PDF = "http://snbpacsms.com/assets/PDF/academic/Calendar/IQACCalender2025-26.pdf";

const Calendar = () => {
  return (
    <Layout>
      <PageHeader
        title="IQAC Calendar"
        description="IQAC activities calendar."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "IQAC", href: "/iqac/meeting" },
          { label: "Calendar" },
        ]}
      />

      <section className="py-4">
        <div className="container px-4">

          {/* Info card */}
          <div className="bg-card rounded-xl p-4 shadow-soft border border-border mb-4">
            <p className="text-foreground mb-2">
              The IQAC calendar lists meeting schedules, workshop dates, and reporting deadlines.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Meeting schedules</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Workshop dates</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Reporting deadlines</li>
            </ul>
          </div>

          {/* PDF Card */}
          <div className="flex justify-center">
            <div
              onClick={() => window.open(IQAC_CALENDAR_PDF, "_blank")}
              className="w-52 text-center cursor-pointer transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl border border-border rounded-2xl border-t-4 border-t-indigo-600 p-5 flex flex-col items-center gap-3 bg-card"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/337/337946.png"
                alt="PDF"
                className="w-20 drop-shadow-xl"
              />
              <p className="text-xs font-semibold text-foreground text-center leading-snug">
                IQAC Calendar
              </p>
              <Button size="sm" className="rounded-full gap-2 w-full bg-indigo-600 hover:bg-indigo-700 text-white">
                <ExternalLink className="w-3.5 h-3.5" /> View PDF
              </Button>
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
};

export default Calendar;