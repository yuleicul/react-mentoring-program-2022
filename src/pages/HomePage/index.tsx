import styled from 'styled-components'

import { useState } from 'react'
import AddMovieButton from './AddMovieButton'
import GenreFilters from './GenreFilters'
import SearchBox from './SearchBox'
import SearchResults from './SearchResults'
import SortDropdown from './SortDropdown'
import Footer from './Footer'
import AddMovieModal from './AddMovieModal'

import NetflixLogo from '../../common/NetflixLogo'

const Wrapper = styled.div`
  .header {
    height: 396;
    background-image: url(/assets/header.png);
    background-repeat: no-repeat;
    background-size: cover;
    padding: 20 60;
    margin-bottom: 10;
    .logoRow {
      display: flex;
      justify-content: space-between;
      margin-bottom: 35;
    }
  }

  .content {
    background-color: #232323;
    padding: 0 60;
    .filters {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 60;
      border-bottom: 2px solid #424242;
    }
  }
`

const HomePage: React.FC = () => {
  const [isAddMovieModalVisible, setIsAddMovieModalVisible] = useState(false)

  const handleClick = () => {
    setIsAddMovieModalVisible(true)
  }
  return (
    <Wrapper>
      <div className="header">
        <div className="logoRow">
          <NetflixLogo />
          <AddMovieButton onClick={handleClick} />
        </div>
        <SearchBox />
      </div>

      <div className="content">
        <div className="filters">
          <GenreFilters />
          <SortDropdown />
        </div>

        <SearchResults />
      </div>

      <Footer />

      {/* {isAddMovieModalVisible && <AddMovieModal />} */}
      <AddMovieModal />
    </Wrapper>
  )
}

export default HomePage
