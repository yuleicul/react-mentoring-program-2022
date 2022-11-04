import styled from 'styled-components'

export const Wrapper = styled.div`
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
  visibility: hidden;
`

const WhiteDot = styled.div`
  height: 4;
  width: 4;
  border-radius: 50%;
  background-color: white;
  margin: 4 auto;
`
interface MenuButtonProps {
  onClick: () => void
}

const MenuButton: React.FC<MenuButtonProps> = (props) => {
  return (
    <Wrapper onClick={props.onClick}>
      <WhiteDot />
      <WhiteDot />
      <WhiteDot />
    </Wrapper>
  )
}

export default MenuButton
