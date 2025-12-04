import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ahmed Al-Mansouri",
      company: "Premium Exports LLC, Dubai",
      text: "Sidvin Agro has been our trusted partner for 3 years. Their Virgin Coconut Oil quality is exceptional and consistency is unmatched. Highly recommended!",
      rating: 5
    },
    {
      name: "Marie Dubois",
      company: "Organic Foods France",
      text: "Professional service, reliable delivery, and competitive pricing. Their desiccated coconut powder is perfect for our bakery products.",
      rating: 5
    },
    {
      name: "Rashid Ibrahim",
      company: "Gulf Trading Co., Saudi Arabia",
      text: "Best coconut milk supplier we've worked with. Quality certifications and food safety standards are top-notch. Partnership for 5+ years!",
      rating: 5
    },
    {
      name: "Emma Wilson",
      company: "Health Foods Europe",
      text: "Outstanding communication and support. Their organic coconut sugar is perfect for our health products line.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-cream/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-forest mb-4">
            ⭐ What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Trusted by importers and distributors across 15+ countries for consistent quality and reliable service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-secondary">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
              
              <div className="pt-4 border-t">
                <p className="font-semibold text-forest">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-4xl font-bold text-forest mb-2">50+</div>
            <p className="text-muted-foreground">Happy Clients</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-4xl font-bold text-secondary mb-2">15+</div>
            <p className="text-muted-foreground">Countries Served</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-4xl font-bold text-forest mb-2">5+</div>
            <p className="text-muted-foreground">Certifications</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-4xl font-bold text-secondary mb-2">100%</div>
            <p className="text-muted-foreground">Quality Guaranteed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
