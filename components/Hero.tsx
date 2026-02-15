
import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Zap, TrendingUp, ShieldCheck, Globe } from 'lucide-react';

interface HeroProps {
  onBuyClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBuyClick }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const traderImages = [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&h=100&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=100&h=100&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&h=100&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&h=100&auto=format&fit=crop"
  ];

  return (
    <div className="relative min-h-[85vh] flex items-center" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-6 py-10 flex flex-col lg:flex-row items-center justify-between w-full"
      >
        <div className="lg:w-1/2 space-y-8 text-center lg:text-left z-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-purple-600/10 border border-purple-500/30 text-purple-400 text-[10px] font-bold uppercase tracking-widest"
          >
            💎 ПРЕМИУМ АЛГОРИТМ 2026
          </motion.div>
          
          <h1 className="text-6xl lg:text-8xl font-black leading-tight text-white tracking-tighter">
            XDR FX <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-violet-500 to-fuchsia-500 neon-glow">
              INDICATOR
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
            Точность <span className="text-purple-400 font-bold">89%</span>. Профессиональное решение для тех, кто хочет видеть рынок насквозь. Стабильные сигналы в любое время суток.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-6 sm:space-y-0 sm:space-x-8">
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(168, 85, 247, 0.6)" }}
              whileTap={{ scale: 0.95 }}
              onClick={onBuyClick}
              className="w-full sm:w-auto px-12 py-5 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-black text-lg shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all"
            >
              КУПИТЬ ИНДИКАТОР
            </motion.button>
            
            <div className="flex -space-x-4 items-center">
               {traderImages.map((src, i) => (
                 <img 
                   key={i} 
                   src={src} 
                   className="w-12 h-12 rounded-full border-4 border-[#030008] object-cover shadow-lg" 
                   alt="trader" 
                 />
               ))}
               <div className="w-12 h-12 rounded-full border-4 border-[#030008] bg-gray-900 flex items-center justify-center text-[10px] font-bold text-white shadow-lg">
                 +62k
               </div>
               <div className="ml-6 flex flex-col text-left">
                  <span className="text-white font-bold text-xs">Трейдеров онлайн</span>
                  <span className="text-purple-500 text-[10px] uppercase font-bold tracking-widest">Global Network</span>
               </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-10 border-t border-purple-500/10">
             {[
               { icon: Zap, value: "89%", label: "Accuracy" },
               { icon: Globe, value: "24/7", label: "Support" },
               { icon: ShieldCheck, value: "Safe", label: "Guarantee" }
             ].map((stat, i) => (
               <div key={i} className="flex items-center space-x-3">
                 <stat.icon className="w-5 h-5 text-purple-500" />
                 <div>
                   <div className="text-xl font-bold text-white">{stat.value}</div>
                   <div className="text-[10px] text-gray-500 uppercase font-black tracking-tighter">{stat.label}</div>
                 </div>
               </div>
             ))}
          </div>
        </div>

        <div className="lg:w-1/2 mt-20 lg:mt-0 relative perspective-2000 flex justify-center items-center">
          <motion.div 
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative z-10 w-full max-w-[420px] aspect-[4/5] glass-panel rounded-[40px] p-10 shadow-[0_30px_60px_rgba(0,0,0,0.6)] animate-float"
          >
             <div style={{ transform: "translateZ(40px)" }} className="h-full flex flex-col justify-between">
                <div className="flex justify-between items-start">
                   <div>
                     <div className="text-purple-400 text-[10px] font-black uppercase tracking-[0.2em]">Live Portfolio</div>
                     <div className="text-4xl font-black mt-2 text-white tabular-nums">$45,290.89</div>
                   </div>
                   <div className="w-14 h-14 rounded-2xl bg-purple-500/20 flex items-center justify-center text-purple-400 border border-purple-500/30 shadow-lg shadow-purple-500/10">
                      <TrendingUp className="w-7 h-7" />
                   </div>
                </div>

                <div className="flex-1 mt-10 space-y-8">
                   <div className="flex items-end space-x-3 h-40">
                      {[40, 60, 50, 80, 65, 90, 100, 75, 85, 80, 65, 110].map((h, i) => (
                        <motion.div 
                          initial={{ height: 0 }}
                          animate={{ height: `${(h/110)*100}%` }}
                          transition={{ delay: 0.5 + i * 0.05 }}
                          key={i} 
                          className={`flex-1 rounded-full ${i === 6 ? 'bg-gradient-to-t from-purple-600 to-fuchsia-400 shadow-[0_0_20px_rgba(168,85,247,0.8)]' : 'bg-purple-500/10'}`}
                        ></motion.div>
                      ))}
                   </div>
                   <div className="grid grid-cols-2 gap-6">
                      <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                         <div className="text-[10px] text-gray-500 font-bold uppercase">Profit</div>
                         <div className="text-lg font-black text-green-400">+$12,400</div>
                      </div>
                      <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                         <div className="text-[10px] text-gray-500 font-bold uppercase">Win Rate</div>
                         <div className="text-lg font-black text-purple-400">84.7%</div>
                      </div>
                   </div>
                </div>

                <div style={{ transform: "translateZ(20px)" }} className="mt-8 p-5 rounded-3xl bg-gradient-to-r from-purple-900/40 to-indigo-900/40 border border-purple-500/30 flex items-center space-x-5 shadow-2xl">
                   <div className="w-12 h-12 rounded-2xl bg-purple-600 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                      <Zap className="w-6 h-6 text-white" />
                   </div>
                   <div>
                      <div className="text-sm font-black text-white uppercase tracking-wider">System Signal</div>
                      <div className="text-[10px] text-purple-300 font-bold">ALGO 2.0: <span className="text-green-400">BUY ENTRY</span></div>
                   </div>
                </div>
             </div>
          </motion.div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] border border-purple-500/5 rounded-full -z-10 animate-[spin_30s_linear_infinite]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-dashed border-white/5 rounded-full -z-10 animate-[spin_45s_linear_infinite_reverse]"></div>
        </div>
      </motion.section>
    </div>
  );
};

export default Hero;
