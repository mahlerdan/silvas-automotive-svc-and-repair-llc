import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Phone, ShieldCheck, Award, Heart, Hammer, CheckCircle2 } from "lucide-react";

export default function About() {
  const coreValues = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      title: "Uncompromising Honesty",
      desc: "We believe in upfront, transparent diagnostics. We will never recommend a repair that your vehicle does not genuinely need, and we walk you through every quote in detail."
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Certified Expertise",
      desc: "Our mechanics are highly trained and equipped with modern diagnostic tools, ensuring that your vehicle receives top-tier mechanical work on every single visit."
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Community Focus",
      desc: "We aren't a corporate chain. We live and work right here in Idaho Falls. Every car we service represents a neighbor, friend, or local business owner we are proud to support."
    }
  ];

  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-black/60 border-b border-border py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 industrial-grid" />
        <div className="container max-w-6xl text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/30 text-primary font-mono text-xs tracking-wider uppercase">
            OUR STORY & VALUES
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-black tracking-tight uppercase">
            ABOUT <span className="text-primary">SILVA'S AUTOMOTIVE</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know the team dedicated to keeping Idaho Falls drivers safe. Discover our history, our core principles, and our commitment to honest mechanical service.
          </p>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="py-24">
        <div className="container max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Story Text */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-display text-3xl sm:text-4xl tracking-tight uppercase">
                HONEST REPAIR FOR THE <span className="text-primary">IDAHO FALLS COMMUNITY</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Silva's Automotive SVC & Repair LLC was founded with a clear, singular mission: to provide the drivers of Idaho Falls, Idaho, with reliable, transparent, and high-quality automotive repair services. Located at 695 Yellowstone Ave, we have built our reputation on honest diagnostics, exceptional craftsmanship, and fair pricing.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We understand that dealing with car troubles can be stressful. That is why we focus on taking the mystery out of auto repair. Our certified technicians use state-of-the-art diagnostic equipment to pinpoint issues accurately, and we take the time to explain our findings and repair options clearly before any work begins.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you need a simple oil change, brake replacement, or complex engine work, you can trust Silva's Automotive to treat your vehicle as if it were our own. We are proud to serve Idaho Falls and the surrounding communities, and we look forward to earning your trust as your go-to local garage.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 font-mono text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>Locally Owned & Operated</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>Certified Techs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>Transparent, Upfront Pricing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>Yellowstone Ave Shop</span>
                </div>
              </div>
            </div>

            {/* Right Graphic Card */}
            <div className="lg:col-span-5">
              <div className="industrial-border bg-card space-y-0 relative overflow-hidden">
                {/* About team photo */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src="/images/about-team.jpg"
                    alt="Certified mechanic working on a vehicle at Silva's Automotive in Idaho Falls"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />
                  <div className="absolute top-0 right-0 bg-primary/10 text-primary p-4 border-b border-l border-border">
                    <Hammer className="w-8 h-8" />
                  </div>
                </div>
                <div className="p-8 space-y-6">
                
                <h3 className="font-display text-2xl tracking-tight border-b border-border pb-4">
                  GARAGE DETAILS
                </h3>

                <div className="space-y-4 font-mono text-sm text-muted-foreground">
                  <div>
                    <span className="block text-xs text-primary font-bold">BUSINESS NAME:</span>
                    <span className="text-foreground font-sans font-bold">Silva's Automotive SVC & Repair LLC</span>
                  </div>
                  <div>
                    <span className="block text-xs text-primary font-bold">LOCATION:</span>
                    <span className="text-foreground">695 Yellowstone Ave, Idaho Falls, ID 83402</span>
                  </div>
                  <div>
                    <span className="block text-xs text-primary font-bold">PHONE NUMBER:</span>
                    <a href="tel:2085280092" className="text-foreground hover:text-primary font-bold transition-colors">
                      (208) 528-0092
                    </a>
                  </div>
                  <div>
                    <span className="block text-xs text-primary font-bold">GOOGLE RATING:</span>
                    <span className="text-foreground font-bold">4.2 Stars (108 Reviews)</span>
                  </div>
                </div>

                <div className="bg-background border border-border p-4 text-xs font-mono text-muted-foreground">
                  <p className="text-primary font-bold mb-1">📍 OUR LOCATION:</p>
                  <p>Conveniently located on Yellowstone Ave, making it easy for drivers in Idaho Falls, Ammon, and surrounding areas to reach us.</p>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-black/40 border-t border-b border-border">
        <div className="container max-w-6xl">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="font-display text-3xl sm:text-5xl tracking-tight uppercase">
              OUR CORE <span className="text-primary">PRINCIPLES</span>
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto" />
            <p className="text-muted-foreground">
              These three foundational values guide every diagnostic check, every customer interaction, and every mechanical repair we perform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, idx) => (
              <div key={idx} className="industrial-border bg-card p-8 space-y-4 hover:border-primary/40 transition-colors duration-300">
                <div className="p-3 bg-background border border-border inline-block">
                  {value.icon}
                </div>
                <h3 className="font-display text-xl tracking-tight text-foreground">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-sans">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24">
        <div className="container max-w-4xl text-center space-y-6">
          <h2 className="font-display text-3xl sm:text-4xl tracking-tight uppercase">
            EXPERIENCE THE SILVA'S AUTOMOTIVE DIFFERENCE
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Need reliable, certified mechanical service on Yellowstone Ave? Give us a call today to schedule your vehicle's next service or diagnostic check.
          </p>
          <div className="pt-2">
            <Button asChild size="lg" className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 font-display tracking-wider uppercase text-base px-8 py-6 metal-shine">
              <a href="tel:2085280092" className="flex items-center gap-3">
                <Phone className="w-5 h-5 fill-primary-foreground animate-bounce" />
                CALL (208) 528-0092
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
