
import { Github, Linkedin } from "lucide-react";

const profileImage =
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=facearea&w=256&h=256&facepad=2&q=80";

const ProfileHeader = () => {
  return (
    <header className="bg-white/90 backdrop-blur-sm rounded-xl border mb-8 p-6 md:p-8 shadow flex flex-col md:flex-row md:items-center md:justify-between transition">
      <div className="flex items-center gap-5">
        {/* Profile Image */}
        <img
          src={profileImage}
          alt="Sudeep SR"
          className="w-20 h-20 rounded-full object-cover border-2 border-primary shadow-lg ring-2 ring-primary/10 transition"
        />
        <div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 font-playfair text-primary">
            Sudeep SR
          </h1>
          <p className="text-base text-muted-foreground mb-1">
            Singapore | <span className="underline underline-offset-2">(+65) 94819862</span>
          </p>
          <a
            href="mailto:sudeeveekey@gmail.com"
            className="hover:underline text-base text-muted-foreground hover:text-primary/80 font-medium transition-colors mb-2 block"
          >
            sudeeveekey@gmail.com
          </a>
        </div>
      </div>
      <div className="flex flex-row md:flex-col items-center mt-4 md:mt-0 gap-3 md:gap-2 shrink-0">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
          className="bg-muted p-2 rounded-full hover:bg-primary/20 hover:scale-110 transition-all shadow border border-primary/10"
        >
          <Github className="w-5 h-5 text-primary" />
        </a>
        <a
          href="https://www.hackerrank.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="HackerRank"
          className="bg-muted p-2 rounded-full hover:bg-primary/20 hover:scale-110 transition-all shadow border border-primary/10"
        >
          {/* Using Linkedin icon as placeholder for HackerRank */}
          <Linkedin className="w-5 h-5 text-green-600" />
        </a>
      </div>
    </header>
  );
};

export default ProfileHeader;
