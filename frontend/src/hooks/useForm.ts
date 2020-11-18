import React, { useState } from 'react';

type InputChange = React.ChangeEvent<HTMLInputElement>;

export const useForm = (initialValues = {}) => {
  const [values, setValues] = useState<any>(initialValues);

  const changeValues = ({ target }: InputChange) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  const resetValues = () => {
    setValues(initialValues);
  };

  return [values, changeValues, resetValues] as const;
};
