import styled from 'styled-components'

const Wrapper = styled.div`
  font-size: 16;
  color: white;
  text-transform: uppercase;

  > input {
    display: none; // override default
    &:checked + label::after {
      display: block;
      content: '';
      background-color: ${(props) => props.theme.color.main};
      height: 4;
      width: 100%;
      position: absolute;
      bottom: -23px;
    }
  }

  > label {
    position: relative;
  }
`

interface FilterProps {
  defaultChecked: boolean
  children: string
}

const Filter: React.FC<FilterProps> = ({ defaultChecked, children }) => {
  return (
    <Wrapper>
      <input
        type="radio"
        id={children}
        name="genre"
        value={children === 'All' ? '' : children}
        defaultChecked={defaultChecked}
      />
      <label htmlFor={children}>{children}</label>
    </Wrapper>
  )
}

export default Filter
