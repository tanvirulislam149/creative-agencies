import Head from 'next/head'
import Image from 'next/image'
import Banner from '../Components/Banner/Banner'
import CompanyName from '../Components/CompanyName/CompanyName'
import Contact from '../Components/Contact/Contact'
import Feedback from '../Components/Feedback/Feedback'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
import Services from '../Components/Services/Services'
import Works from '../Components/Works/Works'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Creative Agencies</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Banner />
        <CompanyName />
        <Services />
        <Works />
        <Feedback />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}
