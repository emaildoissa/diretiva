import { useEffect, useState } from 'react';
import { cn } from '../layout/Container';
import logo from '../assets/logo.png';

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                'fixed top-0 w-full z-50 transition-all duration-300',
                scrolled ? 'py-2 shadow-2xl glass-effect' : 'py-4 bg-transparent'
            )}
        >
            <div className="max-w-7xl mx-auto px-6 h-32 flex items-center justify-between">
                <a href="/" className="flex items-center gap-3 group">
                    <img src={logo} alt="Diretiva Seguros" className="h-28 w-auto object-contain transition-transform group-hover:scale-105" />
                </a>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
                    <a href="#solucoes" className="hover:text-white transition-colors">Soluções</a>
                    <a href="#corporativo" className="hover:text-white transition-colors">Corporativo</a>
                    <a href="#inovacao" className="hover:text-white transition-colors">Inovação</a>
                </div>

                <button className="bg-brand-primary hover:bg-brand-primary/90 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-brand-primary/25 cursor-pointer">
                    Solicitar Cotação
                </button>
            </div>
        </nav>
    );
}
