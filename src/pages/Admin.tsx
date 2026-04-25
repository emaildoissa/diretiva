import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { ExternalLink, MessageCircle, Clock, CheckCircle2 } from 'lucide-react';

// Configure suas variáveis de ambiente depois
const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY
);

interface Lead {
    id: string;
    created_at: string;
    nome: string;
    whatsapp: string;
    tipo_seguro: string;
    status: string;
}

export default function AdminDashboard() {
    const [leads, setLeads] = useState<Lead[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchLeads = async () => {
        const { data, error } = await supabase
            .from('leads')
            .select('*')
            .order('created_at', { ascending: false });

        if (!error) setLeads(data);
        setLoading(false);
    };

    useEffect(() => {
        fetchLeads();

        // Inscrição em tempo real para novos leads
        const subscription = supabase
            .channel('leads-realtime')
            .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'leads' }, (payload) => {
                setLeads((prev) => [payload.new as Lead, ...prev]);
            })
            .subscribe();

        return () => {
            supabase.removeChannel(subscription);
        };
    }, []);

    const updateStatus = async (id: string, newStatus: string) => {
        await supabase.from('leads').update({ status: newStatus }).eq('id', id);
        fetchLeads();
    };

    return (
        <div className="min-h-screen bg-[#020617] text-slate-200 p-6 md:p-12">
            <div className="max-w-7xl mx-auto">
                <header className="flex justify-between items-center mb-12">
                    <div>
                        <h1 className="text-4xl font-bold text-white tracking-tight">Painel de Leads</h1>
                        <p className="text-slate-400 mt-2">Diretiva Seguros — Gestão em tempo real</p>
                    </div>
                    <div className="flex gap-4">
                        <div className="bg-slate-900 border border-slate-800 px-6 py-3 rounded-2xl">
                            <span className="text-sm text-slate-500 block uppercase tracking-wider">Total Hoje</span>
                            <span className="text-2xl font-bold text-brand-primary">{leads.length}</span>
                        </div>
                    </div>
                </header>

                <div className="grid gap-6">
                    {loading ? (
                        <div className="text-center py-20">Carregando leads...</div>
                    ) : (
                        leads.map((lead) => (
                            <div
                                key={lead.id}
                                className="bg-slate-900/50 border border-slate-800 p-6 rounded-[2rem] flex flex-col md:flex-row items-center justify-between hover:border-brand-primary/30 transition-all group"
                            >
                                <div className="flex items-center gap-6 mb-4 md:mb-0">
                                    <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary font-bold text-xl uppercase">
                                        {lead.nome.charAt(0)}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white">{lead.nome}</h3>
                                        <div className="flex gap-3 mt-1 text-sm text-slate-400">
                                            <span className="flex items-center gap-1 uppercase tracking-widest text-[10px] font-bold text-brand-primary bg-brand-primary/5 px-2 py-0.5 rounded">
                                                {lead.tipo_seguro}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-3 h-3" /> {new Date(lead.created_at).toLocaleTimeString()}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <select
                                        value={lead.status}
                                        onChange={(e) => updateStatus(lead.id, e.target.value)}
                                        className="bg-slate-950 border border-slate-800 text-sm rounded-xl px-4 py-2 outline-none focus:border-brand-primary"
                                    >
                                        <option value="novo">Novo</option>
                                        <option value="em_atendimento">Em Atendimento</option>
                                        <option value="fechado">Fechado</option>
                                    </select>

                                    <a
                                        href={`https://wa.me/55${lead.whatsapp.replace(/\D/g, '')}`}
                                        target="_blank"
                                        className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-black font-bold px-6 py-2.5 rounded-xl transition-all"
                                    >
                                        <MessageCircle className="w-4 h-4" /> Atender
                                    </a>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}