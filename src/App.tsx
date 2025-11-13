import { useState } from "react";
import { PhotoGallery } from "./components/PhotoGallery";
import { SkeuomorphicSwitch } from "./components/SkeuomorphicSwitch";
import { ProjectCard } from "./components/ProjectCard";
import { AboutMe } from "./components/AboutMe";
import { GridGlow } from "./components/GridGlow";
import { motion, AnimatePresence } from "motion/react";
import { Brain, Database, Code2, Cpu, Sparkles, MessageSquare } from "lucide-react";
import img1 from "figma:asset/2e0d13ebf480faa749bfed9eb549ffe23de5bd0a.png";
import img2 from "figma:asset/449020eb383f5fed41447ff590fd0a6254909f5b.png";
import img3 from "figma:asset/7f04693ea59eb4b7326502fca29a50480cdd51b8.png";
import img4 from "figma:asset/55416daa7edf2d10cb8d860c283037c9f539a527.png";
import img5 from "figma:asset/d850f42c94225cb41e0ed93f7fcb5b3e5992eb56.png";
import img6 from "figma:asset/d9fbf11382a78f06cfba6b3929efbf069b2dc4a7.png";
import img7 from "figma:asset/f954603759d2e257024e914bd4c6a084855a5241.png";
import logoDark from "figma:asset/19a4837dddb66b15137045c187e717c259abf5a8.png";

// Data Science & Python Projects for Work
const workProjects = [
  {
    id: "1",
    title: "Artificial Intelligence",
    description: "Building multi-agent AI systems with reinforcement learning to optimize decision-making.",
    technologies: ["Python", "TensorFlow", "Reinforcement Learning", "Multi-Agent Systems"],
    icon: Sparkles
  },
  {
    id: "2",
    title: "Data Science",
    description: "Leveraging machine learning models for predictive analytics and analysis at scale.",
    technologies: ["PyTorch", "Hugging Face", "Python", "XGBoost", "FastAPI"],
    icon: Brain
  },
  {
    id: "3",
    title: "Data Engineering",
    description: "Designing and implementing efficient data pipelines and integrations.",
    technologies: ["Snowflake", "PostgreSQL", "Airflow"],
    icon: Database
  },
  {
    id: "4",
    title: "Healthcare Analytics",
    description: "Utilizing AI and data science to improve patient outcomes and optimize healthcare delivery.",
    technologies: ["Snowflake", "SQL", "Python", "TensorFlow"],
    icon: Cpu
  },
  {
    id: "5",
    title: "Large Language Models",
    description: "Fine-tuning LLMs for domain-specific text generation tasks with cutting-edge AI tools.",
    technologies: ["GPT", "LangChain", "Vector DB"],
    icon: MessageSquare
  },
  {
    id: "6",
    title: "NLP Sentiment Analysis",
    description: "Transformer-based sentiment analysis processing 100K+ posts daily.",
    technologies: ["PyTorch", "Hugging Face"],
    icon: Code2
  }
];

// Photography portfolio for Personal
const personalPhotos = [
  {
    id: "1",
    url: img2,
    title: "Grand Central",
    category: "Architecture"
  },
  {
    id: "2",
    url: img1,
    title: "Times Square",
    category: "Street"
  },
  {
    id: "3",
    url: img4,
    title: "Urban Rhythm",
    category: "Street"
  },
  {
    id: "4",
    url: img5,
    title: "Reaching Up",
    category: "Architecture"
  },
  {
    id: "5",
    url: img3,
    title: "Street Portrait",
    category: "Street"
  },
  {
    id: "6",
    url: img7,
    title: "Manhattan Bridge",
    category: "Architecture"
  }
];

export default function App() {
  const [isPersonal, setIsPersonal] = useState(false);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden dark">
      <GridGlow />
      
      {/* Header */}
      <header className="border-b border-border relative z-20">
        <div className="container mx-auto px-8 lg:px-16 max-w-[1200px]">
          <div className="flex items-center justify-between py-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ 
                duration: 0.4,
                ease: [0.25, 0.1, 0.25, 1]
              }}
            >
              <img 
                src={logoDark} 
                alt="Code MNML" 
                className="h-10 w-auto opacity-90"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ 
                duration: 0.4,
                ease: [0.25, 0.1, 0.25, 1]
              }}
            >
              <SkeuomorphicSwitch
                isOn={isPersonal}
                onToggle={() => setIsPersonal(!isPersonal)}
                leftLabel="Work"
                rightLabel="Personal"
              />
            </motion.div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-8 lg:px-16 py-16 max-w-[1400px] relative z-20">
        <AnimatePresence mode="wait">
          {!isPersonal ? (
            <motion.div
              key="work"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ 
                duration: 0.3, 
                ease: [0.25, 0.1, 0.25, 1]
              }}
            >
              <div className="mb-16 text-center">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                  className="mb-6 text-foreground relative inline-block"
                  style={{ fontSize: '2.5rem', fontWeight: 500, letterSpacing: '-0.02em' }}
                >
                  Work
                  <div className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-foreground/40 to-transparent" />
                </motion.h1>
                <AboutMe isPersonal={false} />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
                {workProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: index * 0.02,
                      ease: [0.25, 0.1, 0.25, 1]
                    }}
                  >
                    <ProjectCard
                      title={project.title}
                      description={project.description}
                      technologies={project.technologies}
                      icon={project.icon}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="personal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ 
                duration: 0.3, 
                ease: [0.25, 0.1, 0.25, 1]
              }}
            >
              <div className="mb-16 text-center">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                  className="mb-6 text-foreground relative inline-block"
                  style={{ fontSize: '2.5rem', fontWeight: 500, letterSpacing: '-0.02em' }}
                >
                  Personal
                  <div className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-foreground/40 to-transparent" />
                </motion.h1>
                <AboutMe isPersonal={true} />
              </div>
              <PhotoGallery photos={personalPhotos} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-24 relative z-20">
        <div className="container mx-auto px-8 lg:px-16 py-8 max-w-[1400px]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground">© 2025</p>
            <div className="flex gap-8">
              <a
                href="https://www.pexels.com/@code-mnml-185553186/highlights/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Pexels
              </a>
              <a
                href="https://github.com/i3xpl0it"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                GitHub
              </a>
              <button
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => {/* Resume link will be added later */}}
              >
                Resume
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
