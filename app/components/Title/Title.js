

export default function Title(props) {
    return (
        // Sections that have their title starting at middle on small screen it starts from the left
        // Sections that have their title starting on the left, it goes to the center on smaller screens
        <div className={` ${props.titleMiddle ? "lg:text-center" : "text-center lg:text-left"} `}>
            <h2 className="text-[2vw] md:text-[1.6vw] lg:text-[1.15vw] 2xl:text-[0.9vw] surtitle uppercase text-[var(--purple)] z-[1] font-extrabold mb-4">
                {props.pretitle}
            </h2>
            
            <h3 className="text-[10vw] md:text-[8vw] lg:text-[5vw] 2xl:text-[4vw] leading-[110%] lg:leading-[120%] font-black max-w-[970px] mx-auto text-purple-brand max-w-[450px] lg:max-w-none">
                {props.title}
                <span className="text-[var(--purple)] font-clash tracking-tighter leading-tight"> {props.highlight}</span>
                {props.title2}
                <span className="text-[var(--purple)] font-clash tracking-tighter leading-tight"> {props.highlight2}</span>
            </h3>

            <p className="mt-5 mb-5">{props.p}</p>
        </div>
    );
}