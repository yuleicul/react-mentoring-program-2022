import styled from 'styled-components'
import MovieCard from './MovieCard'
import { Movie } from '../../../apis/movie'

const Wrapper = styled.div`
  > .resultSum {
    color: white;
    font-size: 20;
    padding: 24 0;
  }

  > .CardContainer {
    padding-bottom: 70;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 50px;
  }
`
interface SearchResultProps {
  onEdit: (data: Movie) => void
  onDelete: () => void
  data?: Movie[]
  onViewDetail: (data: Movie) => void
}

const SearchResult: React.FC<SearchResultProps> = (props) => {
  return (
    <Wrapper>
      <div className="resultSum">
        <strong>39</strong> movies found
      </div>
      <div className="cardContainer">
        {props.data?.map((movie) => (
          <MovieCard
            key={movie.id}
            coverSrc={movie.coverSrc}
            title={movie.title}
            genre={movie.genre}
            releaseDate={movie.releaseDate}
            onEdit={() => props.onEdit(movie)}
            onDelete={props.onDelete}
            onClick={() => props.onViewDetail(movie)}
          />
        ))}
      </div>
    </Wrapper>
  )
}

export default SearchResult
