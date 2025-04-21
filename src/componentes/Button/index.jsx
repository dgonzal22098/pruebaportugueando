import styled from "styled-components"

const ButtonComp = styled.button`
    width: 100%;
    border-radius: 8px;
    background-color: #3BAC52;
    color: white;
    font-weight: 500;
    border: none;
    height: 45px;
    font-size: 1rem;
    cursor: pointer;
`

const Button = ({texto, type}) => {
  return <ButtonComp type={type} >
        {texto}
  </ButtonComp>
}

export default Button