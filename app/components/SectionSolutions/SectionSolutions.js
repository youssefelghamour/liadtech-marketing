import { FaCheckCircle } from "react-icons/fa";


export default function SectionSolutions() {
    return (
        <section className="items-center text-center mt-36 px-5 sm:px-10 md:px-20">
            <div>
                <h2 className="text-[2vw] md:text-[1.6vw] lg:text-[1.15vw] 2xl:text-[0.9vw] surtitle uppercase text-[var(--purple)] z-[1] font-extrabold mb-4">
                    Conception de site web adapté à votre activité
                </h2>
                
                <h3 className="text-[11vw] md:text-[9vw] lg:text-[60px] 2xl:text-[72px] leading-[110%] lg:leading-[120%] font-black max-w-[970px] mx-auto text-purple-brand max-w-[450px] lg:max-w-none">
                    Pour chaque objectif, une solution
                    <span className="text-[var(--purple)] font-clash tracking-tighter leading-tight"> LIADTECH</span>
                </h3>

                <p className="mt-5 mb-5">Quels que soient vos besoins, nous concevons le site internet qu’il vous faut.</p>
            </div>




            {/* Second section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-28 justify-center">
                {/* Left */}
                <div className="flex justify-center lg:justify-end">
                    <img src="/arguments-pic.png" alt="services picture" className="w-[500px] h-[300px] rounded-xl object-cover" />
                </div>

                {/* Right */}
                <div className="flex flex-col items-start justify-center gap-5">
                    <div className="flex items-start gap-4">
                        <FaCheckCircle size={25} className="text-[var(--purple)]"/>
                        <div className="text-left">
                            <p className="font-bold text-lg">Création graphique et rédaction des contenus</p>
                            <p className="">Votre site web à la hauteur de vos ambitions.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <FaCheckCircle size={25} className="text-[var(--purple)]"/>
                        <div className="text-left">
                            <p className="font-bold text-lg">Version mobile et tablette</p>
                            <p className="">Accessible partout et à toute heure.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <FaCheckCircle size={25} className="text-[var(--purple)]"/>
                        <div className="text-left">
                            <p className="font-bold text-lg">Réservation de votre nom de domaine</p>
                            <p className="">Imposez votre identité avec un www qui fait rêver.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <FaCheckCircle size={25} className="text-[var(--purple)]"/>
                        <div className="text-left">
                            <p className="font-bold text-lg">Hébergement, maintenance et sécurisation sur nos serveurs</p>
                            <p className="">La facilité et la sécurité en un tour de main.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}