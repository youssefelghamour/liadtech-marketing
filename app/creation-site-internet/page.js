import Hero from "../components/Hero/Hero";
import SectionArguments from "../components/SectionArguments/SectionArguments";
import SectionCommunication from "../components/SectionCommunication/SectionCommunication";
import SectionEquipe from "../components/SectionEquipe/SectionEquipe";
import SectionSolutions from "../components/SectionSolutions/SectionSolutions";
import SectionSteps from "../components/SectionSteps/SectionSteps";

export const metadata = {
    title: "LIADTECH - Creation Site Internet",
};

export default function Home() {
    return (
        <div>
            <Hero />
            <SectionArguments />
            <SectionCommunication />
            <SectionEquipe />
            <SectionSolutions />
            <SectionSteps />
        </div>
    );
}