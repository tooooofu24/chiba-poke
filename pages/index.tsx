import type { NextPage } from 'next'
import Head from 'next/head'
import { CarouselComponent } from '../components/Carousel'
import { NavigationBar } from '../components/NavigationBar'
import { Twitter } from '../components/Twitter'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ちばポケ - 千葉大学のポケモンサークル</title>
        <meta name='description' content='ちばポケの公式サイトです。' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <NavigationBar />
        <section className='row' style={{ paddingTop: '5rem' }}>
          <div className='col-md-8'>
            <CarouselComponent />
          </div>
          <div className='col-md-4'>
            <Twitter />
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
