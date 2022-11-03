import styled from 'styled-components'
import Form from '../../../common/Form'
import Input from '../../../common/Input'
import Modal from '../../../common/Modal'

const AddMovieModal: React.FC = () => {
  return (
    <Modal title="ADD MOVIE" width={976} onClose={() => 1}>
      <Form>
        <Input label="TITLE" placeholder="Title" />
        {/* <Selector type="date" label="RELEASE DATE" placeholder="Select Date" /> */}
        <Input label="MOVIE URL" placeholder="https://" />
        <Input label="RATING" placeholder="7.8" />
        {/* <Selector type="multiple" label="GENRE" placeholder="Select Genre" /> */}
        <Input label="RUNTIME" placeholder="minutes" />
        <Input textarea label="OVERVIEW" placeholder="overview..." />
      </Form>
    </Modal>
  )
}

export default AddMovieModal
