import { motion } from 'motion/react';
import { Shield, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

interface IdentityStateIndicatorProps {
  mode: 'synthetic' | 'vault';
}

export function IdentityStateIndicator({ mode }: IdentityStateIndicatorProps) {
  const isSynthetic = mode === 'synthetic';
  const [aiAction, setAiAction] = useState('Abstracting signals...');

  // Efek AI lagi kerja ngacak data
  useEffect(() => {
    if (!isSynthetic) return;
    const actions = ['Abstracting signals...', 'Generating noise...', 'Persona active'];
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % actions.length;
      setAiAction(actions[i]);
    }, 3000);
    return () => clearInterval(interval);
  }, [isSynthetic]);

  return (
    <motion.div
      className={`flex items-center gap-3 px-4 py-2 rounded-2xl backdrop-blur-2xl border shadow-sm transition-colors duration-500 ${
        isSynthetic ? 'bg-white/60 border-gray-200/50' : 'bg-emerald-50 border-emerald-200/50'
      }`}
    >
      <motion.div animate={{ rotate: isSynthetic ? [0, 360] : 0 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>
        {isSynthetic ? <Sparkles className="w-5 h-5 text-indigo-500" /> : <Shield className="w-5 h-5 text-emerald-600" />}
      </motion.div>

      <div className="flex flex-col">
        <span className={`text-[13px] font-bold tracking-tight leading-tight ${isSynthetic ? 'text-gray-800' : 'text-emerald-800'}`}>
          {isSynthetic ? 'Synthetic Mode' : 'Vault Mode'}
        </span>
        {/* INI MICRO-COPY & AI MEDIATOR LU */}
        <motion.span 
          key={isSynthetic ? aiAction : 'vault-copy'}
          initial={{ opacity: 0, y: 2 }} animate={{ opacity: 1, y: 0 }}
          className={`text-[10px] font-medium tracking-wide ${isSynthetic ? 'text-indigo-600/70' : 'text-emerald-600/80'}`}
        >
          {isSynthetic ? aiAction : 'Authentic identity in use'}
        </motion.span>
      </div>
    </motion.div>
  );
}