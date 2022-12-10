import { forwardRef, useId } from 'react'
import styled from 'styled-components'
import ErrorMessage from '../ErrorMessage'
import CalendarIcon from './calendar-icon.svg'

export const Wrapper = styled.div`
  position: relative;

  > label {
    font-size: 16;
    color: ${(props) => props.theme.color.main};
  }

  > input {
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

    // Copied from https://codepen.io/andyftp/pen/EQoKxq
    &[type='date']::-webkit-calendar-picker-indicator {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: auto;
      height: auto;
      color: transparent;
      background: transparent;
    }
  }

  > .calendarIcon {
    position: absolute;
    top: 47;
    right: 18;
  }
`

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  errorMessage?: string
}

const Input: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, errorMessage, ...inputProps },
  ref
) => {
  const id = useId()
  return (
    <Wrapper>
      <label htmlFor={id}>{label}</label>
      <input ref={ref} {...inputProps} id={id}></input>

      {inputProps.type === 'date' && (
        <div className="calendarIcon">
          <CalendarIcon />
        </div>
      )}

      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Wrapper>
  )
}

export default forwardRef(Input)
