import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Instagram, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-secondary/20 text-forest hover:bg-secondary/30">
            Get In Touch
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-forest mb-4">
            Ready to Start Your Export Journey?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Connect with us today to discuss your requirements. Our export specialists are ready 
            to provide customized solutions for your business needs.
          </p>
        </div>

        <div className="flex justify-center gap-6">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 text-lg"
          >
            <a
              href="https://www.instagram.com/sidvinagro?utm_source=qr&igsh=MXRnMmF0ZTBvcGpraA=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="mr-2 h-6 w-6" />
              Follow on Instagram
            </a>
          </Button>

          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 text-lg"
          >
            <a
              href="https://wa.me/917400228611"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-6 w-6" />
              Chat on WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;