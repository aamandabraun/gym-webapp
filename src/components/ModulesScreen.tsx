import { 
  CheckCircle, 
  Dumbbell, 
  Calendar, 
  Clock,
  Zap,
  User,
  LogOut
} from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import type { Screen } from '../App';

interface ModulesScreenProps {
  userName: string;
  onNavigate: (screen: Screen) => void;
}

const modules = [
  {
    id: 'checkin',
    title: 'Check-in',
    description: 'Registre sua presença',
    icon: CheckCircle,
    color: 'from-red-600 to-red-700',
    screen: 'checkin' as Screen,
  },
  {
    id: 'workout',
    title: 'Meu Treino',
    description: 'Treino do dia',
    icon: Dumbbell,
    color: 'from-red-500 to-orange-600',
    screen: 'workout' as Screen,
  },
  {
    id: 'schedule',
    title: 'Horários',
    description: 'Aulas e atividades',
    icon: Calendar,
    color: 'from-neutral-700 to-neutral-800',
    screen: 'modules' as Screen,
  },
];

const upcomingClasses = [
  {
    id: 1,
    name: 'Musculação',
    time: '18:00 - 19:00',
    instructor: 'Prof. Carlos',
    type: 'musculacao',
  },
  {
    id: 2,
    name: 'Zumba',
    time: '19:30 - 20:30',
    instructor: 'Prof. Ana',
    type: 'zumba',
  },
  {
    id: 3,
    name: 'Corrida',
    time: '07:00 - 08:00',
    instructor: 'Prof. João',
    type: 'corrida',
  },
];

export function ModulesScreen({ userName, onNavigate }: ModulesScreenProps) {
  return (
    <div className="min-h-screen bg-black text-white pb-6">
      {/* Header */}
      <div className="bg-gradient-to-br from-red-600 to-red-800 p-6 pb-20 rounded-b-[2rem]">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
              <User className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-red-100">Olá,</p>
              <p className="text-xl capitalize">{userName}</p>
            </div>
          </div>
          <Button 
            variant="ghost" 
            size="icon"
            className="text-white hover:bg-white/20"
            onClick={() => onNavigate('login')}
          >
            <LogOut className="w-5 h-5" />
          </Button>
        </div>

        <div className="space-y-1">
          <h1 className="text-3xl">BARBI APP</h1>
          <p className="text-red-100">Bem-vindo à sua academia</p>
        </div>
      </div>

      {/* Modules Grid */}
      <div className="px-6 -mt-12 mb-8">
        <div className="grid grid-cols-1 gap-4">
          {modules.map((module) => {
            const Icon = module.icon;
            return (
              <Card
                key={module.id}
                className="bg-gradient-to-br from-neutral-900 to-neutral-950 border-neutral-800 hover:border-red-600 transition-all cursor-pointer overflow-hidden group"
                onClick={() => onNavigate(module.screen)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${module.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl mb-1">{module.title}</h3>
                      <p className="text-sm text-neutral-400">{module.description}</p>
                    </div>
                    <Zap className="w-5 h-5 text-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Upcoming Classes */}
      <div className="px-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl">Próximas Atividades</h2>
          <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-500">
            Ver todas
          </Button>
        </div>

        <div className="space-y-3">
          {upcomingClasses.map((classItem) => (
            <Card key={classItem.id} className="bg-neutral-950 border-neutral-800">
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-600/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-red-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="mb-1 truncate">{classItem.name}</h4>
                    <p className="text-sm text-neutral-400">{classItem.instructor}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-red-600">{classItem.time}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="px-6 mt-8">
        <Card className="bg-gradient-to-br from-neutral-900 to-black border-neutral-800">
          <CardContent className="p-6">
            <h3 className="mb-4">Seu Progresso Hoje</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl text-red-600 mb-1">8</div>
                <div className="text-xs text-neutral-400">Dias seguidos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl text-red-600 mb-1">45</div>
                <div className="text-xs text-neutral-400">Min treinando</div>
              </div>
              <div className="text-center">
                <div className="text-2xl text-red-600 mb-1">12</div>
                <div className="text-xs text-neutral-400">Exercí­cios</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
