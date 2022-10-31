import styled from 'styled-components'
import MovieCard from './MovieCard'

const Wrapper = styled.div`
  .resultSum {
    color: white;
    font-size: 20;
  }

  .CardContainer {
    display: flex;
    gap: 50;
  }
`

const SearchResult: React.FC = () => {
  return (
    <Wrapper>
      <div className="resultSum">
        <strong>39</strong> movies found
      </div>
      <div className="cardContainer">
        <MovieCard
          coverSrc="https://th.bing.com/th/id/OIP.UNtn3Qq38k2d6bpecqvpowHaLo?pid=ImgDet&rs=1"
          title="Mario"
          genre={['Cartoon', 'Action']}
          releaseDate="2022"
        />
      </div>
    </Wrapper>
  )
}

export default SearchResult
