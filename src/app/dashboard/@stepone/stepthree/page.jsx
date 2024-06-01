"use client"
import React, { useContext } from 'react'
import useCustomForm from '../../../../hooks/useForm';
import * as yup from "yup";
import { useRouter } from "next/navigation";
import FormContext from '../../context';

const schema = yup
.object({
  city: yup.string().required(),
  address: yup.string().required(),
})
.required();


export default function StepThree() {
  const { formValues, updateFormValues } = useContext(FormContext);
  const { register, handleSubmit, errors } = useCustomForm(schema, formValues);

  const router = useRouter();



  const onSubmit = (data) => {
    console.log(data);
    updateFormValues({...formValues, ...data});
    router.push('/dashboard/stepthree');
  };


  return (
    <div>StepThree
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="city">City</label> <br />
          <input {...register("city")} />
          <small>{errors.city?.message}</small>
        </div>

        <div>
        <label htmlFor="address">Address</label> <br />
          <input {...register("address")} />
          <small>{errors.address?.message}</small>
        </div>

        <input type="submit" />
      </form>
    </div>
  )
}
