import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Mail, Phone, Linkedin, Globe, MapPin, ChevronDown, Sparkles,
  Search, Bot, PenTool, Palette, GraduationCap, Briefcase,
  TrendingUp, Zap, Brain, Target, Code2, BarChart3,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Julio César Gómez | SEO Manager & Growth Marketing Specialist" },
      { name: "description", content: "CV interactivo de Julio César Gómez — SEO técnico, automatización con IA, n8n, GA4 y growth marketing de alto impacto." },
      { property: "og:title", content: "Julio César Gómez | SEO & Growth Marketing" },
      { property: "og:description", content: "SEO técnico · IA & Automatización · Growth Marketing" },
      { property: "og:type", content: "profile" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" },
    ],
  }),
  component: Index,
});

type Lang = "es" | "en";

const t = {
  es: {
    nav: { perfil: "Perfil", exp: "Experiencia", skills: "Habilidades", edu: "Educación", contact: "Contacto" },
    hero: {
      role: "SEO Manager & Growth Marketing Specialist",
      tagline: "Experto en automatización, IA y estrategias digitales de alto impacto",
      badges: ["SEO Técnico", "IA & Automatización", "Growth Marketing"],
      intro: "Ayudo a marcas a multiplicar su tráfico orgánico y leads cualificados combinando SEO técnico, automatización con IA (n8n, Make) y estrategias de contenido data-driven. +6 años escalando proyectos en España y LATAM con resultados medibles.",
      cta: "Hablemos por WhatsApp",
    },
    perfil: {
      title: "Perfil Profesional",
      body: "Profesional en SEO y Growth Marketing con 6 años de experiencia ayudando a marcas a mejorar su visibilidad online. Especializado en SEO técnico, optimización de contenidos y seguimiento de rendimiento utilizando GA4, GSC, GTM, SEMrush y Looker Studio. Experto en automatización de procesos con n8n y Make, combinando inteligencia artificial generativa para la creación de contenido y elaboración de prompts efectivos.",
      stats: [
        { value: "6+", label: "Años de experiencia" },
        { value: "30+", label: "Proyectos SEO" },
        { value: "10+", label: "Stack de herramientas" },
        { value: "∞", label: "Curiosidad" },
      ],
    },
    exp: { title: "Experiencia Laboral", click: "Click para expandir" },
    skills: { title: "Habilidades", personal: "Habilidades Personales" },
    edu: { title: "Educación" },
    contact: { title: "Contacto", subtitle: "¿Listo para potenciar tu crecimiento digital?" },
  },
  en: {
    nav: { perfil: "Profile", exp: "Experience", skills: "Skills", edu: "Education", contact: "Contact" },
    hero: {
      role: "SEO Manager & Growth Marketing Specialist",
      tagline: "Expert in automation, AI and high-impact digital strategies",
      badges: ["Technical SEO", "AI & Automation", "Growth Marketing"],
      intro: "I help brands multiply organic traffic and qualified leads by combining technical SEO, AI automation (n8n, Make) and data-driven content strategies. 6+ years scaling projects across Spain and LATAM with measurable results.",
      cta: "Let's talk on WhatsApp",
    },
    perfil: {
      title: "Professional Profile",
      body: "SEO and Growth Marketing professional with 6 years of experience helping brands improve their online visibility. Specialized in technical SEO, content optimization and performance tracking using GA4, GSC, GTM, SEMrush and Looker Studio. Expert in process automation with n8n and Make, combining generative AI for content creation and effective prompt engineering.",
      stats: [
        { value: "6+", label: "Years of experience" },
        { value: "30+", label: "SEO projects" },
        { value: "10+", label: "Tools stack" },
        { value: "∞", label: "Curiosity" },
      ],
    },
    exp: { title: "Work Experience", click: "Click to expand" },
    skills: { title: "Skills", personal: "Personal Skills" },
    edu: { title: "Education" },
    contact: { title: "Contact", subtitle: "Ready to boost your digital growth?" },
  },
};

