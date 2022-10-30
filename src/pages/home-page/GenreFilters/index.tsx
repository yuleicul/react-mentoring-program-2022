import styled from 'styled-components'
import Filter from './Filter'

const Wrapper = styled.div`
  display: flex;
  gap: 30px;
`

const GenreFilters: React.FC = () => {
  return (
    <Wrapper>
      <Filter>All</Filter>
      <Filter>Documentary</Filter>
      <Filter>Comedy</Filter>
      <Filter>Horror</Filter>
      <Filter>Crime</Filter>
    </Wrapper>
  )
}

export default GenreFilters
