import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const GuestFaculty = () => {
  const guestFacultyByYear = {
    "2023-24": [
      { no: 1, name: "Dr. Pushpraji Wagh", topic: "Staff Sensibility & Professionalism" },
      { no: 2, name: "Mr. Indraject Jadhav", topic: "Communication Skill & Creative Thinking" },
      { no: 3, name: "Mr. Nishant Pachpor", topic: "Introduction to Computer network & Hardware" },
      { no: 4, name: "Mr. Rishikesh Kumar", topic: "Dugital Marketing" },
      { no: 5, name: "Mr. Manoj Patil", topic: "Career Gaudiance" },
      { no: 6, name: "Mrs. Asita Ghewari", topic: "Connect the Dots: Crafting Your Undergraduate Career Path" },
      { no: 7, name: "Mrs. Shital Kalhapure", topic: "Connect the Dots: Crafting Your Undergraduate Career Path" },
      { no: 8, name: "Mr. Sagar Sanan", topic: "" },
      { no: 9, name: "S. Rameshkumar Mehtha", topic: "Disseating the Indian Equality market" },
      { no: 10, name: "Prof. Tulika Chattuju", topic: "Digital Marketing" },
    ],
    "2024-25": [
      { no: 1, name: "Nitkita Ingle", topic: "Research & Innovation" },
      { no: 2, name: "Mayuri Agarane", topic: "Career in MNC & Seminar PMO" },
      { no: 3, name: "Priyank Huske", topic: "Personality develoment" },
      { no: 4, name: "Mahima Singh", topic: "Taxation & Auditing" },
      { no: 5, name: "Ritesh Sharma", topic: "Career Guidence" },
      { no: 6, name: "Nandini Patil", topic: "Cloud Computing" },
      { no: 7, name: "Chetan Gundecha", topic: "Basics of IPR" },
      { no: 8, name: "Vishvajeet Mali", topic: "Cyber Security" },
      { no: 9, name: "Dr. Sirshananda Panda", topic: "Effective Sales and maketing Strategies For Entrepreneurs" },
      { no: 10, name: "Mrs. Shreya Lodha", topic: "Business Startup" },
      { no: 11, name: "Mr. Saurab B. Jadhav", topic: "Business Startup" },
      { no: 12, name: "Mrs. Gayatri R. Bankar", topic: "Enterponership leaders" },
      { no: 13, name: "Mr. Akshay Dhamal", topic: "Guidunce on Competitive Exam" },
      { no: 14, name: "Mr. Ujjval more", topic: "Career Guidance CET Awareness" },
      { no: 15, name: "Mr. Yogesh Daspate", topic: "Panel Discussion Research and Innovation" },
      { no: 16, name: "Mr. Bhushan Pardeshi", topic: "Panel Discussion Research and Innovation" },
    ],
    "2025-26": [
      { no: 1, name: "Mr. Rahul Ahire", topic: "Seminar on Transforming code Generative AI in Modern Development" },
      { no: 2, name: "Mr. Pritam Kamble", topic: "Seminar on Transforming code Generative AI in Modern Development" },
      { no: 3, name: "Mrs. Ankita Pawar", topic: "Allow to make corner in aviation & Hospitality" },
      { no: 4, name: "Dr. Pushparaj Wagh", topic: "Business Opportunities in Entreprenuers" },
      { no: 5, name: "Mr. Ashpak Kumbhari", topic: "Campus Drive with Intelli BI Innovation Technologies" },
      { no: 6, name: "Mrs. Shreya Lodha", topic: "Seminar on Coding Wrokshop on C Programming & Python" },
      { no: 7, name: "Mr. Manish Ingale", topic: "Skilling Courses" },
      { no: 8, name: "Mr. Swathy D. S.", topic: "Spoken English" },
      { no: 9, name: "Mrs. Pooja Mogre", topic: "Lighthouse Program Orinentation" },
      { no: 10, name: "Mrs. Priyanka Gholap", topic: "Foundation Course" },
      { no: 11, name: "Dr. Rajasmita Panda", topic: "Design Thinking" },
    ],
  };

  return (
    <Layout>
      <div className="container mx-auto py-8">
        <PageHeader
          title="Guest Faculty List"
          description="SNBP ACS regularly invites distinguished guest faculty members to share their expertise and provide students with industry insights and practical knowledge."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Human Capital", href: "/human-capital" },
            { label: "Guest Faculty" },
          ]}
        />

        <div className="space-y-12 mt-8">
          {Object.entries(guestFacultyByYear).map(([year, facultyList]) => (
            <div key={year} className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">
                Academic Year {year}
              </h2>
              <div className="rounded-lg border shadow-sm">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-20">Sr. No.</TableHead>
                      <TableHead>Name of Guest</TableHead>
                      <TableHead>Topics</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {facultyList.map((faculty) => (
                      <TableRow key={`${year}-${faculty.no}`}>
                        <TableCell className="font-medium">
                          {faculty.no}
                        </TableCell>
                        <TableCell>{faculty.name}</TableCell>
                        <TableCell>{faculty.topic}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default GuestFaculty;