import ArticleSection from "@/components/Homepage/ArticleSection";
import HeroSection from "@/components/Homepage/HeroSection";
import PersonalDetailsSection from "@/components/Homepage/PersonalDetailsSection";
import ProjectSection from "@/components/Homepage/ProjectSection";
import VoicesOfCommunitySection from "@/components/Homepage/VoicesOfCommunitySection";

const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <ProjectSection />
      <PersonalDetailsSection />
      <ArticleSection />
      <VoicesOfCommunitySection />
    </div>
  );
};

export default Homepage;
