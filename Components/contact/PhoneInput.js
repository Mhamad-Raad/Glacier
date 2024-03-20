'use client';

import { useState } from 'react';

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

function Input() {
  const [phone, setPhone] = useState('');
  return (
    <PhoneInput
      country={'us'}
      value={phone}
      onChange={(phone) => setPhone(phone.toString())}
      containerClass="mt-[12px]"
    />
  );
}

export default Input;
