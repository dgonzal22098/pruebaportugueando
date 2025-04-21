import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ConfirmationGroup from "./Confirmation";

const CrearGrupos = () => {
  const navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const cancelOption = () => {
    navigate("/pruebas/grupos");
  }

  return (
  <Container>
    <h1>Nuevo grupo</h1>
    <NewGroupContainer>

{/* el numero del grupo se debe calcular al contar los grupos que ya hayan sido creados con anterioridad y de ese modo se podra seleccionar el disponible */}

      <Select className="classicSelectStyle" defaultValue="">
        <option value="" disabled>Seleccione el número del grupo</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </Select>

{/* los profesores se traen de la base de datos, alli se agregaron y registraron los docentes participantes en el semestre academico */}

      <Select className="classicSelectStyle" defaultValue="">
        <option value="" disabled>Seleccione el docente</option>
        <option>Andres galpon</option>
        <option>federico sancocho</option>
        <option>gabriela sierra</option>
      </Select>

      <Select className="classicSelectStyle" defaultValue="">
        <option value="" disabled>Seleccione el nivel</option>
        {Niveles.map((numero, index) => (
            <option key={index} value={numero}>{numero}</option>
          ))}
      </Select>

{/* los horarios se traen de la base de datos que estan establecidas por defecto o los que el administrador desee agregar */}
      <Select className="classicSelectStyle" defaultValue="">
        <option value="" disabled>Seleccione el horario</option>
        <option>4 - 6 pm</option>
        <option>6 - 8 pm</option>
        <option>8 - 10 pm</option>
      </Select>
    </NewGroupContainer>

    <ButtonGroup>
      <Button onClick={() => setShowConfirmation(true)}>Continuar</Button>
      <Button className="cancel" onClick={cancelOption}>Cancelar</Button>
    </ButtonGroup>
    {showConfirmation && <ConfirmationGroup setShowConfirmation={setShowConfirmation}/>}

  </Container>)
}

export default CrearGrupos

const Niveles = [
  1,2,3,4,5,6
];  

const Container = styled.div`
    padding: 2.5rem;
    width: 85%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 1rem;
`
const NewGroupContainer = styled.div`
  width: 60%;
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  border: 1px #D9D9D9 solid;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`
const Select = styled.select`
  width: 60%;
  padding: 0.5em 3.5em 0.5em 1em;
  border-radius: 10px;
  border: 1px #D9D9D9 solid;
  display: inline-block;
  font: inherit;
  line-height: 1.5em;
  transition: 0.2s ease-in-out;
  
  margin: 0;      
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;

  &.classicSelectStyle {
    background-image:
      linear-gradient(45deg, transparent 50%, #3BAC52 50%),
      linear-gradient(135deg, #3BAC52 50%, transparent 50%),
      linear-gradient(to right, white, white);
    background-position:
      calc(100% - 20px) calc(1em + 2px),
      calc(100% - 15px) calc(1em + 2px),
      100% 0;
    background-size:
      5px 5px,
      5px 5px,
      2.5em 2.5em;
    background-repeat: no-repeat;
    &:focus {
      background-image:
        linear-gradient(45deg, white 50%, transparent 50%),
        linear-gradient(135deg, transparent 50%, white 50%),
        linear-gradient(to right, gray, gray);
      background-position:
        calc(100% - 15px) 1em,
        calc(100% - 20px) 1em,
        100% 0;
      background-size:
        5px 5px,
        5px 5px,
        2.5em 2.5em;
      background-repeat: no-repeat;
      border-color: #d9d9d9;
      outline: 0;
    }
  }

`
const ButtonGroup = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-between;
  gap: 1rem;
`
const Button = styled.button`
    width: 50%;
    border-radius: 8px;
    background-color: #3BAC52;
    color: white;
    font-weight: 500;
    border: none;
    height: 45px;
    font-size: 1rem;
    cursor: pointer;
    transition: .2s ease-in-out;
    &:hover{
      background-color: #54c36a;
    }
    &.cancel{
      color: black;
      background-color: white;
      border: 1px #d9d9d9 solid;
      &:hover{
        background-color: #e4e3e3;
      }
    }
`

