import styled from "styled-components"
import GrupoCard from "../CardNivel";
import { useNavigate,Outlet } from "react-router-dom"

const GruposCard = () => {
  const navigate = useNavigate();

  const toGroupsAssigned = (nivel) => {
    navigate("/pruebas/groups_assigned_docente", {state: {nivel}}); 
  }
  
  return (
  <Container>
    <Titulo>Grupos por nivel</Titulo>
    <CardContainer> 
      {titulos.map(
        (titulo, index) => (
          <GrupoCard key={index} value={titulo} onNavigate={toGroupsAssigned}/>
          
        ))}
    </CardContainer>
  </Container>)
}

export default GruposCard

const titulos = [
  "Portugués 1","Portugués 2","Portugués 3"
];
const Container = styled.div`
    padding: 2.5rem;
    width: 85%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`
const Titulo = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
`
const CardContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem;
`

