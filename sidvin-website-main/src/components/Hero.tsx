import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Award, Globe2 } from "lucide-react";
import heroBackground from "@/assets/image1.jpeg";
import coconutSpicesHero from "@/assets/coconut-products.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-forest/90 via-forest/70 to-forest/50"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-gold/20 text-gold-light px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Globe2 className="h-4 w-4" />
              <span>Premium Export Quality</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Harvesting
              <span className="text-secondary block">Flavour,</span>
              Shipping Freshness
            </h1>
            
            <p className="text-lg md:text-xl text-cream mb-8 max-w-2xl">
              Leading <strong className="font-bold text-white">Indian exporter of premium coconut-based products</strong> — including Virgin Coconut Oil, Coconut Milk (12%, 17%, 22% fat), Organic & Conventional Coconut Sugar, Desiccated Coconut Powder (70–75% fat), and Tender Coconut Water.
              <br /><br />
              From farm to port, we ensure quality, consistency, and freshness, trusted by importers across the Middle East, Europe, Africa, and Asia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-forest font-semibold px-8"
                onClick={scrollToContact}
              >
                Get Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white bg-white/10 hover:bg-white hover:text-forest px-8"
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Products
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
              <div className="flex items-center space-x-3 justify-center sm:justify-start">
                <div className="bg-secondary/20 p-2 rounded-full">
                  <Leaf className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <div className="text-white font-medium">100% Natural</div>
                  <div className="text-cream text-sm">Farm Fresh Products</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 justify-center sm:justify-start">
                <div className="bg-secondary/20 p-2 rounded-full">
                  <Award className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <div className="text-white font-medium">Certified</div>
                  <div className="text-cream text-sm">FSSAI, APEDA, IEC</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 justify-center sm:justify-start">
                <div className="bg-secondary/20 p-2 rounded-full">
                  <Globe2 className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <div className="text-white font-medium">Global Reach</div>
                  <div className="text-cream text-sm">Worldwide Export</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <img
                src={coconutSpicesHero}
                alt="Premium Coconut and Spices"
                className="w-full h-auto rounded-xl"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary/30 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gold/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;