import styled from 'styled-components'
import CloseButtonSvg from './close-button.svg'

interface WrapperProps {
  modalWidth: number
  height?: number
}

const Wrapper = styled.div<WrapperProps>`
  position: absolute;
  height: ${(props) => props.height};
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgba(35, 35, 35, 0.9);
  font-size: 20;
  color: white;
  overflow: auto;

  > .modal {
    background-color: #232323;
    width: ${(props) => props.modalWidth};
    margin: 175 auto;
    padding: 50;
    position: relative;
    > .closeButton {
      position: absolute;
      top: 30;
      right: 30;
      cursor: pointer;
    }
    > .title {
      font-size: 40;
      margin-bottom: 38;
    }
  }
`

interface ModalProps {
  title?: string
  width: number
  children?: React.ReactNode
  className?: string

  onClose: () => void
}

const Modal: React.FC<ModalProps> = ({ title, width, children, onClose }) => {
  return (
    <Wrapper
      modalWidth={width}
      height={document.scrollingElement?.scrollHeight}
    >
      <div className="modal">
        <div className="closeButton" onClick={onClose}>
          <CloseButtonSvg />
        </div>
        {title && <div className="title">{title}</div>}
        <div className="content">{children}</div>
      </div>
    </Wrapper>
  )
}

export default Modal
