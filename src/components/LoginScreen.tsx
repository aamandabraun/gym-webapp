import { useState } from 'react';
import { Dumbbell, Mail, Lock, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface LoginScreenProps {
  onLogin: (name: string) => void;
}

export function LoginScreen({ onLogin }: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = email.split('@')[0] || 'Atleta';
    onLogin(name);
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1542766788-a2f588f447ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjM2NjU1NDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Gym"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Logo Section */}
        <div className="flex-1 flex items-center justify-center px-6 pt-20 pb-10">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center rotate-12">
                <Dumbbell className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl">
              BARBI
              <span className="block text-red-600">APP</span>
            </h1>
            <p className="text-neutral-400">Seu treino, seus resultados</p>
          </div>
        </div>

        {/* Login Form */}
        <div className="bg-neutral-950 rounded-t-[2rem] p-8 border-t-2 border-red-600">
          <h2 className="text-2xl mb-2">Bem-vindo de volta</h2>
          <p className="text-neutral-400 mb-8">Entre para continuar sua jornada</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm text-neutral-400">Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
                <Input
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-12 bg-neutral-900 border-neutral-800 h-14 text-white placeholder:text-neutral-600"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-neutral-400">Senha</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
                <Input
                  type="password"
                  placeholder="senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-12 bg-neutral-900 border-neutral-800 h-14 text-white placeholder:text-neutral-600"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-neutral-400">
                <input type="checkbox" className="rounded border-neutral-700" />
                Lembrar-me
              </label>
              <a href="#" className="text-red-600 hover:text-red-500">
                Esqueceu a senha?
              </a>
            </div>

            <Button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 h-14 text-lg gap-2 group"
            >
              Entrar
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-neutral-500">
              Não tem uma conta?{' '}
              <a href="#" className="text-red-600 hover:text-red-500">
                Cadastre-se
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
