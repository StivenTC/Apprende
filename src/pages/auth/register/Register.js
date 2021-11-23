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
        <label>
          <span>Nombres y apellidos:
            {errors.Nombre && <span className="form-error">{errors.Nombre.message}</span>}
          </span>
          <input type="text" placeholder="Nombre" {...register("Nombre", { required: "Campo obligatorio", maxLength: { value: 36, message: 'Nombre demasiado largo' } })} />
        </label>
        <label>
          <span>Edad:
            {errors.Edad && <span className="form-error">{errors.Edad.message}</span>}
          </span>
          <input type="number" placeholder="Edad" {...register("Edad", { required: "Campo obligatorio", maxLength: { value: 2, message: 'Edad demasiado alto' } })} />
        </label>
        <label>
          <span>Colegio:
            {errors.Colegio && <span className="form-error">{errors.Colegio.message}</span>}
          </span>
          <input type="text" readOnly placeholder="Colegio" {...register("Colegio", { required: "Campo obligatorio", maxLength: 200 })} value="Colegio Argelia" />
        </label>
        <label>
          <span>Curso:
            {errors.Curso && <span className="form-error">{errors.Curso.message}</span>}
          </span>
          <input type="number" placeholder="Curso" {...register("Curso", { required: "Campo obligatorio", maxLength: { value: 2, message: 'Curso no válido' } })} />
        </label>
        <input type="submit" value="Siguiente" />
      </form>
    </div>
  );
}