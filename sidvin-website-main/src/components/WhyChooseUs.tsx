import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  Truck, 
  Shield, 
  DollarSign, 
  Tag, 
  CheckCircle, 
  Globe,
  Users,
  MapPin
} from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Award,
      title: "Export-Grade Products",
      description: "Premium quality products meeting international standards and certifications."
    },
    {
      icon: Shield,
      title: "Ethical & Sustainable Sourcing",
      description: "Direct partnerships with farmers ensuring fair trade and sustainable practices."
    },
    {
      icon: Truck,
      title: "Fast & Reliable Delivery",
      description: "Strong logistics network ensuring timely delivery to global destinations."
    },
    {
      icon: Tag,
      title: "Private Label Options",
      description: "Customizable packaging and private labeling solutions for your brand."
    },
    {
      icon: DollarSign,
      title: "Competitive Pricing",
      description: "Direct from farm pricing with no middlemen, ensuring cost-effectiveness."
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Rigorous quality control at every step from farm to port packaging."
    }
  ];

  const certifications = [
    "FSSAI",
    "APEDA", 
    "IEC",
    "GST",
    "RCMC"
  ];

  const buyerSegments = [
    { icon: Globe, label: "Importers", desc: "Worldwide distribution partners" },
    { icon: Users, label: "Supermarkets", desc: "Retail chain suppliers" },
    { icon: Truck, label: "Wholesalers", desc: "Bulk quantity suppliers" },
    { icon: MapPin, label: "Distributors", desc: "Regional distribution networks" },
    { icon: Award, label: "Brands", desc: "Private label manufacturers" }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-gradient-to-br from-cream to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-forest/10 text-forest hover:bg-forest/20">
            Why Choose Sidvin Agro
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-forest mb-4">
            Your Trusted Export Partner
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From ethical sourcing to reliable delivery, we provide comprehensive solutions 
            for international buyers seeking premium Indian agricultural products.
          </p>
        </div>

        {/* Key Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className="p-6 bg-white/80 backdrop-blur-sm border-forest/10 hover:shadow-natural transition-all duration-300 hover:scale-105"
              >
                <div className="bg-forest/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <IconComponent className="h-6 w-6 text-forest" />
                </div>
                <h3 className="text-lg font-semibold text-forest mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Certifications & Standards */}
          <Card className="p-8 bg-white shadow-natural">
            <div className="flex items-center mb-6">
              <Award className="h-8 w-8 text-secondary mr-3" />
              <h3 className="text-2xl font-bold text-forest">
                Certifications & Standards
              </h3>
            </div>
            
            <p className="text-muted-foreground mb-6">
              Our products meet international quality standards with proper certifications, 
              ensuring compliance with global import regulations.
            </p>
            
            <div className="flex flex-wrap gap-3 mb-6">
              {certifications.map((cert, index) => (
                <Badge 
                  key={index} 
                  className="bg-forest text-white hover:bg-forest/90 px-4 py-2"
                >
                  {cert}
                </Badge>
              ))}
            </div>
            
            <div className="bg-cream p-4 rounded-lg">
              <h4 className="font-semibold text-forest mb-2">Quality Promise</h4>
              <p className="text-sm text-muted-foreground">
                Every batch is tested for purity, quality, and safety before export. 
                We maintain detailed traceability records from source to shipment.
              </p>
            </div>
          </Card>

          {/* Buyer Segments */}
          <Card className="p-8 bg-white shadow-natural">
            <div className="flex items-center mb-6">
              <Users className="h-8 w-8 text-secondary mr-3" />
              <h3 className="text-2xl font-bold text-forest">
                Our Buyer Network
              </h3>
            </div>
            
            <p className="text-muted-foreground mb-6">
              We serve diverse buyer segments across the Middle East, Europe, and Asia, 
              providing tailored solutions for each market requirement.
            </p>
            
            <div className="space-y-4">
              {buyerSegments.map((segment, index) => {
                const IconComponent = segment.icon;
                return (
                  <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-cream/50 transition-colors">
                    <div className="bg-secondary/20 p-2 rounded-full">
                      <IconComponent className="h-5 w-5 text-forest" />
                    </div>
                    <div>
                      <div className="font-medium text-forest">{segment.label}</div>
                      <div className="text-sm text-muted-foreground">{segment.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>

        {/* Global Reach Section */}
        <div className="mt-16">
          <Card className="p-8 bg-gradient-to-r from-forest to-forest-light text-white text-center">
            <Globe className="h-16 w-16 mx-auto mb-6 text-secondary" />
            <h3 className="text-2xl font-bold mb-4">Global Reach, Local Expertise</h3>
            <p className="text-cream mb-6 max-w-3xl mx-auto">
              With extensive experience in international trade and deep understanding of global market requirements, 
              we bridge the gap between Indian agricultural excellence and worldwide demand.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">15+</div>
                <div className="text-cream">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">50+</div>
                <div className="text-cream">Active Buyers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">100%</div>
                <div className="text-cream">Customer Satisfaction</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;