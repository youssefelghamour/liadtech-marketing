import { FaArrowRight } from "react-icons/fa";


export default function SectionPrix(props) {
    return (
        <div className="relative overflow-hidden min-h-30 flex flex-col items-center justify-center rounded-lg p-10 py-30 text-center mt-12 bg-[var(--light-blue)] lg:w-[85%] mx-auto border-[1px] border-[var(--light-blue-border)]">
            <div className="absolute left-0 top-0 bg-[url('/faq-bg.png')] [filter:brightness(1.7)] bg-no-repeat bg-contain opacity-30 w-[1400px] h-[1400px]" />
            
            <p className="font-medium  z-[1]">À partir de</p>

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
    );
}