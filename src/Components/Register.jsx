import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Registro.css";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { Button } from "react-bootstrap";
import { BsFillPersonCheckFill } from "react-icons/bs";
import Axios from "axios";
import Swal from "sweetalert2";
// import { v4 as uuidv4 } from "uuid";

const register = () => {
  return (
    <Formik
      initialValues={{
        IDENTIFICACION_USUARIO: "",
        NOMBRE_USUARIO: "",
        P_APELLIDO_USUARIO: "",
        CORREO_USUARIO: "",
        CONTRASENA_USUARIO: "",
      }}
      onSubmit={(values) => {
        console.log(values);
        Axios.post(
          "https://API-COW.felipealvarez8.repl.co/api/usuario/agregar",
          {
            IDENTIFICACION_USUARIO: values.IDENTIFICACION_USUARIO,
            NOMBRE_USUARIO: values.NOMBRE_USUARIO,
            P_APELLIDO_USUARIO: values.P_APELLIDO_USUARIO,
            CORREO_USUARIO: values.CORREO_USUARIO,
            CONTRASENA_USUARIO: values.CONTRASENA_USUARIO,
          }
        )
          .then(function (res) {
            console.log(res);

            Swal.fire({
              title: "Usuario creado",
              text: "Se ha registrado correctamente",
              icon: "success",
              confirmButtonText: "Aceptar",
            }).then((res) => {
              if (res.isConfirmed === true) {
                window.location.reload(true);
              }
            });
          })
          .catch(function (error) {
            console.log(error);
            Swal.fire({
              title: "Error",
              text: "No se pudo registrar correctamente. Revise los campos",
              icon: "error",
              confirmButtonText: "Aceptar",
            });
          });
      }}
    >
      <div
        className="container-fluid d-flex align-items-center vh-100"
        id="contain"
      >
        {/* PARA ORGANIZAR: JUSTIFY = EJE X, ALING = EJE Y */}
        <Form
          className="ms-5 col-lg-4 col-md-10 col-sm-10 col-12 h-auto p-2"
          id="form"
        >
          <div className="text-center">
            <h1 className="text-center mt-4" id="Texto_registro">
              Registro
            </h1>
          </div>
          <hr className="w-75 m-auto mt-2" />
          {/* form email */}
          <div className="form-group mb-2 mt-4">
            <label id="form-label">Documento</label>
            <Field
              type="number"
              className="form-control"
              name="IDENTIFICACION_USUARIO"
              id="inputForm"
              aria-describedby="docHelp"
              placeholder="Ingrese su documento."
            />
          </div>
          <div className="form-group mb-2 mt-4">
            <label id="form-label">Nombre</label>
            <Field
              type="text"
              className="form-control"
              name="NOMBRE_USUARIO"
              id="inputForm"
              aria-describedby="nameHelp"
              placeholder="Ingrese su nombre."
            />
          </div>
          {/* form password */}
          <div className="form-group mb-2 mt-4">
            <label htmlFor="name" id="form-label">
              Apellido
            </label>
            <Field
              type="text"
              className="form-control"
              name="P_APELLIDO_USUARIO"
              id="inputForm"
              placeholder="Ingrese su apellido."
            />
          </div>
          <div className="form-group mb-2 mt-4">
            <label htmlFor="name" id="form-label">
              Correo
            </label>
            <Field
              type="email"
              className="form-control"
              name="CORREO_USUARIO"
              id="inputForm"
              placeholder="Ingrese su correo."
            />
          </div>
          <div className="form-group mb-2 mt-4">
            <label htmlFor="name" id="form-label">
              Contraseña
            </label>
            <Field
              type="password"
              className="form-control"
              name="CONTRASENA_USUARIO"
              id="inputForm"
              placeholder="Ingrese su contraseña."
            />
          </div>
          <div className="w-100 d-flex justify-content-center mt-4">
            <Button
              className="btn btn-success col-lg-8 col-12 d-flex justify-content-between"
              type="submit"
            >
              <div className="col-6">Crear cuenta</div>
              <div className="col-2">
                <BsFillPersonCheckFill></BsFillPersonCheckFill>
              </div>
            </Button>
          </div>
          <div className="w-100 mt-2 d-flex justify-content-center">
            <div className="d-block text-center">
              <p className="mb-0">
                ¿Ya estás registrado? {""}
                <Link className="" to="/login">
                  Inicia sesión
                </Link>
              </p>
            </div>
          </div>
        </Form>
      </div>
    </Formik>
  );
};

