import { useEffect, useRef, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, CreditCard, ClipboardList, GraduationCap } from "lucide-react";

const BASE_URL = import.meta.env.VITE_STATIC_ASSETS;

/* ── Scroll-reveal hook ── */
const useReveal = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
};

const Reveal = ({
  children, from = "left", delay = 0
}: { children: React.ReactNode; from?: "left" | "right" | "up"; delay?: number }) => {
  const { ref, visible } = useReveal();
  const initial =
    from === "left" ? "translateX(-60px)" :
    from === "right" ? "translateX(60px)" :
    "translateY(40px)";
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translate(0)" : initial,
      transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
    }}>
      {children}
    </div>
  );
};

const admissionSteps = [
  "Purchase the prospectus from office and carefully read all instructions.",
  "Fill the Admission Form enclosed with the prospectus.",
  "Completely fill-up and attach all required documents with the form.",
  "Fill and submit the Undertaking with parent & student signature.",
  "Get Form verified at enquiry counter and attach the Payment Slip.",
  "Confirm admission from Principal / Vice Principal / Academic Head.",
  "Pay full fee at the accounts office on the same day of confirmation.",
  "If paying by cheque, admission confirmed only after cheque clearance.",
  "All admissions are provisional and subject to University confirmation.",
];

const documents = [
  "2 attested xerox copies of 10th & 12th mark sheets",
  "1 Xerox copy of 10th Certificate",
  "Original Leaving Certificate or Transfer Certificate with 2 xerox copies",
  "Original Migration Certificate (OMS students)",
  "Gap Certificate (If Applicable)",
  "Xerox copy of Caste Certificate & Caste Validity",
  "Xerox copy of Aadhar Card",
  "Other (as applicable)",
  "5 Passport size Photographs",
];

const feeRules = [
  { title: "Full Fee at Admission", desc: "As per the norms, full amount of fee to be paid at the time of admission." },
  { title: "Instalment Facility", desc: "50% of course fee at admission. Remaining via PDC not exceeding 10th September of the academic year." },
  { title: "Late Fee Applicable", desc: "If instalments not paid by 10th of allotted month, PDC bounces, or extended instalments are availed." },
  { title: "Other State / Foreign Students", desc: "Additional fees applicable as per university rules for students from other states or foreign countries." },
  { title: "Eligibility Fee", desc: "To be paid from 30th July to 15th August (new admissions only)." },
  { title: "Exam Fee", desc: "To be paid for every semester separately as per University declaration." },
  { title: "Project Fee", desc: "Applicable according to project subject added to the course/semester. Paid along with exam fees." },
  { title: "Tour / Industrial Visit", desc: "For industrial visit / study tour, charges will be applicable separately." },
  { title: "Other Activity Charges", desc: "Apart from academics, any other function or activity for students will have separate charges." },
  { title: "Fee Structure Changes", desc: "Any change in fee structure as per SPPU will be notified via circulars or notice board. Students must pay the difference accordingly." },
];

