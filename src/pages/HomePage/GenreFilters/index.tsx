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
  defaultValue: string
}

const GenreFilters: React.FC<GenreFiltersProps> = ({
  onChange,
  defaultValue,
}) => {
  const handleChange = useCallback(
    (id: string) => {
      onChange(id === 'All' ? '' : id)
    },
    [onChange]
  )

  return (
    <Wrapper
      // @ts-ignore
      onChange={(e) => handleChange(e.target.id)}
      defaultValue={defaultValue}
    >
      <Filter defaultChecked={defaultValue === ''}>All</Filter>
      <Filter defaultChecked={defaultValue === 'Documentary'}>
        Documentary
      </Filter>
      <Filter defaultChecked={defaultValue === 'Comedy'}>Comedy</Filter>
      <Filter defaultChecked={defaultValue === 'Horror'}>Horror</Filter>
      <Filter defaultChecked={defaultValue === 'Crime'}>Crime</Filter>
    </Wrapper>
  )
}

export default GenreFilters
