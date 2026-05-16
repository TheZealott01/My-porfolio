import {
  Activity,
  Award,
  BadgeCheck,
  BookOpen,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Cable,
  Camera,
  ChartNoAxesCombined,
  Code2,
  Database,
  FileCode2,
  GraduationCap,
  HardDrive,
  Laptop,
  Layers3,
  LockKeyhole,
  Mail,
  Medal,
  Network,
  Router,
  Shield,
  ShieldCheck,
  Terminal,
  Trophy,
  UsersRound,
  Wifi,
} from "lucide-react";

const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

// Edit this file first when replacing links, projects, skills, certificates, and images.
export const profile = {
  name: "Rakesh Yadav",
  email: "rakesh528yadav@gmail.com",
  location: "Uttar Pradesh, India",
  role: "Network Security Engineer",
  company: "iOPEX Technologies",
  image: asset("assets/profile-blazer.jpeg"),
  resume: asset("assets/rakesh-yadav-resume.pdf"),
  summary:
    "Network Security Engineer with hands-on exposure to Palo Alto firewalls, Panorama, VPN, routing, DNS, GlobalProtect, and customer-focused security operations. I combine technical troubleshooting, MERN development experience, training ability, and calm critical-situation handling to deliver high-productivity, satisfaction-oriented resolutions.",
};

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#highlights", label: "Highlights" },
  { href: "#certifications", label: "Certs" },
  { href: "#contact", label: "Contact" },
];

export const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/-rakeshyadav?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    icon: BriefcaseBusiness,
  },
  { label: "LeetCode", href: "https://leetcode.com/u/thezealott/", icon: Code2 },
  { label: "Instagram", href: "https://www.instagram.com/rakeshyadav_610/?hl=en", icon: Camera },
  { label: "Email", href: "mailto:rakesh528yadav@gmail.com", icon: Mail },
  { label: "GitHub Repo", href: "https://github.com/TheZealott01/My-porfolio", icon: Terminal },
];

export const stats = [
  { value: 10, suffix: "+", label: "Palo Alto Certificates" },
  { value: 310, suffix: "", label: "LeetCode Rank" },
  { value: 95, suffix: "+", label: "Security Skill Focus" },
  { value: 3, suffix: "", label: "Core Projects" },
];

export const journey = [
  {
    title: "PSIT Kanpur",
    eyebrow: "Foundation",
    date: "B.Tech CSE | 2020-2024",
    icon: GraduationCap,
    copy:
      "Graduated with a Computer Science and Engineering background, building the technical base for programming, networks, operating systems, databases, and analytical problem-solving.",
  },
  {
    title: "Technical Trainer",
    eyebrow: "Mentorship",
    date: "MUIT, Noida | Jul 2024 - Dec 2024",
    icon: BookOpen,
    copy:
      "Trained learners in Python programming, Data Structures & Algorithms, and computer networking with practical exercises, doubt-solving sessions, and real coding discipline.",
  },
  {
    title: "Operations & Software Exposure",
    eyebrow: "Execution",
    date: "RASA Consultancy",
    icon: UsersRound,
    copy:
      "Handled operational coordination while also strengthening software delivery exposure across React, Flask, SQL, workflow management, and team reporting before the project ramp-down.",
  },
  {
    title: "Network Security Engineer",
    eyebrow: "Cybersecurity",
    date: "iOPEX Technologies",
    icon: ShieldCheck,
    copy:
      "Moved into network security operations with hands-on exposure to routing, VLANs, DNS, Panorama, Next-Generation Firewalls, GlobalProtect, IPSec VPN, critical customer handling, and satisfaction-oriented troubleshooting.",
  },
];

