import { useRef, useEffect } from "react";

const Hero = () => {
    const videoRef = useRef();

    useEffect(() => {
        if (videoRef.current) videoRef.current.playbackRate = 2;
    }, []);
    return (
        <>
            <section id="hero">
                <div>
                    <h1>Mackbook Pro</h1>
                    <img src="/title.png" alt="Mackbook Title" />
                </div>
                <video ref={videoRef} src="/videos/hero.mp4" autoPlay playsInline muted />
                <button>Buy</button>
                <p>Froom $1599 or #133/mo for 12 months</p>
            </section>
        </>
    )
}

export default Hero;