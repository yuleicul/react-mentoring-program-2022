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
  buttons?: string[]
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

      {props.buttons && (
        <div className="footer">
          {props.buttons.includes('reset') && (
            <InputButton plain type="reset" value="RESET" />
          )}
          {props.buttons.includes('submit') && (
            <InputButton type="submit" value="SUBMIT" />
          )}
          {props.buttons.includes('confirm') && (
            <InputButton type="submit" value="CONFIRM" />
          )}
        </div>
      )}
    </Wrapper>
  )
}

export default Form
