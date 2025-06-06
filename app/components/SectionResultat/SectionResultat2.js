import { FaArrowRight } from "react-icons/fa";
import BulletPoints from "../BulletPoints/BulletPoints";
import Title from "../Title/Title";


export default function SectionResultat2(props) {
    return (
        <section id="resultat-2" className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 mt-28 justify-center items-center text-center mt-36 pb-30 px-5 sm:px-10 md:px-20 rounded-b-[60px] md:rounded-b-[80px] lg:rounded-b-[100px] bg-white relative">
            {/* Left */}
            {props.img 
                && (<img src={props.img} alt="liadtech robot" className="w-full max-w-[650px] h-auto mx-auto"/>)
            }

            {/* Right */}
            <div>
                <Title {...props} />
                <BulletPoints {...props}/>
            </div>
        </section>
    );
}