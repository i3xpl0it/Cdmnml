import { motion } from "motion/react";

interface AboutMeProps {
  isPersonal: boolean;
}

export function AboutMe({ isPersonal }: AboutMeProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ 
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      className="max-w-2xl mx-auto text-center"
    >
      {isPersonal ? (
        <p className="text-foreground/60 leading-relaxed">
          Minimal frames. Real stories. I capture people, cities, moody and quiet moments, just emotion, light, and precision. all things aesthetic.
        </p>
      ) : (
        <p className="text-foreground/60 leading-relaxed">
          AI, data, and strategy, that's my arena. I build systems that make sense of complex data and turn it into decisions that matter. I design with intent, think in systems, and keep it simple.
        </p>
      )}
    </motion.div>
  );
}