export const skillGroups = [
  {
    title: "Cybersecurity & Networking",
    icon: Shield,
    accent: "from-cyan-400 to-blue-500",
    skills: [
      { name: "Palo Alto Firewall", level: 92, icon: ShieldCheck },
      { name: "Next-Generation Firewall", level: 96, icon: Shield },
      { name: "Panorama", level: 96, icon: Layers3 },
      { name: "IPSec", level: 95, icon: LockKeyhole },
      { name: "VPN", level: 95, icon: Wifi },
      { name: "GlobalProtect", level: 96, icon: HardDrive },
      { name: "User-ID", level: 91, icon: UsersRound },
      { name: "VLAN", level: 89, icon: Cable },
      { name: "DNS", level: 88, icon: Network },
      { name: "Routing", level: 90, icon: Router },
      { name: "Security Operations", level: 90, icon: Activity },
    ],
  },
  {
    title: "Programming & Technical",
    icon: Terminal,
    accent: "from-purple-400 to-cyan-400",
    skills: [
      { name: "Python", level: 88, icon: Code2 },
      { name: "DSA", level: 82, icon: BrainCircuit },
      { name: "React.js", level: 86, icon: Laptop },
      { name: "Node.js", level: 82, icon: Terminal },
      { name: "Express.js", level: 82, icon: FileCode2 },
      { name: "MongoDB", level: 80, icon: Database },
      { name: "Mongoose", level: 80, icon: Database },
      { name: "Flask", level: 76, icon: Bot },
      { name: "SQL", level: 78, icon: Database },
      { name: "OpenCV", level: 74, icon: Camera },
      { name: "Computer Networks", level: 90, icon: Network },
    ],
  },
  {
    title: "Professional Skills",
    icon: BriefcaseBusiness,
    accent: "from-emerald-400 to-cyan-400",
    skills: [
      { name: "Team Management", level: 86, icon: UsersRound },
      { name: "Technical Training", level: 90, icon: BookOpen },
      { name: "Communication", level: 88, icon: Mail },
      { name: "Operations Management", level: 84, icon: ChartNoAxesCombined },
      { name: "Leadership", level: 88, icon: Award },
    ],
  },
];

export const experiences = [
  {
    role: "Technical Trainer",
    company: "MUIT, Noida",
    period: "Jul 2024 - Dec 2024",
    icon: BookOpen,
    points: [
      "Delivered Python and DSA training with a practical, problem-solving-first teaching style.",
      "Mentored beginners on programming fundamentals, OOPs, algorithm design, and coding confidence.",
      "Conducted hands-on sessions, doubt solving, and guided exercises from basics to advanced topics.",
      "Explained complex technical concepts in a clear, structured, and learner-friendly way.",
    ],
  },
  {
    role: "Operations Manager / Software Exposure",
    company: "RASA Consultancy",
    period: "Operations and development track",
    icon: BriefcaseBusiness,
    note: "Left due to project ramp-down.",
    points: [
      "Managed operations, coordination, workflow handling, reporting, and team collaboration.",
      "Gained development exposure across React, Flask, SQL, and structured data management.",
      "Worked with execution discipline, ownership, and cross-functional communication.",
      "Contributed to a real-time transportation platform concept covering train, flight, and ship tracking.",
    ],
  },
  {
    role: "Network Security Engineer",
    company: "iOPEX Technologies",
    period: "Cybersecurity and network operations",
    icon: ShieldCheck,
    points: [
      "Worked on Palo Alto firewall concepts, Panorama management, and NGFW security operations.",
      "Handled routing, VLAN, DNS, VPN, and network troubleshooting scenarios.",
      "Built working knowledge of IPSec VPN, GlobalProtect, User-ID, Enterprise DLP, and cloud-delivered security services.",
      "Handled critical situations and frustrated customers with calm ownership, strong communication, and customer-satisfaction-oriented resolution.",
      "Delivered high-productivity support by prioritizing impact, isolating root causes quickly, and keeping resolution quality consistent under pressure.",
    ],
  },
];

