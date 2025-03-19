import Form from './form/Form';
import Side from './side/Side';

export default function ContactUs() {
  return (
    <section className="bg-light-green max-xs:px-16 max-xs:pt-20 max-xs:pb-32 flex px-64 pt-80 pb-[12rem] max-sm:px-32 max-sm:pt-40 max-sm:pb-60">
      <div className="flex grow flex-wrap rounded-2xl bg-white">
        <Side />
        <Form />
      </div>
    </section>
  );
}
