import {styled} from "styled-components";
import { Link } from "react-router-dom";
import {Card, Formulario, Button} from '../../componentes'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {device} from "../../Breakpoints/breakpoints.js"
import TextField from '@mui/material/TextField';

// Main de Login
// Rol: Todos
// Logica: Toma los datos del usuario y los envia al back para su respectiva validacion, envia errores cuando no se procesa de forma correcta y redirige al home page cuando la validacion es correcta, tambien envia a la pagina de recuperar contraseña cuando no se recuerda.
// Pendiente: Sincronizar codigo con el de daniel para que el haga la validacion del login.

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [inputError, setInputError] = useState({ email: false, contrasena: false });

    const usuarios = [
        {
            name: "Diego Alejandro Gonzalez Parra",
            email:"dgonzal22098@universidadean.edu.co",
            password:"estudiante789",
            cedula:"1108122098",
            dob:"26-01-1999",
            rol:"Estudiante",
        },
        {
            name: "Antonio Lobato",
            email:"alobato19501@universidadean.edu.co",
            password:"admin123",
            cedula:"123456789",
            dob:"01/05/1990",
            rol:"Administrador",
        },
        {
            name: "Jorge Eliecer Gaitan",
            email:"jgaitan19925@universidadean.edu.co",
            password:"profe456",
            cedula:"987654321",
            dob:"12/12/1912",
            rol:"Profesor",
        },
    ]



    const handleLogin = (e) => {
        e.preventDefault();

        const usuario = usuarios.find((u) => u.email === email);

        if (!usuario) {
            setError("Correo inválido o no existente");
            setInputError({ email: true, password: false });
            return;
        }

        if (usuario.password !== password) {
            setError("Contraseña incorrecta");
            setInputError({ email: false, password: true });
            return;
        }

        // Login exitoso
        setError("");
        setInputError({ email: false, password: false });
        localStorage.setItem("usuarioLogueado", JSON.stringify(usuario));
        navigate("/main/home");
    };


    return (
        <Background>
            <Card title="Acceso a Portugueando">

                <Formulario onSubmit={handleLogin}>

                    <TextField 
                    id="outlined-basic" 
                    label="Correo institucional" 
                    variant="outlined" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={inputError.email}
                    helperText={inputError.email ? "Correo incorrecto o inexistente" : ""}
                    sx={{
                        width: "100%",
                        margin: "1rem 0",
                        "& .MuiOutlinedInput-root": {
                        borderRadius: "10px",
                        "& fieldset": {
                            borderColor: inputError.email ? "red" : "#d9d9d9",
                        },
                        "&:hover fieldset": {
                            borderColor: inputError.email ? "red" : "#888",
                        },
                        "&.Mui-focused fieldset": {
                            borderColor: inputError.email ? "red" : "#1976d2",
                        },
                        color: inputError.email ? "red" : "inherit",
                        },
                        "& .MuiInputLabel-root": {
                        color: inputError.email ? "red" : "inherit",
                        },
                    }}
                    />


                    <Grouped>

                        <LinkDecorated to="/recover">¿Olvidaste tu contraseña?</LinkDecorated>

                        <TextField
                        id="outlined-password-input"
                        label="Contraseña"
                        type="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        error={inputError.password}
                        helperText={inputError.password ? "Contraseña incorrecta" : ""}
                        sx={{
                            width: "100%",
                            margin: "1rem 0",
                            "& .MuiOutlinedInput-root": {
                            borderRadius: "10px",
                            "& fieldset": {
                                borderColor: inputError.password ? "red" : "#d9d9d9",
                            },
                            "&:hover fieldset": {
                                borderColor: inputError.password ? "red" : "#888",
                            },
                            "&.Mui-focused fieldset": {
                                borderColor: inputError.password ? "red" : "#1976d2",
                            },
                            color: inputError.password ? "red" : "inherit",
                            },
                            "& .MuiInputLabel-root": {
                            color: inputError.password ? "red" : "inherit",
                            },
                        }}
                        />


                        <Grouped style={{alignItems:"center"}}>
                            <Button type="submit" texto="Acceder"/>
                        </Grouped>

                    </Grouped>



                </Formulario>

            </Card>     
        </Background>   
    )
  
}

export default Login;


const Background = styled.div`
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
    background-color: black;
    background: radial-gradient(circle at center, rgba(255, 255, 255, 255) 20%, rgba(0, 0, 0, 1) 45%);
    display: flex;
    justify-content: center;
    align-items: center;
`
const Grouped = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
`
const LinkDecorated = styled(Link)`
    text-decoration: none;
    color: #3bac52;
    font-size: 0.9rem;
    
    &:hover {
      color: #0c47a1;
      text-decoration: underline;
    }
`