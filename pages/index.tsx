import type { NextPage } from 'next'
import Head from 'next/head'
import { NavigationBar } from '../components/NavigationBar'

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
      </main>
    </>
  )
}

export default Home
