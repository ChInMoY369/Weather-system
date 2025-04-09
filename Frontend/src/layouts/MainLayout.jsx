import ThemeToggle from '../components/ui/ThemeToggle';
import { useTheme } from '../context/ThemeContext';

const MainLayout = ({ children }) => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-200 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-100'}`}>
      <div className="container mx-auto px-4 py-8">
        {children}
        <ThemeToggle isDark={darkMode} onToggle={toggleDarkMode} />
      </div>
    </div>
  );
};

export default MainLayout; 