import Details from './details/Details';
import Socials from './Socials';

export default function Side() {
  return (
    <section className="side-background flex flex-1/3 flex-col rounded-2xl p-48">
      <h2 className="mb-16 text-3xl font-bold">Contact Us</h2>
      <p className="mb-56 text-base max-md:mb-32">
        Fill up the form and ur Team will get back to you within 24 hours. Happy
        to see your message!
      </p>
      <Details />
      <Socials />
    </section>
  );
}