const experience = {
  es: [
    {
      role: "Consultor de Marketing Digital", company: "TARBAY", date: "Abr 2025 – Presente",
      details: [
        "Gestión de tienda Shopify y supervisión de campañas en Meta & Google Ads.",
        "Optimización de la estructura del sitio, contenido y landing pages para SEO y conversiones.",
        "Implementación de rastreo con GA4/GTM y entrega de informes de rendimiento.",
      ],
    },
    {
      role: "Gerente de SEO", company: "GRUPO PROSEIN", date: "Oct 2024 – Jun 2025",
      details: [
        "Liderazgo de estrategias SEO y SEM para mejorar visibilidad y generación de leads.",
        "Auditorías técnicas, investigación de palabras clave y análisis de competencia.",
        "Gestión de Google Ads e implementación de seguimiento de conversiones con GA4 y GTM.",
        "Definición y ejecución de estrategias de contenido y SEO on-page.",
      ],
    },
    {
      role: "Gerente de SEO", company: "Area10Marketing", date: "Ago 2022 – Abr 2024 · Madrid",
      details: [
        "Ejecución de acciones SEO para múltiples cuentas de clientes.",
        "Definición de estrategias de palabras clave y optimización de contenidos.",
        "Preparación de informes y análisis para la mejora continua.",
      ],
    },
  ],
  en: [
    {
      role: "Digital Marketing Consultant", company: "TARBAY", date: "Apr 2025 – Present",
      details: [
        "Shopify store management and supervision of Meta & Google Ads campaigns.",
        "Site structure, content and landing page optimization for SEO and conversions.",
        "GA4/GTM tracking implementation and performance reporting.",
      ],
    },
    {
      role: "SEO Manager", company: "GRUPO PROSEIN", date: "Oct 2024 – Jun 2025",
      details: [
        "Led SEO and SEM strategies to improve visibility and lead generation.",
        "Technical audits, keyword research and competitor analysis.",
        "Google Ads management and conversion tracking with GA4 and GTM.",
        "Content strategy and on-page SEO definition and execution.",
      ],
    },
    {
      role: "SEO Manager", company: "Area10Marketing", date: "Aug 2022 – Apr 2024 · Madrid",
      details: [
        "SEO execution for multiple client accounts.",
        "Keyword strategies and content optimization.",
        "Reporting and analysis for continuous improvement.",
      ],
    },
  ],
};

const skillCategories = [
  { icon: Search, title: { es: "Técnicas & SEO", en: "Technical & SEO" }, tags: ["WordPress", "SEO/SEM", "Looker Studio", "GA4/GTM", "SEMrush", "Search Console"] },
  { icon: Bot, title: { es: "Automatización & IA", en: "Automation & AI" }, tags: ["n8n", "Make", "ChatGPT", "Claude", "Gemini", "Prompting"] },
  { icon: PenTool, title: { es: "Contenido & Marketing", en: "Content & Marketing" }, tags: ["Copywriting", "UX Writing", "Email Marketing", "Social Media", "B2B Sales"] },
  { icon: Palette, title: { es: "Diseño & UX", en: "Design & UX" }, tags: ["Figma", "Adobe XD", "UX Design", "Research"] },
];

const personalSkills = {
  es: [
    { icon: Sparkles, label: "Espíritu creativo" },
    { icon: Target, label: "Confiable y profesional" },
    { icon: BarChart3, label: "Organizado" },
    { icon: Zap, label: "Gestión del tiempo" },
    { icon: Brain, label: "Trabajo en equipo" },
    { icon: TrendingUp, label: "Aprendizaje rápido" },
  ],
  en: [
    { icon: Sparkles, label: "Creative spirit" },
    { icon: Target, label: "Reliable & professional" },
    { icon: BarChart3, label: "Organized" },
    { icon: Zap, label: "Time management" },
    { icon: Brain, label: "Teamwork" },
    { icon: TrendingUp, label: "Fast learner" },
  ],
};

