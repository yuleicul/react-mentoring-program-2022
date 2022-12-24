import { useRouteError } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div``

export default function NotFoundPage() {
  const error = useRouteError()
  console.error(error)

  return (
    <Wrapper>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        {/* @ts-ignore */}
        <i>{error.statusText || error.message}</i>
      </p>
    </Wrapper>
  )
}
