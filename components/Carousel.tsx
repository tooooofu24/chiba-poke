import type { FC } from 'react'
import { Carousel } from 'react-bootstrap'
import styled from 'styled-components'

const Image = styled.img`
  width: 100%;
  height: auto;
`

export const CarouselComponent: FC = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <div className='ratio ratio-16x9 bg-secondary text-white'>
          <div className='row px-3 py-5'>
            <div className='col-8 d-flex flex-column'>
              <div className='fs-5'>ちばポケとは??</div>
              <div className='h-100 d-flex align-items-center'>
                「エンジョイ勢からガチ勢まで」をモットーに活動する千葉大生限定のポケモンサークル
                <br />
                最新ゲームをやってなくても大丈夫!
                <br />
                ポケモンというコンテンツを通してタノシイ大学生活を送ろう!
              </div>
            </div>
            <div className='col-4 d-flex align-items-end'>
              <Image src='/svg/cheer.svg' alt='cheer' />
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className='ratio ratio-16x9 bg-secondary text-white'>
          <div className='row px-3 py-5'>
            <div className='col-8 d-flex flex-column'>
              <div className='fs-5'>ちばポケとは??</div>
              <div className='h-100 d-flex align-items-center'>
                「エンジョイ勢からガチ勢まで」をモットーに活動する千葉大生限定のポケモンサークル
                <br />
                最新ゲームをやってなくても大丈夫!
                <br />
                ポケモンというコンテンツを通してタノシイ大学生活を送ろう!
              </div>
            </div>
            <div className='col-4 d-flex align-items-end'>
              <Image src='/svg/cheer.svg' alt='cheer' />
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className='ratio ratio-16x9 bg-secondary text-white'>
          <div className='row px-3 py-5'>
            <div className='col-8 d-flex flex-column'>
              <div className='fs-5'>ちばポケとは??</div>
              <div className='h-100 d-flex align-items-center'>
                「エンジョイ勢からガチ勢まで」をモットーに活動する千葉大生限定のポケモンサークル
                <br />
                最新ゲームをやってなくても大丈夫!
                <br />
                ポケモンというコンテンツを通してタノシイ大学生活を送ろう!
              </div>
            </div>
            <div className='col-4 d-flex align-items-end'>
              <Image src='/svg/cheer.svg' alt='cheer' />
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  )
}
