import Header from "@/components/Header";
import SEO from "@/components/SEO";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";
import Certifications from "@/components/Certifications";
import FAQ from "@/components/FAQ";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO />
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Testimonials />
        <Certifications />
        <FAQ />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
