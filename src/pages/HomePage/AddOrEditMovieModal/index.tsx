import { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import Input, { Wrapper as InputWrapper } from '../../../common/Input'
import InputButton from '../../../common/InputButton'
import Modal from '../../../common/Modal'
import Selector, { Wrapper as SelectorWrapper } from '../../../common/Selector'
import Textarea from '../../../common/Textarea'
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
  const defaultValues = useMemo(
    () =>
      props.data && {
        title: props.data.title,
        release_date: props.data.release_date,
        poster_path: props.data.poster_path,
        vote_average: props.data.vote_average,
        genres: props.data.genres.slice(0, 1),
        runtime: props.data.runtime,
        overview: props.data.overview,
        id: props.data.id,
      },
    [props.data]
  )
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Movie>({
    defaultValues: defaultValues,
  })

  console.log('error', errors)
  console.log(watch())

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
              pattern: {
                value:
                  // eslint-disable-next-line no-useless-escape
                  /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/,
                message: 'Must be a valid URL',
              },
            })}
          />
          <Input
            type="number"
            label="RATING"
            placeholder="7.8"
            errorMessage={errors.vote_average?.message}
            {...register('vote_average', {
              valueAsNumber: true,
              required: 'Required',
              min: {
                value: 0,
                message: 'Min number is 0',
              },
              max: {
                value: 10,
                message: 'Max number is 10',
              },
            })}
          />
          <Selector
            label="GENRE"
            placeholder="Select Genre"
            errorMessage={errors.genres?.message}
            {...register('genres', {
              required: 'Required',
              setValueAs: (value) =>
                typeof value === 'string' ? [value] : value,
            })}
          />
          <Input
            type="number"
            label="RUNTIME"
            placeholder="minutes"
            errorMessage={errors.runtime?.message}
            {...register('runtime', {
              valueAsNumber: true,
              required: 'Required',
              min: {
                value: 0,
                message: 'Min number is 0',
              },
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
