import { useReveal } from '../hooks/useReveal';
import { Section } from '../layout/Section';
import { cn } from '../layout/Container';

export function CTA() {
    const { ref, isVisible } = useReveal();

    return (
        <Section className="py-24 bg-brand-dark">
            <div className="max-w-5xl mx-auto px-6">
                <div
                    ref={ref}
                    className={cn(
                        "relative overflow-hidden rounded-[3rem] bg-brand-primary p-12 md:p-20 text-center shadow-2xl shadow-brand-primary/20 transition-all duration-1000",
                        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                    )}
                >
                    {/* Subtle texture fix */}
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent mix-blend-overlay"></div>

                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                            Solicite sua Cotação Agora
                        </h2>
                        <p className="text-white/80 text-xl mb-10 font-medium">
                            Rápido • Claro • Sem compromisso
                        </p>

                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            <button className="px-10 py-5 bg-white text-brand-primary font-bold rounded-2xl hover:scale-105 transition-transform shadow-xl">
                                Quero minha cotação
                            </button>
                            <button className="px-10 py-5 bg-black/20 text-white font-bold rounded-2xl backdrop-blur-md border border-white/20 hover:bg-black/30 transition-all">
                                Atendimento Imediato
                            </button>
                        </div>

                        <div className="pt-8 border-t border-white/20">
                            <p className="text-white/90 font-medium text-lg">
                                Proteção com clareza. Atendimento com propósito.<br />
                                <span className="font-bold">Diretiva Seguros</span> — Seu parceiro de confiança para o que realmente importa.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
