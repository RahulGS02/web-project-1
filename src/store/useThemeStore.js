import { create } from 'zustand';

const useThemeStore = create((set) => ({
  theme: 'light',
  toggleTheme: () =>
    set((state) => {
      const newTheme = state.theme === 'light' ? 'dark' : 'light';
      // Update document class for Tailwind dark mode
      if (typeof document !== 'undefined') {
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(newTheme);
        localStorage.setItem('theme', newTheme);
      }
      return { theme: newTheme };
    }),
  setTheme: (theme) =>
    set(() => {
      if (typeof document !== 'undefined') {
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(theme);
        localStorage.setItem('theme', theme);
      }
      return { theme };
    }),
}));

// Initialize theme on load
if (typeof document !== 'undefined') {
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme) {
    document.documentElement.classList.add(storedTheme);
  } else {
    document.documentElement.classList.add('light');
  }
}

export default useThemeStore;

