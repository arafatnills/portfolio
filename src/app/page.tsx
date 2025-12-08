import MainLayout from "@/components/MainLayout";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Footer from "@/components/sections/Footer";

export default function Home() {
    return (
        <MainLayout>
            <About />
            <Skills />
            <Projects />
            <Footer />
        </MainLayout>
    );
}
