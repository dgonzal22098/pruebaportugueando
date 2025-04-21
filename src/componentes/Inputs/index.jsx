import {styled} from "styled-components"

const InputField = styled.input`
    width: 100%;
    padding: 19px;
    margin-bottom: 20px;
    border-radius: 8px;
    border: 0.5px black solid;
`

const Inputs = ({type, placeholder, value, onChange}) => {
  return <InputField 
          type={type} 
          placeholder={placeholder} 
          value={value} 
          onChange={onChange}
          >
  </InputField>
}

export default Inputs
