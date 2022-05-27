import { ReactElement } from 'react'
import styled from 'styled-components'

const Image = styled.img`
  width: 100%;
  height: auto;
`

type MainTileProps = {
  title: string
  imageUrl: string
  reverse?: boolean
  readonly children: ReactElement
}
export const MainTile = ({ children, reverse, title, imageUrl }: MainTileProps) => {
  return (
    <div className='mx-auto'>
      <div className='text-center mb-5'>
        <h2>{title}</h2>
      </div>
      <div className={'row' + (reverse == true ? ' flex-row-reverse' : '')}>
        <div className='col-md-6'>
          <div className='ratio ratio-1x1 bg-secondary mx-auto' style={{ maxWidth: '400px' }}></div>
        </div>
        <div
          className='col-md-6 d-flex align-items-center mx-auto'
          style={{ maxWidth: '400px', fontSize: '14px' }}
        >
          <div>{children}</div>
        </div>
      </div>
    </div>
  )
}
