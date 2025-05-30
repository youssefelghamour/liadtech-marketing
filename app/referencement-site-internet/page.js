import Hero from "../components/Hero/Hero";
import SectionArguments from "../components/SectionArguments/SectionArguments";
import SectionCommunication from "../components/SectionCommunication/SectionCommunication";
import SectionEquipe from "../components/SectionEquipe/SectionEquipe";
import SectionSolutions from "../components/SectionSolutions/SectionSolutions";
import SectionSteps from "../components/SectionSteps/SectionSteps";
import SectionFAQ from "../components/SectionFAQ/SectionFAQ";

export const metadata = {
    title: "LIADTECH - referencement-site-internet",
};

export default function Home() {
    const heroProps = {
        img: `/hero-pic-2.png`,
        surtitle: "Agence SEO",
        title: "Votre site web au",
        highlight: "sommet de Google",
        p: "Boostez votre visibilité sur le web avec une stratégie de référencement naturel sur mesure.",
        button: "Découvrir nos offres",
    };

    return (
        <div>
            <Hero {...heroProps}/>
        </div>
    );
}