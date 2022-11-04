import styled from 'styled-components'
import Form from '../../../common/Form'
import Input from '../../../common/Input'
import Modal from '../../../common/Modal'
import Selector from '../../../common/Selector'
import { Wrapper as InputWrapper } from '../../../common/Input'
import { Wrapper as SelectorWrapper } from '../../../common/Selector'

const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;

  & > ${InputWrapper}, & > ${SelectorWrapper} {
    &:nth-child(odd) {
      flex: 1 2 525px;
    }
    &:nth-child(even) {
      flex: 1 1 300px;
    }
  }
`

interface AddMovieModalProps {
  onClose: () => void
}

const AddMovieModal: React.FC<AddMovieModalProps> = (props) => {
  return (
    <Modal title="ADD MOVIE" width={976} onClose={props.onClose}>
      <Form>
        <FlexWrapper>
          <Input type="text" label="TITLE" placeholder="Title" />
          <Input type="date" label="RELEASE DATE" placeholder="Select Date" />
          <Input type="text" label="MOVIE URL" placeholder="https://" />
          <Input type="text" label="RATING" placeholder="7.8" />
          <Selector label="GENRE" placeholder="Select Genre" />
          <Input type="text" label="RUNTIME" placeholder="minutes" />
          <Input textarea label="OVERVIEW" placeholder="overview" />
        </FlexWrapper>
      </Form>
    </Modal>
  )
}

export default AddMovieModal
