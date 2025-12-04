import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Phone, 
  Mail, 
  Globe, 
  MapPin,
  Award,
  Leaf,
  ArrowUp
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const certifications = ["FSSAI", "APEDA", "IEC", "GST", "RCMC"];
  
  return (
    <footer className="bg-forest text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="text-2xl font-bold">SIDVIN</div>
              <div className="text-xl font-semibold text-secondary">AGRO</div>
            </div>
            <p className="text-cream mb-6 leading-relaxed">
              Leading Indian exporter of premium coconut-based products and authentic whole spices. 
              Trusted by buyers across the Middle East, Europe, and Asia for quality, consistency, and reliability.
            </p>
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="h-5 w-5 text-secondary" />
              <span className="text-secondary font-medium">Harvesting Flavour, Shipping Freshness</span>
            </div>
            
            {/* Certifications */}
            <div className="flex flex-wrap gap-2">
              {certifications.map((cert, index) => (
                <Badge 
                  key={index} 
                  className="bg-secondary/20 text-secondary hover:bg-secondary/30"
                >
                  {cert}
                </Badge>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-cream hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-cream hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('products')}
                  className="text-cream hover:text-white transition-colors"
                >
                  Our Products
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('why-choose-us')}
                  className="text-cream hover:text-white transition-colors"
                >
                  Why Choose Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-cream hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-medium">+91 7400228611</div>
                  <div className="text-cream text-sm">Available 24/7</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-medium">sidvinagrofresh@gmail.com</div>
                  <div className="text-cream text-sm">Business inquiries</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Globe className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-medium">www.sidvinagro.com</div>
                  <div className="text-cream text-sm">Visit our website</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-medium">Mumbai, India</div>
                  <div className="text-cream text-sm">Strategic port location</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Categories */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-secondary mb-3">Coconut Products</h4>
              <div className="text-sm text-cream">
                Semi-Husked Coconuts • Desiccated Coconut Powder • Virgin Coconut Oil • 
                Coconut Milk • Coconut Flour & Chips • Coconut Sugar
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-secondary mb-3">Indian Spices</h4>
              <div className="text-sm text-cream">
                Black Pepper • Green Cardamom • Cloves • Cumin • Coriander • Turmeric • 
                Red Chillies • Star Anise • Mustard • Bay Leaves • Hing • Ginger
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-white/20" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4 text-sm text-cream">
            <div className="flex items-center space-x-2">
              <Award className="h-4 w-4 text-secondary" />
              <span>Premium Quality Assured</span>
            </div>
            <span>•</span>
            <span>© 2024 Sidvin Agro. All rights reserved.</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="text-sm text-cream">
              Prathamesh Vinayak Pilankar - CEO & Founder
            </div>
            <button
              onClick={scrollToTop}
              className="bg-secondary/20 hover:bg-secondary/30 p-2 rounded-full transition-colors"
            >
              <ArrowUp className="h-4 w-4 text-secondary" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;