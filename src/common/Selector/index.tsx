import { forwardRef, useId } from 'react'
import styled from 'styled-components'
import ErrorMessage from '../ErrorMessage'

const GENRES = [
  'Crime',
  'Documentary',
  'Horror',
  'Comedy',
  'Action',
  'Adventure',
  'Science Fiction',
  'Fantasy',
  'Thriller',
  'Family',
  'Mystery',
  'Drama',
]

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

interface SelectorProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  errorMessage?: string
}

const Selector: React.ForwardRefRenderFunction<
  HTMLSelectElement,
  SelectorProps
> = ({ label, errorMessage, ...selectorProps }, ref) => {
  const id = useId()

  return (
    <Wrapper>
      <label htmlFor={id}>{label}</label>
      <select {...selectorProps} ref={ref} id={id}>
        <option value="">--Genre--</option>
        {GENRES.map((genre) => (
          <option value={genre} key={genre}>
            {genre}
          </option>
        ))}
      </select>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Wrapper>
  )
}

export default forwardRef(Selector)
