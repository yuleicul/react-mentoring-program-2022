import { useId } from 'react'
import styled from 'styled-components'
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
  > textarea {
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
  > .calendarIcon {
    position: absolute;
    top: 47;
    right: 18;
  }
`

interface InputProps {
  placeholder: string
  type?: string
  textarea?: boolean
  label: string
  onClick?: () => void
}

const Input: React.FC<InputProps> = (props) => {
  const id = useId()
  return (
    <Wrapper>
      <label htmlFor={id}>{props.label}</label>

      {props.textarea ? (
        <textarea
          name="Text1"
          rows={7}
          placeholder={props.placeholder}
        ></textarea>
      ) : (
        <input
          type={props.type}
          id={id}
          name={props.label}
          placeholder={props.placeholder}
        ></input>
      )}

      {props.type === 'date' && (
        <div className="calendarIcon">
          <CalendarIcon />
        </div>
      )}
    </Wrapper>
  )
}

export default Input
