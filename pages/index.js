import Head from 'next/head'
import Image from 'next/image'
import HomeHeader from '../components/Home/HomeHeader'
import MailMe from '../components/Home/MailMe'
import ExperienceBanner from '../components/Home/ExperienceBanner'
import AboutMeBanner from '../components/Home/AboutMeBanner'
export default function Home() {
  return (
    <div>
      <HomeHeader />
      <MailMe />
      <ExperienceBanner />
      <AboutMeBanner />
      <p className="text-red-400">hello</p>
      
    </div>
  )
}
