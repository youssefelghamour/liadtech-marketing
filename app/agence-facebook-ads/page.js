import Hero from "../components/Hero/Hero";
import SectionArguments from "../components/SectionArguments/SectionArguments";
import SectionCommunication from "../components/SectionCommunication/SectionCommunication";
import SectionFAQ from "../components/SectionFAQ/SectionFAQ";
import { SlScreenDesktop } from 'react-icons/sl';
import { PiCertificateLight } from 'react-icons/pi';
import { HiOutlineAdjustmentsVertical } from 'react-icons/hi2';
import SectionResultat from "../components/SectionResultat/SectionResultat";
import SectionContact from "../components/SectionContact/SectionContact";
import SectionPrix from "../components/SectionPrix/SectionPrix";
import SectionSolutions from "../components/SectionSolutions/SectionSolutions";


export const metadata = {
    title: "LIADTECH - Agence Facebook Ads",
};

export default function Home() {
    const heroProps = {
        page: 'ads',
        img: `/hero-pic-3.jpg`,
        pretitle: "Agence facebook Ads et Instagram Ads",
        highlight: " Transformez ",
        title2: "votre business grâce aux réseaux sociaux",
        p: "Multipliez vos demandes de contact avec des publicités impactantes sur les réseaux sociaux gérées par un expert.",
        button: "Recevoir nos tarifs",
    };

    const argumentsProps = {
        page: 'ads',
        pretitle: "LIADTECH, votre agence social media",
        title: "Vos publicités en ",
        highlight: "pilotage automatique",
        img: '/pub-pic.png',
        items: [
            {
                icon: SlScreenDesktop,
                title: "Retour sur investissement",
                description: "Communiquez efficacement avec une solution focalisée sur votre retour sur investissement.",
            },
            {
                icon: PiCertificateLight,
                title: "Expertise",
                description: "Développez votre notoriété avec des publicités professionnelles gérées par un expert en acquisition sur les réseaux sociaux.",
            },
            {
                icon: HiOutlineAdjustmentsVertical,
                title: "Stratégie",
                description: "Atteignez vos objectifs avec une stratégie conçue sur-mesure pour votre entreprise et pilotée par un chargé de projet ALEO.",
            },
        ],
        button: "Recevoir nos tarifs",
    };

    const communicationProps = {
        page: 'ads',
        pretitle: "La communication sur les réseaux sociaux accessible aux pros",
        title: "Les résultats au",
        highlight: " coeur ",
        title2: "de votre projet",
        titleMiddle: true,
        items: [
            {
                img: '/communication-pic-5.png',
                title: "Vos objectifs avant tout",
                description: "Générer des contacts, développer votre notoriété, attirer des abonnés, notre équipe s’occupe de tout pour atteindre vos objectifs.",
            },
            {
                img: '/communication-pic-2.png',
                title: "Un accompagnement flexible",
                description: "Création de visuels, ciblage des utilisateurs, phases de test, nous mettons en place la formule la mieux adaptée à votre succès !",
            },
            {
                img: '/communication-pic-6.png',
                title: "Un suivi rigoureux",
                description: "Suivez facilement les résultats de vos publicités et bénéficiez d’un accompagnement sur mesure.",
            },
        ],
    };

    const resultatProps = {
        page: 'ads',
        title: "Vos réseaux sociaux vont vous rapporter ",
        highlight: "gros",
        p: "Attirez plus de clients et boostez votre visibilité avec des publicités conçues et diffusées pour vous par les experts ALEO.",
        p2: "Création de vos visuels, diffusion de vos campagnes, nos équipes mettent tout en œuvre pour vous faire atteindre vos objectifs.",
        img: '/network-pic.png',
        items: [
            {
                title: "Multipliez vos opportunités commerciales",
            },
            {
                title: "Boostez votre visibilité",
            },
            {
                title: "Améliorez votre crédibilité en ligne",
            },
            {
                title: "Maîtrisez votre budget publicitaire",
            },
            {
                title: "Analysez vos résultats accompagné par un expert",
            },
        ],
    };

    const resultatProps2 = {
        page: 'ads',
        pretitle: 'Choisir Aleo pour ses annonces Facebook et Instagram',
        title: "Votre chargé de projet dédié à votre stratégie",
        p: "De la création de votre stratégie au suivi des statistiques, un chargé de projet prend en charge de A à Z vos campagnes.",
    };

    const faqProps = {
        page: "referencement",
        faqs : [
            {
                question: "Qu’est-ce que le référencement naturel ?",
                answer: (
                    <>
                        Le référencement naturel, aussi connu sous le nom de SEO, est l'ensemble des techniques visant à améliorer la position de votre site internet dans les résultats de recherche Google. Autrement dit, il s'agit d'optimiser la visibilité de votre site internet de manière organique, sans avoir à recourir à la publicité payante.
                        <br />
                        <br />
                        Le référencement naturel comprend l'optimisation de différents aspects de votre site web, tant au niveau technique que du contenu. Cela inclut l'utilisation de mots-clés pertinents, l'optimisation de la structure du site, l'amélioration de la vitesse de chargement, la création de contenus de qualité et le développement de liens externes organiques.
                        <br />
                        <br />
                        L'objectif principal du référencement naturel est d'améliorer la visibilité d'un site web dans les résultats de recherche, ce qui permet d'attirer un trafic qualifié et d'augmenter le nombre de visiteurs. En se classant parmi les premiers résultats pour des mots-clés pertinents, un site a plus de chances d'être visité et de générer du trafic organique.
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
                        Faire appel à une agence SEO lorsque l’on est à son compte est essentiel pour améliorer votre visibilité sur les moteurs de recherche. A part si vous êtes expert SEO, une agence SEO comme LIADTECH vous apportera l’expertise nécessaire pour optimiser votre site web, augmenter son trafic et son positionnement sur Google.
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
                        Faire appel à une agence SEO lorsque l’on est à son compte est essentiel pour améliorer votre visibilité sur les moteurs de recherche. A part si vous êtes expert SEO, une agence SEO comme LIADTECH vous apportera l’expertise nécessaire pour optimiser votre site web, augmenter son trafic et son positionnement sur Google.
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
                        Mettre en place une stratégie de référencement naturel (SEO) est essentiel pour augmenter votre visibilité sur les moteurs de recherche comme Google. Une bonne stratégie SEO vous permettra d’attirer un trafic qualifié, d’améliorer le classement de votre site internet sur Google et de renforcer votre image de marque. En optimisant votre contenu et en utilisant des mots-clés pertinents, vous pourrez atteindre votre public cible sans avoir à payer pour des publicités.
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
                        ALe délai avant de voir des résultats en SEO varie, mais il faut généralement compter entre 3 à 6 mois pour observer des améliorations significatives en termes de référencement Google. Ce délai dépend de plusieurs facteurs : la concurrence dans votre secteur, la qualité de votre contenu, l'état actuel de votre site internet et les efforts d'optimisation SEO mis en place. Le référencement naturel est une stratégie à long terme nécessitant une optimisation continue et des ajustements réguliers pour maintenir et améliorer les résultats en termes de trafic et de visibilité.
                    </>
                ),
            },
        ],
    }

    const prixProps = {
        page: 'ads',
        titleMiddle: true,
        pretitle: "Votre agence experte en social media",
        title: "Pour chaque objectif, une ",
        highlight: "solution ",
        title2: "LIADTECH",
        p: "Nous vous conseillons sur la meilleure stratégie à mettre en place pour atteindre vos objectifs.",
    }


    return (
        <div>
            <Hero {...heroProps}/>
            <SectionArguments {...argumentsProps}/>
            <SectionCommunication {...communicationProps}/>
            <SectionResultat {...resultatProps2}/>
            <SectionSolutions {...prixProps}/>
            <SectionResultat {...resultatProps}/>
            <SectionFAQ {...faqProps}/>
            <SectionContact />
        </div>
    );
}