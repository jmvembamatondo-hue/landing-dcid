import { Link } from "react-router";
import {
  BarChart3,
  Target,
  GitCompare,
  Users,
  CheckCircle2,
  FileText,
  ArrowRight,
  Layers,
  ScanLine,
  ShieldCheck,
  HeadphonesIcon,
} from "lucide-react";
import { Button } from "../components/ui/button";

function RadarDisplay({ size = 240 }: { size?: number }) {
  const dims = ["Autonomie", "Innovation", "Communication", "Structure", "Ownership", "Vision", "Décision", "Rythme", "Collaboration"];
  const n = dims.length;
  const cx = size / 2, cy = size / 2, r = size * 0.35;
  const pt = (i: number, rad: number) => {
    const a = (i / n) * Math.PI * 2 - Math.PI / 2;
    return { x: cx + Math.cos(a) * rad, y: cy + Math.sin(a) * rad };
  };
  const shapeA = [0.72, 0.58, 0.80, 0.68, 0.62, 0.75, 0.70, 0.55, 0.82];
  const shapeB = [0.50, 0.78, 0.55, 0.48, 0.82, 0.60, 0.52, 0.78, 0.58];
  const poly = (s: number[]) => s.map((f, i) => { const p = pt(i, r * f); return `${p.x},${p.y}`; }).join(" ");
  const grid = (f: number) => dims.map((_, i) => { const p = pt(i, r * f); return `${p.x},${p.y}`; }).join(" ");
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {[0.25, 0.5, 0.75, 1].map((f, i) => (
        <polygon key={i} points={grid(f)} fill="none" stroke="rgba(148,163,184,0.18)" strokeWidth="1" />
      ))}
      {dims.map((_, i) => { const e = pt(i, r); return <line key={i} x1={cx} y1={cy} x2={e.x} y2={e.y} stroke="rgba(148,163,184,0.22)" strokeWidth="1" />; })}
      <polygon points={poly(shapeA)} fill="rgba(59,130,246,0.12)" stroke="rgba(59,130,246,0.55)" strokeWidth="1.5" />
      <polygon points={poly(shapeB)} fill="rgba(16,185,129,0.08)" stroke="rgba(16,185,129,0.45)" strokeWidth="1.5" strokeDasharray="4 3" />
      {dims.map((d, i) => { const p = pt(i, r + 19); return <text key={i} x={p.x} y={p.y} textAnchor="middle" dominantBaseline="middle" fontSize="8" fill="rgb(100,116,139)" fontFamily="ui-sans-serif,system-ui,sans-serif">{d}</text>; })}
    </svg>
  );
}

