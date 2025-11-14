import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, ExternalLink, Code2, Smartphone, Sparkles } from "lucide-react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { name: "Flutter", level: 95 },
    { name: "FlutterFlow", level: 90 },
    { name: "Dart", level: 90 },
    { name: "Firebase", level: 85 },
    { name: "API Integration", level: 88 },
    { name: "UI/UX Design", level: 82 },
  ];

  const projects = [
    {
      title: "E-Commerce Mobile App",
      description: "Full-featured shopping app built with Flutter, featuring real-time inventory, payment integration, and elegant animations.",
      tags: ["Flutter", "Firebase", "Stripe"],
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "FlutterFlow SaaS Platform",
      description: "No-code platform extension with custom components and advanced integrations for enterprise clients.",
      tags: ["FlutterFlow", "API", "Cloud Functions"],
      gradient: "from-teal-500 to-emerald-500",
    },
    {
      title: "Healthcare Dashboard",
      description: "Patient management system with real-time data visualization and secure authentication.",
      tags: ["Flutter", "Charts", "Security"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Social Media Clone",
      description: "Instagram-like application with stories, posts, and real-time messaging functionality.",
      tags: ["Flutter", "WebSocket", "Media"],
      gradient: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-primary overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
        </div>

        <div className={`relative z-10 text-center max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-6 animate-fade-in">
            <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium">
              <Sparkles className="w-4 h-4 mr-2 inline" />
              Available for Projects
            </Badge>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
            Flutter & FlutterFlow
            <br />
            <span className="text-gradient">Software Engineer</span>
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-slide-up stagger-1">
            Crafting beautiful, high-performance mobile applications with cutting-edge technology and pixel-perfect design.
          </p>

          <div className="flex flex-wrap gap-4 justify-center animate-slide-up stagger-2">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow hover:shadow-glow-hover transition-all">
              <Mail className="mr-2 h-5 w-5" />
              Get in Touch
            </Button>
            <Button size="lg" variant="secondary" className="hover:bg-secondary/80 transition-all">
              <Code2 className="mr-2 h-5 w-5" />
              View Projects
            </Button>
          </div>

          <div className="flex gap-6 justify-center mt-8 animate-fade-in stagger-3">
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Passionate software engineer with expertise in Flutter and FlutterFlow, dedicated to building exceptional mobile experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Card className="p-8 bg-gradient-card border-border/50 card-glow">
              <Smartphone className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Mobile First</h3>
              <p className="text-muted-foreground leading-relaxed">
                With years of experience in mobile development, I specialize in creating responsive, intuitive applications that users love. 
                Every project is approached with meticulous attention to detail and performance optimization.
              </p>
            </Card>

            <Card className="p-8 bg-gradient-card border-border/50 card-glow">
              <Code2 className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Clean Code</h3>
              <p className="text-muted-foreground leading-relaxed">
                I believe in writing maintainable, scalable code that stands the test of time. Following best practices and modern 
                architecture patterns ensures projects are built for long-term success.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Technical <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Proficient in modern technologies and frameworks
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <Card key={skill.name} className="p-6 bg-gradient-card border-border/50 card-glow" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-semibold text-lg">{skill.name}</h4>
                  <span className="text-primary font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2.5 overflow-hidden">
                  <div 
                    className="bg-gradient-accent h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              A selection of recent work and achievements
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={project.title} className="group relative overflow-hidden bg-gradient-card border-border/50 card-glow" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="p-6 relative">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button variant="ghost" size="sm" className="group-hover:text-primary transition-colors">
                    View Project <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Let's Work <span className="text-gradient">Together</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Have a project in mind? I'm always open to discussing new opportunities and collaborations.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow hover:shadow-glow-hover transition-all">
              <Mail className="mr-2 h-5 w-5" />
              Email Me
            </Button>
            <Button size="lg" variant="secondary" className="hover:bg-secondary/80 transition-all">
              <Linkedin className="mr-2 h-5 w-5" />
              Connect on LinkedIn
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border/50">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>© 2024 Flutter Developer. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
