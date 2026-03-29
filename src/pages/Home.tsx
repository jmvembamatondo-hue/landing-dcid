import { Link } from "react-router";
import { ArrowRight, TrendingDown, Target, Users, BarChart3, CheckCircle2 } from "lucide-react";
import { Button } from "../components/ui/button";

function RadarDisplay({ size = 220 }: { size?: number }) {
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

function DashboardMockup() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xl overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3 border-b border-slate-100 bg-slate-50/80">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
        </div>
        <span className="text-[11px] text-slate-400 font-medium tracking-wide">Rapport de compatibilité</span>
        <div className="w-12" />
      </div>
      <div className="p-5">
        <div className="flex gap-2 mb-4">
          {(["Organisation", "Équipe", "Candidat"] as const).map((l, i) => (
            <span key={i} className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${i === 0 ? "bg-blue-50 text-blue-600" : i === 1 ? "bg-violet-50 text-violet-600" : "bg-emerald-50 text-emerald-600"}`}>
              {l}
            </span>
          ))}
        </div>
        <div className="flex justify-center py-1">
          <RadarDisplay size={220} />
        </div>
        <div className="flex justify-center gap-6 pt-3 mt-1 border-t border-slate-100">
          <div className="flex items-center gap-1.5">
            <span className="w-4 h-0.5 bg-blue-500 inline-block rounded-full" />
            <span className="text-[10px] text-slate-500 font-medium">Organisation</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg width="16" height="2" className="inline-block"><line x1="0" y1="1" x2="16" y2="1" stroke="rgb(16,185,129)" strokeWidth="1.5" strokeDasharray="4 2" /></svg>
            <span className="text-[10px] text-slate-500 font-medium">Candidat</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Home() {
  return (
    <div className="flex flex-col">

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-white via-blue-50/30 to-white py-24 md:py-32 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-500/10 to-primary/10 rounded-full blur-3xl" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-gradient-to-r from-primary/10 to-blue-500/10 border border-primary/20 text-primary rounded-full text-[14px] font-medium shadow-sm">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Plateforme de décision RH
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
                La culture d'équipe,<br />
                <span className="bg-gradient-to-r from-primary to-blue-700 bg-clip-text text-transparent">une donnée de décision.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                Trois niveaux. Une lecture structurée.<br />
                Des décisions RH fondées sur des données — pas des impressions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link to="/contact">
                  <Button size="lg" className="w-full sm:w-auto rounded-full text-base px-8 shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105">
                    Demander une démo
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/product">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full text-base px-8 border-2 hover:bg-accent/60 hover:border-primary/30 transition-all duration-300">
                    Explorer le produit
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <DashboardMockup />
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-tl from-primary/20 to-blue-500/20 rounded-full blur-3xl" />
              <div className="absolute -top-8 -left-8 w-40 h-40 bg-gradient-to-br from-blue-500/15 to-primary/15 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              Trois angles morts dans vos décisions RH
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Chaque erreur d'intégration commence au même endroit :<br />
              une décision prise sans lire la culture.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            <div className="group bg-gradient-to-br from-red-50 to-white rounded-2xl p-8 border border-red-200/60 shadow-sm hover:shadow-xl hover:shadow-red-500/10 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-red-500/25">
                <TrendingDown className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Compatibilité non mesurée</h3>
              <p className="text-muted-foreground leading-relaxed">
                La compatibilité entre un candidat et son équipe cible n'est ni dans un CV, ni dans un entretien standard.
              </p>
            </div>
            <div className="group bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 border border-orange-200/60 shadow-sm hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-orange-500/25">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Décision à l'intuition</h3>
              <p className="text-muted-foreground leading-relaxed">
                Sans données structurées sur la culture, le recruteur décide sur des signaux subjectifs et partiels.
              </p>
            </div>
            <div className="group bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-8 border border-yellow-200/60 shadow-sm hover:shadow-xl hover:shadow-yellow-500/10 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-yellow-500/25">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Contexte ignoré</h3>
              <p className="text-muted-foreground leading-relaxed">
                Évaluer un individu sans tenir compte de la dynamique de l'équipe cible, c'est ignorer la moitié de l'équation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-24 bg-gradient-to-br from-blue-50/40 via-white to-blue-50/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div className="order-2 md:order-1 relative">
              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xl overflow-hidden">
                <div className="px-5 py-3 border-b border-slate-100 bg-slate-50/80 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-slate-600 tracking-wide">Analyse multi-niveaux</span>
                  <div className="flex gap-1.5">
                    {["Organisation", "Équipe"].map((l, i) => (
                      <span key={i} className={`text-[9px] font-semibold px-2 py-0.5 rounded-full ${i === 0 ? "bg-blue-50 text-blue-600" : "bg-violet-50 text-violet-600"}`}>{l}</span>
                    ))}
                  </div>
                </div>
                <div className="p-5 flex justify-center">
                  <RadarDisplay size={240} />
                </div>
                <div className="px-5 py-3 border-t border-slate-100 bg-slate-50/50 flex justify-center gap-8">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <span className="text-[10px] text-slate-600 font-medium">Culture organisation</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-[10px] text-slate-600 font-medium">Profil candidat</span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-full blur-3xl" />
            </div>
            <div className="order-1 md:order-2 space-y-7">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight leading-tight">
                Mesurer ce qui ne l'était pas
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                DCID-RH croise trois niveaux systémiques — organisation, équipe, candidat — pour produire une analyse d'alignement structurée et directement actionnable.
              </p>
              <ul className="space-y-5">
                {[
                  { title: "Analyse systémique", desc: "Organisation, équipe, candidat — chaque niveau analysé dans son contexte réel." },
                  { title: "Scoring d'alignement", desc: "Neuf dimensions culturelles. Des scores structurés, clairs, directement exploitables." },
                  { title: "Aide à la décision", desc: "Des recommandations opérationnelles pour le recrutement, l'onboarding et la mobilité." },
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

      {/* Three-level model */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              Un modèle à trois niveaux
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              La compatibilité ne se lit pas dans l'absolu. Elle se mesure en contexte.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: BarChart3, label: "Organisation", desc: "La culture globale : valeurs, style de management, environnement décisionnel." },
              { icon: Users, label: "Équipe", desc: "La dynamique propre au groupe : collaboration, rythme, modes de coordination." },
              { icon: Target, label: "Candidat", desc: "Le profil culturel individuel : préférences, styles de travail, alignement contextuel." },
            ].map(({ icon: Icon, label, desc }, i) => (
              <div key={i} className="group bg-white rounded-3xl p-10 border-2 border-primary/20 shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-blue-700 rounded-3xl flex items-center justify-center mb-8 mx-auto shadow-xl shadow-primary/30">
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-center text-foreground mb-4">{label}</h3>
                <p className="text-center text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-gradient-to-b from-slate-50/50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              De la collecte à la décision
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Trois étapes. Un processus structuré pour s'intégrer dans vos flux RH existants.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { n: "1", title: "Évaluer", desc: "Collectez les profils culturels — organisation, équipes, candidats — via des questionnaires calibrés." },
              { n: "2", title: "Analyser", desc: "La plateforme croise les profils sur neuf dimensions. L'analyse est automatique, objective, structurée." },
              { n: "3", title: "Décider", desc: "Scores d'alignement et recommandations directement exploitables pour recruter, intégrer, faire évoluer." },
            ].map(({ n, title, desc }) => (
              <div key={n} className="bg-white rounded-3xl p-10 shadow-lg border border-border/60 h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-700 text-white rounded-2xl flex items-center justify-center mb-6 text-2xl font-bold shadow-xl shadow-primary/30">
                  {n}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{title}</h3>
                <p className="text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-blue-600 to-blue-700" />
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=")` }} />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Prêt à décider sur des données culturelles réelles ?
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Découvrez comment DCID-RH structure vos décisions RH à partir d'une analyse culturelle objective.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="rounded-full text-lg px-10 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
              Demander une démonstration
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
      </section>

    </div>
  );
}