function Index() {
  const [lang, setLang] = useState<Lang>("es");
  const [openTimeline, setOpenTimeline] = useState<number | null>(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const tr = t[lang];
  const exp = experience[lang];
  const personal = personalSkills[lang];

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Ambient background */}
      <div className="fixed inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, oklch(0.82 0.15 215 / 0.15), transparent 70%)" }} />
      <div className="fixed bottom-0 right-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, oklch(0.62 0.18 275 / 0.15), transparent 70%)" }} />

      {/* NAV */}
      <nav className={`sticky top-0 z-50 transition-smooth ${scrolled ? "glass-strong shadow-elevated" : ""}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
          <a href="#top" className="font-display text-2xl font-bold text-gradient tracking-tight">JCG</a>
          <ul className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
            {Object.entries(tr.nav).map(([key, label]) => (
              <li key={key}>
                <a href={`#${key}`} className="nav-underline hover:text-primary transition-smooth">{label}</a>
              </li>
            ))}
          </ul>
          <div className="flex gap-1 glass rounded-lg p-1">
            {(["es", "en"] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider transition-smooth ${
                  lang === l ? "bg-gradient-primary text-primary-foreground shadow-glow" : "text-muted-foreground hover:text-primary"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="top" className="relative bg-gradient-hero py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              {lang === "es" ? "Disponible para proyectos" : "Available for projects"}
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-extrabold leading-[1.05] mb-6 animate-fade-in-up">
            <span className="text-gradient-light">Julio César</span><br />
            <span className="text-gradient">Gómez</span>
          </h1>
          <p className="text-xl sm:text-2xl text-foreground/80 font-medium mb-4 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            {tr.hero.role}
          </p>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-6 animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
            {tr.hero.tagline}
          </p>
          <p className="text-base sm:text-lg text-foreground/75 max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            {tr.hero.intro}
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10 animate-fade-in-up" style={{ animationDelay: "0.35s" }}>
            {tr.hero.badges.map((b) => (
              <span key={b} className="glass px-5 py-2 rounded-full text-sm font-semibold text-primary border-primary/30 hover:shadow-glow hover:-translate-y-0.5 transition-smooth">
                {b}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
            <a href="https://wa.me/584242810798" target="_blank" rel="noreferrer" className="bg-gradient-primary text-primary-foreground px-7 py-3 rounded-full font-semibold shadow-glow hover:shadow-glow-strong hover:-translate-y-0.5 transition-smooth">
              {tr.hero.cta}
            </a>
            <a href="https://www.linkedin.com/in/julio-redacta" target="_blank" rel="noreferrer"
               className="glass px-7 py-3 rounded-full font-semibold hover:border-primary/40 hover:-translate-y-0.5 transition-smooth flex items-center gap-2">
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* PERFIL */}
      <section id="perfil" className="py-24 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle>{tr.perfil.title}</SectionTitle>
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            <p className="lg:col-span-3 text-lg leading-relaxed text-muted-foreground">{tr.perfil.body}</p>
            <div className="lg:col-span-2 grid grid-cols-2 gap-4">
              {tr.perfil.stats.map((s) => (
                <div key={s.label} className="glass rounded-2xl p-6 text-center hover:shadow-glow hover:-translate-y-1 transition-smooth">
                  <div className="text-4xl font-display font-bold text-gradient mb-1">{s.value}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCIA */}
      <section id="exp" className="py-24 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle>{tr.exp.title}</SectionTitle>
          <p className="text-sm font-mono text-muted-foreground mb-8 uppercase tracking-widest">// {tr.exp.click}</p>
          <div className="relative pl-8 md:pl-12">
            <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-transparent opacity-40" />
            {exp.map((item, i) => {
              const open = openTimeline === i;
              return (
                <div key={i} className="relative mb-6 animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className={`absolute -left-[34px] md:-left-[50px] top-6 w-4 h-4 rounded-full border-2 border-primary transition-smooth ${
                    open ? "bg-primary shadow-glow scale-125" : "bg-background"
                  }`} />
                  <button
                    onClick={() => setOpenTimeline(open ? null : i)}
                    className={`w-full text-left glass rounded-2xl p-6 md:p-7 transition-smooth border-l-4 ${
                      open ? "border-l-accent shadow-elevated bg-card/60" : "border-l-primary hover:translate-x-2 hover:shadow-elevated"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4 mb-2 flex-wrap">
                      <div>
                        <h3 className="text-xl font-display font-bold text-gradient">{item.role}</h3>
                        <p className="text-sm font-semibold text-foreground/80 mt-1 flex items-center gap-2">
                          <Briefcase className="w-3.5 h-3.5 text-primary" /> {item.company}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono text-muted-foreground">{item.date}</span>
                        <ChevronDown className={`w-5 h-5 text-primary transition-transform duration-400 ${open ? "rotate-180" : ""}`} />
                      </div>
                    </div>
                    <div className={`grid transition-all duration-500 ease-out ${open ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"}`}>
                      <ul className="overflow-hidden space-y-2">
                        {item.details.map((d, j) => (
                          <li key={j} className="text-sm text-muted-foreground pl-5 relative leading-relaxed">
                            <span className="absolute left-0 text-primary">▹</span> {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-24 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle>{tr.skills.title}</SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
            {skillCategories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <div key={i} className="group glass rounded-2xl p-7 hover:shadow-card-hover hover:-translate-y-2 transition-smooth animate-fade-in-up relative overflow-hidden"
                     style={{ animationDelay: `${i * 0.08}s` }}>
                  <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-smooth"
                       style={{ background: "radial-gradient(circle, oklch(0.82 0.15 215 / 0.2), transparent 70%)" }} />
                  <div className="flex items-center gap-3 mb-5 relative">
                    <div className="w-11 h-11 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
                      <Icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <h4 className="text-lg font-display font-bold text-foreground">{cat.title[lang]}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.tags.map((tag) => (
                      <span key={tag} className="font-mono text-xs px-3 py-1.5 rounded-lg glass hover:bg-gradient-primary hover:text-primary-foreground hover:border-transparent hover:-translate-y-0.5 transition-smooth cursor-default">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <h3 className="text-xl font-display font-bold mb-5 text-foreground/90">{tr.skills.personal}</h3>
          <div className="flex flex-wrap gap-3">
            {personal.map((p, i) => {
              const Icon = p.icon;
              return (
                <div key={i} className="glass rounded-full px-5 py-2.5 flex items-center gap-2 hover:border-primary/40 hover:text-primary hover:-translate-y-0.5 transition-smooth animate-fade-in"
                     style={{ animationDelay: `${i * 0.05}s` }}>
                  <Icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{p.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* EDU */}
      <section id="edu" className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle>{tr.edu.title}</SectionTitle>
          <div className="glass rounded-2xl p-8 flex gap-6 items-start hover:shadow-card-hover hover:-translate-y-1 transition-smooth">
            <div className="w-14 h-14 shrink-0 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow">
              <GraduationCap className="w-7 h-7 text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-xl font-display font-bold text-foreground mb-1">
                {lang === "es" ? "Licenciatura en Publicidad y Mercadeo" : "Bachelor's in Advertising & Marketing"}
              </h3>
              <p className="text-muted-foreground">
                {lang === "es" ? "Mención en Comunicación" : "Communication major"}
              </p>
              <p className="text-sm text-muted-foreground/70 mt-2 font-mono">Universidad Católica Santa Rosa</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle>{tr.contact.title}</SectionTitle>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl">{tr.contact.subtitle}</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <ContactLink icon={Phone} label="(+58) 424 281 07 98" href="tel:+584242810798" />
            <ContactLink icon={Mail} label="gomezjulio13@gmail.com" href="mailto:gomezjulio13@gmail.com" />
            <ContactLink icon={Linkedin} label="linkedin.com/in/julio-redacta" href="https://linkedin.com/in/julio-redacta" />
            <ContactLink icon={Globe} label="behance.net/Julioredacta" href="https://behance.net/Julioredacta" />
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground relative z-10">
        <p className="flex items-center justify-center gap-2">
          <MapPin className="w-3.5 h-3.5" />
          © 2026 Julio César Gómez — {lang === "es" ? "Diseñado para destacar" : "Crafted to stand out"}
        </p>
      </footer>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-12 inline-block relative">
      <span className="text-gradient-light">{children}</span>
      <span className="block w-16 h-1 bg-gradient-primary rounded-full mt-3" />
    </h2>
  );
}

function ContactLink({ icon: Icon, label, href }: { icon: typeof Mail; label: string; href: string }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="glass rounded-2xl p-5 flex items-center gap-4 hover:border-primary/40 hover:shadow-card-hover hover:-translate-y-1 transition-smooth group"
    >
      <div className="w-11 h-11 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow group-hover:scale-110 transition-smooth">
        <Icon className="w-5 h-5 text-primary-foreground" />
      </div>
      <span className="text-sm font-medium text-foreground/80 group-hover:text-primary transition-smooth break-all">{label}</span>
    </a>
  );
}
