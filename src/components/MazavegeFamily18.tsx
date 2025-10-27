'use client'

import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper'
import { useLanguage } from '@/contexts/LanguageContext'

export default function MazavegeFamily() {
  const { t, language } = useLanguage()

  return (
    <section id="mazavege-family" className="py-24 relative overflow-hidden">
      <div id="s9" className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      <div className="relative z-10 justify-center mb-8">
        <img src="/htu.png" alt="HTU" className="w-full max-w-60 md:max-w-96 h-auto mx-auto" />
        <div className="w-48 md:w-72 h-1.5 bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto rounded-full mt-4 opacity-80"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto space-y-8">
          <ScrollAnimationWrapper disabled={true}>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl px-6 md:px-12 py-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              {/* タイトル */}
              <h2 className="text-white text-xl md:text-3xl font-bold mb-8 text-left">
                {t({ JP: "ラタトゥイユ", EN: "Ratatouille" })}
              </h2>

              {/* 画像とテキストのブロック */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* 画像 */}
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <img
                    src="/f5.jpg"
                    alt="Ratatouille"
                    className="w-full h-auto"
                  />
                </div>

                {/* テキストブロック */}
                <div className="w-full md:w-2/3 space-y-4">
                  <h3 className="text-green-400 text-sm md:text-2xl font-bold text-center">
                    {t({ JP: "煮込み料理の仕上げにAchieveを混ぜる", EN: "Mix Achieve in as a finishing touch for simmered dishes" })}
                  </h3>
                  {/* 横並びの2つのセクション */}
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* 薄い色合いのセクション */}
                    <div className="flex-1 text-white space-y-2 text-xs md:text-base">
                      <p className="font-semibold">{t({ JP: "【うっすらと色をつけたい場合の目安量】", EN: "【Recommended amount for a light tint of color】" })}</p>
                      <p>{t({ JP: "①ラタトゥイユに必要な材料　1人前", EN: "①Ingredients for 1 serving" })}</p>
                      <p>{t({ JP: "②", EN: "②" })}Achieve  <span style={{ color: '#4ade80' }}>{t({ JP: "1/10本", EN: "1/10 stick" })}</span></p>
                    </div>

                    {/* 濃い色合いのセクション */}
                    <div className="flex-1 text-white space-y-2 text-xs md:text-base">
                      <p className="font-semibold">{t({ JP: "【しっかりと色をつけたい場合の目安量】", EN: "【Recommended amount for a stronger color】" })}</p>
                      <p>{t({ JP: "①ラタトゥイユに必要な材料　1人前", EN: "①Ingredients for 1 serving" })}</p>
                      <p>{t({ JP: "②", EN: "②" })}Achieve  <span style={{ color: '#4ade80' }}>{t({ JP: "1/3本", EN: "1/3 stick" })}</span></p>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm mt-4">{t({ JP: "※完成後に仕上げとしてAchieveを混ぜて使用するのがおすすめです。", EN: "*It is recommended to mix Achieve in as a finishing touch after the dish is completed." })}</p>
                </div>
              </div>
            </div>
            <div className="u2 mt-10 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl px-6 md:px-12 py-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              {/* タイトル */}
              <h2 className="text-white text-xl md:text-3xl font-bold mb-8 text-left">
                {t({ JP: "キッシュ", EN: "Quiche" })}
              </h2>

              {/* 画像とテキストのブロック */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* 画像 */}
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <img
                    src="/f6.jpg"
                    alt="Quiche"
                    className="w-full h-auto"
                  />
                </div>

                {/* テキストブロック */}
                <div className="w-full md:w-2/3 space-y-4">
                  <h3 className="text-green-400 text-sm md:text-2xl font-bold text-center">
                    {t({ JP: "具材にAchieveを混ぜ込む", EN: "Mix Achieve into the filling" })}
                  </h3>
                  {/* 横並びの2つのセクション */}
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* 薄い色合いのセクション */}
                    <div className="flex-1 text-white space-y-2 text-xs md:text-base">
                      <p className="font-semibold">{t({ JP: "【うっすらと色をつけたい場合の目安量】", EN: "【Recommended amount for a light tint of color】" })}</p>
                      <p>{t({ JP: "①キッシュに必要な材料", EN: "①Ingredients for Quiche" })}</p>
                      <p>{t({ JP: "②", EN: "②" })}Achieve  <span style={{ color: '#4ade80' }}>{t({ JP: "1/10本", EN: "1/10 stick" })}</span></p>
                      <p className="text-xs md:text-sm">{t({ JP: "(例：タルト生地に流し込む具材に混ぜた場合)", EN: "(e.g., when mixed into the filling poured into the tart crust)" })}</p>
                    </div>

                    {/* 濃い色合いのセクション */}
                    <div className="flex-1 text-white space-y-2 text-xs md:text-base">
                      <p className="font-semibold">{t({ JP: "【しっかりと色をつけたい場合の目安量】", EN: "【Recommended amount for a stronger color】" })}</p>
                      <p>{t({ JP: "①キッシュに必要な材料　1人前", EN: "①Ingredients for Quiche" })}</p>
                      <p>{t({ JP: "②", EN: "②" })}Achieve  <span style={{ color: '#4ade80' }}>{t({ JP: "1本", EN: "1 stick" })}</span></p>
                      <p className="text-xs md:text-sm">{t({ JP: "(例：タルト生地に流し込む具材に混ぜた場合)", EN: "(e.g., when mixed into the filling poured into the tart crust)" })}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="u3 mt-10 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl px-6 md:px-12 py-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              {/* タイトル */}
              <h2 className="text-white text-xl md:text-3xl font-bold mb-8 text-left">
                {t({ JP: "サーモンタルタル", EN: "Salmon Tartare" })}
              </h2>

              {/* 画像とテキストのブロック */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* 画像 */}
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <img
                    src="/f7.jpg"
                    alt="Salmon Tartare"
                    className="w-full h-auto"
                  />
                </div>

                {/* テキストブロック */}
                <div className="w-full md:w-2/3 space-y-4">
                  <h3 className="text-green-400 text-sm md:text-2xl font-bold text-center">
                    {t({ JP: "サーモンやアボカドにAchieveを混ぜる", EN: "Mix Achieve into the salmon and avocado" })}
                  </h3>
                  {/* 横並びの2つのセクション */}
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* 薄い色合いのセクション */}
                    <div className="flex-1 text-white space-y-2 text-xs md:text-base">
                      <p className="font-semibold">{t({ JP: "【うっすらと色をつけたい場合の目安量】", EN: "【Recommended amount for a light tint of color】" })}</p>
                      <p>{t({ JP: "①サーモンのタルタルに必要な材料", EN: "①Ingredients for Salmon Tartare" })}</p>
                      <p>{t({ JP: "②", EN: "②" })}Achieve  <span style={{ color: '#4ade80' }}>{t({ JP: "1/10本", EN: "1/10 stick" })}</span></p>
                    </div>

                    {/* 濃い色合いのセクション */}
                    <div className="flex-1 text-white space-y-2 text-xs md:text-base">
                      <p className="font-semibold">{t({ JP: "【しっかりと色をつけたい場合の目安量】", EN: "【Recommended amount for a stronger color】" })}</p>
                      <p>{t({ JP: "①サーモンのタルタルに必要な材料", EN: "①Ingredients for Salmon Tartare" })}</p>
                      <p>{t({ JP: "②", EN: "②" })}Achieve  <span style={{ color: '#4ade80' }}>{t({ JP: "1/2本", EN: "1/2 stick" })}</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl px-6 md:px-12 py-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              {/* タイトル */}
              <h2 className="text-white text-xl md:text-3xl font-bold mb-8 text-left">
                {t({ JP: "白身魚のムニエル", EN: "White Fish Meunière" })}
              </h2>

              {/* 画像とテキストのブロック */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* 画像 */}
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <img
                    src="/f8.jpg"
                    alt="White Fish Meunière"
                    className="w-full h-auto"
                  />
                </div>

                {/* テキストブロック */}
                <div className="w-full md:w-2/3 space-y-4">
                  <h3 className="text-green-400 text-sm md:text-2xl font-bold text-center">
                    {t({ JP: "ソースにAchieveを混ぜる", EN: "Mix Achieve into the sauce" })}
                  </h3>
                  {/* 横並びの2つのセクション */}
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* 薄い色合いのセクション */}
                    <div className="flex-1 text-white space-y-2 text-xs md:text-base">
                      <p className="font-semibold">{t({ JP: "【うっすらと色をつけたい場合の目安量】", EN: "【Recommended amount for a light tint of color】" })}</p>
                      <p>{t({ JP: "①ムニエルに必要な材料　1人前", EN: "①Ingredients for 1 serving" })}</p>
                      <p>{t({ JP: "②", EN: "②" })}Achieve  <span style={{ color: '#4ade80' }}>{t({ JP: "1/10本", EN: "1/10 stick" })}</span></p>
                    </div>

                    {/* 濃い色合いのセクション */}
                    <div className="flex-1 text-white space-y-2 text-xs md:text-base">
                      <p className="font-semibold">{t({ JP: "【しっかりと色をつけたい場合の目安量】", EN: "【Recommended amount for a stronger color】" })}</p>
                      <p>{t({ JP: "①ムニエルに必要な材料　1人前", EN: "①Ingredients for 1 serving" })}</p>
                      <p>{t({ JP: "②", EN: "②" })}Achieve  <span style={{ color: '#4ade80' }}>{t({ JP: "1/2本", EN: "1/2 stick" })}</span></p>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm mt-4">{t({ JP: "※あらかじめソースに混ぜて用意しておくのがおすすめです。", EN: "*It is recommended to prepare Achieve mixed with sauce." })}</p>
                </div>
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