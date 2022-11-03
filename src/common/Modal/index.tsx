import styled from 'styled-components'
import CloseButtonSvg from './close-button.svg'

interface WrapperProps {
  width: number
}

const Wrapper = styled.div<WrapperProps>`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  // TODO rgba(35, 35, 35, 0.9);
  background-color: rgba(35, 35, 35, 0.5);
  font-size: 20;
  color: white;

  .modal {
    background-color: #232323;
    width: ${(props) => props.width};
    margin: 175 auto;
    padding: 50;
    position: relative;
    // TODO remove
    border: 1px solid white;
    .closeButton {
      position: absolute;
      top: 30;
      right: 30;
    }
    .title {
      font-size: 40;
      margin-bottom: 38;
    }
  }
`

interface ModalProps {
  title: string
  width: number
  children?: React.ReactNode
  className?: string

  onClose: () => void
}

const Modal: React.FC<ModalProps> = ({
  title,
  width,
  children,
  className,
  onClose,
}) => {
  return (
    <Wrapper width={width}>
      <div className="modal">
        <div className="closeButton" onClick={onClose}>
          <CloseButtonSvg />
        </div>
        <div className="title">{title}</div>
        <div className="content">{children}</div>
      </div>
    </Wrapper>
  )
}

export default Modal
