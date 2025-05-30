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

    return (
        <div>
            <Hero {...heroProps}/>
            <SectionArguments {...argumentsProps}/>
        </div>
    );
}