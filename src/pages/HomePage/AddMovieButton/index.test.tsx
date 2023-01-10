import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import AddMovieButton from '.'
import { renderWithProviders } from '../../../test/test-utils'

describe('AddMovieButton', () => {
  it('renders right text', () => {
    const { getByRole } = renderWithProviders(
      <AddMovieButton onClick={() => undefined} />
    )

    expect(getByRole('button')).toHaveTextContent('+ ADD MOVIE')
  })

  it('calls handler once on click', async () => {
    const handler = jest.fn()
    const { getByRole } = renderWithProviders(
      <AddMovieButton onClick={handler} />
    )

    await userEvent.click(getByRole('button'))

    expect(handler).toHaveBeenCalledTimes(1)
  })
})
