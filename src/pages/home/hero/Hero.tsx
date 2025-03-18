import HeroHeading from './HeroHeading';
import heroImage from '../../../assets/images/hero.jpeg';

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="bg-light-gray max-xs:px-16 flex items-center gap-20 px-64 pt-24 pb-64 max-sm:flex-col max-sm:px-32"
    >
      <HeroHeading />
      <img
        src={heroImage}
        alt="Damp large jungle leaves"
        className="h-[45vw] w-full flex-1/2 object-cover max-sm:max-h-[45vh]"
      />
    </section>
  );
}
