import { CheckCircle2 } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { Section } from '../layout/Section';
import { cn } from '../layout/Container';

const differentiators = [
    "Falamos com você imediatamente",
    "Cuidamos de todo o processo",
    "Explicamos cada detalhe",
    "Mantemos você informado a cada etapa",
    "Defendemos seus interesses junto às seguradoras"
];

export function Solutions() {
    const { ref, isVisible } = useReveal();

    return (
        <Section className="bg-brand-dark">
            <div className="max-w-7xl mx-auto px-6">
                <div
                    ref={ref}
                    className={cn(
                        "grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000",
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    )}
                >
                    <div className="space-y-8">
                        <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight text-white">
                            O que faz a Diretiva ser diferente?
                        </h2>
                        <p className="text-xl text-brand-primary font-semibold">
                            Atendimento direto. Resposta rápida. Transparência total.
                        </p>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Enquanto muitas corretoras demoram, terceirizam o atendimento ou passam informações incompletas, nós fazemos o oposto. Você não fica no escuro. Você sabe exatamente o que está comprando.
                        </p>

                        <ul className="space-y-4">
                            {differentiators.map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-gray-300">
                                    <CheckCircle2 className="w-5 h-5 text-brand-primary flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="relative">
                        <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl glass-card border-white/10">
                            <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/20 to-transparent z-10"></div>
                            <img
                                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
                                alt="Equipe Diretiva"
                                className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
                            />
                        </div>

                        {/* Floating stat card */}
                        <div className="absolute -bottom-8 -left-8 glass-effect p-8 rounded-3xl border-white/10 hidden md:block shadow-2xl animate-float">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-brand-primary/20 rounded-full flex items-center justify-center">
                                    <span className="text-2xl">🤝</span>
                                </div>
                                <div>
                                    <p className="text-3xl font-bold text-white mb-1">100%</p>
                                    <p className="text-xs uppercase tracking-widest text-gray-400">Atendimento Humano</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
