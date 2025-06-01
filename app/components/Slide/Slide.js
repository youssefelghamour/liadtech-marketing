import { IoCheckmarkCircle } from "react-icons/io5";


export default function Slide(props) {
    return (
        <div className="bg-white rounded-[25px] overflow-hidden">
            <picture>
                <img
                    src={props.image}
                    alt="slide picture"
                    className="w-full lg:max-h-80 md:max-h-140 max-h-110 rounded-[25px] object-cover"
                />
            </picture>

            <div className="flex justify-center -mt-5">
                <IoCheckmarkCircle className="w-13 h-13 text-lime-500 bg-white rounded-full" />
            </div>

            <div className="px-8 pb-12 text-center mt-5">
                <p className="text-gray-800 font-clash text-[20px] md:text-[28px] font-black leading-tight tracking-tighter">
                    {props.title}
                </p>

                <p className="mt-6 font-black leading-[120%]">
                    {props.company}
                </p>

                <p className="mt-2 text-gray-500 text-xs font-extrabold tracking-[1.44px] uppercase">
                    {props.speciality}
                </p>
            </div>
        </div>
    );
}