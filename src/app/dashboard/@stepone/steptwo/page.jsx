"use client"
import React, { useContext } from 'react'
import useCustomForm from '../../../../hooks/useForm';
import * as yup from "yup";
import { useRouter } from "next/navigation";
import FormContext from '../../context';

const schema = yup
.object({
  email: yup.string().required(),
  country: yup.string().required(),
})
.required();


export default function StepTwo() {
  const { formValues, updateFormValues } = useContext(FormContext);
  const { register, handleSubmit, errors } = useCustomForm(schema, formValues);

  const router = useRouter();



  const onSubmit = (data) => {
    console.log(data);
    updateFormValues({...formValues, ...data});
    router.push('/dashboard/stepthree');
  };


  return (
    <div>StepTwo
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">Email</label> <br />
          <input {...register("email")} />
          <small>{errors.email?.message}</small>
        </div>

        <div>
        <label htmlFor="country">Country</label> <br />
          <input {...register("country")} />
          <small>{errors.country?.message}</small>
        </div>

        <input type="submit" />
      </form>
    </div>
  )
}
