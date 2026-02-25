import { motion } from 'motion/react';
import { Shield, Sparkles } from 'lucide-react';

interface IdentityStateIndicatorProps {
  mode: 'synthetic' | 'vault';
}

export function IdentityStateIndicator({ mode }: IdentityStateIndicatorProps) {
  const isSynthetic = mode === 'synthetic';

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-white/70 backdrop-blur-xl border border-white/20 shadow-sm"
    >
      {/* Animated glyph */}
      <motion.div
        animate={{
          rotate: isSynthetic ? [0, 360] : 0,
        }}
        transition={{
          duration: isSynthetic ? 8 : 0,
          repeat: isSynthetic ? Infinity : 0,
          ease: "linear",
        }}
        className="relative"
      >
        {isSynthetic ? (
          <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
        ) : (
          <Shield className="w-3.5 h-3.5 text-emerald-600" />
        )}
      </motion.div>

      {/* Minimal text label */}
      <motion.span
        key={mode}
        initial={{ opacity: 0, x: -5 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="text-[11px] text-gray-600 font-medium tracking-wide"
      >
        {isSynthetic ? 'Synthetic' : 'Vault'}
      </motion.span>

      {/* Subtle pulse indicator */}
      <div className="relative w-1.5 h-1.5 ml-0.5">
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.8, 0.3, 0.8],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`w-full h-full rounded-full ${
            isSynthetic ? 'bg-indigo-400' : 'bg-emerald-400'
          }`}
        />
      </div>
    </motion.div>
  );
}