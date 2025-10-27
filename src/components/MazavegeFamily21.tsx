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
                {t({ JP: "キムチ", EN: "Kimchi" })}
              </h2>

              {/* 画像とテキストのブロック */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* 画像 */}
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <img
                    src="/k1.jpg"
                    alt="Kimchi"
                    className="w-full h-auto"
                  />
                </div>

                {/* テキストブロック */}
                <div className="w-full md:w-2/3 space-y-4">
                  <h3 className="text-green-400 text-sm md:text-2xl font-bold text-center">
                    {t({ JP: "Achieveをふりかける", EN: "Sprinkle Achieve on top" })}
                  </h3>
                  {/* 横並びの2つのセクション */}
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* 薄い色合いのセクション */}
                    <div className="flex-1 text-white space-y-2 text-xs md:text-base">
                      <p className="font-semibold">{t({ JP: "【うっすらと色をつけたい場合の目安量】", EN: "【Recommended amount for a light tint of color】" })}</p>
                      <p>{t({ JP: "①キムチに必要な材料", EN: "①Ingredients for kimchi" })}</p>
                      <p>{t({ JP: "②", EN: "②" })}Achieve  <span style={{ color: '#4ade80' }}>{t({ JP: "1/10本", EN: "1/10 stick" })}</span></p>
                    </div>

                    {/* 濃い色合いのセクション */}
                    <div className="flex-1 text-white space-y-2 text-xs md:text-base">
                      <p className="font-semibold">{t({ JP: "【しっかりと色をつけたい場合の目安量】", EN: "【Recommended amount for a stronger color】" })}</p>
                      <p>{t({ JP: "①キムチに必要な材料", EN: "①Ingredients for kimchi" })}</p>
                      <p>{t({ JP: "②", EN: "②" })}Achieve  <span style={{ color: '#4ade80' }}>{t({ JP: "1/2本", EN: "1/2 stick" })}</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="u2 mt-10 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl px-6 md:px-12 py-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              {/* タイトル */}
              <h2 className="text-white text-xl md:text-3xl font-bold mb-8 text-left">
                {t({ JP: "トッポギ", EN: "Tteokbokki" })}
              </h2>

              {/* 画像とテキストのブロック */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* 画像 */}
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <img
                    src="/k2.jpg"
                    alt="Tteokbokki"
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
                      <p>{t({ JP: "①トッポギに必要な材料　1人前", EN: "①Ingredients for 1 serving" })}</p>
                      <p>{t({ JP: "②", EN: "②" })}Achieve  <span style={{ color: '#4ade80' }}>{t({ JP: "1/10本", EN: "1/10 stick" })}</span></p>
                    </div>

                    {/* 濃い色合いのセクション */}
                    <div className="flex-1 text-white space-y-2 text-xs md:text-base">
                      <p className="font-semibold">{t({ JP: "【しっかりと色をつけたい場合の目安量】", EN: "【Recommended amount for a stronger color】" })}</p>
                      <p>{t({ JP: "①トッポギに必要な材料　1人前", EN: "①Ingredients for 1 serving" })}</p>
                      <p>{t({ JP: "②", EN: "②" })}Achieve  <span style={{ color: '#4ade80' }}>{t({ JP: "1/2本", EN: "1/2 stick" })}</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="u3 mt-10 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl px-6 md:px-12 py-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              {/* タイトル */}
              <h2 className="text-white text-xl md:text-3xl font-bold mb-8 text-left">
                {t({ JP: "キンパ", EN: "Kimbap" })}
              </h2>

              {/* 画像とテキストのブロック */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* 画像 */}
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <img
                    src="/k3.jpg"
                    alt="Kimbap"
                    className="w-full h-auto"
                  />
                </div>

                {/* テキストブロック */}
                <div className="w-full md:w-2/3 space-y-4">
                  <h3 className="text-green-400 text-sm md:text-2xl font-bold text-center">
                    {t({ JP: "Achieveを混ぜたお米で作る", EN: "Make using rice mixed with Achieve" })}
                  </h3>
                  {/* 横並びの2つのセクション */}
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* 薄い色合いのセクション */}
                    <div className="flex-1 text-white space-y-2 text-xs md:text-base">
                      <p className="font-semibold">{t({ JP: "【うっすらと色をつけたい場合の目安量】", EN: "【Recommended amount for a light tint of color】" })}</p>
                      <p>{t({ JP: "①キンパに必要な材料　1人前", EN: "①Ingredients for kimbap" })}</p>
                      <p>{t({ JP: "②", EN: "②" })}Achieve  <span style={{ color: '#4ade80' }}>{t({ JP: "1/10本", EN: "1/10 stick" })}</span></p>
                    </div>

                    {/* 濃い色合いのセクション */}
                    <div className="flex-1 text-white space-y-2 text-xs md:text-base">
                      <p className="font-semibold">{t({ JP: "【しっかりと色をつけたい場合の目安量】", EN: "【Recommended amount for a stronger color】" })}</p>
                      <p>{t({ JP: "①キンパに必要な材料　1人前", EN: "①Ingredients for kimbap" })}</p>
                      <p>{t({ JP: "②", EN: "②" })}Achieve  <span style={{ color: '#4ade80' }}>{t({ JP: "1/2本", EN: "1/2 stick" })}</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl px-6 md:px-12 py-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              {/* タイトル */}
              <h2 className="text-white text-xl md:text-3xl font-bold mb-8 text-left">
                {t({ JP: "サムゲタン", EN: "Samgyetang" })}
              </h2>

              {/* 画像とテキストのブロック */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* 画像 */}
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <img
                    src="/k4.jpg"
                    alt="Samgyetang"
                    className="w-full h-auto"
                  />
                </div>

                {/* テキストブロック */}
                <div className="w-full md:w-2/3 space-y-4">
                  <h3 className="text-green-400 text-sm md:text-2xl font-bold text-center">
                    {t({ JP: "スープにAchieveを混ぜる", EN: "Mix Achieve into the soup" })}
                  </h3>
                  {/* 横並びの2つのセクション */}
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* 薄い色合いのセクション */}
                    <div className="flex-1 text-white space-y-2 text-xs md:text-base">
                      <p className="font-semibold">{t({ JP: "【うっすらと色をつけたい場合の目安量】", EN: "【Recommended amount for a light tint of color】" })}</p>
                      <p>{t({ JP: "①参鶏湯に必要な材料", EN: "①Ingredients for 1 serving" })}</p>
                      <p>{t({ JP: "②", EN: "②" })}Achieve  <span style={{ color: '#4ade80' }}>{t({ JP: "1/10本", EN: "1/10 stick" })}</span></p>
                    </div>

                    {/* 濃い色合いのセクション */}
                    <div className="flex-1 text-white space-y-2 text-xs md:text-base">
                      <p className="font-semibold">{t({ JP: "【しっかりと色をつけたい場合の目安量】", EN: "【Recommended amount for a stronger color】" })}</p>
                      <p>{t({ JP: "①参鶏湯に必要な材料", EN: "①Ingredients for 1 serving" })}</p>
                      <p>{t({ JP: "②", EN: "②" })}Achieve  <span style={{ color: '#4ade80' }}>{t({ JP: "1/2本", EN: "1/2 stick" })}</span></p>
                    </div>
                  </div>
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