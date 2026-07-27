import { createFileRoute, Link } from "@tanstack/react-router";
import skillAiLogo from "@/assets/skill-ai-logo.png";
import { useEffect, useState } from "react";
import {
  ArrowRight, ArrowLeft, Brain, BarChart3, Boxes, Megaphone,
  Palette, Film, Calculator, Rocket, TrendingUp, Clock, Calendar,
  MapPin, Award, CheckCircle2, Sparkles, ChevronDown, Star, Users, Briefcase, Send,
} from "lucide-react";
import courseAi from "@/assets/course-ai.jpg";
import courseData from "@/assets/course-data.jpg";
import courseProduct from "@/assets/course-product.jpg";
import courseMarketing from "@/assets/course-marketing.jpg";
import courseDesign from "@/assets/course-design.jpg";
import courseVideo from "@/assets/course-video.jpg";
import courseAccounting from "@/assets/course-accounting.jpg";
import courseEntrepreneur from "@/assets/course-entrepreneur.jpg";
import courseSales from "@/assets/course-sales.jpg";

export const Route = createFileRoute("/pg-programs")({
  head: () => ({
    meta: [
      { title: "PG Programs — SSCC School of Business" },
      { name: "description", content: "Explore 9 PG programs at SSCC — AI, Data Science, Product, Marketing, Design, Video, Accounting, Entrepreneurship and Sales." },
      { property: "og:title", content: "PG Programs — SSCC" },
      { property: "og:description", content: "Future-ready postgraduate programs designed with industry leaders." },
    ],
  }),
  component: PgPrograms,
});

type Blog = { title: string; read: string; excerpt: string };
type Course = {
  slug: string;
  title: string;
  short: string;
  tag: string;
  duration: string;
  level: string;
  fee: string;
  rating: number;
  students: string;
  Icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  image: string;
  overview: string;
  modules: string[];
  outcomes: string[];
  tools: string[];
  curriculum: { week: string; topic: string }[];
  blogs: Blog[];
};

