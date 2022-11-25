import styled from 'styled-components'
import Form from '../../../common/Form'
import Input from '../../../common/Input'
import Modal from '../../../common/Modal'
import Selector from '../../../common/Selector'
import { Wrapper as InputWrapper } from '../../../common/Input'
import { Wrapper as SelectorWrapper } from '../../../common/Selector'
import { Movie } from '../../../store/moviesSlice'

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

interface AddOrEditMovieModalProps {
  onClose: () => void
  onSubmit: () => void
  data?: Movie
}

const AddOrEditMovieModal: React.FC<AddOrEditMovieModalProps> = (props) => {
  const {
    title,
    release_date,
    poster_path,
    vote_average,
    genres,
    runtime,
    overview,
  } = props.data || {}
  return (
    <Modal
      title={props.data ? 'EDIT MOVIE' : 'ADD MOVIE'}
      width={976}
      onClose={props.onClose}
    >
      <Form buttons={['reset', 'submit']} onSubmit={props.onSubmit}>
        <FlexWrapper>
          <Input type="text" label="TITLE" placeholder="Title" value={title} />
          <Input
            type="date"
            label="RELEASE DATE"
            placeholder="Select Date"
            value={release_date}
          />
          <Input
            type="text"
            label="MOVIE URL"
            placeholder="https://"
            value={poster_path}
          />
          <Input
            type="text"
            label="RATING"
            placeholder="7.8"
            value={vote_average}
          />
          <Selector label="GENRE" placeholder="Select Genre" />
          <Input
            type="text"
            label="RUNTIME"
            placeholder="minutes"
            value={runtime}
          />
          <Input
            textarea
            label="OVERVIEW"
            placeholder="overview"
            value={overview}
          />
        </FlexWrapper>
      </Form>
    </Modal>
  )
}

export default AddOrEditMovieModal
