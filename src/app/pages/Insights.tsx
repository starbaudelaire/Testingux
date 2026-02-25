import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Shield, Eye, Sparkles, TrendingDown } from 'lucide-react';

export default function Insights() {
  const navigate = useNavigate();

  const insightCards = [
    {
      icon: Shield,
      title: 'Identity exposure minimized',
      description: 'Your authentic identity was revealed only when necessary',
      color: 'from-green-100 to-emerald-100',
      iconColor: 'text-green-600',
    },
    {
      icon: Eye,
      title: 'External profiling reduced',
      description: 'Trackers see fragmented data that does not build a complete profile',
      color: 'from-indigo-100 to-purple-100',
      iconColor: 'text-indigo-600',
    },
    {
      icon: Sparkles,
      title: 'Synthetic layer active',
      description: 'Your persona adapts contextually while keeping your vault secure',
      color: 'from-purple-100 to-pink-100',
      iconColor: 'text-purple-600',
    },
  ];

  const stats = [
    { label: 'Sessions protected', value: '127' },
    { label: 'Vault reveals', value: '3' },
    { label: 'Active days', value: '18' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-30 bg-white/80 backdrop-blur-xl border-b border-gray-100"
      >
        <div className="px-4 py-4 flex items-center gap-4 max-w-2xl mx-auto">
          <button
            onClick={() => navigate('/browse')}
            className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </button>
          <h1 className="text-xl font-medium text-gray-900">Privacy Insights</h1>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-4 py-8 space-y-8">
        {/* Overview Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative h-48 rounded-3xl bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 overflow-hidden"
        >
          {/* Animated background elements */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-12 -left-12 w-64 h-64 rounded-full bg-gradient-to-br from-indigo-200 to-purple-200 blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute -bottom-12 -right-12 w-64 h-64 rounded-full bg-gradient-to-br from-purple-200 to-pink-200 blur-3xl"
          />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="w-16 h-16 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center mb-4"
            >
              <TrendingDown className="w-8 h-8 text-indigo-600" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl font-medium text-gray-900 mb-2"
            >
              Privacy system active
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-sm text-gray-600"
            >
              Your digital footprint is fragmented and ephemeral
            </motion.p>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-3 gap-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="bg-white rounded-2xl p-4 border border-gray-100 text-center"
            >
              <div className="text-2xl font-medium text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Insight Cards */}
        <div className="space-y-4">
          {insightCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className={`bg-gradient-to-br ${card.color} rounded-2xl p-6 border border-gray-100/50`}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                  <card.icon className={`w-6 h-6 ${card.iconColor}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-medium text-gray-900 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-center py-8"
        >
          <p className="text-sm text-gray-500 leading-relaxed">
            Privacy as a natural system behavior,
            <br />
            not a defensive struggle
          </p>
        </motion.div>
      </div>
    </div>
  );
}