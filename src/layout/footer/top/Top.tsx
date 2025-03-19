import Subscribe from './subscribe/Subscribe';
import Links from './links/Links.tsx';
import Contacts from './contacts/Contacts.tsx';
import PaymentOptions from './PaymentOptions.tsx';

export default function Top() {
  return (
    <section className="max-xs:px-16 max-xs:py-12 max-xs:flex-wrap flex justify-between gap-32 px-64 py-24 max-sm:px-32">
      <Subscribe />
      <Links />
      <div className="flex flex-col gap-40">
        <Contacts />
        <PaymentOptions />
      </div>
    </section>
  );
}
