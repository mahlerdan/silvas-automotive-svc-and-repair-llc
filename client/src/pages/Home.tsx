import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Phone, Wrench, Shield, Star, Award, 
  MapPin, Clock, CheckCircle2, ChevronRight, Gauge 
} from "lucide-react";

export default function Home() {
  const highlightServices = [
    {
      icon: <Wrench className="w-8 h-8 text-primary" />,
      title: "Full-Service Auto Repair",
      desc: "From complex engine work and transmission diagnostics to exhaust repairs, our certified mechanics handle all makes and models.",
      image: "/images/service-engine.jpg",
      imageAlt: "Close-up of engine components being serviced by a mechanic"
    },
    {
      icon: <Gauge className="w-8 h-8 text-primary" />,
      title: "Diagnostics & Tuning",
      desc: "Using high-end digital diagnostic systems, we read error codes and fine-tune your vehicle's performance with precision.",
      image: "/images/service-brakes.jpg",
      imageAlt: "Mechanic using diagnostic tools to inspect vehicle components"
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Brakes & Suspension",
      desc: "Complete safety inspections, pad and rotor replacements, steering repairs, and suspension tuning to keep your ride smooth and secure.",
      image: "/images/service-lift.jpg",
      imageAlt: "Vehicle raised on a lift for brake and suspension inspection"
    }
  ];

  const paraphrasedReviews = [
    {
      text: "I was stranded with engine issues on Yellowstone Ave. Silva's got me in immediately, diagnosed the sensor failure, and had me back on the road the same afternoon. Honest pricing and fantastic speed.",
      author: "Idaho Falls Driver",
      rating: 5
    },
    {
      text: "We take all our family vehicles here. They never try to upsell you on repairs you don't need. They're straightforward, professional, and the work is always top-tier. A true local gem.",
      author: "Local Resident",
      rating: 5
    },
    {
      text: "Great experience getting my brakes done. They walked me through the wear levels and gave me a fair quote upfront. The turnaround was extremely fast, and the staff was friendly.",
      author: "Ammon Customer",
      rating: 5
    }
  ];

  return (
    <Layout>
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-20 border-b border-border">
        {/* Real hero background image */}
        <img
          src="/images/hero-auto.jpg"
          alt="Professional mechanic working on a vehicle engine at Silva's Automotive"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          loading="eager"
        />
        {/* Dark overlay to maintain text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/60 z-10" />
        <div 
          className="absolute inset-0 z-[5]"
          style={{
            backgroundImage: `radial-gradient(circle, oklch(0.62 0.25 35 / 10%) 0%, transparent 70%)`
          }}
        />
        
        {/* Technical decorative lines */}
        <div className="absolute top-10 left-10 w-24 h-24 border-t-2 border-l-2 border-primary/20 hidden md:block z-20" />
        <div className="absolute bottom-10 right-10 w-24 h-24 border-b-2 border-r-2 border-primary/20 hidden md:block z-20" />
        
        <div className="container relative z-20 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/30 text-primary font-mono text-xs tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Certified Auto Repair in Idaho Falls
              </div>
              
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight uppercase leading-none">
                DEPENDABLE <span className="text-primary">AUTO REPAIR</span> <br />
                BUILT ON TRUST.
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-xl">
                Silva's Automotive SVC & Repair LLC delivers top-tier mechanical expertise and transparent diagnostics at 695 Yellowstone Ave. We keep Idaho Falls moving safely.
              </p>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button asChild size="lg" className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 font-display tracking-wider uppercase text-base px-8 py-7 metal-shine border border-primary/50 relative">
                  <a href="tel:2085280092" className="flex items-center gap-3">
                    <Phone className="w-5 h-5 fill-primary-foreground" />
                    CALL (208) 528-0092
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-none border-border hover:bg-card hover:text-primary font-display tracking-wider uppercase text-base px-8 py-7">
                  <Link href="/services" className="flex items-center gap-2">
                    OUR SERVICES
                    <ChevronRight className="w-4 h-4 text-primary" />
                  </Link>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border max-w-md font-mono text-xs text-muted-foreground">
                <div>
                  <span className="block text-xl font-bold text-foreground font-display">4.2 STARS</span>
                  108 Google Reviews
                </div>
                <div>
                  <span className="block text-xl font-bold text-foreground font-display">LOCAL</span>
                  Idaho Falls Owned
                </div>
                <div>
                  <span className="block text-xl font-bold text-foreground font-display">CERTIFIED</span>
                  Professional Techs
                </div>
              </div>
            </div>

            {/* Right Display Card */}
            <div className="lg:col-span-5 hidden lg:block">
              <div className="industrial-border bg-card p-8 space-y-6">
                <div className="flex justify-between items-start border-b border-border pb-4">
                  <div>
                    <h3 className="font-display text-2xl tracking-tight">GARAGE STATS</h3>
                    <p className="text-xs font-mono text-muted-foreground">SYSTEM DIAGNOSTICS ACTIVE</p>
                  </div>
                  <div className="bg-primary/10 text-primary p-2">
                    <Gauge className="w-6 h-6" />
                  </div>
                </div>

                <div className="space-y-4 font-mono text-sm">
                  <div className="flex justify-between border-b border-border/50 pb-2">
                    <span className="text-muted-foreground">GOOGLE RATING:</span>
                    <span className="text-foreground font-bold flex items-center gap-1">
                      4.2 <Star className="w-4 h-4 text-primary fill-primary" />
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-border/50 pb-2">
                    <span className="text-muted-foreground">LOCATION:</span>
                    <span className="text-foreground font-bold text-right">695 Yellowstone Ave</span>
                  </div>
                  <div className="flex justify-between border-b border-border/50 pb-2">
                    <span className="text-muted-foreground">HOURS:</span>
                    <span className="text-foreground font-bold">Mon-Fri 8am-5pm</span>
                  </div>
                  <div className="flex justify-between pb-2">
                    <span className="text-muted-foreground">DIAGNOSTICS:</span>
                    <span className="text-emerald-500 font-bold">READY / ONLINE</span>
                  </div>
                </div>

                <div className="pt-4">
                  <div className="bg-background border border-border p-4 text-xs font-mono text-muted-foreground space-y-2">
                    <p className="text-primary font-bold">🚨 EMERGENCY ROAD TROUBLE?</p>
                    <p>Have your vehicle towed directly to our Yellowstone shop. Call us ahead of time so we can prepare a bay for you.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE HIGHLIGHTS / TEASER SERVICES */}
      <section className="py-24 bg-black/40 border-b border-border">
        <div className="container max-w-6xl">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="font-display text-3xl sm:text-5xl tracking-tight">
              PROFESSIONAL <span className="text-primary">AUTO SERVICES</span>
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto" />
            <p className="text-muted-foreground">
              We provide full-service auto repair and preventative maintenance. Our certified mechanics utilize advanced equipment to diagnose and repair your vehicle correctly the first time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlightServices.map((service, idx) => (
              <div key={idx} className="industrial-border bg-card flex flex-col hover:border-primary/40 transition-colors duration-300 overflow-hidden">
                {/* Service photo */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                </div>
                <div className="p-8 flex flex-col justify-between flex-1 space-y-4">
                  <div className="space-y-4">
                    <div className="p-3 bg-background border border-border inline-block">
                      {service.icon}
                    </div>
                    <h3 className="font-display text-xl tracking-tight text-foreground">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-border">
                    <Link href="/services" className="text-xs font-mono text-primary hover:text-primary/80 flex items-center gap-1.5 uppercase tracking-wider font-bold">
                      View Service Details <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" className="rounded-none border-border font-display tracking-wider uppercase px-8 py-6">
              <Link href="/services">VIEW ALL SERVICES</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* COMPACT ABOUT TEASER */}
      <section className="py-24 relative overflow-hidden border-b border-border">
        <div className="container max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left - About team photo */}
            <div className="lg:col-span-5 space-y-6">
              <div className="industrial-border bg-card relative overflow-hidden">
                <div className="absolute top-0 left-0 bg-primary text-primary-foreground font-display text-xs font-bold px-3 py-1 z-10">
                  ESTABLISHED
                </div>
                {/* Team/workspace photo */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="/images/about-team.jpg"
                    alt="Professional mechanic working in the Silva's Automotive shop"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/70 to-transparent" />
                </div>
                <div className="p-6 border-t border-border grid grid-cols-2 gap-4 text-center font-mono text-xs text-muted-foreground">
                  <div className="border-r border-border">
                    <span className="block text-lg font-bold text-foreground">4.2 / 5</span>
                    Google Rating
                  </div>
                  <div>
                    <span className="block text-lg font-bold text-foreground">108+</span>
                    Happy Customers
                  </div>
                </div>
              </div>
            </div>

            {/* Right Story */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-display text-3xl sm:text-5xl tracking-tight">
                SERVING <span className="text-primary">IDAHO FALLS</span> SINCE DAY ONE
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Located conveniently at 695 Yellowstone Ave, Silva's Automotive SVC & Repair LLC is dedicated to keeping the local Idaho Falls community safe on the road. We believe in transparent, honest auto repair.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our certified technicians are equipped with the latest diagnostic tools to handle everything from complex engine repairs to simple preventative maintenance. We take pride in our honest approach—no hidden fees, no unnecessary upsells, just quality craftsmanship.
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>Fair & Honest Quotes</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>Certified Technicians</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>Modern Diagnostic Equipment</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>Yellowstone Ave Location</span>
                </li>
              </ul>

              <div className="pt-4">
                <Button asChild className="rounded-none bg-primary text-primary-foreground font-display tracking-wider uppercase px-8 py-6">
                  <Link href="/about">READ OUR FULL STORY</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARAPHRASED TESTIMONIALS */}
      <section className="py-24 bg-black/40 border-b border-border">
        <div className="container max-w-6xl">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="font-display text-3xl sm:text-5xl tracking-tight">
              REVIEWS FROM <span className="text-primary">THE ROAD</span>
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto" />
            <p className="text-muted-foreground">
              We are proud of our 4.2-star rating with 108 Google reviews. Here is what local Idaho Falls drivers say about our service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {paraphrasedReviews.map((review, idx) => (
              <div key={idx} className="industrial-border bg-card p-8 flex flex-col justify-between relative">
                
                <span className="absolute top-4 right-6 font-display text-6xl text-primary/10 select-none">"</span>
                
                <div className="space-y-4">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed italic">
                    "{review.text}"
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-border flex items-center justify-between font-mono text-xs">
                  <span className="text-foreground font-bold">{review.author}</span>
                  <span className="text-muted-foreground">Verified Customer</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION WITH BACKGROUND IMAGE */}
      <section className="relative py-24 overflow-hidden border-b border-border">
        {/* Background photo */}
        <img
          src="/images/cta-garage.jpg"
          alt="Professional auto repair garage interior"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/80 z-10" />
        <div className="container max-w-4xl text-center space-y-6 relative z-20">
          <h2 className="font-display text-3xl sm:text-4xl tracking-tight uppercase">
            READY TO GET YOUR VEHICLE <span className="text-primary">BACK ON THE ROAD?</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Our certified mechanics are standing by at 695 Yellowstone Ave. Call us now for fast, honest service.
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

      {/* CONTACT & MAP HIGHLIGHT */}
      <section className="py-24">
        <div className="container max-w-6xl">
          <div className="industrial-border bg-card overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            {/* Contact Details */}
            <div className="lg:col-span-5 p-8 sm:p-12 space-y-8 flex flex-col justify-between">
              <div className="space-y-4">
                <h2 className="font-display text-3xl tracking-tight">
                  GET IN <span className="text-primary">TOUCH</span>
                </h2>
                <p className="text-sm text-muted-foreground">
                  Need a diagnostic check, brake service, or engine repair? Call us directly or visit our shop on Yellowstone Ave.
                </p>
              </div>

              <div className="space-y-6 font-mono text-sm text-muted-foreground">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-foreground font-sans font-bold">Silva's Automotive SVC & Repair LLC</p>
                    <p>695 Yellowstone Ave</p>
                    <p>Idaho Falls, ID 83402</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <a href="tel:2085280092" className="text-foreground hover:text-primary font-bold transition-colors">
                    (208) 528-0092
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p>Monday - Friday</p>
                    <p className="text-foreground">8:00 AM - 5:00 PM</p>
                    <p className="text-xs text-amber-500 mt-1">Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <Button asChild className="w-full rounded-none bg-primary text-primary-foreground font-display tracking-wider uppercase py-6 metal-shine">
                  <a href="tel:2085280092" className="flex items-center justify-center gap-2">
                    <Phone className="w-5 h-5" />
                    CALL (208) 528-0092
                  </a>
                </Button>
              </div>
            </div>

            {/* Simulated Map Display */}
            <div className="lg:col-span-7 bg-background min-h-[350px] relative flex flex-col justify-center items-center p-8 border-t lg:border-t-0 lg:border-l border-border">
              {/* Abstract Industrial Grid acting as map graphic */}
              <div className="absolute inset-0 opacity-10 industrial-grid" />
              
              <div className="relative z-10 text-center space-y-4 max-w-md">
                <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/40 flex items-center justify-center mx-auto">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-2xl tracking-tight">FIND US ON YELLOWSTONE</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We are located at 695 Yellowstone Ave in Idaho Falls, near major intersections and easily accessible from anywhere in town.
                </p>
                <div className="pt-2">
                  <Button asChild variant="outline" className="rounded-none border-border font-display tracking-wider uppercase">
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=Silvas+Automotive+SVC+Repair+LLC+695+Yellowstone+Ave+Idaho+Falls+ID+83402" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      OPEN IN GOOGLE MAPS
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
