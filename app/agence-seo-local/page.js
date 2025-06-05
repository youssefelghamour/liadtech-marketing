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
import SectionResultat2 from "../components/SectionResultat/SectionResultat2";
import SectionPrix from "../components/SectionPrix/SectionPrix";


export const metadata = {
    title: "LIADTECH - Agence SEO local",
};

export default function Home() {
    const heroProps = {
        page: 'agence-seo-local',
        img: `/hero-pic-4.png`,
        img2: '/hero-pic-5.png',
        pretitle: "Agence de référencement Local",
        title: "Votre fiche Google",
        highlight: "bien positionnée",
        p: "Attirez plus de clients, générez des appels et boostez votre notoriété locale grâce à Google Maps.",
        button: "Découvrir nos offres",
    };

    const resultatProps2 = {
        page: 'agence-seo-local',
        pretitle: "Référencez votre fiche Google Maps",
        title: "Être visible en ligne, ",
        highlight: "c’est difficile",
        p: "Lorsqu’un de vos clients recherche un professionnel, Google va lui proposer systématiquement des résultats de recherche Google Maps, PUIS mettre en avant les sites internet.",
        p2: "Même avec le meilleur site du monde et une stratégie de référencement impeccable, si votre fiche Google est à la traîne, vos concurrents passeront devant vous.",
        img: '/resultat-pic-1.png',
        items: [
            {
                title: "Faites de votre établissement LA référence dans votre domaine",
            },
            {
                title: "Un positionnement optimisé pour votre activité",
            },
            {
                title: "Boostez votre agence-seo-local locale grâce à un site local ou multiville",
            },
            {
                title: "Optimisez complètement votre fiche entreprise Google",
            },
        ],
    };
    
    const testimonialsProps = {
        pretitle: "Améliorer son positionnement local",
        titleMiddle: true,
        highlight: "Augmentez",
        title2: " votre visibilité locale",
        items: [
            {
                image: "/slide-4.jpg",
                title: "Plus de visiteurs",
                description: "Positionnez votre entreprise dans les premières propositions sur Google Maps et attirez de nouveaux visiteurs dans votre entreprise.",
            },
            {
                image: "/slide-5.jpg",
                title: "Plus de crédibilité",
                description: "Nos équipes s'occupent pour vous de la modification de votre fiche d'établissement pour améliorer votre capital confiance.",
            },
            {
                image: "/slide-6.jpg",
                title: "Plus de clients",
                description: "Multipliez vos opportunités commerciales grâce à une stratégie qui attire des visiteurs intéressés dans votre boutique.",
            },
        ],
    };

    const resultatProps = {
        page: 'agence-seo-local',
        pretitle: "Augmentation de votre trafic local",
        title: "Pour chaque objectif, une solution ",
        highlight: "LIADTECH",
        p: "Donnez la meilleure première impression avec votre carte de visite en ligne",
        img: '/resultat-pic-2.jpg',
        items: [
            {
                title: "Accompagnement personnalisé avec un expert dédié",
                description: "Pour comprendre vos besoins et répondre à vos attentes.",
            },
            {
                title: "Élaboration de votre stratégie de référencement",
                description: "Pour booster votre visibilité locale, tout est pensé pour mettre en avant vos informations.",
            },
            {
                title: "Création de votre fiche Google",
                description: "Si vous n’avez pas de fiche d’établissement, les équipes LIADTEACH s’occupent pour vous de la création de votre fiche Google.",
            },
            {
                title: "Livraison de 2 cartes NFC",
                description: "Récoltez facilement des avis clients grâce à des cartes NFC Google. Vos clients n’auront qu’à poser leur téléphone dessus pour laisser un avis !",
            },
        ],
    };

    const priceProps = {
        page: "agence-seo-local",
        price: 99,
        p: "Choisissez la bonne manière pour attirer des clients",
    };

    const avisProps = {
        page: 'agence-seo-local',
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
                review: "Service impeccable et communication rapide. Leur travail a vraiment boosté notre agence-seo-local en ligne.",
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
        page: 'agence-seo-local',
        pretitle: "L’optimisation de votre fiche Google",
        title: "Votre stratégie de référencement en",
        highlight: "4 étapes",
        steps: {
            right: [
                {
                    step: 1,
                    title: "Création de la stratégie de référencement",
                    description: "Nous analysons votre fiche d’établissement et mettons en place une stratégie de référencement sur mesure.",
                    image: "/step-1.jpg",
                },
                {
                    step: 3,
                    title: "Actions de développement de la notoriété",
                    description: "Nos équipes mettent en place une stratégie d’interaction sur votre fiche Google pour vous faire grimper dans les résultats de recherche.",
                    image: "/step-3.jpg",
                },
            ],
            left: [
                {
                    step: 2,
                    title: "Optimisation de votre fiche",
                    description: "Nous rédigeons et optimisons le contenu de votre fiche d’établissement pour que Google et vos clients aient le maximum d’informations possible.",
                    image: "/step-2.jpg",
                },
                {
                    step: 4,
                    title: "Suivi et analyse des résultats",
                    description: "Suivez les résultats de votre stratégie de référencement en temps réel.",
                    image: "/step-4.jpg",
                },
            ],
        },
    };

    const faqProps = {
        page: "agence-seo-local",
        faqs : [
            {
                question: "Qu'est-ce qu'une fiche Google et pourquoi est-elle importante ?",
                answer: (
                    <>
                        Une fiche Google est votre carte de visite en ligne. Elle apparaît dans les résultats de recherche Google et sur Google Maps, offrant aux utilisateurs des informations clés sur votre entreprise, telles que votre adresse, numéro de téléphone, horaires d'ouverture, site web, ainsi que des photos et des avis clients.
                        <br />
                        <br />
                        Cette fiche améliore considérablement la visibilité locale de votre entreprise. Elle permet aux clients potentiels de vous trouver facilement lorsqu'ils recherchent des produits ou services similaires dans votre zone géographique. Une fiche bien optimisée renforce la crédibilité de votre entreprise, attire plus de clients et génère du contact.
                    </>
                ),
            },
            {
                question: "Quels sont les avantages d'avoir une fiche Google pour mon entreprise ?",
                answer: (
                    <>
                        Avoir une fiche Google améliore votre visibilité en ligne, en vous permettant d'apparaître en haut des résultats de recherche Google et sur Google Maps lorsque les clients recherchent des services ou produits locaux. Cela facilite la découverte de votre entreprise par des clients potentiels à proximité.
                        <br />
                        <br />
                        Cette fiche fournit des informations essentielles comme votre adresse, vos horaires d'ouverture, et votre numéro de téléphone et aide les clients à vous contacter directement ou à vous rendre visite. De plus, elle permet de recueillir et de gérer des avis clients pour renforcer votre crédibilité et inciter d'autres personnes à choisir vos services.
                    </>
                ),
            },
            {
                question: "Comment puis-je créer une fiche Google pour mon entreprise ?",
                answer: (
                    <>
                        Vous pouvez créer votre fiche d’établissement via votre compte Google via Google my business.
                        <br />
                        <br />
                        LIADTECH vous offre un service clé en main pour obtenir votre fiche 100 % personnalisée et optimisée pour booster votre visibilité locale.
                    </>
                ),
            },
            {
                question: "Quels sont les éléments clés d'une fiche Google bien optimisée ?",
                answer: (
                    <>
                        Pour optimiser une fiche Google, il est essentiel de fournir des informations complètes et précises, telles que le nom, l'adresse, le numéro de téléphone, ainsi que les horaires d'ouverture de votre entreprise. L'utilisation de photos de qualité est également un élément clé à l’optimisation de votre fiche. Il est important d’utiliser des mots clés pertinents pour la présentation de votre entreprise.
                    </>
                ),
            },
            {
                question: "Combien de temps faut-il pour que ma fiche Google soit visible en ligne ?",
                answer: (
                    <>
                        Il faut compter jusqu’à 1 mois afin que votre fiche Google soit visible en ligne.
                        <br></br>
                        <br></br>
                        Sa visibilité sera ensuite améliorée avec le temps grâce au référencement. Son optimisation est importante pour booster cette visibilité.
                    </>
                ),
            },
            {
                question: "Que faire si mon entreprise a plusieurs emplacements ?",
                answer: (
                    <>
                        Si votre entreprise possède plusieurs emplacements, il est important de créer une fiche Google distincte pour chaque site. Elles doivent chacune comporter des informations spécifiques à son emplacement, telles que l'adresse, le numéro de téléphone, et les horaires d'ouverture propres à ce lieu. Assurez-vous également de choisir des catégories pertinentes pour chaque fiche en fonction des services offerts à cet emplacement.
                        <br></br>
                        <br></br>
                        En ayant des fiches distinctes et bien optimisées pour chaque site, vous maximisez la visibilité locale de chaque emplacement, permettant ainsi aux clients de trouver facilement le point de vente ou le service le plus proche de chez eux.
                    </>
                ),
            },
            {
                question: "Comment puis-je améliorer les avis sur ma fiche Google ?",
                answer: (
                    <>
                        Il est important d’encourager vos clients satisfaits à partager leur expérience en leur demandant directement après chaque service ou achat. Vous pouvez faciliter cela en leur fournissant un lien direct vers votre page d'avis.
                        <br></br>
                        <br></br>
                        Répondre à tous les avis, qu'ils soient positifs ou négatifs, est crucial. Mettez la satisfaction de vos clients en priorité.
                    </>
                ),
            },
            {
                question: "Que se passe-t-il si les informations de ma fiche changent ?",
                answer: (
                    <>
                        Si les informations de votre fiche Google changent, il est crucial de les mettre à jour rapidement. Des informations incorrectes, comme un numéro de téléphone, une adresse, ou des horaires d'ouverture obsolètes, peuvent entraîner une mauvaise expérience pour vos clients. Ils risquent ainsi de ne pas vous trouver ou de renoncer à vous contacter. Google valorise les fiches précises et à jour, cela peut donc affecter votre référencement local. En maintenant vos informations à jour, vous assurez une meilleure visibilité et une expérience client optimale.
                    </>
                ),
            },
            {
                question: "Pourquoi faire appel à un professionnel pour créer ma fiche Google ?",
                answer: (
                    <>
                        Un expert saura configurer votre fiche en veillant à ce que toutes les informations soient complètes, précises et optimisées pour le référencement local. Cela inclut notamment le choix des bonnes catégories, l’ajout de mots-clés pertinents, et la publication d'une description engageante qui reflète votre entreprise.
                        <br></br>
                        <br></br>
                        En ayant un expert à vos côtés, vous bénéficiez d’un gain de temps et d’un suivi lors de la prise en main de votre fiche. Cela garantit une visibilité optimale et une présence en ligne performante.
                    </>
                ),
            },
            {
                question: "Quel est le coût de la création d'une fiche Google via votre service ?",
                answer: (
                    <>
                        Nous proposons la création de votre fiche Google optimisée et un suivi avec un expert dédié à votre projet pour 99 € HT.
                    </>
                ),
            },
        ],
    }


    return (
        <div>
            <Hero {...heroProps}/>
            <SectionResultat2 {...resultatProps2}/>
            <SectionTestimonials {...testimonialsProps}/>
            <SectionResultat {...resultatProps}/>
            <SectionPrix {...priceProps} />
            <SectionAvis {...avisProps} />
            <SectionSteps {...stepsProp}/>
            <SectionContact />
            <SectionFAQ {...faqProps}/>
        </div>
    );
}