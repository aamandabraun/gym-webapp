import { ArrowLeft, Flame, Calendar, Trophy, Target, Zap, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { useState } from 'react';

interface CheckinScreenProps {
  userName: string;
  onBack: () => void;
}

const streakMilestones = [
  { days: 3, reward: 'Iniciante Dedicado'},
  { days: 7, reward: 'Uma Semana Forte'},
  { days: 14, reward: 'Duas Semanas Imparável'},
  { days: 30, reward: 'Campeão do Mês'},
  { days: 60, reward: 'Lenda da Academia'},
];

const recentCheckins = [
  { date: '21 Nov', day: 'Sexta', completed: true },
  { date: '20 Nov', day: 'Quinta', completed: true },
  { date: '19 Nov', day: 'Quarta', completed: true },
  { date: '18 Nov', day: 'Terça', completed: true },
  { date: '17 Nov', day: 'Segunda', completed: true },
  { date: '16 Nov', day: 'Domingo', completed: false },
  { date: '15 Nov', day: 'Sábado', completed: true },
];

export function CheckinScreen({ userName, onBack }: CheckinScreenProps) {
  const [currentStreak, setCurrentStreak] = useState(8);
  const [totalDays, setTotalDays] = useState(42);
  const [checkedInToday, setCheckedInToday] = useState(false);

  const handleCheckin = () => {
    if (!checkedInToday) {
      setCheckedInToday(true);
      setCurrentStreak(prev => prev + 1);
      setTotalDays(prev => prev + 1);
    }
  };

  const nextMilestone = streakMilestones.find(m => m.days > currentStreak);
  const daysUntilNext = nextMilestone ? nextMilestone.days - currentStreak : 0;

  return (
    <div className="min-h-screen bg-black text-white pb-6">
      {/* Header */}
      <div className="bg-gradient-to-br from-red-600 to-red-800 p-6 pb-12 rounded-b-[2rem]">
        <div className="flex items-center gap-4 mb-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={onBack}
            className="text-white hover:bg-white/20"
          >
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <h1 className="text-2xl">Check-in</h1>
        </div>

        <div className="text-center">
          <p className="text-red-100 mb-2">Olá, {userName}!</p>
          <h2 className="text-3xl mb-4">Mantenha sua sequência viva</h2>
        </div>
      </div>

      {/* Streak Display */}
      <div className="px-6 -mt-8 mb-6">
        <Card className="bg-gradient-to-br from-orange-600 to-red-600 border-0">
          <CardContent className="p-8 text-center">
            <div className="mb-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                {[...Array(Math.min(currentStreak, 5))].map((_, i) => (
                  <Flame 
                    key={i} 
                    className="w-8 h-8 text-white animate-pulse" 
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
              <div className="text-6xl mb-2">{currentStreak}</div>
              <p className="text-xl text-white/90">Dias Seguidos</p>
            </div>

            {!checkedInToday && (
              <Button
                onClick={handleCheckin}
                size="lg"
                className="bg-white text-red-600 hover:bg-neutral-100 w-full gap-2"
              >
                <CheckCircle className="w-5 h-5" />
                Fazer Check-in Hoje
              </Button>
            )}

            {checkedInToday && (
              <div className="bg-white/20 backdrop-blur rounded-xl p-4">
                <div className="flex items-center justify-center gap-2 text-white">
                  <CheckCircle className="w-5 h-5" />
                  <span>Check-in feito hoje!</span>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Stats Grid */}
      <div className="px-6 mb-6">
        <div className="grid grid-cols-2 gap-4">
          <Card className="bg-neutral-950 border-neutral-800">
            <CardContent className="p-5 text-center">
              <Calendar className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <div className="text-2xl mb-1">{totalDays}</div>
              <p className="text-sm text-neutral-400">Total de Dias</p>
            </CardContent>
          </Card>

          <Card className="bg-neutral-950 border-neutral-800">
            <CardContent className="p-5 text-center">
              <Target className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <div className="text-2xl mb-1">{daysUntilNext}</div>
              <p className="text-sm text-neutral-400">Para Próximo Nível</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Recent Check-ins */}
      <div className="px-6 mb-6">
        <h3 className="text-xl mb-4">Últimos 7 Dias</h3>
        <div className="grid grid-cols-7 gap-2">
          {recentCheckins.map((checkin, index) => (
            <div key={index} className="text-center">
              <div
                className={`w-full aspect-square rounded-xl flex items-center justify-center mb-2 ${
                  checkin.completed
                    ? 'bg-red-600 text-white'
                    : 'bg-neutral-800 text-neutral-500'
                }`}
              >
                {checkin.completed ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  <span className="text-xs">Ã¢Å“â€”</span>
                )}
              </div>
              <p className="text-xs text-neutral-400">{checkin.day.slice(0, 3)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="px-6 mb-6">
        <h3 className="text-xl mb-4">Conquistas</h3>
        <div className="space-y-3">
          {streakMilestones.map((milestone) => {
            const isUnlocked = currentStreak >= milestone.days;
            const isNext = milestone === nextMilestone;

            return (
              <Card
                key={milestone.days}
                className={`transition-all ${
                  isUnlocked
                    ? 'bg-gradient-to-r from-red-600/20 to-orange-600/20 border-red-600'
                    : isNext
                    ? 'bg-neutral-950 border-red-600/50'
                    : 'bg-neutral-950 border-neutral-800'
                }`}
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 ${
                        isUnlocked
                          ? 'bg-gradient-to-br from-red-600 to-orange-600'
                          : 'bg-neutral-800'
                      }`}
                    >
                    </div>
                    <div className="flex-1">
                      <h4 className={isUnlocked ? '' : 'text-neutral-400'}>
                        {milestone.reward}
                      </h4>
                      <p className="text-sm text-neutral-400">
                        {milestone.days} dias seguidos
                      </p>
                    </div>
                    {isUnlocked && (
                      <Badge className="bg-red-600 hover:bg-red-600">
                        <Trophy className="w-3 h-3 mr-1" />
                        Desbloqueado
                      </Badge>
                    )}
                    {isNext && (
                      <Badge variant="outline" className="border-red-600 text-red-600">
                        Próximo
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Motivation */}
      <div className="px-6">
        <Card className="bg-gradient-to-br from-neutral-900 to-black border-red-600">
          <CardContent className="p-6 text-center">
            <Zap className="w-12 h-12 text-red-600 mx-auto mb-3" />
            <h3 className="text-xl mb-2">Continue assim!</h3>
            <p className="text-neutral-400">
              Você está em uma sequência incrí­vel. Não deixe ela acabar agora!
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
