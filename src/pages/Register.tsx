import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, User, Mail, Lock, KeyRound } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Простая валидация
    if (!name.trim()) {
      setError('Введите имя');
      return;
    }
    
    if (!email.trim()) {
      setError('Введите email');
      return;
    }
    
    if (!password.trim()) {
      setError('Введите пароль');
      return;
    }
    
    if (password !== confirmPassword) {
      setError('Пароли не совпадают');
      return;
    }
    
    if (!acceptTerms) {
      setError('Необходимо принять условия использования');
      return;
    }
    
    try {
      setIsLoading(true);
      
      // Имитация запроса на сервер
      setTimeout(() => {
        // В реальном приложении здесь был бы запрос к API
        setIsLoading(false);
        
        // После успешной регистрации перенаправляем на главную или страницу подтверждения
        navigate('/login');
      }, 1500);
      
    } catch (err) {
      setIsLoading(false);
      setError('Ошибка при регистрации. Попробуйте еще раз.');
    }
  };
  
  // Проверка надежности пароля
  const getPasswordStrength = () => {
    if (!password) return 0;
    
    let strength = 0;
    
    // Длина не менее 8 символов
    if (password.length >= 8) strength += 25;
    
    // Содержит цифры
    if (/\d/.test(password)) strength += 25;
    
    // Содержит строчные буквы
    if (/[a-zа-я]/.test(password)) strength += 25;
    
    // Содержит заглавные буквы или специальные символы
    if (/[A-ZА-Я]/.test(password) || /[^a-zа-яA-ZА-Я0-9]/.test(password)) strength += 25;
    
    return strength;
  };
  
  const passwordStrength = getPasswordStrength();
  
  const getStrengthColor = () => {
    if (passwordStrength < 50) return 'bg-destructive';
    if (passwordStrength < 75) return 'bg-yellow-500';
    return 'bg-green-500';
  };
  
  const getStrengthText = () => {
    if (passwordStrength < 50) return 'Слабый';
    if (passwordStrength < 75) return 'Средний';
    return 'Надежный';
  };

  return (
    <div className="flex flex-col min-h-screen dark">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md">
          <Card className="border-border">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center">Регистрация</CardTitle>
              <CardDescription className="text-center">
                Создайте аккаунт для участия в мероприятиях
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              {error && (
                <div className="bg-destructive/15 text-destructive px-4 py-3 rounded-md mb-4 text-sm flex items-center">
                  <Icon name="AlertCircle" size={16} className="mr-2" />
                  {error}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Имя</Label>
                  <div className="relative">
                    <Icon name="User" size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                    <Input 
                      id="name" 
                      placeholder="Иван Иванов" 
                      className="pl-10"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Icon name="Mail" size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="name@example.com" 
                      className="pl-10"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password">Пароль</Label>
                  <div className="relative">
                    <Icon name="Lock" size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                    <Input 
                      id="password" 
                      type={showPassword ? "text" : "password"} 
                      placeholder="••••••••" 
                      className="pl-10 pr-10"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button 
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <Icon name="EyeOff" size={18} />
                      ) : (
                        <Icon name="Eye" size={18} />
                      )}
                    </button>
                  </div>
                  
                  {password && (
                    <div className="mt-2">
                      <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${getStrengthColor()}`}
                          style={{ width: `${passwordStrength}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="text-xs text-muted-foreground">Надежность пароля</span>
                        <span className={`text-xs ${passwordStrength < 50 ? 'text-destructive' : passwordStrength < 75 ? 'text-yellow-500' : 'text-green-500'}`}>
                          {getStrengthText()}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Подтверждение пароля</Label>
                  <div className="relative">
                    <Icon name="KeyRound" size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                    <Input 
                      id="confirmPassword" 
                      type={showPassword ? "text" : "password"} 
                      placeholder="••••••••" 
                      className="pl-10"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="flex items-start space-x-2">
                  <Checkbox 
                    id="terms" 
                    checked={acceptTerms}
                    onCheckedChange={(checked) => setAcceptTerms(!!checked)}
                  />
                  <div className="grid gap-1.5 leading-none">
                    <Label 
                      htmlFor="terms" 
                      className="text-sm text-muted-foreground font-normal leading-tight"
                    >
                      Я принимаю{' '}
                      <Link to="/terms" className="text-primary hover:underline">
                        условия использования
                      </Link>{' '}
                      и{' '}
                      <Link to="/privacy" className="text-primary hover:underline">
                        политику конфиденциальности
                      </Link>
                    </Label>
                  </div>
                </div>
                
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Icon name="Loader2" size={16} className="mr-2 animate-spin" />
                      Регистрация...
                    </>
                  ) : (
                    'Зарегистрироваться'
                  )}
                </Button>
              </form>
              
              <div className="mt-4 relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">
                    или зарегистрироваться через
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-4">
                <Button variant="outline" className="flex items-center gap-2">
                  <Icon name="Facebook" size={16} />
                  <span>Facebook</span>
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>Google</span>
                </Button>
              </div>
            </CardContent>
            
            <CardFooter className="flex flex-col">
              <p className="text-center text-sm mt-2">
                Уже есть аккаунт?{' '}
                <Link to="/login" className="text-primary hover:underline">
                  Войти
                </Link>
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Register;
