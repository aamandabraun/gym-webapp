import { useState } from 'react';
import { ArrowLeft, Dumbbell, Clock, Flame, Play, User, Settings, Home } from 'lucide-react';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Badge } from './ui/badge';

interface ContentScreenProps {
  onBack: () => void;
}

const workouts = [
  {
    id: 1,
    title: 'Treino de Força',
    duration: '45 min',
    calories: '320 kcal',
    level: 'Intermediário',
    image: 'https://images.unsplash.com/photo-1676109829011-a9f0f3e40f00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBlcXVpcG1lbnQlMjB3ZWlnaHRzfGVufDF8fHx8MTc2MzY4Njg4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Força'
  },
  {
    id: 2,
    title: 'HIIT Cardio',
    duration: '30 min',
    calories: '450 kcal',
    level: 'Avançado',
    image: 'https://images.unsplash.com/photo-1734189605012-f03d97a4d98f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdHJhaW5pbmclMjBleGVyY2lzZXxlbnwxfHx8fDE3NjM3NjgyODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Cardio'
  },
  {
    id: 3,
    title: 'Yoga & Flexibilidade',
    duration: '40 min',
    calories: '180 kcal',
    level: 'Iniciante',
    image: 'https://images.unsplash.com/photo-1607909599990-e2c4778e546b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwc3RyZXRjaGluZ3xlbnwxfHx8fDE3NjM2NDk2NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Mobilidade'
  },
  {
    id: 4,
    title: 'Upper Body Focus',
    duration: '50 min',
    calories: '380 kcal',
    level: 'Intermediário',
    image: 'https://images.unsplash.com/photo-1584827386916-b5351d3ba34b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBmaXRuZXNzJTIwd29ya291dHxlbnwxfHx8fDE3NjM3NjI3OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Força'
  }
];

export function ContentScreen({ onBack }: ContentScreenProps) {
  const [activeTab, setActiveTab] = useState('workouts');

  return (
    <div className="min-h-screen bg-neutral-950 text-white pb-20">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-neutral-950/95 backdrop-blur-lg border-b border-neutral-800">
        <div className="p-4 flex items-center justify-between">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={onBack}
            className="text-white"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          
          <div className="flex items-center gap-2">
            <Dumbbell className="w-6 h-6 text-red-500" />
            <span className="text-lg">FitPro</span>
          </div>
          
          <Button variant="ghost" size="icon" className="text-white">
            <Settings className="w-5 h-5" />
          </Button>
        </div>
      </header>

      {/* User Stats */}
      <div className="p-6">
        <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm text-white/80">Bem-vindo de volta!</p>
              <h2 className="text-2xl">João Silva</h2>
            </div>
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <User className="w-6 h-6" />
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div>
              <div className="text-2xl">12</div>
              <div className="text-xs text-white/80">Treinos</div>
            </div>
            <div>
              <div className="text-2xl">4.2k</div>
              <div className="text-xs text-white/80">Calorias</div>
            </div>
            <div>
              <div className="text-2xl">8h</div>
              <div className="text-xs text-white/80">Horas</div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <Button className="bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 h-auto py-4 flex flex-col gap-2">
            <Play className="w-5 h-5 text-red-500" />
            <span className="text-sm">Treino Rápido</span>
          </Button>
          <Button className="bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 h-auto py-4 flex flex-col gap-2">
            <Flame className="w-5 h-5 text-orange-500" />
            <span className="text-sm">Desafio Diário</span>
          </Button>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full bg-neutral-900 border border-neutral-800 p-1 mb-6">
            <TabsTrigger value="workouts" className="flex-1">
              Treinos
            </TabsTrigger>
            <TabsTrigger value="programs" className="flex-1">
              Programas
            </TabsTrigger>
          </TabsList>

          <TabsContent value="workouts" className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl">Treinos Recomendados</h3>
            </div>

            {workouts.map((workout) => (
              <Card key={workout.id} className="bg-neutral-900 border-neutral-800 overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex gap-4">
                    <div className="relative w-32 h-32 flex-shrink-0">
                      <ImageWithFallback
                        src={workout.image}
                        alt={workout.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 left-2">
                        <Badge className="bg-red-500 hover:bg-red-500">
                          {workout.category}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="flex-1 py-4 pr-4">
                      <h4 className="mb-2">{workout.title}</h4>
                      <div className="flex flex-wrap gap-3 text-sm text-neutral-400 mb-3">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{workout.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Flame className="w-4 h-4" />
                          <span>{workout.calories}</span>
                        </div>
                      </div>
                      <Badge variant="outline" className="border-neutral-700 text-neutral-300">
                        {workout.level}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="programs" className="space-y-4">
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-neutral-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Dumbbell className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-xl mb-2">Programas em Breve</h3>
              <p className="text-neutral-400">
                Programas de treino estruturados estarão disponí­veis em breve
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-neutral-950 border-t border-neutral-800">
        <div className="flex items-center justify-around p-4">
          <Button variant="ghost" className="flex flex-col gap-1 h-auto text-red-500">
            <Home className="w-5 h-5" />
            <span className="text-xs">Início</span>
          </Button>
          <Button variant="ghost" className="flex flex-col gap-1 h-auto text-neutral-400">
            <Dumbbell className="w-5 h-5" />
            <span className="text-xs">Treinos</span>
          </Button>
          <Button variant="ghost" className="flex flex-col gap-1 h-auto text-neutral-400">
            <Flame className="w-5 h-5" />
            <span className="text-xs">Atividade</span>
          </Button>
          <Button variant="ghost" className="flex flex-col gap-1 h-auto text-neutral-400">
            <User className="w-5 h-5" />
            <span className="text-xs">Perfil</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
