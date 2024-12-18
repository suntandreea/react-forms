import {useState} from 'react';

export function useInput(defaultValue, validationFn) {
  const [value, setValue] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);

  const isValid = validationFn(value);

  function handleInputChange(evt) {
    setValue(evt.target.value);
    setDidEdit(false);
  }

  function handleInputBlur() {
    setDidEdit(true);
  }

  return {
    value,
    handleInputChange,
    handleInputBlur,
    hasError: didEdit && !isValid
  };
}
