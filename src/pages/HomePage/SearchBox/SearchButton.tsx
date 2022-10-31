import styled from 'styled-components'

const SearchButton = styled.button`
  width: 233;
  font-size: 20;
  font-weight: 500;
  background-color: ${(props) => props.theme.color.main};
  color: white;
  border-radius: 4px;
  border: none; // override default
`

export default SearchButton
