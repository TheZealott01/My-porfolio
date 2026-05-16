import {
  Activity,
  Award,
  BadgeCheck,
  BookOpen,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Cable,
  ChartNoAxesCombined,
  Code2,
  Database,
  GraduationCap,
  HardDrive,
  Laptop,
  Layers3,
  LockKeyhole,
  Mail,
  Network,
  Router,
  Shield,
  ShieldCheck,
  Terminal,
  UsersRound,
  Wifi,
} from "lucide-react";

// Edit this file first when replacing placeholder links, projects, skills, and certifications.
export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: BriefcaseBusiness },
  { label: "GitHub", href: "https://github.com/", icon: Code2 },
  { label: "Email", href: "mailto:rakesh@example.com", icon: Mail },
];

export const stats = [
  { value: 3, suffix: "+", label: "Career Domains" },
  { value: 25, suffix: "+", label: "Core Skills" },
  { value: 100, suffix: "+", label: "Learners Mentored" },
  { value: 6, suffix: "+", label: "Project Concepts" },
];

export const journey = [
  {
    title: "PSIT Kanpur",
    eyebrow: "Foundation",
    date: "Bachelor's Degree",
    icon: GraduationCap,
    copy:
      "Built the academic base for a career that blends engineering discipline, problem-solving, and practical technology.",
  },
  {
    title: "Technical Trainer",
    eyebrow: "Mentorship",
    date: "Early Career",
    icon: BookOpen,
    copy:
      "Trained students in Computer Networks, Python Programming, and Data Structures & Algorithms, turning complex concepts into clear, practical learning.",
  },
  {
    title: "Operations Manager",
    eyebrow: "Leadership",
    date: "RASA Consultancy",
    icon: UsersRound,
    copy:
      "Managed operational responsibilities, workflow coordination, reporting, and team alignment before leaving due to project ramp-down.",
  },
  {
    title: "Network Security Engineer",
    eyebrow: "Cybersecurity",
    date: "Opex",
    icon: ShieldCheck,
    copy:
      "Moved into security operations with hands-on work across routing, VLAN, DNS, Panorama, Next Generation Firewalls, GlobalProtect, IPSec VPN, and troubleshooting.",
  },
];

export const skillGroups = [
  {
    title: "Cybersecurity & Networking",
    icon: Shield,
    accent: "from-cyan-400 to-blue-500",
    skills: [
      { name: "Palo Alto Firewall", level: 88, icon: ShieldCheck },
      { name: "Panorama", level: 84, icon: Layers3 },
      { name: "IPSec", level: 82, icon: LockKeyhole },
      { name: "VPN", level: 86, icon: Wifi },
      { name: "VLAN", level: 80, icon: Cable },
      { name: "DNS", level: 78, icon: Network },
      { name: "Routing", level: 84, icon: Router },
      { name: "Network Security", level: 88, icon: Shield },
      { name: "GlobalProtect", level: 82, icon: HardDrive },
      { name: "Security Operations", level: 85, icon: Activity },
    ],
  },
  {
    title: "Programming & Technical",
    icon: Terminal,
    accent: "from-purple-400 to-cyan-400",
    skills: [
      { name: "Python", level: 86, icon: Code2 },
      { name: "DSA", level: 80, icon: BrainCircuit },
      { name: "Problem Solving", level: 88, icon: Bot },
      { name: "SQL", level: 74, icon: Database },
      { name: "DBMS", level: 74, icon: Database },
      { name: "Operating Systems", level: 78, icon: Laptop },
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
      { name: "Leadership", level: 86, icon: Award },
    ],
  },
];

export const experiences = [
  {
    role: "Technical Trainer",
    company: "Training & Mentorship",
    period: "Early Career",
    icon: BookOpen,
    points: [
      "Trained students on Python, DSA, and Computer Networks.",
      "Mentored beginners in programming fundamentals.",
      "Conducted practical sessions and doubt solving.",
      "Helped students build technical confidence.",
    ],
  },
  {
    role: "Operations Manager",
    company: "RASA Consultancy",
    period: "Operations Leadership",
    icon: BriefcaseBusiness,
    note: "Left due to project ramp-down.",
    points: [
      "Managed operations and coordination.",
      "Oversaw workflow handling.",
      "Handled team collaboration and reporting.",
      "Owned administrative and operational responsibilities.",
    ],
  },
  {
    role: "Network Security Engineer",
    company: "Opex",
    period: "Current Cybersecurity Track",
    icon: ShieldCheck,
    points: [
      "Worked on Palo Alto firewalls and Panorama management.",
      "Handled routing and VLAN troubleshooting.",
      "Performed DNS analysis and network diagnostics.",
      "Supported IPSec VPN configuration and GlobalProtect.",
      "Monitored networks and resolved security troubleshooting cases.",
    ],
  },
];

export const projects = [
  {
    title: "Network Monitoring Dashboard",
    icon: Activity,
    copy: "Realtime-style dashboard concept for network health, alerts, uptime, and device visibility.",
    stack: ["React", "Charts", "Networking"],
    color: "from-cyan-500/30 via-blue-500/20 to-slate-900",
  },
  {
    title: "Firewall Log Analyzer",
    icon: Shield,
    copy: "Python utility concept for parsing firewall logs, highlighting risky events, and summarizing trends.",
    stack: ["Python", "Pandas", "Security"],
    color: "from-purple-500/30 via-cyan-500/20 to-slate-900",
  },
  {
    title: "Secure VPN Architecture",
    icon: LockKeyhole,
    copy: "Reference architecture for secure IPSec tunnels, segmentation, and remote access patterns.",
    stack: ["IPSec", "VPN", "Security Design"],
    color: "from-emerald-500/25 via-cyan-500/20 to-slate-900",
  },
  {
    title: "Student Management System",
    icon: GraduationCap,
    copy: "Training-oriented CRUD system concept for student records, batches, attendance, and reports.",
    stack: ["Python", "SQL", "DBMS"],
    color: "from-blue-500/30 via-purple-500/20 to-slate-900",
  },
  {
    title: "Portfolio Website",
    icon: Laptop,
    copy: "Modern portfolio built with smooth animations, recruiter-friendly content, and a cyber dashboard feel.",
    stack: ["React", "Tailwind", "Framer Motion"],
    color: "from-cyan-500/25 via-purple-500/20 to-slate-900",
  },
  {
    title: "Network Automation Scripts",
    icon: Terminal,
    copy: "Python scripts concept for repeatable network checks, backups, and configuration assistance.",
    stack: ["Python", "Automation", "CLI"],
    color: "from-sky-500/30 via-emerald-500/20 to-slate-900",
  },
];

export const certifications = [
  { title: "Palo Alto Networks", status: "Placeholder", icon: ShieldCheck },
  { title: "Python Certification", status: "Placeholder", icon: Code2 },
  { title: "Networking Fundamentals", status: "Placeholder", icon: Network },
  { title: "Cybersecurity Training", status: "Placeholder", icon: BadgeCheck },
];

export const education = [
  {
    school: "PSIT Kanpur",
    degree: "Bachelor's Degree",
    year: "Year placeholder",
    score: "Percentage placeholder",
    icon: GraduationCap,
  },
];
