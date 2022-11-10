import styled from 'styled-components'
import BackSearchSvg from './back-search-button.svg'

const Wrapper = styled.div`
  cursor: pointer;
`

interface BackHomeButtonProps {
  onClick: () => void
}

const BackHomeButton: React.FC<BackHomeButtonProps> = (props) => {
  return (
    <Wrapper onClick={props.onClick}>
      <BackSearchSvg />
    </Wrapper>
  )
}

export default BackHomeButton
