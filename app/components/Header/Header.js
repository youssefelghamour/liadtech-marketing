"use client";
import React, { Component } from 'react';
import { BsChevronDown } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { IoChatbubblesOutline } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa6";




class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isScrollingDown: false,  // Checks if we're scrolling down
            isAtTop: true,  // Checks if we're at the top
        };
        this.lastScrollTop = 0; // Tracks the previous scroll position
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        // Get the current vertical scroll position: distance from top (|| in case one doesn't work)
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        // Determine the scrolling direction:
        //   if the current scroll position (scrollTop) is greater than the previous one (lastScrollTop)
        //   Then we're crolling down: true, otherwise we're scrolling up: false
        const isScrollingDown = scrollTop > this.lastScrollTop;
        
        this.setState({
            isScrollingDown,
            isAtTop: scrollTop === 0,
        });

        // Update previous scroll pos for next scroll, & make sure it doesn't become negative
        this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };

    render() {
        const { isScrollingDown, isAtTop } = this.state;

        let headerClass = 'fixed w-full z-200 transition-transform duration-300 ';
        let textClass = isAtTop ? 'text-black' : 'text-white';
        let logoClass = isAtTop ? '' : 'text-white';
        let firstButtonClass = isAtTop ? 'text-[var(--purple)]' : 'text-white';
        let secondButtonClass = isAtTop ? 'text-white bg-[var(--purple)] border-[var(--purple)]' : 'text-[var(--purple)] bg-white border-white';

        headerClass += isAtTop ? 'bg-transparent ' : 'bg-[var(--purple)] ';
        headerClass += isScrollingDown ? '-translate-y-full' : 'translate-y-0';

        return (
            <header className={headerClass}>
                <div className="mx-auto py-6 xl:px-18 px-5">
                    <div className="flex justify-between items-center">
                        <a href="https://www.liadtech.com/" className={`${logoClass} font-black text-[var(--purple)] text-3xl`}>LIADTECH</a>
                        
                        <div className="hidden lg:flex space-x-8">
                            <div className={`group relative ${textClass} font-extrabold flex items-center gap-2 cursor-pointer h-12`}>
                                Solutions <BsChevronDown />
                                <SolutionsDropDown />
                            </div>
                            <div className={`${textClass} relative font-extrabold flex items-center gap-2 cursor-pointer`}>
                                Témoignages <BsChevronDown />
                            </div>
                            <div className={`${textClass} relative font-extrabold flex items-center gap-2 cursor-pointer`}>
                                À propos <BsChevronDown />
                            </div>
                            <div className={`${textClass} relative font-extrabold flex items-center gap-2 cursor-pointer`}>
                                FAQ <BsChevronDown />
                            </div>
                        </div>

                        <div className="flex items-center">
                            <div className="mr-4 lg:mr-0">
                                <button className={`flex items-center gap-3 py-3 px-4 hover:px-5 rounded-full font-extrabold leading-5 flex justify-center items-center text-sm lg:text-base transition-all duration-300 cursor-pointer bg-transparent w-max ${firstButtonClass}`}>
                                    <IoChatbubblesOutline size={20}/> Contact
                                </button>
                            </div>

                            <div className="hidden lg:flex">
                                <button className={` flex items-center gap-3 py-3 px-4 hover:px-5 rounded-full font-extrabold text-sm lg:text-base transition-all duration-300 cursor-pointer border-2 ${secondButtonClass}`}>
                                    Demander un devis <FaArrowRight />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}



function SolutionsDropDown() {
    return (
        <div className="absolute -left-8 top-10 mt-2 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-200 z-50 bg-white shadow-lg rounded-xl grid grid-cols-2 gap-x-2 w-[700px] p-8">
            <ul>
                <li>
                    <a href="/creation-site-internet" className="flex items-start space-x-5 p-2 leading-tight">
                        <img src="/header-pic-1.png" alt="Ordinateur" width="40" height="40" />
                        <div>
                            <p className="text-base text-black font-bold hover:text-[var(--purple)]">Site web</p>
                            <p className="text-sm font-light text-gray-500">Une vitrine digitalement incontournable.</p>
                        </div>
                        <FaChevronRight className="text-gray-300"/>
                    </a>
                </li>
                <li>
                    <a href="/referencement-site-internet" className="flex items-start space-x-2 p-2 leading-tight">
                        <img src="/hero-pic-3.png" alt="SEO" width="70" height="70" className='-ml-5' />
                        <div>
                            <p className="text-base text-black font-bold hover:text-[var(--purple)]">Référencement naturel</p>
                            <p className="text-sm font-light text-gray-500">Direction le top des résultats Google.</p>
                        </div>
                        <FaChevronRight className="text-gray-300"/>
                    </a>
                </li>
                <li>
                    <a href="/agence-seo-local" className="flex items-start space-x-2 p-2 leading-tight">
                        <img src="/hero-pic-5.png" alt="Fiche d'établissement Google" width="70" height="70" className='-ml-5' />
                        <div>
                            <p className="text-base text-black font-bold hover:text-[var(--purple)]">Fiche d'établissement Google</p>
                            <p className="text-sm font-light text-gray-500">Boostez votre visibilité locale.</p>
                        </div>
                        <FaChevronRight className="text-gray-300"/>
                    </a>
                </li>
            </ul>

            <ul>
                <li>
                    <a href="/agence-facebook-ads" className="flex items-start space-x-4 p-2 leading-tight">
                        <img src="/communication-pic-8.png" alt="Publicité Réseaux sociaux" width="56" height="56" />
                        <div>
                            <p className="text-black font-bold hover:text-[var(--purple)]">Publicité Réseaux Sociaux</p>
                            <p className="text-sm font-light text-gray-500">Un coup de boost pour votre notoriété.</p>
                        </div>
                        <FaChevronRight className="text-gray-300"/>
                    </a>
                </li>
                <li>
                    <a href="/agence-google-ads" className="flex items-start space-x-4 p-2 leading-tight">
                        <img src="/hero-pic-9.png" alt="Communiquez !" width="56" height="56" />
                        <div>
                            <p className="text-black font-bold hover:text-[var(--purple)]">Publicité sur Google</p>
                            <p className="text-sm font-light text-gray-500">À des années-lumière de la concurrence.</p>
                        </div>
                        <FaChevronRight className="text-gray-300"/>
                    </a>
                </li>
                <li>
                    <a href="/agence-graphisme" className="flex items-start space-x-4 p-2 leading-tight">
                        <img src="/header-pic-2.png" alt="Pack graphisme" width="56" height="56" />
                        <div>
                            <p className="text-black font-bold hover:text-[var(--purple)]">Logo et supports imprimés</p>
                            <p className="text-sm font-light text-gray-500">Créez un univers à votre image.</p>
                        </div>
                        <FaChevronRight className="text-gray-300"/>
                    </a>
                </li>
            </ul>
        </div>
    );
}


export default Header;