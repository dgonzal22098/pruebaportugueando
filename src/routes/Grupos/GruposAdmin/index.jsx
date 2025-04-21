import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import { FaHistory } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { useState } from "react";
import ListadoEstudiantes from "../Estudiantes";
import Inhabilitar from "../Inhabilitar";

// falta la logica de que despues de agregar un grupo se muestre automaticamente dentro de la seccion de cursos y grupos en su respectivo nivel, asi de como mostrar en los historicos, aunque tendriamos que determinar si alguna fecha es la que categoriza a los grupos historicos, o todos incluyendo los actuales

const Grupos = () => {
  const navigate = useNavigate();
  const [showEstudiantes, setShowEstudiantes] = useState(false);
  const [showInhabilitar, setShowInhabilitar] = useState(false);

  const iraCrearGrupos = () => {
    navigate("/pruebas/group_creation");
  }

  const regresarOption = () => {
    navigate("/pruebas/cursos");
  }

  const iraHistorial = () => {
    navigate("/pruebas/grupos_historicos");
  }

  return (
  <Container>
    <Titulo>
      Grupos
      <Buttons className="regresar" onClick={regresarOption}>Regresar</Buttons>
    </Titulo>

    <GroupContainer>
      <h3>Grupo 1</h3>
      <p>Docente: Juan Manuel Santos</p>
      <p>Cantidad de estudiantes: 25</p>
      <p>Fecha de creación: 27-1-2024</p>
      <p>Horario: 4 - 6 pm</p>
      <ButtonGroup>
        <Buttons className="estudiantes" onClick={() => setShowEstudiantes(true)}>Ver estudiantes</Buttons>
        <Buttons className="inactivar" onClick={() => setShowInhabilitar(true)}>Inhabilitar</Buttons>
      </ButtonGroup>
    </GroupContainer>
    <GroupContainer>
      <h3>Grupo 2</h3>
      <p>Docente: Jeison Castaño</p>
      <p>Cantidad de estudiantes: 30</p>
      <p>Fecha de creación: 27-1-2024</p>
      <p>Horario: 6 - 8 pm</p>
      <ButtonGroup>
        <Buttons className="estudiantes" onClick={() => setShowEstudiantes(true)}>Ver estudiantes</Buttons>
        <Buttons className="inactivar" onClick={() => setShowInhabilitar(true)}>Inhabilitar</Buttons>
      </ButtonGroup>
    </GroupContainer>

    <GroupContainer className="additionalButtons">
      <Buttons className="agregarButton" onClick={iraCrearGrupos}>Crear grupo<IoMdAdd /></Buttons>
      <Buttons className="agregarButton" onClick={iraHistorial}>Historial de grupos<FaHistory /></Buttons>
    </GroupContainer>

    {showEstudiantes && <ListadoEstudiantes setShowEstudiantes={setShowEstudiantes}/>}
    {showInhabilitar && <Inhabilitar setShowInhabilitar={setShowInhabilitar}/>}
  </Container>
  )
}

export default Grupos

const Container = styled.div`
    padding: 2.5rem;
    width: 75%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`
const Titulo = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`
const GroupContainer = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 15px;
  border: 1px #CECDCD solid ;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 2rem;
  &.additionalButtons{
    flex-direction: row;
    justify-content: center;
  }
`
const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 15px;
  margin-top: 1rem;
`
const Buttons = styled.button`
  border-radius: 15px;
  background-color: #3BAC52;
  width: fit-content;
  padding: 1rem 2rem;
  color: white;
  font-weight: bold;
  border: none;
  transition: 0.2s ease-in-out;
  &:hover{
    background-color: #53b667;
    cursor: pointer;
  }
  &.estudiantes{
    background-color: white;
    color: black;
    border: 1px #CECDCD solid ;
    &:hover{
      background-color: #eae8e8;
    }
  }
  &.regresar{
    background-color: white;
    color: black;
    border: 1px #CECDCD solid ;
    height: fit-content;
    &:hover{
      background-color: #eae8e8;
    }
  }
  &.agregarButton{
    width: 50%;
    font-size: 1rem;
    background-color: white;
    color: black;
    border: 1px #CECDCD solid ;
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    &:hover{
      background-color: #eae8e8;
    }
  }
`


