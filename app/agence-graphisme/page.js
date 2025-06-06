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
import { HiOutlinePaintBrush } from "react-icons/hi2";
import { PiPalette } from "react-icons/pi";






export const metadata = {
    title: "Agence de graphisme | LIADTECH",
};

export default function Home() {
    const heroProps = {
        page: 'agence-graphisme',
        img: `/hero-pic-8.png`,
        img2: '/hero-pic-7.png',
        pretitle: "Studio graphique | Agence de graphisme",
        title: "Un logo ",
        highlight: "percutant",
        title2: " pour rassurer ses clients",
        p: "Unique et impactant, un logo pro vous permet de vous différencier et de marquer les esprits de vos clients.",
        button: "Recevoir nos offres",
    };

    const argumentsProps = {
        page: 'agence-graphisme',
        pretitle: 'Une Identité visuelle unique avec l’agence de graphisme LIADTECH',
        title: "Visez le ",
        highlight: "top",
        title2: " des recherches Google",
        img: "/arguments-pic-3.png",
        items: [
            {
                icon: HiOutlinePaintBrush,
                title: "Un logo personnalisé",
                description: "Obtenez un logo 100% personnalisé adapté à votre activité.",
            },
            {
                icon: PiCertificateLight,
                title: "Un graphiste dédié",
                description: "Bénéficiez du savoir-faire et de la créativité d'un graphiste dédié.",
            },
            {
                icon: PiPalette,
                title: "Une identité de marque cohérente",
                description: "Construisez une identité visuelle cohérente sur l'ensemble de vos supports.",
            },
        ],
        button: "Recevoir nos tarifs",
    };

    const communicationProps = {
        page: 'agence-goraphisme',
        pretitle: "Une identité visuelle, pourquoi ?",
        title: "Votre entreprise ",
        highlight: "mérite",
        title2: " un logo unique",
        titleMiddle: true,
        items: [
            {
                img: '/communication-pic-10.png',
                title: "Renforcez l’image de votre entreprise",
                description: "Marquez vos clients et devenez reconnaissable au premier coup d'oeil.",
            },
            {
                img: '/communication-pic-12.png',
                title: "Rassurez et fidélisez vos clients",
                description: "Communiquez avec une image professionnelle et moderne.",
            },
            {
                img: '/communication-pic-11.png',
                title: "Démarquez-vous de vos concurrents",
                description: "Sortez du lot grâce à une identité unique qui fera la différence.",
            },
        ],
    };

    const resultatProps = {
        page: 'agence-graphisme',
        pretitle: "L’agence de création de logos et de visuels des pros",
        title: "Une logo ",
        highlight: "pro",
        title2: " ? Un graphiste",
        highlight2: "pro",
        p: "Un graphiste s'occupe pour vous de la création de votre logo. Vous avez une idée ? On la concrétise !",
        msg: "“Je crée des logos uniques et mémorables”",
    };

    // prixProps: Solutions section includes the price section
    const solutionsProps = {
        page: 'agence-graphisme',
        titleMiddle: true,
        pretitle: "Pourquoi faire appel à LIADTECH pour son identité visuelle ?",
        title: "LIADTech vous propose une solution ",
        highlight: "clé en main ",
        p: "Quels que soient vos besoins, on a une solution LIADTECH !",
        img: '/solutions-pic-2.png',
        items: [
            {
                title: "Prise de brief par un graphiste dédié",
                description: "Afin de créer un logo qui vous corresponde, définissez vos attentes et vos objectifs avec un expert LIADTECH.",
            },
            {
                title: "Création graphique",
                description: "Votre graphiste dédié vous proposera différentes pistes créatives pour que vous puissiez choisir celle qui vous convient le plus.",
            },
            {
                title: "Retouches et livraison",
                description: "Nous vous envoyons différentes propositions de logo et effectuons des retouches afin qu’il soit conforme à vos attentes.",
            },
        ],
        prixProps: {
            page: 'agence-graphisme',
            p1: "Votre logo pro pour",
            p: "Marquez les esprits de vos clients dès maintenant.",
            price: 400,
        },
    };

    const stepsProp = {
        page: 'agence-graphisme',
        pretitle: "Le design graphique chez LIADTECH",
        title: "Comment ça ",
        highlight: "marche ?",
        steps: {
            right: [
                {
                    step: 1,
                    title: "Prise de brief",
                    description: "Afin de créer une image qui vous ressemble, définissez vos objectifs et vos critères avec un expert LIADTECH.",
                    image: "/step-1.jpg",
                },
                {
                    step: 3,
                    title: "Validation de votre logo",
                    description: "Nous effectuons des retouches sur la proposition que vous préférez pour que votre logo vous corresponde parfaitement.",
                    image: "/step-3.jpg",
                },
            ],
            left: [
                {
                    step: 2,
                    title: "Création de votre logo et de vos visuels",
                    description: "2 pistes de logos vous sont proposées pour que vous puissiez choisir celle qui correspond le mieux à votre activité.",
                    image: "/step-2.jpg",
                },
                {
                    step: 4,
                    title: "Livraison des différents formats",
                    description: "Avec votre nouveau logo, mettez-en plein la vue à vos clients (et futurs clients) !",
                    image: "/step-4.jpg",
                },
            ],
        },
    };

    const avisProps = {
        page: 'agence-graphisme',
        titleMiddle: true,
        pretitle: "Les avis des clients LIADTECH, votre agence de communication digitale",
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
                img: "/avis-pic-4.jpg",
                name: "Full Name - Gérante",
                quote: "Ils ont été très réactifs et on su me proposer ce qui correspondait exactement à mon besoin.",
            },
            {
                img: "/avis-pic-2.jpg",
                name: "Example Name - Directeur",
                quote: "Un accompagnement personnalisé et efficace. Merci !",
            },
            {
                img: "/avis-pic-3.jpg",
                name: "Another Name - CEO",
                quote: "Une collaboration au top depuis plusieurs années ! Si vous êtes à la recherche d'une agence réactive, LIADTECH est celle qu'il vous faut. Des experts de la communication qui proposent des prestations toujours adaptées à mes besoins.",
            },
        ],
    };

    const faqProps = {
        page: "agence-google-ads",
        faqs : [
            {
                question: "Quelles sont les étapes de la conception de mon logo ?",
                answer: (
                    <>
                        La réalisation de votre logo par notre studio graphique débute par un entretien approfondi permettant de collecter les informations indispensables à la création de vos éléments graphiques. Cette compréhension précise de votre univers et de votre stratégie de communication nous permet ensuite de réaliser des maquettes de logos qui traduisent fidèlement votre identité d'entreprise.
                        <br />
                        <br />
                        Suite à la réception des propositions de visuels, vous pouvez demander d'éventuelles modifications pour peaufiner le logo à votre image. Après validation, nous finalisons le design et vous envoyons votre logo sous différents formats par email. De la sorte, notre processus garantit un logo professionnel, sur-mesure et parfaitement en phase avec vos attentes.
                    </>
                ),
            },
            {
                question: "Dois-je envisager une refonte de ma communication visuelle ?",
                answer: (
                    <>
                        La refonte de votre communication visuelle peut s'avérer nécessaire et bénéfique. Dans un contexte en constante mutation, une identité visuelle actualisée aide à conserver la pertinence et l'attractivité de votre marque. Il est crucial que votre identité graphique représente votre entreprise telle qu'elle est aujourd'hui, et non comme elle était lors de sa fondation.
                        <br />
                        <br />
                        Une agence de communication visuelle telle que la nôtre propose la création et la mise à jour d'identités graphiques. Que ce soit pour la création d'un nouveau logo, ou la modernisation de vos supports de communication, nous sommes en mesure de vous accompagner dans cette démarche. Cela contribuera à renforcer votre image de marque, améliorer votre visibilité et, par conséquent, attirer et fidéliser vos clients.
                    </>
                ),
            },
            {
                question: "Pourquoi solliciter une agence de graphisme pour la création de son logo et de ses cartes de visite ?",
                answer: (
                    <>
                        Solliciter une agence de communication spécialisée en création graphique, comme la nôtre, pour élaborer votre logo et vos cartes de visite est une démarche primordiale. En effet, ces éléments graphiques essentiels, conçus par des graphistes professionnels, sont les vecteurs de vos valeurs et vous démarquent de vos concurrents.
                        <br />
                        <br />
                        Notre agence de graphisme garantit également une cohérence parfaite entre tous vos outils de communication, grâce à des chartes graphiques soigneusement établies. De ce fait, choisir notre studio de création graphique assure une direction artistique maîtrisée et une stratégie de communication graphique efficace, renforçant ainsi votre identité de marque.                        
                    </>
                ),
            },
            {
                question: "En quoi un studio de création graphique peut-il rehausser mon image ?",
                answer: (
                    <>
                        Un studio de création graphique, comme le nôtre, joue un rôle déterminant dans l'évolution et le renforcement de votre image de marque. Il forge votre identité graphique, comprenant votre logo, votre charte graphique et votre univers visuel, ces éléments distinctifs qui différencient votre marque sur le marché.
                        <br />
                        <br />
                        De plus, il assure une cohérence visuelle sur tous vos supports de communication, de votre site internet aux réseaux sociaux, améliorant ainsi votre visibilité et crédibilité. Grâce à la direction artistique et la communication visuelle, votre message et vos valeurs sont véhiculés de manière efficace, permettant de créer une expérience visuelle captivante pour vos clients.                        
                    </>
                ),
            },
            {
                question: "Quels types de projets graphiques pouvez-vous réaliser ?",
                answer: (
                    <>
                        L’agence LIADTECH s’occupe de la plupart des projets de création graphique des entrepreneurs. Nos experts s’occupent de la conception de logos, de cartes de visites, de plaquettes, de dépliants et de flyers. Tous les projets graphiques sont gérés par des graphistes experts dans leur domaine qui vous accompagneront au mieux pour vous faire ressortir aux yeux de vos clients. Pour toute autre demande, vous pouvez prendre rendez-vous avec un de nos experts afin d’obtenir un devis !
                    </>
                ),
            },
            {
                question: "En combien de temps recevrais-je ma réalisation ?",
                answer: (
                    <>
                        Nos experts s’engagent à vous livrer une première maquette 15 jours après la signature de votre contrat. Cette maquette sera à valider par vos soins pour que nous puissions effectuer différentes retouches afin que votre création vous convienne au mieux. Pour les créations graphiques à imprimer, nous prenons en charge l’impression et la livraison de votre création. Les délais de livraison varieront en fonction de votre secteur géographique.
                    </>
                ),
            },
            {
                question: "Quelle est la procédure à suivre pour commencer un projet de design graphique avec votre agence ?",
                answer: (
                    <>
                        Lorsque vous décidez de passer par LIADTECH pour prendre en charge votre projet de création graphique, vous allez être contacté pour la mise en place de votre projet. Pendant cet appel, un conseiller vous posera différentes questions pour bien comprendre tous les contours de votre projet. Ce conseiller vous demandera par exemple les couleurs que vous souhaitez, votre slogan, la présentation de votre entreprise, les textes que vous souhaitez mettre en avant, etc.
                        <br />
                        <br />
                        Si vous n’avez pas d’idée précise concernant votre projet, nos équipes graphiques vous feront différentes propositions pour que vous puissiez avoir un aperçu des différentes possibilités.                        
                    </>
                ),
            },
            {
                question: "Puis-je voir des exemples de projets graphiques que vous avez réalisés pour d'autres clients ?",
                answer: (
                    <>
                        Oui, il est tout à fait possible de demander des exemples de projets graphiques réalisés pour d’autres clients. Cela nous aidera à vous proposer le design qui vous correspondra le mieux, et à vous faire une idée sur la qualité de nos créations ! Par exemple, les cartes de visites d'un chauffagiste ou encore les cartes de visite d'un taxi.
                    </>
                ),
            },
            {
                question: "Pouvez-vous intégrer des éléments spécifiques dans mes projets graphiques ?",
                answer: (
                    <>
                        Oui, nous pouvons parfaitement intégrer différents éléments spécifiques sur vos créations. Il vous faudra néanmoins veiller à nous les faire parvenir par mail et en bonne qualité pour obtenir le meilleur rendu possible.
                    </>
                ),
            },
            {
                question: "Comment se passe le support client après la livraison des fichiers graphiques ?",
                answer: (
                <>
                    Si vous êtes passés par LIADTECH pour la création de vos fichiers graphiques, nous restons à votre disposition même après la livraison, notamment si :
                    <br></br>
                    <br></br>
                        • Vous avez perdu votre création graphique ou souhaitez un autre format.<br></br>
                        • Vous souhaitez une modification mineure sur votre logo (couleur, typographie, etc.).<br></br>
                    <br></br>
                    Pour tout autre type d’accompagnement, vous pourrez contacter directement le graphiste en charge de votre projet.
                </>
                ),
            },
            {
                question: "Est-ce que mes visuels seront optimisés pour être compatibles avec tous les supports (impression, web, mobile) ?",
                answer: (
                    <>
                        Nous vous livrons différents formats pour optimiser la diffusion de votre support graphique : PNG, JPG, SVG, PDF. En fonction des demandes, nous pouvons vous livrer d’autres types de formats tels que le WebP. Nous vous livrerons le format adapté à l’action que vous souhaitez effectuer.
                    </>
                ),
            },
            {
                question: "Offrez-vous des services de création de contenu visuel (illustrations, infographies, vidéos) en plus du design graphique ?",
                answer: (
                    <>
                        Non, nous ne proposons pas de services de création de contenus visuels en plus des offres que nous proposons.
                    </>
                ),
            },
            {
                question: "Quels outils ou technologies utilisez-vous pour la création de vos designs graphiques ?",
                answer: (
                    <>
                        Pour la création graphique, nos experts utilisent les outils professionnels de la suite Adobe (Photoshop et Illustrator).
                    </>
                ),
            },
            {
                question: "Quels sont les avantages de choisir LIADTECH par rapport à d'autres agences de graphisme ?",
                answer: (
                    <>
                        Choisir LIADTECH pour la création de vos supports graphiques permet d’accéder au savoir-faire d’un graphiste professionnel, à votre écoute, qui saura vous conseiller vers la meilleure création possible.
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
            <SectionSteps {...stepsProp}/>
            <SectionAvis {...avisProps} />
            <SectionFAQ {...faqProps}/>
            <SectionContact />
        </div>
    );
}