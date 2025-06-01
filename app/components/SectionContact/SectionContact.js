"use client";
const { Component } = require("react");
import ContactForm from "../ContactForm/ContactForm";


class SectionContact extends Component {
    render() {
        return (
            <section className="grid xl:grid-cols-[1fr_1.5fr] my-30 gap-0 w-[90%] mx-auto items-center justify-center">
                <img src="/contact-bg.png" alt="contact form picture" className="xl:ml-22 xl:-mt-90 md:-mb-10 md:mt-0 object-cover xl:h-120 xl:w-180 h-90 w-200 z-[-10]"/>
                <ContactForm />
            </section>
        )
    }
}

export default SectionContact;