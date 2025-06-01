"use client";
import React, { Component } from "react";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";




class FaqItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    toggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };

    render() {
        const { i, question, answer } = this.props;
        const { isOpen } = this.state;

        return (
            <div
                key={i}
                className="py-6 px-7 rounded-xl cursor-pointer bg-[var(--purple-faq)] hover:bg-[var(--purple-faq-hov)] transition-colors duration-400"
                onClick={this.toggle}
            >
                <h2 className="text-md font-bold relative pr-12">
                    {question}
                    
                    {isOpen ? (
                        <FiMinus className="absolute top-0 right-0 w-5 h-5" />
                    ) : (
                        <FiPlus className="absolute top-0 right-0 w-5 h-5" />
                    )}
                </h2>

                <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        isOpen ? "max-h-96 opacity-100 mt-7" : "max-h-0 opacity-0 mt-0"
                    }`}
                >
                    <p>{answer}</p>
                </div>
            </div>
        );
    }
}

export default FaqItem;