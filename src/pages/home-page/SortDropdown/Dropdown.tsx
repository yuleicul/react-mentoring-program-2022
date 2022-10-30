import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  gap: 13px;

  .selected {
    color: white;
    font-size: 16;
    text-transform: uppercase;
  }
`

const Triangle = styled.div`
  border: 6px solid;
  border-color: ${(props) => props.theme.color.main};
  border-left-color: transparent;
  border-right-color: transparent;
  border-bottom-color: transparent;
  position: relative;
  top: 6;
`

const Dropdown: React.FC = () => {
  return (
    <Wrapper>
      <div className="selected">Release Date</div>
      <Triangle />
    </Wrapper>
  )
}

export default Dropdown