export default register;

/*import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Registro.css";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
//import { Button } from "react-bootstrap";
import Axios from "axios";
import Swal from "sweetalert2";
// import { v4 as uuidv4 } from "uuid";

import Icono from "../Imagenes/Icono.png";

const register = () => {
  return (
    <Formik
      initialValues={{
        IDENTIFICACION_USUARIO: "",
        NOMBRE_USUARIO: "",
        P_APELLIDO_USUARIO: "",
        CORREO_USUARIO: "",
        CONTRASENA_USUARIO: ""
      }}
      onSubmit={(values) => {
        console.log(values);
        Axios.post(
          "https://API-COW.felipealvarez8.repl.co/api/usuario/agregar",
          {
            IDENTIFICACION_USUARIO: values.IDENTIFICACION_USUARIO,
            NOMBRE_USUARIO: values.NOMBRE_USUARIO,
            P_APELLIDO_USUARIO: values.P_APELLIDO_USUARIO,
            CORREO_USUARIO: values.CORREO_USUARIO,
            CONTRASENA_USUARIO: values.CONTRASENA_USUARIO
          }
        )
          .then(function (res) {
            console.log(res);

            Swal.fire({
              title: "Usuario creado",
              text: "Se ha registrado correctamente",
              icon: "success",
              confirmButtonText: "Aceptar"
            }).then((res) => {
              if (res.isConfirmed === true) {
                window.location.reload(true);
              }
            });
          })
          .catch(function (error) {
            console.log(error);
            Swal.fire({
              title: "Error",
              text: "No se pudo registrar correctamente. Revise los campos",
              icon: "error",
              confirmButtonText: "Aceptar"
            });
          });
      }}
    >
      <div
        className="container-fluid d-flex align-items-center vh-100"
        id="contain"
      >
        {/* PARA ORGANIZAR: JUSTIFY = EJE X, ALING = EJE Y *//*}

        <h2 className="title-logo fw-bold py-5">
          Humanízate <img src={Icono} width="80" alt="" />
        </h2>

        <h2 className="title-registro text-center fw-bold py-5">Registro</h2>
        <Form
          className="ms-5 col-lg-4 col-md-10 col-sm-10 col-12 h-auto p-2"
          id="form"
        >
          <div className="mb-4 ">
            <label For="email" className="form-label">
              Documento
            </label>
            <input
              type="number"
              className="form-control"
              id="input-form"
              placeholder="Ingrese su documento"
              aria-describedby="docHelp"
              name="IDENTIFICACION_USUARIO"
            />
          </div>

          <div className="input_container">
            <div className="input_div mb-4 ">
              <label For="name" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Ingrese su nombre"
                name="NOMBRE_USUARIO"
                aria-describedby="nameHelp"
              />
            </div>

            <div className="input_div mb-4 ">
              <label For="lastname" className="form-label">
                Apellido
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Ingrese su apellido"
                name="P_APELLIDO_USUARIO"
              />
            </div>
          </div>

          <div className="mb-4 ">
            <label For="email" className="form-label">
              Correo electrónico
            </label>
            <input
              type="email"
              className="form-control"
              id="input-form"
              placeholder="Ingrese su correo electrónico"
              name="CORREO_USUARIO"
            />
          </div>
          <div className="mb-4 ">
            <label For="password" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Ingrese su contraseña"
              name="CONTRASENA_USUARIO"
            />
          </div>
          <div className="d-grid">
            <Link to="/Principal" type="submit" className="btn btn-primary">
              Registarse{""}
            </Link>
          </div>
          <div className="my-3">
            <span>
              Ya tengo cuenta{" "}
              <Link to="/Login" className="enlace">
                " Iniciar sesión
              </Link>
            </span>{" "}
          </div>
        </Form>
      </div>
    </Formik>
  );
};

export default register;*/

