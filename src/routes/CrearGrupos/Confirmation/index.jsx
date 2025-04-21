import styled from "styled-components"
import { IoClose } from "react-icons/io5";


//la logica de obtener la informacion del grupo nuevo se obtiene a taves del componente padre:
//CrearGrupos: elemento padre, el envia los datos a el overlay y estos datos se enviaran a la base de datos


const ConfirmationGroup = ({setShowConfirmation}) => {
  return (
    <ShowConfirmationBackdrop onClick={() => setShowConfirmation(false)}>
        <Container onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setShowConfirmation(false)}>
              <IoClose size={24} />
            </CloseButton>
            <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
                <h4>Información del nuevo grupo</h4>
            </div>
            <Container className="infoContainer">
                 <p>Grupo número: 3</p>
                 <p>Docente: Chapulin</p>
                 <p>Nivel: 3</p>
                 <p>Horario: 4 - 6 pm</p>
                 <p>Fecha de creación: 25-1-2026</p>
            </Container>
            <ButtonGroup>
                <Button>Crear grupo</Button>
                <Button className="volver" onClick={() => setShowConfirmation(false)}>Volver a editar</Button>
            </ButtonGroup>
        </Container>
    </ShowConfirmationBackdrop>
  )
}

export default ConfirmationGroup

const ShowConfirmationBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    backdrop-filter: blur(3px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
`
const Container = styled.div` 
    background: white;
    position: relative;
    padding: 2rem;
    border-radius: 1rem;
    width: 500px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
    &.infoContainer{
        gap: none;
        width: fit-content;
    }
`
const ButtonGroup = styled.div`
  display: flex;
  width: 100%;
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
    &.volver{
      color: black;
      background-color: white;
      border: 1px #d9d9d9 solid;
      &:hover{
        background-color: #e4e3e3;
      }
    }
`
const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: transparent;
  border: none;
  color: #888;
  cursor: pointer;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #ff5f5f;
  }
`;

