

export default function SectionCommunication() {
  return (
    <section className="mt-36 px-5 sm:px-10 md:px-20">
        <div className="text-center">
            <h2 className="text-[2vw] md:text-[1.6vw] lg:text-[1.15vw] 2xl:text-[0.9vw] surtitle lg:text-center uppercase text-[var(--purple)] z-[1] font-extrabold mb-4">
                Votre agence de création de site web
            </h2>
            
            <h3 className="text-[11vw] md:text-[9vw] lg:text-[60px] 2xl:text-[72px] leading-[110%] lg:leading-[120%] font-black lg:text-center max-w-[970px] mx-auto text-purple-brand max-w-[450px] lg:max-w-none">
                Une communication <br className="hidden lg:block" />
                par des
                <span className="text-[var(--purple)] font-clash tracking-tighter leading-tight"> pros</span>
                , pour les
                <span className="text-[var(--purple)] font-clash tracking-tighter leading-tight"> pros</span>
            </h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 mt-16">
            <div className="p-8 bg-[var(--purple-light-2)] rounded-lg">
                <img src="/communication-pic-1.png" alt="Communication pic 1" className="w-25 h-25 mb-4" />
                <h4 className="font-black text-2xl xl:text-3xl leading-tight">Présentez votre activité</h4>
                <p className="font-medium mt-4">
                    Exposez votre histoire et vos qualifications au grand public tout en mettant en avant votre savoir-faire.
                </p>
            </div>

            <div className="p-8 bg-[var(--purple-light-2)] rounded-lg">
                <img src="/communication-pic-2.png" alt="Communication pic 1" className="w-25 h-25 mb-4" />
                <h4 className="font-black text-2xl xl:text-3xl leading-tight">Valorisez vos prestations</h4>
                <p className="font-medium mt-4">
                    Soyez fiers de vos compétences et mettez en avant vos services, vos tarifs et vos zones d’intervention sur le web.
                </p>
            </div>

            <div className="p-8 bg-[var(--purple-light-2)] rounded-lg">
                <img src="/communication-pic-3.png" alt="Communication pic 1" className="w-25 h-25 mb-4" />
                <h4 className="font-black text-2xl xl:text-3xl leading-tight">Soyez joignable facilement</h4>
                <p className="font-medium mt-4">
                    Rendez visibles vos coordonnées, horaires et formulaire de contact pour faciliter les demandes.
                </p>
            </div>
        </div>
    </section>

  );
} 