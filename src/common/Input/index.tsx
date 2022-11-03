import styled from 'styled-components'

const Wrapper = styled.div`
  label {
    font-size: 16;
    color: ${(props) => props.theme.color.main};
  }
  input {
    display: block;
    margin-top: 13;
    height: 57;
    width: 100%;
    font-size: 20;
    padding: 18;
    border: none; // override default
    border-radius: 4px;
    background-color: rgba(50, 50, 50, 0.8);
    color: white;
  }
  textarea {
    display: block;
    margin-top: 13;
    width: 100%;
    font-size: 20;
    padding: 18;
    border: none; // override default
    border-radius: 4px;
    background-color: rgba(50, 50, 50, 0.8);
    color: white;
  }
`

interface InputProps {
  placeholder: string
  textarea?: boolean
  label: string
  onClick?: () => void
}

const Input: React.FC<InputProps> = (props) => {
  return (
    <Wrapper>
      <label htmlFor={props.label}>{props.label}</label>

      {props.textarea ? (
        <textarea name="Text1" cols={40} rows={5}></textarea>
      ) : (
        <input
          type="text"
          id={props.label}
          name={props.label}
          placeholder={props.placeholder}
        ></input>
      )}
    </Wrapper>
  )
}

export default Input
