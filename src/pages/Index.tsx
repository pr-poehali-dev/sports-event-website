import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EventCard from '@/components/EventCard';
import Icon from '@/components/ui/icon';

// Временные данные для примера
const FEATURED_EVENTS = [
  {
    id: '1',
    title: 'Марафон "Бегущий город"',
    date: '2025-06-10',
    location: 'Москва',
    image: 'https://source.unsplash.com/random/800x600/?marathon',
    category: 'Бег',
    participants: 120,
    maxParticipants: 200,
    description: 'Ежегодный городской марафон с дистанциями 5 км, 10 км и 21 км. Подходит для бегунов всех уровней.'
  },
  {
    id: '2',
    title: 'Турнир по плаванию "Водная стихия"',
    date: '2025-05-15',
    location: 'Санкт-Петербург',
    image: 'https://source.unsplash.com/random/800x600/?swimming',
    category: 'Плавание',
    participants: 45,
    maxParticipants: 50,
    description: 'Открытый турнир по плаванию в различных категориях. Участвуйте и побеждайте!'
  },
  {
    id: '3',
    title: 'Велогонка "Горный серпантин"',
    date: '2025-07-20',
    location: 'Сочи',
    image: 'https://source.unsplash.com/random/800x600/?cycling',
    category: 'Велоспорт',
    participants: 75,
    maxParticipants: 100,
    description: 'Захватывающая велогонка по живописным горным трассам. Проверьте свои силы на сложной трассе.'
  }
];

const CATEGORIES = [
  { value: 'all', label: 'Все категории' },
  { value: 'running', label: 'Бег' },
  { value: 'swimming', label: 'Плавание' },
  { value: 'cycling', label: 'Велоспорт' },
  { value: 'team-sports', label: 'Командные виды спорта' },
  { value: 'fitness', label: 'Фитнес' },
  { value: 'triathlon', label: 'Триатлон' },
  { value: 'martial-arts', label: 'Единоборства' },
  { value: 'yoga', label: 'Йога' },
];

const UPCOMING_EVENTS = [
  {
    id: '4',
    title: 'Чемпионат по баскетболу',
    date: '2025-05-25',
    location: 'Казань',
    image: 'https://source.unsplash.com/random/800x600/?basketball',
    category: 'Командные виды спорта',
    participants: 80,
    maxParticipants: 120,
    description: 'Городской чемпионат по баскетболу среди любительских команд. Зрелищные матчи и дружеская атмосфера.'
  },
  {
    id: '5',
    title: 'Йога-фестиваль "Гармония"',
    date: '2025-06-05',
    location: 'Москва',
    image: 'https://source.unsplash.com/random/800x600/?yoga',
    category: 'Йога',
    participants: 50,
    maxParticipants: 50,
    description: 'Трехдневный фестиваль йоги с мастер-классами от лучших преподавателей. Место для релаксации и саморазвития.'
  },
  {
    id: '6',
    title: 'Триатлон "Железный человек"',
    date: '2025-07-12',
    location: 'Калининград',
    image: 'https://source.unsplash.com/random/800x600/?triathlon',
    category: 'Триатлон',
    participants: 60,
    maxParticipants: 80,
    description: 'Испытайте себя в одном из самых сложных видов спорта. Плавание, велогонка и бег в одном соревновании.'
  }
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');

  return (
    <div className="flex flex-col min-h-screen dark">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-gradient py-20 px-4 text-center">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Участвуйте в спортивных мероприятиях
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-300 max-w-3xl mx-auto">
            Найдите подходящее мероприятие, зарегистрируйтесь и станьте частью спортивного сообщества
          </p>
          
          <div className="bg-card rounded-lg p-4 shadow-lg max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Поиск мероприятий..."
                  className="pl-10 w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="w-full md:w-[200px]">
                  <SelectValue placeholder="Категория" />
                </SelectTrigger>
                <SelectContent>
                  {CATEGORIES.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button className="w-full md:w-auto">
                <Search className="mr-2 h-4 w-4" /> Найти
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Events */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-3xl font-bold mb-2">Популярные мероприятия</h2>
              <p className="text-muted-foreground">Самые интересные события этого месяца</p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/events" className="flex items-center">
                Все мероприятия <Icon name="ArrowRight" size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURED_EVENTS.map(event => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Categories */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Категории</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {CATEGORIES.filter(cat => cat.value !== 'all').map((category) => (
              <Link 
                key={category.value} 
                to={`/events?category=${category.value}`}
                className="bg-card rounded-lg p-6 text-center shadow transition-all hover:shadow-md hover:translate-y-[-5px]"
              >
                <div className="mb-4 mx-auto bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full">
                  <Icon name={getCategoryIcon(category.value)} size={28} className="text-primary" />
                </div>
                <h3 className="font-medium text-lg">{category.label}</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Исследуйте события
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Upcoming Events */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-3xl font-bold mb-2">Предстоящие мероприятия</h2>
              <p className="text-muted-foreground">Не пропустите ближайшие события</p>
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Icon name="Filter" size={16} />
              Фильтры
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {UPCOMING_EVENTS.map(event => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/events" className="flex items-center gap-2">
                Все мероприятия
                <Icon name="ArrowRight" size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Готовы принять участие?</h2>
          <p className="text-xl mb-10 opacity-90">
            Присоединяйтесь к спортивному сообществу и найдите мероприятие, которое вам подходит.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/events">Найти мероприятие</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/20 hover:bg-primary-foreground/10">
              <Link to="/register">Создать аккаунт</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

// Функция для выбора иконки в зависимости от категории
function getCategoryIcon(category: string): string {
  switch (category) {
    case 'running':
      return 'Running';
    case 'swimming':
      return 'Waves';
    case 'cycling':
      return 'Bike';
    case 'team-sports':
      return 'Users';
    case 'fitness':
      return 'Dumbbell';
    case 'triathlon':
      return 'Timer';
    case 'martial-arts':
      return 'Swords';
    case 'yoga':
      return 'Flower2';
    default:
      return 'Activity';
  }
}

export default Index;
