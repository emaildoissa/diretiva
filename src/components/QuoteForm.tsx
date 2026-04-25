import React, { useState } from 'react';
import { Car, Home, Heart, Building2, Send } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { Section } from '../layout/Section';
import { cn } from '../layout/Container';
import { supabase } from '../lib/supabase';

export function QuoteForm() {
    const { ref, isVisible } = useReveal();
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false); // Estado para o botão de envio
    const [formData, setFormData] = useState({
        tipo: '',
        nome: '',
        whatsapp: '',
        detalhes: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const { error } = await supabase
                .from('leads')
                .insert([
                    {
                        nome: formData.nome,
                        whatsapp: formData.whatsapp,
                        tipo_seguro: formData.tipo,
                        detalhes: formData.detalhes
                    }
                ]);

            if (!error) {
                setStep(3); // Sucesso
            } else {
                console.error("Erro do Supabase:", error);
                throw new Error('Falha ao enviar dados');
            }
        } catch (error) {
            console.error("Erro no envio:", error);
            alert("Ocorreu um erro ao enviar sua solicitação. Por favor, tente novamente ou nos chame no WhatsApp.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Section className="py-24 bg-brand-dark" id="cotacao">
            <div className="max-w-6xl mx-auto px-6">
                <div
                    ref={ref}
                    className={cn(
                        "relative flex flex-col lg:flex-row items-center gap-12 overflow-hidden rounded-[3rem] bg-brand-primary p-8 md:p-16 shadow-2xl shadow-brand-primary/20 transition-all duration-1000",
                        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                    )}
                >
                    {/* Subtle texture fix */}
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent mix-blend-overlay pointer-events-none"></div>

                    {/* Lado Esquerdo - Highlights do CTA */}
                    <div className="relative z-10 lg:w-1/2 text-left flex flex-col justify-center">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
                            Solicite sua Cotação Agora
                        </h2>
                        <p className="text-white/80 text-xl mb-10 font-medium">
                            Rápido • Claro • Sem compromisso
                        </p>

                        <div className="pt-8 border-t border-white/20 hidden lg:block">
                            <p className="text-white/90 font-medium text-lg leading-relaxed">
                                Proteção com clareza. Atendimento com propósito.<br />
                                <span className="font-bold underline decoration-white/30 underline-offset-4">Diretiva Seguros</span> — Seu parceiro de confiança para o que realmente importa.
                            </p>
                        </div>
                    </div>

                    {/* Lado Direito - O Formulário em si */}
                    <div className="relative z-10 lg:w-1/2 w-full">
                        <div className="w-full mx-auto p-8 rounded-[2rem] bg-black/20 backdrop-blur-xl border border-white/10 shadow-2xl">
                            {step === 1 && (
                                <div className="space-y-6 animate-fade-in-up">
                                    <h3 className="text-2xl font-bold text-white text-center">O que vamos proteger hoje?</h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        {[
                                            { id: 'auto', label: 'Auto', icon: Car },
                                            { id: 'residencial', label: 'Residencial', icon: Home },
                                            { id: 'vida', label: 'Vida', icon: Heart },
                                            { id: 'empresa', label: 'Empresa', icon: Building2 },
                                        ].map((item) => (
                                            <button
                                                key={item.id}
                                                type="button"
                                                onClick={() => { setFormData({ ...formData, tipo: item.id }); setStep(2); }}
                                                className="flex flex-col items-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white hover:bg-white/10 transition-all group"
                                            >
                                                <item.icon className="w-8 h-8 mb-3 text-white/60 group-hover:text-white transition-colors" />
                                                <span className="text-white font-medium">{item.label}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {step === 2 && (
                                <form onSubmit={handleSubmit} className="space-y-4 animate-fade-in-up">
                                    <h3 className="text-xl font-bold text-white mb-4 text-center tracking-tight">
                                        Quase lá! Como o consultor te chama?
                                    </h3>
                                    <input
                                        required
                                        type="text"
                                        placeholder="Seu nome completo"
                                        className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:border-white focus:bg-white/10 outline-none transition-all"
                                        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                                        value={formData.nome}
                                    />
                                    <input
                                        required
                                        type="tel"
                                        placeholder="WhatsApp com DDD"
                                        className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:border-white focus:bg-white/10 outline-none transition-all"
                                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                                        value={formData.whatsapp}
                                    />
                                    <textarea
                                        placeholder="Algo específico? (Opcional)"
                                        className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:border-white focus:bg-white/10 outline-none transition-all h-24 resize-none"
                                        onChange={(e) => setFormData({ ...formData, detalhes: e.target.value })}
                                        value={formData.detalhes}
                                    />
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full py-4 mt-2 bg-white text-brand-primary font-bold rounded-xl hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {loading ? "Enviando..." : (
                                            <>Solicitar Orçamento <Send className="w-4 h-4" /></>
                                        )}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setStep(1)}
                                        className="w-full mt-2 text-white/50 text-sm hover:text-white transition-colors"
                                    >
                                        Voltar
                                    </button>
                                </form>
                            )}

                            {step === 3 && (
                                <div className="text-center py-10 animate-fade-in-up">
                                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/10">
                                        <span className="text-4xl">✅</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Solicitação Enviada!</h3>
                                    <p className="text-white/80">Em instantes, nosso especialista da Diretiva entrará em contato com você pelo WhatsApp.</p>
                                    <button
                                        type="button"
                                        onClick={() => { setStep(1); setFormData({ tipo: '', nome: '', whatsapp: '', detalhes: '' }); }}
                                        className="mt-8 px-6 py-2 bg-white/10 text-white hover:bg-white/20 rounded-lg transition-colors text-sm font-medium"
                                    >
                                        Fazer nova cotação
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Mobile Only: Mensagem no final */}
                    <div className="pt-8 border-t border-white/20 lg:hidden w-full text-center">
                        <p className="text-white/90 font-medium text-lg leading-relaxed">
                            Proteção com clareza. Atendimento com propósito.<br />
                            <span className="font-bold underline decoration-white/30 underline-offset-4">Diretiva Seguros</span>
                        </p>
                    </div>

                </div>
            </div>
        </Section>
    );
}