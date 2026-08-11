import Image from "next/image";

type IconCard = {
  id: number;
  icon: string;
  title: string;
  lines: string[];
};

const cards: IconCard[] = [
  {
    id: 1,
    icon: "/images/icons/10.png",
    title: "Email Address",
    lines: ["info@webmail.com", "jobs@webexample.com"],
  },
  {
    id: 2,
    icon: "/images/icons/11.png",
    title: "Phone Number",
    lines: ["+0123-456789", "+987-6543210"],
  },
  {
    id: 3,
    icon: "/images/icons/12.png",
    title: "Office Address",
    lines: ["18/A, New Born Town Hall", "New York, US"],
  },
];

export default function ContactIcons() {
  return (
    <section>
      <div className="container pt-30 pb-5">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-30px">
          {cards.map((card) => (
            <div
              key={card.id}
              className="px-30px py-50px border-2 border-border-color-11 text-center flex flex-col items-center"
            >
              <div className="mb-35px">
                <Image src={card.icon} alt={card.title} width={80} height={80} />
              </div>
              <div>
                <h2 className="text-lg md:text-xl lg:text-22px xl:text-2xl text-heading-color font-bold mb-15px">
                  <span className="leading-1.3"> {card.title} </span>
                </h2>
                <p className="text-sm lg:text-base">
                  <span className="leading-1.8">
                    {card.lines.map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < card.lines.length - 1 && <br />}
                      </span>
                    ))}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}