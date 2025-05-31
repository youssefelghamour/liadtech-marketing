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
        titleMiddle: true,
        pretitle: "Votre agence de création de site web",
        title: "Une communication par des",
        highlight: "pros",
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

    const equipeProps = {
        pretitle: "Votre agence de création de site web",
        title: "Toute une équipe ",
        highlight: "dédiée ",
        title2: "à votre projet.",
        p: "Nous avançons avec vous pour accroître la visibilité de votre entreprise sur Google.",
    };

    const solutionsProps = {
        page: 'referencement',
        titleMiddle: true,
        pretitle: "Conception de site web adapté à votre activité",
        title: "Pour chaque objectif, une solution",
        highlight: "LIADTECH",
        p: "Quels que soient vos besoins, nous concevons le site internet qu’il vous faut.",
        items: [
            {
                title: "Création graphique et rédaction des contenus",
                description: "Votre site web à la hauteur de vos ambitions.",
            },
            {
                title: "Version mobile et tablette",
                description: "Accessible partout et à toute heure.",
            },
            {
                title: "Réservation de votre nom de domaine",
                description: "Imposez votre identité avec un www qui fait rêver.",
            },
            {
                title: "Hébergement, maintenance et sécurisation sur nos serveurs",
                description: "La facilité et la sécurité en un tour de main.",
            },
        ],
    };

    const stepsProp = {
        page: 'creation',
        pretitle: "La création d'un site web chez Liadtech",
        title: "Votre site web en ",
        highlight: "5 étapes",
        steps: {
            right: [
            {
                step: 1,
                title: "Étude de votre activité",
                description:
                "D’abord bien connaître votre entreprise et vos objectifs pour vous proposer les offres les plus pertinentes et atteindre la réalisation de votre projet à vitesse grand V.",
                image: "/step-1.jpg",
            },
            {
                step: 3,
                title: "Hébergement",
                description:
                "Hébergement (stockage des données) et sécurisation de votre site web sur nos serveurs.",
                image: "/step-3.jpg",
            },
            {
                step: 5,
                title: "Suivi et accompagnement",
                description:
                "Maintenance et modifications ponctuelles de vos contenus, pour un site dynamique et toujours à jour.",
                image: "/step-5.jpg",
            },
            ],
            left: [
            {
                step: 2,
                title: "Création de votre site web",
                description:
                "Conception d’une maquette de site internet à l’image de votre activité par nos experts webdesigners.",
                image: "/step-2.jpg",
            },
            {
                step: 4,
                title: "Mise en ligne",
                description: "Diffusion de votre site web sur la toile. 3, 2, 1 … Décollage !",
                image: "/step-4.jpg",
            },
            ],
        },
    };


    return (
        <div>
            <Hero {...heroProps}/>
            <SectionArguments {...argumentsProps}/>
            <SectionCommunication {...communicationProps}/>
            <SectionEquipe {...equipeProps}/>
            <SectionSolutions {...solutionsProps}/>
            <SectionSteps {...stepsProp}/>
            <SectionFAQ />
        </div>
    );
}