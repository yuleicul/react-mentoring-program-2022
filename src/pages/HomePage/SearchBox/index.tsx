import { useState } from 'react'
import styled from 'styled-components'
import SearchButton from './SearchButton'

const Wrapper = styled.div`
  padding: 0 60;

  > .title {
    font-size: 40;
    color: white;
    margin-bottom: 38;
  }

  > .inputContainer {
    display: flex;
    height: 57;
    gap: 14px;

    > input {
      width: 100%;
      font-size: 20;
      padding: 20;
      border: none; // override default
      border-radius: 4px;
      background-color: rgba(50, 50, 50, 0.8);
      color: white;
    }
  }
`

interface SearchBoxProps {
  defaultValue: string
  onSearch: (keywords: string) => void
}

const SearchBox: React.FC<SearchBoxProps> = ({ defaultValue, onSearch }) => {
  const [value, setValue] = useState(defaultValue)

  return (
    <Wrapper>
      <div className="title">FIND YOUR MOVIE</div>
      <div className="inputContainer">
        <input
          type="text"
          placeholder="What do you want to watch?"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyUp={(e) => e.key === 'Enter' && onSearch(value)}
        />
        <SearchButton onClick={() => onSearch(value)}>SEARCH</SearchButton>
      </div>
    </Wrapper>
  )
}

export default SearchBox
