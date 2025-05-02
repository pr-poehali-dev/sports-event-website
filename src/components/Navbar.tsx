import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User, LogIn } from 'lucide-react';
import { Button } from './ui/button';
import Icon from './ui/icon';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-40">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center">
              <span className="font-bold text-xl text-primary">SportEvent</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition">
              Главная
            </Link>
            <Link to="/events" className="text-foreground hover:text-primary transition">
              Мероприятия
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition">
              О нас
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition">
              Контакты
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-2">
            <Link to="/login">
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Icon name="LogIn" size={16} />
                <span>Войти</span>
              </Button>
            </Link>
            <Link to="/register">
              <Button size="sm" className="flex items-center gap-1">
                <Icon name="UserPlus" size={16} />
                <span>Регистрация</span>
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-foreground hover:text-primary px-3 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Главная
              </Link>
              <Link 
                to="/events" 
                className="text-foreground hover:text-primary px-3 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Мероприятия
              </Link>
              <Link 
                to="/about" 
                className="text-foreground hover:text-primary px-3 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                О нас
              </Link>
              <Link 
                to="/contact" 
                className="text-foreground hover:text-primary px-3 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Контакты
              </Link>
              <div className="flex space-x-2 pt-2">
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <LogIn size={16} />
                    <span>Войти</span>
                  </Button>
                </Link>
                <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                  <Button size="sm" className="flex items-center gap-1">
                    <User size={16} />
                    <span>Регистрация</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
