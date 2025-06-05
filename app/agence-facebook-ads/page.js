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
import Reviews from "../components/Reviews/Reviews";
import Avis from "../components/Avis/Avis";
import SectionAvis from "../components/SectionAvis/SectionAvis";


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
                description: "Atteignez vos objectifs avec une stratégie conçue sur-mesure pour votre entreprise et pilotée par un chargé de projet LIADTECH.",
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
        p: "Attirez plus de clients et boostez votre visibilité avec des publicités conçues et diffusées pour vous par les experts LIADTECH.",
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
        pretitle: 'Choisir LIADTECH pour ses annonces Facebook et Instagram',
        title: "Votre chargé de projet dédié à votre stratégie",
        p: "De la création de votre stratégie au suivi des statistiques, un chargé de projet prend en charge de A à Z vos campagnes.",
    };
    
    // prixProps: Solutions section includes the price section
    const solutionsProps = {
        page: 'ads',
        titleMiddle: true,
        pretitle: "Votre agence experte en social media",
        title: "Pour chaque objectif, une ",
        highlight: "solution ",
        title2: "LIADTECH",
        p: "Nous vous conseillons sur la meilleure stratégie à mettre en place pour atteindre vos objectifs.",
        prixProps: {
            price: 289,
            p: "Transformez la manière dont vous attirez des clients.",
        },
    }

    const faqProps = {
        page: "ads",
        faqs : [
            {
                question: "Comment est mise en place ma stratégie de communication Facebook et Instagram ?",
                answer: (
                    <>
                        Chez LIADTECH, nous établissons votre stratégie marketing sur les médias sociaux, en particulier Facebook et Instagram, en quatre étapes essentielles. Nous commençons par assurer l'accès à vos plateformes et concevoir votre page Facebook si nécessaire. Ensuite, un appel est programmé avec votre community manager dédié pour définir votre ligne éditoriale, en s'appuyant sur l'histoire et les enjeux de votre entreprise.
                        <br />
                        <br />
                        L'étape suivante consiste à lancer votre première campagne publicitaire selon un calendrier préétabli. Cette démarche garantit une communication efficace et constante sur vos réseaux sociaux. Enfin, nous réalisons et gérons vos publicités Facebook et Instagram, en utilisant notre expertise en Facebook Ads pour atteindre et engager votre audience cible.
                        <br />
                        <br />
                        En résumé, nous vous proposons une gestion de campagnes optimisée sur vos réseaux sociaux.
                    </>
                ),
            },
            {
                question: "Proposez-vous une stratégie de contenu personnalisée ?",
                answer: (
                    <>
                        Oui, nous concevons un calendrier éditorial adapté à votre action et vos objectifs publicitaires. Nous prenons en compte vos périodes de soldes, les informations que vous souhaitez mettre en avant et vos dates de fermeture pour vous créer un planning de publication personnalisé.
                    </>
                ),
            },
            {
                question: "Pourquoi choisir une agence Facebook Ads / Instagram Ads comme LIADTECH ?",
                answer: (
                    <>
                        Opter pour une agence Facebook Ads / Instagram telle qu'LIADTECH offre plusieurs avantages en termes de webmarketing et de gestion de vos réseaux publicitaires. Les publicitaires experts d'LIADTECH maîtrisent les outils spécifiques à ces plateformes, tels que le pixel Facebook, pour cibler efficacement vos prospects et maximiser le taux de conversion de vos campagnes publicitaires.
                        <br />
                        <br />
                        De plus, nous assurons la création et la publication régulière de contenus attrayants, animant ainsi votre communauté de manière cohérente. Notre approche collaborative vous implique dans la validation des contenus et visuels.
                        <br />
                        <br />
                        En bref, choisir LIADTECH, c'est bénéficier d'une expertise en publicité digitale tout en gardant le contrôle sur votre image de marque.
                    </>
                ),
            },
            {
                question: "Je n’ai pas de compte Facebook ou Instagram, puis-je faire appel à LIADTECH ?",
                answer: (
                    <>
                        Même sans compte Facebook ou Instagram, vous pouvez faire appel aux services d'LIADTECH. Notre agence s'occupe de créer votre page Facebook et de vous fournir les détails pour vous y connecter. Pour Instagram, nous demandons l'accès à votre compte une fois créé pour promouvoir les publications sponsorisées.
                        <br></br>
                        <br></br>
                        Que vous soyez novice ou expérimenté dans la gestion des réseaux sociaux, nous simplifions votre communication digitale et développons votre communauté et votre notoriété.
                    </>
                ),
            },
            {
                question: "Aidez-vous à cibler les publicités sur Facebook et Instagram ?",
                answer: (
                    <>
                        Oui, chez LIADTECH, nous comprenons l'importance du ciblage pour le succès de vos publicités sur Facebook et Instagram. Nous ne nous contentons pas de créer des publicités, nous développons une stratégie de ciblage adaptée à votre activité.
                        <br></br>
                        <br></br>
                        Nous travaillons à identifier et à comprendre votre public cible pour nous assurer que vos publicités atteignent les personnes les plus susceptibles d'être intéressées par vos produits ou services.
                        <br></br>
                        <br></br>
                        De cette façon, nous aidons à générer du trafic pertinent vers votre site internet. En créant des campagnes publicitaires impactantes et personnalisées, nous visons à augmenter le taux de clic et la conversion de vos annonces sponsorisées.
                        <br></br>
                        <br></br>
                        Que vous cherchiez à lancer une nouvelle campagne ou à optimiser une publicitaire existante, nous vous aiderons à atteindre vos objectifs.
                        <br></br>
                        <br></br>
                        Notre expertise en publicité sur les réseaux sociaux nous permet de créer des campagnes adaptées à vos besoins spécifiques.
                        <br></br>
                        <br></br>
                        Que ce soit pour augmenter la visibilité de votre marque, attirer de nouveaux clients ou stimuler les conversions, nous vous fournirons une stratégie de contenu personnalisée pour atteindre vos objectifs. De la réalisation d'une campagne jusqu'à l'analyse des résultats, nous veillons à utiliser vos ressources de manière optimale.
                    </>
                ),
            },
            {
                question: "Pourquoi faire de l'Instagram Ads ou du Facebook Ads ?",
                answer: (
                    <>
                        Faire de la publicité sur Meta Ads (Facebook Ads et Instagram Ads) est aujourd’hui incontournable pour les entreprises.
                        <br></br>
                        <br></br>
                        Facebook Ads et Instagram Ads permettent de toucher une large audience tout en offrant des options de ciblage extrêmement précises. Vous pourrez adresser vos publicités à des utilisateurs en fonction de critères comme leur âge, leur localisation ou leurs intérêts.
                        <br></br>
                        <br></br>
                        Que ce soit pour accroître la visibilité de votre marque, générer des ventes ou diriger du trafic vers votre site, Meta Ads vous permet de diffuser des publicités aux meilleurs endroits pour vous faire atteindre vos objectifs.
                        <br></br>
                        <br></br>
                        Pour tirer le meilleur parti de Facebook Ads et Instagram Ads, le mieux est de passer par une agence Meta Partner comme LIADTECH afin de maximiser votre retour sur investissement.
                    </>
                ),
            },
            {
                question: "Comment faire de l'Instagram Ads ou du Facebook Ads ?",
                answer: (
                    <>
                        Pour lancer une campagne de publicité Facebook Ads ou Instagram Ads, vous devez accéder au gestionnaire de publicités Meta et créer une publicité. Attention, le gestionnaire de publicités est un outil complexe qui nécessite des compétences techniques spécifiques pour être utilisé à son plein potentiel.
                        <br></br>
                        <br></br>
                        Pour gérer vos campagnes, il est préférable de passer par une agence META Partner telle que LIADTECH.
                    </>
                ),
            },
            {
                question: "Quel budget pour faire une campagne Facebook Ads ou Instagram Ads ?",
                answer: (
                    <>
                        Vous pouvez faire une campagne Facebook Ads ou Instagram Ads quel que soit votre budget. Cependant, vos résultats dépendront d’autres facteurs tels que vos cibles, vos concurrents et vos objectifs publicitaires.
                        <br></br>
                        <br></br>
                        Pour assurer la meilleure qualité possible pour vos campagnes de publicités sur Meta, il est conseillé de passer par une agence certifiée Meta Partner telle que LIADTECH, qui pourra vous proposer une stratégie complète et paramétrer vos campagnes pour obtenir le meilleur retour sur investissement possible.
                    </>
                ),
            },
            {
                question: "Peut-on faire de la publicité pour n’importe quelle activité ?",
                answer: (
                    <>
                        En théorie, la publicité est possible pour de nombreux secteurs, mais Facebook et Instagram ont des règles strictes, notamment pour les produits de santé, les services financiers, les produits pour adultes, l’immobilier, l’emploi, et la politique.
                        <br></br>
                        <br></br>
                        Pour savoir quelles typologies d’entreprises LIADTECH ne peut pas accompagner, nous vous invitons à consulter nos standards publicitaires.
                    </>
                ),
            },
        ],
    }

    const avisProps = {
        page: 'ads',
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
            <SectionArguments {...argumentsProps}/>
            <SectionCommunication {...communicationProps}/>
            <SectionResultat {...resultatProps2}/>
            <SectionSolutions {...solutionsProps}/>
            <SectionResultat {...resultatProps}/>
            <SectionAvis {...avisProps} />
            <SectionFAQ {...faqProps}/>
            <SectionContact />
        </div>
    );
}