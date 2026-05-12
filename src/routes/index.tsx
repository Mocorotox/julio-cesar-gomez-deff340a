import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Mail, Phone, Linkedin, Globe, MapPin, ChevronDown, Sparkles,
  Search, Bot, PenTool, Palette, GraduationCap, Briefcase,
  TrendingUp, Zap, Brain, Target, BarChart3, Menu, X,
  Award, ExternalLink, Rocket, LineChart, ShieldCheck,
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
    nav: { perfil: "Perfil", exp: "Experiencia", portafolio: "Portafolio", skills: "Habilidades", edu: "Educación", certs: "Certificaciones", contact: "Contacto" },
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
    portfolio: { title: "Portafolio de Clientes", subtitle: "Casos de éxito y estrategias de crecimiento", viewImpact: "Impacto alcanzado" },
    skills: { title: "Habilidades", personal: "Habilidades Personales" },
    edu: { title: "Educación" },
    certs: { title: "Certificaciones", view: "Ver certificado" },
    contact: { title: "Contacto", subtitle: "¿Listo para potenciar tu crecimiento digital?" },
  },
  en: {
    nav: { perfil: "Profile", exp: "Experience", portafolio: "Portfolio", skills: "Skills", edu: "Education", certs: "Certifications", contact: "Contact" },
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
    portfolio: { title: "Client Portfolio", subtitle: "Success cases and growth strategies", viewImpact: "Impact achieved" },
    skills: { title: "Skills", personal: "Personal Skills" },
    edu: { title: "Education" },
    certs: { title: "Certifications", view: "View certificate" },
    contact: { title: "Contact", subtitle: "Ready to boost your digital growth?" },
  },
} as const;

const portfolioData = {
  es: [
    { client: "Prosein", category: "Retail & Construcción", desc: "Liderazgo de estrategia SEO y SEM a nivel nacional. Optimización de arquitectura web y embudos de conversión.", metrics: ["+25% Tráfico Orgánico", "+18% Leads Cualificados", "ROAS 4.5x en Ads"], tags: ["SEO Técnico", "GA4", "Google Ads"], icon: TrendingUp },
    { client: "Spatium", category: "Coworking & Real Estate", desc: "Estrategia de Growth Marketing para posicionar espacios de coworking premium. Automatización de captación de leads.", metrics: ["30% Ocupación extra", "Automatización n8n", "Estrategia Local SEO"], tags: ["Growth", "n8n", "Local SEO"], icon: Rocket },
    { client: "Riva Hair Center", category: "Salud & Estética", desc: "Optimización de presencia digital para red de clínicas capilares. Enfoque en conversión y autoridad de marca.", metrics: ["Top 3 Keywords Clave", "+20% Citas Online", "Optimización UX"], tags: ["SEO", "Content Marketing", "UX"], icon: Zap },
    { client: "Imperio de la Seguridad", category: "Seguridad B2B", desc: "Despliegue de campañas B2B para sistemas de seguridad industrial. Segmentación avanzada de tomadores de decisión.", metrics: ["-40% Coste por Lead", "Lead Scoring Automatizado", "Presencia LinkedIn"], tags: ["B2B Marketing", "Meta Ads", "CRM"], icon: ShieldCheck },
    { client: "Londrys", category: "Servicios & App", desc: "Marketing de guerrilla digital y optimización de App Store (ASO) para servicio de lavandería por demanda.", metrics: ["+15% Descargas App", "Retención +10%", "ASO Optimization"], tags: ["ASO", "Mobile Marketing", "Growth"], icon: LineChart },
    { client: "Cerere", category: "Food & Beverage", desc: "Estrategia de contenidos y SEO para marca de alimentos. Posicionamiento de e-commerce y fidelización.", metrics: ["Crecimiento Social 40%", "SEO Semántico", "Branding Digital"], tags: ["Social Media", "SEO Content", "Branding"], icon: Sparkles },
    { client: "Skylights", category: "Tecnología & Iluminación", desc: "Posicionamiento de soluciones tecnológicas de iluminación. Estrategia de Inbound Marketing.", metrics: ["Mejora Visibilidad 50%", "Inbound Strategy", "Lead Nurturing"], tags: ["Inbound", "SEO", "Tech Marketing"], icon: Bot },
  ],
  en: [
    { client: "Prosein", category: "Retail & Construction", desc: "Leadership of SEO and SEM strategy nationwide. Optimization of web architecture and conversion funnels.", metrics: ["+25% Organic Traffic", "+18% Qualified Leads", "4.5x ROAS in Ads"], tags: ["Technical SEO", "GA4", "Google Ads"], icon: TrendingUp },
    { client: "Spatium", category: "Coworking & Real Estate", desc: "Growth Marketing strategy to position premium coworking spaces. Automation of lead acquisition.", metrics: ["30% Extra Occupancy", "n8n Automation", "Local SEO Strategy"], tags: ["Growth", "n8n", "Local SEO"], icon: Rocket },
    { client: "Riva Hair Center", category: "Health & Aesthetics", desc: "Digital presence optimization for hair clinic network. Focus on conversion and brand authority.", metrics: ["Top 3 Key Keywords", "+20% Online Appointments", "UX Optimization"], tags: ["SEO", "Content Marketing", "UX"], icon: Zap },
    { client: "Imperio de la Seguridad", category: "B2B Security", desc: "B2B campaign deployment for industrial security systems. Advanced segmentation of decision makers.", metrics: ["-40% Cost per Lead", "Automated Lead Scoring", "LinkedIn Presence"], tags: ["B2B Marketing", "Meta Ads", "CRM"], icon: ShieldCheck },
    { client: "Londrys", category: "Services & App", desc: "Digital guerrilla marketing and App Store Optimization (ASO) for on-demand laundry service.", metrics: ["+15% App Downloads", "Retention +10%", "ASO Optimization"], tags: ["ASO", "Mobile Marketing", "Growth"], icon: LineChart },
    { client: "Cerere", category: "Food & Beverage", desc: "Content strategy and SEO for food brand. E-commerce positioning and loyalty.", metrics: ["40% Social Growth", "Semantic SEO", "Digital Branding"], tags: ["Social Media", "SEO Content", "Branding"], icon: Sparkles },
    { client: "Skylights", category: "Technology & Lighting", desc: "Positioning of technological lighting solutions. Inbound Marketing strategy.", metrics: ["50% Visibility Improvement", "Inbound Strategy", "Lead Nurturing"], tags: ["Inbound", "SEO", "Tech Marketing"], icon: Bot },
  ],
} as const;

