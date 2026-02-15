
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AuthModal from './components/AuthModal';
import Pricing from './components/Pricing';
import Dashboard from './components/Dashboard';
import { User, AuthMode } from './types';
import { supabase } from './supabaseClient';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [authMode, setAuthMode] = useState<AuthMode>(null);
  const [view, setView] = useState<'hero' | 'pricing' | 'dashboard'>('hero');
  const [isLoading, setIsLoading] = useState(true);

  const fetchProfile = async (userId: string, email: string) => {
    try {
      console.log("Fetching profile for:", userId);
      const { data, error } = await supabase
        .from('profiles')
        .select('username, purchase_status')
        .eq('id', userId)
        .maybeSingle();

      if (error) {
        console.warn('Profile fetch warning:', error.message);
      }

      if (!data) {
        console.log("No profile found, creating new one...");
        const { data: newProfile, error: createError } = await supabase
          .from('profiles')
          .insert([{ id: userId, username: email.split('@')[0], purchase_status: null }])
          .select()
          .maybeSingle();
        
        if (newProfile) {
          setUser({
            username: newProfile.username,
            isLoggedIn: true,
            purchaseStatus: newProfile.purchase_status as any,
            id: userId
          });
        } else {
          setUser({ username: email.split('@')[0], isLoggedIn: true, id: userId });
        }
      } else {
        setUser({
          username: data.username,
          isLoggedIn: true,
          purchaseStatus: data.purchase_status as any,
          id: userId
        });
        if (data.purchase_status) {
          setView('dashboard');
        }
      }
    } catch (err) {
      console.error('Fatal error fetching profile:', err);
      setUser({ username: email.split('@')[0], isLoggedIn: true, id: userId });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Safety Timeout: Если через 4 секунды приложение все еще грузится, принудительно выключаем лоадер
    const safetyTimer = setTimeout(() => {
      if (isLoading) {
        console.log("Safety timeout reached, forcing load state to false");
        setIsLoading(false);
      }
    }, 4000);

    // Проверка текущей сессии
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        fetchProfile(session.user.id, session.user.email || '');
      } else {
        setIsLoading(false);
      }
    }).catch(err => {
      console.error("Session error:", err);
      setIsLoading(false);
    });

    // Мониторинг изменений Auth
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        fetchProfile(session.user.id, session.user.email || '');
      } else {
        setUser(null);
        setView('hero');
        setIsLoading(false);
      }
    });

    return () => {
      clearTimeout(safetyTimer);
      subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setView('hero');
  };

  const handlePurchaseComplete = async (tier: 'yearly' | 'lifetime') => {
    if (user && user.id) {
      const { error } = await supabase
        .from('profiles')
        .update({ purchase_status: tier })
        .eq('id', user.id);

      if (!error) {
        setUser(prev => prev ? { ...prev, purchaseStatus: tier } : null);
        setView('dashboard');
      } else {
        setUser(prev => prev ? { ...prev, purchaseStatus: tier } : null);
        setView('dashboard');
      }
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#030008] flex flex-col items-center justify-center">
        <div className="w-16 h-16 border-4 border-purple-500/20 border-t-purple-500 rounded-full animate-spin"></div>
        <p className="mt-4 text-purple-400 font-bold tracking-widest animate-pulse uppercase text-xs">Loading XDR FX...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative bg-[#030008] selection:bg-purple-500 selection:text-white">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-purple-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] bg-violet-800/10 blur-[120px] rounded-full"></div>
        <div className="absolute inset-0 neon-grid opacity-30"></div>
      </div>
      
      <Navbar 
        user={user} 
        onAuthClick={(mode) => setAuthMode(mode)} 
        onLogout={handleLogout}
        onLogoClick={() => setView('hero')}
      />

      <main className="relative z-10 pt-24 pb-20">
        {view === 'hero' && (
          <Hero onBuyClick={() => {
            if (user) {
              if (user.purchaseStatus) {
                setView('dashboard');
              } else {
                setView('pricing');
              }
            } else {
              setAuthMode('login');
            }
          }} />
        )}
        {view === 'pricing' && <Pricing onBack={() => setView('hero')} onPurchaseSuccess={handlePurchaseComplete} />}
        {view === 'dashboard' && user?.purchaseStatus && (
          <Dashboard 
            purchaseStatus={user.purchaseStatus} 
            onBack={() => setView('hero')} 
          />
        )}
      </main>

      {authMode && (
        <AuthModal 
          mode={authMode} 
          onClose={() => setAuthMode(null)} 
          setMode={setAuthMode}
        />
      )}

      <footer className="relative z-10 py-16 border-t border-purple-500/10 bg-black/40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 justify-center md:justify-start">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-indigo-600 rounded flex items-center justify-center font-black shadow-[0_0_15px_rgba(168,85,247,0.5)]">X</div>
              <span className="font-bold text-xl tracking-tighter text-white">XDR FX PRO</span>
            </div>
            <p className="text-gray-500 text-xs max-w-xs">Профессиональные решения для алгоритмического трейдинга 2026.</p>
          </div>
          <div className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.3em]">
            © 2026 XDR FX.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
