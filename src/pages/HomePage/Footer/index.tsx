import styled from 'styled-components'
import NetflixLogo from '../../../common/NetflixLogo'

const Wrapper = styled.div`
  height: 70;
  background-color: #424242;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <NetflixLogo />
    </Wrapper>
  )
}

export default Footer
