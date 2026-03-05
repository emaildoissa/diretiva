import { Container } from '../layout/Container';
import logo from '../assets/logo.png';

export function Footer() {
    return (
        <footer className="bg-black/40 border-t border-white/5 pt-20 pb-12">
            <Container>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
                    <div className="col-span-2 lg:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <img src={logo} alt="Diretiva Seguros" className="h-32 w-auto object-contain" />

                        </div>
                        <p className="text-gray-400 max-w-xs text-sm leading-relaxed mb-6">
                            A corretora que resolve, acompanha e entrega resultado. Segurança, agilidade e economia sem complicações.
                        </p>
                        <div className="text-sm font-medium text-brand-primary border border-brand-primary/20 bg-brand-primary/10 inline-block px-3 py-1 rounded-full">
                            Autorizada pela SUSEP
                        </div>
                    </div>

                    <div>
                        <h5 className="font-bold mb-6 text-sm uppercase tracking-widest text-gray-400">Produtos</h5>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li><a href="#" className="hover:text-brand-primary transition-colors">Seguro Auto</a></li>
                            <li><a href="#" className="hover:text-brand-primary transition-colors">Seguro Vida</a></li>
                            <li><a href="#" className="hover:text-brand-primary transition-colors">Proteção Empresarial</a></li>
                            <li><a href="#" className="hover:text-brand-primary transition-colors">Cyber Risk</a></li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="font-bold mb-6 text-sm uppercase tracking-widest text-gray-400">Institucional</h5>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li><a href="#" className="hover:text-brand-primary transition-colors">Sobre Nós</a></li>
                            <li><a href="#" className="hover:text-brand-primary transition-colors">Carreiras</a></li>
                            <li><a href="#" className="hover:text-brand-primary transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-brand-primary transition-colors">Imprensa</a></li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="font-bold mb-6 text-sm uppercase tracking-widest text-gray-400">Suporte</h5>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li><a href="#" className="hover:text-brand-primary transition-colors">Atendimento 24h</a></li>
                            <li><a href="#" className="hover:text-brand-primary transition-colors">Sinistros</a></li>
                            <li><a href="#" className="hover:text-brand-primary transition-colors">Ouvidoria</a></li>
                            <li><a href="#" className="hover:text-brand-primary transition-colors">Termos de Uso</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-500">
                    <div className="flex flex-wrap justify-center gap-8">
                        <span>© 2026 Diretiva Seguros S.A.</span>
                        <span>CNPJ: 00.000.000/0001-00</span>
                        <span>SUSEP: 00000.000000/0000-00</span>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