const experience = {
  es: [
    { role: "Líder de Tráfico (Contratación)", company: "TARBAY", date: "Oct 2025 – Abr 2026 · Remoto", details: ["Liderazgo del área de tráfico digital para campañas de adquisición.", "Gestión y optimización de campañas en Google Ads y Meta Ads.", "Reporting y dashboards de performance para toma de decisiones."] },
    { role: "Trafficker Digital", company: "Boosty Digital", date: "Oct 2025 · Caracas (Híbrido)", details: ["Gestión de campañas en Google Ads y Meta Ads para clientes B2B y eCommerce.", "Análisis de métricas y dashboards en Looker Studio para toma de decisiones.", "Optimización continua de CTR, CPC y conversiones en múltiples cuentas."] },
    { role: "SEO Manager & Trafficker Digital", company: "Grupo Prosein", date: "Oct 2024 – Ago 2025 · Caracas", details: ["Liderazgo de estrategias SEO y SEM para mejorar visibilidad y generación de leads.", "Auditorías técnicas, investigación de palabras clave y análisis de competencia.", "Gestión de Google Ads e implementación de seguimiento con GA4 y GTM.", "Crecimiento orgánico de marcas aliadas (Mil Cerámicas) en web e Instagram."] },
    { role: "Especialista en Contenidos", company: "Catena Media", date: "Oct 2023 – 2025 · Malta (Remoto)", details: ["Redacción de guías SEO de apuestas y eSports para esportsbets.com."] },
    { role: "SEO Manager", company: "Area10 Marketing", date: "Abr 2024 – Nov 2024 · Madrid (Remoto)", details: ["Ejecución de estrategias SEO para múltiples cuentas de clientes."] },
    { role: "Copywriter", company: "Cosmicweb Marketing", date: "Feb 2020 – Jul 2023 · Argentina", details: ["Redacción web, maquetación en Elementor, descripciones de producto y blogging."] },
  ],
  en: [
    { role: "Traffic Lead (Contract)", company: "TARBAY", date: "Oct 2025 – Apr 2026 · Remote", details: ["Led the digital traffic area for acquisition campaigns.", "Managed and optimized Google Ads and Meta Ads campaigns.", "Performance reporting and dashboards for decision-making."] },
    { role: "Digital Trafficker", company: "Boosty Digital", date: "Oct 2025 · Caracas (Hybrid)", details: ["Google Ads and Meta Ads campaign management for B2B and eCommerce clients.", "Metrics analysis and Looker Studio dashboards for decision-making.", "Ongoing optimization of CTR, CPC and conversions across multiple accounts."] },
    { role: "SEO Manager & Digital Trafficker", company: "Grupo Prosein", date: "Oct 2024 – Aug 2025 · Caracas", details: ["Led SEO and SEM strategies to improve visibility and lead generation.", "Technical audits, keyword research and competitor analysis.", "Google Ads management and conversion tracking with GA4 and GTM.", "Organic growth of allied brands (Mil Cerámicas) on web and Instagram."] },
    { role: "Content Specialist", company: "Catena Media", date: "Oct 2023 – 2025 · Malta (Remote)", details: ["SEO betting and eSports guides for esportsbets.com."] },
    { role: "SEO Manager", company: "Area10 Marketing", date: "Apr 2024 – Nov 2024 · Madrid (Remote)", details: ["SEO execution for multiple client accounts."] },
    { role: "Copywriter", company: "Cosmicweb Marketing", date: "Feb 2020 – Jul 2023 · Argentina", details: ["Web copy, Elementor layouts, product descriptions and blogging."] },
  ],
} as const;

