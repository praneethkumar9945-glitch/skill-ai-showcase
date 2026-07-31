import { createFileRoute, Link } from "@tanstack/react-router";
import skillAiLogo from "@/assets/skill-ai-logo.png";
import { Calendar, Clock, MapPin, Award, Play, ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ApplyModal } from "./ug-programs";

import heroCard from "@/assets/hero-card.jpg";
import pillar1 from "@/assets/pillar-1.jpg";
import pillar2 from "@/assets/pillar-2.jpg";
import pillar3 from "@/assets/pillar-3.jpg";
import pillar4 from "@/assets/pillar-4.jpg";
import dishaAsset from "@/assets/disha.png.asset.json";
import manyaAsset from "@/assets/manya.png.asset.json";
import meghaShreeAsset from "@/assets/megha-shree.png.asset.json";
import priyankaAsset from "@/assets/priyanka.png.asset.json";
import sharanyaImg from "@/assets/sharanya-fixed.png";
import suprabhaImg from "@/assets/suprabha-fixed.png";
import demodayImg from "@/assets/demoday.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SKILL AI School of Business — Build Real Businesses" },
      { name: "description", content: "PGP in Startup Leadership & Entrepreneurship at SKILL AI. 12 months, full-time, Bangalore." },
      { property: "og:title", content: "SKILL AI School of Business" },
      { property: "og:description", content: "The business school where you build real businesses." },
    ],
  }),
  component: Index,
});

const navItems: { label: string; chevron: boolean; href?: string }[] = [
  
  { label: "PG/UG Program", chevron: true, href: "/ug-programs" },
  { label: "Multimedia", chevron: true, href: "/multimedia" },
  { label: "AI", chevron: true, href: "/ai" },
  { label: "Management", chevron: true, href: "/management" },
  { label: "Outcomes", chevron: true, href: "/outcomes" },
  { label: "Online Programs", chevron: true, href: "/online-programs" },
  { label: "Incubation", chevron: false, href: "/incubation" },
];

const stats = [
  { value: "10L", label: "Average CTC (in Lakhs)" },
  { value: "25+", label: "Programs" },
  { value: "50+", label: "Internships" },
  { value: "100+", label: "Companies tie-up" },
  { value: "10000+", label: "Case studies" },
];

const pillars = [
  
  { n: "2", title: "AI courese", img: pillar2, href: "/ai", body: "Explore industry-ready AI, DS, Big Data, Advanced MLOps, Gen Ai, Agentic Ai, Cyber security courses with live projects and placement support." },
  { n: "3", title: "Multimedia", img: pillar3, href: "/multimedia", body: "Explore industry-ready AI, DS, Big Data, Advanced MLOps, Gen Ai, Agentic Ai, Cyber security courses with live projects and placement support." },
  { n: "4", title: "Management", img: pillar4, href: "/management", body: "Business & Entrepreneurship, Sales, Marketing and Finance — operator-led classes that turn theory into traction." },
  { n: "5", title: "UG/PG Program", img: pillar1, href: "/ug-programs", body: "Undergraduate (BCA, BBA, BCom, BA) and Postgraduate (MBA, MCA, MCom, MA) degrees redesigned for the AI era." },
];

const life: { tag: string; title: string; by: string; img: string; body: string; slug?: string }[] = [
  { tag: "Life at SKILL AI", title: "Disha", by: "", img: dishaAsset.url, body: "", slug: "disha" },
  { tag: "Life at SKILL AI", title: "Manya", by: "", img: manyaAsset.url, body: "", slug: "manya" },
  { tag: "Life at SKILL AI", title: "Megha Shree", by: "", img: meghaShreeAsset.url, body: "", slug: "megha" },
  { tag: "Life at SKILL AI", title: "Priyanka", by: "", img: priyankaImg, body: "", slug: "priyanka" },
  { tag: "Life at SKILL AI", title: "Sharanya", by: "", img: sharanyaImg, body: "", slug: "sharanya" },
  { tag: "Life at SKILL AI", title: "Suprabha", by: "", img: suprabhaImg, body: "", slug: "suprabha" },
];

const vcs = ["Elevation", "Antler", "Blume", "Titan Capital", "Fireside", "Campus Fund", "Waterbridge", "Spring MC", "WTFund", "Peer Capital", "Idea Spring", "Huddle"];

