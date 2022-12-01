import styled from 'styled-components'
import Form from '../../../common/Form'
import Input from '../../../common/Input'
import Modal from '../../../common/Modal'
import Selector from '../../../common/Selector'
import { Wrapper as InputWrapper } from '../../../common/Input'
import { Wrapper as SelectorWrapper } from '../../../common/Selector'
import { Movie } from '../../../store/moviesSlice'
import { useForm } from 'react-hook-form'
import InputButton from '../../../common/InputButton'
import Textarea from '../../../common/Textarea'

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
  onSubmit: (data: Movie) => void
  data?: Movie
}

const AddOrEditMovieModal: React.FC<AddOrEditMovieModalProps> = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Movie>({
    defaultValues: props.data,
  })

  console.log(watch())

  return (
    <Modal
      title={props.data ? 'EDIT MOVIE' : 'ADD MOVIE'}
      width={976}
      onClose={props.onClose}
    >
      <Form onSubmit={handleSubmit(props.onSubmit)}>
        <FlexWrapper>
          <Input
            type="text"
            label="TITLE"
            placeholder="Title"
            {...register('title')}
          />
          <Input
            type="date"
            label="RELEASE DATE"
            placeholder="Select Date"
            {...register('release_date')}
          />
          <Input
            type="text"
            label="MOVIE URL"
            placeholder="https://"
            {...register('poster_path')}
          />
          <Input
            type="text"
            label="RATING"
            placeholder="7.8"
            {...register('vote_average')}
          />
          <Selector
            label="GENRE"
            placeholder="Select Genre"
            {...register('genres')}
          />
          <Input
            type="text"
            label="RUNTIME"
            placeholder="minutes"
            {...register('runtime')}
          />
          <Textarea
            label="OVERVIEW"
            placeholder="overview"
            {...register('overview')}
          />
        </FlexWrapper>

        <div className="footer">
          <InputButton plain type="reset" value="RESET" />
          <InputButton type="submit" value="SUBMIT" />
        </div>
      </Form>
    </Modal>
  )
}

export default AddOrEditMovieModal
