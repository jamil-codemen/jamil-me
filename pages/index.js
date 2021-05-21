import Head from 'next/head'
import Image from 'next/image'
import HomeHeader from '../page-component/Home/HomeHeader'
import MailMe from '../page-component/Home/MailMe'
import ExperienceBanner from '../page-component/Home/ExperienceBanner'
import AboutMeBanner from '../page-component/Home/AboutMeBanner'
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