/** Auto-reveal on scroll for any element with class "reveal" */
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Logo({ size = "md" }: { size?: "md" | "sm" }) {
  const height = size === "sm" ? "h-8" : "h-10";
  return (
    <img
      src={skillAiLogo}
      alt="SkillAI - Learn Skill Get Job"
      className={`${height} w-auto rounded-md bg-white p-1`}
    />
  );
}

function Index() {
  useScrollReveal();
  const [menuOpen, setMenuOpen] = useState(false);
  const [apply, setApply] = useState(false);


  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Announcement bar */}
      <div className="w-full bg-mint py-2.5 text-center text-xs sm:text-sm font-medium text-[oklch(0.14_0.01_40)] animate-shimmer">
        Final Admissions Round Now Open
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
          <a href="/" className="shrink-0">
            <Logo />
          </a>
          <ul className="hidden items-center gap-4 xl:gap-6 lg:flex">
            {navItems.map((n) => {
              const inner = (
                <>
                  <span className="relative">
                    {n.label}
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-lime transition-all duration-300 group-hover:w-full" />
                  </span>
                  {n.chevron && <ChevronDown className="h-3.5 w-3.5 opacity-70 transition-transform group-hover:translate-y-0.5" />}
                </>
              );
              return (
                <li key={n.label}>
                  {n.href ? (
                    <Link to={n.href} className="group flex items-center gap-1 text-[13px] whitespace-nowrap text-foreground/85 transition-colors hover:text-lime">{inner}</Link>
                  ) : (
                    <button className="group flex items-center gap-1 text-[13px] whitespace-nowrap text-foreground/85 transition-colors hover:text-lime">{inner}</button>
                  )}
                </li>
              );
            })}
          </ul>
          <div className="flex items-center gap-2">
            <button className="hidden sm:inline-flex rounded-full border border-lime px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold tracking-wide text-lime transition-all hover:bg-lime hover:text-lime-foreground hover:scale-105">
              CHAT WITH US
            </button>
            <button
              aria-label="Open menu"
              className="grid h-10 w-10 place-items-center rounded-md border border-border text-foreground lg:hidden"
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden border-t border-border transition-[max-height,opacity] duration-300 ${
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-1 px-4 py-3">
            {navItems.map((n) => {
              const content = (
                <>
                  {n.label}
                  {n.chevron && <ChevronDown className="h-4 w-4 opacity-60" />}
                </>
              );
              const cls = "flex w-full items-center justify-between rounded-lg px-3 py-3 text-sm text-foreground/90 transition-colors hover:bg-surface";
              return (
                <li key={n.label}>
                  {n.href ? (
                    <Link to={n.href} className={cls} onClick={() => setMenuOpen(false)}>{content}</Link>
                  ) : (
                    <button className={cls}>{content}</button>
                  )}
                </li>
              );
            })}
            <li className="mt-2">
              <button className="w-full rounded-full bg-lime px-5 py-2.5 text-sm font-bold text-lime-foreground">
                CHAT WITH US
              </button>
            </li>
          </ul>
        </div>
      </header>

      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-10 pb-16 lg:pt-20 lg:pb-20">
        {/* decorative glow */}
        <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-lime/10 blur-3xl animate-float" />
        <div className="pointer-events-none absolute top-40 right-0 h-80 w-80 rounded-full bg-mint/10 blur-3xl animate-float-soft" />

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="reveal">
            <div className="mb-3 text-xs sm:text-sm font-medium uppercase tracking-widest text-mint">PGP in</div>
            <h1 className="text-[2.25rem] sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
              Start Career With <br />
              <span className="text-gradient-lime">Skill AI</span>
            </h1>

            <div className="mt-6 sm:mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm">
              <Meta icon={<Calendar className="h-4 w-4 text-lime" />} label="12 Months" />
              <Meta icon={<Clock className="h-4 w-4 text-lime" />} label="Full-Time" />
              <Meta icon={<MapPin className="h-4 w-4 text-lime" />} label="Bangalore" />
              <Meta icon={<Award className="h-4 w-4 text-lime" />} label="150 seats" />
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {["AI-focused", "Placements", "Industry experts Classes"].map((t, i) => (
                <span
                  key={t}
                  className="reveal rounded-full border border-lime/40 bg-lime/5 px-3.5 py-1.5 text-xs sm:text-sm text-lime transition-all hover:bg-lime/15 hover:scale-105"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  {t}
                </span>
              ))}
            </div>

            <button className="mt-7 inline-flex items-center gap-3 rounded-full bg-lime px-5 sm:px-6 py-3 text-sm font-bold tracking-wider text-lime-foreground transition-all hover:scale-[1.04] hover:shadow-[0_8px_24px_oklch(0.72_0.2_50/0.35)] animate-pulse-glow">
              KNOW MORE <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>

          </div>

          {/* Video card */}
          <div className="reveal reveal-delay-2 relative aspect-[4/3] overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl animate-float-soft">
            <img src={heroCard} alt="Founder pitching on stage" className="absolute inset-0 h-full w-full object-cover" width={1024} height={1024} />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-transparent" />
            <div className="absolute right-4 top-4 h-9 w-auto rounded-md bg-white p-1">
              <img src={skillAiLogo} alt="SkillAI" className="h-full w-auto" />
            </div>
            <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-10">
              <div className="inline-block w-fit bg-background/80 px-3 py-1 text-xl sm:text-2xl lg:text-3xl font-bold">India needs</div>
              <div className="mt-1 inline-block w-fit bg-background/80 px-3 py-1 text-xl sm:text-2xl lg:text-3xl font-bold">builders,</div>
              <div className="mt-1 inline-block w-fit bg-background/80 px-3 py-1 text-2xl sm:text-3xl lg:text-4xl font-bold">not managers</div>
            </div>
            <button className="absolute left-1/2 top-1/2 grid h-14 w-14 sm:h-16 sm:w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-background/95 text-foreground shadow-lg transition-transform hover:scale-110 animate-pulse-glow">
              <Play className="ml-1 h-5 w-5 sm:h-6 sm:w-6 fill-current" />
            </button>
            <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-background/60 px-3 py-1.5 text-xs">
              <Clock className="h-3.5 w-3.5 text-lime" /> 2 min
            </div>
            <div className="absolute bottom-4 right-4 rounded-xl bg-background/85 px-3 sm:px-4 py-1.5 sm:py-2">
              <div className="text-xs sm:text-sm font-semibold">Varun Limaye</div>
              <div className="text-[10px] sm:text-xs text-muted-foreground">Co-Founder, SKILL AI</div>
            </div>
          </div>
        </div>

        {/* scroll hint */}
        <div className="mt-12 hidden lg:flex justify-center">
          <div className="flex flex-col items-center gap-1 text-muted-foreground animate-scroll-blink">
            <span className="text-xs tracking-widest">SCROLL</span>
            <ChevronDown className="h-4 w-4" />
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="bg-surface/40 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="reveal max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Career Outcomes That Matter; AI Training with Real Job Opportunities</h2>
            <p className="mt-5 text-base sm:text-lg italic text-muted-foreground">
              "At Skill AI, success is measured by more than certificates or placements. Our industry-focused AI training programs prepare students for high-paying careers through real-world projects, internship opportunities, mentorship, and hands-on experience."
            </p>
          </div>

          <div className="mt-10 sm:mt-12 grid gap-4 sm:gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`reveal reveal-delay-${(i % 5) + 1} hover-lift rounded-2xl border border-border bg-background p-5 sm:p-6 hover:border-lime/50`}
              >
                <div className="text-3xl sm:text-4xl font-bold text-gradient-lime">{s.value}</div>
                <div className="mt-2 text-xs sm:text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="reveal mt-10 flex flex-wrap gap-3">
            <CtaBtn primary>Learn More</CtaBtn>
          </div>
        </div>
      </section>

      {/* Pillars / Program */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-24">
        <div className="reveal text-xs sm:text-sm font-medium uppercase tracking-widest text-mint">Program Details</div>
        <h2 className="reveal mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
          Multimedia, AI, <br /> Management, <span className="text-gradient-lime">UG/PG Program</span>
        </h2>
        <div className="reveal mt-7 flex flex-wrap gap-x-7 gap-y-3 text-sm">
          <Meta icon={<Calendar className="h-4 w-4 text-lime" />} label="12 months" />
          <Meta icon={<Clock className="h-4 w-4 text-lime" />} label="Full-Time, Residential" />
          <Meta icon={<Calendar className="h-4 w-4 text-lime" />} label="Aug 2026" />
          <Meta icon={<MapPin className="h-4 w-4 text-lime" />} label="Bangalore" />
        </div>

        <div className="mt-12 grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <Link
              to={p.href}
              key={p.n}
              className={`reveal reveal-delay-${(i % 4) + 1} hover-lift group relative block overflow-hidden rounded-3xl border border-border bg-surface p-6 sm:p-8 hover:border-lime/50`}
            >
              <div className="absolute right-5 top-5 grid h-11 w-11 sm:h-12 sm:w-12 place-items-center rounded-full bg-lime text-lg sm:text-xl font-bold text-lime-foreground animate-pulse-glow">
                {p.n}
              </div>
              <div className="mb-5 sm:mb-6 h-36 sm:h-40 overflow-hidden rounded-2xl">
                <img src={p.img} alt={p.title} loading="lazy" width={1024} height={1024} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold group-hover:text-lime transition-colors">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-lime">
                Explore <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>

        <div className="reveal mt-12 flex justify-center">
          <CtaBtn primary onClick={() => setApply(true)}>Apply Now</CtaBtn>
        </div>
      </section>

      {/* Life at SKILL AI */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="reveal">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Sneak Peek into Life at SKILL AI</h2>
            <p className="mt-3 max-w-2xl text-sm sm:text-base text-muted-foreground">
              A glimpse into the founders, faculty, and moments that shape the SKILL AI experience.
            </p>
          </div>
          <div className="reveal reveal-delay-2"><CtaBtn>Explore More</CtaBtn></div>
        </div>

        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[Autoplay({ delay: 4000, stopOnInteraction: false })]}
          className="reveal mt-8 sm:mt-10 px-1"
        >
          <CarouselContent className="-ml-4">
            {life.map((l) => {
              const card = (
                <article className="hover-lift group h-full overflow-hidden rounded-3xl border border-border bg-surface hover:border-lime/50 cursor-pointer">
                  <div className="relative aspect-[4/3] overflow-hidden bg-white flex items-center justify-center">
                    {/* Large blue circle backdrop */}
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -right-[18%] -top-[22%] h-[150%] w-[110%] rounded-full"
                      style={{ background: "radial-gradient(circle at 30% 40%, #2563eb 0%, #1d4ed8 55%, #1e40af 100%)" }}
                    />
                    {/* Faint dot-grid texture */}
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 opacity-30"
                      style={{ backgroundImage: "radial-gradient(#94a3b8 1px, transparent 1px)", backgroundSize: "14px 14px" }}
                    />
                    {/* Vertical faded name on left */}
                    <div
                      aria-hidden
                      className="pointer-events-none absolute left-1 top-0 h-full flex items-center select-none"
                    >
                      <span
                        className="font-black uppercase tracking-tight leading-none whitespace-nowrap"
                        style={{
                          writingMode: "vertical-rl",
                          transform: "rotate(180deg)",
                          fontSize: "clamp(3rem, 9vw, 6rem)",
                          color: "transparent",
                          WebkitTextStroke: "1.5px rgba(148,163,184,0.55)",
                        }}
                      >
                        {l.title}
                      </span>
                    </div>
                    {/* Bottom faded echo text */}
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -bottom-4 left-0 right-0 text-center select-none"
                    >
                      <span
                        className="font-black uppercase italic tracking-tight leading-none"
                        style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)", color: "rgba(37,99,235,0.35)" }}
                      >
                        {l.title}
                      </span>
                    </div>
                    <img src={l.img} alt={l.title} loading="lazy" width={1024} height={768} className="relative z-10 h-full w-full object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-5 sm:p-6">
                    <div className="text-xs font-semibold uppercase tracking-widest text-lime">{l.tag}</div>
                    <h3 className="mt-2 text-lg sm:text-xl font-bold">{l.title}</h3>
                    <div className="mt-1 text-sm text-muted-foreground">{l.by}</div>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/80">{l.body || (l.slug ? "View portfolio →" : "")}</p>
                  </div>
                </article>
              );
              return (
                <CarouselItem key={l.title} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  {l.slug ? (
                    <Link to="/portfolio/$slug" params={{ slug: l.slug }} className="block h-full">
                      {card}
                    </Link>
                  ) : (
                    card
                  )}
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <div className="mt-6 flex justify-end gap-2">
            <CarouselPrevious className="static translate-y-0 border-lime/50 bg-surface text-lime hover:bg-lime hover:text-lime-foreground" />
            <CarouselNext className="static translate-y-0 border-lime/50 bg-surface text-lime hover:bg-lime hover:text-lime-foreground" />
          </div>
        </Carousel>
      </section>

      {/* Demo Day */}
      <section className="bg-surface/40 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 sm:gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
          <div className="reveal">
            <div className="text-xs sm:text-sm font-medium uppercase tracking-widest text-mint">SKILL AI Demo Day</div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">VCs come to campus.<br />Students pitch real businesses.</h2>
            <p className="mt-4 text-sm sm:text-base text-muted-foreground">
              Demo Days are hosted by the SKILL AI Startup Lab, where students pitch to VCs from across the country. Every founder walks away with direct 1:1 feedback; the strongest pitches open doors to follow-up meetings and real investment.
            </p>
            <div className="mt-7 sm:mt-8 grid grid-cols-2 gap-4 sm:gap-5">
              <div className="hover-lift rounded-2xl border border-border bg-background p-4 sm:p-5 hover:border-lime/50">
                <div className="text-2xl sm:text-3xl font-bold text-gradient-lime">100+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">VCs on Campus</div>
              </div>
              <div className="hover-lift rounded-2xl border border-border bg-background p-4 sm:p-5 hover:border-lime/50">
                <div className="text-2xl sm:text-3xl font-bold text-gradient-lime">20+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Student Startups</div>
              </div>
            </div>
            <div className="mt-7 sm:mt-8">
              <CtaBtn primary>Learn More</CtaBtn>
            </div>
          </div>
          <div className="reveal reveal-delay-2 aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl animate-float-soft">
            <img src={demodayImg} alt="SKILL AI Demo Day" loading="lazy" width={1024} height={768} className="h-full w-full object-cover" />
          </div>
        </div>

        {/* VC Marquee */}
        <div className="mx-auto mt-14 sm:mt-16 max-w-7xl px-4 sm:px-6">
          <div className="text-center text-xs sm:text-sm font-semibold uppercase tracking-widest text-muted-foreground">Visiting VC Partners</div>
          <div className="marquee-pause mt-6 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
            <div className="marquee-track gap-10 sm:gap-14 py-2">
              {[...vcs, ...vcs].map((v, i) => (
                <div key={i} className="shrink-0 text-sm sm:text-base font-semibold tracking-wider text-foreground/70 transition-colors hover:text-lime">
                  {v}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-20 sm:py-24 text-center">
        <h2 className="reveal text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
          The business school where you <span className="text-gradient-lime">build real businesses.</span>
        </h2>
        <p className="reveal reveal-delay-1 mt-5 text-base sm:text-lg text-muted-foreground">
          Applications for the 2026 cohort are now open. Join 150 ambitious builders in Bangalore.
        </p>
        <div className="reveal reveal-delay-2 mt-8 flex flex-wrap justify-center gap-3">
          <CtaBtn primary onClick={() => setApply(true)}>Apply Now</CtaBtn>
          <CtaBtn>Download Placement Report</CtaBtn>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-surface/40">
        <div className="mx-auto grid max-w-7xl gap-8 sm:gap-10 px-4 sm:px-6 py-12 sm:py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">Bangalore, India</p>
          </div>
          <FootCol title="Programs" items={["PG Program", "UG Program", "Online Programs", "Incubation"]} />
          <FootCol title="School" items={["Outcomes", "Faculty", "Alumni", "Life at SKILL AI"]} />
          <FootCol title="Contact" items={["Chat with us", "admissions@sscc.school", "Press", "Careers"]} />
        </div>
        <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} SKILL AI School of Business. All rights reserved.
        </div>
      </footer>

      {apply && <ApplyModal program="SKILL AI Programs" onClose={() => setApply(false)} />}
    </div>
  );
}

function Meta({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 text-foreground/90">
      {icon}
      <span>{label}</span>
    </div>
  );
}

function CtaBtn({ children, primary, onClick }: { children: React.ReactNode; primary?: boolean; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className={
        primary
          ? "group inline-flex items-center gap-2 rounded-full bg-lime px-5 sm:px-6 py-3 text-xs sm:text-sm font-bold tracking-wider text-lime-foreground transition-all hover:scale-[1.04] hover:shadow-[0_8px_24px_oklch(0.72_0.2_50/0.35)]"
          : "group inline-flex items-center gap-2 rounded-full border border-lime px-5 sm:px-6 py-3 text-xs sm:text-sm font-bold tracking-wider text-lime transition-all hover:bg-lime hover:text-lime-foreground hover:scale-[1.04]"
      }
    >
      {children} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </button>
  );
}


function FootCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <div className="text-sm font-semibold">{title}</div>
      <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
        {items.map((i) => (
          <li key={i}>
            <a href="#" className="relative inline-block transition-colors hover:text-lime">
              {i}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
