import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, ExternalLink, Terminal, Code2, Zap, Cpu, Database, Cloud, Smartphone } from "lucide-react";
import { TechGrid } from "@/components/TechGrid";
import { MatrixRain } from "@/components/MatrixRain";

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState("");
  const heroRef = useRef<HTMLDivElement>(null);

  const fullText = "Hi I'm Afrid - Flutter Engineer";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
    });

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: "Flutter", icon: Smartphone, color: "from-emerald-400 to-cyan-400" },
    { name: "FlutterFlow", icon: Smartphone, color: "from-cyan-400 to-blue-400" },
    { name: "Dart", icon: Code2, color: "from-cyan-400 to-blue-400" },
    { name: "React", icon: Code2, color: "from-cyan-400 to-blue-400" },
    { name: "Javascript", icon: Code2, color: "from-cyan-400 to-blue-400" },
    { name: "HTML/CSS", icon: Code2, color: "from-cyan-400 to-blue-400" },
    { name: "Firebase", icon: Database, color: "from-blue-400 to-indigo-400" },
    { name: "Supabase", icon: Database, color: "from-yellow-400 to-orange-400" },
    { name: "GCP", icon: Cloud, color: "from-yellow-400 to-orange-400" },
    { name: "Edge function", icon: Cloud, color: "from-yellow-400 to-orange-400" },
    { name: "Cloud function", icon: Cloud, color: "from-yellow-400 to-orange-400" },
    { name: "API Integration", icon: Cloud, color: "from-emerald-400 to-teal-400" },
    { name: "Postman", icon: Code2, color: "from-cyan-400 to-blue-400" },
    { name: "Crashlytics", icon: Cloud, color: "from-yellow-400 to-orange-400" },
    { name: "Testflight", icon: Cloud, color: "from-yellow-400 to-orange-400" },
    { name: "Playstore deployment", icon: Cloud, color: "from-yellow-400 to-orange-400" },
    { name: "Appstore deploymnet", icon: Cloud, color: "from-yellow-400 to-orange-400" },
  ];

  const codeSnippet = `
class FlutterEngineer {
  final skills = [
    'Flutter', 'Dart', 
    'FlutterFlow', 'Supabase', 'Firebase'
  ];
  
  void build() => createAmazingApps();
}`;

  const projects = [
{
  id: "01",
  title: "Fintech App",
  tech: "Flutter • FlutterFlow • API",
  description:
    "Built a high-scale investment and banking application using Flutter and FlutterFlow, featuring secure transactions, dashboards, and real-time financial APIs.",
  metrics: "5M+ users",
},
{
  id: "02",
  title: "AI Chat Platform",
  tech: "FlutterFlow • OpenAI • DALLE",
  description:
    "Developed an AI-powered conversational platform with GPT chat, smart prompts, and DALLE image generation for a creative outfit-planning application.",
},
{
  id: "03",
  title: "Social App",
  tech: "Flutter • FlutterFlow • Supabase • Google Maps",
  description:
    "Created a full-stack social networking app with real-time feeds, user connections, and integrated mapping features for a US-based startup.",
},
{
  id: "04",
  title: "Dating App",
  tech: "Flutter • FlutterFlow • Supabase • Edge Functions",
  description:
    "Built a modern group dating application with a custom matching algorithm, secure auth, chat, and real-time features.",
},
{
  id: "05",
  title: "Ride Hailing App",
  tech: "Flutter • FlutterFlow • API • Google Maps SDK",
  description:
    "Redesigned and modernized a large-scale ride-hailing platform with improved UI/UX, optimized performance, and updated mapping workflows.",
},
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <MatrixRain />
      <TechGrid />
      
      {/* Custom Cursor Effect */}
      <div
        className="fixed w-8 h-8 border-2 border-primary rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          left: `${mousePosition.x - 16}px`,
          top: `${mousePosition.y - 16}px`,
          transition: "all 0.1s ease",
        }}
      />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 tech-grid">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center space-y-8">
            {/* Terminal Header */}
            {/* <div className="inline-block">
              <div className="bg-secondary/50 backdrop-blur-sm border border-primary/30 rounded-lg p-4 text-left font-mono text-sm">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-2 text-muted-foreground">terminal.sh</span>
                </div>
                <div className="text-primary">
                  <span className="text-muted-foreground">$</span> whoami
                  <br />
                  <span className="text-foreground">{typedText}</span>
                  <span className="animate-pulse">|</span>
                </div>
              </div>
            </div> */}

            {/* <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold glitch">
              <span className="text-neon block mb-4">FLUTTER</span>
              <span className="text-gradient-tech">ENGINEER</span>
            </h1> */}

            {/* updated landing design */}

            <section className="w-full py-20 flex flex-col items-center text-center">
              {/* Profile Image (commented out for now) */}
              {/*
              <div className="w-40 h-40 rounded-full border-4 border-pink-300 p-1 shadow-xl">
                <img 
                  src="/your-image-here.png" 
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              */}
            
              {/* Placeholder Circle */}
              {/* <div className="w-40 h-40 rounded-full border-4 border-pink-300 bg-[#2d242c] flex items-center justify-center text-pink-200 text-xl font-semibold opacity-60">
                {/* Placeholder text */}
             
              {/* </div>  */}
            
            
              {/* Main Heading */}
              <h1 className="mt-10 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Hi, I'm 
                <span className="text-gradient-tech"> Ahmed Afrid</span>              
                <span className="mx-3 text-white">—</span>
                <span className="text-white">Flutter Engineer</span>
              </h1>
            
            </section>

            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Building <span className="text-primary font-semibold">high-performance</span> mobile applications
              with <span className="text-primary font-semibold">pixel-perfect</span> design
            </p>

            {/* Animated Stats */}
            <div className="flex flex-wrap gap-8 justify-center pt-8">
            {[
              { value: "3+", label: "YEARS XP" },
              { value: "10+", label: "PROJECTS" },
            ].map((stat, i) => (
              <div key={i} className="text-center reveal stagger-1">
                
                {/* Dark box with glow */}
                <div className="
                  bg-black/60 
                  px-6 py-3 
                  rounded-md 
                  shadow-[0_0_25px_5px_rgba(0,255,180,0.3)] 
                  backdrop-blur-sm
                  inline-block
                ">
                  <div className="text-4xl font-bold text-neon">
                    {stat.value}
                  </div>
                </div>
          
                {/* Label */}
                <div className="text-sm text-muted-foreground uppercase tracking-wider mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

            <div className="flex flex-wrap gap-4 justify-center pt-8">
              <a href="#work">
              <Button
                size="lg"
                className="relative group overflow-hidden bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(52,211,153,0.5)]"
              >
                <span className="relative z-10 flex items-center">
                  <Terminal className="mr-2 h-5 w-5" />
                  View Projects
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </Button>
              </a>
              <a href="#contact">
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact
              </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
          </div>
        </div> */}
      </section>

      {/* Code Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
                <Terminal className="w-3 h-3 mr-1" />
                Developer Profile
              </Badge>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Clean Code,
                <br />
                <span className="text-gradient-tech">Beautiful Apps</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Specializing in Flutter and FlutterFlow development with a focus on
                scalable architecture, smooth animations, and exceptional user experience.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full pulse-glow" />
                  <span className="text-foreground">Cross-platform expertise</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full pulse-glow" />
                  <span className="text-foreground">Performance optimization</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full pulse-glow" />
                  <span className="text-foreground">Modern UI/UX patterns</span>
                </div>
              </div>
            </div>

            <div className="reveal stagger-2">
              <div className="code-block scan-line">
                <pre className="text-primary/90">
                  <code>{codeSnippet}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Grid */}

      <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
  <div className="max-w-5xl mx-auto">
    <div className="text-center mb-10">
      <h2 className="text-3xl sm:text-4xl font-bold mb-3">
        Tech <span className="text-gradient-tech">Stack</span>
      </h2>
      <p className="text-muted-foreground text-base sm:text-lg">
        Cutting-edge technologies for modern applications
      </p>
    </div>

    {/* chips */}
    <div className="flex flex-wrap gap-3 justify-center">
      {skills.map((skill) => (
        <div key={skill} className="tech-pill">
          {skill}
        </div>
      ))}
    </div>
  </div>
</section>

      
      {/* <section className="py-20 px-4 sm:px-6 lg:px-8 relative tech-grid-animated">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-16 reveal">
      <h2 className="text-4xl sm:text-5xl font-bold mb-4">
        Tech <span className="text-gradient-tech">Stack</span>
      </h2>
      <p className="text-muted-foreground text-lg">
        Cutting-edge technologies for modern applications
      </p>
    </div>

    {/* centered grid like your design */}
    {/* <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
      {skills.map((skill, index) => {
        const Icon = skill.icon;
        return (
          <Card
            key={skill.name}
            className={`tech-card w-full max-w-sm p-6 sm:p-8 reveal stagger-${
              index + 1
            } group cursor-pointer flex flex-col justify-between`}
          >
            {/* icon + top area */}
            {/* <div className="mb-6">
              <div
                className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${
                  skill.color
                } p-[3px] mb-4 float-slow`}
              >
                <div className="w-full h-full bg-background rounded-xl flex items-center justify-center">
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                </div>
              </div>

              <h3 className="tech-title group-hover:text-primary transition-colors">
                {skill.name}
              </h3>
            </div>

            {/* bottom accent line */}
            {/* <div className="h-px w-1/4 bg-gradient-to-r from-primary/80 to-cyan-400/80 group-hover:w-3/4 transition-all duration-500" />
          </Card>
        );
      })}
    </div>
  </div> */} */}
{/* </section> */} */} */}

      {/* Projects */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative" id="work">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Featured <span className="text-gradient-tech">Work</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Production-ready applications at scale
            </p>
          </div>

          <div className="space-y-6">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className={`tech-card p-8 reveal stagger-${index + 1} group cursor-pointer`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  <div className="text-6xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                    {project.id}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-mono mb-3">
                      {project.tech}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  {project.metrics && (
                      <div className="text-right">
                        <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">
                          {project.metrics}
                        </Badge> 
                      </div>
                    )}

                        {/* <Button
                      variant="ghost"
                      size="sm"
                      className="group-hover:text-primary group-hover:translate-x-2 transition-all"
                    >
                      View <ExternalLink className="ml-2 w-4 h-4" />
                    </Button> */}
         
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative" id="contact">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10 reveal">
          <Terminal className="w-16 h-16 text-primary mx-auto mb-8 float-slow" />
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Let's Build Something
            <br />
            <span className="text-gradient-tech">Extraordinary</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Available for freelance projects and full-time opportunities
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a href="mailto:ahmedafridwork@gmail.com" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_30px_rgba(52,211,153,0.5)] hover:shadow-[0_0_50px_rgba(52,211,153,0.7)] transition-all"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            </a>
            <a href="https://github.com/ahmedafrid" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary/10 hover:text-white"
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
          </a>
            <a href="https://www.linkedin.com/in/ahmed-afrid-3433841a4" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary/10 hover:text-white "
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-primary/20">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* <div className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">{'>'}</span> Built with React + Vite + Tailwind
          </div> */}
          <div className="font-mono text-sm text-muted-foreground text-center">
            © 2025 <span className="text-primary">Ahmed Afrid</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
