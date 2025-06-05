import TitleMiddle from "../Title/Title";


export default function SectionCommunication(props) {
  return (
    <section className="mt-36 px-5 sm:px-10 md:px-20">
        <TitleMiddle {...props} />

        <div className="grid lg:grid-cols-3 gap-10 mt-16">
            {props.items && props.items.map((item, index) => (
                <div key={index} className="p-12 bg-[var(--purple-light-2)] rounded-lg">
                    <img src={item.img} alt={`Communication pic ${index + 1}`} className="w-28 h-28 mb-4" />
                    <h4 className="font-black text-2xl xl:text-3xl leading-tight">{item.title}</h4>
                    <p className="font-medium mt-4">{item.description}</p>
                </div>
            ))}
        </div>
    </section>

  );
} 