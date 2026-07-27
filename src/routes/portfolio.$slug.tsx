import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Mail, Award, Sparkles, Target, Briefcase, GraduationCap, Star } from "lucide-react";

import manyaPhoto from "@/assets/manya.png.asset.json";
import meghaPhoto from "@/assets/megha-shree.png.asset.json";
import priyankaPhoto from "@/assets/priyanka-fixed.png";
import sharanyaPhoto from "@/assets/sharanya-fixed.png";
import suprabhaPhoto from "@/assets/suprabha-fixed.png";
import dishaPhoto from "@/assets/disha.png.asset.json";

type Portfolio = {
  name: string;
  role: string;
  photo: string;
  tagline: string;
  expertise: string[];
  skills: string[];
  talents: string[];
  qualifications: { title: string; sub: string }[];
  about: string;
  vision: string;
  currentRole: string;
  standOut: string[];
};

const portfolios: Record<string, Portfolio> = {
  manya: {
    name: "Manya M",
    role: "Project Lead",
    photo: manyaPhoto.url,
    tagline: "Leading with purpose. Building with research.",
    expertise: [
      "Product Research",
      "LMS Research",
      "Requirements Gathering",
      "Project Documentation",
      "Artificial Intelligence",
      "Data Analytics",
    ],
    skills: [
      "Market & Competitor Research",
      "Requirement Gathering",
      "Data Analysis & Reporting",
      "Presentation & Documentation",
      "Leadership & Team Coordination",
      "Communication & Public Speaking",
      "Python, Java, C",
      "HTML, CSS, SQL",
    ],
    talents: [
      "Leadership & organization",
      "Analytical problem-solving",
      "Presentation abilities",
      "Research-driven decisions",
      "Fast technology learner",
      "Event & team management",
    ],
    qualifications: [
      { title: "BCA — Final Year Graduate", sub: "Sridevi College of Information Science, Mangalore University" },
      { title: "AI, ML & Big Data Analytics Certification", sub: "Pursued alongside BCA" },
    ],
    about:
      "I am a passionate Project Leader with strong leadership, communication, and problem solving skills. I enjoy collaborating with teams, managing projects, and turning ideas into practical solutions while continuously learning and growing as a professional.",
    vision:
      "My vision is to lead with purpose, inspire teamwork, and contribute innovative ideas that drive successful projects and create long-term value for the company while growing alongside the organization.",
    currentRole:
      "Project Lead — leading cross-functional teams through research, requirements gathering, and project documentation to deliver practical, data-informed solutions.",
    standOut: [
      "Research-driven mindset backed by hands-on AI, ML & Big Data Analytics training",
      "Bridges technical skills (Python, Java, C, SQL, HTML/CSS) with business and product research",
      "Turns complex requirements into clear, actionable documentation",
      "Natural leader who enjoys organizing teams and events toward a shared goal",
    ],
  },
  megha: {
    name: "Megha Shree",
    role: "Digital Marketing Executive",
    photo: meghaPhoto.url,
    tagline: "Building brands with strategy, creativity, and AI.",
    expertise: [
      "Search Engine Optimization (SEO)",
      "Google Ads",
      "Meta Ads",
      "Social Media Marketing",
      "Content Strategy",
      "AI-powered Marketing",
    ],
    skills: [
      "Search Engine Optimization (SEO)",
      "Google Ads",
      "Meta Ads",
      "Social Media Marketing",
      "Content Marketing",
      "Canva",
      "Google Analytics",
      "AI Tools (ChatGPT, Claude, Gemini)",
    ],
    talents: [
      "Data-driven strategy",
      "Creative content thinking",
      "Campaign planning & optimization",
      "Digital branding",
      "Mentoring interns",
      "Fast learner of new AI tools",
    ],
    qualifications: [
      { title: "MBA — Business Management", sub: "Postgraduate degree" },
      { title: "Digital Marketing Certifications", sub: "Google Ads, Meta Blueprint, SEO" },
    ],
    about:
      "A passionate Digital Marketing Executive specializing in SEO, Google Ads, Meta Ads, social media marketing, content strategy, and AI-powered marketing solutions. Dedicated to building brand visibility, generating quality leads, and creating impactful digital experiences through data-driven strategies.",
    vision:
      "To help brands grow through strategic marketing and creative content, continuously exploring emerging AI technologies and empowering the next generation of marketers.",
    currentRole:
      "Digital Marketing Executive — managing SEO, planning Google & Meta Ads campaigns, developing social media content strategies, designing creatives in Canva, and mentoring internship students.",
    standOut: [
      "Full-funnel digital marketer across SEO, paid, and organic channels",
      "Blends creative content with campaign analytics and reporting",
      "Hands-on with modern AI tools for research, copy, and optimization",
      "Mentors interns through real, live marketing projects",
    ],
  },
  priyanka: {
    name: "Priyanka K Poojary",
    role: "Full-Stack Developer & Data Analyst",
    photo: priyankaPhoto,
    tagline: "Empowering minds. Building skills. Driving futures.",
    expertise: [
      "Full-Stack Web Development (MERN)",
      "Data Science & Analytics",
      "Database Management",
      "Machine Learning",
      "Data Visualization",
      "Teaching & Mentoring",
    ],
    skills: [
      "Python",
      "React.js & Node.js",
      "MongoDB & MySQL",
      "Power BI & Tableau",
      "Excel & Exploratory Data Analysis",
      "HTML & CSS",
      "Software Engineering & QA",
      "Business Process Understanding",
    ],
    talents: [
      "Clear communication & presentation",
      "Leadership & team collaboration",
      "Problem solving",
      "Time management",
      "Quick learner",
      "Teaching complex topics simply",
    ],
    qualifications: [
      { title: "Master of Computer Applications (MCA)", sub: "Shree Devi Institute of Technology" },
      { title: "Bachelor of Computer Applications (BCA)", sub: "St. Aloysius (Deemed to be University)" },
      { title: "AWS Cloud Practitioner Essentials", sub: "Certification" },
      { title: "Data Analytics & Visualization Job Simulation", sub: "Certification" },
    ],
    about:
      "MCA graduate with hands-on experience in Full-Stack Web Development (MERN Stack), Data Analysis, and Database Management. Strong foundation in software engineering, analytics, quality assurance, and business process understanding — currently focused on teaching, mentoring, and turning real-world problems into working products.",
    vision:
      "To empower individuals with industry-relevant skills and help them achieve their career goals, while continuously growing as a developer, analyst, and mentor.",
    currentRole:
      "Full-Stack Developer & Data Analyst — building MERN applications, analyzing data with Python/SQL/Power BI, and mentoring students on real-world projects.",
    standOut: [
      "20+ projects guided & delivered end-to-end",
      "100+ students trained and empowered in modern tech",
      "Comfortable across the full stack: frontend, backend, database, analytics",
      "Committed to practical knowledge, innovation, and learner-first teaching",
    ],
  },
  sharanya: {
    name: "Sharanya V K",
    role: "Human Resources & Management Officer",
    photo: sharanyaPhoto,
    tagline: "Building people. Developing organizations. Driving performance.",
    expertise: [
      "HR Management",
      "Recruitment & Selection",
      "Payroll Management",
      "Employee Documentation",
      "Attendance & Records",
      "Administrative Coordination",
    ],
    skills: [
      "HR Management",
      "Recruitment & Hiring",
      "Payroll Processing",
      "Employee Documentation",
      "MS Excel & MS Word",
      "Power BI",
      "Adobe Photoshop & Illustrator",
      "HR Reporting",
    ],
    talents: [
      "Strong communication",
      "Team leadership",
      "Decision-making",
      "Creativity",
      "Problem-solving under pressure",
      "Quick learner with initiative",
    ],
    qualifications: [
      { title: "Master of Arts in Economics", sub: "Kannur University" },
      { title: "Bachelor of Arts in Economics", sub: "Kannur University" },
      { title: "Diploma in Digital Marketing & Graphic Design", sub: "GTEC Education" },
    ],
    about:
      "I am a Human Resources and Management Officer passionate about creating efficient HR systems that enhance employee performance and organizational growth. With practical experience in recruitment, payroll processing, HR documentation, attendance, and administrative coordination, I focus on delivering structured HR operations that support business objectives.",
    vision:
      "To build a successful and rewarding career in Human Resources and Management by continuously developing my professional skills and contributing to effective HR practices, employee development, and organizational growth.",
    currentRole:
      "HR & Management Officer — handling recruitment, payroll, employee documentation, attendance, and day-to-day HR operations while supporting leadership with reporting and coordination.",
    standOut: [
      "3+ years of learning and HR experience",
      "15+ HR documents & templates created",
      "100+ employee records managed accurately",
      "Combines HR ops with design tools (Photoshop, Illustrator) for branded internal comms",
    ],
  },
  suprabha: {
    name: "Suprabha Y",
    role: "CRM Executive",
    photo: suprabhaPhoto,
    tagline: "Building relationships. Creating trust. Driving admissions.",
    expertise: [
      "Customer Relationship Management",
      "Student Counseling",
      "Lead Management",
      "Admissions Support",
      "Customer Handling",
      "Follow-up & Coordination",
    ],
    skills: [
      "Communication",
      "CRM Management",
      "Student Counseling",
      "Customer Handling",
      "Teamwork",
      "Problem Solving",
      "Negotiation",
      "Record Keeping",
    ],
    talents: [
      "Empathy & active listening",
      "Time management",
      "Relationship building",
      "Trust development",
      "Quick learner",
      "Positive, service-first attitude",
    ],
    qualifications: [
      { title: "Bachelor's Degree in English", sub: "Undergraduate" },
      { title: "CRM & Counseling — On-the-job Training", sub: "Sree Sankaracharya Institution" },
    ],
    about:
      "I am Suprabha Y, a passionate CRM Executive with a Bachelor's degree in English. Currently working at Sree Sankaracharya Institution, I handle student enquiries, maintain CRM records, provide career counseling, manage follow-ups, and support the complete admission process.",
    vision:
      "To become a trusted CRM and counseling professional who builds long-term customer relationships and drives organizational success through empathy, communication, and consistent service excellence.",
    currentRole:
      "CRM Executive at Sree Sankaracharya Institution — handling student enquiries, maintaining CRM records, providing career counseling, and supporting the end-to-end admission process.",
    standOut: [
      "100+ student enquiries handled professionally",
      "50+ leads managed effectively through the CRM",
      "95% customer satisfaction across counseling interactions",
      "Coordinates smoothly across internal departments for admissions",
    ],
  },
  disha: {
    name: "Disha",
    role: "Multimedia Trainer",
    photo: dishaPhoto.url,
    tagline: "Inspiring creativity. Building careers.",
    expertise: [
      "Graphic Design",
      "Video Editing",
      "Motion Graphics",
      "Digital Marketing",
      "Social Media Management",
      "Content Creation",
    ],
    skills: [
      "Graphic Design",
      "Video Editing",
      "Motion Graphics",
      "Digital Marketing",
      "Social Media Management",
      "Content Creation",
      "Presentation & Communication",
    ],
    talents: [
      "Creative thinker",
      "Passionate trainer",
      "Student-centric approach",
      "Results driven",
      "Conceptual & practical teaching",
      "Hands-on project mentoring",
    ],
    qualifications: [
      { title: "BSc in Computer Science and Mathematics", sub: "Undergraduate" },
      { title: "Certified Digital Marketing Course", sub: "Certification" },
    ],
    about:
      "Creative Multimedia Trainer passionate about designing, teaching, and inspiring future creatives. Dedicated to delivering industry-relevant training and empowering students with practical skills and creative confidence.",
    vision:
      "To empower minds to turn creativity into careers by combining creative thinking, hands-on training, and modern digital skills.",
    currentRole:
      "Multimedia Trainer — training students in industry-relevant multimedia skills, designing creative visuals, producing videos and motion graphics, and guiding learners on digital marketing tools and strategies.",
    standOut: [
      "Blends design, video, and marketing into one practical curriculum",
      "Student-first, project-based teaching approach",
      "Bridges creative craft with digital marketing outcomes",
      "Focused on real career growth, not just tools training",
    ],
  },
};

