import type { ReactNode } from 'react';
import { cn } from './Container';

interface SectionProps {
    children: ReactNode;
    id?: string;
    className?: string;
}

export function Section({ children, id, className }: SectionProps) {
    return (
        <section id={id} className={cn("py-32 relative overflow-hidden", className)}>
            {children}
        </section>
    );
}
