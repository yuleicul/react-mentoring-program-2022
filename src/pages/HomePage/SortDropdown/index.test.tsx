import renderer from 'react-test-renderer'
import SortDropdown from '.'

it('renders correctly', () => {
  const tree = renderer
    .create(
      <SortDropdown defaultValue="release_date" onChange={() => undefined} />
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
