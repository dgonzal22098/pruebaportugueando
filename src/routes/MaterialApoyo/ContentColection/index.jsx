import styled from "styled-components"

// valor agregado, que al ingresar a cada titulo se pueda saber mas acerca del titulo o del link como tal con un boton de ver mas usando el parametro ({colectionName, onVerMas }) del componente


const ContentColection = ({colection, setShowColection, setShowColectionContent, setSelectedColection }) => {

    const handleCancel = () => {
        setShowColection(true);
        setShowColectionContent(false);
        setSelectedColection(null);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (
    <Container >

        <h1 style={{ marginBottom:"2rem" }}>{colection.titulo}</h1>

        <Row className="encabezado">
            <h3>Enlace a item de mejora</h3>
            <h3>Fecha de creación</h3>
        </Row>

        {colection.contenidos.map((item, index) => (
            <Row key={index}>
                <Titulo><a >{item.titulo}</a></Titulo>
                <Fecha>{item.fecha}</Fecha>
                {/* <VerMasBtn onClick={() => onVerMas(item)}>Ver más</VerMasBtn> */}
            </Row>
        ))}
        <ButtonCont>

            <Button >Agregar colección</Button>
            <Button 
            className="regresar" 
            onClick={handleCancel}>Volver</Button>

        </ButtonCont>
    </Container>)
  
}

export default ContentColection

const Titulos = [
    {
      titulo: "Título 1: Gramática Intermedia",
      fecha: "10/08/24",
      etiquetas: ["gramática", "estructura", "intermedio"],
    },
    {
      titulo: "Título 2: Guía de Verbos Irregulares",
      fecha: "22/08/24",
      etiquetas: ["verbos", "tiempos", "irregular"],
    },
    {
      titulo: "Título 3: Práctica de Pronunciación",
      fecha: "05/09/24",
      etiquetas: ["oralidad", "pronunciación", "fonética"],
    },
    {
      titulo: "Título 4: Lecturas Cortas en Portugués",
      fecha: "19/09/24",
      etiquetas: ["lectura", "comprensión", "portugués"],
    },
    {
      titulo: "Título 5: Fonética Básica",
      fecha: "03/10/24",
      etiquetas: ["fonética", "básico", "oralidad"],
    },
    {
      titulo: "Título 6: Podcast Educativo - Unidad 1",
      fecha: "17/10/24",
      etiquetas: ["audio", "escucha", "unidad 1"],
    },
    {
      titulo: "Título 7: Video - Conversación Cotidiana",
      fecha: "30/10/24",
      etiquetas: ["video", "diálogo", "fluidez"],
    },
    {
      titulo: "Título 8: Evaluación Formativa A1",
      fecha: "14/11/24",
      etiquetas: ["evaluación", "nivel A1", "repaso"],
    },
    {
      titulo: "Título 9: Expresiones Comunes",
      fecha: "07/12/24",
      etiquetas: ["expresiones", "cotidianas", "uso diario"],
    },
    {
      titulo: "Título 10: Juegos de Repaso",
      fecha: "20/01/25",
      etiquetas: ["juegos", "dinámico", "repaso"],
    },
  ];

const Container = styled.div`
    margin: 2rem 0;
    padding: 3rem 1rem;
    background-color: white;
    width: 90%;
    height: fit-content;
    display: flex;
    align-items: center;
    flex-direction: column;
    border: 1px #d9d9d9 solid;
    border-radius: 6px;
    `
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  border: 1px #d9d9d9 solid;
  padding: 1rem;
  border-radius: 10px;
  font-size: 1rem;
  width: 90%;
  &.encabezado{
    margin-bottom: 2.5rem;
  }
`;
const Titulo = styled.div`
  width: 70%;
  font-weight: bold;
  transition: .2s ease-in-out;
  &:hover{
      text-decoration: underline;
      cursor: pointer;
      color: blue;
  }
`;
const Fecha = styled.div`
  width: 30%;
  text-align: right;
  color: #666;
`;
const VerMasBtn = styled.button`
  width: 20%;
  padding: 0.5rem 1rem;
  border: none;
  background-color: #3BAC52;
  color: white;
  font-weight: 600;
  border-radius: 8px;
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: #4cc064;
    cursor: pointer;
  }
`;
const ButtonCont = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  width: 90%;
  align-items: center;
  gap: 10px;
`
const Button = styled.button`
  width: 50%;
  border-radius: 15px;
  background-color: #3BAC52;
  color: white;
  font-weight: bold;
  font-size: 1.1rem;
  padding: 1rem;
  border: none;
  transition: .2s ease-in-out;
  &:hover{
    background-color: #53c76a;
    cursor: pointer;
  }
  &.regresar{
    color: black;
    background-color: white;
    border: 1px #d9d9d9 solid;
    &:hover{
        background-color: #cecccc;
    }
  }

`