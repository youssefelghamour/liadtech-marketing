"use client"
import React, { Component } from "react";
import "./Avis.css";


class Avis extends Component {
  render() {

    return (
        <div className="overflow-hidden w-full relative py-15">

            <div className="absolute top-0 left-0  h-full xl:w-100 lg:w-80 w-20 bg-gradient-to-r from-[#f4faff] to-transparent z-20"></div>
            <div className="absolute top-0 right-0 h-full xl:w-100 lg:w-80 w-20 bg-gradient-to-l from-[#f4faff] to-transparent z-20"></div>

            
            <div className="flex animate-scrollAvis">
                {[...this.props.avis, ...this.props.avis].map((item, i) => (
                    <div
                        key={i}
                        className="bg-white border-[1px] border-[var(--light-blue-border)] rounded-2xl p-8 flex flex-col-reverse justify-between gap-4 flex-shrink-0 w-[328px] mx-2 text-start"
                    >
                        <p className="font-bold text-sm text-purple-brand">{item.client}</p>

                        <div className="flex flex-col w-full gap-4">
                            {item.rating}
                            <p className="font-medium text-purple-brand">{item.review}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
  }
}

export default Avis;
