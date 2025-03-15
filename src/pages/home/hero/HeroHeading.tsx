import Button from '../../../components/input/Button';

export default function HeroHeading() {
  return (
    <header className="flex-1/2">
      <h1
        id="hero-heading"
        className="text-dark-green mb-36 text-3xl font-bold"
      >
        Lorem ipsum dolor sit amet
      </h1>
      <h2 className="text-dark-green mb-12 text-xl font-medium">
        Lorem ipsum dolor sit amet
      </h2>
      <p className="mb-36 max-w-4/5 text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend
        tincidunt posuere eu risus cursus. Senectus sed maecenas viverra tempus
        at. Nulla aliquam ac diam amet, sagittis, ut ultricies. Urna hendrerit
        morbi sed gravida. Nulla aliquam ac diam amet, sagittis, ut ultricies.
        Urna hendrerit morbi sed gravida. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.
      </p>
      <Button Content={'Buy Now'} />
    </header>
  );
}
