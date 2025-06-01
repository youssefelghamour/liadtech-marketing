import Hero from "../components/Hero/Hero";
import SectionArguments from "../components/SectionArguments/SectionArguments";
import SectionCommunication from "../components/SectionCommunication/SectionCommunication";
import SectionEquipe from "../components/SectionEquipe/SectionEquipe";
import SectionSolutions from "../components/SectionSolutions/SectionSolutions";
import SectionSteps from "../components/SectionSteps/SectionSteps";
import SectionFAQ from "../components/SectionFAQ/SectionFAQ";
import { SlScreenDesktop } from 'react-icons/sl';
import { PiCertificateLight } from 'react-icons/pi';
import { HiOutlineAdjustmentsVertical } from 'react-icons/hi2';
import SectionResultat from "../components/SectionResultat/SectionResultat";
import SectionTestimonials from "../components/SectionTestimonials/SectionTestimonials";


export const metadata = {
    title: "LIADTECH - referencement-site-internet",
};

export default function Home() {
    const heroProps = {
        page: 'referencement',
        img: `/hero-pic-2.png`,
        pretitle: "Agence SEO",
        title: "Votre site web au",
        highlight: "sommet de Google",
        p: "Boostez votre visibilité sur le web avec une stratégie de référencement naturel sur mesure.",
        button: "Découvrir nos offres",
    };

    const argumentsProps = {
        page: 'referencement',
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
        page: 'referencement',
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

    const solutionsProps = {
        page: 'referencement',
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
    };

    const stepsProp = {
        page: 'referencement',
        pretitle: "Nos experts SEO vous accompagnent de A à Z",
        title: "Votre stratégie de visibilité en",
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

    const resultatProps = {
        page: 'referencement',
        pretitle: "Analyser les performances de sa stratégie SEO",
        title: "Transparence et",
        highlight: "résultat",
        p: "Parce que les résultats du SEO se font sur le moyen et long terme, nos référenceurs agissent en toute transparence sur votre site internet.",
        items: [
            {
                title: "Suivi des appels",
                description: "Observez en temps réel le retour sur investissement de votre stratégie SEO.",
            },
            {
                title: "Rapport en ligne",
                description: "Suivez en temps réel les performances de votre référencement naturel.",
            },
            {
                title: "Un chargé de projet SEO dédié",
                description: "Bénéficiez des conseils et du savoir-faire d’un expert SEO dédié à votre projet.",
            },
        ],
    };

    const testimonialsProps = {
        pretitle: "Ils ont propulsé leur activité",
        titleMiddle: true,
        title: "Des résultats significatifs pour leur ",
        highlight: "visibilité",
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


    return (
        <div>
            <Hero {...heroProps}/>
            <SectionArguments {...argumentsProps}/>
            <SectionCommunication {...communicationProps}/>
            <SectionSolutions {...solutionsProps}/>
            <SectionResultat {...resultatProps}/>
            <SectionSteps {...stepsProp}/>
            <SectionTestimonials {...testimonialsProps}/>
        </div>
    );
}