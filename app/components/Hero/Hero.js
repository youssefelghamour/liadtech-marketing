"use client";
import React, { Component } from "react";
import { FiCalendar } from "react-icons/fi";


class Hero extends Component {
    render() {
        let imgClassName = this.props.page === 'ads'
            ? 'w-full transition-transform duration-500 lg:scale-100 md:scale-110 lg:-mt-60 md:-mt-30 sm:-mt-10 mt-15'
            : (this.props.page === 'referencement'
                ? "lg:absolute bottom-0 left-1/2 lg:-left-12 w-full md:w-auto lg:w-[32vw] z-[0]"
                : "w-full mt-24 transition-transform duration-500 lg:scale-100 md:scale-110 scale-184 md:-translate-y-0 -translate-y-10");

        return (
            <section className={`section-hero w-[98%] mx-auto bg-[var(--background)] pt-[170px] lg:pt-[220px] relative overflow-hidden rounded-b-2xl ${this.props.page === 'referencement' ? 'lg:pb-[289px]' : ''}`}>
                <div className="px-4 relative z-[1]">
                    <h1 className="text-[2vw] md:text-[1.6vw] lg:text-[1.15vw] 2xl:text-[0.9vw] lg:text-center uppercase text-[var(--purple)] z-[1] font-extrabold mb-4">
                        {this.props.pretitle}
                    </h1>

                    <h2 className="text-[11vw] md:text-[9vw] lg:text-[60px] 2xl:text-[72px] leading-[110%] lg:leading-[120%] font-black lg:text-center max-w-[970px] mx-auto text-purple-brand max-w-[450px] lg:max-w-none">
                        {this.props.title}
                        {this.props.highlight === "sommet de Google" && <br />}
                        <span className="font-extrabold text-[var(--purple)] bg-white font-clash tracking-tighter px-1 leading-tight"> {this.props.highlight} </span>&nbsp;
                        {this.props.page === 'ads' ? null : (<br></br>)}
                        {this.props.title2}
                    </h2>

                    <p className="font-medium text-lg lg:text-center">
                        {this.props.p}
                    </p>
                </div>

                <div className="mt-10 px-4 relative z-[1]">
                    <div className="container flex lg:justify-center gap-2">
                        <button className="py-3 px-4 hover:px-5 rounded-full font-extrabold text-sm lg:text-base transition-all duration-300 cursor-pointer text-white bg-[var(--purple)] border-2 border-[var(--purple)]">
                            {this.props.button}
                        </button>
                        
                        <button className="hidden md:flex items-center py-3 px-4 hover:px-5 rounded-full font-extrabold text-sm lg:text-base transition-all duration-300 cursor-pointer text-[var(--purple)] bg-transparent border-2 border-[var(--purple)]">
                            <FiCalendar size={22}/> &nbsp; Prendre rendez-vous
                        </button>
                    </div>
                </div>

                <picture className="w-full">
                    <img src={this.props.img} alt="hero-pic" className={imgClassName}></img>
                </picture>

                {/* Only the referencement page has the second image */}
                {this.props.img2 && 
                    <picture className="w-full">
                        <img src={this.props.img2} alt="hero-pic" className="lg:block hidden lg:absolute bottom-0 right-1/2 lg:-right-12 w-full md:w-auto lg:w-[32vw] z-[0]"></img>
                    </picture>
                }
                
            </section>
        );
    }
}

export default Hero;