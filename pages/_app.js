import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return( 
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar/>
      <main className="px-8">
        <Component {...pageProps} />
      </main>
      <Footer/>
      
    </>
  )
}

export default MyApp
