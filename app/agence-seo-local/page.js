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

    const resultatProps = {
        page: 'agence-seo-local',
        pretitle: "Référencez votre fiche Google Maps",
        title: "Être visible en ligne, ",
        highlight: "c’est difficile",
        p: "Lorsqu’un de vos clients recherche un professionnel, Google va lui proposer systématiquement des résultats de recherche Google Maps, PUIS mettre en avant les sites internet.",
        p2: "Même avec le meilleur site du monde et une stratégie de référencement impeccable, si votre fiche Google est à la traîne, vos concurrents passeront devant vous.",
        img: '/resultat-pic.png',
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

    const argumentsProps = {
        page: 'agence-seo-local',
        title: "Pourquoi avoir un site web ",
        highlight: "bien référencé ?",
        items: [
            {
                icon: SlScreenDesktop,
                title: "Multipliez vos opportunités commerciales",
                description: "80% des gens cherchent des pros sur Google.",
            },
            {
                icon: PiCertificateLight,
                title: "Gagnez la confiance de vos prospects",
                description: "Être bien référencé améliore votre capital confiance.",
            },
            {
                icon: HiOutlineAdjustmentsVertical,
                title: "Démarquez-vous de vos concurrents",
                description: "Montrez que vous êtes le meilleur dans votre secteur.",
            },
        ],
        button: "Recevoir nos tarifs",
    };

    const communicationProps = {
        page: 'agence-seo-local',
        pretitle: "Le référencement naturel ça fonctionne comment ?",
        title: "Comment rendre son site internet visible sur",
        highlight: "Google",
        titleMiddle: true,
        items: [
            {
                img: '/communication-pic-1.png',
                title: "Créer une stratégie de contenu",
                description: "Créez régulièrement du contenu optimisé de qualité qui plaît à Google et à vos clients.",
            },
            {
                img: '/communication-pic-4.png',
                title: "Optimiser son site web",
                description: "Optimisez les performances de votre site et assurez une maintenance de qualité.",
            },
            {
                img: '/communication-pic-3.png',
                title: "Intégrer une stratégie netlinking",
                description: "Améliorez votre popularité aux yeux de Google en étant recommandé par des sites de confiance.",
            },
        ],
    };

    // prixProps: Solutions section includes the price section
    const solutionsProps = {
        page: 'agence-seo-local',
        titleMiddle: true,
        pretitle: "L'agence des pros",
        title: "Notre plan pour vous placer au",
        highlight: "top",
        p: "Nous intervenons sur tous les aspects du référencement naturel pour vous emmener au sommet !",
        items: [
            {
                title: "Rédaction de pages optimisées pour le SEO",
                description: "Nos rédacteurs créent sur votre site internet des pages optimisées pour grimper dans les résultats de recherche Google.",
            },
            {
                title: "Optimisation de l’existant",
                description: "Nos équipes retravaillent et optimisent le contenu déjà existant sur votre site internet.",
            },
            {
                title: "Amélioration des performances",
                description: "Améliorez votre popularité aux yeux de Google en étant recommandé par des sites de confiance.",
            },
            {
                title: "Stratégie de popularité",
                description: "Nous définissons les meilleurs sites pour vous recommander et créons entre 8 et 16 liens renvoyant vers votre site internet.",
            },
        ],
        prixProps: {
            price: 249,
            p: "Escaladez facilement les résultats de recherche Google !",
        },
    };

    const stepsProp = {
        page: 'agence-seo-local',
        pretitle: "Nos experts SEO vous accompagnent de A à Z",
        title: "Votre stratégie de agence-seo-local en",
        highlight: "6 étapes ?",
        steps: {
            right: [
                {
                    step: 1,
                    title: "Audit de préparation",
                    description:
                    "Nos équipes sélectionnent les mots-clés les plus pertinents pour votre activité et définissent un plan adapté pour atteindre vos objectifs.",
                    image: "/step-1.jpg",
                },
                {
                    step: 3,
                    title: "Création de contenu",
                    description:
                    "Pour booster vos résultats, nos équipes s’occupent de la rédaction et de la création de pages construites pour optimiser l’efficacité de votre référencement.",
                    image: "/step-3.jpg",
                },
                {
                    step: 5,
                    title: "Maintenance et mises à jour",
                    description:
                    "Nous intervenons sur vos contenus pour un site dynamique qui s’adapte aux exigences de Google. Tous les 12 mois, nous rafraîchissons l’intégralité des contenus de votre site internet.",
                    image: "/step-5.jpg",
                },
            ],
            left: [
                {
                    step: 2,
                    title: "Optimisation de votre site",
                    description:
                    "Nos équipes interviennent sur votre site internet pour optimiser son contenu, sa vitesse de chargement et sa structure.",
                    image: "/step-2.jpg",
                },
                {
                    step: 4,
                    title: "Stratégie de netlinking",
                    description:
                    "Nous mettons en place une stratégie de netlinking en choisissant des sites pertinents et en créant des liens de confiance vers votre site internet.",
                    image: "/step-4.jpg",
                },
                {
                    step: 6,
                    title: "Suivi et accompagnement",
                    description:
                    "Nos équipes vous tiennent informé de chaque action effectuée sur votre site internet, et effectuent avec vous le suivi de vos objectifs.",
                    image: "/step-6.jpg",
                },
            ],
        },
    };

    const testimonialsProps = {
        pretitle: "Ils ont propulsé leur activité",
        titleMiddle: true,
        title: "Des résultats significatifs pour leur ",
        highlight: "agence-seo-local",
        items: [
            {
                image: "/slide-1.jpg",
                title: "En première position sur “Couvreur 93”",
                company: "AMC Couverture",
                speciality: "Artisan couvreur",
            },
            {
                image: "/slide-2.jpg",
                title: "1ère position sur “Médecine ésthétique”",
                company: "CMEG",
                speciality: "Médecine ésthétique",
            },
            {
                image: "/slide-3.jpg",
                title: "TOP 3 Google sur son activité",
                company: "A2 Services",
                speciality: "Nettoyage et entretien",
            },
        ],
    };

    const faqProps = {
        page: "agence-seo-local",
        faqs : [
            {
                question: "Qu’est-ce que le référencement naturel ?",
                answer: (
                    <>
                        Le référencement naturel, aussi connu sous le nom de SEO, est l'ensemble des techniques visant à améliorer la position de votre site internet dans les résultats de recherche Google. Autrement dit, il s'agit d'optimiser la agence-seo-local de votre site internet de manière organique, sans avoir à recourir à la publicité payante.
                        <br />
                        <br />
                        Le référencement naturel comprend l'optimisation de différents aspects de votre site web, tant au niveau technique que du contenu. Cela inclut l'utilisation de mots-clés pertinents, l'optimisation de la structure du site, l'amélioration de la vitesse de chargement, la création de contenus de qualité et le développement de liens externes organiques.
                        <br />
                        <br />
                        L'objectif principal du référencement naturel est d'améliorer la agence-seo-local d'un site web dans les résultats de recherche, ce qui permet d'attirer un trafic qualifié et d'augmenter le nombre de visiteurs. En se classant parmi les premiers résultats pour des mots-clés pertinents, un site a plus de chances d'être visité et de générer du trafic organique.
                        <br />
                        <br />
                        Le référencement naturel est un processus continu qui nécessite une surveillance et une adaptation constantes aux algorithmes des moteurs de recherche. Il peut également prendre du temps pour obtenir des résultats significatifs, car le classement d'un site web dépend de nombreux facteurs et de la concurrence existante sur ces mots-clés.
                    </>
                ),
            },
            {
                question: "Pourquoi faire appel à une agence SEO ?",
                answer: (
                    <>
                        Faire appel à une agence SEO lorsque l’on est à son compte est essentiel pour améliorer votre agence-seo-local sur les moteurs de recherche. A part si vous êtes expert SEO, une agence SEO comme LIADTECH vous apportera l’expertise nécessaire pour optimiser votre site web, augmenter son trafic et son positionnement sur Google.
                        <br />
                        <br />
                        Assurez-vous également que celle-ci propose un accompagnement et un suivi tout au long de la durée de votre contrat. Les résultats d’une stratégie SEO étant sur le moyen et sur le long terme, il est important que vous puissiez choisir un partenaire de confiance pour avoir le meilleur retour sur investissement possible.
                    </>
                ),
            },
            {
                question: "Pourquoi faire appel à une agence SEO ?",
                answer: (
                    <>
                        Faire appel à une agence SEO lorsque l’on est à son compte est essentiel pour améliorer votre agence-seo-local sur les moteurs de recherche. A part si vous êtes expert SEO, une agence SEO comme LIADTECH vous apportera l’expertise nécessaire pour optimiser votre site web, augmenter son trafic et son positionnement sur Google.
                        <br />
                        <br />
                        Passer par une agence spécialisée pour votre référencement naturel vous permettra d’optimiser vos résultats et d’avoir un meilleur retour sur investissement.
                    </>
                ),
            },
            {
                question: "Combien coûte une agence SEO ?",
                answer: (
                    <>
                        Le coût d’une agence SEO varie en fonction de plusieurs facteurs : l’importance de votre projet, la concurrence dans votre secteur, et les services spécifiques dont vous avez besoin. Certaines agences proposent des forfaits horaires et d’autres des tarifs mensuels. Si c’est la première fois que vous souhaitez passer par une agence SEO, nous vous conseillons de vous diriger vers des agences qui proposent des forfaits mensuels comme LIADTECH. Vous pourrez ainsi mieux estimer le retour sur investissement de votre campagne.
                    </>
                ),
            },
            {
                question: "Pourquoi faire du référencement naturel ?",
                answer: (
                    <>
                        Mettre en place une stratégie de référencement naturel (SEO) est essentiel pour augmenter votre agence-seo-local sur les moteurs de recherche comme Google. Une bonne stratégie SEO vous permettra d’attirer un trafic qualifié, d’améliorer le classement de votre site internet sur Google et de renforcer votre image de marque. En optimisant votre contenu et en utilisant des mots-clés pertinents, vous pourrez atteindre votre public cible sans avoir à payer pour des publicités.
                        <br></br>
                        <br></br>
                        Il est à noter que le référencement naturel est une stratégie à moyen et long terme qui génèrera des résultats durables pour votre entreprise.
                    </>
                ),
            },
            {
                question: "Comment optimiser son référencement naturel ?",
                answer: (
                    <>
                        Un bon référencement naturel repose sur 3 piliers : stratégie de contenu, performances et netlinking. Pour commencer, vous ou votre agence SEO doit effectuer une recherche de mots-clés pertinents pour votre secteur. Il faudra ensuite créer du contenu informatif de qualité intégrant ces mots-clés de manière naturelle.
                        <br></br>
                        <br></br>
                        Ensuite, vous devez optimiser votre site internet : vitesse de chargement, compatibilité mobile et structure Hn. Enfin, vous ou votre agence SEO doit mettre en place une stratégie de netlinking efficace avec des liens entrants provenant de site réputés afin d’optimiser les résultats de votre stratégie SEO.
                        <br></br>
                        <br></br>
                        Un suivi régulier est indispensable pour pouvoir mettre en place des actions correctives et affirmer votre positionnement.                        
                    </>
                ),
            },
            {
                question: "Fournissez-vous des rapports de performance SEO réguliers ?",
                answer: (
                    <>
                        Absolument ! Si vous choisissez LIADTECH pour développer votre site internet professionnel, vous aurez accès à un tableau de performances vous permettant de suivre l'évolution de votre positionnement SEO et l'état de santé de votre site internet.
                        <br></br>
                        <br></br>
                        De plus, un expert dédié à votre projet sera toujours disponible pour vous accompagner et assurer un suivi optimal de votre projet web. 
                    </>
                ),
            },
            {
                question: "Quel est le délai avant de voir les résultats d’une stratégie SEO ?",
                answer: (
                    <>
                        ALe délai avant de voir des résultats en SEO varie, mais il faut généralement compter entre 3 à 6 mois pour observer des améliorations significatives en termes de référencement Google. Ce délai dépend de plusieurs facteurs : la concurrence dans votre secteur, la qualité de votre contenu, l'état actuel de votre site internet et les efforts d'optimisation SEO mis en place. Le référencement naturel est une stratégie à long terme nécessitant une optimisation continue et des ajustements réguliers pour maintenir et améliorer les résultats en termes de trafic et de agence-seo-local.
                    </>
                ),
            },
        ],
    }

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


    return (
        <div>
            <Hero {...heroProps}/>
            <SectionResultat2 {...resultatProps}/>


            <SectionArguments {...argumentsProps}/>
            <SectionCommunication {...communicationProps}/>
            <SectionSolutions {...solutionsProps}/>
            <SectionSteps {...stepsProp}/>
            <SectionTestimonials {...testimonialsProps}/>
            <SectionAvis {...avisProps} />
            <SectionFAQ {...faqProps}/>
            <SectionContact />
        </div>
    );
}