import styled from 'styled-components'
import Dropdown from './Dropdown'

const Wrapper = styled.div`
  display: flex;
  gap: 30px;

  > .title {
    font-size: 16;
    color: white;
    opacity: 0.6;
    text-transform: uppercase;
  }
`

const SortDropdown: React.FC = () => {
  return (
    <Wrapper>
      <div className="title">Sort By</div>
      <Dropdown />
    </Wrapper>
  )
}

export default SortDropdown
