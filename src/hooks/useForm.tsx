"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";


export default function useCustomForm(schema, defaultValues) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    
  } = useForm({ resolver: yupResolver(schema),defaultValues });

  return {
    register,
    handleSubmit,
    defaultValues,
    errors,
  };
}
