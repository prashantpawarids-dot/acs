import { API_BASE } from "@/config/api";
export interface AboutPageData {
  title: string;
  description: string;
  content: string;
  image?: string;
  author?: string;
  position?: string;
  pdf?: string;
  committeeList?: {
    name: string;
    subCommittees: string[];
  }[];
  documents?: {
    affiliationLetter?: string;
    permissionLetter?: string;
    codeOfConductForStudent?: string;
    codeOfConductForTeachers?: string;
    coreValues?: string;
    generalPolicyACS?: string;
    sppuCodeOfConduct?: string;
  };
  /** When true, Directors Message page shows two directors side by side (left: director-message-1, right: director-message-2) */
  isTwoDirectors?: boolean;
}

export const aboutData: Record<string, AboutPageData> = {
  "se-society": {
    title: "S.E. Society",
    description: "Learn about the S.E. Society and its vision for education.",
    content: `S.E. Society was formed by Hon'ble Dr. D.K. Bhosale (Founder Secretary) and Dr.(Mrs.) Vrishali Bhosale (President) in the year 1996 with the moto 'Kindle the Light of Knowledge and Love'. At initial stage it was started with Nursery and School in Yerwada with its growing age this tree become more fruitful and established its branches at Morwadi, Rahatani, Moshi, Wakad and Wagholi with various courses. Today it is offering curriculums of CBSE, Maharashtra State Board and courses affiliated to Savitribai Phule Pune University.

S.E. Society runs schools and educational courses at its different branches in Pune.

Yerwada branch runs curriculums from Preprimary, Primary, Secondary, Higher Secondary and Undergraduate level. In SNBP Rahatani and Moshi branches run curriculum from Preprimary to Higher Secondary level. SNBP Wagholi and Wakad branches are recently started with Preprimary Section. SNBP Morwadi branch runs curriculums from Preprimary to Undergraduate level with CBSE & State Board at Secondary & Higher Secondary level. Undergraduate and Post Graduate level courses runs in College of Arts Commerce Science & Management Studies, Morwadi Campus.`,
    image: `${API_BASE}/images/`,
  },
  acs: {
    title: "About SNBP ACS",
    description:
      "S.E. Society's SNBP College of Arts, Commerce, Science & Management Studies",
    content: `S.E. Society's SNBP College of Arts, Commerce, Science & Management Studies, Morwadi - Pimpri, Pune-18

Established in 2008, SNBP College of Arts, Commerce, Science & Management Studies, Morwadi, Pimpri, stands as a beacon of educational excellence under the visionary mission:

"To contribute towards creating a centre of educational excellence in Computer, Commerce, Science, Arts, and Management fields, to serve as a valuable resource for the industry and remain a source of pride for all Indians."

Affiliated with Savitribai Phule Pune University, the college offers a wide array of Undergraduate and Postgraduate programmes, including BA, B.Com, B.Sc., B.Sc. (Computer Science), BBA, BCA, M.Com, MA (Journalism), and MA (Economics). All undergraduate courses are offered as regular 4-year degree programmes in line with the new education policy. In the near future, the college plans to expand its academic portfolio by introducing industry-relevant programmes such as MBA, MCA, MCS, B.Sc. Data Science, and B.Sc. Cyber Security.

Centrally located in the heart of Pimpri-Chinchwad, the college provides an ideal academic environment supported by modern infrastructure. The college library is a rich resource hub, well-stocked with a variety of books, academic journals, magazines, and periodicals. The computer labs are fully equipped with the latest technology to enhance practical learning.

The college places equal emphasis on holistic development. Students are encouraged to participate in diverse curricular and co-curricular activities, including guest lectures, workshops, personality development programmes, academic contests, quizzes, and industrial visits. These initiatives prepare students not just academically but also professionally.

Extra-curricular and social activities are integral to the SNBPACS experience. The college actively organizes medical camps, blood donation drives, voting awareness campaigns, NSS camps, Swachhata Abhiyan, self-defense training under "Nirbhaya Kanya Abhiyan," trekking expeditions, cultural events, painting competitions, and university-level tournaments. The flagship Sporto-Cultural Carnival is a vibrant testament to the college's commitment to nurturing talent beyond the classroom.

SNBPACS also maintains strong industry tie-ups, facilitating internships and placement drives annually. These collaborations bridge the gap between academic learning and real-world application, providing students with crucial career exposure and opportunities.

Recognizing that faculty is the cornerstone of institutional success, the management invests deeply in faculty development programmes, cultural and sports events, and faculty recreation trips, ensuring a dynamic, motivated, and skilled teaching community.

With an unwavering focus on academic excellence, personal growth, social awareness, and professional readiness, SNBPACS continues to empower students to thrive in a competitive world. Through dedicated efforts in fostering knowledge, confidence, and social responsibility, the college remains committed to shaping future leaders and lifelong learners.`,
    image: "/placeholder.svg",
    documents: {
      affiliationLetter: "#",
      permissionLetter: "http://snbpacsms.com/WebsitePages/PDF/Permission.pdf",
    },
  },
  snbp: {
    title: "About SNBP",
    description: "About SNBP College of Arts, Commerce, Science & Management Studies",
    content: `S.E. Society's SNBP College of Arts, Commerce, Science & Management Studies, Morwadi - Pimpri, Pune-18

Established in 2008, SNBP College of Arts, Commerce, Science & Management Studies, Morwadi, Pimpri, stands as a beacon of educational excellence under the visionary mission:

"To contribute towards creating a centre of educational excellence in Computer, Commerce, Science, Arts, and Management fields, to serve as a valuable resource for the industry and remain a source of pride for all Indians."

Affiliated with Savitribai Phule Pune University, the college offers a wide array of Undergraduate and Postgraduate programmes, including BA, B.Com, B.Sc., B.Sc. (Computer Science), BBA, BCA, M.Com, MA (Journalism), and MA (Economics). All undergraduate courses are offered as regular 4-year degree programmes in line with the new education policy. In the near future, the college plans to expand its academic portfolio by introducing industry-relevant programmes such as MBA, MCA, MCS, B.Sc. Data Science, and B.Sc. Cyber Security.

Centrally located in the heart of Pimpri-Chinchwad, the college provides an ideal academic environment supported by modern infrastructure. The college library is a rich resource hub, well-stocked with a variety of books, academic journals, magazines, and periodicals. The computer labs are fully equipped with the latest technology to enhance practical learning.

The college places equal emphasis on holistic development. Students are encouraged to participate in diverse curricular and co-curricular activities, including guest lectures, workshops, personality development programmes, academic contests, quizzes, and industrial visits. These initiatives prepare students not just academically but also professionally.

Extra-curricular and social activities are integral to the SNBPACS experience. The college actively organizes medical camps, blood donation drives, voting awareness campaigns, NSS camps, Swachhata Abhiyan, self-defense training under "Nirbhaya Kanya Abhiyan," trekking expeditions, cultural events, painting competitions, and university-level tournaments. The flagship Sporto-Cultural Carnival is a vibrant testament to the college's commitment to nurturing talent beyond the classroom.

SNBPACS also maintains strong industry tie-ups, facilitating internships and placement drives annually. These collaborations bridge the gap between academic learning and real-world application, providing students with crucial career exposure and opportunities.

Recognizing that faculty is the cornerstone of institutional success, the management invests deeply in faculty development programmes, cultural and sports events, and faculty recreation trips, ensuring a dynamic, motivated, and skilled teaching community.

With an unwavering focus on academic excellence, personal growth, social awareness, and professional readiness, SNBPACS continues to empower students to thrive in a competitive world. Through dedicated efforts in fostering knowledge, confidence, and social responsibility, the college remains committed to shaping future leaders and lifelong learners.`,
    image: "/placeholder.svg",
    documents: {
      affiliationLetter: "#",
      permissionLetter: "http://snbpacsms.com/WebsitePages/PDF/Permission.pdf",
    },
  },
  "president-message": {
    title: "President's Message",
    description: "Message from our President Dr. (Mrs.) Vrishali D. Bhosale",
    content: `The SNBP ACS was formed in 2008 with the clear vision and purpose to create intellectual, powerful, social and responsible personalities. To achieve the goal, the college is striving since its establishment. The institute is very keen in developing intellectuality within students. With the basic purpose college is also giving importance to the student creativity and their hidden talents. I take this opportunity to congratulate the Vice-Principal Dr. Sudhir Atwadkar and his committed staff members for their commitment towards value based quality teaching and efforts put into ensure that each student is cared in the college.

It gives me immense pleasure to learn SNBPACS is a premier institution, to promote quality education at college level. I am happy to state that right from its inception, it has been striving to serve the cause for which it has been set up. Our thanks are to its Principal, faculty members and students for the success it has been achieving. In the period of 12 years, the college has earned a place of pride by virtue of its dedicated scholarly pursuits.

Since its inception, the institution has challenged itself to achieve more than is expected. It has been setting benchmarks of unparalleled success without compromising on quality and value based education in scientific, commercial, professional vocational, industrial and technical streams. From initially being a small college catering to about 200 specially chosen students, in the recent past it has shown an increase of student's intake nearing about 800. Overall development of the individual is the goal of education and we all have to ensure that there is no stone left unturned to equip the student of today for the challenges of life.

I wish the Principal, staff and students of the college all success in their Endeavour's

Thank You!`,
    image: `http://snbpacsms.com/WebsitePages/assets/images/President.png`,
    author: "Dr. (Mrs.) Vrishali D. Bhosale",
    position: "President, S.E. Society",
  },
  "chairman-message": {
    title: "Chairman's Message",
    description: "Message from our Chairman Dr. D.K. Bhosale",
    content: `Education transforms lives; it is the most powerful tool we have to shape the future. Since founding S.E. Society in 1996, this belief has driven every decision and initiative we have undertaken. Together with Dr. (Mrs.) Vrishali Bhosale, we set out with a singular vision: 'Kindle the Light of Knowledge and Love.'

Today, as I look at the vast network of SNBP institutions, I feel a deep sense of gratitude and responsibility. From our first school in Yerwada to our current presence across Morwadi, Rahatani, Moshi, Wakad, and Wagholi, every expansion has been guided by our desire to bring quality education to more students.

SNBP College of Arts, Commerce, Science & Management Studies is a flagship institution that embodies our mission. Affiliated with Savitribai Phule Pune University and accredited with a NAAC B++ Grade, the college offers a wide range of programs designed to meet the demands of the modern world. Our focus on holistic development — through academics, co-curricular activities, sports, and social initiatives — ensures that our students are well-rounded individuals, ready to face any challenge.

Our strength lies in our faculty, our infrastructure, and our unwavering commitment to innovation. We continuously invest in technology, research, and faculty development to ensure that SNBP remains at the forefront of educational excellence.

I invite every student and parent to partner with us in this noble journey. Together, let us build a future where knowledge, love, and excellence light the way.

With best wishes,
Dr. D.K. Bhosale
Chairman, S.E. Society`,
    image: `${API_BASE}/images/Chairman.png`,
    author: "Dr. D.K. Bhosale",
    position: "Chairman, S.E. Society",
  },
  "vice-principal-message": {
    title: "Vice-Principal's Message",
    description: "Message from our Vice-Principal",
    content: `SNBP group of Institutes transfer the knowledge through its various branches where students shaped from KG to PG. SNBP College of Arts, Commerce, Science & Management Studies, Morwadi-Pimpri, Pune is the top college that built the students not only by academic but also activity based teaching. SNBPACS is the activity based co-curriculum with the academic. SNBPACS adopts holistic programme of academic, physical, Sports, Social and Spiritual activity based syllabus which creates confidence and creativity in students.

SNBPACS provides strong undergraduate programs in Commerce (B. Com), Management (BBA), Computer (BBA (CA), BSc (CS)), Science (BSc) and Arts (BA). With the academic every year we conducted 75+ co-curricular activities - Seminar, Conference, FDP, SDP, NSS, Nirbhay Kannya Abhiyan, Technological Expos, Placement, Various Campus, Sporto-Cultural Carnival and so on for students.

I am very happy for the enthusiasm within Students, Faculty and Staff who contributed in the development of this college. Our students have participated and getting success through the various activities inside and outside the campus. It indicates the positive and creative energy in faculty members and students.

It gives me immense pleasure to welcome you to the Digital World of S. E. Society's S. N. B. P. College of Arts, Commerce, Science and Management Studies, Morwadi - Pimpri, Pune-18. The college is established by S. E. Society in 2008 with the mission "To contribute towards creating a centre of educational excellence in Computer, Commerce, Science, Arts, and Management field to serve as a valuable resource for the industry and remain a source of pride for all Indians."

Prof. (Dr.) Sudhir Atwadkar
Vice-Principal`,
    image: `${API_BASE}/images/`,
    author: "Prof. (Dr.) Sudhir Atwadkar",
    position: "Vice-Principal, SNBP ACS",
  },
  "principal-desk": {
    title: "Principal Desk",
    description: "Message from our Principal",
    content: `Welcome to SNBP College of Arts, Commerce, Science & Management Studies.

The Principal Desk serves as the central hub for academic leadership and administrative excellence at our institution. Our principal provides visionary guidance and ensures the highest standards of education and student development.

Under the leadership of our principal, SNBP ACS continues to excel in providing quality education, fostering innovation, and preparing students for successful careers.`,
  image: `http://snbpacsms.com/WebsitePages/TeachingPhoto/1.png`,
    author: "Dr. Dashrath Bhosale",
    position: "Principle"
  },
  "director-message-1": {
    title: "Director's Message",
    description: "Message from Director Ms. Devyani D. Bhosale",
    content: `I am glad to know that S.N.B.P College of Arts, Commerce, Science and Management Studies is growing towards the successful organization in the education era. The college is giving a platform to the student through the various indoor and outdoor activities so that it has become a forum which could aptly be used an exposure for student's inner qualities and hidden talents. It will definitely help students to build their personality. I convey my good wishes to all faculty members, parents and students for the future.

It gives me great pride and satisfaction to write about SNBPACS, we are passing through a tremendously changing process and our younger generation must be accordingly trained, so that, they can address these challenges effectively, timely and meaningfully.

We, at SNBPACS provide excellent infrastructure, competent faculty, lush green environment for learning and all other facilities required for modern education. The main aim of the SNBPACS is to provide modern education in the field of Arts, Commerce, Science & Computer to the youth.

Thank You!`,
    image: `http://snbpacsms.com/WebsitePages/assets/images/Director.png`,
    author: "Ms. Devyani D. Bhosale",
    position: "Director, S.E. Society",
  },
  "directors-message": {
    title: "Director's Message",
    description: "Messages from our Directors",
    content: "",
    isTwoDirectors: true,
  },
  "director-message-2": {
    title: "Director's Message",
    description: "Message from Director Adv. (Ms.) Rutuja D. Bhosale",
    content: `S.N.B.P College of Arts, Commerce, Science and Management Studies is growing on all successful directions and will continue the same. The college has been simply unstoppable in its progress as it has been actively involved in various activities that have brought to light the hidden talents of the college students and staff. I wish to staff and students of the college success in their future endeavors.

It is great pleasure to observe the creative expression in students who had contributed for the various activities and programs.

We provide state of the art infrastructure and dedicated, devoted and committed faculty. Our vision is to impart world class quality education to the students in various disciplines in our campus.

We have an enviable and eminent global network of faculty members and we continue to ensure that our network becomes bigger and better. The research out-put by faculty and students is also encouraging. Our goal is to be the most preferred choice of the students, faculty & industries & to be in the top in every discipline of arts commerce science & management.

We at SNBPACS provide excellent infrastructure competent faculty, lush green environment for learning & all other facilities required for modern education.

Wishing you all success and bright future!!!

Thank You!`,
    image: "http://snbpacsms.com/WebsitePages/assets/images/CampusDirector.png",
    author: "Adv. (Ms.) Rutuja D. Bhosale",
    position: "Director, S.E. Society",
  },
  vision: {
    title: "Vision",
    description: "Our vision for the future of education",
    content: `Our Vision

To be a premier institution of higher education that nurtures intellectual curiosity, fosters innovation, and develops ethical leaders who contribute positively to society.

We envision SNBP ACS as:
• A center of academic excellence recognized nationally and internationally
• A hub for research and innovation that addresses real-world challenges
• A community that celebrates diversity and promotes inclusive growth
• An institution that produces industry-ready graduates with strong moral values
• A leader in adopting cutting-edge technology for enhanced learning experiences`,
    image: `${API_BASE}/images/`,
  },
  mission: {
    title: "Mission",
    description: "Our mission to shape future leaders",
    content: `Our Mission

To contribute towards creating a centre of educational excellence in Computer, Commerce, Science, Arts, and Management fields, to serve as a valuable resource for the industry and remain a source of pride for all Indians.

We are committed to:
• Providing quality education that combines theoretical knowledge with practical application
• Nurturing students' intellectual, physical, and emotional development
• Creating an environment that encourages critical thinking and creativity
• Building strong industry-academia partnerships for real-world exposure
• Promoting research and innovation across all disciplines
• Developing socially responsible citizens with strong ethical foundations`,
    image: `${API_BASE}/images/`,
  },
  objectives: {
    title: "Objectives",
    description: "Our key objectives and goals",
    content: `Our Objectives

SNBP ACS is committed to achieving the following objectives:

Academic Excellence:
• Deliver curriculum that meets industry standards and academic rigor
• Employ qualified and experienced faculty committed to student success
• Provide state-of-the-art infrastructure and learning resources

Holistic Development:
• Organize co-curricular and extra-curricular activities for all-round growth
• Foster a culture of research, innovation, and continuous learning
• Create an inclusive learning environment that respects diversity and promotes equal opportunities
• Build strong industry-academia partnerships for practical exposure and placement opportunities
• Inculcate moral values, social responsibility, and ethical practices among students
• Encourage entrepreneurship and develop leadership qualities`,
    image: `${API_BASE}/images/`,
  },
  policy: {
    title: "Institution Policy",
    description: "Our institutional policies and guidelines",
    content: `Institution Policy

SNBP ACS operates under a comprehensive set of policies designed to ensure transparency, fairness, and excellence in all operations:

Academic Policies:
• Attendance requirements and regulations
• Examination and evaluation procedures
• Academic integrity and plagiarism guidelines
• Credit transfer and migration policies

Student Welfare Policies:
• Anti-ragging policy with zero tolerance
• Grievance redressal mechanism
• Equal opportunity and non-discrimination policy
• Scholarship and financial aid guidelines

Administrative Policies:
• Faculty development programs and research encouragement
• Student support services and grievance redressal mechanisms
• Industry collaboration and placement activities
• Extension and outreach programs
• Infrastructure upgradation and maintenance
• Environmental sustainability initiatives`,
    image: `${API_BASE}/images/`,
    documents: {
      codeOfConductForStudent: "http://snbpacsms.com/WebsitePages/PDF/CODE%20OF%20CONDUCT%20FOR%20STUDENT.pdf",
      codeOfConductForTeachers: "http://snbpacsms.com/WebsitePages/PDF/CODE%20OF%20CONDUCT%20FOR%20TEACHERS.pdf",
      coreValues: "http://snbpacsms.com/WebsitePages/PDF/core_values.pdf",
      generalPolicyACS: "http://snbpacsms.com/WebsitePages/PDF/General_policy_acs.pdf",
      sppuCodeOfConduct: "http://snbpacsms.com/WebsitePages/PDF/SPPU_Code_of_Conduct.pdf",
    },
  },
  "institution-policy": {
    title: "Institution Policy",
    description: "Our institutional policies and guidelines",
    content: `Institution Policy

SNBP ACS operates under a comprehensive set of policies designed to ensure transparency, fairness, and excellence in all operations:

Academic Policies:
• Attendance requirements and regulations
• Examination and evaluation procedures
• Academic integrity and plagiarism guidelines
• Credit transfer and migration policies

Student Welfare Policies:
• Anti-ragging policy with zero tolerance
• Grievance redressal mechanism
• Equal opportunity and non-discrimination policy
• Scholarship and financial aid guidelines

Administrative Policies:
• Faculty development programs and research encouragement
• Student support services and grievance redressal mechanisms
• Industry collaboration and placement activities
• Extension and outreach programs
• Infrastructure upgradation and maintenance
• Environmental sustainability initiatives`,
    image: `${API_BASE}/images/`,
    documents: {
      codeOfConductForStudent: "http://snbpacsms.com/WebsitePages/PDF/CODE%20OF%20CONDUCT%20FOR%20STUDENT.pdf",
      codeOfConductForTeachers: "http://snbpacsms.com/WebsitePages/PDF/CODE%20OF%20CONDUCT%20FOR%20TEACHERS.pdf",
      coreValues: "http://snbpacsms.com/WebsitePages/PDF/core_values.pdf",
      generalPolicyACS: "http://snbpacsms.com/WebsitePages/PDF/General_policy_acs.pdf",
      sppuCodeOfConduct: "http://snbpacsms.com/WebsitePages/PDF/SPPU_Code_of_Conduct.pdf",
    },
  },
  "strategic-plan": {
    title: "Strategic Plan",
    description: "Institutional strategic plan and development roadmap",
    content: `Strategic Plan

SNBP ACS has developed a comprehensive strategic plan to guide institutional growth and excellence. Our strategic priorities include:

Academic Excellence:
• Curriculum enhancement aligned with industry needs
• Faculty development and research promotion
• Quality assurance and accreditation readiness

Infrastructure & Resources:
• Modernization of labs and learning spaces
• Digital library and e-resources expansion
• Sports and cultural facility upgrades

Student Success:
• Placement and career support enhancement
• Skill development and certification programs
• Student welfare and support services

The strategic plan is reviewed annually and updated to reflect changing educational needs and institutional goals.`,
    image: `${API_BASE}/images/`,
  },
  "maharashtra-govt": {
    title: "Maharashtra Govt. Approval",
    description: "Government of Maharashtra approval and recognition",
    content: `Maharashtra Government Approval

SNBP College of Arts, Commerce, Science & Management Studies is duly approved and recognized by the Government of Maharashtra. The institution operates in compliance with all state government regulations for higher education.

This approval confirms that the college meets the standards set by the state for running undergraduate and postgraduate programs in Arts, Commerce, Science, and Management disciplines.`,
    image: `${API_BASE}/images/`,
  },
  aicte: {
    title: "AICTE",
    description: "All India Council for Technical Education approval",
    content: `AICTE Approval

SNBP ACS maintains compliance with AICTE guidelines for technical and management programs where applicable. The college ensures that all relevant programs meet the norms prescribed by the All India Council for Technical Education.`,
    image: `${API_BASE}/images/`,
  },
  ugc: {
    title: "UGC",
    description: "University Grants Commission recognition",
    content: `UGC Recognition

SNBP College of Arts, Commerce, Science & Management Studies is recognized under the University Grants Commission (UGC) Act. The institution upholds UGC standards for higher education and participates in various UGC-sponsored schemes and programs.`,
    image: `${API_BASE}/images/`,
  },
  sppu: {
    title: "SPPU Affiliation",
    description: "Savitribai Phule Pune University affiliation",
    content: `SPPU Affiliation

SNBP ACS is affiliated with Savitribai Phule Pune University (SPPU). All undergraduate and postgraduate programs follow the curriculum, syllabus, and examination pattern prescribed by the university. The college adheres to SPPU regulations for admissions, examinations, and academic operations.`,
    image: `${API_BASE}/images/`,
  },
  "12b": {
    title: "UGC 12B Status",
    description: "UGC 12(B) recognition for receiving central assistance",
    content: `UGC 12(B) Status

SNBP ACS has been granted 12(B) status by the University Grants Commission. This status enables the institution to receive central government grants and participate in various UGC-funded development programs for infrastructure, faculty, and research.`,
    image: `${API_BASE}/images/`,
  },
  "2f": {
    title: "UGC 2(F) Status",
    description: "UGC 2(F) recognition for deemed university and central assistance",
    content: `UGC 2(F) Status

SNBP ACS complies with UGC 2(F) regulations, which govern institutions eligible for central assistance. This status reflects the college's adherence to quality standards and eligibility for various central government schemes.`,
    image: `${API_BASE}/images/`,
  },
  organogram: {
    title: "Organogram",
    description: "Organizational structure of SNBP ACS",
    content:
      "View the organizational structure of SNBP College of Arts, Commerce, Science & Management Studies.",
    image: `${API_BASE}/images/`,
    pdf: "http://snbpacsms.com/WebsitePages/assets/PDF/Organogram.pdf",
  },
  committees: {
    title: "List of Committees",
    description: "Various committees at SNBP ACS",
    content: "",
    committeeList: [
      {
        name: "Governing Body",
        subCommittees: [],
      },
      {
        name: "Anti-Ragging Committee",
        subCommittees: ["Anti-Ragging Squad", "Monitoring Cell"],
      },
      {
        name: "Internal Complaints Committee (ICC)",
        subCommittees: ["Women's Cell", "Gender Sensitization Committee"],
      },
      {
        name: "Grievance Redressal Committee",
        subCommittees: ["Student Grievance Cell", "Staff Grievance Cell"],
      },
      {
        name: "IQAC (Internal Quality Assurance Cell)",
        subCommittees: [
          "Academic Audit Committee",
          "Feedback Analysis Committee",
        ],
      },
      {
        name: "Placement Cell 2022-23",
        subCommittees: ["Internship Committee", "Industry Liaison Committee"],
      },
      {
        name: "Training & Development",
        subCommittees: ["Faculty Development Cell", "Student Development Cell"],
      },
      {
        name: "Library Committee",
        subCommittees: [
          "Book Procurement Committee",
          "Digital Resources Committee",
        ],
      },
      {
        name: "Sports Committee",
        subCommittees: ["Indoor Games Committee", "Outdoor Games Committee"],
      },
      {
        name: "Cultural Committee",
        subCommittees: [
          "Annual Day Committee",
          "Festival Celebration Committee",
        ],
      },
      {
        name: "NSS Unit",
        subCommittees: [
          "Community Service Committee",
          "Blood Donation Committee",
        ],
      },
      {
        name: "Examination Committee",
        subCommittees: [
          "Internal Examination Cell",
          "University Examination Cell",
        ],
      },
    ],
  },
  naac: {
    title: "NAAC Accreditation",
    description: "Our NAAC accreditation status and achievements",
    content: `NAAC Accreditation

SNBP College of Arts, Commerce, Science & Management Studies has been accredited by the National Assessment and Accreditation Council (NAAC) with a B++ Grade.

This accreditation is a testament to our commitment to quality education and continuous improvement. The NAAC assessment evaluates institutions on various criteria including:

• Curricular Aspects
• Teaching-Learning and Evaluation
• Research, Innovations and Extension
• Infrastructure and Learning Resources
• Student Support and Progression
• Governance, Leadership and Management
• Institutional Values and Best Practices

Our B++ grade reflects our dedication to maintaining high standards across all these areas. We continue to work towards further improvement and aim for even higher recognition in future assessments.`,
    image: `${API_BASE}/images/`,
  },
  iic: {
    title: "IIC - Institution's Innovation Council",
    description: "Innovation and entrepreneurship initiatives at SNBP ACS",
    content: `Institution's Innovation Council (IIC)

SNBP College of Arts, Commerce, Science & Management Studies is committed to fostering innovation, entrepreneurship, and creative thinking among students and faculty. Our Institution's Innovation Council (IIC) plays a pivotal role in promoting an innovation ecosystem within the college.

The IIC at SNBP ACS focuses on:

• Promoting innovation and entrepreneurship culture
• Organizing innovation and entrepreneurship related activities
• Facilitating collaboration with industry and startups
• Encouraging students to develop innovative solutions
• Supporting faculty in research and innovation activities
• Creating awareness about intellectual property rights
• Organizing workshops, seminars, and hackathons
• Facilitating student startups and incubation support

Through various initiatives, workshops, and programs, the IIC aims to create a vibrant innovation ecosystem that encourages students to think creatively, solve real-world problems, and become future entrepreneurs.`,
    image: `${API_BASE}/images/`,
  },
};
