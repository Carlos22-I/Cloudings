import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Plans } from './components/Plans';
import { Clients } from './components/Clients';
import { Testimonials } from './components/Testimonials';
import { BrowserRouter } from 'react-router';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <BrowserRouter basename='/@figma/my-make-file'>
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <About />
        <Plans />
        <Clients />
        <Testimonials />
        <Footer />
      </div>
    </div>
    </BrowserRouter>
  );
}