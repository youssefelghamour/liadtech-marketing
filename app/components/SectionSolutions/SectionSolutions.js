import BulletPoints from "../BulletPoints/BulletPoints";
import SectionPrix from "../SectionPrix/SectionPrix";
import Title from "../Title/Title";


export default function SectionSolutions(props) {
    return (
        <section className="items-center text-center mt-36 px-5 sm:px-10 md:px-20">
            <Title {...props} />

            {/* Second Section PRICING */}
            <SectionPrix {...props} />

            {/* Third section: ads page doesn't have the solutions section */}
            {props.page !== 'ads' && 
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-28 justify-center">
                    {/* Left */}
                    <div className="flex justify-center lg:justify-end">
                        <img src="/arguments-pic.png" alt="services picture" className="w-[500px] h-[300px] rounded-xl object-cover" />
                    </div>

                    {/* Right */}
                    <BulletPoints {...props}/>
                </div>
            }
            
        </section>
    );
}