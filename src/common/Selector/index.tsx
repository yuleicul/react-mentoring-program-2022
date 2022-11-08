import { useId } from 'react'
import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  > label {
    font-size: 16;
    color: ${(props) => props.theme.color.main};
  }
  > select {
    display: block;
    margin-top: 13;
    height: 57;
    width: 100%;
    font-size: 20;
    padding: 14;
    border: none; // override default
    appearance: none; // override default
    border-radius: 4px;
    background-color: rgba(50, 50, 50, 0.8);
    color: white;
    > option {
      background-color: rgba(35, 35, 35, 0.9);
    }
  }
  &::after {
    content: '';
    border: 10px solid;
    border-color: ${(props) => props.theme.color.main};
    border-left-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    position: absolute;
    top: 57;
    right: 20;
  }
`

interface SelectorProps {
  label: string
  multiple?: boolean
  placeholder: string
}

const Selector: React.FC<SelectorProps> = (props) => {
  const id = useId()
  return (
    <Wrapper>
      <label htmlFor={id}>{props.label}</label>
      <select
        name={props.label}
        id={id}
        multiple={props.multiple}
        placeholder={props.placeholder}
      >
        <option value="Crime">Crime</option>
        <option value="Documentary">Documentary </option>
        <option value="Horror">Horror</option>
        <option value="Comedy">Comedy</option>
      </select>
    </Wrapper>
  )
}

export default Selector