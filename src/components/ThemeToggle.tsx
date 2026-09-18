import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ThemeToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className={`p-2 rounded-xl transition-all duration-200 border border-slate-700/60 dark:border-slate-800 bg-slate-800/50 hover:bg-slate-700/50 dark:bg-slate-900/80 dark:hover:bg-slate-800 text-slate-300 hover:text-white light:bg-slate-200 light:border-slate-300 light:text-slate-700 light:hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${className}`}
    >
      {theme === 'dark' ? (
        <Sun className="w-4 h-4 text-amber-400 hover:rotate-45 transition-transform" />
      ) : (
        <Moon className="w-4 h-4 text-indigo-600 hover:-rotate-12 transition-transform" />
      )}
    </button>
  );
};
