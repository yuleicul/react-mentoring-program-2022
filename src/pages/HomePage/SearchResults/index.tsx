import { useState } from 'react'
import styled from 'styled-components'
import Dropdown from './MovieCard/Dropdown'
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
  onEdit: () => void
  onDelete: () => void
}

const SearchResult: React.FC<SearchResultProps> = (props) => {
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
          onEdit={props.onEdit}
          onDelete={props.onDelete}
        />
        <MovieCard
          coverSrc="https://th.bing.com/th/id/OIP.UNtn3Qq38k2d6bpecqvpowHaLo?pid=ImgDet&rs=1"
          title="Mario"
          genre={['Cartoon', 'Action']}
          releaseDate="2022"
          onEdit={props.onEdit}
          onDelete={props.onDelete}
        />
        <MovieCard
          coverSrc="https://th.bing.com/th/id/OIP.UNtn3Qq38k2d6bpecqvpowHaLo?pid=ImgDet&rs=1"
          title="Mario"
          genre={['Cartoon', 'Action']}
          releaseDate="2022"
          onEdit={props.onEdit}
          onDelete={props.onDelete}
        />
        <MovieCard
          coverSrc="https://th.bing.com/th/id/OIP.UNtn3Qq38k2d6bpecqvpowHaLo?pid=ImgDet&rs=1"
          title="Mario"
          genre={['Cartoon', 'Action']}
          releaseDate="2022"
          onEdit={props.onEdit}
          onDelete={props.onDelete}
        />
        <MovieCard
          coverSrc="https://th.bing.com/th/id/OIP.UNtn3Qq38k2d6bpecqvpowHaLo?pid=ImgDet&rs=1"
          title="Mario"
          genre={['Cartoon', 'Action']}
          releaseDate="2022"
          onEdit={props.onEdit}
          onDelete={props.onDelete}
        />
        <MovieCard
          coverSrc="https://th.bing.com/th/id/OIP.UNtn3Qq38k2d6bpecqvpowHaLo?pid=ImgDet&rs=1"
          title="Mario"
          genre={['Cartoon', 'Action']}
          releaseDate="2022"
          onEdit={props.onEdit}
          onDelete={props.onDelete}
        />
        <MovieCard
          coverSrc="https://th.bing.com/th/id/OIP.UNtn3Qq38k2d6bpecqvpowHaLo?pid=ImgDet&rs=1"
          title="Mario"
          genre={['Cartoon', 'Action']}
          releaseDate="2022"
          onEdit={props.onEdit}
          onDelete={props.onDelete}
        />
      </div>
    </Wrapper>
  )
}

export default SearchResult
