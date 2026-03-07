import { useEffect, useRef, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Trophy, Shield, Users } from "lucide-react";

const BASE_URL = import.meta.env.VITE_STATIC_ASSETS;

/* ── Scroll-reveal hook ── */
const useReveal = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); } else { setVisible(false); } },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
};

const Reveal = ({ children, from = "up", delay = 0 }: {
  children: React.ReactNode; from?: "left" | "right" | "up"; delay?: number;
}) => {
  const { ref, visible } = useReveal();
  const init = from === "left" ? "translateX(-50px)" : from === "right" ? "translateX(50px)" : "translateY(40px)";
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translate(0)" : init,
      transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
    }}>
      {children}
    </div>
  );
};

const pillars = [
  { name: "Dr. Sudhir Atwadkar", role: "Vice Principal", sub: "SNBP ACS & MS", img: "http://snbpacsms.com/WebsitePages/TeachingPhoto/sudhirsirsports.png" },
  { name: "Dr. Firoz Shaikh",    role: "Director of Physical Education", sub: "SNBP Group of Institute", img: "http://snbpacsms.com/WebsitePages/TeachingPhoto/Firoz.jpg" },
  { name: "Mr. Danish Sayyed",   role: "Director of Physical Education", sub: "SNBP ACS & MS", img: "http://snbpacsms.com/WebsitePages/TeachingPhoto/danishsports.png" },
];

const facilities = [
  "Kabaddi Court", "Volleyball Court", "Throwball Court", "Kabaddi Court",
  "Volleyball Court", "Throwball Court", "Table Tennis Hall", "Carom Hall",
  "Boxing Hall", "Archery Range", "Basket Ball Court", "Chess Hall",
  "Wrestling Court", "Judo", "Yoga", "Recreational Hall",
  "Half Hockey Court", "Separate Changing Room for Men & Women",
];

const supports = [
  "The Students are provided complete sports kit including playing kit and required equipment's free of cost.",
  "Winner Teams are given Complementary Gifts.",
  "Entry Fees & DA for competitions up to National level are given by the College.",
  "Concessions in academic fees are also given for extra ordinary sports persons.",
  "World class equipment provided to the students for daily practice and for competitions.",
  "Special Coaching are provided to the players which help the player participation in State & National in Morning 7.30 am to 9.00 am & Evening 4.00 to 6.00 pm.",
];

const pdfReports = [
  { label: "Sports Annual Report 2023–24", href: `http://snbpacsms.com/WebsitePages/PDF/SportActivityannuarepor23-24.pdf`, color: "border-t-indigo-600", badge: "bg-indigo-100 text-indigo-700 border-indigo-200", btn: "bg-indigo-600 hover:bg-indigo-700 text-white" },
  { label: "Sports Annual Report 2022–23", href: `http://snbpacsms.com/WebsitePages/PDF/FINALREPORT2022-23.pdf`, color: "border-t-emerald-500", badge: "bg-emerald-100 text-emerald-700 border-emerald-200", btn: "bg-emerald-500 hover:bg-emerald-600 text-white" },
  { label: "Sports Annual Report 2021–22", href: `http://snbpacsms.com/WebsitePages/PDF/SPORTANNUALREPORT2021-22.pdf`, color: "border-t-orange-500", badge: "bg-orange-100 text-orange-700 border-orange-200", btn: "bg-orange-500 hover:bg-orange-600 text-white" },
  { label: "Sports Annual Report 2019–20", href: `http://snbpacsms.com/WebsitePages/PDF/sports_report_2019-20.pdf`, color: "border-t-rose-500", badge: "bg-rose-100 text-rose-700 border-rose-200", btn: "bg-rose-500 hover:bg-rose-600 text-white" },
];

