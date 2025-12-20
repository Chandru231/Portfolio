import React from 'react';
import ProjectList from './components/ProjectList';
import MobileNav from './components/MobileNav';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';

const App = () => {
    return (
        <div className="bg-[#050505] text-white font-sans selection:bg-brutal-orange selection:text-black overflow-x-hidden">
            <MobileNav />

            {/* HERO SECTION */}
            <main>
                <HeroSection />

                {/* WORK SECTION */}
                <section id="work">
                    <ProjectList />
                </section>

                {/* ABOUT SECTION */}
                <AboutSection />

                {/* CONTACT SECTION */}
                <ContactSection />

            </main>

        </div>
    );
};

export default App;
