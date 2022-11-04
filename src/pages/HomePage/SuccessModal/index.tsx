import styled from 'styled-components'
import Form from '../../../common/Form'
import Modal from '../../../common/Modal'
import SuccessSvg from './success.svg'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20;
  gap: 30px;
  > .largeText {
    font-size: 40;
    text-transform: uppercase;
  }
`

interface SuccessModalProps {
  onClose: () => void
}

const SuccessModal: React.FC<SuccessModalProps> = (props) => {
  return (
    <Modal width={686} onClose={props.onClose}>
      <Form>
        <Wrapper>
          <SuccessSvg />
          <div className="largeText">congratulations !</div>
          <div>The movie has been added to database successfully</div>
        </Wrapper>
      </Form>
    </Modal>
  )
}

export default SuccessModal
