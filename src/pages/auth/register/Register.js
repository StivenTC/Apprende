import React from 'react';
import { useForm } from 'react-hook-form';

export const Register = ({ saveUser, goView }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
    saveUser(data)
    goView(0)
  }
  console.log("Errores: ", errors);

  return (
    <div className="register">
      <h1>Regístrate</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Nombre" {...register("Nombre", { required: "Campo obligatorio", maxLength: 20 })} />
        <input type="number" placeholder="Edad" {...register("Edad", { required: "Campo obligatorio", maxLength: 20 })} />
        <input type="text" readonly placeholder="Colegio" {...register("Colegio", { required: "Campo obligatorio", maxLength: 200 })} value="Unidad Pedagógica" />
        <input type="number" placeholder="Curso" {...register("Curso", { required: "Campo obligatorio", maxLength: 20 })} />
        <input type="submit" value="Continuar" />
      </form>
    </div>
  );
}