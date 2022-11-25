import { useCallback } from 'react'
import styled from 'styled-components'
import Filter from './Filter'

const Wrapper = styled.form`
  display: flex;
  gap: 30px;
  margin-block-end: 0; // override default
`
interface GenreFiltersProps {
  onChange: (filter: string) => void
}

const GenreFilters: React.FC<GenreFiltersProps> = ({ onChange }) => {
  const handleChange = useCallback(
    (id: string) => {
      onChange(id === 'All' ? '' : id)
    },
    [onChange]
  )

  return (
    // @ts-ignore
    <Wrapper onChange={(e) => handleChange(e.target.id)}>
      <Filter>All</Filter>
      <Filter>Documentary</Filter>
      <Filter>Comedy</Filter>
      <Filter>Horror</Filter>
      <Filter>Crime</Filter>
    </Wrapper>
  )
}

export default GenreFilters
