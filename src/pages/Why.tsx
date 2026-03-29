import { Link } from "react-router";
import { Brain, Scale, Target, ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import { Button } from "../components/ui/button";

export function Why() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-white via-blue-50/30 to-white py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/10 to-blue-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-gradient-to-r from-primary/10 to-blue-500/10 border border-primary/20 text-primary rounded-full text-[14px] font-medium shadow-sm">
              Une approche révolutionnaire
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight">
              Pourquoi choisir DCID-RH ?
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Au-delà des tests de personnalité : une analyse systémique de la compatibilité culturelle
            </p>
          </div>
        </div>
      </section>

      {/* Not a personality test */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50/50 rounded-3xl p-10 md:p-14 border-2 border-primary/20 shadow-xl">
              <div className="flex items-start gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-700 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl shadow-primary/30">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-foreground mb-4">
                    Ce n'est PAS un test de personnalité
                  </h2>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                    DCID-RH ne mesure pas qui vous êtes, mais comment vous vous alignez avec une culture spécifique
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-10 mt-10">
                <div className="space-y-5">
                  <h3 className="font-semibold text-foreground flex items-center gap-3 text-xl">
                    <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg shadow-red-500/25">
                      <XCircle className="w-5 h-5 text-white" />
                    </div>
                    Tests de personnalité
                  </h3>
                  <ul className="space-y-4 pl-11">
                    <li className="text-muted-foreground leading-relaxed">Évaluent les traits individuels</li>
                    <li className="text-muted-foreground leading-relaxed">Approche universelle et figée</li>
                    <li className="text-muted-foreground leading-relaxed">Pas de contexte organisationnel</li>
                    <li className="text-muted-foreground leading-relaxed">Risque de stéréotypes</li>
                  </ul>
                </div>

                <div className="space-y-5">
                  <h3 className="font-semibold text-foreground flex items-center gap-3 text-xl">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary to-blue-700 rounded-xl flex items-center justify-center shadow-lg shadow-primary/25">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    DCID-RH
                  </h3>
                  <ul className="space-y-4 pl-11">
                    <li className="text-foreground font-medium leading-relaxed">Mesure l'alignement culturel</li>
                    <li className="text-foreground font-medium leading-relaxed">Contexte spécifique à votre organisation</li>
                    <li className="text-foreground font-medium leading-relaxed">Analyse des 3 niveaux (org/équipe/candidat)</li>
                    <li className="text-foreground font-medium leading-relaxed">Données objectives et actionnables</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Systemic approach */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                Une approche systémique unique
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                DCID-RH analyse la culture comme un système à plusieurs niveaux, pas comme une simple somme de traits individuels
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-10 border border-border/60 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/25">
                  <Scale className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Contextuelle
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Évalue la compatibilité dans le contexte spécifique de votre organisation et équipes
                </p>
              </div>

              <div className="bg-white rounded-2xl p-10 border border-border/60 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-purple-500/25">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Multi-niveaux
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Analyse les interactions entre organisation, équipes et individus
                </p>
              </div>

              <div className="bg-white rounded-2xl p-10 border border-border/60 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-green-500/25">
                  <CheckCircle2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Actionnable
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fournit des recommandations concrètes pour améliorer l'alignement
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-24 bg-gradient-to-b from-slate-50/50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                Comparaison avec les outils traditionnels
              </h2>
            </div>

            <div className="bg-white rounded-3xl border border-border/60 overflow-hidden shadow-2xl">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-slate-50 to-blue-50/50">
                      <th className="text-left p-8 font-bold text-foreground text-lg">Critère</th>
                      <th className="text-center p-8 font-semibold text-muted-foreground">
                        Tests de personnalité
                      </th>
                      <th className="text-center p-8 font-semibold text-muted-foreground">
                        Questionnaires culture
                      </th>
                      <th className="text-center p-8 font-bold text-primary bg-primary/5">
                        DCID-RH
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/40">
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-6 text-foreground font-medium">Analyse contextuelle</td>
                      <td className="p-6 text-center">
                        <XCircle className="w-6 h-6 text-red-500 mx-auto" />
                      </td>
                      <td className="p-6 text-center">
                        <div className="w-6 h-6 mx-auto text-yellow-500 font-bold text-xl">~</div>
                      </td>
                      <td className="p-6 text-center bg-primary/5">
                        <CheckCircle2 className="w-6 h-6 text-primary mx-auto" />
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-6 text-foreground font-medium">3 niveaux d'analyse</td>
                      <td className="p-6 text-center">
                        <XCircle className="w-6 h-6 text-red-500 mx-auto" />
                      </td>
                      <td className="p-6 text-center">
                        <XCircle className="w-6 h-6 text-red-500 mx-auto" />
                      </td>
                      <td className="p-6 text-center bg-primary/5">
                        <CheckCircle2 className="w-6 h-6 text-primary mx-auto" />
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-6 text-foreground font-medium">Scoring de compatibilité</td>
                      <td className="p-6 text-center">
                        <XCircle className="w-6 h-6 text-red-500 mx-auto" />
                      </td>
                      <td className="p-6 text-center">
                        <div className="w-6 h-6 mx-auto text-yellow-500 font-bold text-xl">~</div>
                      </td>
                      <td className="p-6 text-center bg-primary/5">
                        <CheckCircle2 className="w-6 h-6 text-primary mx-auto" />
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-6 text-foreground font-medium">Recommandations actionnables</td>
                      <td className="p-6 text-center">
                        <XCircle className="w-6 h-6 text-red-500 mx-auto" />
                      </td>
                      <td className="p-6 text-center">
                        <XCircle className="w-6 h-6 text-red-500 mx-auto" />
                      </td>
                      <td className="p-6 text-center bg-primary/5">
                        <CheckCircle2 className="w-6 h-6 text-primary mx-auto" />
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-6 text-foreground font-medium">Visualisations interactives</td>
                      <td className="p-6 text-center">
                        <div className="w-6 h-6 mx-auto text-yellow-500 font-bold text-xl">~</div>
                      </td>
                      <td className="p-6 text-center">
                        <XCircle className="w-6 h-6 text-red-500 mx-auto" />
                      </td>
                      <td className="p-6 text-center bg-primary/5">
                        <CheckCircle2 className="w-6 h-6 text-primary mx-auto" />
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-6 text-foreground font-medium">Plans d'onboarding personnalisés</td>
                      <td className="p-6 text-center">
                        <XCircle className="w-6 h-6 text-red-500 mx-auto" />
                      </td>
                      <td className="p-6 text-center">
                        <XCircle className="w-6 h-6 text-red-500 mx-auto" />
                      </td>
                      <td className="p-6 text-center bg-primary/5">
                        <CheckCircle2 className="w-6 h-6 text-primary mx-auto" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structural approach */}
      <section className="py-24 bg-gradient-to-br from-blue-50/40 via-white to-blue-50/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-3xl p-10 md:p-14 border border-border/60 shadow-2xl">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-blue-700 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-primary/30">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Une lecture structurée des dynamiques de travail
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                DCID-RH s'appuie sur l'observation des interactions entre organisation, équipes et collaborateurs.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mt-4">
                L'objectif n'est pas de produire des scores abstraits,
                mais de rendre visibles les écarts d'alignement
                et d'aider à prendre des décisions adaptées.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-blue-600 to-blue-700"></div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
            
            <div className="relative p-12 md:p-20 text-center text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Convaincu par l'approche DCID-RH ?
              </h2>
              <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                Découvrez concrètement comment notre plateforme peut révolutionner vos décisions RH
              </p>
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="rounded-full text-lg px-10 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
                  Demander une démo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
