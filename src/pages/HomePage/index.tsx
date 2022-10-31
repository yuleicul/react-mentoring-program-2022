import styled from 'styled-components'
import AddMovieButton from './AddMovieButton'
import GenreFilters from './GenreFilters'

import NetflixLogo from './NetflixLogo'
import SearchBox from './SearchBox'
import SearchResults from './SearchResults'
import SortDropdown from './SortDropdown'

const PageContainer = styled.div`
  .content {
    background-color: #232323;
    .filters {
      display: flex;
      justify-content: space-between;
    }
  }
`

const HomePage: React.FC = () => {
  return (
    <PageContainer>
      <div>
        <NetflixLogo />
        <AddMovieButton />
        <SearchBox />
      </div>

      <div className="content">
        <div className="filters">
          <GenreFilters />
          <SortDropdown />
        </div>

        <SearchResults />
      </div>

      <div className="footer"></div>
    </PageContainer>
  )
}

export default HomePage
