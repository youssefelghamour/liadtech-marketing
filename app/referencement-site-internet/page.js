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
        title1: "Comment rendre son site internet visible sur",
        highlight1: "Google",
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

    return (
        <div>
            <Hero {...heroProps}/>
            <SectionArguments {...argumentsProps}/>
            <SectionCommunication {...communicationProps}/>
            <SectionSolutions {...solutionsProps}/>
        </div>
    );
}