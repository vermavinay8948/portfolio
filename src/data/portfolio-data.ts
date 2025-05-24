
import type { ComponentType } from 'react';
import { 
  Code2, Braces, Coffee, Zap, Leaf, Webhook, Database,
  Package, CloudCog, Cloud, GitFork, FileText, BarChart3, Waypoints, Terminal, TestTube2,
  DatabaseZap, Brain, Network, Sparkles, SearchCode, Search, MessageSquareText,
  SplitSquareHorizontal, Workflow, Plug, RadioTower, ArrowRightLeft, Binary, ServerCog, Shapes, Puzzle, Layers, Wrench, LayoutGrid
} from 'lucide-react';

export interface ContactInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  linkedin: string;
  linkedinUser: string;
  intro: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  cgpa: string;
  duration: string;
  location: string;
}

export interface SkillItem {
  name: string;
  icon?: ComponentType<{ className?: string }>;
}

export interface SkillCategory {
  categoryName: string;
  categoryIcon?: ComponentType<{ className?: string }>;
  skills: SkillItem[];
}

export interface WorkExperienceItem {
  role: string;
  company: string;
  duration: string;
  location: string;
  responsibilities: string[];
}

export interface ProjectItem {
  name: string;
  techStack: string[];
  duration: string;
  description: string[];
}

export const contactData: ContactInfo = {
  name: "Vinay Verma",
  title: "Software Developer Engineer",
  email: "vinayverma8948@gmail.com",
  phone: "+91-6392878691",
  linkedin: "https://www.linkedin.com/in/vv-10o/",
  linkedinUser: "vv-10o",
  intro: "A results-driven Software Developer Engineer with a strong foundation in Computer Science from IIT Roorkee. Passionate about building scalable microservices, efficient data processing pipelines, and innovative AI/ML solutions. Proven ability to optimize performance, reduce costs, and enhance system reliability in fast-paced environments.",
};

export const educationData: EducationItem = {
  institution: "Indian Institute of Technology Roorkee",
  degree: "Bachelor of Technology",
  cgpa: "8.49",
  duration: "2019 — 2023",
  location: "Roorkee, Uttarakhand",
};

export const skillsData: SkillCategory[] = [
  {
    categoryName: "Languages and Frameworks",
    categoryIcon: Code2,
    skills: [
      { name: "Python", icon: Code2 },
      { name: "C++", icon: Braces },
      { name: "Java", icon: Coffee },
      { name: "FastAPI", icon: Zap },
      { name: "Spring Boot", icon: Leaf },
      { name: "Django", icon: Webhook },
      { name: "SQL", icon: Database },
    ],
  },
  {
    categoryName: "Technologies and Tools",
    categoryIcon: Package,
    skills: [
      { name: "Docker", icon: Package },
      { name: "Kubernetes", icon: CloudCog },
      { name: "GCP", icon: Cloud },
      { name: "Git", icon: GitFork },
      { name: "Loki", icon: FileText },
      { name: "Grafana", icon: BarChart3 },
      { name: "Redis-Streams", icon: Waypoints },
      { name: "Operating System", icon: Terminal },
      { name: "PyTest", icon: TestTube2 },
    ],
  },
  {
    categoryName: "Database",
    categoryIcon: DatabaseZap,
    skills: [
      { name: "Postgres", icon: Database },
      { name: "Redis", icon: DatabaseZap },
      { name: "Vector Databases (Milvus, Chroma)", icon: Shapes },
      { name: "Neo4j", icon: Network },
    ],
  },
  {
    categoryName: "AI/ML",
    categoryIcon: Brain,
    skills: [
      { name: "LLM Deployment (vLLM, Hugging Face)", icon: Brain },
      { name: "Retrieval-Augmented Generation (RAG)", icon: SearchCode },
      { name: "Searches", icon: Search },
      { name: "NLP", icon: MessageSquareText },
    ],
  },
  {
    categoryName: "Design",
    categoryIcon: Shapes,
    skills: [
      { name: "Microservices Architecture", icon: SplitSquareHorizontal },
      { name: "Distributed Systems", icon: ServerCog },
      { name: "RestAPI", icon: Plug },
      { name: "SSE", icon: RadioTower },
      { name: "Websockets", icon: ArrowRightLeft },
      { name: "Data Structures & Algorithms", icon: Puzzle },
    ],
  },
];

export const experienceData: WorkExperienceItem[] = [
  {
    role: "Software Developer Engineer",
    company: "Attentions.ai",
    duration: "July 2024 — Present",
    location: "Pune, INDIA",
    responsibilities: [
      "Architected scalable microservices, incorporating distributed tracing with OpenTelemetry for real-time diagnostics and error identification. Engineered high-throughput background job pipelines using Redis Streams, ensuring minimal latency and high resilience.",
      "Spearheaded an end-to-end document processing pipeline supporting various formats. Established chunks, embeddings, and streamlined indexing in Milvus, enhancing retrieval accuracy and speed. Pioneered different chunking strategies, refining segmentation and reducing processing time by nearly 50 %.",
      "Pioneered diverse retrieval techniques, unifying embeddings, sparse search (BM-25), and dense search for efficient lookups in Milvus. Orchestrated LLMs via OpenAI, enhanced inference with vLLM, and leveraged server-sent events (SSE) with Redis Streams, achieving real-time query responses under 2s.",
      "Constructed a data processing pipeline with automated task creation and execution, harnessing Redis Streams for event and task-driven processing. Implemented Redis Pub/Sub for real-time progress tracking, enabling users to receive instant & real-time updates on file processing stages reducing manual intervention by over 90 %.",
      "Established a common-libraries Python package for reusable components across microservices, fostering team contributions and minimizing redundancy across 10+ microservices. Standardized logging, database connectors, and API clients, elevating maintainability and new developers onboarding.",
    ],
  },
  {
    role: "Software Developer Engineer",
    company: "K12 Techno Services",
    duration: "July 2023 — July 2024",
    location: "Bengaluru, INDIA",
    responsibilities: [
      "Refactored a Django monolithic module into a FastAPI microservice, improving performance and scalability.",
      "Improved API performance by 20-25% through backend optimizations and database query improvements.",
      "Designed and developed timetable and centralized HW modules using Redis caching, Google Cloud Functions, and the Python Functions framework, enhancing efficiency and scalability.",
      "Collaborated on migrating infrastructure from AWS to GCP, contributing to a 30% reduction in cloud costs.",
      "Managed the production database for over 80K users, addressing critical incidents, optimizing data integrity, and resolving multiple production issues through efficient debugging and migrations.",
      "Developed a URL shortener service and implemented a profanity filter to enhance API functionality.",
    ],
  },
];

export const projectsData: ProjectItem[] = [
  {
    name: "Two-Factor Authentication (2FA) System",
    techStack: ["FastAPI", "Redis", "PyOTP", "Gmail SMTP", "Twilio", "JWT", "Bcrypt"],
    duration: "Sep 23 — Dec 23",
    description: [
      "Developed a secure 2FA authentication system using FastAPI, integrating email (SMTP) and SMS (Twilio) for OTP verification, with Redis for secure storage and expiration.",
      "Implemented password hashing (Bcrypt), JWT-based authentication, and TOTP (PyOTP) while enhancing security with rate limiting to prevent brute-force attacks.",
    ],
  },
];
