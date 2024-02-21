import { useEffect, useRef, useState } from "react";
import BIRDS from "vanta/dist/vanta.birds.min";
import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Work from "./components/Work";
import HireMe from "./components/HireMe";
import Technologies from "./components/Technologies";
import Certificados from "./components/Certificados";

function App() {
    const [vantaEffect, setVantaEffect] = useState(0);
    const headerRef = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            const main = document.getElementById("main");
            main.style.opacity = 1;
            main.style.filter = "blur(0px)";
        }, 1000);
    }, []);

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                BIRDS({
                    el: headerRef.current,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.0,
                    minWidth: 200.0,
                    scale: 1.0,
                    scaleMobile: 1.0,
                    birdSize: 1.3,
                    wingSpan: 25.0,
                    speedLimit: 4.0,
                    separation: 100.0,
                    alignment: 1.0,
                    cohesion: 43.0,
                    quantity: 3.0,
                    backgroundAlpha: 0.0,
                })
            );
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);

    function updateList() {
        const titles = [...document.querySelectorAll("h1, h2")].sort((a, b) => {
            return (
                Math.abs(a.getBoundingClientRect().top) -
                Math.abs(b.getBoundingClientRect().top)
            );
        });

        document
            .querySelectorAll(".selected-circle")
            .forEach((c) => c.classList.remove("selected-circle"));

        document
            .querySelectorAll(".nav-dot")
            [
                [...document.querySelectorAll("h1, h2")].indexOf(titles[0])
            ].classList.add("selected-circle");
    }

    window.addEventListener("scroll", () => {
        updateList();
    });

    return (
        <div className="bg-body h-full w-full text-white font-poppins pb-12">
            <div
                ref={headerRef}
                className="w-full h-screen absolute top-0 left-0 z-0"
            />
            <main id="main" className="w-full relative">
                <Nav />
                <Header />
                <Work />
                <Technologies />
                <Certificados/>
                <HireMe />
            </main>
        </div>
    );
}

export default App;
