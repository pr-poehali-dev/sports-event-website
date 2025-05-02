import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSuccess(false);
    
    // Простая валидация
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Пожалуйста, заполните все обязательные поля');
      return;
    }
    
    try {
      setIsSubmitting(true);
      
      // Имитация отправки формы
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        
        // Сброс формы
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      }, 1500);
      
    } catch (err) {
      setIsSubmitting(false);
      setError('Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте еще раз.');
    }
  };

  return (
    <div className="flex flex-col min-h-screen dark">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-gradient py-20 px-4 text-center">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Свяжитесь с нами</h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-300 max-w-3xl mx-auto">
            Мы готовы ответить на все ваши вопросы и помочь с организацией мероприятий
          </p>
        </div>
      </section>
      
      {/* Contact Info + Form */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-6">Наши контакты</h2>
                <p className="text-muted-foreground mb-6">
                  Свяжитесь с нами любым удобным способом. Мы всегда рады помочь и ответить на ваши вопросы.
                </p>
              </div>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Icon name="Mail" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Электронная почта</h3>
                      <p className="text-muted-foreground mb-1">Для общих вопросов:</p>
                      <a href="mailto:info@sportevent.ru" className="text-primary hover:underline">
                        info@sportevent.ru
                      </a>
                      <p className="text-muted-foreground mt-2 mb-1">Для организаторов:</p>
                      <a href="mailto:partners@sportevent.ru" className="text-primary hover:underline">
                        partners@sportevent.ru
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Icon name="Phone" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Телефон</h3>
                      <p className="text-muted-foreground mb-1">Основной телефон:</p>
                      <a href="tel:+74951234567" className="text-primary hover:underline">
                        +7 (495) 123-45-67
                      </a>
                      <p className="text-muted-foreground mt-2 mb-1">Поддержка участников:</p>
                      <a href="tel:+74951234568" className="text-primary hover:underline">
                        +7 (495) 123-45-68
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Icon name="MapPin" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Адрес</h3>
                      <p className="text-muted-foreground mb-2">
                        г. Москва, ул. Спортивная, д. 1, офис 205
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Метро: Спортивная, 5 минут пешком
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Icon name="Clock" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Время работы</h3>
                      <p className="text-muted-foreground">Понедельник - Пятница: 9:00 - 18:00</p>
                      <p className="text-muted-foreground">Суббота: 10:00 - 15:00</p>
                      <p className="text-muted-foreground">Воскресенье: выходной</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Отправить сообщение</h2>
                  
                  {isSuccess && (
                    <div className="bg-green-500/15 text-green-500 px-4 py-3 rounded-md mb-6 text-sm flex items-center">
                      <Icon name="CheckCircle" size={16} className="mr-2" />
                      Ваше сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время.
                    </div>
                  )}
                  
                  {error && (
                    <div className="bg-destructive/15 text-destructive px-4 py-3 rounded-md mb-6 text-sm flex items-center">
                      <Icon name="AlertCircle" size={16} className="mr-2" />
                      {error}
                    </div>
                  )}
                  
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="name">Имя *</Label>
                        <Input 
                          id="name" 
                          placeholder="Ваше имя" 
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="Ваш email" 
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Тема</Label>
                      <Select value={subject} onValueChange={setSubject}>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите тему обращения" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">Общий вопрос</SelectItem>
                          <SelectItem value="event">Вопрос по мероприятию</SelectItem>
                          <SelectItem value="partnership">Предложение о сотрудничестве</SelectItem>
                          <SelectItem value="support">Техническая поддержка</SelectItem>
                          <SelectItem value="other">Другое</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Сообщение *</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Текст вашего сообщения" 
                        rows={6}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full md:w-auto" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Icon name="Loader2" size={16} className="mr-2 animate-spin" />
                          Отправка...
                        </>
                      ) : (
                        <>
                          <Icon name="Send" size={16} className="mr-2" />
                          Отправить сообщение
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
              
              {/* Map */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Мы на карте</h3>
                <div className="rounded-lg overflow-hidden h-[300px] bg-muted">
                  <img 
                    src="https://source.unsplash.com/random/1200x600/?map" 
                    alt="Карта" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Часто задаваемые вопросы</h2>
            <p className="text-muted-foreground">
              Ответы на самые популярные вопросы наших пользователей
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: 'Как зарегистрироваться на мероприятие?',
                answer: 'Для регистрации на мероприятие необходимо создать аккаунт, выбрать интересующее событие и нажать кнопку "Подать заявку".'
              },
              {
                question: 'Можно ли отменить регистрацию?',
                answer: 'Да, вы можете отменить регистрацию в личном кабинете. Условия возврата средств зависят от политики организатора.'
              },
              {
                question: 'Как стать организатором?',
                answer: 'Для создания собственных мероприятий необходимо зарегистрироваться как организатор и подать заявку через личный кабинет.'
              },
              {
                question: 'Есть ли мобильное приложение?',
                answer: 'В настоящее время мы работаем над созданием мобильного приложения. Оно будет доступно в ближайшие месяцы.'
              }
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-primary/10 p-2 mt-1">
                      <Icon name="MessageSquare" size={16} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{faq.question}</h3>
                      <p className="text-muted-foreground text-sm">{faq.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
