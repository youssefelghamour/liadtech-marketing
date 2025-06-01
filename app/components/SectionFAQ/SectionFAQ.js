"use client";
import React, { Component } from "react";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import FaqItem from "../FaqItem/FaqItem";




class FAQ extends Component {
    render() {
        return (
            // All pages besides the creation page have a 2 columns grid where the first col conatins the question + img & background pic
            <section className={`relative overflow-hidden bg-[var(--purple-light-3)] mt-20 py-8 mx-4 max-w-[90%] mx-auto px-15 rounded-[2.5rem] ${this.props.page !== 'creation' ? "grid lg:grid-cols-[1fr_1.5fr]" : ""}`}>
                {/* Adding the left column that contains the question + image on pages other than the creaiton page */}
                {this.props.page !== 'creation'
                    ? (
                        <>
                            {/* Absolute image moon background on the top left of the section */}
                            <div className="absolute top-0 left-0 bg-[url('/faq-bg.png')] bg-no-repeat bg-contain opacity-25 w-[600px] h-[600px] z-[-1]" />

                            <div className="flex flex-col lg:w-1/2 justify-between lg:pt-25 md:pt-5 w-full mx-auto px-0">
                                <p className="title font-black text-5xl xl:w-100 lg:-mt-15 lg:-ml-25">Vous avez une <span className="font-clash tracking-tighter leading-tight">question?</span></p>

                                {/* Arrow image that only shows on big screens */}
                                <img src="/faq-arrow.png" alt="faq arrow" className="absolute lg:block hidden left-70 top-80 opacity-40 filter grayscale contrast-200 w-[300px] h-[300px] z-[-1]" />

                                {/* We hide this image when the screen is less than medium so we can add this picture below the question at the bottom of the section */}
                                <img src="/liadtech-robot.png" alt="liadtech-robt" className="-mb-15 lg:block hidden"/>
                            </div>
                        </>
                    )
                    : null
                }
                
                {/* FAQ */}
                <div className={`container mx-auto py-8 rounded-[2.5rem] space-y-4 ${this.props.page === 'creation' ? "lg:max-w-[60%]" : "lg:max-w-[80%]"}`}>
                    {/* Only the creation page has this question on the top of the faq section */}
                    {this.props.page === 'creation' && (<p className="title text-center mb-10 font-black text-3xl italic">Une question ?</p>) }

                    {/* Individual Question/Answer */}
                    {this.props.faqs.map(({ question, answer }, i) => (
                        <FaqItem
                            key={i}
                            question={question}
                            answer={answer}
                        />
                    ))}
                </div>

                {/* This image is visible on pages other than creation when screens less than medium width on the bottom left of the section */}
                {this.props.page !== 'creation' && (<img src="/liadtech-robot.png" alt="liadtech-robt" className="-ml-20 -mb-15 lg:hidden md:block max-w-100 max-h-100"/>)}
            </section>
        );
    }
}


export default FAQ;