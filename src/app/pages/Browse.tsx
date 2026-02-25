import { useState } from 'react';
import { motion } from 'motion/react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router';
import { BarChart3, Search, Globe, ShoppingBag, Lock, Menu } from 'lucide-react';
import { IdentityStateIndicator } from '../components/IdentityStateIndicator';
import { IdentityRevealSheet } from '../components/IdentityRevealSheet';

type IdentityMode = 'synthetic' | 'vault';

export default function Browse() {
  const navigate = useNavigate();
  const [identityMode, setIdentityMode] = useState<IdentityMode>('synthetic');
  const [showRevealSheet, setShowRevealSheet] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const browsingItems = [
    {
      title: 'Minimalist Home Decor',
      url: 'design-store.com',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80',
    },
    {
      title: 'Sustainable Fashion Brands',
      url: 'eco-fashion.co',
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80',
    },
    {
      title: 'Weekend Getaway Ideas',
      url: 'travel-guide.com',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80',
    },
  ];

  const handleCheckout = () => {
    setShowRevealSheet(true);
  };

  const handleIdentityReveal = () => {
    setIdentityMode('vault');
    toast.success('Vault identity active for this transaction.', {
      description: 'Your real payment info was securely used.',
      duration: 4000,
    });
    
    // Simulate returning to synthetic mode after transaction
    setTimeout(() => {
      setIdentityMode('synthetic');
      toast('Vault securely locked.', {
        description: 'Returning to behavioral obfuscation.',
        icon: '🔒',
      });
    }, 5000);
  };

  return (
    <div className="relative min-h-screen bg-[#FAFAFA] overflow-hidden">
      
      {/* Dynamic Ambient Glow (Apple-style subtle state awareness) */}
      <div
        className={`fixed inset-0 pointer-events-none transition-opacity duration-1000 z-0 ${
          identityMode === 'synthetic' ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: 'radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.08) 0%, rgba(250, 250, 250, 0) 60%)'
        }}
      />

      {/* Header */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`sticky top-0 z-30 backdrop-blur-2xl border-b transition-all duration-700 ${
          identityMode === 'vault'
            ? 'bg-emerald-50/60 border-emerald-200/50'
            : 'bg-white/60 border-gray-200/40 shadow-sm'
        }`}
      >
        <div className="px-4 py-3 flex items-center justify-between max-w-2xl mx-auto">
          <button className="p-2 hover:bg-black/5 rounded-full transition-colors">
            <Menu className="w-5 h-5 text-gray-700" />
          </button>

          <IdentityStateIndicator mode={identityMode} />

          <button
            onClick={() => navigate('/insights')}
            className="p-2 hover:bg-black/5 rounded-full transition-colors"
          >
            <BarChart3 className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="relative z-10 max-w-2xl mx-auto px-4 py-6 space-y-6">
        
        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="relative group"
        >
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search or enter URL"
            className="w-full pl-12 pr-4 py-3.5 bg-white/70 backdrop-blur-md rounded-2xl border border-gray-200/60 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-300/50 transition-all shadow-sm"
          />
        </motion.div>

        {/* Browsing Cards */}
        <div className="space-y-4">
          {browsingItems.map((item, index) => (
            <motion.div
              key={item.url}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-white/80 backdrop-blur-md rounded-3xl overflow-hidden border border-gray-200/50 hover:shadow-xl hover:shadow-black/5 transition-all duration-300"
            >
              <div className="aspect-[21/9] w-full overflow-hidden bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100/80 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-gray-600" />
                  </div>
                  <div className="flex-1 min-w-0 pt-0.5">
                    <h3 className="text-base font-semibold text-gray-900 truncate tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 truncate">{item.url}</p>
                  </div>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full py-3.5 px-4 bg-gray-900 text-white rounded-xl text-sm font-semibold hover:bg-gray-800 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-md shadow-gray-900/20"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Purchase
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Privacy Info Card (UPDATED) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-br from-indigo-50/80 via-purple-50/80 to-pink-50/80 backdrop-blur-xl rounded-3xl p-6 border border-white shadow-sm"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0">
              <Lock className="w-5 h-5 text-indigo-600" />
            </div>
            <div className="flex-1 pt-0.5">
              <h4 className="text-sm font-semibold text-gray-900 mb-1 tracking-tight">
                Synthetic Persona Active
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Current profile fed to external trackers: <br />
                <span className="font-medium text-indigo-700">Interested in minimalist decor and sustainable fashion.</span>
              </p>
              <button className="text-xs py-2 px-4 bg-white/80 backdrop-blur-sm border border-indigo-100/50 rounded-full text-indigo-600 font-semibold hover:bg-white active:scale-95 transition-all shadow-sm">
                Shuffle Persona
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Identity Reveal Sheet */}
      <IdentityRevealSheet
        isOpen={showRevealSheet}
        onClose={() => setShowRevealSheet(false)}
        onReveal={handleIdentityReveal}
        context="Completing this purchase"
      />
    </div>
  );
}