import { FaArrowRight } from "react-icons/fa";
import Title from "../Title/Title";


export default function SectionEquipe(props) {
    return (
        <section className="grid lg:grid-cols-2 mt-36 px-5 sm:px-10 md:px-20">
            <div>
                <Title {...props} />

                <button className="py-3 px-4 hover:px-5 rounded-full font-extrabold flex justify-center items-center text-sm lg:text-base transition-all duration-300 cursor-pointer text-white bg-[var(--purple)] border-2 border-[var(--purple)] w-max">Prendre rendez-vous &nbsp; <FaArrowRight /> </button>
            </div>

            <div className="flex justify-center items-center mt-30 lg:mt-0">
                <img src="/liadtech-robot.png" alt="Équipe Liadtech" className="w-100 animate-bounce drop-shadow-lg" style={{ animationDuration: '6000ms' }} />
            </div>
        </section>
    );
}