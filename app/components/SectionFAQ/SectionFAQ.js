"use client";
import React, { Component } from "react";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";




class FAQ extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openIndex: null,
        };
    }

    toggle = (index) => {
        // If it's already open, close it; otherwise, open the clicked one
        // Bfore clicking openIndex will be null, so we can toggle it
        this.setState(({ openIndex }) => ({
            openIndex: openIndex === index ? null : index,
        }));
    };

    render() {
        const { openIndex } = this.state;

        return (
            <section className="bg-[var(--purple-light-3)] mt-20 py-8 mx-4 max-w-[90%] mx-auto px-15 rounded-[2.5rem]">
                <div className="container mx-auto py-8 rounded-[2.5rem] space-y-4 lg:max-w-[60%]">
                    <p className="title text-center mb-10 font-black text-3xl italic">Une question ?</p>

                    {faqs.map(({ question, answer }, i) => (
                        <div
                            key={i}
                            className="py-6 px-7 rounded-xl cursor-pointer bg-[var(--purple-faq)] hover:bg-[var(--purple-faq-hov)] transition-colors duration-400"
                            onClick={() => this.toggle(i)}
                        >
                            <h2 className="text-md font-bold relative pr-12">
                                {question}
                                {openIndex === i ? (
                                    <FiMinus className="absolute top-0 right-0 w-5 h-5"/>
                                ) : (
                                    <FiPlus className="absolute top-0 right-0 w-5 h-5"/>
                                )}
                            </h2>

                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                        openIndex === i ? "max-h-96 opacity-100 mt-7" : "max-h-0 opacity-0 mt-0"
                                    }`}
                            >
                                <p>{answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        );
    }
}


const faqs = [
    {
        question: "Est-il possible de modifier mon site internet LIADTECH après sa réalisation ?",
        answer: (
            <>
                Nous comprenons que votre entreprise est en constante évolution. Chez LIADTECH, nous concevons votre site internet et effectuons des modifications de contenu de manière ponctuelle en fonction de vos besoins.
                <br />
                <br />
                Que vous ayez besoin de rafraîchir certaines pages de votre site, d'ajuster votre contenu, ou de changer une image, notre équipe d'éditeurs de site est à votre service pour effectuer ces modifications. Avec un design responsive, votre site s'adapte parfaitement aux ordinateurs, tablettes et mobiles.
                <br />
                <br />
                Nous souhaitons que votre site internet reste une vitrine pertinente et efficace, alignée avec l'évolution de votre entreprise.
            </>
        ),
    },
    {
        question: "Quel est le prix de la création d’un site web ?",
        answer: (
            <>
                Le coût de la conception d’un site web avec LIADTECH peut fluctuer en fonction de vos besoins spécifiques. En fonction de votre stratégie digitale, du nombre de pages de votre site, et de l'optimisation pour le référencement que vous souhaitez, le prix peut varier.
                <br />
                <br />
                Pour toute demande concernant nos tarifs, nous vous invitons à cliquer sur le bouton "recevoir nos tarifs" ou à prendre rendez-vous avec un de nos conseillers.
            </>
        ),
    },
    {
        question: "Pour la refonte de mon site internet, puis-je me tourner vers LIADTECH ?",
        answer: (
            <>
                Absolument ! Chez LIADTECH, nous sommes spécialisés dans la refonte de sites internet. Si votre site actuel ne répond plus à vos attentes ou ne reflète plus l'image de votre entreprise, notre équipe est là pour vous aider.
                <br />
                <br />
                Nous travaillerons avec vous pour moderniser le design, améliorer l'expérience utilisateur et optimiser le référencement de votre site. Notre objectif est de créer un site qui non seulement attire les visiteurs, mais les convertit également en clients.
            </>
        ),
    },
    {
        question: "Pourquoi faire appel à une agence de création de sites web comme LIADTECH ?",
        answer: (
            <>
                Faire appel à une agence de création de sites web comme LIADTECH vous permet de bénéficier de l'expertise d'une équipe spécialisée dans la conception et le développement de sites internet. Nous comprenons les dernières tendances du marché, les meilleures pratiques en matière de design et d'optimisation pour les moteurs de recherche.
            </>
        ),
    },
    {
        question: "Proposez-vous des designs personnalisés ou utilisez-vous des templates ?",
        answer: (
            <>
                Chez LIADTECH, nous croyons en l'importance de l'unicité de chaque entreprise. C'est pourquoi nous proposons des designs personnalisés adaptés à vos besoins spécifiques. Nous ne nous contentons pas d'utiliser des templates génériques, mais créons un design sur mesure qui reflète l'identité de votre marque et répond aux attentes de votre public cible.
            </>
        ),
    },
    {
        question: "Quels types de sites web pouvez-vous créer ?",
        answer: (
            <>
                Nous sommes capables de créer une variété de sites web adaptés à différents besoins. Que vous ayez besoin d'un site vitrine pour présenter votre entreprise, d'une boutique en ligne pour vendre vos produits, ou d'un blog pour partager vos idées, notre équipe est prête à relever le défi.
            </>
        ),
    },
    {
        question: "Combien de temps faut-il pour créer un site web avec LIADTECH ?",
        answer: (
            <>
                La durée de création d'un site web dépend de plusieurs facteurs, notamment la complexité du projet, le nombre de pages, et les fonctionnalités spécifiques que vous souhaitez intégrer. En général, nous nous efforçons de livrer un site web fonctionnel dans un délai raisonnable tout en maintenant la qualité.
            </>
        ),
    },
    {
        question: "Offrez-vous des services de référencement (SEO) pour améliorer la visibilité de mon site ?",
        answer: (
            <>
                Absolument ! Chez ALEO, nous proposons des services de référencement naturel (SEO) pour améliorer la visibilité de votre site web sur les moteurs de recherche comme Google. Notre objectif est de vous positionner en tête des résultats pour que votre site soit trouvé par ceux qui recherchent vos services ou produits. Une bonne optimisation SEO permet d’attirer plus de visiteurs qualifiés, augmentant ainsi vos chances de convertir ces visites en clients.
            </>
        ),
    },
    {
        question: "Proposez-vous des services d'hébergement web ?",
        answer: (
            <>
                Oui, nous proposons des services d'hébergement web pour garantir que votre site est accessible en ligne 24/7. Notre hébergement est sécurisé, rapide et fiable, ce qui permet à votre site de fonctionner sans interruption. Nous nous occupons également de la maintenance technique pour que vous puissiez vous concentrer sur votre activité.
            </>
        ),
    },
    {
        question: "Puis-je voir des exemples de sites web que vous avez créés ?",
        answer: (
            <>
                Bien sûr ! Nous avons un portfolio de sites web que nous avons créés pour nos clients. Vous pouvez consulter ces exemples pour avoir une idée de notre style et de la qualité de notre travail. Chaque projet est unique, et nous sommes fiers de montrer comment nous avons aidé nos clients à atteindre leurs objectifs en ligne.
            </>
        ),
    },
    {
        question: "Comment assurez-vous la sécurité des sites web que vous créez ?",
        answer: (
            <>
                La sécurité est une priorité pour nous. Nous mettons en place des mesures de sécurité robustes pour protéger votre site web contre les menaces potentielles. Cela inclut l'utilisation de certificats SSL pour sécuriser les données échangées, la mise à jour régulière des logiciels, et la surveillance continue pour détecter toute activité suspecte. Votre tranquillité d'esprit est essentielle, et nous faisons tout notre possible pour garantir la sécurité de votre site.
            </>
        ),
    },
    {
        question: "Quels sont les coûts récurrents après la création du site (maintenance, mises à jour, etc.) ?",
        answer: (
            <>
                Nous mettons un point d'honneur à rendre la gestion de votre site aussi simple que possible. Une fois votre site créé, vous n'avez pas à vous soucier de frais supplémentaires pour des mises à jour ou des modifications mineures. Nos offres incluent un forfait vous permettant de nous envoyer vos demandes de modifications sans surcoût. Cela vous permet de garder votre site à jour en toute sérénité.
            </>
        ),
    },
    {
        question: "Pouvez-vous intégrer des fonctionnalités spécifiques (paiement en ligne, réservation, forum, etc.) sur mon site ?",
        answer: (
            <>
                Oui, nous sommes en mesure d'intégrer une variété de fonctionnalités spécifiques selon vos besoins. Que vous souhaitiez ajouter un système de paiement en ligne pour une boutique e-commerce, un module de réservation pour des services, ou même un forum pour interagir avec vos clients, notre équipe technique est prête à développer ces solutions sur mesure pour vous.
            </>
        ),
    },
    {
        question: "Est-ce que mon site sera responsive et compatible avec tous les appareils (mobile, tablette, desktop) ?",
        answer: (
            <>
                Chez LIADTECH, nous nous assurons que tous les sites que nous créons soient entièrement responsive, c'est-à-dire qu'ils s’adaptent automatiquement à tous les types d'appareils (ordinateurs, tablettes et smartphones). Cela garantit une expérience utilisateur optimale, peu importe le dispositif utilisé par vos visiteurs. Un site responsive est essentiel pour garantir une navigation fluide et agréable à vos clients.
            </>
        ),
    },
    {
        question: "Offrez-vous des services de création de contenu (texte, images, vidéos) pour le site web ?",
        answer: (
            <>
                Oui, nous proposons des services de création de contenu pour enrichir votre site web. Que ce soit pour la rédaction de textes optimisés pour le SEO, la création d'images attrayantes ou la production de vidéos engageantes, notre équipe est là pour vous aider à créer un contenu de qualité qui attire et retient l'attention de vos visiteurs.
            </>
        ),
    },
];


export default FAQ;