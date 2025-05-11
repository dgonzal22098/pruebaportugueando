import styled from "styled-components"
import { useOutletContext } from "react-router-dom"

//aqui se debe conseguir varios datos del usuario, dependiendo del tipo de usuario (estudiante,profesor o admin)
//se deben implantar los datos dentro de la card y que sea un proceso automatico, los datos se traen desde la base de datos

const Profile = () => {
    const {usuario} = useOutletContext();

    return (
    <Container>
        <h1 style={{fontSize: "3rem", marginBottom:"2rem"}}>Perfil</h1>
        <h2 style={{marginBottom:"2rem"}}>Datos básicos: {usuario.rol}</h2>
        <InformativeCard>
            <DataModified>Nombre completo: {usuario.name}</DataModified>
            <DataModified>Programa: Negocios internacionales</DataModified>
            <DataModified>Fecha de nacimiento: {usuario.dob}</DataModified>
            <DataModified>Género: Femenino</DataModified>
            <DataModified>Cédula: {usuario.cedula}</DataModified>
            <DataModified>Correo institucional: {usuario.email}</DataModified>
        </InformativeCard>
    </Container>)
}

export default Profile

const Container = styled.div`
    padding: 2.5rem;
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`
const InformativeCard = styled.div`
    padding: 2rem;
    border: 0.5px #999999 solid;
    border-radius: 5px;
    background-color: white;
    width: 85%;
`
const DataModified = styled.p`
    margin-bottom: 1rem;
`

