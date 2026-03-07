import { useEffect, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";
import { ExternalLink, Download, BookOpen, Sparkles } from "lucide-react";

const BASE_URL = import.meta.env.VITE_STATIC_ASSETS;
const PDF_URL = `${BASE_URL}/PDF/FeeStructure/prospectus.pdf`;

const Prospectus = () => {
  const [visible, setVisible] = useState(false);
  const [floating, setFloating] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setVisible(true), 100);
    const t2 = setTimeout(() => setFloating(true), 600);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <Layout>
      <div className="container mx-auto py-4 px-4">
        <PageHeader
          title="Prospectus"
          description="Download the college prospectus with complete information."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Academics", href: "/academics/arts" },
            { label: "Prospectus" },
          ]}
        />

        <div
          className="flex flex-col items-center justify-center py-8 gap-6"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          {/* Glow ring */}
          <div className="relative flex items-center justify-center">
            {/* Outer pulse ring */}
            <span
              className="absolute w-52 h-52 rounded-full bg-primary/10"
              style={{
                animation: floating ? "ping-slow 2.5s ease-in-out infinite" : "none",
              }}
            />
            {/* Middle ring */}
            <span className="absolute w-40 h-40 rounded-full bg-primary/15" />

            {/* Main card */}
            <div
              className="relative z-10 w-56 rounded-3xl border-t-4 border-t-indigo-600 bg-card shadow-2xl flex flex-col items-center px-5 pt-7 pb-6 gap-4"
              style={{
                animation: floating ? "float 3s ease-in-out infinite" : "none",
              }}
            >
              {/* Sparkle badge */}
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg whitespace-nowrap">
                <Sparkles className="w-3 h-3" /> SNBP ACS 2026-27 Prospectus
              </span>

              {/* Book icon */}
              <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center shadow-inner">
                <BookOpen className="w-8 h-8 text-indigo-600" />
              </div>

              {/* PDF image */}
              <img
                src="https://cdn-icons-png.flaticon.com/512/337/337946.png"
                alt="PDF"
                className="w-16 drop-shadow-xl"
              />

              <div className="text-center">
                <p className="text-sm font-bold text-foreground">College Prospectus</p>
                <p className="text-xs text-muted-foreground mt-0.5">Complete Program Guide</p>
              </div>

              <div className="flex flex-col gap-2 w-full">
                <Button
                  size="sm"
                  className="rounded-full gap-2 w-full bg-indigo-600 hover:bg-indigo-700 text-white"
                  onClick={() => window.open(PDF_URL, "_blank")}
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  View Prospectus
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="rounded-full gap-2 w-full border-indigo-300 text-indigo-600 hover:bg-indigo-50"
                  onClick={() => {
                    const a = document.createElement("a");
                    a.href = PDF_URL;
                    a.download = "SNBPACS_Prospectus.pdf";
                    a.click();
                  }}
                >
                  <Download className="w-3.5 h-3.5" />
                  Download
                </Button>
              </div>
            </div>
          </div>

       
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
        @keyframes ping-slow {
          0%   { transform: scale(0.9); opacity: 0.6; }
          70%  { transform: scale(1.3); opacity: 0; }
          100% { transform: scale(1.3); opacity: 0; }
        }
      `}</style>
    </Layout>
  );
};

export default Prospectus;