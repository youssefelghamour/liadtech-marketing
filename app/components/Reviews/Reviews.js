"use client";
import React, { Component } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";




class Card extends Component {
    /* Takes in the element from the list and its position (string) : prev, next or the active (main) element*/

    render() {
        const { element, position } = this.props;

        let style = {};

        // Control the styling of main vs side elements (have lower opacity, z index and smaller)
        if (position === "side-prev" || position === "side-next") {
            style = { transform: "scale(0.95)", opacity: 0.2, zIndex: 5 };
        } else {
            style = { transform: "scale(1)", opacity: 1, zIndex: 10 };
        }

        return (
            <div
                className="flex flex-col lg:flex-row w-[1000px] h-auto lg:h-[650px] rounded-lg overflow-hidden bg-[var(--light-blue)] mx-auto"
                style={style}
                key={element.name}
            >
                <div className="w-full lg:w-1/3 h-120 lg:h-auto overflow-hidden">
                    <img src={element.img} alt={element.name} className="object-cover w-full h-full" />
                </div>

                <div className="px-15 w-full lg:w-2/3 p-6 flex flex-col self-center">
                    <p className="italic font-bold text-[24px] xl:text-[32px] 2xl:text-[40px] leading-[120%] text-[var(--purple)] text-left">
                        “{element.quote}”
                    </p>

                    <div className="mt-10 flex flex-wrap gap-y-6 justify-between items-center">
                        <p className="text-xs font-extrabold leading-[150%] tracking-[0.12em] uppercase text-purple-brand">{element.name}</p>
                        
                        <a href={element.link} className="py-3 px-4 hover:px-5 rounded-full font-extrabold flex justify-center items-center text-sm lg:text-base transition-all duration-300 cursor-pointer text-white bg-[var(--purple)] border-2 border-[var(--purple)] w-max">
                            Voir l’étude de cas &nbsp; <FaArrowRight />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}






class Reviews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0
        };
    }


    prevSlide = () => {
        // Onclick on left arrow, update the current element with the previous one
        const { current } = this.state;
        // If we're on the first element, circle back to the end
        const newIndex = current === 0 ? this.props.reviews.length - 1 : current - 1;
        this.setState({ current: newIndex });
    };

    nextSlide = () => {
        // Onclick on right arrow, update the current element with the next one
        const { current } = this.state;
        // If we're on the last element, circle back to the beginning
        const newIndex = current === this.props.reviews.length - 1 ? 0 : current + 1;
        this.setState({ current: newIndex });
    };

    render() {
        const { current } = this.state;
        let prev, next;

        // Circle around the list
        // If the current is the first element in the list then the previous is the last element
        if (current === 0) {
            prev = this.props.reviews.length - 1;
        } else {
            prev = current - 1;
        }

        // If the current is the last element in the list then the next is the first element
        if (current === this.props.reviews.length - 1) {
            next = 0;
        } else {
            next = current + 1;
        }

        return (
            // -mx-5 sm:-mx-10 md:-mx-20: margins were added to counter the parent’s padding px-5 sm:px-10 md:px-20 to remove space from the sides
            <section className="relative overflow-x-hidden py-10 px-5 -mx-5 sm:-mx-10 md:-mx-20">
                <div className="relative flex justify-center items-center gap-6 lg:w-[3000px] left-1/2 -translate-x-1/2">
                    {/* Side cards shown only on large screens */}
                    <div className="hidden lg:block">
                        <Card element={this.props.reviews[prev]} position="side-prev" />
                    </div>

                    <Card element={this.props.reviews[current]} position="active" />

                    <div className="hidden lg:block">
                        <Card element={this.props.reviews[next]} position="side-next" />
                    </div>
                </div>

                <div className="flex justify-center gap-6 mt-8">
                    <button onClick={this.prevSlide} className="xl:absolute xl:top-1/2 xl:left-20 text-xl lg:p-8 p-5 hover:bg-black cursor-pointer bg-[var(--second-purple)] text-[var(--light-blue)] rounded-full">
                        <FaArrowLeft />
                    </button>
                    <button onClick={this.nextSlide} className="xl:absolute xl:top-1/2 xl:right-20 text-xl lg:p-8 p-5 hover:bg-black cursor-pointer bg-[var(--second-purple)] text-[var(--light-blue)] rounded-full">
                        <FaArrowRight />
                    </button>
                </div>
            </section>
        );
    }
}

export default Reviews;