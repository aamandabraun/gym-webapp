import { Dumbbell, Zap, Users, Trophy } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HomeScreenProps {
  onNavigate: () => void;
}

export function HomeScreen({ onNavigate }: HomeScreenProps) {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1584827386916-b5351d3ba34b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBmaXRuZXNzJTIwd29ya291dHxlbnwxfHx8fDE3NjM3NjI3OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Gym fitness"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/70 via-neutral-950/50 to-neutral-950" />
        </div>
        
        <div className="relative z-10 h-full flex flex-col">
          {/* Header */}
          <header className="p-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Dumbbell className="w-8 h-8 text-red-500" />
              <span className="text-xl">FitPro</span>
            </div>
            <Button variant="ghost" className="text-white">
              Login
            </Button>
          </header>

          {/* Hero Content */}
          <div className="flex-1 flex items-center justify-center px-6">
            <div className="max-w-3xl text-center space-y-6">
              <h1 className="text-5xl md:text-7xl">
                Transforme seu
                <span className="block text-red-500">Corpo e Mente</span>
              </h1>
              <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
                Treinos personalizados, acompanhamento profissional e resultados garantidos
              </p>
              <div className="pt-4">
                <Button 
                  size="lg"
                  onClick={onNavigate}
                  className="bg-red-500 hover:bg-red-600 text-white px-8 py-6 text-lg"
                >
                  Começar Agora
                </Button>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 p-6 max-w-4xl mx-auto w-full">
            <div className="text-center">
              <div className="text-3xl text-red-500">500+</div>
              <div className="text-sm text-neutral-400">Alunos Ativos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl text-red-500">50+</div>
              <div className="text-sm text-neutral-400">Treinos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl text-red-500">24/7</div>
              <div className="text-sm text-neutral-400">Suporte</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl text-center mb-16">Por que escolher a FitPro?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800">
              <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl mb-3">Treinos Personalizados</h3>
              <p className="text-neutral-400">
                Planos de treino adaptados aos seus objetivos e ní­vel de condicionamento
              </p>
            </div>

            <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800">
              <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl mb-3">Comunidade Ativa</h3>
              <p className="text-neutral-400">
                Conecte-se com outros atletas e compartilhe sua jornada fitness
              </p>
            </div>

            <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800">
              <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center mb-4">
                <Trophy className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl mb-3">Resultados Reais</h3>
              <p className="text-neutral-400">
                Acompanhe seu progresso e comemore suas conquistas
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
