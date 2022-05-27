import { ReactElement } from 'react'
import styled from 'styled-components'

type GroupTileProps = {
  title: string
  content: string
  imageUrl: string
}
export const GroupTile = ({ title, content, imageUrl }: GroupTileProps) => {
  return (
    <div>
      <div className='position-relative'>
        <div className='ratio ratio-1x1 bg-secondary'></div>
        <div className='position-absolute top-50 start-50 translate-middle fw-bold'>{title}</div>
      </div>
      <div>
        <span style={{ fontSize: '14px' }}>{content} </span>
      </div>
    </div>
  )
}
