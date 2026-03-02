import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";

const feedbackPdfs = [
  { label: "Student Feedback",  href: "http://snbpacsms.com/WebsitePages/PDF/Feedback/Studentfedbackform.pdf",   color: "border-t-blue-500",   badge: "bg-blue-100 text-blue-700 border-blue-200",     btn: "bg-blue-500 hover:bg-blue-600 text-white" },
  { label: "Parent Feedback",   href: "http://snbpacsms.com/WebsitePages/PDF/Feedback/Parentsfeedbackformat.pdf", color: "border-t-indigo-600", badge: "bg-indigo-100 text-indigo-700 border-indigo-200", btn: "bg-indigo-600 hover:bg-indigo-700 text-white" },
  { label: "Alumni Feedback",   href: "http://snbpacsms.com/WebsitePages/PDF/Feedback/AlumniFeedbackformat.pdf",  color: "border-t-emerald-500", badge: "bg-emerald-100 text-emerald-700 border-emerald-200", btn: "bg-emerald-500 hover:bg-emerald-600 text-white" },
  { label: "Employer Feedback", href: "http://snbpacsms.com/WebsitePages/PDF/Feedback/EmployerFeedbackform.pdf",  color: "border-t-orange-500", badge: "bg-orange-100 text-orange-700 border-orange-200", btn: "bg-orange-500 hover:bg-orange-600 text-white" },
];

const questionnaires = [
  "Student Feedback",
  "Parent Feedback",
  "Teacher Feedback",
  "Alumni Feedback",
];

const processSteps = [
  { label: "Analysis",  sub: "Feedback Analysis" },
  { label: "Report",    sub: "Areas of Improvement" },
  { label: "Action",    sub: "Action Taken Report" },
];

const FeedbackForm = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8 px-4">
        <PageHeader
          title="Feedback Form"
          description="Submit feedback through our online form."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Feedback", href: "/feedback/form" },
            { label: "Form" },
          ]}
        />

        {/* PDF Cards */}
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {feedbackPdfs.map((p) => (
            <Card
              key={p.label}
              className={`w-52 text-center cursor-pointer transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl border-t-4 ${p.color} rounded-2xl`}
            >
              <CardContent className="pt-6 pb-5 px-4 flex flex-col items-center gap-3">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/337/337946.png"
                  alt="PDF"
                  className="w-20 drop-shadow-xl"
                />
                <span className={`text-xs font-bold tracking-wide uppercase px-3 py-1 rounded-full border text-center leading-tight ${p.badge}`}>
                  {p.label}
                </span>
                <Button
                  size="sm"
                  className={`rounded-full gap-2 w-full ${p.btn}`}
                  onClick={() => window.open(p.href, "_blank")}
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  View PDF
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feedback Process Diagram */}
        <Card className="mt-10">
          <CardContent className="pt-6 pb-8 px-6">
            <h2 className="text-lg font-bold text-center text-foreground mb-8 tracking-wide uppercase">
              Feedback Process
            </h2>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4">

              {/* Questionnaire Column */}
              <div className="flex flex-col items-center gap-2 w-44">
                <div className="w-full bg-blue-600 text-white text-sm font-bold text-center py-2 px-3 rounded-lg mb-1">
                  Questionnaire
                </div>
                {questionnaires.map((q) => (
                  <div
                    key={q}
                    className="w-full bg-blue-500 text-white text-xs font-medium text-center py-2 px-3 rounded-md"
                  >
                    {q}
                  </div>
                ))}
              </div>

              {/* Arrow */}
              <ArrowRight className="w-7 h-7 text-blue-500 flex-shrink-0 rotate-0 md:rotate-0 rotate-90" />

              {/* Analysis → Report → Action */}
              {processSteps.map((step, idx) => (
                <div key={step.label} className="flex items-center gap-4">
                  <div className="flex flex-col items-center w-40">
                    <div className="w-full bg-blue-600 text-white text-sm font-bold text-center py-2 px-3 rounded-lg mb-1">
                      {step.label}
                    </div>
                    <div className="w-full bg-blue-500/80 text-white text-xs font-medium text-center py-6 px-3 rounded-md leading-snug">
                      {step.sub}
                    </div>
                  </div>
                  {idx < processSteps.length - 1 && (
                    <ArrowRight className="w-7 h-7 text-blue-500 flex-shrink-0" />
                  )}
                </div>
              ))}

            </div>
          </CardContent>
        </Card>

      </div>
    </Layout>
  );
};

export default FeedbackForm;