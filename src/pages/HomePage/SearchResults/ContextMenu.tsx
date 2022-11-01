import styled from 'styled-components'

const Wrapper = styled.div`
  height: 36;
  width: 36;
  border-radius: 50%;
  background-color: #2a202d;
  position: absolute;
  top: 16;
  right: 14;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.196596);
  padding: 3;
  cursor: pointer;
`

const WhiteDot = styled.div`
  height: 4;
  width: 4;
  border-radius: 50%;
  background-color: white;
  margin: 4 auto;
`

const ContextMenu: React.FC = () => {
  return (
    <Wrapper>
      <WhiteDot />
      <WhiteDot />
      <WhiteDot />
    </Wrapper>
  )
}

export default ContextMenu
