import React, { useState } from "react";
import "../../css/login-register.css";
import menuApi from "../../api/menuApi";
import { useNavigate } from "react-router-dom";
export const RegisterPage = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmarPassword, setConfirmarPassword] = useState("")
    const [error, setError] = useState(false)
    const [msgError, setMsgError] = useState("")
    const navigate = useNavigate()
    const startRegister = async (name, email, password) => {
        try {
            const resp = await menuApi.post("/auth/new", {
                name,
                email,
                password,
            })



            navigate("/home")
        } catch ({response}) {
            console.log(response.data)
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        //validaciones
        if (!name || !email || !password || !confirmarPassword) {
            setError(true)
            setMsgError("Todos los campos son obligatorios");
            return;
        }
        console.log("Usuario creado");
        setError(false);

        startRegister(name, email, password)
    }


    return (
        <div className="registro">

            <form className="formulario " onSubmit={handleSubmit}>
                <h1>Registrate</h1>
                {error ? <h3>{msgError}</h3> : ""}
                <div className="input-contenedor">
                    <i class="fa-solid fa-user"></i>
                    <input
                        type="text"
                        id="name"
                        placeholder="Nombre Completo"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="input-contenedor">
                    <i class="fa-solid fa-envelope"></i>
                    <input
                        type="email"
                        id="email"
                        placeholder="Correo Electronico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                < div className="input-contenedor">
                    <i class="fa-sharp fa-solid fa-key"></i>
                    <input
                        type="password"
                        id="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="input-contenedor">
                        <i class="fa-sharp fa-solid fa-key"></i>
                        <input type="password"
                            id="confirmarPassword"
                            placeholder="Confirme su contraseña"
                            value={confirmarPassword}
                            onChange={(e) => setConfirmarPassword(e.target.value)} />
                    </div>
                </div>
                <label > <input type="checkbox" />Al continuar, aceptas las Condiciones de uso y el Aviso de privacidad.</label>
                <p>Si ya tienes una cuenta por favor inicia sesion aqui <a href="/Login" className="link">Iniciar sesion</a></p>

                <button type="submit" className="boton">Registrarme</button>
            </form>

        </div>
    );
}