function DashboardLayoutMockup() {
  const rows = [
    { label: "Dev Backend", team: "Ingénierie", status: "En analyse" },
    { label: "Product Manager", team: "Produit", status: "Rapport prêt" },
    { label: "Responsable RH", team: "RH", status: "En attente" },
  ];
  const statusColor: Record<string, string> = {
    "En analyse": "bg-blue-50 text-blue-600",
    "Rapport prêt": "bg-emerald-50 text-emerald-600",
    "En attente": "bg-slate-100 text-slate-500",
  };
  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xl overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3 border-b border-slate-100 bg-slate-50/80">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
        </div>
        <span className="text-[11px] text-slate-400 font-medium tracking-wide">Tableau de bord</span>
        <div className="w-12" />
      </div>
      <div className="flex gap-0 border-b border-slate-100">
        {["Recrutements", "Équipes", "Rapports"].map((t, i) => (
          <button key={i} className={`px-4 py-2.5 text-[11px] font-medium border-b-2 ${i === 0 ? "border-primary text-primary" : "border-transparent text-slate-400"}`}>
            {t}
          </button>
        ))}
      </div>
      <div className="p-4">
        <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider grid grid-cols-3 px-3 pb-2">
          <span>Poste</span>
          <span>Équipe cible</span>
          <span>Statut</span>
        </div>
        <div className="space-y-1.5">
          {rows.map((row, i) => (
            <div key={i} className="grid grid-cols-3 items-center px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors">
              <span className="text-[11px] font-medium text-slate-700">{row.label}</span>
              <span className="text-[11px] text-slate-500">{row.team}</span>
              <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full w-fit ${statusColor[row.status]}`}>{row.status}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="px-5 py-3 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between">
        <span className="text-[10px] text-slate-400">Mis à jour à l'instant</span>
        <button className="text-[10px] font-semibold text-primary">Voir tout →</button>
      </div>
    </div>
  );
}

function CompatibilityAnalysisMockup() {
  const dimensions = ["Autonomie", "Innovation", "Structure", "Collaboration", "Vision"];
  const orgValues =  [0.78, 0.60, 0.85, 0.70, 0.72];
  const candValues = [0.55, 0.82, 0.50, 0.78, 0.65];
  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xl overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3 border-b border-slate-100 bg-slate-50/80">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
        </div>
        <span className="text-[11px] text-slate-400 font-medium tracking-wide">Analyse de compatibilité</span>
        <div className="w-12" />
      </div>
      <div className="p-5">
        <div className="flex gap-2 mb-5">
          {["Organisation", "Candidat"].map((l, i) => (
            <span key={i} className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${i === 0 ? "bg-blue-50 text-blue-600" : "bg-emerald-50 text-emerald-600"}`}>{l}</span>
          ))}
        </div>
        <div className="flex justify-center mb-4">
          <RadarDisplay size={220} />
        </div>
        <div className="space-y-2.5 mt-2">
          {dimensions.map((dim, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="text-[10px] text-slate-500 w-24 flex-shrink-0">{dim}</span>
              <div className="flex-1 flex gap-1">
                <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-400 rounded-full" style={{ width: `${orgValues[i] * 100}%` }} />
                </div>
                <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-400 rounded-full" style={{ width: `${candValues[i] * 100}%` }} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-6 pt-4 mt-2 border-t border-slate-100">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-blue-400" />
            <span className="text-[10px] text-slate-500 font-medium">Organisation</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-[10px] text-slate-500 font-medium">Candidat</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Product() {
  const features = [
    {
      icon: BarChart3,
      title: "Évaluation culturelle",
      description: "Questionnaires calibrés pour cartographier la culture à chaque niveau : organisation, équipe, candidat.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Target,
      title: "Scoring d'alignement",
      description: "Scores de compatibilité automatiques sur neuf dimensions culturelles structurées.",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      icon: ScanLine,
      title: "Visualisation radar",
      description: "Radars multidimensionnels pour visualiser les zones d'alignement et de divergence entre profils.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: GitCompare,
      title: "Analyse de compatibilité",
      description: "Comparaison structurée des profils sur chaque dimension. Organisation × Équipe × Candidat.",
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: Users,
      title: "Simulation d'équipe",
      description: "Anticipez l'impact culturel d'une nouvelle recrue sur la dynamique existante de l'équipe cible.",
      color: "from-rose-500 to-rose-600",
    },
    {
      icon: CheckCircle2,
      title: "Aide à la décision",
      description: "Recommandations structurées et actionnables pour le recrutement, l'onboarding et la mobilité interne.",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: FileText,
      title: "Plan d'onboarding ciblé",
      description: "Plans d'intégration personnalisés générés à partir des écarts culturels identifiés.",
      color: "from-amber-500 to-amber-600",
    },
    {
      icon: Layers,
      title: "Diagnostic organisationnel",
      description: "Cartographie de la culture globale pour identifier les sous-cultures et zones de tension.",
      color: "from-teal-500 to-teal-600",
    },
  ];

  return (
    <div className="flex flex-col">

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-white via-blue-50/30 to-white py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/10 to-blue-500/10 rounded-full blur-3xl" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-gradient-to-r from-primary/10 to-blue-500/10 border border-primary/20 text-primary rounded-full text-[14px] font-medium shadow-sm">
              Plateforme SaaS
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight">
              Une infrastructure de décision,<br />pas un outil d'évaluation
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              DCID-RH fournit aux équipes RH les données culturelles dont elles ont besoin pour décider avec clarté — recrutement, intégration, mobilité.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              Des modules orientés décision
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Chaque module répond à une question de décision RH précise.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-8 border border-border/60 shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-5 shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dashboard section */}
      <section className="py-24 bg-gradient-to-br from-blue-50/40 via-white to-blue-50/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div className="space-y-7">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight leading-tight">
                Un tableau de bord centré sur la décision
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Centralisez vos processus RH actifs. Suivez chaque analyse et accédez aux rapports directement depuis votre espace de travail.
              </p>
              <ul className="space-y-5">
                {[
                  { title: "Vue d'ensemble en temps réel", desc: "Tous vos recrutements et analyses en cours, dans un seul endroit." },
                  { title: "Statuts de progression", desc: "Suivez l'avancement de chaque évaluation, de la collecte au rapport final." },
                  { title: "Rapports accessibles immédiatement", desc: "Accédez aux recommandations sans naviguer entre plusieurs outils." },
                ].map(({ title, desc }, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-7 h-7 bg-gradient-to-br from-primary to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0 mt-1 shadow-lg shadow-primary/25">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1.5 text-lg">{title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <DashboardLayoutMockup />
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-tl from-primary/20 to-blue-500/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Compatibility analysis section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div className="order-2 md:order-1 relative">
              <CompatibilityAnalysisMockup />
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br from-blue-500/15 to-primary/15 rounded-full blur-3xl" />
            </div>
            <div className="order-1 md:order-2 space-y-7">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight leading-tight">
                L'analyse qui structure la décision
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Comparez les profils culturels en profondeur sur chaque dimension. Identifiez les zones d'alignement fort et les points de vigilance avant de décider.
              </p>
              <ul className="space-y-5">
                {[
                  { title: "Radars multidimensionnels", desc: "Visualisez la compatibilité sur les neuf dimensions culturelles simultanément." },
                  { title: "Lecture dimension par dimension", desc: "Détaillez chaque axe pour comprendre les sources de convergence ou de friction." },
                  { title: "Recommandations contextuelles", desc: "La plateforme traduit l'analyse en recommandations opérationnelles claires." },
                ].map(({ title, desc }, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-7 h-7 bg-gradient-to-br from-primary to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0 mt-1 shadow-lg shadow-primary/25">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1.5 text-lg">{title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Support — API removed */}
      <section className="py-24 bg-gradient-to-b from-slate-50/50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              Sécurité et accompagnement
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Conçu pour s'intégrer dans votre environnement RH, sans friction.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              {
                color: "from-green-500 to-green-600",
                shadow: "shadow-green-500/25",
                icon: ShieldCheck,
                title: "Conformité RGPD",
                desc: "Données chiffrées, hébergement européen, architecture conforme aux exigences légales en vigueur.",
              },
              {
                color: "from-blue-500 to-blue-600",
                shadow: "shadow-blue-500/25",
                icon: HeadphonesIcon,
                title: "Accompagnement dédié",
                desc: "Une équipe technique et métier vous accompagne du déploiement à la prise en main complète.",
              },
            ].map(({ color, shadow, icon: Icon, title, desc }, i) => (
              <div key={i} className="bg-white rounded-2xl p-10 border border-border/60 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className={`w-16 h-16 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center mb-6 shadow-lg ${shadow}`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{title}</h3>
                <p className="text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-blue-600 to-blue-700" />
            <div className="absolute inset-0 opacity-40" style={{ backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=")` }} />
            <div className="relative p-12 md:p-20 text-center text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Découvrez DCID-RH en action
              </h2>
              <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                Demandez une démonstration et voyez concrètement comment la plateforme structure vos décisions RH.
              </p>
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="rounded-full text-lg px-10 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
                  Réserver une démonstration
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-blue-200/80 text-sm">
                <span>07 66 25 37 18</span>
                <span className="opacity-40">·</span>
                <span>contact@dcid-rh.fr</span>
                <span className="opacity-40">·</span>
                <span>165 Av. de Bretagne, 59000 Lille</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
