import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

import NavBar from '../components/navbar.jsx'
import Landing from '../components/landing.jsx'
import AboutMe from '../components/aboutme.jsx'
import Projects from '../components/projects.jsx'
import Blog from '../components/blog.jsx'
import Contact from '../components/contact.jsx'
import Footer from '../components/footer.jsx'
/* */
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Jake LeQuire | Portfolio</title>
        <meta name="description" content="Jake LeQuire - Personal Portfolio" />

        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Josefin+Sans" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Playfair+Display" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className="index-wrapper">
          <NavBar> </NavBar>
          <Landing> </Landing>
          <AboutMe> </AboutMe>
          <Projects> </Projects>
          <Blog> </Blog>
          <Contact> </Contact>
          <Footer> </Footer>
        </div>
      </main>
    </>
  )
}
