"use client";
import { Component } from "react";
import Avis from "../Avis/Avis";
import Reviews from "../Reviews/Reviews";
import Title from "../Title/Title";
import { FcGoogle } from "react-icons/fc";



class SectionAvis extends Component {
    render() {
        return (
            <section className={`pt-28 justify-center items-center text-center pb-30 px-5 sm:px-10 md:px-20 bg-[var(--testimonials-bg-color)]
                            ${this.props.page === 'creation-site-internet' || this.props.page === 'agence-google-ads' ? '-mb-20 mt-15' : ''} 
                            ${this.props.page === 'agence-seo-local' ? 'pt-40 relative lg:pb-25 border border-[var(--testimonials-bg-color)] rounded-b-[60px] md:rounded-b-[80px] lg:rounded-b-[100px] -mb-20 z-[99]' : ''}
                        `}
            >
                <Title {...this.props} />
                <Avis {...this.props} />

                <div className="flex w-full justify-center gap-3 items-center mt-2 mb-20 font-bold text-md">
                    <span className="text-yellow-400 text-lg">★★★★★</span>
                    4.6/5 sur Google Avis
                    <FcGoogle size={30}/>
                </div>

                <Reviews {...this.props} />
            </section>
        );
    }
}

export default SectionAvis;