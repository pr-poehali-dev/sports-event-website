import { Link } from 'react-router-dom';
import { CalendarDays, MapPin, Users } from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from './ui/icon';

export interface EventProps {
  id: string;
  title: string;
  date: string;
  location: string;
  image: string;
  category: string;
  participants: number;
  maxParticipants: number;
  description: string;
}

const EventCard = ({ 
  id, 
  title, 
  date, 
  location, 
  image, 
  category,
  participants,
  maxParticipants,
  description
}: EventProps) => {
  const formattedDate = new Date(date).toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  
  const percentFilled = (participants / maxParticipants) * 100;
  const isFull = participants >= maxParticipants;

  return (
    <Card className="overflow-hidden card-hover">
      <div className="h-48 overflow-hidden">
        <img 
          src={image || 'https://source.unsplash.com/random/600x400/?sport'} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <Badge variant="secondary" className="mb-2">{category}</Badge>
          <Badge variant={isFull ? "destructive" : "outline"}>
            {participants}/{maxParticipants}
          </Badge>
        </div>
        <CardTitle className="line-clamp-1">{title}</CardTitle>
        <CardDescription className="flex items-center gap-1">
          <Icon name="CalendarDays" size={16} className="text-muted-foreground" />
          {formattedDate}
        </CardDescription>
        <CardDescription className="flex items-center gap-1">
          <Icon name="MapPin" size={16} className="text-muted-foreground" />
          {location}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        
        <div className="mt-3">
          <div className="h-2 w-full bg-secondary rounded-full">
            <div 
              className={`h-2 rounded-full ${isFull ? 'bg-destructive' : 'bg-primary'}`}
              style={{ width: `${percentFilled}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span className="flex items-center gap-1">
              <Icon name="Users" size={14} />
              {participants} участников
            </span>
            {isFull ? (
              <span className="text-destructive font-medium">Мест нет</span>
            ) : (
              <span>Осталось мест: {maxParticipants - participants}</span>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          asChild 
          className="w-full" 
          variant={isFull ? "outline" : "default"}
          disabled={isFull}
        >
          <Link to={`/events/${id}`}>
            {isFull ? "Регистрация закрыта" : "Подать заявку"}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
