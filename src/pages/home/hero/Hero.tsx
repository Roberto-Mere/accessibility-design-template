import HeroHeading from './HeroHeading';
import heroImage from '../../../assets/images/hero.jpeg';

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="bg-light-gray flex items-center gap-20 px-64 pt-24 pb-64"
    >
      <HeroHeading />
      <img
        src={heroImage}
        alt="Damp large jungle leaves"
        className="h-[45vw] flex-1/2 object-cover"
      />
    </section>
  );
}
