import type { ReactNode } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function Container({ children, className }: { children: ReactNode; className?: string }) {
    return (
        <div className={cn("max-w-7xl mx-auto px-6", className)}>
            {children}
        </div>
    );
}
