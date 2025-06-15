
const experience = [
  {
    title: "Vice President, Engineering",
    company: "OCBC Bank, Singapore",
    duration: "July 2022 - Present",
    responsibilities: [
      "Spearheading digital banking transformation across multiple platforms and geographies.",
      "Led a multi-year migration initiative, enhancing system scalability and resilience.",
      "Collaborated with DevOps teams to optimize CI/CD pipelines, reducing build times from 3 hours to ~30 minutes.",
      "Defined and implemented multi-modular architecture, improving system maintainability and feature rollout efficiency.",
      "Stakeholder management with C-level executives, ensuring alignment between technology and business strategy."
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "Grab Holdings Inc, Singapore",
    duration: "August 2019 - July 2022",
    responsibilities: [
      "Led the re-architecture of the Loyalty platform, significantly reducing build times and increasing system stability.",
      "Built a scalable Flutter framework, accelerating feature delivery across Grab’s Super App.",
      "Developed an advanced QR Code scanning system with customizable user branding.",
      "Championed A/B testing strategies, successfully rolling out features to regional markets.",
      "Enhanced unit/UI test coverage, improving overall app stability and maintainability."
    ],
  },
  {
    title: "Lead Engineer",
    company: "Reliance Jio, India",
    duration: "September 2016 - July 2019",
    responsibilities: [
      "Managed and mentored a team of 7 engineers (including offshore teams), driving a high-performance engineering culture.",
      "Led front-end engineering for Jio Payments, delivering secure and scalable solutions.",
      "Developed and launched multiple SDKs for encryption and secure financial transactions.",
      "Strengthened platform stability and reliability, ensuring seamless payment experiences for millions of users."
    ],
  },
  {
    title: "Technical Lead",
    company: "Info Edge (Naukri), India",
    duration: "September 2015 - September 2016",
    responsibilities: [
      "Led a team of four developers, architecting and optimizing the Naukri Android app.",
      "Achieved Google Play Editors’ Choice recognition for delivering a best-in-class user experience.",
      "Enhanced crash-free user rate to 99.5%, implementing engineering best practices and stability improvements."
    ],
  },
  {
    title: "Senior Associate",
    company: "Accenture, India",
    duration: "July 2015 - September 2015",
    responsibilities: [
      "Worked in the Digital Innovation Lab, building prototypes for banking and insurance clients.",
      "Collaborated with pre-sales teams, driving customer onboarding for digital transformation projects."
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "RapidValue Solutions, India",
    duration: "January 2011 - July 2015",
    responsibilities: [
      "Delivered multiple enterprise mobility solutions for global clients.",
      "Led the implementation of engineering best practices, improving team productivity.",
      "Successfully launched high-traffic applications on Google Play Store."
    ],
  }
];

const ExperienceTimeline = () => {
  return (
    <section>
      <h2 className="text-2xl font-playfair font-bold mb-4 text-primary">Professional Experience</h2>
      <ol className="relative border-l-2 border-primary/30 pl-8">
        {experience.map((role, idx) => (
          <li key={role.title + role.company} className="mb-10 last:mb-0 relative">
            {/* Timeline marker with glow */}
            <span className="absolute -left-6 top-2.5 flex items-center justify-center">
              <span className="w-4 h-4 bg-primary border-2 border-white shadow-lg rounded-full animate-pulse" />
              <span className="absolute w-8 h-8 bg-primary/10 rounded-full -z-10" />
            </span>
            <span className="text-xs font-semibold text-primary tracking-wide bg-primary/10 px-2 py-0.5 rounded">
              {role.duration}
            </span>
            <h3 className="mt-2 text-lg md:text-xl font-bold font-playfair text-foreground">{role.title}</h3>
            <p className="text-base font-medium text-muted-foreground mb-1">{role.company}</p>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              {role.responsibilities.map((res, i) => (
                <li key={i} className="text-sm">{res}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default ExperienceTimeline;
