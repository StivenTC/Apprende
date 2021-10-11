import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';

export const Register = () => {
  let history = useHistory();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
    localStorage.setItem("userData", JSON.stringify(data));
    history.push("/");
  }
  console.log("Errores: ", errors);

  return (
    <div className="register">
      <h1>Regístrate</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Nombre" {...register("Nombre", { required: "Campo obligatorio", maxLength: 20 })} />
        <input type="number" placeholder="Edad" {...register("Edad", { required: "Campo obligatorio", maxLength: 20 })} />
        <input type="text" readOnly placeholder="Colegio" {...register("Colegio", { required: "Campo obligatorio", maxLength: 200 })} value="Unidad Pedagógica" />
        <input type="number" placeholder="Curso" {...register("Curso", { required: "Campo obligatorio", maxLength: 20 })} />
        <input type="submit" value="Siguiente" />
      </form>
    </div>
  );
}