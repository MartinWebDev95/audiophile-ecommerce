import { useState } from 'react';

const regexEmail = '^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$';
const regexPhone = '([0-9]){9}?';
const regexZipCode = '([0-9]){5}?';
const regexEMoneyPin = '([0-9]){4}?';

const initialState = {
  name: '',
  email: '',
  phone: '',
  address: '',
  zipCode: '',
  city: '',
  country: '',
  paymentMethod: 'e-money',
  eMoneyNumber: '',
  eMoneyPin: '',
};

function useForm() {
  const [formData, setFormData] = useState(initialState);

  const [formErrors, setFormErrors] = useState(initialState);

  const [inputFocus, setInputFocus] = useState({
    name: false,
    email: false,
    phone: false,
    address: false,
    zipCode: false,
    city: false,
    country: false,
    paymentMethod: false,
    eMoneyNumber: false,
    eMoneyPin: false,
  });

  const [paymentMethod, setPaymentMethod] = useState('e-money');

  const handleChangeInput = (e) => {
    if (e.target.name === 'paymentMethod') {
      setPaymentMethod(e.target.value);
    }

    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // When the input has the focus
  const handleFocusInput = (e) => {
    setInputFocus({ ...inputFocus, [e.target.name]: false });
  };

  // When the input loses the focus
  const handleBlurInput = (e) => {
    if (e.target.value === '') {
      setFormErrors({
        ...formErrors,
        [e.target.name]: 'Field cannot be empty',
      });
    } else if ((e.target.name === 'email') && (!e.target.value.match(regexEmail))) {
      setFormErrors({
        ...formErrors,
        [e.target.name]: 'This is not a correct email',
      });
    } else if ((e.target.name === 'phone') && (!e.target.value.match(regexPhone))) {
      setFormErrors({
        ...formErrors,
        [e.target.name]: 'This is not a correct phone',
      });
    } else if ((e.target.name === 'zipCode') && (!e.target.value.match(regexZipCode))) {
      setFormErrors({
        ...formErrors,
        [e.target.name]: 'This is not a correct ZIP Code',
      });
    } else if ((e.target.name === 'eMoneyNumber') && (!e.target.value.match(regexPhone))) {
      setFormErrors({
        ...formErrors,
        [e.target.name]: 'This is not a correct e-Money Number',
      });
    } else if ((e.target.name === 'eMoneyPin') && (!e.target.value.match(regexEMoneyPin))) {
      setFormErrors({
        ...formErrors,
        [e.target.name]: 'This is not a correct e-Money PIN',
      });
    } else {
      setFormErrors({
        ...formErrors,
        [e.target.name]: '',
      });
    }

    setInputFocus({
      ...inputFocus,
      [e.target.name]: true,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return {
    formData,
    setFormData,
    formErrors,
    inputFocus,
    paymentMethod,
    setPaymentMethod,
    handleChangeInput,
    handleFocusInput,
    handleBlurInput,
    handleSubmit,
  };
}

export default useForm;
