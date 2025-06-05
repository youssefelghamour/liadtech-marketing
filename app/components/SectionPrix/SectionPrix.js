import { FaArrowRight } from "react-icons/fa";


export default function SectionPrix(props) {
    /* If this section is displayed alone (not inside SectionSolution) it'll take full screen width on smaller screens
        since it won't be affected by the paddings and margins of the parent section
    */

    // Pages with bigger padding top and bottom, making the price section bigger
    const pagesWithPadding = ["agence-facebook-ads", "creation-site-internet", "referencement-site-internet"];

    return (
        <section className={`${props.page === "agence-seo-local" ? "relative bg-white lg:pb-25 border border-white lg:rounded-b-[100px] -mb-20 z-[100]" : ""}`}>
            <div className={`${props.page === "agence-seo-local" ? "lg:grid lg:grid-cols-1 lg:grid-cols-2" : ""} relative overflow-hidden bg-[var(--light-blue)] border-[1px] border-[var(--light-blue-border)] lg:w-[85%] rounded-lg mx-auto mt-12`}>
                {/* Background image */}
                <div className="absolute left-0 top-0 bg-[url('/faq-bg.png')] [filter:brightness(1.7)] bg-no-repeat bg-contain opacity-30 w-[1400px] h-[1400px]" />
                
                {/* Main section */}
                <div className={`${pagesWithPadding.includes(props.page) ? "py-30" : "py-15"}  relative overflow-hidden min-h-30 flex flex-col items-center justify-center p-10 text-center`}>
                    
                    {/* agence-seo-local page doesn't have this */}
                    {props.page !== "agence-seo-local" && <p className="font-medium  z-[1]">À partir de</p>}

                    <div className="flex justify-center items-end gap-1 mt-4 text-[var(--purple)]  z-[1]">
                        <p className="text-[115px] font-black font-clash leading-[70%] tracking-tighter">{props.price}€</p>

                        <div className="flex flex-col items-start ml-2">
                            <div className="font-bold text-2xl leading-[1.5rem]">HT</div>
                            <div className="font-bold text-2xl leading-[1.5rem]">par</div>
                            <div className="font-bold text-2xl leading-[1.5rem]">mois</div>
                        </div>
                    </div>

                    <p className="font-medium mt-6  z-[1]">
                        {props.p}
                    </p>

                    <button className="mt-10 py-3 px-4 hover:px-5 rounded-full font-extrabold flex justify-center items-center text-sm lg:text-base transition-all duration-300 cursor-pointer text-white bg-[var(--purple)] border-2 border-[var(--purple)] w-max z-[1]">
                        Je lance mon projet &nbsp; <FaArrowRight />
                    </button>

                </div>

                {/* Only the agence-seo-local has the second section */}
                {props.page === "agence-seo-local" &&
                    <div className="relative mt-20 lg:mt-0 flex-1 bg-tansparent">

                        <div className="py-[4.2rem] lg:pt-[4.38rem] lg:pb-[8.75rem] bg-[#A3CCEE] rounded-2xl pl-12 pr-8 max-w-[18.75rem] w-full mx-auto lg:absolute lg:-bottom-25 -bottom-45 left-1/2 lg:-translate-x-1/2 rotate-2">
                            <div className="-rotate-2">
                                <div className="font-black text-[1.25rem] leading-[140%]">
                                    Vous n'avez pas de fiche Google ?
                                </div>
                                <p className="font-medium leading-[1.5rem] mt-3">
                                    Nos équipes la conçoivent pour vous !
                                </p>

                                <div className="mt-7">
                                    <button className="py-3 px-4 hover:px-5 rounded-full font-extrabold leading-5 flex justify-center items-center text-sm lg:text-base transition-all duration-300 cursor-pointer text-white bg-[var(--second-purple)] border-2 border-[var(--second-purple)] w-max">
                                        En savoir plus &nbsp; <FaArrowRight />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </section>
    );
}