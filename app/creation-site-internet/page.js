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

    const communicationProps = {
        page: 'creation',
        pretitle: "Votre agence de création de site web",
        title1: "Une communication\n par des",
        highlight1: "pros",
        title2: ", pour les",
        highlight2: "pros",
        items: [
            {
                img: '/communication-pic-1.png',
                title: "Présentez votre activité",
                description: "Exposez votre histoire et vos qualifications au grand public tout en mettant en avant votre savoir-faire.",
            },
            {
                img: '/communication-pic-2.png',
                title: "Valorisez vos prestations",
                description: "Soyez fiers de vos compétences et mettez en avant vos services, vos tarifs et vos zones d’intervention sur le web.",
            },
            {
                img: '/communication-pic-3.png',
                title: "Soyez joignable facilement",
                description: "Rendez visibles vos coordonnées, horaires et formulaire de contact pour faciliter les demandes.",
            },
        ],
    };

    return (
        <div>
            <Hero {...heroProps}/>
            <SectionArguments {...argumentsProps}/>
            <SectionCommunication {...communicationProps}/>
            <SectionEquipe />
            <SectionSolutions />
            <SectionSteps />
            <SectionFAQ />
        </div>
    );
}