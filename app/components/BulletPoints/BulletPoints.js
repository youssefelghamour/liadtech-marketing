import { FaCheckCircle } from "react-icons/fa";


export default function BulletPoints(props) {
    return (
        <div className="flex flex-col items-start justify-center gap-5 lg:max-w-[520px]">
            {props.items && props.items.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                    <FaCheckCircle className="text-[var(--purple)] min-w-[24px] min-h-[24px]"/>
                    <div className="text-left">
                        <p className="font-bold text-lg">{item.title}</p>
                        <p className="">{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}