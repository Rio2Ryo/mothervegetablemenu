'use client'

import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper'
import { useLanguage } from '@/contexts/LanguageContext'

export default function MazavegeFamily() {
  const { t, language } = useLanguage()

  return (
    <section id="mazavege-family" className="py-24 relative overflow-hidden">
      <div id="s9" className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      <div className="relative z-10 justify-center mb-8">
        <img src="achieve-howto/htu.png" alt="HTU" className="w-full max-w-60 md:max-w-72 h-auto mx-auto" />
        <div className="w-48 md:w-72 h-1.5 bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto rounded-full mt-4 opacity-80"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto space-y-8">
          <ScrollAnimationWrapper disabled={true}>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl px-6 md:px-12 py-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              {/* タイトル */}
              <h2 className="text-white text-xl md:text-3xl font-bold mb-8 text-left">
                {t({ JP: "天ぷら", EN: "Tempura" })}
              </h2>

              {/* 画像とテキストのブロック */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* 画像 */}
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <img
                    src="achieve-howto/j5.jpg"
                    alt="Tempura"
                    className="w-full h-auto"
                  />
                </div>

                {/* テキストブロック */}
                <div className="w-full md:w-2/3 space-y-4">
                  <h3 className="text-green-400 text-sm md:text-2xl font-bold text-center">
                    {t({ JP: "天ぷらにふりかけるお塩にAchieveを混ぜる", EN: "Mix Achieve into the salt sprinkled on tempura" })}
                  </h3>
                  {/* 横並びの2つのセクション */}
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* 直接使用のセクション */}
                    <div className="flex-1 text-white space-y-2 text-xs md:text-base">
                      <p className="font-semibold">{t({ JP: "【調味料に混ぜたい場合の目安量】", EN: "【Recommended amount for mixing into seasonings】" })}</p>
                      <p>{t({ JP: "①天ぷらに必要な材料　1人前", EN: "①Ingredients for 1 serving" })}</p>
                      <p>{t({ JP: "②", EN: "②" })}Achieve  <span style={{ color: '#4ade80' }}>{t({ JP: "1/5本", EN: "1/5 stick" })}</span></p>
                      <p className="text-xs md:text-sm">{t({ JP: "（例：塩:Achieve=10:1の割合で混ぜる場合）", EN: "(e.g., mix salt and Achieve at a 10:1 ratio)" })}</p>
                    </div>

                    {/* ボトルに混ぜる場合のセクション */}
                    <div className="flex-1 text-white space-y-2 text-xs md:text-base">
                      <p className="font-semibold">{t({ JP: "【そのままふりかけたい場合の目安量】", EN: "【Recommended amount for direct sprinkling】" })}</p>
                      <p>{t({ JP: "①天ぷらに必要な材料　1人前", EN: "①Ingredients for 1 serving" })}</p>
                      <p>{t({ JP: "②", EN: "②" })}Achieve  <span style={{ color: '#4ade80' }}>{t({ JP: "1本", EN: "1 stick" })}</span></p>
                    </div>
                  </div>
                  <div className="text-white space-y-2 text-xs md:text-sm mt-4">
                    <p>{t({ JP: "※バッター液に混ぜて揚げるとAchieveの色が黒ずむ可能性があるため、仕上げや調味料に混ぜて使用するのがおすすめです。", EN: "*Mixing Achieve into the batter may darken its color, so it's recommended to mix it into seasonings or sprinkle on top after frying." })}</p>
                    <p>{t({ JP: "※お塩等、調味料にAchieveを混ぜたものを用意しておくのがおすすめです。", EN: "*It is recommended to prepare Achieve mixed with salt or other seasonings." })}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="u2 mt-10 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl px-6 md:px-12 py-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              {/* タイトル */}
              <h2 className="text-white text-xl md:text-3xl font-bold mb-8 text-left">
                {t({ JP: "お寿司", EN: "Sushi" })}
              </h2>

              {/* 画像とテキストのブロック */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* 画像 */}
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <img
                    src="achieve-howto/j6.jpg"
                    alt="Sushi"
                    className="w-full h-auto"
                  />
                </div>

                {/* テキストブロック */}
                <div className="w-full md:w-2/3 space-y-4">
                  <h3 className="text-green-400 text-sm md:text-2xl font-bold text-center">
                    {t({ JP: "お醤油にAchieveを混ぜる", EN: "Mix Achieve into soy sauce" })}
                  </h3>
                  {/* 横並びの2つのセクション */}
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* 直接使用のセクション */}
                    <div className="flex-1 text-white space-y-2 text-xs md:text-base">
                      <p className="font-semibold">{t({ JP: "【うっすらと色をつけたい場合の目安量】", EN: "【Recommended amount for a light tint of color】" })}</p>
                      <p>{t({ JP: "①お寿司に必要な材料", EN: "①Ingredients for 1 serving" })}</p>
                      <p>{t({ JP: "②", EN: "②" })}Achieve  <span style={{ color: '#4ade80' }}>{t({ JP: "1/10本", EN: "1/10 stick" })}</span></p>
                    </div>

                    {/* ボトルに混ぜる場合のセクション */}
                    <div className="flex-1 text-white space-y-2 text-xs md:text-base">
                      <p className="font-semibold">{t({ JP: "【しっかりと色をつけたい場合の目安量】", EN: "【Recommended amount for a stronger color】" })}</p>
                      <p>{t({ JP: "①お寿司に必要な材料", EN: "①Ingredients for 1 serving" })}</p>
                      <p>{t({ JP: "②", EN: "②" })}Achieve  <span style={{ color: '#4ade80' }}>{t({ JP: "1/3本", EN: "1/3 stick" })}</span></p>
                    </div>
                  </div>
                  <div className="text-white space-y-2 text-xs md:text-sm mt-4">
                    <p>{t({ JP: "※お醤油等、調味料にAchieveを混ぜたものを用意しておくのがおすすめです。", EN: "*It is recommended to prepare Achieve mixed with soy sauce or other seasonings." })}</p>
                    <p>{t({ JP: "（Achieveが沈殿するため、使用前に混ぜてください）", EN: "(Shake or stir before use, as Achieve can settle at the bottom.)" })}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="u3 mt-10 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl px-6 md:px-12 py-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              {/* タイトル */}
              <h2 className="text-white text-xl md:text-3xl font-bold mb-8 text-left">
                {t({ JP: "しゃぶしゃぶ", EN: "Shabu-shabu" })}
              </h2>

              {/* 画像とテキストのブロック */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* 画像 */}
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <img
                    src="achieve-howto/j7.jpg"
                    alt="Shabu-shabu"
                    className="w-full h-auto"
                  />
                </div>

                {/* テキストブロック */}
                <div className="w-full md:w-2/3 space-y-4">
                  <h3 className="text-green-400 text-sm md:text-2xl font-bold text-center">
                    {t({ JP: "ポン酢にAchieveを混ぜる", EN: "Mix Achieve into ponzu" })}
                  </h3>
                  {/* 横並びの2つのセクション */}
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* 直接使用のセクション */}
                    <div className="flex-1 text-white space-y-2 text-xs md:text-base">
                      <p className="font-semibold">{t({ JP: "【うっすらと色をつけたい場合の目安量】", EN: "【Recommended amount for a light tint of color】" })}</p>
                      <p>{t({ JP: "①しゃぶしゃぶに必要な材料", EN: "①Ingredients for 1 serving" })}</p>
                      <p>{t({ JP: "②", EN: "②" })}Achieve  <span style={{ color: '#4ade80' }}>{t({ JP: "1/10本", EN: "1/10 stick" })}</span></p>
                    </div>

                    {/* ボトルに混ぜる場合のセクション */}
                    <div className="flex-1 text-white space-y-2 text-xs md:text-base">
                      <p className="font-semibold">{t({ JP: "【しっかりと色をつけたい場合の目安量】", EN: "【Recommended amount for a stronger color】" })}</p>
                      <p>{t({ JP: "①しゃぶしゃぶに必要な材料", EN: "①Ingredients for 1 serving" })}</p>
                      <p>{t({ JP: "②", EN: "②" })}Achieve  <span style={{ color: '#4ade80' }}>{t({ JP: "1/3本", EN: "1/3 stick" })}</span></p>
                    </div>
                  </div>
                  <div className="text-white space-y-2 text-xs md:text-sm mt-4">
                    <p>{t({ JP: "※ポン酢等、調味料にAchieveを混ぜたものを用意しておくのがおすすめです。", EN: "*It is recommended to prepare Achieve mixed with ponzu or other seasonings." })}</p>
                    <p>{t({ JP: "（Achieveが沈殿するため、使用前に混ぜてください）", EN: "(Shake or stir before use, as Achieve can settle at the bottom.)" })}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl px-6 md:px-12 py-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              {/* タイトル */}
              <h2 className="text-white text-xl md:text-3xl font-bold mb-8 text-left">
                {t({ JP: "鉄板焼き", EN: "Teppanyaki" })}
              </h2>

              {/* 画像とテキストのブロック */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* 画像 */}
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <img
                    src="achieve-howto/j8.jpg"
                    alt="Teppanyaki"
                    className="w-full h-auto"
                  />
                </div>

                {/* テキストブロック */}
                <div className="w-full md:w-2/3 space-y-4">
                  <h3 className="text-green-400 text-sm md:text-2xl font-bold text-center">
                    {t({ JP: "ソースにAchieveを混ぜる", EN: "Mix Achieve into sauce" })}
                  </h3>
                  {/* 横並びの2つのセクション */}
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* 直接使用のセクション */}
                    <div className="flex-1 text-white space-y-2 text-xs md:text-base">
                      <p className="font-semibold">{t({ JP: "【うっすらと色をつけたい場合の目安量】", EN: "【Recommended amount for a light tint of color】" })}</p>
                      <p>{t({ JP: "①鉄板焼きに必要な材料", EN: "①Ingredients for 1 serving" })}</p>
                      <p>{t({ JP: "②", EN: "②" })}Achieve  <span style={{ color: '#4ade80' }}>{t({ JP: "1/10本", EN: "1/10 stick" })}</span></p>
                      <p className="text-xs md:text-sm">{t({ JP: "（例：ソース10人前 300g程度に混ぜる場合）", EN: "(e.g.,10 servings - about 300g)" })}</p>
                    </div>

                    {/* ボトルに混ぜる場合のセクション */}
                    <div className="flex-1 text-white space-y-2 text-xs md:text-base">
                      <p className="font-semibold">{t({ JP: "【しっかりと色をつけたい場合の目安量】", EN: "【Recommended amount for a stronger color】" })}</p>
                      <p>{t({ JP: "①鉄板焼きに必要な材料", EN: "①Ingredients for 1 serving" })}</p>
                      <p>{t({ JP: "②", EN: "②" })}Achieve  <span style={{ color: '#4ade80' }}>{t({ JP: "1本", EN: "1 stick" })}</span></p>
                      <p className="text-xs md:text-sm">{t({ JP: "（例：ソース10人前 300g程度に混ぜる場合）", EN: "(e.g.,10 servings - about 300g)" })}</p>
                    </div>
                  </div>
                  <div className="text-white space-y-2 text-xs md:text-sm mt-4">
                    <p>{t({ JP: "※ソース等、調味料にAchieveを混ぜたものを用意しておくのがおすすめです。", EN: "*It is recommended to prepare Achieve mixed with sauce or other seasonings." })}</p>
                    <p>{t({ JP: "（Achieveが沈殿するため、使用前に混ぜてください）", EN: "(Shake or stir before use, as Achieve can settle at the bottom.)" })}</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimationWrapper>
          {/* ロゴ画像 */}
          <div className="flex justify-center mt-12">
            <img src="achieve-howto/mazavege_logo_midori.png" alt="Mazavege Logo" className="h-16 w-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}