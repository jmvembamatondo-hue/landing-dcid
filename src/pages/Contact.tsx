import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";

// Remplace par ton endpoint Formspree : https://formspree.io/f/XXXXXXXX
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col">

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-white via-blue-50/30 to-white py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/10 to-blue-500/10 rounded-full blur-3xl" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-5">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-gradient-to-r from-primary/10 to-blue-500/10 border border-primary/20 text-primary rounded-full text-[14px] font-medium shadow-sm">
              Contact
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight">
              Parlons de votre contexte
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Une question, un projet, une démo — échangeons directement.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">

            {/* Info */}
            <div className="lg:col-span-1 space-y-10">
              <div className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">Coordonnées</h2>
                <p className="text-muted-foreground text-sm">
                  Nous répondons à toutes les demandes sérieuses.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-[11px] text-muted-foreground uppercase tracking-wider font-semibold mb-1">Email</p>
                    <p className="text-foreground font-medium">contact@dcid-rh.fr</p>
                    <p className="text-muted-foreground text-sm">contact@dcid-rh.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-[11px] text-muted-foreground uppercase tracking-wider font-semibold mb-1">Téléphone</p>
                    <p className="text-foreground font-medium">07 66 25 37 18</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-[11px] text-muted-foreground uppercase tracking-wider font-semibold mb-1">Adresse</p>
                    <p className="text-foreground font-medium">165 Av. de Bretagne</p>
                    <p className="text-muted-foreground text-sm">59000 Lille, France</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-border/60">
                <p className="text-sm font-semibold text-foreground mb-1">Démo personnalisée</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  30 minutes. Sans engagement.<br />Adaptée à votre contexte.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-border shadow-xl p-8 md:p-10">
                {status === "success" ? (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">Message envoyé</h3>
                    <p className="text-muted-foreground">Nous vous répondrons dans les meilleurs délais.</p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="mt-6 text-sm text-primary font-medium hover:underline"
                    >
                      Envoyer un autre message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold text-foreground">Envoyez-nous un message</h3>
                      <p className="text-sm text-muted-foreground">Les champs marqués * sont requis.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nom complet *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Jean Dupont"
                          className="rounded-lg"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="jean@entreprise.com"
                          className="rounded-lg"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Organisation <span className="text-muted-foreground font-normal">(optionnel)</span></Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Nom de votre organisation"
                        className="rounded-lg"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Décrivez votre contexte, vos enjeux, ou ce que vous souhaitez explorer..."
                        rows={5}
                        className="rounded-lg resize-none"
                      />
                    </div>

                    {status === "error" && (
                      <div className="flex items-center gap-3 p-4 bg-red-50 rounded-xl border border-red-200">
                        <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                        <p className="text-sm text-red-700">
                          Une erreur est survenue. Veuillez réessayer ou nous contacter directement au <strong>07 66 25 37 18</strong>.
                        </p>
                      </div>
                    )}

                    <div className="bg-slate-50 rounded-lg p-4">
                      <p className="text-xs text-muted-foreground">
                        Vos données sont traitées conformément au RGPD et ne sont jamais transmises à des tiers.
                      </p>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full rounded-full text-base"
                      disabled={status === "loading"}
                    >
                      {status === "loading" ? "Envoi en cours..." : "Envoyer le message"}
                      {status !== "loading" && <Send className="ml-2 w-4 h-4" />}
                    </Button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Questions fréquentes
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  q: "Combien de temps dure une démo ?",
                  a: "Environ 30 minutes, avec du temps dédié à vos questions spécifiques.",
                },
                {
                  q: "Y a-t-il un engagement ?",
                  a: "Non. La démonstration est gratuite et sans engagement.",
                },
                {
                  q: "Pour quelle taille d'organisation ?",
                  a: "DCID-RH s'adapte à tout contexte, de la PME à la grande organisation.",
                },
                {
                  q: "Comment se déroule la mise en place ?",
                  a: "Nous vous accompagnons à chaque étape, du cadrage initial à la prise en main complète.",
                },
              ].map(({ q, a }, i) => (
                <div key={i} className="bg-slate-50/80 rounded-2xl p-6 border border-border/60">
                  <h3 className="font-semibold text-foreground mb-2">{q}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
