import Subscribe from './subscribe/Subscribe';
import Links from './links/Links.tsx';
import Contacts from './contacts/Contacts.tsx';
import PaymentOptions from './PaymentOptions.tsx';

export default function Top() {
  return (
    <section className="flex justify-between px-64 py-24">
      <Subscribe />
      <Links />
      <div className="flex flex-col gap-40">
        <Contacts />
        <PaymentOptions />
      </div>
    </section>
  );
}
