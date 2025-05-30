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
    title: "LIADTECH - Creation Site Internet",
};

export default function Home() {
    const heroProps = {
        img: `/hero-pic.png`,
        pretitle: "Agence de création de site internet",
        title: "Votre site web",
        highlight: "clé en main",
        title2: "100 % personnalisé",
        p: "Devenez visible avec un site internet professionnel conçu par des experts.",
        button: "Recevoir nos tarifs",
    };

    const argumentsProps = {
        page: 'creation',
        pretitle: "Création de site web optimisé",
        title: "Le site web qui vous rendra ",
        highlight: "fier",
        items: [
            {
                icon: SlScreenDesktop,
                title: "Un site professionnel",
                description: "Présentez votre activité avec un site 100 % personnalisé adapté à vos besoins.",
            },
            {
                icon: PiCertificateLight,
                title: "Une équipe d’experts",
                description: "Bénéficiez du savoir-faire de toute une équipe d'experts.",
            },
            {
                icon: HiOutlineAdjustmentsVertical,
                title: "Des offres flexibles",
                description: "Restez maître de votre budget avec nos offres flexibles et packagées.",
            },
        ],
        button: "Prendre rendez-vous",
    };

    return (
        <div>
            <Hero {...heroProps}/>
            <SectionArguments {...argumentsProps}/>
            <SectionCommunication />
            <SectionEquipe />
            <SectionSolutions />
            <SectionSteps />
            <SectionFAQ />
        </div>
    );
}