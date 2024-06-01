'use client'
import React, { createContext, useState } from 'react';

// Create a context
const FormContext = createContext();

// Create a provider component
export const FormProvider = ({ children }) => {
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    city: '',
    address: '',
  });

  const updateFormValues = (newValues) => {
    setFormValues((prevValues) => ({ ...prevValues, ...newValues }));
  };

  return (
    <FormContext.Provider value={{ formValues, updateFormValues }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
