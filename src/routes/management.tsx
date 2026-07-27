import { createFileRoute, Link } from "@tanstack/react-router";
import skillAiLogo from "@/assets/skill-ai-logo.png";
import { useEffect, useState } from "react";
import { Briefcase, TrendingUp, Users, Target, DollarSign, Sparkles, ArrowRight, Clock, Award, BarChart3 } from "lucide-react";
import { ApplyModal } from "./ug-programs";
import imgBiz from "@/assets/mg-biz.jpg";
import imgSales from "@/assets/mg-sales.jpg";
import imgMkt from "@/assets/mg-mkt.jpg";
import imgFin from "@/assets/mg-fin.jpg";
import imgPpl from "@/assets/mg-ppl.jpg";
import imgPm from "@/assets/mg-pm.jpg";

export const Route = createFileRoute("/management")({
  head: () => ({
    meta: [
      { title: "Management Programs — SSCC" },
      { name: "description", content: "Management programs at SSCC: business leadership, marketing, sales, finance and operations." },
    ],
  }),
  component: Management,
});

const tracks = [
  { Icon: Briefcase, img: imgBiz, title: "Business & Entrepreneurship", desc: "Build, run and scale a venture. Strategy, finance, ops and fundraising — taught by operators.", dur: "9 months", fee: "₹1.6 L", skills: ["Strategy", "Finance", "Ops", "Fundraising"] },
  { Icon: TrendingUp, img: imgSales, title: "Sales & Business Development", desc: "B2B and B2C selling, pipeline building, key account management and partnerships.", dur: "5 months", fee: "₹1.1 L", skills: ["B2B Sales", "CRM", "Negotiation"] },
  { Icon: Target, img: imgMkt, title: "Marketing & Growth", desc: "Performance marketing, brand, content and growth experiments with AI tools.", dur: "5 months", fee: "₹1.1 L", skills: ["Performance", "Brand", "SEO", "Growth"] },
  { Icon: DollarSign, img: imgFin, title: "Finance & Accounting", desc: "Modern finance — books, taxation, fintech, valuation and FP&A.", dur: "6 months", fee: "₹1.0 L", skills: ["FP&A", "Tax", "Audit", "Valuation"] },
  { Icon: Users, img: imgPpl, title: "People & Operations", desc: "HR, talent ops, culture and scaling teams in fast-growing companies.", dur: "4 months", fee: "₹80K", skills: ["Hiring", "Ops", "Culture"] },
  { Icon: BarChart3, img: imgPm, title: "Product Management", desc: "Discovery, roadmaps, metrics and shipping — for SaaS and consumer products.", dur: "6 months", fee: "₹1.3 L", skills: ["Discovery", "Roadmap", "Metrics", "PRDs"] },
];


function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add("in-view"), io.unobserve(e.target))), { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Management() {
  useReveal();
  const [apply, setApply] = useState<string | null>(null);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2"><img src={skillAiLogo} alt="SkillAI - Learn Skill Get Job" className="h-9 w-auto rounded-md bg-white p-1" /></Link>
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">← Home</Link>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-border/40 px-6 py-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,oklch(0.72_0.2_50/0.25),transparent_60%)]" />
        <div className="mx-auto max-w-7xl reveal">
          <span className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/5 px-4 py-1.5 text-xs font-semibold text-lime"><Sparkles className="h-3.5 w-3.5" /> Management</span>
          <h1 className="mt-5 text-5xl font-black tracking-tight md:text-7xl">Lead, sell, build, <span className="text-gradient-lime">scale</span>.</h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">Management programs taught by founders, operators and CXOs — with live projects from partner companies.</p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-7 md:grid-cols-2 lg:grid-cols-3">
          {tracks.map((t, i) => (
            <article key={t.title} className={`reveal reveal-delay-${(i % 4) + 1} hover-lift group relative overflow-hidden rounded-3xl border border-border/50 bg-surface`}>
              <div className="relative h-44 overflow-hidden">
                <img src={t.img} alt={t.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent" />
                <div className="absolute right-3 top-3 grid h-11 w-11 place-items-center rounded-xl bg-lime/90 text-lime-foreground shadow-lg transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110"><t.Icon className="h-5 w-5" /></div>
              </div>
              <div className="p-7">
                <h2 className="text-2xl font-black">{t.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
                <div className="mt-5 flex flex-wrap gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{t.dur}</span>
                  <span className="inline-flex items-center gap-1.5"><Award className="h-3.5 w-3.5" />{t.fee}</span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {t.skills.map((s) => <span key={s} className="rounded-full bg-background/60 px-3 py-1 text-xs text-muted-foreground ring-1 ring-border/40">{s}</span>)}
                </div>
                <button onClick={() => setApply(t.title)} className="mt-6 inline-flex items-center gap-2 rounded-full bg-lime px-5 py-2.5 text-sm font-bold text-lime-foreground hover:scale-105 transition-transform">Apply Now <ArrowRight className="h-4 w-4" /></button>
              </div>
            </article>
          ))}

        </div>
      </section>

      <section className="border-t border-border/40 bg-surface/50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-black md:text-5xl reveal">Why SSCC Management?</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[{ t: "Operator-led", d: "Every course taught by working founders and CXOs." }, { t: "Live Projects", d: "Real consulting briefs from partner companies." }, { t: "Placement Network", d: "200+ hiring partners across startups & enterprises." }].map((b, i) => (
              <div key={b.t} className={`reveal reveal-delay-${i + 1} rounded-2xl border border-border/40 bg-background p-6 hover-lift`}>
                <div className="text-xl font-bold">{b.t}</div>
                <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {apply && <ApplyModal program={apply} onClose={() => setApply(null)} />}
    </div>
  );
}
