"use client";
import React, { Component } from "react";


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
            <section className="rounded-[2.5rem] p-8 max-w-4xl mx-auto space-y-4 mt-20 bg-[var(--purple-light-3)]">
                <p className="title text-center mb-10 font-black text-3xl italic">Une question ?</p>

                {faqs.map(({ question, answer }, i) => (
                    <div
                        key={i}
                        className="p-4 rounded-xl cursor-pointer bg-[var(--purple-faq)] hover:bg-[var(--purple-faq-hov)] transition-colors duration-400"
                        onClick={() => this.toggle(i)}
                    >
                        <h2 className="text-lg font-semibold">{question}</h2>

                        <div
                            className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                    openIndex === i ? "max-h-96 opacity-100 mt-7" : "max-h-0 opacity-0 mt-0"
                                }`}
                        >
                            <p>{answer}</p>
                        </div>
                    </div>
                ))}
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
];


export default FAQ;