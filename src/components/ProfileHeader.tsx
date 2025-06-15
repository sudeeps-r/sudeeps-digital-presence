
import { Github, Linkedin } from "lucide-react";

const ProfileHeader = () => {
  return (
    <header className="bg-white/90 backdrop-blur-sm rounded-xl border mb-8 p-6 md:p-8 shadow flex flex-col md:flex-row md:items-center md:justify-between transition">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Sudeep SR</h1>
        <p className="text-base text-muted-foreground mb-2">
          Singapore | <span className="underline underline-offset-2">(+65) 94819862</span>
        </p>
        <p className="text-base text-muted-foreground mb-4">
          <a href="mailto:sudeeveekey@gmail.com" className="hover:underline hover:text-primary transition-colors">
            sudeeveekey@gmail.com
          </a>
        </p>
        <p className="max-w-xl text-[1.09rem] text-foreground mb-2">
          Technology leader with over <span className="font-semibold">14+ years</span> of experience driving engineering excellence, architecting scalable solutions, and leading high-performing teams in digital banking, fintech, and super apps. Proven expertise in multi-modular architectures, DevOps, cloud platforms, and engineering best practices. Adept at optimizing processes, fostering innovation, and aligning technology strategies with business goals.
        </p>
      </div>
      <div className="flex items-center md:flex-col mt-4 md:mt-0 gap-4 md:gap-2 shrink-0">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-muted p-2 rounded-full hover:bg-primary/10 transition"
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href="https://www.hackerrank.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-muted p-2 rounded-full hover:bg-primary/10 transition"
          aria-label="HackerRank"
        >
          {/* Using Linkedin icon as placeholder for HackerRank */}
          <Linkedin className="w-5 h-5" />
        </a>
      </div>
    </header>
  );
};

export default ProfileHeader;
