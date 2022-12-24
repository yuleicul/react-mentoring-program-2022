import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  gap: 13px;

  > form {
    margin-block-end: 0; // override
    position: relative;
    > select {
      appearance: none; // override
      background-color: transparent; // override
      border: none; // override
      color: white;
      font-size: 16;
      text-transform: uppercase;
      width: 160;
      padding: 5;
      cursor: pointer;
      > option {
        background-color: #232323;
        text-transform: initial;
      }
    }
    /* Triangle */
    &::after {
      content: '';
      border: 6px solid;
      border-color: #f65261;
      border-left-color: transparent;
      border-right-color: transparent;
      border-bottom-color: transparent;
      position: absolute;
      top: 11;
      right: 4;
    }
  }
`

interface DropdownProps {
  defaultValue: string
  onChange: (value: string) => void
}

const Dropdown: React.FC<DropdownProps> = ({ defaultValue, onChange }) => {
  return (
    <Wrapper>
      {/* @ts-ignore */}
      <form onChange={(e) => onChange(e.target.value)}>
        <select name="sortBy" defaultValue={defaultValue}>
          <option value="release_date">Release Date</option>
          <option value="vote_average">Rating</option>
        </select>
      </form>
    </Wrapper>
  )
}

export default Dropdown
