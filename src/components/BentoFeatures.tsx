import { Car, Heart, Building2, ShieldAlert, Zap, Clock } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { Section } from '../layout/Section';
import { cn } from '../layout/Container';
import compassImg from '../assets/compass.jpg';

const features = [
    {
        title: 'Seguro Auto Inteligente',
        description: 'Telemetria avançada que recompensa motoristas prudentes. Pague por quanto e como você dirige.',
        icon: Car,
        className: 'md:col-span-2 md:row-span-2 relative overflow-hidden group',
        bgImage: compassImg,
    },
    {
        title: 'Proteção Empresarial',
        description: 'Mitigação de riscos patrimoniais e operacionais com suporte de especialistas globais.',
        icon: Building2,
        className: 'md:col-span-1 md:row-span-1 glass-card',
    },
    {
        title: 'Cyber Risk Protection',
        description: 'Blindagem contra ataques digitais e vazamento de dados.',
        icon: ShieldAlert,
        className: 'md:col-span-1 md:row-span-1 glass-card',
    },
    {
        title: 'Seguro de Vida Flex',
        description: 'Um ecossistema de bem-estar com telemedicina e suporte psicológico on-demand.',
        icon: Heart,
        className: 'md:col-span-1 md:row-span-2 glass-card bg-gradient-to-b from-rose-500/10 to-transparent',
    },
    {
        title: 'Sinistro Digital Instantâneo',
        description: 'Processamento de sinistros em minutos, pagamento autorizado via smart contracts.',
        icon: Zap,
        className: 'md:col-span-2 md:row-span-1 glass-card',
    },
    {
        title: 'Atendimento 24h',
        description: 'Suporte imediato por especialistas reais. Você não fala com robôs.',
        icon: Clock,
        className: 'md:col-span-1 md:row-span-1 glass-card',
    },
];

export function BentoFeatures() {
    const { ref, isVisible } = useReveal();

    return (
        <Section id="solucoes" className="bg-brand-dark/50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16 max-w-2xl">
                    <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 gradient-text">
                        Nossos Produtos
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Seja qual for a sua necessidade, nós encontramos a solução ideal com avaliação precisa do risco e indicação da melhor cobertura.
                    </p>
                </div>

                <div
                    ref={ref}
                    className={cn(
                        "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] gap-6 transition-all duration-1000",
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    )}
                >
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={index}
                                className={cn(
                                    "group p-8 rounded-3xl flex flex-col justify-between overflow-hidden relative cursor-default transition-all duration-500 border border-white/5",
                                    "hover:scale-[1.02] hover:border-brand-primary/50 hover:shadow-2xl hover:shadow-brand-primary/20",
                                    feature.className
                                )}
                            >
                                {feature.bgImage ? (
                                    <>
                                        <div
                                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                            style={{ backgroundImage: `url(${feature.bgImage})` }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent" />
                                    </>
                                ) : (
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                )}

                                <div className="relative z-10 w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-primary/20 transition-colors duration-500 border border-white/5">
                                    <Icon className="w-6 h-6 text-white group-hover:text-brand-primary transition-colors" />
                                </div>

                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-brand-primary transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </Section>
    );
}
