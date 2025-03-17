import Visa from '../../../assets/svg/visa.svg?react';
import Mastercard from '../../../assets/svg/mastercard.svg?react';

export default function PaymentOptions() {
  return (
    <div className="flex items-center gap-36">
      <Visa />
      <Mastercard />
    </div>
  );
}
