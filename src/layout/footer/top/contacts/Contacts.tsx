import { contactData } from './contactData';

export default function Contacts() {
  return (
    <div className="flex flex-col gap-8">
      <h3 className="text-large">Contacts</h3>
      <ul className="flex flex-col gap-8">
        {contactData.map((contact) => (
          <li key={contact.data}>
            <p
              className={`text-large text-black-faded ${contact.isUnderlined && 'underline'}`}
            >
              {contact.data}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
