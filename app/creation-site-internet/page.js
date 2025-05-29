import Head from "next/head";
import Hero from "../components/Hero/Hero";
import SectionArguments from "../components/SectionArguments/SectionArguments";

export default function Home() {
    return (
        <>
            <Head>
                <title>LIADTECH - Creation Site Internet</title>
            </Head>
            <div>
                <Hero />
                <SectionArguments />
            </div>
        </>
    );
}