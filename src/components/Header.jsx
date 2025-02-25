import { useContext } from 'react'; // Importation du hook useContext de React
import { Menu, Search, Bell, User, Sun, Moon } from 'lucide-react'; // Importation des icônes de lucide-react
import { ThemeContext } from '../App'; // Importation du contexte du thème
import PropTypes from 'prop-types'; // Importation de PropTypes pour la validation des types de props
import { Link } from 'react-router-dom'; // Importation du composant Link de React Router

// Définition du composant Header
const Header = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext); // Utilisation du contexte du thème pour obtenir isDarkMode et setIsDarkMode

  return (
    <header className={`fixed top-0 left-0 right-0 ${isDarkMode ? 'bg-[#0f0f0f]' : 'bg-white'} h-14 flex items-center justify-between px-4 z-50 ${isDarkMode ? '' : 'border-b border-gray-200'}`}>
      <div className="flex items-center gap-4">
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className={`p-2 hover:${isDarkMode ? 'bg-[#272727]' : 'bg-gray-100'} rounded-full`}>
          <Menu className="w-6 h-6" />
        </button>
        <Link to="/" className="flex items-center gap-1"> {/* Lien vers la page d'accueil */}
          <img src="/yyy.png" alt="YouTube" className="w-8 h-8" /> {/* Ajuster la largeur et la hauteur */}
          <span className="text-xl font-semibold">YouTube</span>
        </Link>
      </div>
      
      <div className="flex-1 max-w-2xl mx-4">
        <div className="flex">
          <input
            type="text"
            placeholder="Search"
            className={`w-full px-4 py-2 ${isDarkMode ? 'bg-[#121212] border-[#303030]' : 'bg-gray-100 border-gray-300'} border rounded-l-full focus:outline-none focus:border-blue-500`}
          />
          <button className={`px-6 ${isDarkMode ? 'bg-[#222222] border-[#303030] hover:bg-[#272727]' : 'bg-gray-100 border-gray-300 hover:bg-gray-200'} border border-l-0 rounded-r-full`}>
            <Search className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button 
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`p-2 hover:${isDarkMode ? 'bg-[#272727]' : 'bg-gray-100'} rounded-full`}
        >
          {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
        </button>
        <button className={`p-2 hover:${isDarkMode ? 'bg-[#272727]' : 'bg-gray-100'} rounded-full`}>
          <Bell className="w-6 h-6" />
        </button>
        <button className={`p-2 hover:${isDarkMode ? 'bg-[#272727]' : 'bg-gray-100'} rounded-full`}>
          <User className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
};

// Validation des types de props
Header.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired,
  setIsSidebarOpen: PropTypes.func.isRequired,
};

export default Header;