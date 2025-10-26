'use client'

import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Header() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <header className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-md border-b border-green-500/20" style={{ zIndex: 1100 }}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/logo_gr.png"
              alt="MOTHER VEGETABLE"
              width={200}
              height={200}
              className="w-[50px] h-auto  sm:w-[80px] md:w-[120px] "
            />
          </div>

          {/* Navigation Menu */}
          <nav className="flex items-center justify-between w-full max-w-[240px] sm:max-w-[470px] ml-0 sm:ml-4 md:space-x-2 md:justify-start md:w-auto md:max-w-none">

            <button
              onClick={() => document.getElementById('drink')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-1 sm:px-2 md:px-4 py-1.5 sm:py-2 hover:opacity-80 transition-all duration-300"
            >
              <Image
                src="/htu2.png"
                alt="How to use"
                width={80}
                height={30}
                className="w-auto md:h-[30px]"
              />
            </button>
            <button
              onClick={() => document.getElementById('cook')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-1 sm:px-2 md:px-4 py-1.5 sm:py-2 hover:opacity-80 transition-all duration-300"
            >
              <Image
                src="/htu.png"
                alt="How to use"
                width={80}
                height={30}
                className="w-auto md:h-[30px]"
              />
            </button>
          <button
              onClick={() => setLanguage(language === 'EN' ? 'JP' : 'EN')}
              className="px-1 sm:pl-4 sm:pr-2 md:px-4 py-1.5 sm:py-2 text-[8px] sm:text-xs md:text-sm text-[#4ade80] hover:text-green-600 transition-all duration-300 border border-gray-600 rounded-md"
            >
              {language === 'EN' ? 'EN' : 'JP'}
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}

