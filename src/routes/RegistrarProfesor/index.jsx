import styled from "styled-components"
import { useState } from "react";
import { useOutletContext } from "react-router-dom"
import InformativeCard from "./InformativeCard";
import BotonAgregar from "./BotonAgregar";
import NewPersonForm from "./NewPersonForm";
//dependiendo del tipo de usuario se registrará ya sea a profesores o estudiantes, se debe traer el tipo de usuario de la base de datos

//nombre del profesor se debe traer de la base de datos, si ya esta registrado, y su estado tambien lo determina el admin


const RegistrarProfesor = () => {
  const {usuario} = useOutletContext();
  const [showProfesorFormulario, setMostrarFormulario] = useState(false);
  
    
  return(
  <Container>

      <h1 style={{fontSize: "3rem", marginBottom:"2rem"}}>
        Registrar profesor
      </h1>

      <h2 style={{marginBottom:"2rem"}}>Docentes actualmente registrados</h2>

      <InformativeCard style={{marginBottom:"2rem"}} usuario={usuario} />

      <BotonAgregar setMostrarFormulario={() => setMostrarFormulario(true)}/>
      
      {showProfesorFormulario && <NewPersonForm setMostrarFormulario={setMostrarFormulario}/>}
      
    </Container>

)}


export default RegistrarProfesor

const Container = styled.div`
    padding: 2.5rem;
    width: 85%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`

