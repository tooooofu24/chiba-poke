import type { NextPage } from 'next'
import Head from 'next/head'
import { ReactElement } from 'react'
import styled from 'styled-components'
import { CarouselComponent } from '../components/Carousel'
import { GroupTile } from '../components/GroupTile'
import { MainTile } from '../components/MainTile'
import { NavigationBar } from '../components/NavigationBar'
import { QandA } from '../components/QandA'
import { Twitter } from '../components/Twitter'
const MainTileWrapper = styled.div`
  margin-top: 1rem;
`
const GroupTileWrapper = ({ children }: { children: ReactElement }) => {
  return <div className='col-lg-4 col-sm-6 col-12'>{children}</div>
}
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ちばポケ - 千葉大学のポケモンサークル</title>
        <meta name='description' content='ちばポケの公式サイトです。' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='mx-auto' style={{ maxWidth: '1200px' }}>
        <NavigationBar />
        <section className='row' style={{ paddingTop: '5rem' }}>
          <div className='col-md-8'>
            <CarouselComponent />
          </div>
          <div className='col-md-4'>
            <Twitter />
          </div>
        </section>
        <section className='mt-4'>
          <MainTileWrapper>
            <MainTile title='ちばポケとは?' imageUrl='aaa'>
              <span>
                「エンジョイ勢からガチ勢まで」をモットーに活動する千葉大生限定のポケモンサークルです。
                <br />
                たとえば、「ポケモンのゲームはダイヤモンドパールまでやっていたけど、最近のはわかんない!」「ポケモンGOはやってるけど、最近のゲームはわからない!」という方でも大歓迎!
              </span>
            </MainTile>
          </MainTileWrapper>
          <MainTileWrapper>
            <MainTile title='サークル員Aの話' imageUrl='aaa' reverse={true}>
              <span>
                自分は受験前まではポケットモンスターソードをプレイしていましたが、受験勉強を機に、
                いったんポケモンを卒業しました。
                <br />
                だけど、ちばポケの存在を知って入サーしてみて、最新作をやっていないけどポケモンは好き、という人にたくさん出会うことができ、友達が出来
                ました!(当時、最新作のポケットモンスターレジェンズアルセウスが発売されていました。)
              </span>
            </MainTile>
          </MainTileWrapper>
          <MainTileWrapper>
            <MainTile title='創設者の話' imageUrl='aaa'>
              <span>
                私は小学生の頃に、千葉大学のポケモンサークルがポケモンサンデー(ポケモンスマッシュだったかもしれない)という番組で、東大ポケサーなどと、クイズバトルをしているのを見ました。その時から、千葉大に入ったら絶対にポケモンサークルに入ってやる!と決意していました。しかし、実際に千葉大に入ってみると、もとからあったポケモンサークル(PCL)の活動は不明の状態でした。おそらくコロナの影響だといわれていますが、真相は定かではありませんでした。
              </span>
            </MainTile>
          </MainTileWrapper>
        </section>
        <section style={{ marginTop: '100px' }} className='row justify-content-center'>
          <GroupTileWrapper>
            <GroupTile
              imageUrl=''
              title='シリーズゲーム班'
              content='ポケットモンスター赤・緑などの、シリーズ作と呼ばれるゲームを扱う班。 主に、ポケモンのゲーム大会等を行う。 ガチ勢の大会から、托卵杯(ポケモンのタマゴを無作為に配って、配られたポケモンを育てて戦う、エンジョイ勢でも楽しめる企画)など、様々な企画を考えている。'
            ></GroupTile>
          </GroupTileWrapper>
          <GroupTileWrapper>
            <GroupTile
              imageUrl=''
              title='スマホゲーム班'
              content='ポケモンGOやポケモンユナイトなどのスマホゲームを扱う班。無料でできるゲームも多いため、様々な熱量の人が参加し企画はいつも盛り上がる。 ポケモンGOの企画は、対面での企画も行うことがあり、友達作りの場ともなる。'
            ></GroupTile>
          </GroupTileWrapper>
          <GroupTileWrapper>
            <GroupTile
              imageUrl=''
              title='カードゲーム班'
              content='初心者講習会を行うなど、新規の取り込みにも熱意のある班。ポケモンカードは、ただプレイするだけでなく、イラストや技名にもこだわりを感じるんです......!!ほかのカードゲーム(デュエマやヴァンガード)をやっていた人も多く、たくさんの人が楽しんでいます。'
            ></GroupTile>
          </GroupTileWrapper>
          <GroupTileWrapper>
            <GroupTile
              imageUrl=''
              title='エンジョイ班'
              content='ポケモンのことをあまり知らない人でも楽しめたり、他のコンテンツを扱わない、誰でも参加しやすい企画を考えたりしている班。ポケモンクイズ大会や推しポケ自慢大会など、オタクが喜ぶ大会が行われることもある。聞いているだけでも楽しい、ちばポケの看板ともいえる班'
            ></GroupTile>
          </GroupTileWrapper>
          <GroupTileWrapper>
            <GroupTile
              imageUrl=''
              title='創作班'
              content='千葉大は創作活動をしている人が多い......!!しかも上手い......!! 不定期でイラストを投稿したり、粘土でフィギュアを創ったりしているかなりオタッキー な班。とても楽しそうだし、実際にイラストの描き方とかを教えてくれることもあるかも。 しかしそれは、沼への入り口...... ちばポケのツイッターアイコンやヘッダーは創作班の代物なので、実質ちばポケの神。'
            ></GroupTile>
          </GroupTileWrapper>
        </section>
        <section style={{ marginTop: '100px' }} className='w-100'>
          <QandA />
        </section>
        <section style={{ marginTop: '100px' }}></section>
      </main>
    </>
  )
}

export default Home
