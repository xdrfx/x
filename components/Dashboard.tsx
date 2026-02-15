
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Download, ExternalLink, Terminal, ShieldCheck, Zap } from 'lucide-react';

interface DashboardProps {
  onBack: () => void;
  purchaseStatus: 'yearly' | 'lifetime';
}

const Dashboard: React.FC<DashboardProps> = ({ onBack, purchaseStatus }) => {
  const [copied, setCopied] = useState(false);

  // Сюда мы вставим ваш настоящий Pine Script
  const REAL_PINE_SCRIPT = `//@version=5
indicator("XDR FX PRO - PRIVATE", overlay=true)

// [ВАШ СКРИПТ БУДЕТ ЗДЕСЬ]
// Сейчас здесь временный код для примера:
bullColor = color.new(#a855f7, 0)
bearColor = color.new(#f43f5e, 0)

plotshape(ta.crossover(ta.sma(close, 10), ta.sma(close, 20)), "Buy", shape.triangleup, location.belowbar, bullColor, size=size.small)
plotshape(ta.crossunder(ta.sma(close, 10), ta.sma(close, 20)), "Sell", shape.triangledown, location.abovebar, bearColor, size=size.small)
`;

  const handleCopy = () => {
    navigator.clipboard.writeText(REAL_PINE_SCRIPT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.section 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-6xl mx-auto px-6 py-12"
    >
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="lg:w-1/3 space-y-6">
          <div className="glass-panel rounded-3xl p-8 border border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.1)]">
            <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center shadow-lg mb-6">
               <ShieldCheck className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Доступ разрешен</h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Ваш аккаунт активирован. Тип лицензии: <span className="text-purple-400 font-bold uppercase">{purchaseStatus === 'lifetime' ? 'Пожизненная' : 'Годовая'}</span>
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20">
                <Zap className="w-5 h-5 text-purple-400 mt-1" />
                <div className="text-xs text-gray-300">Скопируйте код ниже и вставьте его в Pine Editor на TradingView.</div>
              </div>
            </div>
          </div>

          <div className="glass-panel rounded-3xl p-8 border border-white/5">
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-6">Быстрый старт</h3>
            <div className="space-y-6">
              {[
                "Перейдите на tradingview.com",
                "Откройте 'Pine Editor' (снизу)",
                "Вставьте скопированный код",
                "Нажмите 'Добавить на график'",
                "Готово! Сигналы появятся сразу"
              ].map((step, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[10px] font-bold text-purple-400">
                    {i + 1}
                  </div>
                  <span className="text-xs text-gray-400">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:w-2/3 space-y-6">
          <div className="glass-panel rounded-3xl overflow-hidden border border-purple-500/20 shadow-2xl">
            <div className="bg-black/40 px-6 py-4 border-b border-white/5 flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <Terminal className="w-4 h-4 text-purple-400" />
                <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">XDR_FX_PRO_V1.pine</span>
              </div>
              <button 
                onClick={handleCopy}
                className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-purple-600 border border-purple-400/50 text-white hover:bg-purple-500 transition-all text-xs font-bold shadow-[0_0_15px_rgba(168,85,247,0.4)]"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'ГОТОВО' : 'КОПИРОВАТЬ'}</span>
              </button>
            </div>
            <div className="p-6 bg-[#03010c]">
              <pre className="text-[12px] text-purple-200/80 font-mono leading-relaxed overflow-x-auto h-[450px] custom-scrollbar">
                <code>{REAL_PINE_SCRIPT}</code>
              </pre>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://www.tradingview.com/chart/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center space-x-3 py-5 rounded-2xl bg-white text-black font-black hover:bg-gray-200 transition-all shadow-xl"
            >
              <ExternalLink className="w-5 h-5" />
              <span>ОТКРЫТЬ ГРАФИК</span>
            </a>
            <button 
              onClick={onBack}
              className="flex-1 flex items-center justify-center space-x-3 py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-black hover:bg-white/10 transition-all"
            >
              <Download className="w-5 h-5" />
              <span>ИНСТРУКЦИЯ PDF</span>
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Dashboard;
