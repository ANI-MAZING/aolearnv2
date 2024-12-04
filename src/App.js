import HeroSection from './sections/HeroSection/HeroSection';
import ClientReviewSection from './sections/ClientReviewSection/ClientReviewSection';
import FAQSection from './sections/FAQSection/FAQSection';
import Navbar from './components/Navbar/Navbar';
import FeaturesSection from './sections/FeaturesSection/FeaturesSection';
import PricingSection from './sections/PricingSection/PricingSection';
import ContactSection from './sections/ContactSection/ContactSection';
import Footer from './components/Footer/Footer';
import TrustedBySection from './sections/TrustedBySection/TrustedBySection';
import Cta from './sections/Cta/Cta';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TrustedBySection />
      <FeaturesSection />
      <PricingSection />
      <ClientReviewSection />
      <FAQSection />
      <Cta/>
      {/* <ContactSection /> */}
      <Footer />
    </>
  );
}

export default App;