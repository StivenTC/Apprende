import React from 'react';
import { useForm } from 'react-hook-form';

export const Register = ({ saveUser }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
    saveUser(data)
  }
  console.log("Errores: ", errors);

  return (
    <div className="register">
      <h1>Regístrate</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Nombre" {...register("Nombre", { required: "Campo obligatorio", maxLength: 20 })} />
        <input type="number" placeholder="Edad" {...register("Edad", { required: "Campo obligatorio", maxLength: 2 })} />
        <input type="text" placeholder="Colegio" {...register("Colegio", { required: "Campo obligatorio", maxLength: 20 })} />
        <input type="number" placeholder="Curso" {...register("Curso", { required: "Campo obligatorio", maxLength: 2 })} />

        <input type="submit" value="Continuar" />
      </form>
    </div>
  );
}