import Head from 'next/head'
import Image from 'next/image'
import data from '../data.json' assert {type: 'json'}
import Table from '../components/Table'
import Header from '../components/Header'
import arrow from '../public/arrow.png'
import Legend from '../components/Legend'
import useRouter from 'next/router'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className='Home'>
      <Head>
        <title>Atomic Kicks</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Table filter={0} />
        <Image src={arrow} width={200} height={35} alt={'Arrow'} style={{margin: 'auto'}} />
        <div style={{width: 'fit-content', margin: 'auto'}}>Sorted by:
          <ul>
            <li>Size (decreasing)</li>
            <li>Price (increasing)</li>
          </ul>
        </div>
        <Legend />
      </main>
      <Footer />
    </div>
  )
}
