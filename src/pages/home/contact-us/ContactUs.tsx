import ContactUsForm from './form/Form';
import Side from './side/Side';

export default function ContactUs() {
  return (
    <section className="bg-dark-green flex px-64 pt-80 pb-[12rem]">
      <div className="flex grow rounded-2xl bg-white">
        <Side />
        <ContactUsForm />
      </div>
    </section>
  );
}
