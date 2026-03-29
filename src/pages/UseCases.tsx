import { Link } from "react-router";
import { UserPlus, Users, TrendingUp, Target, ArrowRight, CheckCircle2, BarChart3, GitBranch } from "lucide-react";
import { Button } from "../components/ui/button";

function RecrutementMockup() {
  const candidates = [
    { name: "A. Martin", score: 92, status: "Élevé", color: "bg-emerald-50 text-emerald-600" },
    { name: "B. Leroy", score: 74, status: "Moyen", color: "bg-blue-50 text-blue-600" },
    { name: "C. Dubois", score: 58, status: "Faible", color: "bg-slate-100 text-slate-500" },
  ];
  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xl overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3 border-b border-slate-100 bg-slate-50/80">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
        </div>
        <span className="text-[11px] text-slate-400 font-medium tracking-wide">Matching candidats</span>
        <div className="w-12" />
      </div>
      <div className="p-5">
        <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider grid grid-cols-3 px-3 pb-2">
          <span>Candidat</span><span>Score</span><span>Alignement</span>
        </div>
        <div className="space-y-2">
          {candidates.map((c, i) => (
            <div key={i} className="grid grid-cols-3 items-center px-3 py-2.5 rounded-lg hover:bg-slate-50">
              <span className="text-[11px] font-medium text-slate-700">{c.name}</span>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary to-blue-600 rounded-full" style={{ width: `${c.score}%` }} />
                </div>
                <span className="text-[10px] font-bold text-slate-600 w-6">{c.score}</span>
              </div>
              <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full w-fit ${c.color}`}>{c.status}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
          <span className="text-[10px] text-slate-400">3 candidats analysés</span>
          <button className="text-[10px] font-semibold text-primary">Voir rapport →</button>
        </div>
      </div>
    </div>
  );
}

function OnboardingMockup() {
  const steps = [
    { label: "Présentation équipe", done: true },
    { label: "Alignement valeurs", done: true },
    { label: "Points de vigilance", done: false },
    { label: "Plan d'action 30j", done: false },
  ];
  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xl overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3 border-b border-slate-100 bg-slate-50/80">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
        </div>
        <span className="text-[11px] text-slate-400 font-medium tracking-wide">Plan d'onboarding personnalisé</span>
        <div className="w-12" />
      </div>
      <div className="p-5">
        <div className="flex items-center gap-3 mb-4 p-3 bg-emerald-50 rounded-xl">
          <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
            <CheckCircle2 className="w-4 h-4 text-white" />
          </div>
          <div>
            <div className="text-[11px] font-bold text-emerald-700">Score d'alignement : 78%</div>
            <div className="text-[10px] text-emerald-600">Candidat — Équipe Produit</div>
          </div>
        </div>
        <div className="space-y-2.5">
          {steps.map((s, i) => (
            <div key={i} className="flex items-center gap-3 px-1">
              <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${s.done ? "bg-primary" : "bg-slate-100 border-2 border-slate-200"}`}>
                {s.done && <div className="w-2 h-2 bg-white rounded-full" />}
              </div>
              <span className={`text-[11px] font-medium ${s.done ? "text-slate-400 line-through" : "text-slate-700"}`}>{s.label}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-3 border-t border-slate-100">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] text-slate-400">Progression</span>
            <span className="text-[10px] font-bold text-primary">50%</span>
          </div>
          <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full w-1/2 bg-gradient-to-r from-primary to-blue-600 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

function MobiliteMockup() {
  const dims = ["Autonomie", "Innovation", "Structure", "Collaboration"];
  const teamVals = [0.75, 0.60, 0.82, 0.70];
  const candVals = [0.68, 0.78, 0.55, 0.85];
  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xl overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3 border-b border-slate-100 bg-slate-50/80">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
        </div>
        <span className="text-[11px] text-slate-400 font-medium tracking-wide">Simulation mobilité interne</span>
        <div className="w-12" />
      </div>
      <div className="p-5">
        <div className="flex gap-2 mb-4">
          {["Équipe actuelle", "Poste cible"].map((l, i) => (
            <span key={i} className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${i === 0 ? "bg-violet-50 text-violet-600" : "bg-blue-50 text-blue-600"}`}>{l}</span>
          ))}
        </div>
        <div className="space-y-3">
          {dims.map((dim, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="text-[10px] text-slate-500 w-24 flex-shrink-0">{dim}</span>
              <div className="flex-1 flex gap-1">
                <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-violet-400 rounded-full" style={{ width: `${teamVals[i] * 100}%` }} />
                </div>
                <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-400 rounded-full" style={{ width: `${candVals[i] * 100}%` }} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-3 border-t border-slate-100 flex justify-center gap-6">
          <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-violet-400" /><span className="text-[10px] text-slate-500 font-medium">Équipe actuelle</span></div>
          <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-blue-400" /><span className="text-[10px] text-slate-500 font-medium">Poste cible</span></div>
        </div>
      </div>
    </div>
  );
}

function DiagnosticMockup() {
  const units = [
    { name: "Direction", score: 82, color: "bg-blue-500" },
    { name: "Ingénierie", score: 71, color: "bg-violet-500" },
    { name: "Produit", score: 90, color: "bg-emerald-500" },
    { name: "Commercial", score: 64, color: "bg-orange-500" },
  ];
  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xl overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3 border-b border-slate-100 bg-slate-50/80">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
        </div>
        <span className="text-[11px] text-slate-400 font-medium tracking-wide">Diagnostic culturel</span>
        <div className="w-12" />
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 mb-4 px-1">
          <BarChart3 className="w-4 h-4 text-primary" />
          <span className="text-[11px] font-bold text-slate-700">Score d'alignement par unité</span>
        </div>
        <div className="space-y-3">
          {units.map((u, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="text-[11px] font-medium text-slate-600 w-24 flex-shrink-0">{u.name}</span>
              <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className={`h-full ${u.color} rounded-full`} style={{ width: `${u.score}%` }} />
              </div>
              <span className="text-[10px] font-bold text-slate-600 w-6 text-right">{u.score}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 px-1">
          <GitBranch className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-[10px] text-slate-400">2 sous-cultures identifiées · Rapport disponible</span>
        </div>
      </div>
    </div>
  );
}

export function UseCases() {
  const useCases = [
    {
      icon: UserPlus,
      title: "Recrutement",
      subtitle: "Décidez sur des données, pas des impressions",
      description: "Identifiez les candidats dont le profil culturel s'aligne avec votre organisation et votre équipe cible. Structurez une décision difficile à objectiver.",
      benefits: [
        "Décisions de recrutement structurées sur des données",
        "Identification des risques d'alignement en amont",
        "Analyse objective, sans biais d'impression",
        "Comparaison des profils sur neuf dimensions",
      ],
      color: "from-blue-500 to-blue-600",
      mockup: <RecrutementMockup />,
    },
    {
      icon: Target,
      title: "Onboarding",
      subtitle: "Intégrez avec méthode",
      description: "Générez des plans d'intégration personnalisés à partir des écarts culturels identifiés. Anticipez les points de friction avant qu'ils n'apparaissent.",
      benefits: [
        "Plans d'intégration fondés sur les écarts réels",
        "Anticiper les points de vigilance dès le départ",
        "Accompagnement ciblé pour chaque nouveau collaborateur",
        "Suivi structuré de la progression",
      ],
      color: "from-green-500 to-green-600",
      mockup: <OnboardingMockup />,
    },
    {
      icon: Users,
      title: "Mobilité interne",
      subtitle: "Évaluez avant de décider",
      description: "Mesurez la compatibilité culturelle d'un collaborateur avec son équipe cible avant toute promotion ou changement de poste.",
      benefits: [
        "Évaluation de la compatibilité avant toute transition",
        "Fidélisation des talents par des mobilités réussies",
        "Décisions de mobilité fondées sur des données",
        "Développement des parcours aligné au contexte",
      ],
      color: "from-purple-500 to-purple-600",
      mockup: <MobiliteMockup />,
    },
    {
      icon: TrendingUp,
      title: "Diagnostic culturel",
      subtitle: "Comprenez votre culture réelle",
      description: "Cartographiez la culture de votre organisation et de vos équipes. Identifiez les sous-cultures et les zones de tension pour piloter vos transformations.",
      benefits: [
        "Vision claire de la culture réelle de l'organisation",
        "Identification des sous-cultures et écarts internes",
        "Données pour piloter les transformations",
        "Alignement stratégique fondé sur des faits",
      ],
      color: "from-orange-500 to-orange-600",
      mockup: <DiagnosticMockup />,
    },
  ];

  return (
    <div className="flex flex-col">

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-white via-blue-50/30 to-white py-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-full blur-3xl" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-gradient-to-r from-primary/10 to-blue-500/10 border border-primary/20 text-primary rounded-full text-[14px] font-medium shadow-sm">
              Cas d'usage
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight">
              Quatre décisions RH.<br />Une seule plateforme.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Du recrutement au diagnostic culturel, DCID-RH structure chaque décision autour de données d'alignement objectives.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className="grid md:grid-cols-2 gap-12 items-center"
                >
                  <div className={`space-y-6 ${!isEven ? "md:order-2" : ""}`}>
                    <div className={`w-14 h-14 bg-gradient-to-br ${useCase.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-primary font-semibold mb-2">{useCase.subtitle}</p>
                      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        {useCase.title}
                      </h2>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {useCase.description}
                      </p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 border border-border/60 shadow-sm">
                      <h3 className="font-semibold text-foreground mb-4">Ce que ça apporte :</h3>
                      <ul className="space-y-3">
                        {useCase.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <div className="w-2 h-2 bg-primary rounded-full" />
                            </div>
                            <span className="text-muted-foreground text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className={`relative ${!isEven ? "md:order-1" : ""}`}>
                    {useCase.mockup}
                    <div className={`absolute -bottom-6 ${isEven ? "-right-6" : "-left-6"} w-32 h-32 bg-gradient-to-br ${useCase.color} opacity-20 rounded-full blur-3xl`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-blue-600 to-blue-700" />
            <div className="absolute inset-0 opacity-40" style={{ backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=")` }} />
            <div className="relative p-12 md:p-20 text-center text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Vous reconnaissez un de ces enjeux ?
              </h2>
              <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
                Échangeons sur votre contexte et voyons comment DCID-RH peut vous aider.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" variant="secondary" className="rounded-full text-lg w-full sm:w-auto shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
                    Demander une démo
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/product">
                  <Button size="lg" variant="outline" className="rounded-full text-lg bg-white/10 border-white/20 hover:bg-white/20 text-white w-full sm:w-auto">
                    Voir le produit
                  </Button>
                </Link>
              </div>
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
