'use client'

import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper'
import { useLanguage } from '@/contexts/LanguageContext'

export default function MazavegeFamily() {
  const { t, language } = useLanguage()

  const drinks = [
    { topTitle: { JP: 'たまごスープ', EN: 'Egg Drop Soup' }, bottomTitle: { JP: '仕上げに混ぜる', EN: 'Mix as a finishing touch' }, image: 'c1.jpg' },
    { topTitle: { JP: '春雨サラダ', EN: 'Glass Noodle Salad' }, bottomTitle: { JP: '仕上げに混ぜて振りかける', EN: 'Mix in as a finishing touch and sprinkle on top' }, image: 'c2.jpg' },
    { topTitle: { JP: '麻婆豆腐', EN: 'Mapo Tofu' }, bottomTitle: { JP: 'トッピングとして使用', EN: 'Use as a topping' }, image: 'c3.jpg' },
    { topTitle: { JP: '小籠包', EN: 'Xiaolongbao' }, bottomTitle: { JP: 'タレと混ぜる', EN: 'Mix with sauce' }, image: 'c4.jpg' },
    { topTitle: { JP: 'バンバンジー', EN: 'Bang Bang Chicken' }, bottomTitle: { JP: 'タレと混ぜる', EN: 'Mix with sauce' }, image: 'c5.jpg' },
    { topTitle: { JP: 'チャーハン', EN: 'Fried Rice' }, bottomTitle: { JP: '炒める際に仕上げで加える', EN: 'Add in as a finishing touch while stir-frying' }, image: 'c6.jpg' },
    { topTitle: { JP: 'エビチリ', EN: 'Shrimp in Chili Sauce' }, bottomTitle: { JP: 'トッピングとして使用', EN: 'Use as a topping' }, image: 'c7.jpg' },
    { topTitle: { JP: 'チンジャオロース', EN: 'Stir-Fried Green Pepper and Beef' }, bottomTitle: { JP: '仕上げに一緒に炒める', EN: 'Toss together as a finishing touch' }, image: 'c8.jpg' },
  ]

  return (
    <section id="mazavege-family" className="py-24 relative overflow-hidden">
      <div id="s6" className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto space-y-8">
          <ScrollAnimationWrapper disabled={true}>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl px-6 md:px-20 py-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              <div className="flex items-center justify-center gap-3 md:gap-6 my-6">
                <img src="/mark.png" alt="Mother Vegetable Icon" className="w-12 md:w-20 h-auto" />
                <div>
                  <h2 className="text-base md:text-4xl lg:text-5xl font-bold mb-3 md:mb-6 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                    {t({
                      JP: 'Chinese menu × Achieve',
                      EN: 'Chinese menu × Achieve'
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