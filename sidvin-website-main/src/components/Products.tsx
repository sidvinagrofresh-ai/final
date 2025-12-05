import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import coconutProducts from "@/assets/image2 (1).jpeg";

const Products = () => {
  const coconutItems = [
    "Semi-Husked Coconuts",
    "Desiccated Coconut Powder", 
    "Virgin Coconut Oil",
    "Coconut Milk (12%, 17%, 22%)",
    "Coconut Flour & Chips",
    "Coconut Sugar"
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-cream/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-secondary/20 text-forest hover:bg-secondary/30 text-base px-6 py-2">
            ✨ Our Premium Range
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-forest mb-6">
            Export-Grade Coconut Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Premium coconut-based products from India's finest coconut farms, 
            tailored for international markets with world-class quality standards.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Coconut Products */}
          <Card className="overflow-hidden bg-white shadow-2xl border-0 hover:shadow-3xl transition-shadow duration-300">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative h-full min-h-[400px]">
                <img
                  src={coconutProducts}
                  alt="Coconut Products"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-forest/40 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Premium Coconut Products
                  </h3>
                  <Badge className="bg-secondary text-forest hover:bg-secondary/90 text-base px-4 py-2">
                    🌴 100% Natural & Fresh
                  </Badge>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-white to-cream/20">
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Fresh, safe, and tailored coconut products from India's finest coconut farms, 
                  processed with modern techniques to maintain natural goodness and nutritional value.
                </p>
                
                <h4 className="text-xl font-semibold text-forest mb-6">Our Product Range:</h4>
                
                <div className="grid grid-cols-1 gap-4 mb-8">
                  {coconutItems.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-secondary/10 transition-colors duration-200">
                      <div className="w-8 h-8 bg-gradient-to-br from-secondary to-gold rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-forest font-bold text-sm">✓</span>
                      </div>
                      <span className="text-base text-foreground font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="p-6 bg-gradient-to-r from-forest/10 to-secondary/10 rounded-xl border-l-4 border-secondary">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-forest rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">📦</span>
                    </div>
                    <div>
                      <p className="font-semibold text-forest mb-1">Flexible Packaging Options</p>
                      <p className="text-sm text-muted-foreground">Available in various packaging sizes tailored for export requirements</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Quality Assurance */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-forest via-forest-light to-forest text-white p-12 rounded-3xl shadow-2xl relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">Quality You Can Trust</h3>
                <p className="text-cream/90 text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
                  Every product undergoes rigorous quality control from farm to port. 
                  Our integrated supply chain ensures freshness, safety, and consistency in every shipment.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-2xl">🔍</span>
                  </div>
                  <h4 className="text-lg font-semibold text-secondary mb-2 text-center">Farm to Port Quality Control</h4>
                  <p className="text-cream/80 text-sm text-center">Comprehensive monitoring at every stage</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-2xl">🚚</span>
                  </div>
                  <h4 className="text-lg font-semibold text-secondary mb-2 text-center">Strong Logistics Network</h4>
                  <p className="text-cream/80 text-sm text-center">Reliable and timely global delivery</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h4 className="text-lg font-semibold text-secondary mb-2 text-center">Transparent Business Practices</h4>
                  <p className="text-cream/80 text-sm text-center">Building trust through honesty</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;