import { useState } from 'react';
import { ArrowLeft, Dumbbell, Clock, Flame, CheckCircle, Circle, Play } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';

interface WorkoutScreenProps {
  onBack: () => void;
}

const workoutPlan = {
  title: 'Treino A - Peito e Tríceps',
  date: 'Sexta-feira, 21 de Novembro',
  instructor: 'Prof. Carlos Silva',
  duration: '45-60 min',
  exercises: [
    {
      id: 1,
      name: 'Supino Reto',
      sets: '4x12',
      rest: '60s',
      notes: 'Manter a lombar apoiada no banco',
      completed: true,
    },
    {
      id: 2,
      name: 'Supino Inclinado com Halteres',
      sets: '3x15',
      rest: '45s',
      notes: 'Controlar a descida',
      completed: true,
    },
    {
      id: 3,
      name: 'Crucifixo Inclinado',
      sets: '3x12',
      rest: '45s',
      notes: 'Amplitude completa',
      completed: false,
    },
    {
      id: 4,
      name: 'Crossover',
      sets: '3x15',
      rest: '40s',
      notes: 'Foco na contração',
      completed: false,
    },
    {
      id: 5,
      name: 'Tríceps Testa',
      sets: '4x12',
      rest: '45s',
      notes: 'Apenas o antebraço se move',
      completed: false,
    },
    {
      id: 6,
      name: 'Tríceps Corda',
      sets: '3x15',
      rest: '40s',
      notes: 'Abrir a corda no final',
      completed: false,
    },
  ],
};

export function WorkoutScreen({ onBack }: WorkoutScreenProps) {
  const [exercises, setExercises] = useState(workoutPlan.exercises);
  
  const completedCount = exercises.filter(e => e.completed).length;
  const totalCount = exercises.length;
  const progress = (completedCount / totalCount) * 100;

  const toggleExercise = (id: number) => {
    setExercises(prev =>
      prev.map(ex =>
        ex.id === id ? { ...ex, completed: !ex.completed } : ex
      )
    );
  };

  return (
    <div className="min-h-screen bg-black text-white pb-6">
      {/* Header */}
      <div className="bg-gradient-to-br from-red-600 to-red-800 p-6 pb-8 rounded-b-[2rem]">
        <div className="flex items-center gap-4 mb-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={onBack}
            className="text-white hover:bg-white/20"
          >
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <h1 className="text-2xl">Meu Treino</h1>
        </div>

        {/* Workout Header */}
        <div className="space-y-3">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl mb-1">{workoutPlan.title}</h2>
              <p className="text-red-100 text-sm">{workoutPlan.date}</p>
            </div>
            <Badge className="bg-white/20 hover:bg-white/20 text-white border-0">
              Hoje
            </Badge>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-red-100">
            <div className="flex items-center gap-2">
              <Dumbbell className="w-4 h-4" />
              <span>{workoutPlan.instructor}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{workoutPlan.duration}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Card */}
      <div className="px-6 -mt-4 mb-6">
        <Card className="bg-gradient-to-br from-neutral-900 to-black border-red-600">
          <CardContent className="p-5">
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-sm text-neutral-400 mb-1">Progresso</p>
                <p className="text-2xl">
                  {completedCount} <span className="text-base text-neutral-400">/ {totalCount}</span>
                </p>
              </div>
              <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center">
                <Flame className="w-8 h-8 text-red-600" />
              </div>
            </div>
            <Progress value={progress} className="h-2 bg-neutral-800" />
          </CardContent>
        </Card>
      </div>

      {/* Exercises List */}
      <div className="px-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl">Exercícios</h3>
          <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-500 gap-2">
            <Play className="w-4 h-4" />
            Iniciar
          </Button>
        </div>

        <div className="space-y-3">
          {exercises.map((exercise, index) => (
            <Card
              key={exercise.id}
              className={`border transition-all cursor-pointer ${
                exercise.completed
                  ? 'bg-red-600/10 border-red-600/50'
                  : 'bg-neutral-950 border-neutral-800 hover:border-neutral-700'
              }`}
              onClick={() => toggleExercise(exercise.id)}
            >
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  {/* Number Badge */}
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                    exercise.completed ? 'bg-red-600' : 'bg-neutral-800'
                  }`}>
                    {exercise.completed ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <span className="text-sm">{index + 1}</span>
                    )}
                  </div>

                  {/* Exercise Info */}
                  <div className="flex-1 min-w-0">
                    <h4 className={`mb-2 ${exercise.completed ? 'line-through text-neutral-400' : ''}`}>
                      {exercise.name}
                    </h4>
                    
                    <div className="flex flex-wrap gap-3 text-sm mb-2">
                      <Badge variant="outline" className="border-neutral-700 text-neutral-300">
                        {exercise.sets}
                      </Badge>
                      <Badge variant="outline" className="border-neutral-700 text-neutral-300">
                        Descanso: {exercise.rest}
                      </Badge>
                    </div>

                    {exercise.notes && (
                      <p className="text-sm text-neutral-400 italic">
                        {exercise.notes}
                      </p>
                    )}
                  </div>

                  {/* Checkbox */}
                  <div className="flex-shrink-0">
                    {exercise.completed ? (
                      <CheckCircle className="w-6 h-6 text-red-600" />
                    ) : (
                      <Circle className="w-6 h-6 text-neutral-600" />
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Bottom Action */}
      {progress === 100 && (
        <div className="px-6 mt-6">
          <Card className="bg-gradient-to-r from-red-600 to-red-700 border-0">
            <CardContent className="p-5 text-center">
              <h3 className="text-xl mb-2">Treino Concluí­do!</h3>
              <p className="text-red-100 mb-4">
                Parabéns por completar todos os exercícios
              </p>
              <Button className="bg-white text-red-600 hover:bg-neutral-100 w-full">
                Finalizar Treino
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
