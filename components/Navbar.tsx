
import React from 'react';
import { User, AuthMode } from '../types';

interface NavbarProps {
  user: User | null;
  onAuthClick: (mode: AuthMode) => void;
  onLogout: () => void;
  onLogoClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ user, onAuthClick, onLogout, onLogoClick }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/5 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2 cursor-pointer group" onClick={onLogoClick}>
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-violet-700 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.5)] group-hover:shadow-[0_0_25px_rgba(168,85,247,0.8)] transition-all">
            <span className="text-white font-bold text-xl">X</span>
          </div>
          <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-400">
            XDR FX
          </span>
        </div>

        <div className="flex items-center space-x-4">
          {user ? (
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-300">Привет, <span className="text-purple-400 font-semibold">{user.username}</span></span>
              <button 
                onClick={onLogout}
                className="px-4 py-2 rounded-full border border-white/10 text-xs hover:bg-white/5 transition-all text-gray-400 hover:text-white"
              >
                Выйти
              </button>
            </div>
          ) : (
            <>
              <button 
                onClick={() => onAuthClick('login')}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                Войти
              </button>
              <button 
                onClick={() => onAuthClick('register')}
                className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-violet-600 text-sm font-semibold shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all text-white"
              >
                Регистрация
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
