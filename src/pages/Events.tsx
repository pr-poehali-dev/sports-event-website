import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EventCard from '@/components/EventCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';

// Временные данные для примера (объединяем с данными из Index.tsx)
const ALL_EVENTS = [
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
  },
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
  },
  {
    id: '7',
    title: 'Турнир по теннису',
    date: '2025-08-05',
    location: 'Москва',
    image: 'https://source.unsplash.com/random/800x600/?tennis',
    category: 'Теннис',
    participants: 32,
    maxParticipants: 32,
    description: 'Открытый теннисный турнир для любителей и профессионалов. Соревнования в одиночном и парном разрядах.'
  },
  {
    id: '8',
    title: 'Соревнования по кроссфиту',
    date: '2025-06-18',
    location: 'Новосибирск',
    image: 'https://source.unsplash.com/random/800x600/?crossfit',
    category: 'Фитнес',
    participants: 40,
    maxParticipants: 60,
    description: 'Интенсивные соревнования по кроссфиту с различными упражнениями и весовыми категориями.'
  },
  {
    id: '9',
    title: 'Футбольный турнир "Кожаный мяч"',
    date: '2025-07-25',
    location: 'Екатеринбург',
    image: 'https://source.unsplash.com/random/800x600/?football',
    category: 'Командные виды спорта',
    participants: 100,
    maxParticipants: 150,
    description: 'Традиционный футбольный турнир среди любительских команд. Яркие матчи и незабываемые эмоции.'
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

const LOCATIONS = [
  { value: 'moscow', label: 'Москва' },
  { value: 'spb', label: 'Санкт-Петербург' },
  { value: 'kazan', label: 'Казань' },
  { value: 'sochi', label: 'Сочи' },
  { value: 'kaliningrad', label: 'Калининград' },
  { value: 'novosibirsk', label: 'Новосибирск' },
  { value: 'ekaterinburg', label: 'Екатеринбург' },
];

const Events = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [showFreeOnly, setShowFreeOnly] = useState(false);
  const [availableOnly, setAvailableOnly] = useState(false);
  const [dateSort, setDateSort] = useState('nearest');

  // Фильтрация событий в соответствии с параметрами
  const filteredEvents = ALL_EVENTS.filter(event => {
    // Поиск по названию
    if (searchTerm && !event.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    
    // Фильтр по категории
    if (category !== 'all' && event.category !== category) {
      return false;
    }
    
    // Фильтр по локации
    if (location && !event.location.toLowerCase().includes(location.toLowerCase())) {
      return false;
    }
    
    // Фильтр по доступности
    if (availableOnly && event.participants >= event.maxParticipants) {
      return false;
    }
    
    return true;
  });

  // Сортировка по дате
  const sortedEvents = [...filteredEvents].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    
    if (dateSort === 'nearest') {
      return dateA - dateB;
    } else {
      return dateB - dateA;
    }
  });

  const resetFilters = () => {
    setSearchTerm('');
    setCategory('all');
    setLocation('');
    setPriceRange([0, 10000]);
    setShowFreeOnly(false);
    setAvailableOnly(false);
    setDateSort('nearest');
  };

  return (
    <div className="flex flex-col min-h-screen dark">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Все мероприятия</h1>
          <div className="flex gap-2">
            <Select value={dateSort} onValueChange={setDateSort}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Сортировка" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nearest">Сначала ближайшие</SelectItem>
                <SelectItem value="latest">Сначала дальние</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar with filters */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-lg p-5 sticky top-24">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-lg">Фильтры</h3>
                <Button variant="ghost" size="sm" onClick={resetFilters}>
                  Сбросить
                </Button>
              </div>
              
              <div className="space-y-5">
                <div>
                  <label className="text-sm font-medium mb-2 block">Поиск</label>
                  <div className="relative">
                    <Icon name="Search" size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                    <Input 
                      placeholder="Название события" 
                      className="pl-9"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                
                <Accordion type="single" collapsible defaultValue="category">
                  <AccordionItem value="category">
                    <AccordionTrigger className="py-2">Категория</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <Select value={category} onValueChange={setCategory}>
                          <SelectTrigger>
                            <SelectValue placeholder="Выберите категорию" />
                          </SelectTrigger>
                          <SelectContent>
                            {CATEGORIES.map((cat) => (
                              <SelectItem key={cat.value} value={cat.value}>
                                {cat.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="location">
                    <AccordionTrigger className="py-2">Местоположение</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <Select value={location} onValueChange={setLocation}>
                          <SelectTrigger>
                            <SelectValue placeholder="Выберите город" />
                          </SelectTrigger>
                          <SelectContent>
                            {LOCATIONS.map((loc) => (
                              <SelectItem key={loc.value} value={loc.value}>
                                {loc.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="price">
                    <AccordionTrigger className="py-2">Цена</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 pt-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="free" 
                            checked={showFreeOnly}
                            onCheckedChange={(checked) => setShowFreeOnly(!!checked)}
                          />
                          <label htmlFor="free" className="text-sm">
                            Только бесплатные
                          </label>
                        </div>
                        <div>
                          <div className="mb-2 flex justify-between text-sm">
                            <span>{priceRange[0]} ₽</span>
                            <span>{priceRange[1]} ₽</span>
                          </div>
                          <Slider
                            defaultValue={[0, 10000]}
                            max={10000}
                            step={500}
                            value={priceRange}
                            onValueChange={setPriceRange}
                          />
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="availability">
                    <AccordionTrigger className="py-2">Доступность</AccordionTrigger>
                    <AccordionContent>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="available" 
                          checked={availableOnly}
                          onCheckedChange={(checked) => setAvailableOnly(!!checked)}
                        />
                        <label htmlFor="available" className="text-sm">
                          Только с доступными местами
                        </label>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                
                <Button className="w-full">Применить фильтры</Button>
              </div>
            </div>
          </div>
          
          {/* Events Grid */}
          <div className="lg:col-span-3">
            {sortedEvents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {sortedEvents.map(event => (
                  <EventCard key={event.id} {...event} />
                ))}
              </div>
            ) : (
              <div className="bg-card rounded-lg p-10 text-center">
                <Icon name="SearchX" size={48} className="mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-xl font-semibold mb-2">Ничего не найдено</h3>
                <p className="text-muted-foreground mb-6">
                  По вашему запросу не найдено ни одного мероприятия. Попробуйте изменить параметры поиска.
                </p>
                <Button onClick={resetFilters}>Сбросить фильтры</Button>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Events;
