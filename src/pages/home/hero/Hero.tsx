import HeroHeading from './HeroHeading';
import heroImage288 from '../../../assets/images/hero-288.webp';
import heroImage463 from '../../../assets/images/hero-463.webp';
import heroImage666 from '../../../assets/images/hero-666.webp';
import heroImage700 from '../../../assets/images/hero-700.webp';

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="bg-light-gray max-xs:px-16 flex items-center gap-20 px-64 pt-24 pb-64 max-sm:flex-col max-sm:px-32 max-sm:pb-32"
    >
      <HeroHeading />
      <img
        src={heroImage700}
        sizes="(max-width: 700px) 100vw, 700px"
        srcSet={`
          ${heroImage288} 288w,
          ${heroImage463} 463w,
          ${heroImage666} 666w,
          ${heroImage700} 700w`}
        alt="Damp large jungle leaves"
        className="h-[45vw] w-full flex-1/2 object-cover max-sm:max-h-[45vh]"
      />
    </section>
  );
}
