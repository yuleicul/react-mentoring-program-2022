import styled from 'styled-components'
import { useEffect, useState } from 'react'

import AddMovieButton from './AddMovieButton'
import GenreFilters from './GenreFilters'
import SearchBox from './SearchBox'
import SearchResults from './SearchResults'
import SortDropdown from './SortDropdown'
import Footer from './Footer'
import AddOrEditMovieModal from './AddOrEditMovieModal'
import DeleteMovieModal from './DeleteMovieModal'
import SuccessModal from './SuccessModal'

import NetflixLogo from '../../common/NetflixLogo'
import { getMovieList, Movie } from '../../apis/movie'

const Wrapper = styled.div`
  > .header {
    height: 396;
    background-image: url(/assets/header.png);
    background-repeat: no-repeat;
    background-size: cover;
    padding: 20 60;
    margin-bottom: 10;
    > .logoRow {
      display: flex;
      justify-content: space-between;
      margin-bottom: 35;
    }
  }

  > .content {
    background-color: #232323;
    padding: 0 60;
    > .filters {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 60;
      border-bottom: 2px solid #424242;
    }
  }
`

const HomePage: React.FC = () => {
  const [isAddOrEditModalVisible, setAddOrEditModalVisible] = useState(false)
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false)
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false)

  const [searchResults, setSearchResults] = useState<Movie[]>()
  const [editedMovie, setEditedMovie] = useState<Movie>()

  const handleClickAdd = () => {
    setAddOrEditModalVisible(true)
  }

  const handleEdit = (data: Movie) => {
    setEditedMovie(data)
    setAddOrEditModalVisible(true)
  }

  useEffect(() => {
    setSearchResults(getMovieList())
  }, [])

  return (
    <Wrapper>
      <div className="header">
        <div className="logoRow">
          <NetflixLogo />
          <AddMovieButton onClick={handleClickAdd} />
        </div>
        <SearchBox />
      </div>

      <div className="content">
        <div className="filters">
          <GenreFilters />
          <SortDropdown />
        </div>

        <SearchResults
          onEdit={handleEdit}
          onDelete={() => setIsDeleteModalVisible(true)}
          data={searchResults}
        />
      </div>

      <Footer />

      {/* Modals */}
      {isAddOrEditModalVisible && (
        <AddOrEditMovieModal
          onClose={() => setAddOrEditModalVisible(false)}
          onSubmit={() => {
            setAddOrEditModalVisible(false)
            setIsSuccessModalVisible(true)
          }}
          data={editedMovie}
        />
      )}

      {isDeleteModalVisible && (
        <DeleteMovieModal onClose={() => setIsDeleteModalVisible(false)} />
      )}

      {isSuccessModalVisible && (
        <SuccessModal onClose={() => setIsSuccessModalVisible(false)} />
      )}
    </Wrapper>
  )
}

export default HomePage