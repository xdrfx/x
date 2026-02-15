
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowLeft, ShieldCheck, CreditCard, Loader2, ExternalLink } from 'lucide-react';

interface PricingProps {
  onBack: () => void;
  onPurchaseSuccess: (tier: 'yearly' | 'lifetime') => void;
}

const Pricing: React.FC<PricingProps> = ({ onBack, onPurchaseSuccess }) => {
  const [processingId, setProcessingId] = useState<string | null>(null);

  // Сюда мы добавим ваши ссылки, когда вы их пришлете
  const PAYMENT_LINKS = {
    yearly: "#", 
    lifetime: "#"
  };

  const tiers = [
    {
      id: 'yearly',
      name: 'ДОСТУП НА 1 ГОД',
      price: '1999',
      period: 'руб / год',
      features: [
        'Полный доступ к индикатору XDR FX',
        'Бесплатные обновления 12 месяцев',
        'Видео-руководство по настройке',
        'Техподдержка 24/7'
      ],
      isPopular: false
    },
    {
      id: 'lifetime',
      name: 'ПОЖИЗНЕННЫЙ ДОСТУП',
      price: '4999',
      period: 'руб / навсегда',
      features: [
        'Бессрочный доступ к алгоритму',
        'Закрытый VIP-чат в Telegram',
        'Эксклюзивные торговые стратегии',
        'Личная консультация по Zoom/TG',
        'Все будущие обновления навсегда'
      ],
      isPopular: true
    }
  ];

  const handleSelect = (tierId: string) => {
    setProcessingId(tierId);
    
    // В будущем здесь будет переход на оплату:
    // window.open(PAYMENT_LINKS[tierId as keyof typeof PAYMENT_LINKS], '_blank');
    
    // Симуляция подтверждения оплаты для теста
    setTimeout(() => {
      onPurchaseSuccess(tierId as 'yearly' | 'lifetime');
      setProcessingId(null);
    }, 2500);
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-5xl mx-auto px-6 py-12"
    >
      <motion.button 
        whileHover={{ x: -5 }}
        onClick={onBack}
        className="mb-12 flex items-center space-x-2 text-gray-400 hover:text-white transition-colors group"
      >
        <ArrowLeft className="w-5 h-5 group-hover:text-purple-400" />
        <span className="font-medium">Назад на главную</span>
      </motion.button>

      <div className="text-center space-y-4 mb-20">
        <h2 className="text-4xl lg:text-5xl font-black text-white">
          Выберите Ваш <span className="text-purple-500 neon-glow">Тариф</span>
        </h2>
        <p className="text-gray-400 max-w-lg mx-auto">
          После успешной оплаты доступ к индикатору откроется мгновенно в вашем личном кабинете.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        {tiers.map((tier, index) => (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            key={tier.id}
            className={`relative glass-panel rounded-[32px] p-10 border transition-all duration-500 ${
              tier.isPopular ? 'border-purple-500/50 bg-purple-500/5 shadow-[0_0_40px_rgba(168,85,247,0.1)]' : 'border-white/10'
            }`}
          >
            {tier.isPopular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-purple-600 rounded-full text-[10px] font-black tracking-widest uppercase shadow-[0_0_20px_rgba(168,85,247,0.5)] text-white">
                РЕКОМЕНДУЕМ
              </div>
            )}

            <div className="space-y-6">
              <h3 className="text-xl font-bold tracking-tight text-gray-300 uppercase">{tier.name}</h3>
              <div className="flex items-baseline space-x-2">
                <span className="text-6xl font-black text-white">{tier.price}</span>
                <span className="text-gray-500 font-medium uppercase text-xs">{tier.period}</span>
              </div>

              <div className="space-y-4 pt-6">
                {tier.features.map((feature, i) => (
                  <div key={i} className="flex items-center space-x-3 text-sm text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={processingId !== null}
                onClick={() => handleSelect(tier.id)}
                className={`w-full py-5 rounded-2xl font-bold transition-all shadow-lg text-white flex items-center justify-center space-x-2 ${
                  tier.isPopular 
                  ? 'bg-purple-600 hover:bg-purple-500 shadow-purple-500/20' 
                  : 'bg-white/5 border border-white/10 hover:bg-white/10'
                } disabled:opacity-50`}
              >
                {processingId === tier.id ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>ОБРАБОТКА...</span>
                  </>
                ) : (
                  <>
                    <ExternalLink className="w-4 h-4" />
                    <span>КУПИТЬ СЕЙЧАС</span>
                  </>
                )}
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 p-8 glass-panel rounded-3xl border border-white/10 text-center">
         <div className="flex justify-center space-x-12 mb-8">
            <div className="flex flex-col items-center">
               <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-3 border border-purple-500/20">
                  <CreditCard className="w-7 h-7 text-purple-400" />
               </div>
               <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest">VISA / MASTERCARD</span>
            </div>
            <div className="flex flex-col items-center">
               <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-3 border border-purple-500/20">
                  <ShieldCheck className="w-7 h-7 text-purple-400" />
               </div>
               <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest">БЕЗОПАСНОСТЬ</span>
            </div>
         </div>
         <p className="text-gray-500 text-sm italic max-w-md mx-auto leading-relaxed">
           Система работает на базе Supabase. Ваши данные зашифрованы и защищены. После оплаты скрипт появится в личном кабинете.
         </p>
      </div>
    </motion.section>
  );
};

export default Pricing;
