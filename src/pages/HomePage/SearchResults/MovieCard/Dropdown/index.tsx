import { forwardRef } from 'react'
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

  &:focus {
    outline: none;
  }
`

interface DropdownProps {
  onEdit: () => void
  onDelete: () => void
  onClose: () => void
}

const Dropdown: React.ForwardRefRenderFunction<
  HTMLInputElement,
  DropdownProps
> = (props, ref) => {
  return (
    <Wrapper
      onBlur={props.onClose}
      // A negative value (usually tabindex="-1") means that the element is not reachable via sequential keyboard navigation, but could be focused with JavaScript or visually by clicking with the mouse.
      // https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
      tabIndex={-1}
      ref={ref}
    >
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

export default forwardRef(Dropdown)
