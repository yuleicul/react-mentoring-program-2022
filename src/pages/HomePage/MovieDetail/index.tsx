import styled from 'styled-components'
import { Movie } from '../../../apis/movie'

const Wrapper = styled.div`
  display: flex;
  gap: 60px;
  color: white;
  font-size: 20;

  > img {
    object-fit: cover;
  }

  > .details {
    > .titleAndRating {
      display: flex;
      gap: 25px;
      margin-bottom: 10;
      align-items: center;

      > .title {
        font-size: 40;
        text-transform: uppercase;
      }
      > .rating {
        border: 1px white solid;
        border-radius: 50%;
        padding: 15;
      }
    }

    > .genre {
      font-size: 14;
      opacity: 0.5;
      margin-bottom: 30;
    }

    > .time {
      display: flex;
      gap: 50px;
      color: ${(props) => props.theme.color.main};
      font-size: 24;
      margin-bottom: 30;
    }

    > .overview {
      opacity: 0.5;
    }
  }
`

interface MovieDetailProps {
  data: Movie
}

const minutesToHour = (min: number) => {
  const hour = Math.floor(min / 60)
  const leftMin = min % 60
  if (hour) return `${hour}h ${leftMin}min`
  else return `${leftMin}min`
}

const MovieDetail: React.FC<MovieDetailProps> = ({ data }) => {
  return (
    <Wrapper>
      <img src={data.coverSrc} alt={data.title} width={323} height={486} />
      <div className="details">
        <div className="titleAndRating">
          <div className="title">{data.title}</div>
          <div className="rating">{data.rating}</div>
        </div>
        <div className="genre">{data.genre.join(', ')}</div>
        <div className="time">
          <div className="releaseDate">{data.releaseDate}</div>
          <div className="runtime">
            {data.runtime && minutesToHour(data.runtime)}
          </div>
        </div>
        <div className="overview">{data.overview}</div>
      </div>
    </Wrapper>
  )
}

export default MovieDetail
