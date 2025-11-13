import { motion } from "motion/react";

interface SkeuomorphicSwitchProps {
  isOn: boolean;
  onToggle: () => void;
  leftLabel: string;
  rightLabel: string;
}

export function SkeuomorphicSwitch({ isOn, onToggle, leftLabel, rightLabel }: SkeuomorphicSwitchProps) {
  return (
    <div className="flex items-center gap-3">
      <span className={`transition-all ${!isOn ? 'text-foreground' : 'text-muted-foreground'}`}>
        {leftLabel}
      </span>
      <button
        onClick={onToggle}
        className="relative w-11 h-6 rounded-full bg-muted cursor-pointer transition-all hover:bg-muted/80"
        aria-label={`Switch to ${isOn ? leftLabel : rightLabel}`}
      >
        <motion.div
          className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-foreground shadow-sm"
          animate={{
            x: isOn ? 20 : 0,
          }}
          transition={{
            duration: 0.2,
            ease: [0.25, 0.1, 0.25, 1]
          }}
        />
      </button>
      <span className={`transition-all ${isOn ? 'text-foreground' : 'text-muted-foreground'}`}>
        {rightLabel}
      </span>
    </div>
  );
}
