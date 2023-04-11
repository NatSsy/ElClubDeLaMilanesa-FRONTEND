import React, { useState } from "react";
import "../../css/login-register.css";

export const LoginPage = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState(false)
    const [msgError,setMsgError] = useState("")
    const handleSubmit = (e) =>{
        e.preventDefault();

        //validaciones
        if(!email || !password){
            setError(true)
            setMsgError("todos los campos son obligatorios");
            return;
        }
        console.log("usuario creado");
        setError(false);
    }


    return( 
        <div className="registro">
            
        <form className="formulario" onSubmit={handleSubmit}>
        <h1>¿Ya tienes una cuenta?</h1>
        {error ? <h3>{msgError}</h3> : ""}
            <div className="input-contenedor">
                <i class="fa-solid fa-envelope"></i>
                <input
                type="email"
                id="email"
                placeholder="Correo Electronico"
                value={email}
                onChange={(e) => setEmail (e.target.value)}
                />
            </div>
            <div className="input-contenedor">
                <i class="fa-sharp fa-solid fa-key"></i>
                <input
                type="password"
                id="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor=""></label>
            </div>
            <label > <input type="checkbox" />Al continuar, aceptas las Condiciones de uso y el Aviso de privacidad.</label>
            <p>Si todavia no tienes tu cuenta por favor registrate aqui <a href="/Register" className="link">Registrarme</a></p>
            <button type="submit" className="boton">Registrarme</button>
        </form>
        
    </div>
    )
}
