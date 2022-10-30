import styled from 'styled-components'
import SearchButton from './SearchButton'

const Wrapper = styled.div`
  .title {
    font-size: 40;
    color: white;
  }

  .inputContainer {
    display: flex;
    height: 57;
    gap: 14px;

    input {
      width: 713;
      font-size: 20;
      padding: 20;
      border: none; // override default
      border-radius: 4px;
      background-color: rgba(50, 50, 50, 0.8);
      color: white;
    }
  }
`

const SearchBox: React.FC = () => {
  return (
    <Wrapper>
      <div className="title">FIND YOUR MOVIE</div>
      <div className="inputContainer">
        <input type="text" placeholder="What do you want to watch?" />
        <SearchButton>SEARCH</SearchButton>
      </div>
    </Wrapper>
  )
}

export default SearchBox
