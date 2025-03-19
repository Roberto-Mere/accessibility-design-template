import Button from '../../../../components/input/Button';

export default function SubscribeInput() {
  return (
    <div className="flex flex-wrap items-end gap-32">
      <input
        id="subscribe"
        type="email"
        placeholder="example@gmail.com"
        className="placeholder:text-black-faded text-large grow border-b border-b-black pb-12"
      />
      <Button Content="Subscribe" />
    </div>
  );
}
