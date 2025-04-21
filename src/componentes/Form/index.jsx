import styled from "styled-components";

const Form = styled.form`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    padding: 1rem 75px;
    justify-content: flex-start;
    margin-bottom: 3rem;
`

const Formulario = ({children, onSubmit}) => {
  return <>
    <Form onSubmit={onSubmit}>
        {children}
    </Form>
  </>
}

export default Formulario