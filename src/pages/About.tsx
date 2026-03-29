import { Link } from "react-router";
import { Target, Heart, Users, Lightbulb, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";

export function About() {
  const values = [
    {
      icon: Target,
      title: "Rigueur",
      description: "Chaque analyse repose sur une méthodologie structurée. Pas d'intuition, pas de biais : des données.",
      color: "from-blue-500 to-blue-600",
      shadow: "shadow-blue-500/25",
    },
    {
      icon: Heart,
      title: "Impact humain",
      description: "Derrière chaque décision RH, il y a une personne. Notre outil existe pour que cette décision soit juste.",
      color: "from-red-500 to-red-600",
      shadow: "shadow-red-500/25",
    },
    {
      icon: Lightbulb,
      title: "Clarté",
      description: "Rendre visible ce qui ne l'était pas. Mesurer ce qui semblait immatériel. Simplifier ce qui paraissait complexe.",
      color: "from-yellow-500 to-yellow-600",
      shadow: "shadow-yellow-500/25",
    },
    {
      icon: Users,
      title: "Alignement",
      description: "Notre conviction : organisation, équipe et individu doivent être lus ensemble — jamais isolément.",
      color: "from-green-500 to-green-600",
      shadow: "shadow-green-500/25",
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
              À propos
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight">
              Pourquoi DCID-RH existe
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Une plateforme née d'un constat réel — et construite pour y répondre.
            </p>
          </div>
        </div>
      </section>

      {/* Real story */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-white to-slate-50/50" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-primary/6 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-400/5 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-10 md:p-14 border border-white/80 shadow-xl shadow-slate-200/60">
              <div className="space-y-8 text-lg text-foreground leading-relaxed">

                <p className="text-muted-foreground">
                  DCID-RH est né d'un constat simple.
                </p>

                <p>
                  De plus en plus de personnes expriment la même chose :
                </p>

                <div className="pl-6 border-l-4 border-primary/30 space-y-3">
                  <p className="italic text-muted-foreground">« Je ne suis plus motivé »</p>
                  <p className="italic text-muted-foreground">« J'ai envie de partir »</p>
                  <p className="italic text-muted-foreground">« Je ne me retrouve plus dans mon travail »</p>
                </div>

                <p className="text-muted-foreground">
                  Au début, cela semblait anodin.<br />
                  Il est vite devenu clair que ce n'était pas des cas isolés.
                </p>

                <p>
                  C'était un problème récurrent.<br />
                  Un problème qui touche profondément les organisations, leur performance —<br />
                  et surtout les personnes qui les composent.
                </p>

                <p className="text-muted-foreground">
                  Une question s'est alors posée :<br />
                  Pourquoi ces situations arrivent-elles… et pourquoi ne les voit-on pas venir ?
                </p>

                <div className="bg-gradient-to-br from-blue-50/80 to-white rounded-2xl p-8 border border-primary/15">
                  <p className="mb-4">Une évidence s'est imposée.</p>
                  <p className="font-semibold text-foreground mb-4">
                    Ce n'est pas uniquement une question de compétences.<br />
                    C'est une question d'alignement.
                  </p>
                  <p className="text-muted-foreground mb-4">Alignement entre :</p>
                  <ul className="space-y-2 font-medium text-foreground">
                    <li className="flex items-center gap-3">
                      <span className="text-primary font-bold">→</span>
                      l'organisation
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-primary font-bold">→</span>
                      l'équipe
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-primary font-bold">→</span>
                      le candidat
                    </li>
                  </ul>
                </div>

                <p>
                  DCID-RH a été créé pour répondre à ce problème.
                </p>

                <ul className="space-y-2 text-muted-foreground">
                  <li>Donner une lecture claire de ce qui est souvent invisible.</li>
                  <li>Mesurer ce qui ne l'était pas.</li>
                  <li>Et permettre d'agir avant que le désengagement ne s'installe.</li>
                </ul>

                <div className="pt-4 border-t border-border/60">
                  <p className="text-muted-foreground mb-4">L'objectif n'est pas de produire des profils.</p>
                  <p className="text-xl font-semibold text-foreground leading-relaxed">
                    L'objectif est d'aider à prendre de meilleures décisions,<br />
                    pour favoriser à la fois l'épanouissement des collaborateurs<br />
                    et la pérennité des organisations.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              Ce qui guide notre travail
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-10 border border-border/60 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg ${value.shadow}`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-gradient-to-b from-slate-50/50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10">
              <div className="bg-white rounded-2xl p-10 border border-border/60 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-blue-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary/25">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Notre vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Un monde du travail où les décisions RH s'appuient sur des données culturelles objectives — pas des impressions.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-10 border border-border/60 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-purple-500/25">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Notre mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Transformer la culture organisationnelle en données mesurables et actionnables — pour réduire les erreurs d'intégration et favoriser l'épanouissement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-gradient-to-br from-blue-50/40 via-white to-blue-50/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              Une équipe pluridisciplinaire
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              DCID-RH réunit des expertises en psychologie organisationnelle, data science et développement produit.
              Ensemble, nous construisons une infrastructure de décision RH crédible et rigoureuse.
            </p>
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
                Rejoignez cette démarche
              </h2>
              <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                Découvrez comment DCID-RH peut structurer vos décisions RH.
              </p>
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="rounded-full text-lg px-10 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
                  Demander une démo
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
