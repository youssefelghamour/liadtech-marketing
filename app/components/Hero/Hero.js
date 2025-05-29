import { BsCalendar4 } from "react-icons/bs";


const Hero = () => {
    return (
        <section className="section-hero w-[98%] mx-auto pt-[170px] lg:pt-[220px] rounded-b-2xl relative overflow-hidden px-10">
            <div className="container">
                <h1 className="text-[2vw] md:text-[1.6vw] lg:text-[1.15vw] 2xl:text-[1vw] surtitle lg:text-center uppercase text-[var(--purple)] z-[1] font-extrabold mb-4">
                    Agence de création de site internet
                </h1>

                <h2 className="text-[11vw] md:text-[9vw] lg:text-[60px] 2xl:text-[72px] leading-[110%] lg:leading-[120%] font-black lg:text-center max-w-[970px] mx-auto text-purple-brand max-w-[450px] lg:max-w-none">
                    Votre site web
                    <span className="font-extrabold text-[var(--purple)] bg-white font-clash tracking-tighter px-1 leading-tight"> clé en main </span>&nbsp;
                    <br />
                    100&nbsp;% personnalisé
                </h2>

                <p className="text-purple-brand font-medium text-lg md:text-center">
                    Devenez visible avec un
                    <a href="#" className="">site internet professionnel</a>
                    conçu par des experts.
                </p>
            </div>

            <div className="mt-10 px-4">
                <div className="container flex lg:justify-center gap-2">
                    <button className="py-3 px-4 hover:px-5 rounded-full font-extrabold text-sm lg:text-base transition-all duration-300 cursor-pointer text-white bg-[var(--purple)] border-2 border-[var(--purple)]">
                        Recevoir nos tarifs
                    </button>
                    
                    <button className="hidden md:flex items-center py-3 px-4 hover:px-5 rounded-full font-extrabold text-sm lg:text-base transition-all duration-300 cursor-pointer text-[var(--purple)] bg-transparent border-2 border-[var(--purple)]">
                        <BsCalendar4 /> &nbsp; Prendre rendez-vous
                    </button>
                </div>
            </div>

            
        </section>
    );
}

export default Hero;