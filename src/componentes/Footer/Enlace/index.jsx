import styled from "styled-components"
import { Link,Navigate } from "react-router-dom"


const EnlaceComp = styled.p`
    font-size: 0.9rem;
    margin: 10px 0;
`
const LinkDecorated = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover {
    color: #0c47a1;
    text-decoration: underline;
  }
`

const Enlace = ( {destination,texto}) => {
  return <EnlaceComp>
    <LinkDecorated
    to={destination}
    >{texto}</LinkDecorated>
  </EnlaceComp>
}

export default Enlace