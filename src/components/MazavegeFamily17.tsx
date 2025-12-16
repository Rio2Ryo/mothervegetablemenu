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
                {t({ JP: "バケット", EN: "Baguette" })}
              </h2>

              {/* 画像とテキストのブロック */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* 画像 */}
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <img
                    src="achieve-howto/f1.jpg"
                    alt="Baguette"
                    className="w-full h-auto"
                  />
                </div>

                {/* テキストブロック */}
                <div className="w-full md:w-2/3 space-y-4">
                  <h3 className="text-green-400 text-sm md:text-2xl font-bold text-center">
                    {t({ JP: "バターに練り込んだAchieveをパンに塗る", EN: "Mix Achieve into butter and spread it on the bread" })}
                  </h3>
                  {/* 横並びの2つのセクション */}
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* 直接使用のセクション */}
                    <div className="flex-1 text-white space-y-2 text-xs md:text-base">
                      <p className="font-semibold">{t({ JP: "【うっすらと色をつけたい場合の目安量】", EN: "【Recommended amount for a light tint of color】" })}</p>
                      <p>{t({ JP: "①バケットに必要な材料", EN: "①Ingredients for Baguette" })}</p>
                      <p>{t({ JP: "②", EN: "②" })}Achieve  <span style={{ color: '#4ade80' }}>{t({ JP: "1/10本", EN: "1/10 stick" })}</span></p>
                      <p className="text-xs md:text-sm">{t({ JP: "（例：バター 200gに混ぜた場合）", EN: "(e.g., when mixed into 200g of butter)" })}</p>
                    </div>

                    {/* ボトルに混ぜる場合のセクション */}
                    <div className="flex-1 text-white space-y-2 text-xs md:text-base">
                      <p className="font-semibold">{t({ JP: "【しっかりと色をつけたい場合の目安量】", EN: "【Recommended amount for a stronger color】" })}</p>
                      <p>{t({ JP: "①バケットに必要な材料", EN: "①Ingredients for Baguette" })}</p>
                      <p>{t({ JP: "②", EN: "②" })}Achieve  <span style={{ color: '#4ade80' }}>{t({ JP: "1本", EN: "1 stick" })}</span></p>
                      <p className="text-xs md:text-sm">{t({ JP: "（例：バター 200gに混ぜた場合）", EN: "(e.g., when mixed into 200g of butter)" })}</p>
                    </div>
                  </div>
                  <div className="text-white space-y-2 text-xs md:text-sm mt-4">
                    <p>{t({ JP: "※あらかじめバターに混ぜて用意しておくのがおすすめです。", EN: "*It is recommended to mix Achieve into the butter in advance and spread it before eating." })}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="u2 mt-10 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl px-6 md:px-12 py-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              {/* タイトル */}
              <h2 className="text-white text-xl md:text-3xl font-bold mb-8 text-left">
                {t({ JP: "タブレ", EN: "Tabbouleh" })}
              </h2>

              {/* 画像とテキストのブロック */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* 画像 */}
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <img
                    src="achieve-howto/f2.jpg"
                    alt="Tabbouleh"
                    className="w-full h-auto"
                  />
                </div>

                {/* テキストブロック */}
                <div className="w-full md:w-2/3 space-y-4">
                  <h3 className="text-green-400 text-sm md:text-2xl font-bold text-center">
                    {t({ JP: "クスクスの冷静サラダにAchieveを混ぜる", EN: "Mix Achieve into a couscous cold salad" })}
                  </h3>
                  {/* 横並びの2つのセクション */}
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* 直接使用のセクション */}
                    <div className="flex-1 text-white space-y-2 text-xs md:text-base">
                      <p className="font-semibold">{t({ JP: "【調味料に混ぜたい場合の目安量】", EN: "【Recommended amount for mixing into seasonings】" })}</p>
                      <p>{t({ JP: "①サラダに必要な材料", EN: "①Ingredients for the salad" })}</p>
                      <p>{t({ JP: "②", EN: "②" })}Achieve  <span style={{ color: '#4ade80' }}>{t({ JP: "1/10本", EN: "1/10 stick" })}</span></p>
                      <p className="text-xs md:text-sm">{t({ JP: "（例：ドレッシングに混ぜる場合）", EN: "(e.g., when mixed into dressing)" })}</p>
                    </div>

                    {/* ボトルに混ぜる場合のセクション */}
                    <div className="flex-1 text-white space-y-2 text-xs md:text-base">
                      <p className="font-semibold">{t({ JP: "【そのままふりかけたい場合の目安量】", EN: "【Recommended amount for direct sprinkling】" })}</p>
                      <p>{t({ JP: "①サラダに必要な材料", EN: "①Ingredients for the salad" })}</p>
                      <p>{t({ JP: "②", EN: "②" })}Achieve  <span style={{ color: '#4ade80' }}>{t({ JP: "1本", EN: "1 stick" })}</span></p>
                    </div>
                  </div>
                  <div className="text-white space-y-2 text-xs md:text-sm mt-4">
                    <p>{t({ JP: "※ドレッシング等、調味料にAchieveを混ぜたものを用意しておくのがおすすめです。", EN: "*It is recommended to prepare Achieve mixed with dressing or other seasonings." })}</p>
                    <p>{t({ JP: "（Achieveが沈殿するため、使用前に混ぜてください）", EN: "(Shake or stir before use, as Achieve can settle at the bottom.)" })}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="u3 mt-10 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl px-6 md:px-12 py-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              {/* タイトル */}
              <h2 className="text-white text-xl md:text-3xl font-bold mb-8 text-left">
                {t({ JP: "ポタージュ", EN: "Potage" })}
              </h2>

              {/* 画像とテキストのブロック */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* 画像 */}
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <img
                    src="achieve-howto/f3.jpg"
                    alt="Potage"
                    className="w-full h-auto"
                  />
                </div>

                {/* テキストブロック */}
                <div className="w-full md:w-2/3 space-y-4">
                  <h3 className="text-green-400 text-sm md:text-2xl font-bold text-center">
                    {t({ JP: "仕上げにAchieveを混ぜてふりかける", EN: "Mix Achieve in as a finishing touch and sprinkle on top" })}
                  </h3>
                  {/* 横並びの2つのセクション */}
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* 直接使用のセクション */}
                    <div className="flex-1 text-white space-y-2 text-xs md:text-base">
                      <p className="font-semibold">{t({ JP: "【うっすらと色をつけたい場合の目安量】", EN: "【Recommended amount for a light tint of color】" })}</p>
                      <p>{t({ JP: "①ポタージュに必要な材料　1人前", EN: "①Ingredients for 1 serving" })}</p>
                      <p>{t({ JP: "②", EN: "②" })}Achieve  <span style={{ color: '#4ade80' }}>{t({ JP: "1/10本", EN: "1/10 stick" })}</span></p>
                    </div>

                    {/* ボトルに混ぜる場合のセクション */}
                    <div className="flex-1 text-white space-y-2 text-xs md:text-base">
                      <p className="font-semibold">{t({ JP: "【しっかりと色をつけたい場合の目安量】", EN: "【Recommended amount for a stronger color】" })}</p>
                      <p>{t({ JP: "①ポタージュに必要な材料　1人前", EN: "①Ingredients for 1 serving" })}</p>
                      <p>{t({ JP: "②", EN: "②" })}Achieve  <span style={{ color: '#4ade80' }}>{t({ JP: "1/3本", EN: "1/3 stick" })}</span></p>
                    </div>
                  </div>
                  <div className="text-white space-y-2 text-xs md:text-sm mt-4">
                    <p>{t({ JP: "※完成後に仕上げとしてAchieveを混ぜて使用するのがおすすめです。", EN: "*It is recommended to mix Achieve in as a finishing touch after the dish is completed." })}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl px-6 md:px-12 py-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              {/* タイトル */}
              <h2 className="text-white text-xl md:text-3xl font-bold mb-8 text-left">
                {t({ JP: "アボカドと帆立の前菜", EN: "Avocado and Scallop Appetizer" })}
              </h2>

              {/* 画像とテキストのブロック */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* 画像 */}
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <img
                    src="achieve-howto/f4.jpg"
                    alt="Avocado and Scallop Appetizer"
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
                    {/* 直接使用のセクション */}
                    <div className="flex-1 text-white space-y-2 text-xs md:text-base">
                      <p className="font-semibold">{t({ JP: "【うっすらと色をつけたい場合の目安量】", EN: "【Recommended amount for a light tint of color】" })}</p>
                      <p>{t({ JP: "①前菜作りに必要な材料　1人前", EN: "①Ingredients for 1 serving" })}</p>
                      <p>{t({ JP: "②", EN: "②" })}Achieve  <span style={{ color: '#4ade80' }}>{t({ JP: "1/10本", EN: "1/10 stick" })}</span></p>
                    </div>

                    {/* ボトルに混ぜる場合のセクション */}
                    <div className="flex-1 text-white space-y-2 text-xs md:text-base">
                      <p className="font-semibold">{t({ JP: "【しっかりと色をつけたい場合の目安量】", EN: "【Recommended amount for a stronger color】" })}</p>
                      <p>{t({ JP: "①前菜作りに必要な材料　1人前", EN: "①Ingredients for 1 serving" })}</p>
                      <p>{t({ JP: "②", EN: "②" })}Achieve  <span style={{ color: '#4ade80' }}>{t({ JP: "1/2本", EN: "1/2 stick" })}</span></p>
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