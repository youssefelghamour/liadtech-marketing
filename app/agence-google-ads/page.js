import Hero from "../components/Hero/Hero";
import SectionArguments from "../components/SectionArguments/SectionArguments";
import SectionCommunication from "../components/SectionCommunication/SectionCommunication";
import SectionSolutions from "../components/SectionSolutions/SectionSolutions";
import SectionSteps from "../components/SectionSteps/SectionSteps";
import SectionFAQ from "../components/SectionFAQ/SectionFAQ";
import { SlScreenDesktop } from 'react-icons/sl';
import { PiCertificateLight } from 'react-icons/pi';
import { HiOutlineAdjustmentsVertical } from 'react-icons/hi2';
import SectionResultat from "../components/SectionResultat/SectionResultat";
import SectionTestimonials from "../components/SectionTestimonials/SectionTestimonials";
import SectionContact from "../components/SectionContact/SectionContact";
import SectionAvis from "../components/SectionAvis/SectionAvis";
import { MdLoop } from "react-icons/md";
import { SlTarget } from "react-icons/sl";




export const metadata = {
    title: "LIADTECH - Référencement Site Internet",
};

export default function Home() {
    const heroProps = {
        page: 'agence-google-ads',
        img: `/hero-pic-6.png`,
        img2: '/hero-pic-5.png',
        pretitle: "Agence de référencement Google Ads",
        title: "Obtenez un ",
        highlight: "maximum",
        title2: " de contacts grâce à la publicité Google",
        p: "Lancez des campagnes publicitaires ciblées avec un budget maîtrisé pour générer plus de ventes.",
        button: "Découvrir nos offres",
    };

    const argumentsProps = {
        page: 'agence-google-ads',
        pretitle: 'Une agence Google Partner proche de vous',
        title: "Visez le ",
        highlight: "top",
        title2: " des recherches Google",
        img: "/arguments-pic-2.png",
        items: [
            {
                icon: SlTarget,
                title: "Opportunités",
                description: "Tirez profit de tout le potentiel de la publicité en ligne.",
            },
            {
                icon: PiCertificateLight,
                title: "Savoir-faire",
                description: "Bénéficiez des compétences de nos experts en référencement.",
            },
            {
                icon: MdLoop,
                title: "Retour sur investissement",
                description: "Générez des résultats rapides à la hauteur de vos ambitions.",
            },
        ],
        button: "Recevoir nos tarifs",
    };

    const communicationProps = {
        page: 'agence-google-ads',
        pretitle: "Le référencement naturel ça fonctionne comment ?",
        title: "Comment rendre son site internet visible sur",
        highlight: "Google",
        titleMiddle: true,
        items: [
            {
                img: '/communication-pic-7.png',
                title: "Plus de trafic de qualité",
                description: "Attirez sur votre site de futurs clients intéressés par votre offre.",
            },
            {
                img: '/communication-pic-8.png',
                title: "Plus de contacts",
                description: "Générez un maximum de demandes de devis grâce à la publicité en ligne.",
            },
            {
                img: '/communication-pic-9.png',
                title: "Plus de chiffres d'affaires",
                description: "Augmentez vos ventes en étant la première entreprise que vos clients voient sur Google.",
            },
        ],
    };

    const resultatProps = {
        page: 'agence-google-ads',
        pretitle: "Des campagnes gérées par des experts SEA",
        title: "Un ",
        highlight: "expert",
        title2: " en référencement dédié à votre projet",
        p: "Pour vous assurer les meilleurs résultats, un référenceur Aleo prend en charge de A à Z votre campagne.",
    };

    // prixProps: Solutions section includes the price section
    const solutionsProps = {
        page: 'agence-google-ads',
        titleMiddle: true,
        pretitle: "Le référencement payant accessible à tous les pros",
        title: "Pour chaque objectif, une ",
        highlight: "solution ",
        title2: 'LIADTECH',
        p: "Avec LIADTECH, votre budget publicitaire est inclus dans votre offre. Mettez le cap sur votre visibilité avec une solution publicitaire clé en main !",
        img: '/solutions-pic-1.png',
        items: [
            {
                title: "Accompagnement complet avec un expert dédié",
                description: "Pour un suivi sur-mesure et personnalisé dédié à votre activité.",
            },
            {
                title: "Choix des meilleurs mots-clés en fonction de votre activité",
                description: "Pour garantir le meilleur retour sur investissement, nous définissons les mots-clés les mieux adaptés.",
            },
            {
                title: "Création de campagnes et annonces percutantes",
                description: "Pour être dans les meilleurs résultats Google rapidement.",
            },
            {
                title: "Suivi de vos campagnes en temps réel",
                description: "Mesurez l'efficacité de vos campagnes facilement et rapidement avec notre outil de suivi.",
            },
        ],
        prixProps: {
            page: 'agence-google-ads',
            price: 149,
        },
    };

    const avisProps = {
        page: 'agence-google-ads',
        titleMiddle: true,
        pretitle: "L’avis de nos clients",
        title: "Plus de",
        highlight: " 15 000 ",
        title2: "entrepreneurs nous font confiance",
        p: "Artisans, créateurs, indépendants...",
        avis: [
            {
                client: "Met'Propre Nettoyage",
                review: "Une belle communication avec beaucoup de professionnalisme.",
                rating: "★★★★★",
            },
            {
                client: "Agence Immobilière Rabat Plus",
                review: "Service impeccable et communication rapide. Leur travail a vraiment boosté notre visibilité en ligne.",
                rating: "★★★★★",
            },
            {
                client: "Entreprise CCZ",
                review: "L'équipe LIADTECH a su parfaitement répondre à mes attentes !",
                rating: "★★★★★",
            },
            {
                client: "Restaurant Dar Zaki - Marrakech",
                review: "L'équipe a su capter l'esprit marocain tout en modernisant notre image. Très professionnelle et à l’écoute.",
                rating: "★★★★★",
            },
            {
                client: "LAURENCE FERRY",
                review: "Equipe sympathique. La créativité sur les publications est top ! J'apprécie le fait qu'on nous demande si on a du contenu à mettre en avant, ça permet d'être au plus proche de notre métier. Je suis satisfaite.",
                rating: "★★★★★",
            },
            {
                client: "Société Atlas Médical - Casablanca",
                review: "Collaboration fluide et résultats au-delà de nos attentes. Leur expertise locale fait toute la différence.",
                rating: "★★★★★",
            },
            {
                client: "Coopérative d’Arganier Essaouira",
                review: "Une équipe passionnée qui comprend les spécificités du marché local. Je recommande vivement leurs services.",
                rating: "★★★★★",
            },
        ],
        reviews: [
            {
                img: "/avis-pic-1.jpg",
                name: "Full Name - Gérante",
                quote: "Une équipe très réactive qui a pris en main mes campagnes réseaux sociaux avec agilité...",
            },
            {
                img: "/avis-pic-2.jpg",
                name: "Example Name - Directeur",
                quote: "Un accompagnement personnalisé et efficace. Merci !",
            },
            {
                img: "/slide-2.jpg",
                name: "Another Name - CEO",
                quote: "Professionnels, à l'écoute et très efficaces.",
            },
        ],
    };

    const stepsProp = {
        page: 'agence-google-ads',
        pretitle: "Nos experts SEO vous accompagnent de A à Z",
        title: "Comment ça ",
        highlight: "marche ?",
        steps: {
            right: [
                {
                    step: 1,
                    title: "Étude de votre activité",
                    description: "Analyse de vos cibles, de votre zone géographique et de votre entreprise.",
                    image: "/step-1.jpg",
                },
                {
                    step: 3,
                    title: "Création de vos campagnes",
                    description: "Choix des mots-clés et rédaction d’annonces percutantes pour assurer votre visibilité.",
                    image: "/step-3.jpg",
                },
                {
                    step: 5,
                    title: "Étude détaillée des contacts générés par vos campagnes",
                    description: "Étude des appels, des formulaires mails et des autres moyens mis en place pour obtenir de nouveaux clients.",
                    image: "/step-5.jpg",
                },
            ],
            left: [
                {
                    step: 2,
                    title: "Préparation de votre page de destination",
                    description: "Sur votre site ou créée et optimisée par nos soins et adaptée à votre cible pour générer un maximum de contacts.",
                    image: "/step-2.jpg",
                },
                {
                    step: 4,
                    title: "Gestion et suivi",
                    description: "Points téléphoniques avec le référenceur dédié à vos campagnes et analyse de vos rapports statistiques.",
                    image: "/step-4.jpg",
                },
            ],
        },
    };

    const faqProps = {
        page: "agence-google-ads",
        faqs : [
            {
                question: "Pourquoi devrais-je confier ma campagne Google ads à une agence ?",
                answer: (
                    <>
                        En qualité d'agence web experte en Google ads et titulaire de la certification Google Partners, nous déployons notre savoir-faire stratégique et opérationnel dans la gestion de vos campagnes ads.
                        <br />
                        <br />
                        Notre maîtrise de l'optimisation des conversions publicitaires vous assure une visibilité accrue sur les moteurs de recherche grâce à notre expertise en référencement payant (SEA). Nous ajustons votre campagne publicitaire selon vos objectifs, maximisons le taux de conversion, optimisons le coût par clic (CPC) et nous assurons un suivi rigoureux de vos KPI pour une gestion optimale de votre budget.
                        <br />
                        <br />
                        En nous confiant votre campagne Google ads, vous bénéficiez d'une expertise reconnue et d'un suivi personnalisé par nos consultants SEA afin de garantir l’efficacité de vos campagnes publicitaires.
                    </>
                ),
            },
            {
                question: "Quelles sont les étapes de la création de ma campagne Google ads avec ALEO ?",
                answer: (
                    <>
                        Chez ALEO, la mise en place de votre campagne ads se fait en trois étapes cruciales. Dans un premier temps, nous nous imprégnons de votre activité, étudions vos points forts et définissons vos objectifs webmarketing pour identifier différentes opportunités de croissance sur Google. Selon vos besoins, nous créons une landing page spécifiquement optimisée pour votre campagne, conçue pour maximiser le taux de conversion et optimiser le coût par clic (CPC).
                        <br />
                        <br />
                        Ensuite, nous sélectionnons les mots-clés les plus pertinents pour votre campagne et déployons une stratégie ads robuste en diffusant des annonces textuelles pour afficher votre message publicitaire sur Google. Le tout est géré par nos consultants SEA, assurant le succès de votre campagne. Nous veillons à ce que votre campagne soit le reflet fidèle de votre activité pour atteindre vos objectifs.
                        <br />
                        <br />
                        ALEO est à votre service pour faire de votre campagne Google ads une réussite.                        
                    </>
                ),
            },
            {
                question: "J'ai déjà un compte Google ads, comment confier mes campagnes SEA à ALEO ?",
                answer: (
                    <>
                        Si vous avez déjà un compte Google ads et que vous désirez nous confier la gestion de vos campagnes SEA, le processus est simple. Plutôt que de reprendre vos campagnes existantes, nous préférons en créer de nouvelles pour repartir sur des bases solides et optimisées.
                        <br />
                        <br />
                        En faisant appel à notre agence certifiée Google Partners, vous bénéficiez d'une campagne entièrement adaptée à vos besoins et à vos objectifs. Nos consultants SEA vous offrent un suivi personnalisé, garantissant la réussite de votre nouvelle campagne.                        
                    </>
                ),
            },
            {
                question: "Qu'est-ce qu'une agence certifiée Google Partner ?",
                answer: (
                    <>
                        Une agence certifiée Google Partner est une entreprise reconnue par Google pour son expertise et sa compétence en gestion de l’outil Google ads. Cette certification atteste de notre capacité à mener avec efficacité des campagnes publicitaires en ligne, tout en respectant les standards de performance fixés par Google.
                        <br></br>     
                        <br></br>
                        En tant qu'agence Google Partner, nous avons accès à des formations avancées et à un support technique dédié, nous permettant de rester à la pointe des dernières tendances en marketing digital.
                        <br></br>     
                        <br></br>
                        Grâce à Google Analytics et Matomo, nous suivons le comportement des visiteurs sur votre site internet et optimisons les pages de destination pour améliorer les conversions. Nous utilisons également les données Analytics pour mesurer le retour sur investissement (ROI) de votre campagne de référencement payant.
                        <br></br>     
                        <br></br>
                        En choisissant notre agence pour votre campagne Google ads, vous faites le choix de l'expertise et de la qualité, pour une stratégie digitale performante et adaptée à vos besoins.
                    </>
                ),
            },
            {
                question: "C’est quoi l’objectif d’une campagne Google Ads ?",
                answer: (
                    <>
                        L’objectif principal d’une campagne Google Ads est d’attirer du trafic qualifié sur votre site et de générer des demandes de contact. Une campagne bien optimisée vous permettra de rendre plus visible vos produits ou services aux yeux de vos prospects. En choisissant des mots-clés pertinents, vous améliorerez votre visibilité sur Google notamment en étant positionné dans les premiers résultats de la SERP.
                        <br></br>
                        <br></br>
                        Pour avoir les meilleurs résultats possibles, le mieux est de passer par une agence Google Ads certifiée Google Partner.
                    </>
                ),
            },
            {
                question: "Comment fonctionne une agence SEA ?",
                answer: (
                    <>
                        Une agence SEA est une agence spécialisée dans la gestion des campagnes de publicités payantes sur les moteurs de recherche (particulièrement Google). Elle analyse vos besoins, définit les objectifs de votre campagne et va concevoir et optimiser des annonces pour qu’elles apparaissent au bon moment, au bon endroit et devant la bonne audience.
                        <br></br>
                        <br></br>
                        Elle effectuera des ajustements réguliers pour vous garantir les meilleures performances en respectant votre budget.
                        <br></br>
                        <br></br>
                        Pour gérer au mieux l’efficacité des campagnes et assurer une meilleure flexibilité, les agences SEA utilisent très souvent le moyen de paiement de leurs clients.
                    </>
                ),
            },
            {
                question: "Quel budget pour une campagne Google Ads ?",
                answer: (
                    <>
                        Le budget d’une campagne Google Ads varie selon vos objectifs, votre secteur et l’intensité de la concurrence. Votre budget dépendra du Coût par Clic (CPC) des mots clés que vous ciblez.
                        <br></br>
                        <br></br>
                        Pour savoir quels mots-clés cibler et quel budget allouer à votre campagne, le mieux est de faire appel à une agence Google Ads certifiée Google Partner.
                    </>
                ),
            },
            {
                question: "Quels sont les types d’annonces Google Ads ?",
                answer: (
                    <>
                        Google Ads propose de nombreux formats d’annonces, tous adaptés pour des objectifs différents.
                        <br></br>
                        <br></br>
                            • Annonces sur le réseau de recherches : ces annonces apparaissent directement dans les résultats de recherche Google.
                            <br></br>
                            • Annonces display : Il s’agit d’encarts publicitaires affichés sur certains sites permettant de mettre en avant des visuels.
                            <br></br>
                            • Annonces vidéos : Dans la majorité des cas, il s’agit des publicités sur Youtube.
                            <br></br>
                            • Annonces Shopping : annonces spécifiques aux produits avec des images et des prix.
                        <br></br>
                        <br></br>
                        Chez ALEO, nous ne proposons que les annonces sur le réseau de recherches (ou annonces textuelles) car ce sont celles qui permettent le meilleur retour sur investissement pour la majorité des professionnels.
                    </>
                ),
            },
            {
                question: "Quel est le prix d’une campagne Google Ads ?",
                answer: (
                    <>
                        Chez ALEO, nos offres démarrent à partir de 149€ HT/mois pour la gestion de vos campagnes Google Ads. Il vous faudra ajouter le budget publicitaire que vous souhaitez allouer qui sera défini avec votre chargé de référencement Google Ads.
                        <br></br>
                        <br></br>
                        Il s’agit du fonctionnement permettant le plus de flexibilité dans la gestion et l’efficacité de vos campagnes Google Ads.
                    </>
                ),
            },
            {
                question: "Peut-on choisir sa cible avec une campagne Google Ads ?",
                answer: (
                    <>
                        Oui, il est possible de choisir sa cible avec précision sur Google Ads. Vous pouvez définir différents critères pour atteindre l’audience la plus pertinente pour votre activité comme :
                        <br></br>
                        <br></br>
                            • Les mots-clés utilisés par les internautes
                            <br></br>
                            • Les données démographiques : âge, sexe, situation géographique
                            <br></br>
                            • Centres d’intérêt ou comportements en ligne
                            <br></br>
                        Ces options permettent d’affiner votre campagne et de toucher les utilisateurs les plus susceptibles d’être intéressés par votre offre.
                        <br></br>
                        <br></br>
                        Une agence SEA pourra ajuster ces paramètres au mieux pour maximiser l’efficacité de votre campagne.
                    </>
                ),
            },
        ],
    }


    return (
        <div>
            <Hero {...heroProps}/>
            <SectionArguments {...argumentsProps}/>
            <SectionCommunication {...communicationProps}/>
            <SectionResultat {...resultatProps}/>
            <SectionSolutions {...solutionsProps}/>
            <SectionAvis {...avisProps} />
            <SectionSteps {...stepsProp}/>
            <SectionFAQ {...faqProps}/>
            <SectionContact />
        </div>
    );
}