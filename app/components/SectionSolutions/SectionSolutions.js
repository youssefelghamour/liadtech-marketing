import BulletPoints from "../BulletPoints/BulletPoints";


export default function SectionSolutions(props) {
    return (
        <section className="items-center text-center mt-36 px-5 sm:px-10 md:px-20">
            <div>
                <h2 className="text-[2vw] md:text-[1.6vw] lg:text-[1.15vw] 2xl:text-[0.9vw] surtitle uppercase text-[var(--purple)] z-[1] font-extrabold mb-4">
                    {props.pretitle}
                </h2>
                
                <h3 className="text-[11vw] md:text-[9vw] lg:text-[60px] 2xl:text-[72px] leading-[110%] lg:leading-[120%] font-black max-w-[970px] mx-auto text-purple-brand max-w-[450px] lg:max-w-none">
                    {props.title}
                    <span className="text-[var(--purple)] font-clash tracking-tighter leading-tight"> {props.highlight}</span>
                </h3>

                <p className="mt-5 mb-5">{props.p}</p>
            </div>




            {/* Second section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-28 justify-center">
                {/* Left */}
                <div className="flex justify-center lg:justify-end">
                    <img src="/arguments-pic.png" alt="services picture" className="w-[500px] h-[300px] rounded-xl object-cover" />
                </div>

                {/* Right */}
                <BulletPoints {...props}/>
            </div>
        </section>
    );
}