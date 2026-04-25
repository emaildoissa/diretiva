import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { BentoFeatures } from '../components/BentoFeatures';
import { Solutions } from '../components/Solutions';
import { Corporate } from '../components/Corporate';
//import { CTA } from '../components/CTA';
import { QuoteForm } from '../components/QuoteForm';
import { Footer } from '../components/Footer';

export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <BentoFeatures />
                <Solutions />
                <Corporate />
                {/*<CTA />*/}
                <QuoteForm />
            </main>
            <Footer />
        </>
    );
}
