import styled from 'styled-components'
import { Movie } from '../../../store/moviesSlice'
import MovieCard from './MovieCard'

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
  onDelete: (id: Pick<Movie, 'id'>) => void
  data?: Movie[]
  onViewDetail: (data: Movie) => void
  totalAmount: number
}

const SearchResult: React.FC<SearchResultProps> = (props) => {
  return (
    <Wrapper>
      <div className="resultSum">
        <strong>{props.totalAmount}</strong> movies found
      </div>
      <div className="cardContainer">
        {props.data?.map((movie) => (
          <MovieCard
            key={movie.id}
            coverSrc={movie.poster_path}
            title={movie.title}
            genre={movie.genres}
            releaseDate={movie.release_date}
            onEdit={() => props.onEdit(movie)}
            // @ts-ignore
            onDelete={() => props.onDelete(movie.id)}
            onClick={() => props.onViewDetail(movie)}
          />
        ))}
      </div>
    </Wrapper>
  )
}

export default SearchResult
