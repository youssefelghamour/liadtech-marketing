import Slide from "../Slide/Slide";
import Title from "../Title/Title";

export default function SectionTestimonials(props) {
    return (
        <section className="pt-25 mt-20 px-5 sm:px-10 md:px-20 mt-[-60px] lg:mt-[-120px] lg:pt-56 pb-36 bg-[var(--testimonials-bg-color)] z-[-1] relative">
            <Title {...props} />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-16 px-5 sm:-mx-5 md:-mx-10 lg:mx-0">
                {props.items && props.items.map((item, index) => ( <Slide {...item} key={index} /> ))}
            </div>
        </section>
    );
}