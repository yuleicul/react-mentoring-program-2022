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

interface AddMovieButtonProps {
  onClick: () => void
}

const AddMovieButton: React.FC<AddMovieButtonProps> = ({ onClick }) => {
  return <Wrapper onClick={onClick}>+ ADD MOVIE</Wrapper>
}

export default AddMovieButton
