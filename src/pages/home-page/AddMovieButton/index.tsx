import styled from 'styled-components'

const Wrapper = styled.button`
  height: 46;
  width: 177;
  border: none; // override default
  border-radius: 4px;
  font-size: 20;
  font-weight: 600;
  background-color: rgba(96, 96, 96, 0.68);
  color: ${(props) => props.theme.color.main};
`

const AddMovieButton: React.FC = () => {
  return <Wrapper>+ ADD MOVIE</Wrapper>
}

export default AddMovieButton
