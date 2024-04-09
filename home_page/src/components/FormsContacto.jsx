import React from 'react';

const FormsContacto = () => {
  return (
    <div className="">
      <div className="">
        <img src='/' alt="" />
        <h3>Compartenos tu Experiencia</h3>
      </div>
      <form>
        <div className="">
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" />
        </div>
        <div className="">
          <label htmlFor="correo">Correo:</label>
          <input type="email" id="correo" name="correo" />
        </div>
        <div className="">
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea id="mensaje" name="mensaje" rows="4"></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default FormsContacto;
