import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { 
  Phone, Wrench, Shield, CheckCircle2, 
  Gauge, Zap, Settings, HelpCircle, Activity 
} from "lucide-react";

export default function Services() {
  const allServices = [
    {
      icon: <Wrench className="w-10 h-10 text-primary" />,
      title: "Full-Service Auto Repair",
      category: "MECHANICAL",
      details: [
        "Complete engine rebuilds and repairs",
        "Transmission service, repair, and replacement",
        "Exhaust system repair and replacement",
        "Cooling system repair (radiators, water pumps)",
        "Fuel system cleaning and fuel pump replacement",
        "Belt and hose inspection and replacement"
      ]
    },
    {
      icon: <Gauge className="w-10 h-10 text-primary" />,
      title: "Advanced Engine Diagnostics",
      category: "DIAGNOSTICS",
      details: [
        "State-of-the-art computer scan tool reading",
        "Check Engine Light diagnosis and troubleshooting",
        "Electrical system diagnostics and repair",
        "Sensor testing and replacement (O2, MAF, etc.)",
        "Ignition system troubleshooting (spark plugs, coils)",
        "Emission system diagnostics"
      ]
    },
    {
      icon: <Shield className="w-10 h-10 text-primary" />,
      title: "Brakes & Safety Inspections",
      category: "SAFETY",
      details: [
        "Complete brake system inspections",
        "Brake pad and rotor replacement",
        "Brake caliper repair and replacement",
        "Brake fluid flush and bleeding",
        "ABS (Anti-lock Brake System) diagnostics",
        "Emergency brake adjustments"
      ]
    },
    {
      icon: <Activity className="w-10 h-10 text-primary" />,
      title: "Suspension & Steering",
      category: "RIDE QUALITY",
      details: [
        "Shock and strut replacement",
        "Ball joint, tie rod, and control arm service",
        "Power steering pump and rack repair",
        "Sway bar link and bushing replacement",
        "Wheel bearing and hub replacement",
        "Suspension system diagnostic checks"
      ]
    },
    {
      icon: <Zap className="w-10 h-10 text-primary" />,
      title: "Electrical & Battery Services",
      category: "ELECTRICAL",
      details: [
        "Battery testing and replacement",
        "Alternator testing and replacement",
        "Starter motor service and replacement",
        "Wiring repair and electrical troubleshooting",
        "Power window, lock, and seat repairs",
        "Lighting system service (headlights, tail lights)"
      ]
    },
    {
      icon: <Settings className="w-10 h-10 text-primary" />,
      title: "Preventative Maintenance",
      category: "MAINTENANCE",
      details: [
        "Regular synthetic and conventional oil changes",
        "Fluid level checks and top-offs",
        "Engine air filter and cabin air filter replacement",
        "Spark plug replacement intervals",
        "Timing belt interval replacement",
        "Multi-point digital safety inspections"
      ]
    }
  ];

  const faqs = [
    {
      q: "How often should I have my oil changed?",
      a: "For most modern vehicles using synthetic oil, we recommend changes every 5,000 to 7,500 miles. For conventional oil, every 3,000 miles is best. Refer to your owner's manual or ask one of our certified mechanics for a custom recommendation based on your driving habits in Idaho Falls."
    },
    {
      q: "What should I do if my Check Engine Light comes on?",
      a: "If the light is steady, it means there is an issue that needs attention soon. You can safely drive to our shop on Yellowstone Ave for a diagnostic check. However, if the light is FLASHING, pull over safely and turn off the engine immediately—this indicates a severe misfire that can damage your catalytic converter. Have the vehicle towed to us."
    },
    {
      q: "Do you provide estimates before starting repairs?",
      a: "Absolutely. We pride ourselves on transparent, upfront communication. Once we diagnose your vehicle's issue, we will provide a detailed estimate of parts and labor. We will never perform any work or charge you for repairs without your explicit authorization."
    },
    {
      q: "Do I need to make an appointment for service?",
      a: "While appointments are highly recommended to ensure we can get your vehicle into a bay quickly, we do accept walk-ins and towed vehicles for urgent diagnostic checks and emergency repairs. Give us a call at (208) 528-0092 to check our current bay availability."
    }
  ];

  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-black/60 border-b border-border py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 industrial-grid" />
        <div className="container max-w-6xl text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/30 text-primary font-mono text-xs tracking-wider uppercase">
            SERVICES & CAPABILITIES
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-black tracking-tight uppercase">
            WHAT WE <span className="text-primary">DO</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From routine oil changes to complex engine diagnostics and repairs, Silva's Automotive is equipped to keep your vehicle running smoothly. Discover our full suite of services below.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {allServices.map((service, idx) => (
              <div key={idx} className="industrial-border bg-card p-8 space-y-6 hover:border-primary/40 transition-colors duration-300">
                <div className="flex justify-between items-start border-b border-border pb-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-primary tracking-widest uppercase font-bold">{service.category}</span>
                    <h3 className="font-display text-2xl tracking-tight text-foreground">{service.title}</h3>
                  </div>
                  <div className="p-3 bg-background border border-border shrink-0">
                    {service.icon}
                  </div>
                </div>

                <ul className="space-y-3 font-mono text-sm text-muted-foreground">
                  {service.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="font-sans text-foreground/90">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5 border-t border-b border-primary/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 industrial-grid" />
        <div className="container max-w-4xl text-center space-y-6 relative z-10">
          <h2 className="font-display text-3xl sm:text-4xl tracking-tight uppercase">
            NEED A DIAGNOSTIC CHECK OR REPAIR?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Our certified mechanics are ready to inspect your vehicle and provide honest, reliable solutions. Call us today to book your appointment or ask about our services.
          </p>
          <div className="pt-2">
            <Button asChild size="lg" className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 font-display tracking-wider uppercase text-base px-8 py-6 metal-shine">
              <a href="tel:2085280092" className="flex items-center gap-3">
                <Phone className="w-5 h-5 fill-primary-foreground animate-pulse" />
                CALL (208) 528-0092
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-24">
        <div className="container max-w-4xl">
          <div className="text-center space-y-4 mb-16">
            <div className="p-3 bg-card border border-border inline-block rounded-full">
              <HelpCircle className="w-8 h-8 text-primary" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl tracking-tight uppercase">
              FREQUENTLY ASKED <span className="text-primary">QUESTIONS</span>
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto" />
          </div>

          <div className="space-y-8">
            {faqs.map((faq, idx) => (
              <div key={idx} className="industrial-border bg-card p-8 space-y-3">
                <h3 className="font-display text-xl tracking-tight text-foreground flex items-start gap-3">
                  <span className="text-primary font-mono font-bold">Q.</span>
                  {faq.q}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed pl-6 border-l-2 border-border font-sans">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
