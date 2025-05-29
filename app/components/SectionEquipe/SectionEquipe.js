import { FaArrowRight } from "react-icons/fa";


export default function SectionEquipe() {
    return (
        <section className="grid lg:grid-cols-2 mt-36 px-5 sm:px-10 md:px-20">
            <div>
                <h2 className="text-[2vw] md:text-[1.6vw] lg:text-[1.15vw] 2xl:text-[0.9vw] surtitle uppercase text-[var(--purple)] z-[1] font-extrabold mb-4">
                    Votre agence de création de site web
                </h2>
                
                <h3 className="text-[11vw] md:text-[9vw] lg:text-[60px] 2xl:text-[72px] leading-[110%] lg:leading-[120%] font-black max-w-[970px] mx-auto text-purple-brand max-w-[450px] lg:max-w-none">
                    Toute une équipe
                    <span className="text-[var(--purple)] font-clash tracking-tighter leading-tight"> dédiée </span>
                    à votre projet.
                </h3>

                <p className="mt-5 mb-5">Nous avançons avec vous pour accroître la visibilité de votre entreprise sur Google.</p>

                <button className="py-3 px-4 hover:px-5 rounded-full font-extrabold flex justify-center items-center text-sm lg:text-base transition-all duration-300 cursor-pointer text-white bg-[var(--purple)] border-2 border-[var(--purple)] w-max">Prendre rendez-vous &nbsp; <FaArrowRight /> </button>
            </div>

            <div className="flex justify-center items-center mt-30 lg:mt-0">
                <img src="/liadtech-robot.png" alt="Équipe Liadtech" className="w-100 animate-bounce" style={{ animationDuration: '6000ms' }} />
            </div>
        </section>
    );
}