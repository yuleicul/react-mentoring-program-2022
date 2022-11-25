import styled from 'styled-components'
import Dropdown from './Dropdown'

const Wrapper = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;

  > .title {
    font-size: 16;
    color: white;
    opacity: 0.6;
    text-transform: uppercase;
  }
`
interface SortDropdownProps {
  onChange: (value: string) => void
}

const SortDropdown: React.FC<SortDropdownProps> = ({ onChange }) => {
  return (
    <Wrapper>
      <div className="title">Sort By</div>
      <Dropdown onChange={onChange} />
    </Wrapper>
  )
}

export default SortDropdown
