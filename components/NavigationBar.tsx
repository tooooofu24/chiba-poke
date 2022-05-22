import Link from 'next/link'
import type { FC } from 'react'
import styled from 'styled-components'

const StyledA = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: #000;
  font-weight: 500;
  font-size: 20px;
  margin-left: 1rem;
`

export const NavigationBar: FC = () => {
  return (
    <header className='fixed-top'>
      <nav className='p-3 d-flex justify-content-between align-items-center'>
        <div></div>
        <div>
          <Link href='/'>
            <StyledA>トップ </StyledA>
          </Link>
          <StyledA href='https://note.com/chibapoke/followings' target='_blank'>
            活動記録
          </StyledA>
          <Link href='/'>
            <StyledA>Q&A </StyledA>
          </Link>
        </div>
      </nav>
    </header>
  )
}
