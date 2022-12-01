import { forwardRef, useId } from 'react'
import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  > label {
    font-size: 16;
    color: ${(props) => props.theme.color.main};
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
  > .errorMessage {
    color: white;
    position: absolute;
    font-size: 14px;
  }
`

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  errorMessage?: string
}

const Textarea: React.ForwardRefRenderFunction<
  HTMLTextAreaElement,
  TextareaProps
> = ({ label, errorMessage, ...selectProps }, ref) => {
  const id = useId()
  return (
    <Wrapper>
      <label htmlFor={id}>{label}</label>
      <textarea {...selectProps} ref={ref} rows={7}></textarea>
      {errorMessage && <div className="errorMessage">{errorMessage}</div>}
    </Wrapper>
  )
}

export default forwardRef(Textarea)
