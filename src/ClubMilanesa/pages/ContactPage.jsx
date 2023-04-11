import React from 'react'

export const ContactPage = () => {
  return (
    <div>
      <div></div>
      <div className='container-fluid d-flex justify-content-center contact m-5'>
      <form  action="#" target="" method="get" name="formDatosPersonales"
                    className='d-flex flex-column align-items-center mt-5 tittleEdit'>
                    <label for="nombre" class="p-2">Nombre</label>
                    <input type="text" name="nombre" id="nombre" minlength="3" maxlength="15"
                        required />

                    <label for="apellido" class="p-2">Apellido</label>
                    <input type="text" name="apellido" id="apellido"  minlength="3"
                        maxlength="20" required />

                    <label for="email" class="p-2">Email</label>
                    <input type="email" name="email" id="email" minlength="8" maxlength="50"
                        required />

                    <label for="asunto" class="p-2">Asunto</label>
                    <input type="text" name="asunto" id="asunto" minlength="5" maxlength="50"
                        required />

                    <label for="mensaje" class="p-2">Mensaje</label>
                    <textarea name="mensaje" for="mensaje"  minlength="10"
                        maxlength="300" required></textarea>

                    <input type="submit" name="enviar" value="Enviar" class="btn btn-outline-light btnCustom border border-2 p-2 mt-4" />
                </form>
                
      </div>
    </div>
  )
}
