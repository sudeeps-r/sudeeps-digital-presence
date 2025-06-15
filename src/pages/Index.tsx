
import ProfileHeader from "../components/ProfileHeader";
import ExperienceTimeline from "../components/ExperienceTimeline";
import SkillsSection from "../components/SkillsSection";
import PatentsAwardsSection from "../components/PatentsAwardsSection";
import EducationSection from "../components/EducationSection";

const Index = () => {
  return (
    <div className="font-display min-h-screen bg-background text-foreground flex flex-col items-center animate-fade-in">
      <div className="w-full max-w-5xl px-4 py-8">
        <ProfileHeader />
        <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <SkillsSection />
            <PatentsAwardsSection className="mt-8" />
            <EducationSection className="mt-8" />
          </div>
          <div className="md:col-span-2">
            <ExperienceTimeline />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