const courses: Course[] = [
  {
    slug: "expert-in-ai",
    title: "Expert in AI",
    short: "Become a hands-on AI builder — from foundation models to production agents.",
    tag: "Flagship", duration: "12 Months", level: "Advanced", fee: "₹4.5L",
    rating: 4.9, students: "320+",
    Icon: Brain, gradient: "from-[oklch(0.72_0.2_50)] to-[oklch(0.85_0.18_70)]",
    image: courseAi,
    overview: "A 12-month immersion into modern AI — covering deep learning, transformers, large language models, retrieval-augmented generation and agentic systems. You'll work on real datasets, ship production AI APIs, and graduate with a portfolio of 3 deployed AI products.",
    modules: ["Python & Math for AI", "Deep Learning & Transformers", "LLMs & RAG Systems", "Agentic AI & Tooling", "MLOps & Deployment", "Capstone: Build & Ship an AI Product"],
    outcomes: ["AI Engineer", "ML Engineer", "Applied Scientist", "AI Product Builder"],
    tools: ["PyTorch", "LangChain", "OpenAI", "HuggingFace", "Vector DBs"],
    curriculum: [
      { week: "Month 1–2", topic: "Foundations: Python, Linear Algebra, Probability" },
      { week: "Month 3–4", topic: "Deep Learning, CNNs, RNNs, Transformers" },
      { week: "Month 5–6", topic: "LLMs, Prompt Engineering, Fine-tuning" },
      { week: "Month 7–8", topic: "RAG, Vector Search, Multi-modal AI" },
      { week: "Month 9–10", topic: "Agentic AI, Tool Use, AutoGen" },
      { week: "Month 11–12", topic: "MLOps, Deployment, Capstone Project" },
    ],
    blogs: [
      { title: "Why every founder will be an AI builder by 2027", read: "6 min", excerpt: "The line between PM, engineer and designer is blurring. The new hire profile is an AI-native generalist." },
      { title: "How our students built an AI legal copilot in 8 weeks", read: "5 min", excerpt: "From idea to a paying customer — a behind-the-scenes look at the Cohort 2 capstone." },
      { title: "The MLOps stack we teach (and why)", read: "8 min", excerpt: "We benchmark 12 tools across deployment, observability and evaluation." },
    ],
  },
  {
    slug: "ai-data-science-business-analytics",
    title: "AI in Data Science & Business Analytics",
    short: "Turn raw data into business decisions using modern AI and analytics stacks.",
    tag: "In-demand", duration: "11 Months", level: "Intermediate", fee: "₹3.9L",
    rating: 4.8, students: "280+",
    Icon: BarChart3, gradient: "from-[oklch(0.7_0.2_45)] to-[oklch(0.78_0.16_120)]",
    image: courseData,
    overview: "Master the full analytics journey — from SQL pipelines to predictive ML to executive storytelling. You'll work on live datasets from real partner startups and build dashboards that drive million-dollar decisions.",
    modules: ["Statistics & SQL", "Python for Data", "Predictive Modeling", "AI for Analytics", "Storytelling with Data", "Capstone: Business Insights Dashboard"],
    outcomes: ["Data Analyst", "Business Analyst", "Insights Manager", "Analytics Consultant"],
    tools: ["Python", "SQL", "PowerBI", "Tableau", "Snowflake"],
    curriculum: [
      { week: "Month 1–2", topic: "SQL, Excel, Statistics" },
      { week: "Month 3–4", topic: "Python, Pandas, Visualization" },
      { week: "Month 5–6", topic: "Predictive Models, Forecasting" },
      { week: "Month 7–8", topic: "AI Copilots for Analysts" },
      { week: "Month 9–10", topic: "Dashboards, Storytelling" },
      { week: "Month 11", topic: "Capstone with a partner startup" },
    ],
    blogs: [
      { title: "5 SQL patterns every analyst should know in 2026", read: "4 min", excerpt: "Window functions, CTEs and the new analytics primitives." },
      { title: "From dashboard monkey to decision partner", read: "7 min", excerpt: "How analysts can earn a seat at the leadership table." },
      { title: "Snowflake vs BigQuery: a cohort benchmark", read: "9 min", excerpt: "We ran identical workloads on both — here's what we found." },
    ],
  },
  {
    slug: "ai-intelligent-product-management",
    title: "AI Intelligent Product Management",
    short: "Lead 0→1 AI products — roadmap, discovery, prototyping and GTM.",
    tag: "Founder-track", duration: "10 Months", level: "Intermediate", fee: "₹4.2L",
    rating: 4.9, students: "210+",
    Icon: Boxes, gradient: "from-[oklch(0.74_0.2_55)] to-[oklch(0.7_0.22_300)]",
    image: courseProduct,
    overview: "Built for aspiring PMs who want to ship AI-first products. You'll learn discovery, prototyping with Figma + AI, write PRDs, run experiments, and present roadmaps to real founders for feedback every Friday.",
    modules: ["Product Discovery", "AI-first PRDs", "User Research & Prototyping", "Growth & Experimentation", "Pricing & Monetization", "Capstone: Launch an AI Product"],
    outcomes: ["Associate PM", "Product Manager", "AI PM", "Founder's Office"],
    tools: ["Figma", "Notion", "Mixpanel", "Cursor", "Linear"],
    curriculum: [
      { week: "Month 1–2", topic: "PM Foundations, Discovery" },
      { week: "Month 3–4", topic: "AI Product Patterns" },
      { week: "Month 5–6", topic: "Prototyping & PRDs" },
      { week: "Month 7–8", topic: "Experimentation & Growth" },
      { week: "Month 9–10", topic: "Capstone: launch a real AI product" },
    ],
    blogs: [
      { title: "The new PM job description", read: "5 min", excerpt: "What top startups now expect from product hires." },
      { title: "Prototyping with v0, Cursor and Figma in one afternoon", read: "6 min", excerpt: "Walk through our students' favorite stack." },
      { title: "Pricing AI products: 4 models that actually work", read: "8 min", excerpt: "Token-based, seat-based, outcome-based — and the hybrid that wins." },
    ],
  },
  {
    slug: "ai-digital-marketing",
    title: "AI in Digital Marketing",
    short: "Run AI-powered campaigns across SEO, performance, content and lifecycle.",
    tag: "High-growth", duration: "9 Months", level: "Beginner+", fee: "₹2.9L",
    rating: 4.7, students: "410+",
    Icon: Megaphone, gradient: "from-[oklch(0.78_0.2_60)] to-[oklch(0.72_0.18_25)]",
    image: courseMarketing,
    overview: "From brand to performance — learn the full marketing stack with AI baked in. Run live ad budgets, write SEO content with AI, and build lifecycle journeys that convert. Graduate ready to own growth at any startup.",
    modules: ["Brand & Positioning", "SEO & Content with AI", "Performance Marketing", "Email & Lifecycle", "Analytics & Attribution", "Capstone: Full-funnel Campaign"],
    outcomes: ["Performance Marketer", "Growth Marketer", "SEO Lead", "Content Strategist"],
    tools: ["Meta Ads", "Google Ads", "GA4", "Klaviyo", "Jasper"],
    curriculum: [
      { week: "Month 1", topic: "Brand & Positioning" },
      { week: "Month 2–3", topic: "SEO with AI" },
      { week: "Month 4–5", topic: "Paid: Meta, Google, LinkedIn" },
      { week: "Month 6–7", topic: "Email & Lifecycle" },
      { week: "Month 8–9", topic: "Attribution & Capstone" },
    ],
    blogs: [
      { title: "How AI killed (and saved) SEO", read: "7 min", excerpt: "Why content-led brands still win — when they use AI right." },
      { title: "₹10L Meta ads budget: a real cohort case study", read: "9 min", excerpt: "Creatives, audiences, CAC, ROAS — all numbers, no fluff." },
      { title: "Email is the highest-ROI channel. Here's why.", read: "5 min", excerpt: "Modern lifecycle playbooks for D2C and SaaS." },
    ],
  },
  {
    slug: "ai-graphic-design",
    title: "AI in Graphic Design",
    short: "Design at the speed of thought with generative tools and timeless craft.",
    tag: "Creative", duration: "9 Months", level: "Beginner", fee: "₹2.7L",
    rating: 4.8, students: "260+",
    Icon: Palette, gradient: "from-[oklch(0.78_0.2_70)] to-[oklch(0.7_0.2_330)]",
    image: courseDesign,
    overview: "Learn design the right way — typography, color, composition, brand systems — then accelerate with AI for ideation, illustration and motion. Build a 12-piece portfolio that gets you hired.",
    modules: ["Design Principles", "Typography & Color", "Brand Identity", "AI Image Generation", "Motion & 3D Basics", "Capstone: Full Brand System"],
    outcomes: ["Graphic Designer", "Brand Designer", "Visual Designer", "Creative Lead"],
    tools: ["Figma", "Photoshop", "Illustrator", "Midjourney", "Runway"],
    curriculum: [
      { week: "Month 1–2", topic: "Foundations of visual design" },
      { week: "Month 3–4", topic: "Brand identity systems" },
      { week: "Month 5–6", topic: "AI image generation & editing" },
      { week: "Month 7–8", topic: "Motion + 3D basics" },
      { week: "Month 9", topic: "Capstone brand book" },
    ],
    blogs: [
      { title: "Why typography is still the #1 skill", read: "4 min", excerpt: "AI can't replace taste. Here's how to build yours." },
      { title: "Midjourney + Figma: a brand-system workflow", read: "8 min", excerpt: "From mood board to logo lockup in 3 days." },
      { title: "Portfolio rules that get you hired in 2026", read: "6 min", excerpt: "What recruiters at top studios actually look for." },
    ],
  },
  {
    slug: "ai-video-editing",
    title: "AI in Video Editing",
    short: "Edit, score and ship cinema-grade video using AI-augmented workflows.",
    tag: "Creator", duration: "8 Months", level: "Beginner", fee: "₹2.5L",
    rating: 4.7, students: "190+",
    Icon: Film, gradient: "from-[oklch(0.74_0.2_40)] to-[oklch(0.7_0.18_220)]",
    image: courseVideo,
    overview: "From your first cut to a brand film — learn storytelling, editing in Premiere/DaVinci, AI-powered cuts and subtitles, color grading and sound. Graduate as a creator who can ship for any brand.",
    modules: ["Storytelling & Edit Theory", "Premiere & DaVinci", "AI Cuts & Subtitles", "Sound & Color", "Short-form for Social", "Capstone: Brand Film"],
    outcomes: ["Video Editor", "Content Creator", "Motion Editor", "YouTube Producer"],
    tools: ["Premiere", "DaVinci", "Runway", "ElevenLabs", "CapCut"],
    curriculum: [
      { week: "Month 1", topic: "Story & shot grammar" },
      { week: "Month 2–3", topic: "Premiere Pro mastery" },
      { week: "Month 4–5", topic: "AI tools: cuts, captions, voice" },
      { week: "Month 6–7", topic: "Color, sound, finishing" },
      { week: "Month 8", topic: "Capstone: full brand film" },
    ],
    blogs: [
      { title: "The 30-second hook rulebook", read: "4 min", excerpt: "Why the first 3 seconds decide everything on social." },
      { title: "Runway, Pika and the new VFX pipeline", read: "7 min", excerpt: "How indie editors are now competing with VFX houses." },
      { title: "Editing for YouTube vs Reels vs Ads", read: "6 min", excerpt: "Format-specific tricks that change the game." },
    ],
  },
  {
    slug: "ai-accounting",
    title: "AI Accounting",
    short: "Modern finance: automate books, audits and reporting with AI copilots.",
    tag: "Specialist", duration: "10 Months", level: "Intermediate", fee: "₹3.1L",
    rating: 4.8, students: "150+",
    Icon: Calculator, gradient: "from-[oklch(0.7_0.18_60)] to-[oklch(0.74_0.14_160)]",
    image: courseAccounting,
    overview: "Built for the modern finance professional. Master accounting fundamentals, tax compliance, and financial modeling — then layer AI on top to automate the repetitive 80% and focus on insight.",
    modules: ["Accounting Foundations", "Tax & Compliance", "Financial Modeling", "AI for Audit & Reporting", "ERP & Automation", "Capstone: Finance Ops Toolkit"],
    outcomes: ["Accountant", "Finance Analyst", "Audit Associate", "FP&A Analyst"],
    tools: ["Tally", "Zoho Books", "Excel", "QuickBooks", "ChatGPT"],
    curriculum: [
      { week: "Month 1–2", topic: "Accounting & bookkeeping foundations" },
      { week: "Month 3–4", topic: "Tax, GST & compliance" },
      { week: "Month 5–6", topic: "Financial modeling" },
      { week: "Month 7–8", topic: "AI in audit & reporting" },
      { week: "Month 9–10", topic: "ERP, automation & capstone" },
    ],
    blogs: [
      { title: "AI is not replacing accountants — it's freeing them", read: "5 min", excerpt: "The new role of finance teams in AI-first companies." },
      { title: "Excel + ChatGPT: 7 power workflows", read: "6 min", excerpt: "Save 10 hours a week with these prompts." },
      { title: "How to build a 3-statement model in 90 minutes", read: "8 min", excerpt: "Our most-used template, walked through end-to-end." },
    ],
  },
  {
    slug: "business-entrepreneurship",
    title: "Business & Entrepreneurship",
    short: "Build a real venture on campus with capital, mentors and customers.",
    tag: "Founder", duration: "12 Months", level: "All levels", fee: "₹4.8L",
    rating: 4.9, students: "450+",
    Icon: Rocket, gradient: "from-[oklch(0.74_0.22_50)] to-[oklch(0.7_0.2_15)]",
    image: courseEntrepreneur,
    overview: "The most hands-on entrepreneurship program in India. From idea to revenue in 12 months — with founder mentors, seed capital, demo day, and a placement safety net if you choose to join a startup instead.",
    modules: ["Idea to MVP", "Customer Discovery", "Unit Economics", "Fundraising & Pitching", "Operations & Hiring", "Capstone: Live Startup"],
    outcomes: ["Founder", "Co-founder", "Founder's Office", "Chief of Staff"],
    tools: ["Notion", "Figma", "Stripe", "HubSpot", "Webflow"],
    curriculum: [
      { week: "Month 1–2", topic: "Idea validation & customer discovery" },
      { week: "Month 3–4", topic: "MVP build sprint" },
      { week: "Month 5–6", topic: "First revenue & GTM" },
      { week: "Month 7–9", topic: "Scaling, hiring, ops" },
      { week: "Month 10–12", topic: "Fundraising, pitch & demo day" },
    ],
    blogs: [
      { title: "What ₹1 of revenue teaches you that a year of theory can't", read: "5 min", excerpt: "Why we make every student earn before they pitch." },
      { title: "The 12-month founder roadmap", read: "9 min", excerpt: "Week-by-week of how our students go from idea to seed-ready." },
      { title: "How 7 Cohort 2 ventures got their first 100 customers", read: "11 min", excerpt: "Tactics, mistakes, and what we'd do differently." },
    ],
  },
  {
    slug: "sales-business-development",
    title: "Sales & Business Development",
    short: "Master B2B sales — pipeline, outbound, negotiation and key accounts.",
    tag: "High-paying", duration: "9 Months", level: "Beginner+", fee: "₹2.8L",
    rating: 4.8, students: "340+",
    Icon: TrendingUp, gradient: "from-[oklch(0.78_0.2_55)] to-[oklch(0.72_0.18_200)]",
    image: courseSales,
    overview: "Sales is the highest-leverage skill in any company. Learn outbound, discovery, demo, negotiation and account management — then run a live 6-week sales sprint with a real partner startup.",
    modules: ["Sales Foundations", "Outbound & Prospecting", "Discovery & Demo", "Negotiation & Closing", "Account Management", "Capstone: Live Sales Sprint"],
    outcomes: ["SDR", "Account Executive", "BD Manager", "Partnerships Lead"],
    tools: ["HubSpot", "Salesforce", "Apollo", "LinkedIn", "Gong"],
    curriculum: [
      { week: "Month 1", topic: "Sales foundations & psychology" },
      { week: "Month 2–3", topic: "Outbound: email, calls, LinkedIn" },
      { week: "Month 4–5", topic: "Discovery & demo mastery" },
      { week: "Month 6–7", topic: "Negotiation & closing" },
      { week: "Month 8–9", topic: "Live sales sprint capstone" },
    ],
    blogs: [
      { title: "Cold email frameworks that actually book meetings", read: "6 min", excerpt: "The 4-line email that gets a 12% reply rate." },
      { title: "Why discovery is 80% of the deal", read: "5 min", excerpt: "How great AEs let buyers convince themselves." },
      { title: "From SDR to AE in 18 months: a Cohort 1 story", read: "7 min", excerpt: "Anatomy of the fastest promotion in our partner network." },
    ],
  },
];

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("in-view"); io.unobserve(e.target); }
      }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function PgPrograms() {
  useScrollReveal();
  const [active, setActive] = useState<Course | null>(null);
  const [applyFor, setApplyFor] = useState<string | null>(null);

  const openApply = (title?: string) => setApplyFor(title ?? "General Application");

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <div className="w-full bg-mint py-2.5 text-center text-xs sm:text-sm font-medium text-[oklch(0.14_0.01_40)] animate-shimmer">
        Final Admissions Round Now Open — Cohort 2026
      </div>

      <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
          <Link to="/" className="flex items-center gap-2.5">
            <img src={skillAiLogo} alt="SkillAI - Learn Skill Get Job" className="h-10 w-auto rounded-md bg-white p-1" />
          </Link>
          <div className="flex items-center gap-2">
            <Link to="/" className="hidden sm:inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-semibold text-foreground/80 hover:bg-surface transition">
              <ArrowLeft className="h-4 w-4" /> Home
            </Link>
            <button onClick={() => openApply()} className="rounded-full bg-lime px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold text-lime-foreground hover:scale-105 transition-transform">
              APPLY NOW
            </button>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-14 pb-10 lg:pt-20">
        <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-lime/10 blur-3xl animate-float" />
        <div className="pointer-events-none absolute top-20 right-0 h-80 w-80 rounded-full bg-mint/10 blur-3xl animate-float-soft" />

        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="reveal">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-lime/40 bg-lime/5 px-3 py-1 text-xs font-medium text-lime">
              <Sparkles className="h-3.5 w-3.5" /> 9 Postgraduate Programs
            </div>
            <h1 className="text-[2.25rem] sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
              Choose your <span className="text-gradient-lime">PG Program</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-xl">
              Future-ready programs co-designed with founders, CXOs and AI practitioners.
              Hands-on. Cohort-based. Outcome-driven.
            </p>

            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-sm">
              <Meta icon={<Calendar className="h-4 w-4 text-lime" />} label="8–12 Months" />
              <Meta icon={<Clock className="h-4 w-4 text-lime" />} label="Full-Time" />
              <Meta icon={<MapPin className="h-4 w-4 text-lime" />} label="Bangalore" />
              <Meta icon={<Award className="h-4 w-4 text-lime" />} label="9 Tracks" />
            </div>

            <button onClick={() => openApply()} className="mt-8 inline-flex items-center gap-3 rounded-full bg-lime px-6 py-3 text-sm font-bold tracking-wider text-lime-foreground hover:scale-105 transition-transform animate-pulse-glow">
              START APPLICATION <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* hero collage */}
          <div className="reveal reveal-delay-2 relative grid grid-cols-3 gap-3">
            {[courseAi, courseEntrepreneur, courseDesign, courseData, courseMarketing, courseVideo].map((src, i) => (
              <div key={i} className={`relative overflow-hidden rounded-2xl border border-border ${i === 0 || i === 4 ? "row-span-2 aspect-[3/4]" : "aspect-square"} hover-lift`}>
                <img src={src} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/50 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-20">
        <div className="reveal mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold">All Programs</h2>
          <p className="mt-1 text-sm text-muted-foreground">Tap a card to dive into curriculum, outcomes and stories.</p>
        </div>

        <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((c, i) => (
            <article
              key={c.slug}
              className="reveal group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface/60 hover-lift hover:border-lime/50 hover:shadow-[0_20px_60px_-20px_oklch(0.72_0.2_50/0.4)]"
              style={{ transitionDelay: `${(i % 3) * 80}ms` }}
            >
              {/* image */}
              <div className="relative h-44 overflow-hidden">
                <img src={c.image} alt={c.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <span className="absolute left-3 top-3 rounded-full border border-lime/50 bg-background/85 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-lime backdrop-blur">
                  {c.tag}
                </span>
                <div className={`absolute right-3 top-3 grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br ${c.gradient} text-[oklch(0.14_0.01_40)] shadow-lg transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110`}>
                  <c.Icon className="h-5 w-5" />
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg sm:text-xl font-semibold leading-snug group-hover:text-lime transition-colors">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{c.short}</p>

                <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-foreground/80">
                  <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-lime" /> {c.duration}</span>
                  <span className="inline-flex items-center gap-1.5"><Star className="h-3.5 w-3.5 fill-lime text-lime" /> {c.rating}</span>
                  <span className="inline-flex items-center gap-1.5"><Users className="h-3.5 w-3.5 text-lime" /> {c.students}</span>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Fee</div>
                    <div className="text-base font-bold text-lime">{c.fee}</div>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => setActive(c)} className="rounded-full border border-lime/40 px-3 py-2 text-[11px] font-bold tracking-wider text-lime hover:bg-lime/10 transition">
                      EXPLORE
                    </button>
                    <button onClick={() => openApply(c.title)} className="inline-flex items-center gap-1.5 rounded-full bg-lime px-3 py-2 text-[11px] font-bold tracking-wider text-lime-foreground hover:scale-105 transition-transform">
                      APPLY <ArrowRight className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Why SSCC strip */}
      <section className="border-y border-border bg-surface/40 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="reveal mb-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold">Every program ships with</h2>
            <p className="mt-2 text-sm text-muted-foreground">A platform built for real outcomes, not just certificates.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { t: "Live Capstones", d: "Real briefs from real founders, shipped publicly.", Icon: Briefcase },
              { t: "Founder Mentors", d: "1:1 access to operators who've built billion-$ co's.", Icon: Users },
              { t: "AI-first Curriculum", d: "Every track integrates modern AI workflows.", Icon: Sparkles },
              { t: "Placement Cell", d: "Founder-facing roles with 500+ startup partners.", Icon: TrendingUp },
            ].map((b, i) => (
              <div key={b.t} className="reveal rounded-2xl border border-border bg-background p-5 hover-lift hover:border-lime/50" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-lime/15 text-lime">
                  <b.Icon className="h-5 w-5" />
                </div>
                <h4 className="mt-4 font-semibold">{b.t}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 text-center">
        <h2 className="reveal text-3xl sm:text-4xl font-bold">Not sure which program fits?</h2>
        <p className="reveal reveal-delay-1 mt-3 text-muted-foreground">Talk to our admissions team — get a 20-min counselling call.</p>
        <button onClick={() => openApply()} className="reveal reveal-delay-2 mt-6 inline-flex items-center gap-3 rounded-full bg-lime px-6 py-3 text-sm font-bold tracking-wider text-lime-foreground transition-all hover:scale-105 animate-pulse-glow">
          BOOK A CALL <ArrowRight className="h-4 w-4" />
        </button>
      </section>

      {/* Modals */}
      {active && <CourseModal course={active} onClose={() => setActive(null)} onApply={() => { const t = active.title; setActive(null); openApply(t); }} />}
      {applyFor && <ApplyModal program={applyFor} onClose={() => setApplyFor(null)} />}

      <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} SSCC School of Business
      </footer>
    </div>
  );
}

function Meta({ icon, label }: { icon: React.ReactNode; label: string }) {
  return <span className="inline-flex items-center gap-2 text-foreground/80">{icon} {label}</span>;
}

function CourseModal({ course, onClose, onApply }: { course: Course; onClose: () => void; onApply: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-black/75 p-3 sm:p-6 backdrop-blur-sm animate-fade-in" onClick={onClose}>
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl border border-border bg-background shadow-2xl animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header banner with image */}
        <div className="relative h-48 sm:h-64 overflow-hidden rounded-t-2xl">
          <img src={course.image} alt={course.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          <button onClick={onClose} className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-black/50 text-white hover:bg-black/70 transition">✕</button>
          <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0">
              <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${course.gradient} text-[oklch(0.14_0.01_40)] shadow-lg`}>
                <course.Icon className="h-6 w-6" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] uppercase tracking-widest text-lime">{course.tag}</div>
                <h3 className="truncate text-lg sm:text-2xl font-bold text-white drop-shadow">{course.title}</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="p-5 sm:p-7">
          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { k: "Duration", v: course.duration },
              { k: "Level", v: course.level },
              { k: "Rating", v: `${course.rating} ★` },
              { k: "Fee", v: course.fee },
            ].map((s) => (
              <div key={s.k} className="rounded-xl border border-border bg-surface/50 p-3 text-center">
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{s.k}</div>
                <div className="mt-1 text-sm font-bold text-lime">{s.v}</div>
              </div>
            ))}
          </div>

          <Section title="Overview">
            <p className="text-sm sm:text-base text-foreground/85 leading-relaxed">{course.overview}</p>
          </Section>

          <Section title="What you'll learn">
            <ul className="grid gap-2 sm:grid-cols-2">
              {course.modules.map((m) => (
                <li key={m} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-lime" /> {m}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Curriculum timeline">
            <ol className="relative space-y-3 border-l border-border pl-5">
              {course.curriculum.map((c) => (
                <li key={c.week} className="relative">
                  <span className="absolute -left-[26px] top-1 grid h-4 w-4 place-items-center rounded-full bg-lime text-[10px] font-bold text-lime-foreground">●</span>
                  <div className="text-xs font-semibold uppercase tracking-wider text-lime">{c.week}</div>
                  <div className="text-sm text-foreground/85">{c.topic}</div>
                </li>
              ))}
            </ol>
          </Section>

          <Section title="Career outcomes">
            <div className="flex flex-wrap gap-2">
              {course.outcomes.map((o) => (
                <span key={o} className="rounded-full border border-lime/40 bg-lime/5 px-3 py-1 text-xs text-lime">{o}</span>
              ))}
            </div>
          </Section>

          <Section title="Tools you'll master">
            <div className="flex flex-wrap gap-2">
              {course.tools.map((t) => (
                <span key={t} className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-foreground/80">{t}</span>
              ))}
            </div>
          </Section>

          <Section title="From the SSCC blog">
            <div className="grid gap-3 sm:grid-cols-3">
              {course.blogs.map((b) => (
                <article key={b.title} className="group rounded-xl border border-border bg-surface/40 p-4 hover-lift hover:border-lime/50">
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-muted-foreground">
                    <span>Blog</span>
                    <span>{b.read} read</span>
                  </div>
                  <h4 className="mt-2 text-sm font-semibold leading-snug group-hover:text-lime transition-colors">{b.title}</h4>
                  <p className="mt-1.5 text-xs text-muted-foreground line-clamp-3">{b.excerpt}</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold text-lime">
                    Read more <ArrowRight className="h-3 w-3" />
                  </div>
                </article>
              ))}
            </div>
          </Section>

          <div className="mt-7 flex flex-col-reverse sm:flex-row gap-3 sm:justify-end">
            <button onClick={onClose} className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold hover:bg-surface transition">Close</button>
            <button onClick={onApply} className="inline-flex items-center justify-center gap-2 rounded-full bg-lime px-5 py-2.5 text-sm font-bold text-lime-foreground hover:scale-105 transition-transform animate-pulse-glow">
              APPLY NOW <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-6">
      <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        <ChevronDown className="h-3.5 w-3.5 text-lime" /> {title}
      </div>
      {children}
    </div>
  );
}

function ApplyModal({ program, onClose }: { program: string; onClose: () => void }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", program, education: "", city: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose]);

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim() || form.name.length > 100) e.name = "Enter your full name (max 100)";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) || form.email.length > 255) e.email = "Enter a valid email";
    if (!/^\+?[0-9\s-]{7,15}$/.test(form.phone)) e.phone = "Enter a valid phone number";
    if (!form.education.trim()) e.education = "Select your education";
    if (!form.city.trim() || form.city.length > 80) e.city = "Enter your city";
    if (form.message.length > 500) e.message = "Keep under 500 characters";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    setTimeout(() => onClose(), 2200);
  };

  return (
    <div className="fixed inset-0 z-[110] grid place-items-center bg-black/80 p-3 sm:p-6 backdrop-blur-md animate-fade-in" onClick={onClose}>
      <div className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto rounded-2xl border border-lime/30 bg-background shadow-2xl animate-scale-in" onClick={(e) => e.stopPropagation()}>
        <div className="relative overflow-hidden rounded-t-2xl bg-gradient-to-br from-[oklch(0.72_0.2_50)] to-[oklch(0.45_0.15_30)] p-6">
          <div className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
          <button onClick={onClose} className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-black/40 text-white hover:bg-black/60 transition">✕</button>
          <div className="flex items-center gap-3 text-white">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-white/15 backdrop-blur">
              <Send className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <div className="text-[10px] uppercase tracking-widest opacity-80">Application Form</div>
              <h3 className="truncate text-xl font-bold">Apply to {program}</h3>
            </div>
          </div>
        </div>

        {submitted ? (
          <div className="p-8 text-center">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-lime/15 text-lime animate-pulse-glow">
              <CheckCircle2 className="h-7 w-7" />
            </div>
            <h4 className="mt-4 text-xl font-bold">Application received!</h4>
            <p className="mt-1 text-sm text-muted-foreground">Our admissions team will reach out within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="p-5 sm:p-6 space-y-4" noValidate>
            <Field label="Full name" error={errors.name}>
              <input value={form.name} onChange={update("name")} maxLength={100} className="w-full rounded-lg border border-border bg-surface/60 px-3 py-2.5 text-sm outline-none focus:border-lime focus:ring-2 focus:ring-lime/30 transition" placeholder="Aarav Sharma" />
            </Field>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Email" error={errors.email}>
                <input type="email" value={form.email} onChange={update("email")} maxLength={255} className="w-full rounded-lg border border-border bg-surface/60 px-3 py-2.5 text-sm outline-none focus:border-lime focus:ring-2 focus:ring-lime/30 transition" placeholder="you@email.com" />
              </Field>
              <Field label="Phone" error={errors.phone}>
                <input value={form.phone} onChange={update("phone")} maxLength={15} className="w-full rounded-lg border border-border bg-surface/60 px-3 py-2.5 text-sm outline-none focus:border-lime focus:ring-2 focus:ring-lime/30 transition" placeholder="+91 98xxxxxx" />
              </Field>
            </div>
            <Field label="Program">
              <select value={form.program} onChange={update("program")} className="w-full rounded-lg border border-border bg-surface/60 px-3 py-2.5 text-sm outline-none focus:border-lime focus:ring-2 focus:ring-lime/30 transition">
                <option>General Application</option>
                {courses.map((c) => <option key={c.slug}>{c.title}</option>)}
              </select>
            </Field>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Education" error={errors.education}>
                <select value={form.education} onChange={update("education")} className="w-full rounded-lg border border-border bg-surface/60 px-3 py-2.5 text-sm outline-none focus:border-lime focus:ring-2 focus:ring-lime/30 transition">
                  <option value="">Select…</option>
                  <option>Class 12 (any stream)</option>
                  <option>Undergraduate (ongoing)</option>
                  <option>Graduate</option>
                  <option>Postgraduate</option>
                  <option>Working professional</option>
                </select>
              </Field>
              <Field label="City" error={errors.city}>
                <input value={form.city} onChange={update("city")} maxLength={80} className="w-full rounded-lg border border-border bg-surface/60 px-3 py-2.5 text-sm outline-none focus:border-lime focus:ring-2 focus:ring-lime/30 transition" placeholder="Bangalore" />
              </Field>
            </div>
            <Field label="Why this program? (optional)" error={errors.message}>
              <textarea value={form.message} onChange={update("message")} rows={3} maxLength={500} className="w-full rounded-lg border border-border bg-surface/60 px-3 py-2.5 text-sm outline-none focus:border-lime focus:ring-2 focus:ring-lime/30 transition resize-none" placeholder="Tell us a bit about yourself…" />
            </Field>

            <div className="flex flex-col-reverse sm:flex-row gap-3 sm:justify-end pt-2">
              <button type="button" onClick={onClose} className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold hover:bg-surface transition">Cancel</button>
              <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-lime px-6 py-2.5 text-sm font-bold text-lime-foreground hover:scale-105 transition-transform">
                SUBMIT APPLICATION <Send className="h-4 w-4" />
              </button>
            </div>
            <p className="text-[11px] text-muted-foreground text-center pt-1">By submitting, you agree to be contacted by our admissions team.</p>
          </form>
        )}
      </div>
    </div>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</span>
      {children}
      {error && <span className="mt-1 block text-[11px] text-destructive">{error}</span>}
    </label>
  );
}
