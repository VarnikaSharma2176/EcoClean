import PublicLayout from "../../components/layout/PublicLayout";
import HeroSection from "../../components/home/HeroSection";
import StatsSection from "../../components/home/StatsSection";
import FeaturesSection from "../../components/home/FeaturesSection";

function HomePage() {
  return (
    <PublicLayout>
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
    </PublicLayout>
  );
}

export default HomePage;