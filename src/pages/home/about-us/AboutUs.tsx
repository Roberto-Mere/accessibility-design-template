import AboutUsCard from './AboutUsCard';
import { cardsDetails } from './cardsDetails';

export default function AboutUs() {
  return (
    <section className="max-xs:p-16 flex gap-16 p-64 max-md:flex-wrap max-sm:p-32">
      {cardsDetails.map((card) => (
        <AboutUsCard
          key={card.title}
          title={card.title}
          description={card.description}
          image={card.image}
          imageAlt={card.title}
        />
      ))}
    </section>
  );
}