export const Route = createFileRoute("/portfolio/$slug")({
  loader: ({ params }) => {
    const p = portfolios[params.slug];
    if (!p) throw notFound();
    return { portfolio: p };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Portfolio not found — SKILL AI" }, { name: "robots", content: "noindex" }] };
    }
    const { portfolio } = loaderData;
    const title = `${portfolio.name} — ${portfolio.role} | SKILL AI`;
    const desc = `Professional portfolio of ${portfolio.name}, ${portfolio.role} at SKILL AI.`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Portfolio not found</h1>
        <Link to="/" className="mt-4 inline-block text-lime underline">Back to home</Link>
      </div>
    </div>
  ),
  errorComponent: ({ reset }) => (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Something went wrong</h1>
        <button onClick={reset} className="mt-4 rounded-full bg-lime px-5 py-2 font-semibold text-black">Retry</button>
      </div>
    </div>
  ),
  component: PortfolioPage,
});

function PortfolioPage() {
  const { portfolio: p } = Route.useLoaderData();
  const firstName = p.name.split(" ")[0].toUpperCase();

  const stats = [
    { value: `${p.expertise.length}+`, label: "Areas of Expertise" },
    { value: `${p.skills.length}+`, label: "Core Skills" },
    { value: `${p.qualifications.length}`, label: "Qualifications" },
    { value: `${p.standOut.length}+`, label: "Standout Strengths" },
  ];

  return (
    <div className="min-h-screen portfolio-canvas">
      <main className="mx-auto max-w-7xl px-3 py-4 sm:px-6 sm:py-8">
        {/* ===== Poster hero ===== */}
        <section className="relative overflow-hidden rounded-[2rem] portfolio-canvas shadow-2xl">
          {/* Nav */}
          <div className="relative z-20 flex items-center justify-between px-5 py-5 sm:px-8">
            <Link to="/" className="portfolio-ink inline-flex items-center gap-2 text-lg font-black tracking-tight">
              <ArrowLeft className="h-4 w-4" />
              <span className="italic">SKILL AI</span>
            </Link>
            <nav className="hidden items-center gap-7 text-[11px] font-semibold uppercase tracking-[0.18em] portfolio-ink-soft md:flex">
              <a href="#expertise">Expertise</a>
              <a href="#skills">Skills</a>
              <a href="#qualification">Qualification</a>
              <a href="#vision">Vision</a>
            </nav>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[oklch(0.18_0.02_45)] px-4 py-2.5 text-[11px] font-semibold uppercase tracking-widest text-[oklch(0.98_0.01_70)]"
            >
              Connect <ArrowLeft className="h-3.5 w-3.5 rotate-180" />
            </a>
          </div>

          {/* Giant name + portrait */}
          <div className="relative px-5 pb-6 sm:px-8">
            <h1 className="portfolio-display select-none text-center text-[19vw] font-black leading-[0.82] tracking-tighter sm:text-[15vw]">
              {firstName}
            </h1>
            <div className="pointer-events-none relative -mt-[13vw] flex justify-center sm:-mt-[11vw]">
              <img
                src={p.photo}
                alt={`${p.name} — ${p.role}`}
                className="h-[42vw] max-h-[430px] w-auto object-contain drop-shadow-2xl"
              />
            </div>

            {/* Left tagline block */}
            <div className="relative z-10 -mt-10 grid gap-6 sm:-mt-16 md:grid-cols-3 md:items-end">
              <div>
                <p className="portfolio-ink max-w-xs text-base font-semibold leading-snug sm:text-lg">
                  {p.tagline}
                </p>
                <a
                  href="#about"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-[oklch(0.18_0.02_45)] px-5 py-2.5 text-[11px] font-semibold uppercase tracking-widest text-[oklch(0.98_0.01_70)]"
                >
                  Explore Profile <ArrowLeft className="h-3.5 w-3.5 rotate-180" />
                </a>
              </div>
              <div className="hidden md:block" />
              <div className="md:text-right">
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] portfolio-ink-soft">
                  Currently
                </p>
                <p className="portfolio-ink mt-2 text-sm font-semibold">{p.role}</p>
                <p className="portfolio-ink-soft mt-1 text-xs">SKILL AI · Mangalore</p>
              </div>
            </div>

            {/* Glass stat strip */}
            <div className="relative z-10 mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl portfolio-glass sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="px-4 py-6 text-center">
                  <div className="portfolio-ink text-2xl font-black sm:text-3xl">{s.value}</div>
                  <div className="portfolio-ink-soft mt-1 text-[10px] font-semibold uppercase tracking-[0.16em]">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Content on dark canvas ===== */}
        <div className="mt-6 rounded-[2rem] bg-background p-5 text-foreground sm:p-10">
          <section id="about" className="grid gap-8 md:grid-cols-[1fr_1.4fr]">
            <div className="flex items-start gap-4">
              <img
                src={p.photo}
                alt={p.name}
                className="h-20 w-20 shrink-0 rounded-full object-cover ring-2 ring-lime/60"
              />
              <div>
                <h2 className="text-2xl font-black tracking-tight">{p.name}</h2>
                <p className="text-sm font-semibold text-lime">{p.role}</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-foreground/80 sm:text-base">{p.about}</p>
          </section>

          <section className="mt-10 grid gap-6 md:grid-cols-3">
            <div id="expertise" className="md:col-span-1">
              <Card icon={<Sparkles className="h-5 w-5" />} title="Expertise">
                <BulletList items={p.expertise} />
              </Card>
            </div>
            <div id="skills">
              <Card icon={<Award className="h-5 w-5" />} title="Skills">
                <BulletList items={p.skills} />
              </Card>
            </div>
            <Card icon={<Star className="h-5 w-5" />} title="Talent">
              <BulletList items={p.talents} />
            </Card>
          </section>

          <section id="qualification" className="mt-6">
            <Card icon={<GraduationCap className="h-5 w-5" />} title="Education Roadmap">
              <ol className="relative mt-2 space-y-8 border-l-2 border-dashed border-lime/40 pl-8">
                {p.qualifications.map((q: { title: string; sub: string }, i: number) => (
                  <li key={q.title} className="relative">
                    <span className="absolute -left-[43px] flex h-7 w-7 items-center justify-center rounded-full border-2 border-lime bg-surface text-[11px] font-bold text-lime">
                      {i + 1}
                    </span>
                    <div className="rounded-2xl border border-border bg-background/40 p-4 transition hover:border-lime/60">
                      <div className="font-semibold text-foreground">{q.title}</div>
                      <div className="mt-1 text-sm italic text-muted-foreground">{q.sub}</div>
                    </div>
                  </li>
                ))}
                <li className="relative">
                  <span className="absolute -left-[43px] flex h-7 w-7 items-center justify-center rounded-full bg-lime text-[11px] font-bold text-background">
                    <Briefcase className="h-3.5 w-3.5" />
                  </span>
                  <div className="rounded-2xl border border-lime/40 bg-lime/5 p-4">
                    <div className="font-semibold text-foreground">Currently Working As</div>
                    <p className="mt-1 text-sm leading-relaxed text-foreground/85">{p.currentRole}</p>
                  </div>
                </li>
              </ol>
            </Card>
          </section>


          <section id="vision" className="mt-6 grid gap-6 md:grid-cols-2">
            <Card icon={<Target className="h-5 w-5" />} title="My Vision">
              <p className="text-sm leading-relaxed text-foreground/85">{p.vision}</p>
            </Card>
            <div id="contact">
              <Card icon={<Mail className="h-5 w-5" />} title="Why I Stand Out">
                <BulletList items={p.standOut} />
              </Card>
            </div>
          </section>

          <div className="mt-10 flex justify-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold hover:border-lime hover:text-lime"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Life at SKILL AI
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

function Card({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="h-full rounded-2xl border border-border bg-surface p-5 transition hover:border-lime/50 sm:p-6">
      <div className="flex items-center gap-2 text-lime">
        {icon}
        <h2 className="text-sm font-bold uppercase tracking-widest">{title}</h2>
      </div>
      <div className="mt-4 text-foreground/90">{children}</div>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((i) => (
        <li key={i} className="flex gap-2 text-sm leading-relaxed">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-lime" />
          <span>{i}</span>
        </li>
      ))}
    </ul>
  );
}