const skillCategories = [
  { icon: Search, title: { es: "Técnicas & SEO", en: "Technical & SEO" }, tags: ["WordPress", "SEO/SEM", "Looker Studio", "GA4/GTM", "SEMrush", "Search Console"] },
  { icon: Bot, title: { es: "Automatización & IA", en: "Automation & AI" }, tags: ["n8n", "Make", "ChatGPT", "Claude", "Gemini", "Prompting"] },
  { icon: PenTool, title: { es: "Contenido & Marketing", en: "Content & Marketing" }, tags: ["Copywriting", "UX Writing", "Email Marketing", "Social Media", "B2B Sales"] },
  { icon: Palette, title: { es: "Diseño & UX", en: "Design & UX" }, tags: ["Figma", "Adobe XD", "UX Design", "Research"] },
] as const;

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
} as const;

const certifications = {
  es: [
    { title: "MBA — Máster en Administración de Empresas", issuer: "Escuela de Negocios", date: "2024", desc: "Formación ejecutiva en estrategia, finanzas, marketing y liderazgo de equipos.", url: "#" },
    { title: "Google Ads — Skillshop", issuer: "Google", date: "2025", desc: "Certificación oficial en campañas de búsqueda, display y medición de conversiones.", url: "https://skillshop.exceedlms.com/student/catalog/list?category_ids=4373" },
  ],
  en: [
    { title: "MBA — Master of Business Administration", issuer: "Business School", date: "2024", desc: "Executive training in strategy, finance, marketing and team leadership.", url: "#" },
    { title: "Google Ads — Skillshop", issuer: "Google", date: "2025", desc: "Official certification in Search, Display campaigns and conversion measurement.", url: "https://skillshop.exceedlms.com/student/catalog/list?category_ids=4373" },
  ],
} as const;

