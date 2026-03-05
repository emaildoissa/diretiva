import { ArrowRight, FileCheck, PhoneCall, Link, ArrowUpCircle } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { Section } from '../layout/Section';
import { cn } from '../layout/Container';

const steps = [
    { icon: PhoneCall, title: "Abertura Imediata", desc: "Suporte no momento que você mais precisa." },
    { icon: Link, title: "Acompanhamento Ponta a Ponta", desc: "Do aviso ao encerramento." },
    { icon: FileCheck, title: "Orientação de Documentos", desc: "Sem letras miúdas ou confusão." },
    { icon: ArrowUpCircle, title: "Intermediação Direta", desc: "Nós falamos com a seguradora." },
];

export function Corporate() {
    const { ref, isVisible } = useReveal();

    return (
        <Section id="corporativo" className="bg-black/20">
            <div className="max-w-7xl mx-auto px-6">
                <div
                    ref={ref}
                    className={cn(
                        "grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000",
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    )}
                >
                    <div className="space-y-8 order-2 lg:order-1">
                        <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight text-white">
                            Sinistro? A gente resolve.
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            O momento do sinistro é onde a maioria das corretoras some. A <span className="text-brand-primary font-bold">Diretiva faz o contrário.</span> Aqui, você não enfrenta nada sozinho.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6 pt-4">
                            {steps.map((step, idx) => {
                                const Icon = step.icon;
                                return (
                                    <div key={idx} className="glass-card p-6 rounded-2xl border-white/5 hover:border-brand-primary/30 transition-all duration-300">
                                        <Icon className="w-8 h-8 text-brand-primary mb-4" />
                                        <h4 className="font-bold text-lg mb-2 text-white">{step.title}</h4>
                                        <p className="text-gray-400 text-sm">{step.desc}</p>
                                    </div>
                                );
                            })}
                        </div>

                        <button className="flex items-center gap-2 font-bold text-white hover:text-brand-primary transition-colors pt-4 group">
                            Falar com Especialista de Sinistros
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    <div className="relative order-1 lg:order-2">
                        <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl glass-card border-white/10">
                            <img
                                src="https://images.unsplash.com/photo-1556761175-5973dc0f32b7?auto=format&fit=crop&q=80"
                                alt="Suporte Corporativo"
                                className="w-full h-full object-cover opacity-50 mix-blend-luminosity"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
