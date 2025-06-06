"use client";
import React, { Component } from "react";
import { FiCalendar } from "react-icons/fi";


class Hero extends Component {
    render() {
        let imgClassName;
        let img2ClassName;

        /* agence-google-ads, referencement-site-internet, agence-seo-local, agence-graphisme have the same img className since they have 2 pictures 
            default imgClassName is for creation-site-internet    
        */
        switch (this.props.page) {
            case 'agence-facebook-ads':
                imgClassName = 'w-full transition-transform duration-500 lg:scale-100 md:scale-110 lg:-mt-60 md:-mt-30 sm:-mt-10 mt-15';
                break;

            case 'referencement-site-internet':
            case 'agence-seo-local':
                imgClassName = 'lg:absolute bottom-0 left-1/2 lg:-left-12 w-full md:w-auto lg:w-[32vw] z-[0]';
                img2ClassName = "lg:block hidden lg:absolute bottom-0 right-1/2 lg:-right-12 w-full md:w-auto lg:w-[32vw] z-[0]";
                break;

            case 'agence-graphisme':
                imgClassName = 'lg:absolute bottom-0 left-1/2 lg:-left-12 w-full md:w-auto lg:w-[32vw] z-[0]';
                img2ClassName = "lg:block hidden lg:absolute bottom-0 right-0 w-full md:w-auto lg:w-[50vw] z-[0]";
                break;
            
            case 'agence-google-ads':
                img2ClassName = "lg:block hidden lg:absolute bottom-0 right-1/2 lg:right-15 w-full md:w-auto lg:w-[22vw] z-[0]";  // smaller pic width
                imgClassName = 'lg:absolute bottom-0 left-1/2 lg:-left-12 w-full md:w-auto lg:w-[32vw] z-[0]';
                break;

            default:
                imgClassName = 'w-full mt-24 transition-transform duration-500 lg:scale-100 md:scale-110 scale-184 md:-translate-y-0 -translate-y-10';
        }

        return (
            <section className={`section-hero w-[98%] mx-auto bg-[var(--background)] pt-[170px] lg:pt-[220px] relative overflow-hidden rounded-b-2xl ${['referencement-site-internet', 'agence-seo-local', 'agence-google-ads', 'agence-graphisme'].includes(this.props.page) ? 'lg:pb-[289px]' : ''} `}>
                <div className="px-4 relative z-[1]">
                    <h1 className="text-[2vw] md:text-[1.6vw] lg:text-[1.15vw] 2xl:text-[0.9vw] lg:text-center uppercase text-[var(--purple)] z-[1] font-extrabold mb-4">
                        {this.props.pretitle}
                    </h1>

                    <h2 className={` text-[11vw] md:text-[9vw] lg:text-[60px] 2xl:text-[72px] leading-[110%] lg:leading-[120%] font-black lg:text-center max-w-[970px] mx-auto text-purple-brand max-w-[450px] lg:max-w-none ${this.props.page === 'agence-google-ads' ? 'lg:w-[1100px]' : ''} `}>
                        {this.props.title}
                        {['referencement-site-internet', 'agence-seo-local'].includes(this.props.page) && <br />}
                        <span className="font-extrabold text-[var(--purple)] bg-white font-clash tracking-tighter px-1 leading-tight"> {this.props.highlight} </span>&nbsp;
                        {this.props.page === 'agence-facebook-ads' ? null : (<br></br>)}
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

                {/* Not all pages have the second image */}
                {this.props.img2 && 
                    <picture className="w-full">
                        <img src={this.props.img2} alt="hero-pic" className={img2ClassName}></img>
                    </picture>
                }
                
            </section>
        );
    }
}

export default Hero;