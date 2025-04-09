import ThemeToggle from '../components/ui/ThemeToggle';
import { useTheme } from '../context/ThemeContext';

const MainLayout = ({ children }) => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-200 ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      {children}
      <ThemeToggle isDark={darkMode} onToggle={toggleDarkMode} />
    </div>
  );
};

export default MainLayout; 