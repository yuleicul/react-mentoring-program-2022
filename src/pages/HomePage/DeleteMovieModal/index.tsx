import styled from 'styled-components'
import Form from '../../../common/Form'
import Modal from '../../../common/Modal'

interface DeleteMovieModalProps {
  onClose: () => void
}

const DeleteMovieModal: React.FC<DeleteMovieModalProps> = (props) => {
  return (
    <Modal title="DELETE MOVIE" width={686} onClose={props.onClose}>
      <Form buttons={['confirm']}>
        <div className="text">Are you sure you want to delete this movie?</div>
      </Form>
    </Modal>
  )
}

export default DeleteMovieModal
