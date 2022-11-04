import styled from 'styled-components'
import InputButton from '../InputButton'

const Wrapper = styled.form`
  > .footer {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 60;
  }
`

interface FormProps {
  children?: React.ReactNode
  onSubmit?: () => void
  onReset?: () => void
}

const Form: React.FC<FormProps> = (props) => {
  return (
    <Wrapper
      onSubmit={(e) => {
        e.preventDefault()
        props.onSubmit()
      }}
      onReset={props.onReset}
    >
      {props.children}
      <div className="footer">
        <InputButton plain type="reset" value="RESET" />
        <InputButton type="submit" value="SUBMIT" />
      </div>
    </Wrapper>
  )
}

export default Form
