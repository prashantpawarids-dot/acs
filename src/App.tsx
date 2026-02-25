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
import GenericPage from "./pages/GenericPage";
import NotFound from "./pages/NotFound";
import TeachingStaff from "./pages/human-capital/TeachingStaff";
import GuestFaculty from "./pages/human-capital/GuestFaculty";
import FacultyDevelopmentProgram from "./pages/human-capital/FacultyDevelopmentProgram";
import NonTeachingSatff from "./pages/human-capital/NonTeaching";
import Arts from "./pages/academics/arts";
import CodeOfConduct from "./pages/administration/CodeOfConduct";
import AcademicLeader from "./pages/administration/AcademicLeader";
import FeeStructure from "./pages/academics/FeeStructure";
import GrievanceCell from "./pages/student-corner/GrievanceCell";
import InternalCell from "./pages/student-corner/InternalCell";
import AntiRagging from "./pages/student-corner/AntiRaging";
import EqualOpportunityCell from "./pages/student-corner/EqualOpportunityCell";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Home */}
          <Route path="/" element={<Index />} />
          
          {/* About Us */}
          <Route path="/about/:page" element={<About />} />
          
          {/* Downloads */}
          <Route path="/downloads" element={<Downloads />} />
          
          {/* Gallery */}
          <Route path="/gallery" element={<Gallery />} />
          
          {/* Contact */}
          <Route path="/contact" element={<Contact />} />
          
          {/* Apply Now */}
          <Route path="/apply-now" element={<ApplyNow />} />
          
          {/* Human Capital */}
          <Route path="/human-capital/teaching-staff" element={<TeachingStaff />} />
          <Route path="/human-capital/guest-faculty" element={<GuestFaculty />} />
          <Route path="/human-capital/fdp" element={<FacultyDevelopmentProgram />} />


           <Route path="/human-capital/non-teaching-staff" element={<NonTeachingSatff />} />
          
          {/* Administration */}
          <Route path="/administration/code-of-conduct" element={<CodeOfConduct />} />
         <Route path="/administration/academic-leadership" element={<AcademicLeader />} />
          
          {/* Academics - Fee Structure */}
          <Route path="/academics/fee-structure/:program" element={<FeeStructure />} />

            <Route path="/academics/arts" element={<Arts />} />

            <Route path="/student-corner/grievance-cell" element={<GrievanceCell />} />
            <Route path="/student-corner/complaint-cell" element={<InternalCell />} />
            <Route path="/student-corner/anti-ragging" element={<AntiRagging />} />
            <Route path="/student-corner/equal-opportunity" element={<EqualOpportunityCell />} />
          
          {/* Generic Pages for all other navigation items */}
          <Route path="/administration/*" element={<GenericPage />} />
          <Route path="/human-capital/*" element={<GenericPage />} />
          <Route path="/academics/*" element={<GenericPage />} />
          <Route path="/student-corner/*" element={<GenericPage />} />
          <Route path="/information/*" element={<GenericPage />} />
          <Route path="/research/*" element={<GenericPage />} />
          <Route path="/placement/*" element={<GenericPage />} />
          <Route path="/iqac/*" element={<GenericPage />} />
          <Route path="/library/*" element={<GenericPage />} />
          <Route path="/reports/*" element={<GenericPage />} />
          <Route path="/feedback" element={<GenericPage />} />
          <Route path="/student-login" element={<GenericPage />} />
          <Route path="/staff-login" element={<GenericPage />} />
          <Route path="/privacy" element={<GenericPage />} />
          <Route path="/terms" element={<GenericPage />} />
          <Route path="/sitemap" element={<GenericPage />} />
          
          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
