import TextInput from '../../../../components/input/TextInput';
import { checkBoxOptions, radioOptions } from './multipleOptions';
import MultipleOptionInput from '../../../../components/input/MultipleOptionInput';
import Button from '../../../../components/input/Button';

export default function ContactUsForm() {
  return (
    <form className="flex flex-2/3 flex-col gap-24 px-20 py-48">
      <div className="grid grid-cols-2 gap-20">
        <TextInput
          id="first-name"
          label="First Name"
          type="text"
          placeholder="John"
          required
        />
        <TextInput
          id="last-name"
          label="Last Name"
          type="text"
          placeholder="Doe"
          required
        />
      </div>
      <div className="grid grid-cols-2 gap-20">
        <TextInput
          id="email"
          label="Email"
          type="email"
          placeholder="example@gmail.com"
          required
        />
        <TextInput
          id="phone-number"
          label="Phone Number"
          type="tel"
          placeholder="00 000 00 00"
        />
      </div>
      <MultipleOptionInput
        type="radio"
        options={radioOptions}
        name="position"
      />
      <TextInput
        id="message"
        label="Message"
        type="textarea"
        placeholder="Text here..."
        required
      />
      <MultipleOptionInput
        type="checkbox"
        options={checkBoxOptions}
        name="terms"
      />
      <Button Content="Send Message" className="mt-12 self-end" />
    </form>
  );
}