function Index() {
  const [lang, setLang] = useState<Lang>("es");
  const [openTimeline, setOpenTimeline] = useState<number | null>(0);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const tr = t[lang];
  const exp = experience[lang];
  const portfolio = portfolioData[lang];
  const personal = personalSkills[lang];

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Ambient background */}
      <div className="fixed inset-0 bg-gradient-hero -z-10" />
      <div className="fixed inset-0 grid-bg opacity-40 -z-10" />

      {/* NAV */}
      <header className={`fixed top-0 inset-x-0 z-50 transition-smooth ${scrolled ? "glass-strong shadow-elevated" : ""}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between gap-4">
          <a href="#top" className="font-display font-extrabold text-xl tracking-tight text-gradient">JCG</a>

          <nav className="hidden md:flex items-center gap-7">
            {Object.entries(tr.nav).map(([key, label]) => (
              <a key={key} href={`#${key}`} className="nav-underline text-sm font-medium text-foreground/80 hover:text-primary transition-smooth">
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="glass rounded-lg p-1 flex items-center gap-1">
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
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Menu"
              className="md:hidden glass rounded-lg p-2 text-primary hover:shadow-glow transition-smooth"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden glass-strong border-t border-border/40">
            <nav className="max-w-7xl mx-auto px-4 py-3 grid gap-1">
              {Object.entries(tr.nav).map(([key, label]) => (
                <a
                  key={key}
                  href={`#${key}`}
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg text-sm font-medium text-foreground/80 hover:bg-primary/10 hover:text-primary transition-smooth"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-36 pb-24 md:pt-44 md:pb-32 px-4 md:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-primary">
              {lang === "es" ? "Disponible para proyectos" : "Available for projects"}
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95] mb-6 animate-fade-in-up">
            <span className="text-gradient-light">Julio César</span>
            <br />
            <span className="text-gradient">Gómez</span>
          </h1>

          <p className="font-mono text-sm md:text-base text-primary uppercase tracking-[0.25em] mb-4 animate-fade-in-up">
            {tr.hero.role}
          </p>

          <p className="font-display text-xl md:text-2xl text-foreground/90 mb-6 animate-fade-in-up">
            {tr.hero.tagline}
          </p>

          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-in-up">
            {tr.hero.intro}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {tr.hero.badges.map((b) => (
              <span key={b} className="glass rounded-full px-4 py-1.5 text-xs font-semibold text-primary border border-primary/20">
                {b}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://wa.me/584140000000"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl shadow-glow hover:shadow-glow-strong transition-smooth"
            >
              <Phone size={18} /> {tr.hero.cta}
            </a>
            <a
              href="https://www.linkedin.com/in/juliocesargomezsanz/"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 glass rounded-xl px-6 py-3 text-sm font-semibold text-foreground hover:text-primary hover:shadow-glow transition-smooth"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>

          <div className="mt-16 flex justify-center animate-float">
            <ChevronDown className="text-primary/60" size={28} />
          </div>
        </div>
      </section>

      {/* PERFIL */}
      <section id="perfil" className="px-4 md:px-8 py-20">
        <div className="max-w-5xl mx-auto">
          <SectionTitle>{tr.perfil.title}</SectionTitle>
          <div className="glass rounded-3xl p-8 md:p-12 mt-10 shadow-elevated">
            <p className="text-lg text-foreground/85 leading-relaxed mb-10">{tr.perfil.body}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {tr.perfil.stats.map((s) => (
                <div key={s.label} className="text-center glass rounded-2xl p-5 hover:shadow-glow transition-smooth">
                  <div className="font-display text-3xl md:text-4xl font-extrabold text-gradient mb-1">{s.value}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCIA */}
      <section id="exp" className="px-4 md:px-8 py-20">
        <div className="max-w-5xl mx-auto">
          <SectionTitle>{tr.exp.title}</SectionTitle>
          <p className="font-mono text-xs text-muted-foreground mb-8">// {tr.exp.click}</p>

          <div className="space-y-4">
            {exp.map((item, i) => {
              const open = openTimeline === i;
              return (
                <div key={item.company + i}>
                  <button
                    onClick={() => setOpenTimeline(open ? null : i)}
                    className={`w-full text-left glass rounded-2xl p-6 md:p-7 transition-smooth border-l-4 ${
                      open ? "border-l-accent shadow-elevated bg-card/60" : "border-l-primary hover:translate-x-2 hover:shadow-elevated"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div>
                        <h3 className="font-display text-lg md:text-xl font-bold text-foreground">{item.role}</h3>
                        <p className="text-sm text-primary font-semibold mt-1 inline-flex items-center gap-2">
                          <Briefcase size={14} /> {item.company}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                        <span>{item.date}</span>
                        <ChevronDown size={16} className={`transition-smooth ${open ? "rotate-180 text-accent" : ""}`} />
                      </div>
                    </div>

                    {open && (
                      <ul className="mt-5 space-y-2 animate-fade-in">
                        {item.details.map((d, j) => (
                          <li key={j} className="text-sm text-foreground/80 leading-relaxed">
                            <span className="text-primary mr-2">▹</span>{d}
                          </li>
                        ))}
                      </ul>
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PORTAFOLIO */}
      <section id="portafolio" className="px-4 md:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>{tr.portfolio.title}</SectionTitle>
          <p className="text-muted-foreground mb-10">{tr.portfolio.subtitle}</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {portfolio.map((item, i) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.client + i}
                  className="group relative glass rounded-2xl p-6 hover:shadow-card-hover hover:-translate-y-1 transition-smooth overflow-hidden"
                >
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-primary opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-smooth" />

                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-gradient-primary p-2.5 rounded-xl shadow-glow">
                      <Icon size={20} className="text-primary-foreground" />
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-foreground mb-2">{item.client}</h3>
                  <p className="text-sm text-foreground/75 mb-5 leading-relaxed">{item.desc}</p>

                  <div className="space-y-1.5 mb-5">
                    <p className="text-[10px] font-mono uppercase tracking-widest text-primary">
                      ↳ {tr.portfolio.viewImpact}
                    </p>
                    <ul className="space-y-1">
                      {item.metrics.map((m, j) => (
                        <li key={j} className="text-xs text-foreground/85">
                          <span className="text-accent mr-1.5">▸</span>{m}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border/40">
                    {item.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-mono text-primary/80">#{tag}</span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="px-4 md:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <SectionTitle>{tr.skills.title}</SectionTitle>
          <div className="grid sm:grid-cols-2 gap-5 mt-10">
            {skillCategories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <div key={i} className="glass rounded-2xl p-6 hover:shadow-glow transition-smooth">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="bg-gradient-primary p-2.5 rounded-xl shadow-glow">
                      <Icon size={20} className="text-primary-foreground" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground">{cat.title[lang]}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.tags.map((tag) => (
                      <span key={tag} className="glass rounded-full px-3 py-1 text-xs font-medium text-foreground/85 border border-primary/15 hover:border-primary/40 hover:text-primary transition-smooth">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <h3 className="font-display text-2xl font-bold mt-14 mb-6 text-center">{tr.skills.personal}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {personal.map((p, i) => {
              const Icon = p.icon;
              return (
                <div key={i} className="glass rounded-xl px-4 py-3 flex items-center gap-3 hover:shadow-glow transition-smooth">
                  <Icon size={18} className="text-primary" />
                  <span className="text-sm font-medium text-foreground/85">{p.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* EDU */}
      <section id="edu" className="px-4 md:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <SectionTitle>{tr.edu.title}</SectionTitle>
          <div className="glass rounded-2xl p-6 md:p-8 mt-10 flex items-start gap-5 hover:shadow-elevated transition-smooth">
            <div className="bg-gradient-primary p-3 rounded-xl shadow-glow shrink-0">
              <GraduationCap size={24} className="text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-display text-lg md:text-xl font-bold text-foreground">
                {lang === "es" ? "Licenciatura en Publicidad y Mercadeo" : "Bachelor's in Advertising & Marketing"}
              </h3>
              <p className="text-sm text-primary font-semibold mt-1">
                {lang === "es" ? "Mención en Comunicación" : "Communication major"}
              </p>
              <p className="text-sm text-muted-foreground mt-2">Universidad Católica Santa Rosa</p>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICACIONES */}
      <section id="certs" className="px-4 md:px-8 py-20">
        <div className="max-w-5xl mx-auto">
          <SectionTitle>{tr.certs.title}</SectionTitle>
          <div className="grid md:grid-cols-2 gap-5 mt-10">
            {certifications[lang].map((c, i) => (
              <a
                key={i}
                href={c.url}
                target={c.url.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group glass rounded-2xl p-6 hover:shadow-card-hover hover:-translate-y-1 transition-smooth block"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-gradient-primary p-2.5 rounded-xl shadow-glow shrink-0">
                    <Award size={20} className="text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-base md:text-lg font-bold text-foreground leading-tight">{c.title}</h3>
                    <p className="text-xs text-primary font-semibold mt-1">{c.issuer}</p>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">{c.date}</span>
                </div>
                <p className="text-sm text-foreground/75 mb-3 leading-relaxed">{c.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary group-hover:text-accent transition-smooth">
                  {tr.certs.view} <ExternalLink size={12} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-4 md:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <SectionTitle>{tr.contact.title}</SectionTitle>
          <p className="text-muted-foreground mb-10">{tr.contact.subtitle}</p>
          <div className="grid sm:grid-cols-2 gap-3">
            <ContactLink icon={Mail} label="gomezjulio13@gmail.com" href="mailto:gomezjulio13@gmail.com" />
            <ContactLink icon={Phone} label="+58 414 000 0000" href="https://wa.me/584140000000" />
            <ContactLink icon={Linkedin} label="LinkedIn" href="https://www.linkedin.com/in/juliocesargomezsanz/" />
            <ContactLink icon={MapPin} label="Caracas, Venezuela" href="#" />
          </div>
        </div>
      </section>

      <footer className="px-4 md:px-8 py-10 border-t border-border/30">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-2">
            <Globe size={14} className="text-primary" />
            © 2026 Julio César Gómez — {lang === "es" ? "Diseñado para destacar" : "Crafted to stand out"}
          </span>
          <span className="font-mono">v2.0 · ultra</span>
        </div>
      </footer>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-2">
      <h2 className="font-display text-3xl md:text-5xl font-extrabold text-gradient-light">{children}</h2>
      <div className="flex-1 h-px bg-gradient-to-r from-primary/40 to-transparent" />
    </div>
  );
}

function ContactLink({ icon: Icon, label, href }: { icon: typeof Mail; label: string; href: string }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="glass rounded-xl px-5 py-4 flex items-center gap-3 hover:shadow-glow hover:-translate-y-0.5 transition-smooth text-left"
    >
      <div className="bg-gradient-primary p-2 rounded-lg shadow-glow">
        <Icon size={16} className="text-primary-foreground" />
      </div>
      <span className="text-sm font-medium text-foreground/90 truncate">{label}</span>
    </a>
  );
}
