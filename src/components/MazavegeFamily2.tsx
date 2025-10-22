'use client'

import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper'
import { useLanguage } from '@/contexts/LanguageContext'

export default function MazavegeFamily() {
  const { t, language } = useLanguage()

  const drinks = [
    { topTitle: { JP: '冷奴', EN: 'Hiyayakko' }, bottomTitle: { JP: 'トッピングとして使用', EN: 'Use as a topping' }, image: 'i1.jpg' },
    { topTitle: { JP: 'めかぶ', EN: 'Mekabu' }, bottomTitle: { JP: '海藻と混ぜる', EN: 'Mix with seaweed' }, image: 'i2.jpg' },
    { topTitle: { JP: '納豆', EN: 'Natto' }, bottomTitle: { JP: '一緒に混ぜる', EN: 'Mix together' }, image: 'i3.jpg' },
    { topTitle: { JP: '野菜ディップ', EN: 'Vegetable Dip' }, bottomTitle: { JP: '味噌ディップに混ぜる', EN: 'Mix into miso dip' }, image: 'i4.jpg' },
    { topTitle: { JP: 'ポテトサラダ', EN: 'Potato Salad' }, bottomTitle: { JP: 'サラダに混ぜる', EN: 'Mix into salad' }, image: 'i5.jpg' },
    { topTitle: { JP: '唐揚げ', EN: 'Fried Chicken' }, bottomTitle: { JP: '塩と混ぜる', EN: 'Mix with salt' }, image: 'i6.jpg' },
    { topTitle: { JP: 'エビマヨ', EN: 'Shrimp with Mayo' }, bottomTitle: { JP: 'ソースに混ぜる', EN: 'Mix into sauce' }, image: 'i7.jpg' },
    { topTitle: { JP: 'お茶漬け', EN: 'Ochazuke' }, bottomTitle: { JP: 'だしに混ぜる', EN: 'Mix into broth' }, image: 'i8.jpg' },
  ]

  return (
    <section id="mazavege-family" className="py-24 relative overflow-hidden">
      <div id="s2" className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto space-y-8">
          <ScrollAnimationWrapper disabled={true}>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl px-6 md:px-20 py-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              <div className="flex items-center justify-center gap-3 md:gap-6 my-6">
                <img src="/mark.png" alt="Mother Vegetable Icon" className="w-12 md:w-20 h-auto" />
                <div>
                  <h2 className="text-base md:text-4xl lg:text-5xl font-bold mb-3 md:mb-6 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                    {t({
                      JP: 'Izakaya menu × Achieve',
                      EN: 'Izakaya menu × Achieve'
                    })}
                  </h2>
                  <div className="w-32 md:w-40 lg:w-48 h-1.5 bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto rounded-full mt-3 md:mt-6 opacity-80"></div>
                </div>
              </div>

            {/* 画像グリッド */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-9 mt-12">
              {drinks.map((drink, index) => (
                <div key={index} className="flex flex-col">
                  <div className="items-baseline gap-2 mb-3">
                    <p className="text-white text-left text-base md:text-lg font-semibold">{drink.topTitle[language]}</p>
                    <p className="text-green-400 text-left text-xs md:text-sm font-semibold">{drink.bottomTitle[language]}</p>
                  </div>
                  <img
                    src={`/${drink.image}`}
                    alt={`${drink.topTitle[language]} - ${drink.bottomTitle[language]}`}
                    className="w-full h-auto shadow-lg"
                  />
                </div>
              ))}
            </div>
            </div>
          </ScrollAnimationWrapper>
          {/* ロゴ画像 */}
          <div className="flex justify-center mt-12">
            <img src="/mazavege_logo_midori.png" alt="Mazavege Logo" className="h-16 w-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}