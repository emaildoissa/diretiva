import { useReveal } from '../hooks/useReveal';
import { cn } from '../layout/Container';
import backgroundImg from '../assets/background.png';

export function Hero() {
    const { ref, isVisible } = useReveal();

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Glow Elements */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-primary/20 rounded-full blur-[120px] animate-float"></div>
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-rose-500/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: '-2s' }}></div>
                <div className="absolute inset-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${backgroundImg})`
                        }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-br from-[#454244]/90 via-[#454244]/70 to-black/80" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-dark/90"></div>
            </div>

            <div
                ref={ref}
                className={cn(
                    "relative z-10 max-w-5xl mx-auto px-6 text-center transition-all duration-1000 transform",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                )}
            >
                <span className="inline-block py-1 px-4 rounded-full border border-brand-primary/30 bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-widest mb-8">
                    Proteção sem Complicação
                </span>

                <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-8 gradient-text leading-[1.1] tracking-tight">
                    Seguro Certo,<br />No Momento Certo.
                </h1>

                <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed font-light">
                    Diretiva Seguros — A corretora que resolve, acompanha e entrega resultado. Porque você não tem tempo a perder com burocracia, linguagem técnica e promessas vazias.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button className="w-full sm:w-auto px-8 py-4 bg-brand-primary text-white font-bold rounded-2xl hover:bg-brand-primary/90 transition-all hover:scale-105 shadow-lg shadow-brand-primary/20">
                        Quero minha cotação
                    </button>
                    <button className="w-full sm:w-auto px-8 py-4 glass-card hover:bg-white/10 text-white font-bold rounded-2xl transition-all border border-white/10 hover:border-white/20">
                        Atendimento Imediato
                    </button>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
                <span className="text-[10px] uppercase tracking-[0.2em]">Scroll para explorar</span>
                <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
            </div>
        </section>
    );
}
