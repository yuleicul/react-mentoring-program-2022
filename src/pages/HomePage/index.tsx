import { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'

import AddMovieButton from './AddMovieButton'
import AddOrEditMovieModal from './AddOrEditMovieModal'
import DeleteMovieModal from './DeleteMovieModal'
import Footer from './Footer'
import GenreFilters from './GenreFilters'
import SearchBox from './SearchBox'
import SearchResults from './SearchResults'
import SortDropdown from './SortDropdown'
import SuccessModal from './SuccessModal'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { getMovie } from '../../apis'
import NetflixLogo from '../../common/NetflixLogo'
import { useSaveMovie } from '../../hooks/mutation'
import { useAppDispatch, useAppSelector } from '../../store'
import { fetchMovieList, Movie, selectAll } from '../../store/moviesSlice'
import BackHomeButton from './BackHomeButton'
import headerImage from './header.png'
import MovieDetail from './MovieDetail'

const Wrapper = styled.div`
  > .movieDetail {
    background-color: #232323;
    padding: 35 60;
    margin-bottom: 10;
    > .logoRow {
      display: flex;
      justify-content: space-between;
      margin-bottom: 35;
      > .textLogo {
        color: ${(props) => props.theme.color.main};
        font-size: 20;
        font-weight: 300;
      }
    }
  }

  > .header {
    height: 396;
    background-image: url(${headerImage});
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
  const dispatch = useAppDispatch()
  const searchResult = useAppSelector(selectAll)

  const [isAddOrEditModalVisible, setAddOrEditModalVisible] = useState(false)
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false)
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false)

  const [editedMovie, setEditedMovie] = useState<Movie>()
  const [movieDetail, setMovieDetail] = useState<Movie>()
  const [deletedMovieId, setDeletedMovieId] = useState<Pick<Movie, 'id'>>()

  const navigate = useNavigate()
  const { searchQuery = '' } = useParams()

  const [searchParams, setSearchParams] = useSearchParams({
    sortBy: 'release_date',
  })
  const sortBy = searchParams.get('sortBy') || ''
  const genre = searchParams.get('genre') || ''
  const movieId = searchParams.get('movie') || ''

  useEffect(() => {
    const loadMovie = async () => {
      const movie = await getMovie(Number.parseInt(movieId))
      setMovieDetail(movie)
    }
    loadMovie()
  }, [movieId])

  const [saveMovie] = useSaveMovie({
    onSuccess: () => {
      dispatch(
        fetchMovieList({
          sortBy: sortBy,
          search: searchQuery,
          filter: genre,
        })
      )
      setAddOrEditModalVisible(false)
      setIsSuccessModalVisible(true)
    },
  })

  useEffect(() => {
    dispatch(
      fetchMovieList({
        sortBy: sortBy,
        search: searchQuery,
        filter: genre,
      })
    )
  }, [dispatch, genre, searchQuery, sortBy])

  const handleClickAdd = () => {
    setEditedMovie(undefined)
    setAddOrEditModalVisible(true)
  }

  const handleEdit = (data: Movie) => {
    setEditedMovie(data)
    setAddOrEditModalVisible(true)
  }

  const handleViewDetail = useCallback(
    (movie: Movie) => {
      window.scrollTo(0, 0)
      setSearchParams({ movie: movie.id.toString(), sortBy, genre: genre })
    },
    [genre, setSearchParams, sortBy]
  )

  const handleDelete = useCallback((id: Pick<Movie, 'id'>) => {
    setDeletedMovieId(id)
    setIsDeleteModalVisible(true)
  }, [])

  return (
    <Wrapper>
      {movieDetail ? (
        <div className="movieDetail">
          <div className="logoRow">
            <div className="textLogo">netflixroulette</div>
            <BackHomeButton
              onClick={() =>
                setSearchParams({ movie: '', sortBy, genre: genre })
              }
            />
          </div>
          <MovieDetail data={movieDetail} />
        </div>
      ) : (
        <div className="header">
          <div className="logoRow">
            <NetflixLogo />
            <AddMovieButton onClick={handleClickAdd} />
          </div>
          <SearchBox
            defaultValue={searchQuery}
            onSearch={(keywords) => {
              navigate(`/search/${keywords}?${searchParams}`)
            }}
          />
        </div>
      )}

      <div className="content">
        <div className="filters">
          <GenreFilters
            defaultValue={genre}
            onChange={(value) =>
              setSearchParams({ movie: movieId, sortBy, genre: value })
            }
          />
          <SortDropdown
            defaultValue={sortBy}
            onChange={(value) =>
              setSearchParams({ movie: movieId, sortBy: value, genre })
            }
          />
        </div>

        <SearchResults
          onEdit={handleEdit}
          onDelete={handleDelete}
          data={searchResult.data}
          totalAmount={searchResult.totalAmount}
          onViewDetail={handleViewDetail}
        />
      </div>

      <Footer />

      {/* Modals */}
      {isAddOrEditModalVisible && (
        <AddOrEditMovieModal
          onClose={() => setAddOrEditModalVisible(false)}
          onSubmit={(data) => saveMovie(data)}
          data={editedMovie}
        />
      )}

      {isDeleteModalVisible && deletedMovieId && (
        <DeleteMovieModal
          id={deletedMovieId}
          onClose={() => setIsDeleteModalVisible(false)}
          onSuccess={() => {
            dispatch(
              fetchMovieList({
                sortBy: sortBy,
                search: searchQuery,
                filter: genre,
              })
            )
          }}
        />
      )}

      {isSuccessModalVisible && (
        <SuccessModal onClose={() => setIsSuccessModalVisible(false)} />
      )}
    </Wrapper>
  )
}

export default HomePage
