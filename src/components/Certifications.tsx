import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      name: "FSSAI Certified",
      description: "Food Safety and Standards Authority of India - Ensures compliance with food safety regulations",
      icon: "🛡️"
    },
    {
      name: "Organic Certified",
      description: "Organic certification for select products - Certified by international organic bodies",
      icon: "🌿"
    },
    {
      name: "Export Ready",
      description: "Approved for export to all major international markets and compliant with local regulations",
      icon: "📦"
    }
  ];

  const standards = [
    { category: "Food Safety", items: ["HACCP", "Allergen Management", "Traceability System"] },
    { category: "Quality Control", items: ["100% Inspection", "Lab Testing", "Consistency Checks"] },
    { category: "Environmental", items: ["Sustainable Practices", "Eco-friendly Packaging", "Carbon Neutral"] },
    { category: "Export Compliance", items: ["FDA Compliant", "EU Standards", "Halal Ready"] }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-cream/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-secondary/20 text-forest hover:bg-secondary/30 text-base px-6 py-2">
            ✅ Certifications & Standards
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-forest mb-6">
            International Quality Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our commitment to excellence is backed by internationally recognized certifications and rigorous quality standards.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <Card key={index} className="p-6 bg-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-t-4 border-secondary">
              <div className="text-4xl mb-4">{cert.icon}</div>
              <h3 className="text-xl font-bold text-forest mb-2">{cert.name}</h3>
              <p className="text-muted-foreground">{cert.description}</p>
              <div className="mt-4 pt-4 border-t border-secondary/20">
                <div className="flex items-center text-sm text-secondary font-semibold">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Verified & Current
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Standards Overview */}
        <div className="bg-gradient-to-r from-forest to-forest-light text-white p-12 rounded-2xl mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Our Quality Standards</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {standards.map((standard, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <h4 className="font-bold text-secondary mb-4">{standard.category}</h4>
                <ul className="space-y-2">
                  {standard.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="text-secondary mr-2">✓</span>
                      <span className="text-white/90 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Statement */}
        <Card className="p-8 bg-cream/30 border-2 border-secondary/30">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-forest mb-4">Why Our Certifications Matter</h3>
            <p className="text-muted-foreground mb-4">
              Every certification represents our commitment to delivering safe, consistent, and high-quality coconut products. Our rigorous testing and quality assurance processes ensure that every shipment meets or exceeds international standards.
            </p>
            <p className="text-muted-foreground">
              We invest continuously in training, infrastructure, and technology to maintain these standards and stay ahead of evolving international regulations. Your confidence in our products is backed by verified, audited certifications.
            </p>
          </div>
        </Card>

        {/* Download Certificates CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-6">
            All certificates are available upon request
          </p>
          <button className="inline-flex items-center px-8 py-3 bg-secondary text-forest font-semibold rounded-lg hover:bg-secondary/90 transition-colors duration-200">
            📄 Request Certificates
          </button>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
