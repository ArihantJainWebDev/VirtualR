import Navbar from './components/navbar';
import HeroSection from './components/herosection';
import FeatureSection from './components/featuresection';
import WorkFlow from './components/workflow';
import Pricing from './components/pricing';
import Testimonials from './components/testimonials';
import Footer from './components/footer';

const App = () => {

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-12 px-6">
      <HeroSection />
      <FeatureSection />
      <WorkFlow />
      <Pricing />
      <Testimonials />
      <Footer />
      </div>
    </>
  );
};

export default App;