const SectionHeading = ({ icon: Icon, title, color }: { icon: React.ElementType; title: string; color: string }) => (
  <Reveal from="left">
    <div className={`flex items-center gap-3 mt-10 mb-5`}>
      <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center shadow-md`}>
        <Icon className="w-5 h-5 text-white" />
      </div>
      <h2 className="text-xl font-bold text-foreground tracking-tight">{title}</h2>
      <div className="flex-1 h-px bg-border ml-2" />
    </div>
  </Reveal>
);

const AdmissionProcess = () => {
  const [pdfHover, setPdfHover] = useState(false);

  return (
    <Layout>
      <div className="container mx-auto py-4 px-4">
        <PageHeader
          title="Admission Process & Guidelines"
          description="S.E. Society's SNBP College of Arts, Commerce, Science & Management Studies — Morwadi, Pimpri, Pune-18"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Academics", href: "/academics/arts" },
            { label: "Admission Process" },
          ]}
        />

        {/* ── College Badge ── */}
        <Reveal from="up" delay={100}>
          <div className="flex flex-wrap justify-center gap-2 mt-4 mb-2">
            {[
              "Affiliated to Savitribai Phule Pune University",
              "NAAC Accredited B++ Grade",
              "ISO Certified 21001:2018",
            ].map((tag) => (
              <span key={tag} className="px-4 py-1.5 text-xs font-semibold rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                {tag}
              </span>
            ))}
          </div>
        </Reveal>

        {/* ── PDF Card on TOP ── */}
        <Reveal from="up" delay={200}>
          <div className="flex justify-center mt-6">
            <div
              onMouseEnter={() => setPdfHover(true)}
              onMouseLeave={() => setPdfHover(false)}
              style={{
                transform: pdfHover ? "translateY(-12px) scale(1.03)" : "translateY(0) scale(1)",
                transition: "transform 0.35s ease, box-shadow 0.35s ease",
              }}
            >
              <Card className="w-64 text-center border-t-4 border-t-indigo-600 rounded-3xl shadow-xl overflow-visible">
                <CardContent className="pt-7 pb-6 px-5 flex flex-col items-center gap-3">
                  {/* Glow ring */}
                  <div className="relative flex items-center justify-center">
                    <span
                      className="absolute w-24 h-24 rounded-full bg-indigo-200/40"
                      style={{ animation: "ping-slow 2.5s ease-in-out infinite" }}
                    />
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/337/337946.png"
                      alt="PDF"
                      className="relative z-10 w-16 drop-shadow-2xl"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">Admission Process & Guidelines</p>
                    <p className="text-xs text-muted-foreground mt-0.5">Official PDF Document</p>
                  </div>
                  <Button
                    size="sm"
                    className="rounded-full gap-2 w-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-md"
                    onClick={() => window.open(`${BASE_URL}/PDF/FeeStructure/AdmissionProcessGuidelines.pdf`, "_blank")}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    View PDF
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </Reveal>

        {/* ── Section 1: Admission Procedure ── */}
        <SectionHeading icon={ClipboardList} title="Admission Procedure" color="bg-indigo-600" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {admissionSteps.map((step, i) => (
            <Reveal key={i} from={i % 2 === 0 ? "left" : "right"} delay={i * 60}>
              <Card className="rounded-2xl border-l-4 border-l-indigo-500 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                <CardContent className="pt-4 pb-4 px-4 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <p className="text-sm text-foreground leading-snug">{step}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        {/* ── Section 2: Documents Required ── */}
        <SectionHeading icon={FileText} title="Documents Required" color="bg-emerald-500" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {documents.map((doc, i) => (
            <Reveal key={i} from={i % 2 === 0 ? "left" : "right"} delay={i * 60}>
              <Card className="rounded-2xl border-l-4 border-l-emerald-500 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                <CardContent className="pt-4 pb-4 px-4 flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0 mt-2" />
                  <p className="text-sm text-foreground leading-snug">{doc}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        {/* ── Section 3: Fee Instructions ── */}
        <SectionHeading icon={CreditCard} title="Fee Instructions — Payment of Fees" color="bg-orange-500" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {feeRules.map((rule, i) => (
            <Reveal key={i} from={i % 2 === 0 ? "left" : "right"} delay={i * 60}>
              <Card className="rounded-2xl border-t-4 border-t-orange-500 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                <CardContent className="pt-4 pb-4 px-4">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                    </span>
                    <p className="text-sm font-bold text-foreground">{rule.title}</p>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed pl-7">{rule.desc}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

      </div>

      <style>{`
        @keyframes ping-slow {
          0%   { transform: scale(0.9); opacity: 0.5; }
          70%  { transform: scale(1.5); opacity: 0; }
          100% { transform: scale(1.5); opacity: 0; }
        }
      `}</style>
    </Layout>
  );
};

export default AdmissionProcess;