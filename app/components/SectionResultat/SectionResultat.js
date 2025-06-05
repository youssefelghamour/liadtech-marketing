import { FaArrowRight } from "react-icons/fa";
import BulletPoints from "../BulletPoints/BulletPoints";
import Title from "../Title/Title";


export default function SectionResultat(props) {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-10 mt-28 justify-center items-center text-center mt-36 pb-30 px-5 sm:px-10 md:px-20 rounded-b-[60px] md:rounded-b-[80px] lg:rounded-b-[100px] bg-white relative">
            {/* Left */}
            <div>
                <Title {...props} />
                <BulletPoints {...props}/>
                <button className="mt-10 py-3 px-4 hover:px-5 rounded-full font-extrabold flex justify-center items-center text-sm lg:text-base transition-all duration-300 cursor-pointer text-white bg-[var(--purple)] border-2 border-[var(--purple)] w-max">Prendre rendez-vous &nbsp; <FaArrowRight /> </button>
            </div>

            {/* Right */}
            {props.img 
                ? (<img src={props.img} alt="liadtech robot" className="w-full max-w-[650px] h-auto mx-auto rounded-lg"/>)
                : (
                    <div className="flex flex-col-reverse md:flex-row bg-[var(--purple-light-2)] justify-evenly rounded-lg px-5 relative overflow-hidden">
                        <div className="pt-6 px-6 lg:px-8 pb-10 border-[1px] border-[var(--purple-border)] rounded-2xl self-center md:bg-transparent bg-white max-w-[360px] mx-auto lg:mx-0 md:mb-0 mb-10">
                            <p className="italic font-medium text-[20px] leading-[120%] text-center lg:text-left">“Je multiplie vos opportunités commerciales grâce au SEO”</p>
                            <p className="uppercase font-bold text-[14px] text-center lg:text-left mt-5">employee - role</p>
                        </div>
                        <img src='/liadtech-robot.png' alt="liadtech robot" className="max-w-[300px] h-[400px] w-full mx-auto lg:mr-0"/>
                    </div>
                )
            }
        </section>
    );
}