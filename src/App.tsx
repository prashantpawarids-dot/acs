import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Downloads from "./pages/Downloads";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import ApplyNow from "./pages/ApplyNow";
import NotFound from "./pages/NotFound";
import TeachingStaff from "./pages/human-capital/TeachingStaff";
import GuestFaculty from "./pages/human-capital/GuestFaculty";
import FacultyDevelopmentProgram from "./pages/human-capital/FacultyDevelopmentProgram";
import NonTeachingSatff from "./pages/human-capital/NonTeaching";
import Arts from "./pages/academics/arts";
import CodeOfConduct from "./pages/administration/CodeOfConduct";
import AcademicLeader from "./pages/administration/AcademicLeader";
import BoardOfManagement from "./pages/administration/BoardOfManagement";
import FeeStructure from "./pages/academics/FeeStructure";
import Commerce from "./pages/academics/Commerce";
import Science from "./pages/academics/Science";
import Certification from "./pages/academics/Certification";
import FeesPolicies from "./pages/academics/FeesPolicies";
import FeesChart from "./pages/academics/FeesChart";
import AdmissionProcess from "./pages/academics/AdmissionProcess";
import Prospectus from "./pages/academics/Prospectus";
import MoUs from "./pages/academics/MoUs";
import Linkages from "./pages/academics/Linkages";
import GrievanceCell from "./pages/student-corner/GrievanceCell";
import InternalCell from "./pages/student-corner/InternalCell";
import AntiRagging from "./pages/student-corner/AntiRaging";
import EqualOpportunityCell from "./pages/student-corner/EqualOpportunityCell";
import Sports from "./pages/student-corner/Sports";
import NSS from "./pages/student-corner/NSS";
import HealthFacilities from "./pages/student-corner/HealthFacilities";
import DifferentlyAbled from "./pages/student-corner/DifferentlyAbled";
import CollegeCirculars from "./pages/information/CollegeCirculars";
import UniversityCirculars from "./pages/information/UniversityCirculars";
import Announcements from "./pages/information/Announcements";
import News from "./pages/information/News";
import ResearchIIC from "./pages/research/IIC";
import StartupInnovation from "./pages/research/StartupInnovation";
import Publications from "./pages/research/Publications";
import TrainingActivities from "./pages/placement/TrainingActivities";
import PrePlacement from "./pages/placement/PrePlacement";
import Internship from "./pages/placement/Internship";
import CampusDrive from "./pages/placement/CampusDrive";
import Alumini from "./pages/placement/alumini";
import Placement1 from "./pages/placement/pastplacement/placement2020-21";
import Placement2 from "./pages/placement/pastplacement/placement2021-22";
import Placement3 from "./pages/placement/pastplacement/placement2022-23";
import Placement4 from "./pages/placement/pastplacement/placement2023-24";
import Placement5 from "./pages/placement/pastplacement/placement2024-25";
import Records from "./pages/placement/Records";
import IQACMeeting from "./pages/iqac/Meeting";
import IQACCalendar from "./pages/iqac/Calendar";
import IQACInitiative from "./pages/iqac/Initiative";
import IIQA from "./pages/iqac/IIQA";
import SSR from "./pages/iqac/SSR";
import AQAR from "./pages/iqac/AQAR";
import BestPractices from "./pages/iqac/BestPractices";
import AboutLibrary from "./pages/library/AboutLibrary";
import TeachingNotes from "./pages/library/TeachingNotes";
import Magazine from "./pages/library/Magazine";
import ProspectusPage from "./pages/library/ProspectusPage";
import PlacementBrochure from "./pages/library/PlacementBrochure";
import Journals from "./pages/library/Journals";
import AcademicReport from "./pages/reports/AcademicReport";
import ActivityReport from "./pages/reports/ActivityReport";
import PlacementReport from "./pages/reports/PlacementReport";
import IICReport from "./pages/reports/IICReport";
import Feedback from "./pages/Feedback";
import FeedbackForm from "./pages/feedback/FeedbackForm";
import FeedbackReport from "./pages/feedback/FeedbackReport";
import FeedbackAnalysis from "./pages/feedback/FeedbackAnalysis";
import ActionTaken from "./pages/feedback/ActionTaken";
import StudentLogin from "./pages/StudentLogin";
import StaffLogin from "./pages/StaffLogin";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Sitemap from "./pages/Sitemap";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about/:page" element={<About />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/apply-now" element={<ApplyNow />} />

          {/* Human Capital */}
          <Route path="/human-capital/teaching-staff" element={<TeachingStaff />} />
          <Route path="/human-capital/guest-faculty" element={<GuestFaculty />} />
          <Route path="/human-capital/fdp" element={<FacultyDevelopmentProgram />} />
          <Route path="/human-capital/non-teaching-staff" element={<NonTeachingSatff />} />

          {/* Administration */}
          <Route path="/administration/board-of-management" element={<BoardOfManagement />} />
          <Route path="/administration/code-of-conduct" element={<CodeOfConduct />} />
          <Route path="/administration/academic-leadership" element={<AcademicLeader />} />

          {/* Academics */}
          <Route path="/academics/arts" element={<Arts />} />
          <Route path="/academics/commerce" element={<Commerce />} />
          <Route path="/academics/science" element={<Science />} />
          <Route path="/academics/certification" element={<Certification />} />
          <Route path="/academics/fees-policies" element={<FeesPolicies />} />
          <Route path="/academics/fees-chart" element={<FeesChart />} />
          <Route path="/academics/admission-process" element={<AdmissionProcess />} />
          <Route path="/academics/prospectus" element={<Prospectus />} />
          <Route path="/academics/mous" element={<MoUs />} />
          <Route path="/academics/linkages" element={<Linkages />} />
          <Route path="/academics/fee-structure/:program" element={<FeeStructure />} />

          {/* Student Corner */}
          <Route path="/student-corner/grievance-cell" element={<GrievanceCell />} />
          <Route path="/student-corner/complaint-cell" element={<InternalCell />} />
          <Route path="/student-corner/anti-ragging" element={<AntiRagging />} />
          <Route path="/student-corner/equal-opportunity" element={<EqualOpportunityCell />} />
          <Route path="/student-corner/sports" element={<Sports />} />
          <Route path="/student-corner/nss" element={<NSS />} />
          <Route path="/student-corner/health-facilities" element={<HealthFacilities />} />
          <Route path="/student-corner/differently-abled" element={<DifferentlyAbled />} />

          {/* Information Corner */}
          <Route path="/information/circulars/college" element={<CollegeCirculars />} />
          <Route path="/information/circulars/university" element={<UniversityCirculars />} />
          <Route path="/information/announcements" element={<Announcements />} />
          <Route path="/information/news" element={<News />} />

          {/* Research & Development */}
          <Route path="/research/iic" element={<ResearchIIC />} />
          <Route path="/research/startup-innovation" element={<StartupInnovation />} />
          <Route path="/research/publications" element={<Publications />} />

          {/* Placement & Career */}
          <Route path="/placement/training-activities" element={<TrainingActivities />} />
          <Route path="/placement/pre-placement" element={<PrePlacement />} />
          <Route path="/placement/internship" element={<Internship />} />
          <Route path="/placement/campus-drive" element={<CampusDrive />} />
          <Route path="/placement/alumini" element={<Alumini />} />
          <Route path="/placement/records" element={<Records />} />
          <Route path="/placement/past-placements/2020-21" element={<Placement1 />} />
          <Route path="/placement/past-placements/2021-22" element={<Placement2 />} />
          <Route path="/placement/past-placements/2022-23" element={<Placement3 />} />
          <Route path="/placement/past-placements/2023-24" element={<Placement4 />} />
          <Route path="/placement/past-placements/2024-25" element={<Placement5 />} />

          {/* IQAC */}
          <Route path="/iqac/meeting" element={<IQACMeeting />} />
          <Route path="/iqac/calendar" element={<IQACCalendar />} />
          <Route path="/iqac/initiative" element={<IQACInitiative />} />
          <Route path="/iqac/iiqa" element={<IIQA />} />
          <Route path="/iqac/ssr" element={<SSR />} />
          <Route path="/iqac/aqar" element={<AQAR />} />
          <Route path="/iqac/best-practices" element={<BestPractices />} />

          {/* Library & Publications */}
          <Route path="/library/about" element={<AboutLibrary />} />
          <Route path="/library/teaching-notes" element={<TeachingNotes />} />
          <Route path="/library/magazine" element={<Magazine />} />
          <Route path="/library/prospectus" element={<ProspectusPage />} />
          <Route path="/library/placement-brochure" element={<PlacementBrochure />} />
          <Route path="/library/journals" element={<Journals />} />

          {/* Reports & Downloads */}
          <Route path="/reports/academic" element={<AcademicReport />} />
          <Route path="/reports/activity" element={<ActivityReport />} />
          <Route path="/reports/placement" element={<PlacementReport />} />
          <Route path="/reports/iic" element={<IICReport />} />

          {/* Feedback */}
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/feedback/form" element={<FeedbackForm />} />
          <Route path="/feedback/report" element={<FeedbackReport />} />
          <Route path="/feedback/analysis" element={<FeedbackAnalysis />} />
          <Route path="/feedback/action-taken" element={<ActionTaken />} />

          {/* Utility */}
          <Route path="/student-login" element={<StudentLogin />} />
          <Route path="/staff-login" element={<StaffLogin />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/sitemap" element={<Sitemap />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
