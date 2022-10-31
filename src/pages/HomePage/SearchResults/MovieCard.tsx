import styled from 'styled-components'

const Wrapper = styled.div`
  color: white;
  position: relative;

  img {
    height: 455;
    width: 319;
    object-fit: fill;
    margin-bottom: 22;
  }
  .title {
    opacity: 0.7;
    font-size: 18;
    margin-bottom: 8;
  }
  .genre {
    opacity: 0.5;
    font-size: 14;
  }
  .date {
    opacity: 0.7;
    font-size: 14;
    border: 1px solid #979797;
    border-radius: 4px;
    display: inline-block;
    padding: 4 8;
    position: absolute;
    right: 0;
    bottom: 25;
  }
`

interface MovieCardProps {
  coverSrc: string
  title: string
  genre: string[]
  releaseDate: string
}

const MovieCard: React.FC<MovieCardProps> = ({
  coverSrc,
  title,
  genre,
  releaseDate,
}) => {
  return (
    <Wrapper>
      <img src={coverSrc} alt="cover" />
      <div className="title">{title}</div>
      <div className="genre">{genre.join(', ')}</div>
      <div className="date">{releaseDate}</div>
    </Wrapper>
  )
}

export default MovieCard
