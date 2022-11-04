import styled from 'styled-components'
import CloseSvg from './close.svg'

const Wrapper = styled.div`
  width: 190;
  background-color: #232323;
  color: white;
  padding: 24 0 12 0;
  position: absolute;
  top: 12;
  right: 14;

  > .closeButton {
    position: absolute;
    top: 7;
    right: 7;
  }

  > .item {
    padding: 10 23;
    cursor: pointer;
    &:hover {
      background-color: ${(props) => props.theme.color.main};
    }
  }
`

interface DropdownProps {
  onEdit: () => void
  onDelete: () => void
  onClose: () => void
}

const Dropdown: React.FC<DropdownProps> = (props) => {
  return (
    <Wrapper>
      <div className="closeButton" onClick={props.onClose}>
        <CloseSvg />
      </div>
      <div className="item" onClick={props.onEdit}>
        Edit
      </div>
      <div className="item" onClick={props.onDelete}>
        Delete
      </div>
    </Wrapper>
  )
}

export default Dropdown
