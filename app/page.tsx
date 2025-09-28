import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, ArrowUpRight, Gitlab } from "lucide-react"
import Link from "next/link";


export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-lg font-semibold">Julienne Mae Anito</div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <a href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">
                Experience
              </a>
              <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Name and Navigation */}
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold mb-4 text-balance">Julienne Mae Anito</h1>
                <p className="text-xl text-primary mb-6">Full Stack Developer</p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  I build intelligent, cross-platform applications that combine robust engineering with AI automation.
                </p>
              </div>

              {/* Navigation Links */}
              <div className="space-y-4">
                <a
                  href="#about"
                  className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <div className="w-8 h-px bg-muted-foreground group-hover:bg-foreground group-hover:w-16 transition-all"></div>
                  <span className="uppercase text-sm font-medium tracking-wider">About</span>
                </a>
                <a
                  href="#experience"
                  className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <div className="w-8 h-px bg-muted-foreground group-hover:bg-foreground group-hover:w-16 transition-all"></div>
                  <span className="uppercase text-sm font-medium tracking-wider">Experience</span>
                </a>
                <a
                  href="#projects"
                  className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <div className="w-8 h-px bg-muted-foreground group-hover:bg-foreground group-hover:w-16 transition-all"></div>
                  <span className="uppercase text-sm font-medium tracking-wider">Projects</span>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-6 pt-8">
                <a href="https://github.com/yen93"  target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://gitlab.com/anito.j.phcci" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Gitlab className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/julienne-mae-anito-088270259/" target="_blank"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="mailto:juliennemaeanito.de@gmail.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Right Column - About Content */}
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I'm a full-stack developer with over 3 years of experience building cross-platform applications for web, 
                desktop, and mobile. My core expertise is in .NET C# and ASP.NET Core, with additional experience in React, 
                React Native, and Qt/PyQt6. Beyond traditional development, I specialize in AI-powered solutions, building 
                intelligent agents that automate workflows, enhance customer support, and provide actionable insights. With 
                a strong foundation in system automation and data integration, I deliver end-to-end solutions that combine 
                robust engineering with cutting-edge AI.
              </p>
              <p>
                Currently, I'm a Full-Stack developer at{" "}
                <span className="text-primary font-medium">PHCCI Dumaguete</span>, specializing in accounting systems. 
                I contribute to the creation and maintenance of our internal company systems, ensuring our applications meet 
                industry standards and best practices.
              </p>
              <p>
                In the past, I've had the opportunity to develop multiple projects — from{" "}
                <span className="text-foreground">Desktop banking Modules</span> and{" "}
                <span className="text-foreground">Web apps</span> to{" "}
                <span className="text-foreground">AI powered APIs</span> and{" "}
                <span className="text-foreground">AI Agents</span>.{" "}
              </p>
              <p>
                In my spare time, I'm usually taking care of cats, singing, or songwriting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12">
            <Card className="p-8 hover:bg-card/50 transition-colors group">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="text-sm text-muted-foreground whitespace-nowrap">2024 — PRESENT</div>
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      <a href="https://www.phcci.coop/" target="_blank">
                        Fullstack Developer · PHCCI
                        <ArrowUpRight className="inline w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    As a Fullstack .NET Developer, I build and maintain enterprise-grade applications with a 
                    strong focus on the .NET ecosystem. My core expertise lies in C#, ASP.NET Core, and WPF, 
                    allowing me to deliver seamless solutions across both backend and desktop frontends.
                    On the backend, I design and implement RESTful APIs, integrate with external services, 
                    and ensure high performance and security. On the frontend, I develop rich desktop 
                    applications using WPF MVVM pattern, focusing on usability, responsiveness, and clean 
                    architecture.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">.NET</Badge>
                    <Badge variant="secondary">C#</Badge>
                    <Badge variant="secondary">WPF</Badge>
                    <Badge variant="secondary">MSSQL</Badge>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:bg-card/50 transition-colors group">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="text-sm text-muted-foreground whitespace-nowrap">2023 — 2024</div>
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      <a href="https://www.accenture.com/ph-en" target="_blank">
                        Associate Software Engineer · Accenture
                        <ArrowUpRight className="inline w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Specialized in SAP S/4HANA BW process chain monitoring and maintenance, ensuring smooth data 
                    flows and reliable reporting for enterprise systems. Responsible for daily monitoring, issue 
                    resolution, and performance optimization of BW process chains. Collaborated with cross-functional 
                    teams to troubleshoot system errors, maintain data integrity, and support business-critical 
                    operations.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">SAP4Hana</Badge>
                    <Badge variant="secondary">BILaunchpad</Badge>
                    <Badge variant="secondary">SAP BW</Badge>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:bg-card/50 transition-colors group">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="text-sm text-muted-foreground whitespace-nowrap">2021 — 2023</div>
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      <a href="https://wondersco.com/" target="_blank">
                        IT Support / IT Tech Writer · Wonders Technologies Corp
                        <ArrowUpRight className="inline w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Provided technical support for software and hardware issues, ensuring smooth day-to-day IT 
                    operations for end-users. Developed and maintained clear, user-friendly technical documentation, 
                    including guides, FAQs, and knowledge base articles, to improve troubleshooting efficiency and 
                    reduce support overhead. Collaborated with developers and IT teams to translate complex technical 
                    processes into accessible documentation for both technical and non-technical audiences.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Jira</Badge>
                    <Badge variant="secondary">Confluence</Badge>
                    <Badge variant="secondary">Asana</Badge>
                    <Badge variant="secondary">Troubleshooting</Badge>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:bg-card/50 transition-colors overflow-hidden">
              <div className="aspect-video bg-muted/50 relative overflow-hidden">
                <img src="Images/oneGaia.png" alt="AI Email Support Agent Screenshot" className="projectImage" />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <a href="https://onegaiaaisupportagentpage.netlify.app/" target="_blank">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">AI Email Support Agent</h3>
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Automates responses, gains valuable customer insights, and empowers support teams with a smart, intuitive desktop solution built for efficiency.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">
                    Google Gmail API
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Gemini API
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    ASP.Net Core
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    WPF 
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    .NET 8
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    C#
                  </Badge>                  
                  <Badge variant="outline" className="text-xs">
                    MS SQL
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    MVVM
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    MVC
                  </Badge>
                </div>
              </div>
            </Card>

            <Card className="group hover:bg-card/50 transition-colors overflow-hidden">
              <div className="aspect-video bg-muted/50 relative overflow-hidden">
                  <img src="Images/WebsiteAIAssistant.png" alt="AI Website Assistant" className="projectImage" />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <a href="https://webaichatbotbyyen.netlify.app/" target="_blank">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">AI Website Assistant</h3>
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Seamlessly integrates an AI chat assistant into company websites to instantly automate customer responses and boost team efficiency.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">
                    Gemini API
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    FireBase RTDB
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Render API Hosting 
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    ASP.Net Core
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    .NET 8
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    C#
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    MVC
                  </Badge>
                </div>
              </div>
            </Card>

            <Card className="group hover:bg-card/50 transition-colors overflow-hidden">
              <div className="aspect-video bg-muted/50 relative overflow-hidden">
                <img src="Images/CredScoring.png" alt="Credit Scoring System" className="projectImage" />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    Credit Scoring System
                  </h3>
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Full-stack Desktop module used to assess cooperative members' credit scores.
                </p>
                <div className="flex flex-wrap gap-2">  
                  <Badge variant="outline" className="text-xs">
                    ASP.Net API
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    WPF 
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    .NET 4.5.2
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    C#
                  </Badge>                  
                  <Badge variant="outline" className="text-xs">
                    MS SQL
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    MVVM
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    MVC
                  </Badge>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto text-balance">
            I'm always interested in hearing about new opportunities and interesting projects. Whether you have a
            question or just want to say hi, I'll try my best to get back to you!
          </p>

          <a href="mailto:onegaia93@gmail.com">
            <Button size="lg" className="font-medium">
              <Mail className="w-4 h-4 mr-2" />
              onegaia93@gmail.com
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p className="text-sm">Built with Next.js and Tailwind CSS. Deployed on Vercel.</p>
        </div>
      </footer>
    </div>
  )
}
