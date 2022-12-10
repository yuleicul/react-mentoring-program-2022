import styled from 'styled-components'
import InputButton from '../../../common/InputButton'
import Modal from '../../../common/Modal'
import { useDeleteMovie } from '../../../hooks/mutation'
import { Movie } from '../../../store/moviesSlice'

const FlexFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 60;
`
interface DeleteMovieModalProps {
  id: Pick<Movie, 'id'>
  onClose: () => void
  onSuccess: () => void
}

const DeleteMovieModal: React.FC<DeleteMovieModalProps> = ({
  id,
  onClose,
  onSuccess,
}) => {
  const [mutate] = useDeleteMovie({
    onSuccess: () => {
      onClose && onClose()
      onSuccess && onSuccess()
    },
  })

  return (
    <Modal title="DELETE MOVIE" width={686} onClose={onClose}>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          mutate(id)
        }}
      >
        <div className="text">Are you sure you want to delete this movie?</div>
        <FlexFooter>
          <InputButton type="submit" value="CONFIRM" />
        </FlexFooter>
      </form>
    </Modal>
  )
}

export default DeleteMovieModal
