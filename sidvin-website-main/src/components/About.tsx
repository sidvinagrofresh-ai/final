import { Card } from "@/components/ui/card";
import { Target, Eye, Award, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-forest mb-4">
            About Sidvin Agro
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Rooted in India's rich agricultural heritage, <strong className="font-bold text-forest">Sidvin Agro</strong> is a trusted exporter of premium coconut-based products worldwide.
            <br /><br />
            We specialize in Virgin Coconut Oil, Coconut Milk (12%, 17%, and 22% fat), Desiccated Coconut Powder (70–75% fat), Organic & Conventional Coconut Sugar, and Tender Coconut Water.
            <br /><br />
            With a commitment to purity, sustainability, and quality assurance, we deliver farm-fresh coconut products that meet the highest global food safety and export standards, serving clients across the Middle East, Europe, Africa, and Asia.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-forest mb-4">Our Story</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Sidvin Agro is driven by a passion for quality and rooted in India's rich agricultural heritage. 
              With an integrated supply chain from farm to port, we deliver products that are fresh, safe, 
              and tailored for international markets.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Trusted by buyers across the Middle East, Europe, and Asia, we stand for 
              <strong className="text-forest"> Purity, Performance and Quality</strong> in every shipment.
            </p>
            <div className="bg-secondary/20 p-4 rounded-lg border-l-4 border-secondary">
              <p className="text-forest font-medium">
                "From soil to shelf - ensuring trust, taste, and traceability in every product."
              </p>
              <p className="text-muted-foreground text-sm mt-2">
                — Prathamesh Vinayak Pilankar, CEO & Founder
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <Card className="p-6 text-center bg-white/80 backdrop-blur-sm border-forest/10">
              <Users className="h-8 w-8 text-forest mx-auto mb-3" />
              <div className="text-2xl font-bold text-forest">50+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </Card>
            
            <Card className="p-6 text-center bg-white/80 backdrop-blur-sm border-forest/10">
              <Award className="h-8 w-8 text-secondary mx-auto mb-3" />
              <div className="text-2xl font-bold text-forest">5+</div>
              <div className="text-sm text-muted-foreground">Certifications</div>
            </Card>
            
            <Card className="p-6 text-center bg-white/80 backdrop-blur-sm border-forest/10">
              <Target className="h-8 w-8 text-forest mx-auto mb-3" />
              <div className="text-2xl font-bold text-forest">15+</div>
              <div className="text-sm text-muted-foreground">Countries</div>
            </Card>
            
            <Card className="p-6 text-center bg-white/80 backdrop-blur-sm border-forest/10">
              <Eye className="h-8 w-8 text-secondary mx-auto mb-3" />
              <div className="text-2xl font-bold text-forest">100%</div>
              <div className="text-sm text-muted-foreground">Quality Check</div>
            </Card>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 bg-forest text-white">
            <Target className="h-12 w-12 text-secondary mb-4" />
            <h3 className="text-xl font-bold mb-4">Our Mission</h3>
            <p className="leading-relaxed">
              To deliver India's finest agro-products to the world through a transparent, reliable, 
              and sustainable export system. We are committed to building long-term global partnerships 
              by ensuring quality, consistency, and timely delivery in every shipment.
            </p>
          </Card>
          
          <Card className="p-8 bg-gradient-to-br from-secondary to-gold text-forest">
            <Eye className="h-12 w-12 text-forest mb-4" />
            <h3 className="text-xl font-bold mb-4">Our Vision</h3>
            <p className="leading-relaxed">
              To become a globally respected agro-export brand by growing, processing, packaging, 
              and exporting under one trusted roof. We envision a world where every buyer associates 
              Sidvin Agro with trust, taste, and traceability from soil to shelf.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;