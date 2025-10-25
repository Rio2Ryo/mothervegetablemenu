'use client'

import { useEffect, useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Milestones from '@/components/Milestones'
import ProductLineup from '@/components/ProductLineup'
import MazavegeFamily from '@/components/MazavegeFamily'
import MazavegeFamily2 from '@/components/MazavegeFamily2'
import MazavegeFamily3 from '@/components/MazavegeFamily3'
import MazavegeFamily4 from '@/components/MazavegeFamily4'
import MazavegeFamily5 from '@/components/MazavegeFamily5'
import MazavegeFamily6 from '@/components/MazavegeFamily6'
import MazavegeFamily7 from '@/components/MazavegeFamily7'
import MazavegeFamily8 from '@/components/MazavegeFamily8'
import MazavegeFamily9 from '@/components/MazavegeFamily9'
import MazavegeFamily10 from '@/components/MazavegeFamily10'
import MazavegeFamily11 from '@/components/MazavegeFamily11'
import MazavegeFamily12 from '@/components/MazavegeFamily12'
import MazavegeFamily13 from '@/components/MazavegeFamily13'
import MazavegeFamily14 from '@/components/MazavegeFamily14'
import MazavegeFamily15 from '@/components/MazavegeFamily15'
import MazavegeFamily16 from '@/components/MazavegeFamily16'
import MazavegeFamily17 from '@/components/MazavegeFamily17'
import MazavegeFamily18 from '@/components/MazavegeFamily18'
import MazavegeFamily19 from '@/components/MazavegeFamily19'
import MazavegeFamily20 from '@/components/MazavegeFamily20'
import MazavegeFamily21 from '@/components/MazavegeFamily21'
import MazavegeFamily22 from '@/components/MazavegeFamily22'
import MazavegeFamily23 from '@/components/MazavegeFamily23'
import MazavegeFamily24 from '@/components/MazavegeFamily24'
import ProjectOverview from '@/components/ProjectOverview'
import Footer from '@/components/Footer'
import LoadingScreen from '@/components/LoadingScreen'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {isLoading && <LoadingScreen />}
      <main className="min-h-screen text-white relative">
        <Header />
        <Hero />
        <MazavegeFamily />
        <MazavegeFamily10 />
        <MazavegeFamily11 />
        <MazavegeFamily12 />
        <MazavegeFamily13 />
        <MazavegeFamily14 />
        <MazavegeFamily15 />
        <MazavegeFamily16 />
        <MazavegeFamily17 />
        <MazavegeFamily18 />
        <MazavegeFamily19 />
        <MazavegeFamily20 />
        <MazavegeFamily21 />
        <MazavegeFamily22 />
        <MazavegeFamily23 />
        <MazavegeFamily24 />
      </main>
    </>
  )
}
