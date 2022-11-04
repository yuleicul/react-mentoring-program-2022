import styled from 'styled-components'

const Wrapper = styled.input<InputButtonProps>`
  height: 57;
  width: 180;
  border: 1px solid;
  border-color: ${(props) => props.theme.color.main};
  border-radius: 4px;
  font-size: 20;
  font-weight: 600;
  background-color: ${(props) =>
    props.plain ? 'transparent' : props.theme.color.main};
  color: ${(props) => (props.plain ? props.theme.color.main : 'white')};
  cursor: pointer;
`

interface InputButtonProps {
  type: 'submit' | 'reset'
  value: string
  plain?: boolean
  onClick?: () => void
}

const InputButton: React.FC<InputButtonProps> = (props) => {
  return <Wrapper {...props} />
}

export default InputButton
