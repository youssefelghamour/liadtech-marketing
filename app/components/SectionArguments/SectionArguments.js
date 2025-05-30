import { SlScreenDesktop } from "react-icons/sl";
import { PiCertificateLight } from "react-icons/pi";
import { HiOutlineAdjustmentsVertical } from "react-icons/hi2";
import { FaArrowRight } from "react-icons/fa";



export default function SectionArguments(props) {
    return (
        <section className="pt-36 px-5 sm:px-10 md:px-20 lg:px-[80px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Left column */}
                <div className={`${props.page !== 'referencement' ? '2xl:pt-25' : ''}`}>
                    <h2 className="text-[2vw] md:text-[1.6vw] lg:text-[1.15vw] 2xl:text-[0.9vw] text-center lg:text-left uppercase text-[var(--purple)] z-[1] font-extrabold mb-4">{props.pretitle}</h2>
                    <h3 className="text-[40px] md:text-[60px] lg:text-[48px] xl:text-[72px] font-black text-center lg:text-left leading-none text-[var(--purple-light)]">
                        {props.title} <span className="font-extrabold text-black font-clash tracking-tighter leading-tight">{props.highlight}</span>
                    </h3>

                    <ul className={`mt-14 2xl:mr-15 ${props.page === 'creation' ? '2xl:ml-[120px]' : ''}`}>
                        {props.items ? (
                            props.items.map(({ icon: Icon, title, description }, i) => (
                                <li key={i} className="flex flex-col md:flex-row gap-x-6 gap-y-4 mb-12 items-start">
                                    <div className="rounded-full bg-[var(--purple-light-2)] p-4">
                                        <Icon size={40} />
                                    </div>
                                    <div>
                                        <p className="font-black text-2xl text-purple-brand">{title}</p>
                                        <p className="font-medium text-purple-brand">{description}</p>
                                    </div>
                                </li>
                            ))
                        ) : null}
                    </ul>
                </div>

                {/* Right column */}
                <div className="relative mt-20 lg:mt-0">
                    <img src="/liadtech-robot.png" width="180" height="180" alt="liadtech robot" className="absolute -left-2 md:-left-10 -top-15 drop-shadow-2xl" />

                    <picture>
                        <img src="/arguments-pic.png" alt="site Liadtech" className="w-full rounded-xl" />
                    </picture>

                    <div className={`bg-[var(--purple-bg)] p-6 rounded-lg max-w-[295px] md:max-w-[455px] lg:max-w-[365px] absolute -bottom-20 ${props.page === 'creation' ? 'right-4 xl:-right-4' : 'left-1/2 -translate-x-1/2'}`}>
                        <p className="font-medium text-purple-brand text-sm md:text-lg lg:text-base">
                            Gagnez du temps grâce à une équipe d'experts dédiée à la réalisation de votre projet et à l'atteinte de vos objectifs.
                        </p>
                        <div className={`mt-4 ${props.page === 'referencement' ? 'flex justify-center' : ''}`}>
                            <button className={`py-3 px-4 hover:px-5 rounded-full font-extrabold flex justify-center items-center text-sm lg:text-base transition-all duration-300 cursor-pointer text-white ${props.page === 'referencement' ? 'bg-[var(--second-purple)] border-2 border-[var(--second-purple)]' : 'bg-[var(--purple)] border-2 border-[var(--purple)]'} w-max`}>
                                {props.button} &nbsp; <FaArrowRight />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}