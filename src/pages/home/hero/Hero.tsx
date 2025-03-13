import HeroHeading from './HeroHeading';

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="bg-light-gray flex items-center gap-20 px-64 pt-24 pb-64"
    >
      <HeroHeading />
      <img
        src="src/assets/images/hero.jpeg"
        alt="Damp large jungle leaves"
        className="h-[45vw] flex-1/2 object-cover"
      />
    </section>
  );
}
