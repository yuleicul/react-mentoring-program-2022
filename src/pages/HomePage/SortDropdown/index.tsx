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
  defaultValue: string
  onChange: (value: string) => void
}

const SortDropdown: React.FC<SortDropdownProps> = ({
  defaultValue,
  onChange,
}) => {
  return (
    <Wrapper>
      <div className="title">Sort By</div>
      <Dropdown defaultValue={defaultValue} onChange={onChange} />
    </Wrapper>
  )
}

export default SortDropdown
