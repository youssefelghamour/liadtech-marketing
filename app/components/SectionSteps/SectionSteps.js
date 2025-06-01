

export default function SectionSteps(props) {
    return (
        // on page referencement this section has section resulatat above it with the bottom rounded corner so we add this styling to push this section above below it
        <section className={`pt-25 bg-gray-200 mt-20 px-5 sm:px-10 md:px-20 ${props.page === 'referencement' ? 'mt-[-60px] lg:mt-[-120px] lg:pt-56 lg:pb-36 rounded-b-[60px] md:rounded-b-[80px] lg:rounded-b-[100px]' : ''}`}>
            <div className="mt-10 lg:mt-0 md:px-10 xl:px-30 md:px-20 lg:px-2">
                <div className="grid lg:grid-cols-2 pl-5">

                    {/* Left column */}
                    <div className="col-span-1 mt-10 z-30 relative lg:mt-[260px]">
                        {/* Title */}
                        <div className="lg:absolute left-0 top-[-245px] md:mb-10 mb-15">
                            <h2 className="text-[2vw] md:text-[1.6vw] lg:text-[1.15vw] 2xl:text-[0.9vw] uppercase text-[var(--purple)] z-[1] font-extrabold mb-4">
                                {props.pretitle}
                            </h2>
                            <p className={`text-left text-[40px] ${props.page === 'referencement' ? 'max-w-[450px]' : 'max-w-[340px]'}`}>
                                {props.title} <span className="text-[var(--purple)] font-clash tracking-tighter leading-tight font-black">{props.highlight}</span>
                            </p>
                        </div>

                        {/* Left Steps */}
                        {props.steps.left.map(({ step, title, description, image }) => (
                            <div
                                key={step}
                                className="lg:min-h-[490px] md:min-h-[400px] min-h-[400px] lg:grid grid-cols-[2fr_1fr] gap-0"
                            >
                                <div>
                                    <div
                                        className="relative w-[300px] h-[200px] rounded-xl overflow-hidden bg-center bg-cover"
                                        style={{ backgroundImage: `url(${image})` }}
                                    >
                                        <div className="absolute inset-0 bg-[var(--purple-dark)] opacity-50 rounded-xl pointer-events-none"></div>
                                    </div>

                                    <h4 className="text-purple-brand font-black text-2xl mt-4">{title}</h4>

                                    <p className="text-purple-brand mt-4 font-medium text-lg leading-[28px]">
                                        {description}
                                    </p>
                                </div>

                                <div className="lg:flex hidden flex-col justify-between h-full">
                                    <div className="h-full lg:border-r-[3px] border-[var(--purple)]"></div>

                                    <div className="font-extrabold text-xs tracking-[0.12em] uppercase text-purple-brand flex lg:justify-end md:justify-start pr-[30px] relative">
                                        <div className="absolute right-[-11px] w-[24px] h-[24px] bg-[var(--purple)] rounded-full"></div>
                                        <div>Étape {step}</div>
                                    </div>

                                    <div className={`h-full ${step !== 6 ? "lg:border-r-[3px] border-[var(--purple)]" : ""}`}></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right column */}
                    <div className="col-span-1 z-30 relative">
                        {/* Right Steps */}
                        {props.steps.right.map(({ step, title, description, image }) => (
                            <div
                                key={step}
                                className="lg:min-h-[490px] md:min-h-[400px] min-h-[400px] lg:grid grid-cols-[1fr_2fr] gap-0"
                            >
                                <div className="lg:flex hidden flex-col justify-between h-full">
                                    <div className="h-full"></div>

                                    <div className="font-extrabold text-xs tracking-[0.12em] uppercase text-purple-brand flex justify-start pl-[30px] relative">
                                        <div className="absolute left-[-13px] w-[24px] h-[24px] bg-[var(--purple)] rounded-full"></div>
                                        <div>Étape {step}</div>
                                    </div>

                                    <div className="h-full"></div>
                                </div>

                                <div>
                                    <div
                                        className="relative w-[300px] h-[200px] rounded-xl overflow-hidden bg-center bg-cover"
                                        style={{ backgroundImage: `url(${image})` }}
                                    >
                                        <div className="absolute inset-0 bg-[var(--purple-dark)] opacity-50 rounded-xl pointer-events-none"></div>
                                    </div>

                                    <h4 className="text-purple-brand font-black text-2xl mt-4">{title}</h4>
                                    
                                    <p className="text-purple-brand mt-4 font-medium text-lg leading-[28px]">
                                        {description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

    );
}