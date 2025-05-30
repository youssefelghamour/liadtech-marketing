

export default function SectionSteps() {
    return (
        <section className="pt-25 bg-gray-200 mt-20 px-5 sm:px-10 md:px-20">
            <div className="mt-10 lg:mt-0 md:px-10 xl:px-30 md:px-20 lg:px-2">
                <div className="grid lg:grid-cols-2 pl-5">

                    {/* 1. First column */}
                    <div className="col-span-1 mt-10 z-30 relative lg:mt-[260px]">
                        <div className="lg:absolute left-0 top-[-245px] md:mb-10 mb-15">
                            <h2 className="text-[2vw] md:text-[1.6vw] lg:text-[1.15vw] 2xl:text-[0.9vw] uppercase text-[var(--purple)] z-[1] font-extrabold mb-4">
                                La création d'un site web chez Liadtech
                            </h2>
                            <p className="text-left text-[40px] max-w-[340px]">
                                Votre site web en <span className="text-[var(--purple)] font-clash tracking-tighter leading-tight font-black">5 étapes</span>
                            </p>
                        </div>

                        {/* STEP 2 -- 1.a - First column: First row */}
                        <div className="lg:min-h-[490px] md:min-h-[400px] min-h-[400px] lg:grid grid-cols-[2fr_1fr] gap-0  lg:border-r-[3px] border-[var(--purple)]">
                            {/* First column */}
                            <div className="">
                                <div className="relative w-[300px] h-[200px] rounded-xl overflow-hidden bg-center bg-cover" style={{ backgroundImage: 'url(/step-2.jpg)' }}>
                                    <div className="absolute inset-0 bg-[var(--purple-dark)] opacity-50 rounded-xl pointer-events-none"></div>
                                </div>
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

                        {/* STEP 4 -- 1.b - First column: Second row */}
                        <div className="lg:min-h-[490px] md:min-h-[400px] min-h-[400px] lg:grid grid-cols-[2fr_1fr] gap-0  lg:border-r-[3px] border-[var(--purple)]">
                            {/* First column */}
                            <div className="">
                                <div className="relative w-[300px] h-[200px] rounded-xl overflow-hidden bg-center bg-cover" style={{ backgroundImage: 'url(/step-4.jpg)' }}>
                                    <div className="absolute inset-0 bg-[var(--purple-dark)] opacity-50 rounded-xl pointer-events-none"></div>
                                </div>
                                <h4 className="text-purple-brand font-black text-2xl mt-4">
                                    Mise en ligne
                                </h4>
                                <p className="text-purple-brand mt-4 font-medium text-lg leading-[28px]">
                                    Diffusion de votre site web sur la toile. 3, 2, 1 … Décollage !
                                </p>
                            </div>

                            {/* Second column */}
                            <div className="lg:flex hidden flex-col justify-between h-full">
                                {/* Empty first row */}
                                <div className="h-full"></div>

                                {/* Middle row with step */}
                                <div className="font-extrabold text-xs tracking-[0.12em] uppercase text-purple-brand flex justify-end pr-[30px]">
                                    <div className="absolute right-[-11px] w-[24px] h-[24px] bg-[var(--purple)] rounded-full"></div>
                                    <div className="step-odd">Étape 4</div>
                                </div>

                                {/* Empty third row */}
                                <div className="h-full"></div>
                            </div>
                        </div>
                    </div>

                    {/* 2. Second column */}
                    <div className="col-span-1 z-30 relative">
                        {/* STEP 1 -- 2.a - Second column: First row */}
                        <div className="lg:min-h-[490px] md:min-h-[400px] min-h-[400px] lg:grid grid-cols-[1fr_2fr] gap-0">
                            {/* First column */}
                            <div className="lg:flex hidden flex-col justify-between h-full">
                                {/* Empty first row */}
                                <div className="h-full"></div>

                                {/* Middle row with step */}
                                <div className="font-extrabold text-xs tracking-[0.12em] uppercase text-purple-brand flex justify-start pl-[30px]">
                                    <div className="absolute left-[-13px] w-[24px] h-[24px] bg-[var(--purple)] rounded-full"></div>
                                    <div className="step-odd">Étape 1</div>
                                </div>

                                {/* Empty third row */}
                                <div className="h-full"></div>
                            </div>

                            {/* Second column */}
                            <div className="">
                                <div className="relative w-[300px] h-[200px] rounded-xl overflow-hidden bg-center bg-cover" style={{ backgroundImage: 'url(/step-1.jpg)' }}>
                                    <div className="absolute inset-0 bg-[var(--purple-dark)] opacity-50 rounded-xl pointer-events-none"></div>
                                </div>

                                <h4 className="text-purple-brand font-black text-2xl mt-4">
                                    Étude de votre activité
                                </h4>

                                <p className="text-purple-brand mt-4 font-medium text-lg leading-[28px]">
                                    D’abord bien connaître votre entreprise et vos objectifs pour vous proposer les offres les plus pertinentes et atteindre la réalisation de votre projet à vitesse grand V.
                                </p>
                            </div>
                        </div>

                        {/* STEP 3 -- 2.b - Second column: Second row */}
                        <div className="lg:min-h-[490px] md:min-h-[400px] min-h-[400px] lg:grid grid-cols-[1fr_2fr] gap-0">
                            {/* First column */}
                            <div className="lg:flex hidden flex-col justify-between h-full">
                                {/* Empty first row */}
                                <div className="h-full"></div>

                                {/* Middle row with step */}
                                <div className="font-extrabold text-xs tracking-[0.12em] uppercase text-purple-brand flex justify-start pl-[30px]">
                                    <div className="absolute left-[-13px] w-[24px] h-[24px] bg-[var(--purple)] rounded-full"></div>
                                    <div className="step-odd">Étape 3</div>
                                </div>

                                {/* Empty third row */}
                                <div className="h-full"></div>
                            </div>

                            {/* Second column */}
                            <div className="">
                                <div className="relative w-[300px] h-[200px] rounded-xl overflow-hidden bg-center bg-cover" style={{ backgroundImage: 'url(/step-3.jpg)' }}>
                                    <div className="absolute inset-0 bg-[var(--purple-dark)] opacity-50 rounded-xl pointer-events-none"></div>
                                </div>

                                <h4 className="text-purple-brand font-black text-2xl mt-4">
                                    Hébergement
                                </h4>

                                <p className="text-purple-brand mt-4 font-medium text-lg leading-[28px]">
                                    Hébergement (stockage des données) et sécurisation de votre site web sur nos serveurs.
                                </p>
                            </div>
                        </div>

                        {/* STEP 5 -- 2.c - Second column: Third row */}
                        <div className="lg:min-h-[490px] md:min-h-[400px] min-h-[400px] lg:grid grid-cols-[1fr_2fr] gap-0">
                            {/* First column */}
                            <div className="lg:flex hidden flex-col justify-between h-full">
                                {/* Empty first row */}
                                <div className="h-full"></div>

                                {/* Middle row with step */}
                                <div className="font-extrabold text-xs tracking-[0.12em] uppercase text-purple-brand flex justify-start pl-[30px]">
                                    <div className="absolute left-[-13px] w-[24px] h-[24px] bg-[var(--purple)] rounded-full"></div>
                                    <div className="step-odd">Étape 5</div>
                                </div>

                                {/* Empty third row */}
                                <div className="h-full"></div>
                            </div>

                            {/* Second column */}
                            <div className="">
                                <div className="relative w-[300px] h-[200px] rounded-xl overflow-hidden bg-center bg-cover" style={{ backgroundImage: 'url(/step-5.jpg)' }}>
                                    <div className="absolute inset-0 bg-[var(--purple-dark)] opacity-50 rounded-xl pointer-events-none"></div>
                                </div>

                                <h4 className="text-purple-brand font-black text-2xl mt-4">
                                    Suivi et accompagnement
                                </h4>

                                <p className="text-purple-brand mt-4 font-medium text-lg leading-[28px]">
                                    Maintenance et modifications ponctuelles de vos contenus, pour un site dynamique et toujours à jour.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    );
}