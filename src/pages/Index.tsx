
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
          <div className="md:col-span-1 space-y-6">
            <div className="bg-card rounded-xl shadow border p-5 transition-colors">
              <SkillsSection />
            </div>
            <div className="bg-card rounded-xl shadow border p-5 transition-colors">
              <PatentsAwardsSection />
            </div>
            <div className="bg-card rounded-xl shadow border p-5 transition-colors">
              <EducationSection />
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="rounded-xl bg-white/70 shadow border p-7 md:p-10 transition-colors">
              <ExperienceTimeline />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
