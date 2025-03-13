import AboutUsCard from './AboutUsCard';
import { cardsDetails } from './cardsDetails';

export default function AboutUs() {
  return (
    <section className="flex gap-16 p-64">
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
