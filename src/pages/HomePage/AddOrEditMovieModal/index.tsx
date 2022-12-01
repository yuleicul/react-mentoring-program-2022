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

const FlexFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 60;
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

  console.log('error', errors)

  return (
    <Modal
      title={props.data ? 'EDIT MOVIE' : 'ADD MOVIE'}
      width={976}
      onClose={props.onClose}
    >
      <form onSubmit={handleSubmit(props.onSubmit)}>
        <FlexWrapper>
          <Input
            type="text"
            label="TITLE"
            placeholder="Title"
            errorMessage={errors.title?.message}
            {...register('title', { required: 'Required' })}
          />

          <Input
            type="date"
            label="RELEASE DATE"
            placeholder="Select Date"
            errorMessage={errors.release_date?.message}
            {...register('release_date', {
              required: 'Required',
            })}
          />
          <Input
            type="text"
            label="MOVIE URL"
            placeholder="https://"
            errorMessage={errors.poster_path?.message}
            {...register('poster_path', {
              required: 'Required',
            })}
          />
          <Input
            type="text"
            label="RATING"
            placeholder="7.8"
            errorMessage={errors.vote_average?.message}
            {...register('vote_average', {
              required: 'Required',
            })}
          />
          <Selector
            label="GENRE"
            placeholder="Select Genre"
            errorMessage={errors.genres?.message}
            {...register('genres', {
              required: 'Required',
            })}
          />
          <Input
            type="text"
            label="RUNTIME"
            placeholder="minutes"
            errorMessage={errors.runtime?.message}
            {...register('runtime', {
              required: 'Required',
            })}
          />
          <Textarea
            label="OVERVIEW"
            placeholder="overview"
            errorMessage={errors.overview?.message}
            {...register('overview', {
              required: 'Required',
            })}
          />
        </FlexWrapper>

        <FlexFooter>
          <InputButton plain type="reset" value="RESET" />
          <InputButton type="submit" value="SUBMIT" />
        </FlexFooter>
      </form>
    </Modal>
  )
}

export default AddOrEditMovieModal
