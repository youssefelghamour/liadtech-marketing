

export default function SectionSteps() {
    return (
        <section className="pt-25 bg-[var(--purple-light-2)] mt-20">
            <div className="mt-10 lg:mt-0 md:px-10 lg:px-20">
                <div className="grid lg:grid-cols-2 pl-5">

                    {/* 1. First column */}
                    <div className="col-span-1 mt-10 z-30 relative lg:mt-[260px]">
                        <div className="lg:absolute left-0 top-[-245px]">
                            <h2 className="surtitle text-purple-brand text-center lg:text-left">
                                La création d'un site web chez Aleo
                            </h2>
                            <p className="title-section lg:text-left text-purple-brand lg:text-[40px] max-w-[340px]">
                                Votre site web en <span className="text-primary-500 font-clash font-bold">5 étapes</span>
                            </p>
                        </div>

                        {/* 1.a - First column: First row */}
                        <div className="min-h-[490px] lg:grid grid-cols-[2fr_1fr] gap-0  lg:border-r-[3px] border-[var(--purple)]">
                            {/* First column */}
                            <div className="">
                                <picture className="block w-full">
                                <img
                                    src="/arguments-pic.png"
                                    alt="services picture"
                                    className="w-[300px] h-[200px] rounded-xl object-cover"
                                />
                                </picture>
                                <h4 className="text-purple-brand font-black text-2xl mt-4">
                                Création de votre site web
                                </h4>
                                <p className="text-purple-brand mt-4 font-medium text-lg leading-[28px]">
                                Conception d’une maquette de site internet à l’image de votre activité par nos experts webdesigners.
                                </p>
                            </div>

                            {/* Second column */}
                            <div className="lg:flex hidden flex-col justify-between h-full">
                                {/* Empty first row */}
                                <div className="h-full"></div>

                                {/* Middle row with step */}
                                <div className="font-extrabold text-xs tracking-[0.12em] uppercase text-purple-brand flex lg:justify-end md:justify-start pr-[30px]">
                                    <div className="absolute lg:right-[-11px] left[15px] w-[24px] h-[24px] bg-[var(--purple)] rounded-full"></div>
                                    <div className="">Étape 2</div>
                                </div>

                                {/* Empty third row */}
                                <div className="h-full"></div>
                            </div>
                        </div>

                        {/* 1.b - First column: Second row */}
                        <div className="min-h-[490px] lg:grid grid-cols-[2fr_1fr] gap-0  lg:border-r-[3px] border-[var(--purple)]">
                            {/* First column */}
                            <div className="">
                                <picture className="block w-full">
                                <img
                                    src="/arguments-pic.png"
                                    alt="services picture"
                                    className="w-[300px] h-[200px] rounded-xl object-cover"
                                />
                                </picture>
                                <h4 className="text-purple-brand font-black text-2xl mt-4">
                                Création de votre site web
                                </h4>
                                <p className="text-purple-brand mt-4 font-medium text-lg leading-[28px]">
                                Conception d’une maquette de site internet à l’image de votre activité par nos experts webdesigners.
                                </p>
                            </div>

                            {/* Second column */}
                            <div className="lg:flex hidden flex-col justify-between h-full">
                                {/* Empty first row */}
                                <div className="h-full"></div>

                                {/* Middle row with step */}
                                <div className="font-extrabold text-xs tracking-[0.12em] uppercase text-purple-brand flex justify-end pr-[30px]">
                                    <div className="absolute right-[-11px] w-[24px] h-[24px] bg-[var(--purple)] rounded-full"></div>
                                    <div className="step-odd">Étape 2</div>
                                </div>

                                {/* Empty third row */}
                                <div className="h-full"></div>
                            </div>
                        </div>
                    </div>

                    {/* 2. Second column */}
                    <div className="col-span-1 z-30 relative">
                        {/* 2.a - Second column: First row */}
                        <div className="min-h-[490px] lg:grid grid-cols-[1fr_2fr] gap-0">
                            {/* First column */}
                            <div className="lg:flex hidden flex-col justify-between h-full">
                                {/* Empty first row */}
                                <div className="h-full"></div>

                                {/* Middle row with step */}
                                <div className="font-extrabold text-xs tracking-[0.12em] uppercase text-purple-brand flex justify-start pl-[30px]">
                                    <div className="absolute left-[-13px] w-[24px] h-[24px] bg-[var(--purple)] rounded-full"></div>
                                    <div className="step-odd">Étape 2</div>
                                </div>

                                {/* Empty third row */}
                                <div className="h-full"></div>
                            </div>

                            {/* Second column */}
                            <div className="">
                                <picture className="relative block w-full">
                                    <img
                                        src="/arguments-pic.png"
                                        alt="services picture"
                                        className="w-[300px] h-[200px] rounded-xl object-cover"
                                    />
                                </picture>

                                <h4 className="text-purple-brand font-black text-2xl mt-4">
                                    Création de votre site web
                                </h4>

                                <p className="text-purple-brand mt-4 font-medium text-lg leading-[28px]">
                                    Conception d’une maquette de site internet à l’image de votre activité par nos experts webdesigners.
                                </p>
                            </div>
                        </div>

                        {/* 2.b - Second column: Second row */}
                        <div className="min-h-[490px] lg:grid grid-cols-[1fr_2fr] gap-0">
                            {/* First column */}
                            <div className="lg:flex hidden flex-col justify-between h-full">
                                {/* Empty first row */}
                                <div className="h-full"></div>

                                {/* Middle row with step */}
                                <div className="font-extrabold text-xs tracking-[0.12em] uppercase text-purple-brand flex justify-start pl-[30px]">
                                    <div className="absolute left-[-13px] w-[24px] h-[24px] bg-[var(--purple)] rounded-full"></div>
                                    <div className="step-odd">Étape 2</div>
                                </div>

                                {/* Empty third row */}
                                <div className="h-full"></div>
                            </div>

                            {/* Second column */}
                            <div className="">
                                <picture className="block w-full">
                                    <img
                                        src="/arguments-pic.png"
                                        alt="services picture"
                                        className="w-[300px] h-[200px] rounded-xl object-cover"
                                    />
                                </picture>

                                <h4 className="text-purple-brand font-black text-2xl mt-4">
                                    Création de votre site web
                                </h4>

                                <p className="text-purple-brand mt-4 font-medium text-lg leading-[28px]">
                                    Conception d’une maquette de site internet à l’image de votre activité par nos experts webdesigners.
                                </p>
                            </div>
                        </div>

                        {/* 2.c - Second column: Third row */}
                        <div className="min-h-[490px] lg:grid grid-cols-[1fr_2fr] gap-0">
                            {/* First column */}
                            <div className="lg:flex hidden flex-col justify-between h-full">
                                {/* Empty first row */}
                                <div className="h-full"></div>

                                {/* Middle row with step */}
                                <div className="font-extrabold text-xs tracking-[0.12em] uppercase text-purple-brand flex justify-start pl-[30px]">
                                    <div className="absolute left-[-13px] w-[24px] h-[24px] bg-[var(--purple)] rounded-full"></div>
                                    <div className="step-odd">Étape 2</div>
                                </div>

                                {/* Empty third row */}
                                <div className="h-full"></div>
                            </div>

                            {/* Second column */}
                            <div className="">
                                <picture className="block w-full">
                                    <img
                                        src="/arguments-pic.png"
                                        alt="services picture"
                                        className="w-[300px] h-[200px] rounded-xl object-cover"
                                    />
                                </picture>

                                <h4 className="text-purple-brand font-black text-2xl mt-4">
                                    Création de votre site web
                                </h4>

                                <p className="text-purple-brand mt-4 font-medium text-lg leading-[28px]">
                                    Conception d’une maquette de site internet à l’image de votre activité par nos experts webdesigners.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    );
}