
import React, { useState } from 'react';
import { AuthMode } from '../types';
import { supabase } from '../supabaseClient';
import { AlertCircle } from 'lucide-react';

interface AuthModalProps {
  mode: AuthMode;
  onClose: () => void;
  setMode: (mode: AuthMode) => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ mode, onClose, setMode }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg(null);

    try {
      if (mode === 'login') {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
      } else {
        const { error } = await supabase.auth.signUp({
          email,
          password,
        });
        if (error) throw error;
        alert('Регистрация успешна! Теперь вы можете войти.');
        setMode('login');
      }
      onClose();
    } catch (err: any) {
      setErrorMsg(err.message || 'Произошла ошибка при аутентификации');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative w-full max-w-md glass-panel rounded-3xl p-8 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>

        <div className="text-center space-y-2 mb-8">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-400">
            {mode === 'login' ? 'С возвращением!' : 'Регистрация'}
          </h2>
          <p className="text-sm text-gray-400">
            {mode === 'login' ? 'Войдите в личный кабинет' : 'Создайте аккаунт для доступа'}
          </p>
        </div>

        {errorMsg && (
          <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center space-x-3 text-red-400 text-sm">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-widest ml-1">Email</label>
            <input 
              required
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500/50 transition-all"
              placeholder="example@mail.com"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-widest ml-1">Пароль</label>
            <input 
              required
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500/50 transition-all"
              placeholder="••••••••"
            />
          </div>

          <button 
            type="submit"
            disabled={isLoading}
            className="w-full py-4 rounded-xl bg-purple-600 text-white font-bold hover:bg-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            ) : (
              <span>{mode === 'login' ? 'ВОЙТИ' : 'ЗАРЕГИСТРИРОВАТЬСЯ'}</span>
            )}
          </button>
        </form>

        <div className="mt-8 pt-8 border-t border-white/5 text-center">
           <p className="text-sm text-gray-500">
             {mode === 'login' ? 'Нет аккаунта?' : 'Уже есть аккаунт?'}
             <button 
               onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
               className="ml-2 text-purple-400 font-bold hover:underline"
             >
               {mode === 'login' ? 'Зарегистрируйтесь' : 'Войдите в систему'}
             </button>
           </p>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
