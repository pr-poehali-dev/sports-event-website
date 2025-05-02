import { useParams, Link } from 'react-router-dom';
import { Calendar, MapPin, Clock, Users, Award, CreditCard, Info, BookOpen, MessageCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

// Данные событий (используем тот же массив из Events.tsx)
const ALL_EVENTS = [
  {
    id: '1',
    title: 'Марафон "Бегущий город"',
    date: '2025-06-10',
    endDate: '2025-06-10',
    location: 'Москва, Парк Горького',
    image: 'https://source.unsplash.com/random/1200x600/?marathon',
    category: 'Бег',
    participants: 120,
    maxParticipants: 200,
    description: 'Ежегодный городской марафон с дистанциями 5 км, 10 км и 21 км. Подходит для бегунов всех уровней.',
    longDescription: 'Марафон "Бегущий город" - это большой праздник бега для профессионалов и любителей. В рамках мероприятия будут представлены дистанции для разных уровней подготовки: 5 км для начинающих, 10 км для опытных бегунов и полумарафон 21 км для настоящих героев.\n\nМаршрут проходит по живописным местам города, через парки и набережные. Каждый участник получит стартовый пакет с футболкой, номером и чипом для фиксации результата. На финише всех ждет памятная медаль и заслуженный отдых в зоне восстановления с напитками и фруктами.',
    requirements: [
      'Возраст от 18 лет для полумарафона, от 14 лет для дистанций 5 км и 10 км',
      'Медицинская справка о допуске к соревнованиям',
      'Спортивная одежда и обувь',
      'Предварительная регистрация и оплата взноса'
    ],
    organizer: {
      name: 'Беговой клуб "Марафонец"',
      contact: 'marathon@example.com',
      logo: 'https://source.unsplash.com/random/100x100/?logo'
    },
    status: 'upcoming',
    price: 2000,
    tags: ['марафон', 'бег', 'соревнования', 'спорт'],
    schedule: [
      { time: '07:00', description: 'Открытие стартового городка, начало выдачи стартовых пакетов' },
      { time: '08:30', description: 'Разминка для участников' },
      { time: '09:00', description: 'Старт полумарафона (21 км)' },
      { time: '09:30', description: 'Старт забега на 10 км' },
      { time: '10:00', description: 'Старт забега на 5 км' },
      { time: '13:00', description: 'Церемония награждения победителей' },
      { time: '15:00', description: 'Закрытие мероприятия' }
    ],
    faq: [
      { 
        question: 'Можно ли зарегистрироваться в день забега?', 
        answer: 'Регистрация в день забега возможна при наличии свободных мест, но стоимость участия будет выше. Рекомендуем регистрироваться заранее.' 
      },
      { 
        question: 'Что входит в стартовый пакет?', 
        answer: 'В стартовый пакет входит футболка участника, номер с чипом хронометража, информационные материалы и подарки от спонсоров.' 
      },
      { 
        question: 'Будут ли пункты питания на трассе?', 
        answer: 'Да, на трассе будут организованы пункты питания с водой, изотоническими напитками и легкими закусками. На дистанции 21 км пункты питания расположены каждые 5 км.' 
      }
    ]
  },
  // Другие события...
];

const EventDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  // Находим событие по ID
  const event = ALL_EVENTS.find(e => e.id === id);
  
  // Если событие не найдено
  if (!event) {
    return (
      <div className="flex flex-col min-h-screen dark">
        <Navbar />
        <div className="flex-grow container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Событие не найдено</h1>
          <p className="text-muted-foreground mb-8">Событие с указанным идентификатором не существует или было удалено.</p>
          <Button asChild>
            <Link to="/events">Вернуться к списку событий</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }
  
  // Форматирование даты
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };
  
  // Расчет процента заполненности
  const percentFilled = (event.participants / event.maxParticipants) * 100;
  const isFull = event.participants >= event.maxParticipants;

  return (
    <div className="flex flex-col min-h-screen dark">
      <Navbar />
      
      {/* Hero */}
      <div 
        className="relative h-64 md:h-96 w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${event.image})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 h-full flex items-end pb-8 relative z-10">
          <div>
            <Badge className="mb-3">{event.category}</Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{event.title}</h1>
            <div className="flex flex-wrap gap-4 text-white/90">
              <div className="flex items-center gap-1">
                <Icon name="Calendar" size={16} />
                <span>{formatDate(event.date)}</span>
              </div>
              <div className="flex items-center gap-1">
                <Icon name="MapPin" size={16} />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Icon name="Users" size={16} />
                <span>{event.participants} / {event.maxParticipants} участников</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Tabs */}
            <Tabs defaultValue="about">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="about" className="flex items-center gap-2">
                  <Icon name="Info" size={16} />
                  <span>Описание</span>
                </TabsTrigger>
                <TabsTrigger value="schedule" className="flex items-center gap-2">
                  <Icon name="Clock" size={16} />
                  <span>Расписание</span>
                </TabsTrigger>
                <TabsTrigger value="faq" className="flex items-center gap-2">
                  <Icon name="HelpCircle" size={16} />
                  <span>FAQ</span>
                </TabsTrigger>
              </TabsList>
              
              {/* About Tab */}
              <TabsContent value="about" className="mt-6">
                <div className="prose prose-invert max-w-none">
                  <h2 className="text-2xl font-bold mb-4">Об этом мероприятии</h2>
                  <p className="whitespace-pre-line">{event.longDescription}</p>
                  
                  {event.requirements && event.requirements.length > 0 && (
                    <div className="mt-8">
                      <h3 className="text-xl font-semibold mb-3">Требования к участникам</h3>
                      <ul className="space-y-2">
                        {event.requirements.map((req, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <Icon name="CheckCircle2" size={20} className="text-primary mt-0.5" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {event.organizer && (
                    <div className="mt-8 p-4 bg-card rounded-lg">
                      <h3 className="text-xl font-semibold mb-3">Организатор</h3>
                      <div className="flex items-center gap-4">
                        {event.organizer.logo && (
                          <img 
                            src={event.organizer.logo} 
                            alt={event.organizer.name}
                            className="w-16 h-16 rounded-full" 
                          />
                        )}
                        <div>
                          <div className="font-medium">{event.organizer.name}</div>
                          <div className="text-muted-foreground">{event.organizer.contact}</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </TabsContent>
              
              {/* Schedule Tab */}
              <TabsContent value="schedule" className="mt-6">
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold mb-4">Расписание</h2>
                  
                  {event.schedule && event.schedule.length > 0 ? (
                    <div className="relative">
                      <div className="absolute top-0 bottom-0 left-[22px] w-px bg-border"></div>
                      <div className="space-y-6">
                        {event.schedule.map((item, index) => (
                          <div key={index} className="flex gap-4">
                            <div className="w-[45px] h-[45px] flex-shrink-0 bg-card rounded-full border-2 border-primary z-10 flex items-center justify-center text-primary">
                              <Icon name="Clock" size={20} />
                            </div>
                            <div className="pt-2">
                              <h4 className="font-bold text-lg">{item.time}</h4>
                              <p className="text-muted-foreground">{item.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="text-muted-foreground">
                      Расписание мероприятия будет опубликовано позже.
                    </div>
                  )}
                </div>
              </TabsContent>
              
              {/* FAQ Tab */}
              <TabsContent value="faq" className="mt-6">
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold mb-4">Часто задаваемые вопросы</h2>
                  
                  {event.faq && event.faq.length > 0 ? (
                    <Accordion type="single" collapsible className="w-full">
                      {event.faq.map((item, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            {item.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  ) : (
                    <div className="text-muted-foreground">
                      Пока нет часто задаваемых вопросов.
                    </div>
                  )}
                  
                  <div className="pt-4">
                    <h3 className="font-semibold mb-2">У вас остались вопросы?</h3>
                    <p className="text-muted-foreground mb-4">
                      Если вы не нашли ответ на свой вопрос, свяжитесь с организаторами.
                    </p>
                    <Button variant="outline" className="flex items-center gap-2">
                      <Icon name="MessageCircle" size={16} />
                      <span>Связаться с организатором</span>
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Event Stats */}
              <Card>
                <CardHeader>
                  <CardTitle>Информация</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Статус</span>
                    <Badge variant="outline" className="capitalize">
                      {event.status === 'upcoming' ? 'Скоро' : 
                       event.status === 'ongoing' ? 'Идет сейчас' : 'Завершено'}
                    </Badge>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Дата</span>
                    <span>{formatDate(event.date)}</span>
                  </div>
                  
                  {event.endDate && event.date !== event.endDate && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Дата окончания</span>
                      <span>{formatDate(event.endDate)}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Участники</span>
                    <span>{event.participants} / {event.maxParticipants}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Стоимость</span>
                    <span>{event.price ? `${event.price} ₽` : 'Бесплатно'}</span>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Доступность мест</div>
                    <div className="h-2 w-full bg-secondary rounded-full">
                      <div 
                        className={`h-2 rounded-full ${isFull ? 'bg-destructive' : 'bg-primary'}`}
                        style={{ width: `${percentFilled}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Занято {event.participants} мест</span>
                      <span>Всего {event.maxParticipants}</span>
                    </div>
                  </div>
                  
                  <Button className="w-full" disabled={isFull}>
                    {isFull ? 'Регистрация закрыта' : 'Подать заявку'}
                  </Button>
                </CardContent>
              </Card>
              
              {/* Location */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="MapPin" size={18} />
                    Место проведения
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="font-medium">{event.location}</div>
                    <div className="text-sm text-muted-foreground">Подробная информация о месте проведения будет отправлена после регистрации</div>
                  </div>
                  
                  <div className="h-40 bg-muted rounded-md overflow-hidden">
                    <img 
                      src="https://source.unsplash.com/random/600x400/?map" 
                      alt="Map" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <Button variant="outline" className="w-full mt-4 flex items-center gap-2">
                    <Icon name="ExternalLink" size={16} />
                    <span>Открыть карту</span>
                  </Button>
                </CardContent>
              </Card>
              
              {/* Tags */}
              {event.tags && event.tags.length > 0 && (
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Tag" size={18} />
                      Теги
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {event.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
              
              {/* Share */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Share2" size={18} />
                    Поделиться
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon">
                      <Icon name="Facebook" size={18} />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Icon name="Twitter" size={18} />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Icon name="Instagram" size={18} />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Icon name="Link" size={18} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default EventDetail;
