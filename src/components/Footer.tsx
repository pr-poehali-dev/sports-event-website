import { Link } from 'react-router-dom';
import { 
  Instagram, 
  Twitter, 
  Facebook, 
  Mail, 
  MapPin, 
  Phone 
} from 'lucide-react';
import Icon from './ui/icon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">SportEvent</h3>
            <p className="text-muted-foreground mb-4">
              Платформа для регистрации на спортивные мероприятия. 
              Присоединяйтесь к нам и станьте частью спортивного сообщества!
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition">
                <Icon name="Facebook" size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-muted-foreground hover:text-primary transition">
                  Мероприятия
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Правовая информация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-primary transition">
                  Условия использования
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary transition">
                  Политика конфиденциальности
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-muted-foreground hover:text-primary transition">
                  Политика использования cookie
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Icon name="MapPin" size={20} className="mr-3 mt-1 text-primary" />
                <span className="text-muted-foreground">
                  г. Москва, ул. Спортивная, д. 1
                </span>
              </li>
              <li className="flex items-center">
                <Icon name="Phone" size={20} className="mr-3 text-primary" />
                <span className="text-muted-foreground">+7 (999) 123-45-67</span>
              </li>
              <li className="flex items-center">
                <Icon name="Mail" size={20} className="mr-3 text-primary" />
                <span className="text-muted-foreground">info@sportevent.ru</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>© {currentYear} SportEvent. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
