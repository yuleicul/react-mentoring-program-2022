import styled from 'styled-components'
import AddMovieButton from './AddMovieButton'
import GenreFilters from './GenreFilters'

import NetflixLogo from '../../common/NetflixLogo'
import SearchBox from './SearchBox'
import SearchResults from './SearchResults'
import SortDropdown from './SortDropdown'
import Footer from './Footer'

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
  return (
    <Wrapper>
      <div className="header">
        <div className="logoRow">
          <NetflixLogo />
          <AddMovieButton />
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
    </Wrapper>
  )
}

export default HomePage
