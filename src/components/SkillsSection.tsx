
const skills = [
  { label: "Android", category: "Platforms" },
  { label: "Kotlin", category: "Platforms" },
  { label: "Coroutines", category: "Platforms" },
  { label: "Flow", category: "Platforms" },
  { label: "Dagger 2", category: "Platforms" },
  { label: "Flutter", category: "Platforms" },
  { label: "React Native", category: "Platforms" },
  { label: "CI/CD", category: "DevOps & Cloud" },
  { label: "Docker", category: "DevOps & Cloud" },
  { label: "Kubernetes", category: "DevOps & Cloud" },
  { label: "AWS", category: "DevOps & Cloud" },
  { label: "Azure", category: "DevOps & Cloud" },
  { label: "Modularization", category: "Architecture" },
  { label: "Microservices", category: "Architecture" },
  { label: "Event-driven architectures", category: "Architecture" },
  { label: "RxJava", category: "Tools & Frameworks" },
  { label: "Redux", category: "Tools & Frameworks" },
  { label: "TypeScript", category: "Tools & Frameworks" },
  { label: "GraphQL", category: "Tools & Frameworks" },
  { label: "Firebase", category: "Tools & Frameworks" }
];

const categories = [
  "Platforms",
  "DevOps & Cloud",
  "Architecture",
  "Tools & Frameworks",
];

interface SkillsSectionProps {
  className?: string;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ className }) => {
  return (
    <section className={className}>
      <h2 className="text-lg font-semibold mb-3 text-primary">Technical Skills</h2>
      <div className="space-y-4">
        {categories.map(cat => (
          <div key={cat}>
            <h3 className="text-sm font-bold text-muted-foreground mb-1">{cat}</h3>
            <div className="flex flex-wrap gap-2">
              {skills.filter(s => s.category === cat).map(skill => (
                <span
                  key={skill.label}
                  className="bg-primary/10 text-primary rounded px-2 py-0.5 text-xs font-medium"
                >
                  {skill.label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
