
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CallMeForm from "@/components/CallMeForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-maranja-beige">
      <Header />
      <main>
        <Hero />
        <Services />
        <CallMeForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
