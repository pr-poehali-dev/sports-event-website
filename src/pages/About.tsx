import { Link } from 'react-router-dom';
import { Check, Trophy, Users, Heart, Target, Calendar } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

// Временные данные для примера
const TEAM_MEMBERS = [
  {
    name: 'Александр Иванов',
    position: 'Основатель и CEO',
    bio: 'Профессиональный спортсмен с 15-летним стажем. Организатор множества спортивных мероприятий.',
    image: 'https://source.unsplash.com/random/300x300/?portrait,man,1'
  },
  {
    name: 'Елена Петрова',
    position: 'Менеджер по мероприятиям',
    bio: 'Опытный организатор массовых мероприятий с фокусом на беговые события и марафоны.',
    image: 'https://source.unsplash.com/random/300x300/?portrait,woman,1'
  },
  {
    name: 'Дмитрий Сидоров',
    position: 'Технический директор',
    bio: 'Отвечает за техническое обеспечение мероприятий и разработку платформы.',
    image: 'https://source.unsplash.com/random/300x300/?portrait,man,2'
  },
  {
    name: 'Мария Кузнецова',
    position: 'Маркетолог',
    bio: 'Специалист по цифровому маркетингу и продвижению спортивных событий.',
    image: 'https://source.unsplash.com/random/300x300/?portrait,woman,2'
  }
];

const STATS = [
  { value: '150+', label: 'Мероприятий проведено', icon: 'Calendar' },
  { value: '15,000+', label: 'Участников', icon: 'Users' },
  { value: '20+', label: 'Городов', icon: 'MapPin' },
  { value: '98%', label: 'Довольных клиентов', icon: 'Heart' }
];

const PARTNERS = [
  { name: 'SportBrand', logo: 'https://source.unsplash.com/random/200x80/?logo,sport,1' },
  { name: 'RunCompany', logo: 'https://source.unsplash.com/random/200x80/?logo,sport,2' },
  { name: 'FitCorp', logo: 'https://source.unsplash.com/random/200x80/?logo,sport,3' },
  { name: 'AthleteGear', logo: 'https://source.unsplash.com/random/200x80/?logo,sport,4' },
  { name: 'SportDrink', logo: 'https://source.unsplash.com/random/200x80/?logo,sport,5' },
  { name: 'RunTech', logo: 'https://source.unsplash.com/random/200x80/?logo,sport,6' }
];

const VALUES = [
  {
    title: 'Доступность',
    description: 'Мы стремимся делать спорт доступным для всех, независимо от уровня подготовки.',
    icon: 'Users'
  },
  {
    title: 'Качество',
    description: 'Высокие стандарты организации каждого мероприятия — наш приоритет.',
    icon: 'Award'
  },
  {
    title: 'Безопасность',
    description: 'Безопасность участников — главное требование ко всем нашим мероприятиям.',
    icon: 'Shield'
  },
  {
    title: 'Развитие',
    description: 'Мы постоянно развиваемся и внедряем новые форматы спортивных событий.',
    icon: 'TrendingUp'
  },
  {
    title: 'Сообщество',
    description: 'Мы создаем и поддерживаем активное спортивное сообщество.',
    icon: 'Heart'
  },
  {
    title: 'Экологичность',
    description: 'Наши мероприятия организованы с заботой об окружающей среде.',
    icon: 'Leaf'
  }
];

const ACHIEVEMENTS = [
  {
    year: '2022',
    title: 'Лучший организатор спортивных мероприятий года',
    description: 'По мнению Ассоциации спортивных организаторов России'
  },
  {
    year: '2023',
    title: 'Премия "Инноватор в спорте"',
    description: 'За разработку инновационной платформы для организации мероприятий'
  },
  {
    year: '2024',
    title: 'Организатор крупнейшего марафона в стране',
    description: 'Более 10 000 участников со всей России'
  }
];

const About = () => {
  return (
    <div className="flex flex-col min-h-screen dark">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-gradient py-20 px-4 text-center">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">О нас</h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-300 max-w-3xl mx-auto">
            Мы делаем спорт доступным и объединяем людей через участие в спортивных мероприятиях
          </p>
        </div>
      </section>
      
      {/* Our Mission */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Наша миссия</h2>
              <p className="text-muted-foreground mb-6">
                SportEvent — это платформа, которая помогает спортивным энтузиастам найти подходящие мероприятия и организаторам создавать успешные события.
              </p>
              <p className="text-muted-foreground mb-6">
                Мы начали свой путь в 2020 году с простой идеи — сделать спорт более доступным для всех. За это время мы провели более 150 мероприятий в 20+ городах России и помогли тысячам людей приобщиться к активному образу жизни.
              </p>
              <ul className="space-y-3">
                {['Доступность спорта для всех', 'Организация качественных мероприятий', 'Создание сообщества единомышленников', 'Популяризация здорового образа жизни'].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <Icon name="Check" size={20} className="text-primary mr-2 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden">
                  <img 
                    src="https://source.unsplash.com/random/600x600/?sport,team" 
                    alt="Наша команда" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-4 rounded-lg">
                  <p className="text-xl font-bold">С 2020 года</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Наши достижения</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((stat, index) => (
              <Card key={index} className="text-center p-6 bg-card hover:shadow-md transition-all">
                <CardContent className="p-0">
                  <div className="mb-4 mx-auto bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full">
                    <Icon name={stat.icon} size={28} className="text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Наши ценности</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Мы верим, что спорт меняет жизни к лучшему. Наши ценности отражают нашу приверженность к созданию значимых событий.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map((value, index) => (
              <Card key={index} className="hover:shadow-md transition-all">
                <CardContent className="pt-6">
                  <div className="mb-4 bg-primary/10 w-12 h-12 flex items-center justify-center rounded-full">
                    <Icon name={value.icon} size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Наша команда</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Познакомьтесь с профессионалами, которые делают SportEvent возможным
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM_MEMBERS.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-primary text-sm mb-2">{member.position}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild>
              <Link to="/contact">Связаться с нами</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Achievements Timeline */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Наш путь</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Основные достижения и награды нашей компании
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute top-0 bottom-0 left-[15px] md:left-1/2 w-[2px] bg-border md:transform md:-translate-x-1/2"></div>
            <div className="space-y-8">
              {ACHIEVEMENTS.map((achievement, index) => (
                <div key={index} className="relative">
                  <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                    <div className={`md:text-right ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                      <div className="bg-primary text-primary-foreground inline-block py-1 px-4 rounded-full mb-2">
                        {achievement.year}
                      </div>
                      <h3 className="text-xl font-semibold mb-1">{achievement.title}</h3>
                      <p className="text-muted-foreground">{achievement.description}</p>
                    </div>
                    
                    <div className={`hidden md:block ${index % 2 === 1 ? 'md:order-1' : ''}`}></div>
                  </div>
                  
                  <div className="absolute top-0 left-0 md:left-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center transform -translate-x-3 md:-translate-x-1/2">
                    <Icon name="Trophy" size={16} className="text-primary-foreground" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Partners */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Наши партнеры</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Компании, с которыми мы сотрудничаем для создания лучших спортивных мероприятий
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {PARTNERS.map((partner, index) => (
              <div key={index} className="bg-card rounded-lg p-4 flex items-center justify-center h-20">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="max-h-10 max-w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Присоединяйтесь к нам!</h2>
          <p className="text-xl mb-10 opacity-90">
            Станьте частью спортивного сообщества и найдите мероприятие, которое вам подходит.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/events">Найти мероприятие</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/20 hover:bg-primary-foreground/10">
              <Link to="/contact">Свяжитесь с нами</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
