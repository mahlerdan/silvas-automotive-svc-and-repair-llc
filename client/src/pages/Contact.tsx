import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, Star, Hammer, Mail, MessageSquare } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-black/60 border-b border-border py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 industrial-grid" />
        <div className="container max-w-6xl text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/30 text-primary font-mono text-xs tracking-wider uppercase">
            CONTACT & LOCATION
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-black tracking-tight uppercase">
            GET IN <span className="text-primary">TOUCH</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a question about our auto services or want to schedule a repair? Reach out to us directly or visit our shop on Yellowstone Ave.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24">
        <div className="container max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Details Card */}
            <div className="lg:col-span-5 space-y-8">
              <div className="industrial-border bg-card p-8 sm:p-10 space-y-8">
                <h2 className="font-display text-2xl tracking-tight border-b border-border pb-4">
                  GARAGE <span className="text-primary">INFO</span>
                </h2>

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
                    <div>
                      <p className="text-xs">TAP TO CALL:</p>
                      <a href="tel:2085280092" className="text-foreground hover:text-primary font-bold text-lg transition-colors">
                        (208) 528-0092
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p>Monday - Friday</p>
                      <p className="text-foreground font-bold">8:00 AM - 5:00 PM</p>
                      <p className="text-xs text-amber-500 mt-1">Saturday - Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-border pt-6">
                  <Button asChild className="w-full rounded-none bg-primary text-primary-foreground font-display tracking-wider uppercase py-6 metal-shine">
                    <a href="tel:2085280092" className="flex items-center justify-center gap-2">
                      <Phone className="w-5 h-5" />
                      CALL (208) 528-0092
                    </a>
                  </Button>
                </div>
              </div>

              {/* Local Area Card */}
              <div className="industrial-border bg-card p-8 font-mono text-xs text-muted-foreground space-y-4">
                <h3 className="font-display text-lg text-foreground tracking-tight">
                  📍 CONVENIENTLY LOCATED
                </h3>
                <p className="leading-relaxed">
                  Our shop is located on Yellowstone Ave in Idaho Falls, a major arterial road. This makes us easily accessible from:
                </p>
                <ul className="grid grid-cols-2 gap-2 text-foreground font-bold pl-2 border-l-2 border-primary">
                  <li>• Idaho Falls</li>
                  <li>• Ammon</li>
                  <li>• Ucon</li>
                  <li>• Shelley</li>
                </ul>
              </div>
            </div>

            {/* Map & Directions Panel */}
            <div className="lg:col-span-7 space-y-8">
              <div className="industrial-border bg-card p-8 sm:p-10 space-y-6 flex flex-col justify-between h-full min-h-[450px]">
                <div className="space-y-4">
                  <h2 className="font-display text-2xl tracking-tight">
                    FIND OUR <span className="text-primary">SHOP</span>
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed font-sans">
                    We are located at 695 Yellowstone Ave, Idaho Falls, ID 83402. Look for our sign on Yellowstone Ave. If you need driving directions or are stranded, give us a call and we will help guide you in.
                  </p>
                </div>

                {/* Simulated Map Graphic */}
                <div className="bg-background border border-border p-8 text-center space-y-4 relative overflow-hidden flex flex-col justify-center items-center flex-grow">
                  <div className="absolute inset-0 opacity-10 industrial-grid" />
                  <div className="relative z-10 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/40 flex items-center justify-center mx-auto">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <p className="font-mono text-xs text-muted-foreground">
                      GPS COORDS: 43.5042° N, 112.0225° W
                    </p>
                    <p className="text-sm font-bold text-foreground">
                      695 Yellowstone Ave, Idaho Falls, ID 83402
                    </p>
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-4">
                  <Button asChild variant="outline" className="flex-1 rounded-none border-border font-display tracking-wider uppercase py-6">
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=Silvas+Automotive+SVC+Repair+LLC+695+Yellowstone+Ave+Idaho+Falls+ID+83402" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      OPEN IN GOOGLE MAPS
                    </a>
                  </Button>
                  <Button asChild className="flex-1 rounded-none bg-primary text-primary-foreground font-display tracking-wider uppercase py-6">
                    <a href="tel:2085280092" className="flex items-center justify-center gap-2">
                      <Phone className="w-4 h-4" />
                      CALL FOR DIRECTIONS
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