export const projects = [
  {
    title: "Team Task Manager",
    icon: UsersRound,
    copy:
      "A MERN-based productivity platform for planning projects, assigning work, and giving every owner clear visibility into what needs attention. It includes role-based access, secure authentication, assignment dashboards, task status tracking, deadline visibility, ownership mapping, and a focused interface for team coordination.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Mongoose"],
    color: "from-emerald-500/30 via-cyan-500/20 to-slate-900",
  },
  {
    title: "Real-Time Multi-Modal Transportation System",
    icon: Activity,
    copy:
      "A full-stack transportation platform concept for train, flight, and ship tracking with secure login, intuitive navigation, real-time updates, optimized API calls, and scalable SQL-backed data handling.",
    stack: ["React", "Flask", "SQL", "Authentication"],
    color: "from-cyan-500/30 via-blue-500/20 to-slate-900",
  },
  {
    title: "Car Lane Detection",
    icon: Camera,
    copy:
      "Computer vision project using OpenCV and machine learning concepts to detect road lanes with real-time feedback, visual guidance, and a user-focused design approach for challenging driving conditions.",
    stack: ["Python", "OpenCV", "Computer Vision", "ML"],
    color: "from-purple-500/30 via-cyan-500/20 to-slate-900",
  },
];

export const achievements = [
  {
    title: "iOPEX Futsal Tournament Winner",
    type: "Football / Futsal",
    image: asset("assets/football-winner-updated.jpeg"),
    icon: Trophy,
    copy:
      "Winning the iOPEX futsal tournament reflects competitive focus, discipline, team coordination, and the ability to perform under pressure. These same traits carry into security operations, where calm execution and teamwork matter.",
  },
  {
    title: "Tournament Trophy Recognition",
    type: "Team Sports",
    image: asset("assets/football-winner-full.jpeg"),
    icon: Medal,
    copy:
      "The trophy moment represents consistency beyond technical work. It adds a human layer to the portfolio: a professional who values preparation, energy, and the confidence to show up when the stakes are visible.",
  },
  {
    title: "Cricket Achievement",
    type: "Cricket",
    image: asset("assets/cricket-achievement.jpeg"),
    icon: Award,
    copy:
      "Cricket participation highlights patience, strategy, leadership, and match awareness. It reinforces a balanced personality with strong team instincts and a performance mindset.",
  },
  {
    title: "Competitive Programming & NCC",
    type: "Resume Highlights",
    image: null,
    icon: BrainCircuit,
    copy:
      "Ranked 310 in a LeetCode Biweekly Contest, achieved 2856 global rank in Google Hash Code Round A, earned HackerRank Python certification, and completed NCC C Certificate with A grade.",
  },
];

