import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import WorksSection from "../components/WorksSection";
import TeamSection from "../components/TeamSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="homePage">
        <HeroSection/>
        <AboutSection/>
        <ServicesSection/>
        <WorksSection/>
        <TeamSection/>
      </main>

    </>
  )
}
