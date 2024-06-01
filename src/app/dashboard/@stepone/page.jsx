"use client";
import React, { useContext } from "react";
import useCustomForm from "../../../hooks/useForm";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import FormContext from "../context";

const schema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
  })
  .required();

export default function StepOne() {
  const { formValues, updateFormValues } = useContext(FormContext);
  const { register, handleSubmit, errors } = useCustomForm(schema, formValues);
  const router = useRouter();

  const onSubmit = (data) => {
    console.log(data);
    updateFormValues({ ...formValues, ...data });
    router.push("/dashboard/steptwo");
  };

  return (
    <div>
      StepOne
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="country">First Name</label> <br />
          <input {...register("firstName")} />
          <small>{errors.firstName?.message}</small>
        </div>

        <div>
          <label htmlFor="country">Last Name</label> <br />
          <input {...register("lastName")} />
          <small>{errors.lastName?.message}</small>
        </div>

        <input type="submit" />
      </form>
    </div>
  );
}