export const certifications = [
  {
    title: "Next-Generation Firewall",
    issuer: "Palo Alto Networks | iOPEX learning path",
    date: "December 16, 2025",
    duration: "15:10 training hours",
    credential: "C254420",
    image: asset("assets/cert-next-generation-firewall.jpeg"),
    icon: ShieldCheck,
    copy:
      "This certificate strengthens Rakesh's understanding of Palo Alto NGFW capabilities, security policy enforcement, traffic visibility, and threat prevention. It supports recruiter-facing confidence in firewall operations and security troubleshooting.",
  },
  {
    title: "Network Security: NetSec Professional",
    issuer: "Palo Alto Networks | iOPEX learning path",
    date: "December 15, 2025",
    duration: "05:35 training hours",
    credential: "C252073",
    image: asset("assets/cert-netsec-professional.jpeg"),
    icon: Network,
    copy:
      "Focused on core network security concepts, policy-driven access, secure connectivity, and operational defense. It aligns directly with hands-on work around routing, VPN, DNS, and firewall-based troubleshooting.",
  },
  {
    title: "Secure Access Service Edge - NetSec Professional",
    issuer: "Palo Alto Networks | iOPEX learning path",
    date: "December 15, 2025",
    duration: "05:25 training hours",
    credential: "C252211",
    image: asset("assets/cert-sase-netsec-professional.jpeg"),
    icon: LockKeyhole,
    copy:
      "Covers modern secure access patterns, cloud-delivered networking, and Zero Trust-aligned security thinking. This adds strong relevance for organizations adopting SASE and remote workforce security models.",
  },
  {
    title: "Cloud Delivered Security Services - NetSec Professional",
    issuer: "Palo Alto Networks | iOPEX learning path",
    date: "December 15, 2025",
    duration: "05:35 training hours",
    credential: "C252289",
    image: asset("assets/cert-cloud-delivered-security-services.jpeg"),
    icon: Shield,
    copy:
      "Demonstrates exposure to cloud-delivered security services that extend firewall protection with advanced prevention and visibility. It shows awareness of layered defense beyond basic perimeter security.",
  },
  {
    title: "Palo Alto Networks Certified Cybersecurity Apprentice",
    issuer: "Palo Alto Networks | iOPEX learning path",
    date: "November 4, 2025",
    duration: "Credential foundation",
    credential: "PAN Cybersecurity Apprentice",
    image: asset("assets/cert-cybersecurity-apprentice.jpeg"),
    icon: BadgeCheck,
    copy:
      "Validates cybersecurity fundamentals and a structured learning path into security operations. It gives recruiters a clear signal that Rakesh is building his cyber foundation through recognized vendor training.",
  },
  {
    title: "Cybersecurity Fundamentals: Practitioner",
    issuer: "Palo Alto Networks | iOPEX learning path",
    date: "December 12, 2025",
    duration: "Practitioner track",
    credential: "Cybersecurity Fundamentals",
    image: asset("assets/cert-cybersecurity-fundamentals.jpeg"),
    icon: BrainCircuit,
    copy:
      "Builds practical grounding in cybersecurity concepts, risk awareness, and defensive thinking. It supports Rakesh's transition from technical training and software exposure into focused security operations.",
  },
  {
    title: "Strata Cloud Manager: Features",
    issuer: "Palo Alto Networks | iOPEX learning path",
    date: "October 30, 2025",
    duration: "02:06 training hours",
    credential: "C181012",
    image: asset("assets/cert-strata-features.jpeg"),
    icon: Layers3,
    copy:
      "Covers Strata Cloud Manager capabilities for centralized security visibility, policy management, and operational control. It is valuable for environments managing multiple firewalls and distributed security infrastructure.",
  },
  {
    title: "Strata Cloud Manager: Design and Demo",
    issuer: "Palo Alto Networks | iOPEX learning path",
    date: "October 30, 2025",
    duration: "01:00 training hours",
    credential: "C181072",
    image: asset("assets/cert-strata-design-demo.jpeg"),
    icon: Laptop,
    copy:
      "Shows design-level understanding of how Strata Cloud Manager can be demonstrated and positioned in real environments. It strengthens communication skills around security architecture and solution walkthroughs.",
  },
  {
    title: "Strata Cloud Manager: Discover and Pitch",
    issuer: "Palo Alto Networks | iOPEX learning path",
    date: "October 30, 2025",
    duration: "00:30 training hours",
    credential: "C181047",
    image: asset("assets/cert-strata-discover-pitch.jpeg"),
    icon: BriefcaseBusiness,
    copy:
      "Focuses on identifying security management needs and explaining the operational value of Strata Cloud Manager. It adds a professional edge by connecting technical capability with business communication.",
  },
  {
    title: "Enterprise DLP: Features",
    issuer: "Palo Alto Networks | iOPEX learning path",
    date: "December 15, 2025",
    duration: "00:45 training hours",
    credential: "C252083",
    image: asset("assets/cert-enterprise-dlp-features.jpeg"),
    icon: Database,
    copy:
      "Introduces enterprise data loss prevention concepts for protecting sensitive data across users, applications, and cloud channels. It shows awareness of data security as a critical part of modern cyber defense.",
  },
];

export const education = [
  {
    school: "PSIT Kanpur",
    degree: "B.Tech - Computer Science and Engineering",
    year: "2020 - 2024",
    score: "80.8%",
    icon: GraduationCap,
  },
  {
    school: "Dr. Rajendra Prasad Inter College",
    degree: "Intermediate",
    year: "2019 - 2020",
    score: "69.0%",
    icon: BookOpen,
  },
  {
    school: "DBS Inter College",
    degree: "High School",
    year: "2016 - 2017",
    score: "81.7%",
    icon: BookOpen,
  },
];