const Sports = () => {
  return (
    <Layout>
      <div className="container mx-auto py-4 px-4">
        <PageHeader
          title="Sports"
          description="Sports facilities and activities at SNBP ACS."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Student Corner", href: "/student-corner/grievance-cell" },
            { label: "Sports" },
          ]}
        />

        {/* ── Intro Paragraphs ── */}
        <div className="mt-6 space-y-5 max-w-4xl mx-auto">
          <Reveal from="up" delay={0}>
            <p className="text-base text-foreground leading-relaxed text-justify">
              Physical Education is an integral part of the total education system. It helps in the attainment of the ultimate aim of education i.e. the achievement of holistic development. Games and Sports play a vital role in a student's life. Sports remove our mental exhaustion. The Department of Physical Education and Sports marks itself as one of the most efficacious Departments of our college. It strives to excel at all levels and bring laurels to the college. We are continuously improving in the sports field.
            </p>
          </Reveal>
          <Reveal from="up" delay={100}>
            <p className="text-base text-foreground leading-relaxed text-justify">
              Considering the concept of <span className="font-semibold text-primary">"SPORTS FOR ALL"</span> throughout the entire session we organized Inter-collegiate, Inter zonal tournament &amp; Sporto Cultural Carnival for students as well as some sports activities for staff (teaching and non-teaching). It is one of the largest co-curricular activity programs that offer an extensive opportunity to all the students and staff. This venture shall enable the students and staff to have fun, learn new sports, enhance social interaction, and tests one's physical capability. These competitions also offer a break from the daily routine tasks and recreate or re-energetic them.
            </p>
          </Reveal>
          <Reveal from="up" delay={150}>
            <p className="text-base text-foreground leading-relaxed text-justify">
              Every year our college students participate in university and Private tournaments such as University, Zonal Level Hockey, Fencing, Best Physiques tournament etc. Our College team also participates in various university games like Kabaddi, Football, Wrestling, and cricket. Our students have been selected in <span className="font-semibold text-primary">Khelo India</span>, and national Level Hockey Tournament. Our college not only participates in university level tournaments but also in Private tournaments like Open Kabaddi tournament, CM Chashak Wrestling Competition. The College always motivated to the students to participate in various games every year.
            </p>
          </Reveal>
        </div>

        {/* ── Divider ── */}
        <Reveal from="up">
          <div className="flex items-center gap-4 my-10">
            <div className="flex-1 h-px bg-border" />
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm font-bold text-primary tracking-wide uppercase">Pillars of Sports Department</span>
            </div>
            <div className="flex-1 h-px bg-border" />
          </div>
        </Reveal>

        {/* ── Pillars ── */}
        <div className="flex flex-wrap justify-center gap-8">
          {pillars.map((p, i) => (
            <Reveal key={p.name} from={i % 2 === 0 ? "left" : "right"} delay={i * 100}>
              <div className="flex flex-col items-center text-center w-52 group">
                <div className="relative mb-4">
                  <div className="absolute inset-0 rounded-full bg-primary/20 scale-110 group-hover:scale-125 transition-transform duration-500" />
                  <img
                    src={p.img}
                    alt={p.name}
                    className="relative z-10 w-32 h-36 object-cover rounded-2xl shadow-xl group-hover:-translate-y-2 transition-transform duration-400"
                  />
                </div>
                <p className="font-bold text-foreground text-sm">{p.name}</p>
                <p className="text-xs text-primary font-semibold mt-0.5">{p.role}</p>
                <p className="text-xs text-muted-foreground">{p.sub}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ── Facilities ── */}
        <Reveal from="up">
          <div className="flex items-center gap-4 my-10">
            <div className="flex-1 h-px bg-border" />
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200">
              <Shield className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-bold text-emerald-700 tracking-wide uppercase">Sports Facilities Available in College</span>
            </div>
            <div className="flex-1 h-px bg-border" />
          </div>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 max-w-5xl mx-auto">
          {facilities.map((f, i) => (
            <Reveal key={i} from={i % 2 === 0 ? "left" : "right"} delay={i * 40}>
              <div className="flex items-center gap-2 py-2 px-3 rounded-xl bg-emerald-50 border border-emerald-100 hover:bg-emerald-100 hover:-translate-y-1 transition-all duration-300">
                <span className="w-5 h-5 rounded-full bg-emerald-500 text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0">
                  {i + 1}
                </span>
                <span className="text-xs font-medium text-emerald-800 leading-tight">{f}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal from="up" delay={100}>
          <p className="text-sm text-muted-foreground italic text-center mt-4 max-w-2xl mx-auto">
            Match practices at International Hockey Turf Ground at our sister branch Chikali.
          </p>
        </Reveal>

        {/* ── Support ── */}
        <Reveal from="up">
          <div className="flex items-center gap-4 my-10">
            <div className="flex-1 h-px bg-border" />
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-200">
              <Trophy className="w-4 h-4 text-orange-600" />
              <span className="text-sm font-bold text-orange-700 tracking-wide uppercase">Support Provided to the Students</span>
            </div>
            <div className="flex-1 h-px bg-border" />
          </div>
        </Reveal>

        <div className="space-y-3 max-w-3xl mx-auto">
          {supports.map((s, i) => (
            <Reveal key={i} from={i % 2 === 0 ? "left" : "right"} delay={i * 60}>
              <div className="flex items-start gap-3 py-3 px-4 rounded-xl bg-orange-50 border border-orange-100 hover:bg-orange-100 hover:translate-x-1 transition-all duration-300">
                <span className="w-6 h-6 rounded-full bg-orange-500 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <p className="text-sm text-foreground leading-relaxed">{s}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ── PDF Reports ── */}
        <Reveal from="up">
          <div className="flex items-center gap-4 my-10">
            <div className="flex-1 h-px bg-border" />
            <span className="text-sm font-bold text-muted-foreground tracking-wide uppercase px-4">Annual Reports</span>
            <div className="flex-1 h-px bg-border" />
          </div>
        </Reveal>

        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {pdfReports.map((p, i) => (
            <Reveal key={p.label} from={i % 2 === 0 ? "left" : "right"} delay={i * 80}>
              <Card className={`w-52 text-center cursor-pointer transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl border-t-4 ${p.color} rounded-2xl`}>
                <CardContent className="pt-6 pb-5 px-4 flex flex-col items-center gap-3">
                  <img src="https://cdn-icons-png.flaticon.com/512/337/337946.png" alt="PDF" className="w-16 drop-shadow-xl" />
                  <span className={`text-xs font-bold tracking-wide uppercase px-3 py-1 rounded-full border text-center leading-tight ${p.badge}`}>
                    {p.label}
                  </span>
                  <Button size="sm" className={`rounded-full gap-2 w-full ${p.btn}`} onClick={() => window.open(p.href, "_blank")}>
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

export default Sports;