import BulletPoints from "../BulletPoints/BulletPoints";
import SectionPrix from "../SectionPrix/SectionPrix";
import Title from "../Title/Title";


export default function SectionSolutions(props) {
    return (
        <section id="solutions" className={` items-center text-center px-5 sm:px-10 md:px-20 ${props.page === 'agence-google-ads' ? 'mt-5' : 'mt-36'}`}>
            <Title {...props} />

            {/* Second Section PRICING */}
            <SectionPrix {...props.prixProps} />

            {/* Third section: agence-facebook-ads page doesn't have the bullet points section */}
            {props.page !== 'agence-facebook-ads' && 
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-28 justify-center">
                    {/* Left */}
                    <div className="flex justify-center lg:justify-end">
                        <img src={props.img ? props.img : '/arguments-pic.png'} alt="services picture" className="w-[500px] h-[500px] rounded-xl object-cover" />
                    </div>

                    {/* Right */}
                    <BulletPoints {...props}/>
                </div>
            }
            
        </section>
    );
}