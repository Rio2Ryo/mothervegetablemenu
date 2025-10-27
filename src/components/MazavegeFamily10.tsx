'use client'

import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper'
import { useLanguage } from '@/contexts/LanguageContext'

export default function MazavegeFamily() {
  const { t, language } = useLanguage()

  return (
    <section id="mazavege-family" className="py-24 relative overflow-hidden">
      <div id="s9" className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      <div className="relative z-10 justify-center mb-8">
        <img src="/htu2.png" alt="HTU" className="w-full max-w-60 md:max-w-96 h-auto mx-auto" />
        <div className="w-48 md:w-72 h-1.5 bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto rounded-full mt-4 opacity-80"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto space-y-8">
          <ScrollAnimationWrapper disabled={true}>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl px-6 md:px-12 py-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              {/* タイトル */}
              <h2 className="text-white text-xl md:text-3xl font-bold mb-8 text-left">
                {t({ JP: "マザベジハイボール", EN: "Mazavege Highball" })}
              </h2>

              {/* 画像とテキストのブロック */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* 画像 */}
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <img
                    src="/d5.jpg"
                    alt="Mazavege Highball"
                    className="w-full h-auto"
                  />
                </div>

                {/* テキストブロック */}
                <div className="w-full md:w-2/3 space-y-4">
                  <h3 className="text-green-400 text-sm md:text-2xl font-bold text-center">
                    {t({ JP: "ハイボールにAchieveを混ぜる", EN: "Mix Achieve into highball" })}
                  </h3>
                  {/* 横並びの2つのセクション */}
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* 直接使用のセクション */}
                    <div className="flex-1 text-white space-y-2 text-xs md:text-base">
                      <p className="font-semibold">{t({ JP: "【薄めに作りたい場合の目安量】", EN: "【Suggested amount for a light drink】" })}</p>
                      <p>{t({ JP: "①ハイボール　1杯", EN: "① 1 glass of highball" })}</p>
                      <p>{t({ JP: "②", EN: "②" })}Achieve  <span style={{ color: '#4ade80' }}>{t({ JP: "1/5本", EN: "1/5 stick" })}</span></p>
                    </div>

                    {/* ボトルに混ぜる場合のセクション */}
                    <div className="flex-1 text-white space-y-2 text-xs md:text-base">
                      <p className="font-semibold">{t({ JP: "【濃いめに作りたい場合の目安量】", EN: "【Suggested amount for a strong drink】" })}</p>
                      <p>{t({ JP: "①ハイボール　1杯", EN: "① 1 glass of highball" })}</p>
                      <p>{t({ JP: "②", EN: "②" })}Achieve  <span style={{ color: '#4ade80' }}>{t({ JP: "1/2本", EN: "1/2 stick" })}</span></p>
                    </div>
                  </div>
                  <div className="text-white space-y-2 text-xs md:text-sm mt-4">
                    <p>{t({ JP: "※始めに10mlほどの少量のお水でAchieveを溶き、1人分のハイボールを注いだグラスに混ぜてください。", EN: "*First dissolve Achieve in about 10ml of water, then mix it into a glass filled with one serving of highball." })}</p>
                    <p>{t({ JP: "（ハイボールが薄くならないよう、お水の入れすぎにご注意ください）", EN: "(To avoid diluting the highball, be careful not to add too much water.)" })}</p>
                    <p>{t({ JP: "※Achieveの分量が多すぎると、泡が溢れ出してしまう可能性があるめご注意ください。", EN: "*Please be aware that using too much Achieve may cause excessive foaming and overflow." })}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="u2 mt-10 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl px-6 md:px-12 py-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              {/* タイトル */}
              <h2 className="text-white text-xl md:text-3xl font-bold mb-8 text-left">
                {t({ JP: "マザベジ日本酒", EN: "Mazavege Sake" })}
              </h2>

              {/* 画像とテキストのブロック */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* 画像 */}
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <img
                    src="/d6.jpg"
                    alt="Mazavege Sake"
                    className="w-full h-auto"
                  />
                </div>

                {/* テキストブロック */}
                <div className="w-full md:w-2/3 space-y-4">
                  <h3 className="text-green-400 text-sm md:text-2xl font-bold text-center">
                    {t({ JP: "日本酒にAchieveを混ぜる", EN: "Mix Achieve into sake" })}
                  </h3>
                  {/* 横並びの2つのセクション */}
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* 直接使用のセクション */}
                    <div className="flex-1 text-white space-y-2 text-xs md:text-base">
                      <p className="font-semibold">{t({ JP: "【薄めに作りたい場合の目安量】", EN: "【Suggested amount for a light drink】" })}</p>
                      <p>{t({ JP: "①日本酒　とっくり1本", EN: "① Sake tokkuri" })}</p>
                      <p className="text-xs md:text-sm">{t({ JP: "", EN: "(for 1 serving - about 180 ml)" })}</p>
                      <p>{t({ JP: "②", EN: "②" })}Achieve  <span style={{ color: '#4ade80' }}>{t({ JP: "1/5本", EN: "1/5 stick" })}</span></p>
                    </div>

                    {/* ボトルに混ぜる場合のセクション */}
                    <div className="flex-1 text-white space-y-2 text-xs md:text-base">
                      <p className="font-semibold">{t({ JP: "【濃いめに作りたい場合の目安量】", EN: "【Suggested amount for a strong drink】" })}</p>
                      <p>{t({ JP: "①日本酒　とっくり1本", EN: "① Sake tokkuri" })}</p>
                      <p className="text-xs md:text-sm">{t({ JP: "", EN: "(for 1 serving - about 180 ml)" })}</p>
                      <p>{t({ JP: "②", EN: "②" })}Achieve  <span style={{ color: '#4ade80' }}>{t({ JP: "1/2本", EN: "1/2 stick" })}</span></p>
                    </div>
                  </div>
                  <div className="text-white space-y-2 text-xs md:text-sm mt-4">
                    <p>{t({ JP: "※始めに10mlほどの少量のお水または日本酒でAchieveを溶き、1人分の日本酒を注いだとっくりに混ぜてください。", EN: "*First dissolve Achieve in about 10ml of water or sake, then mix it into a tokkuri filled with one serving of sake." })}</p>
                    <p>{t({ JP: "（日本酒が薄くならないよう、お水で混ぜる場合は、お水の入れすぎにご注意ください）", EN: "(To avoid diluting the sake, be careful not to add too much water.)" })}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="u3 mt-10 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl px-6 md:px-12 py-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              {/* タイトル */}
              <h2 className="text-white text-xl md:text-3xl font-bold mb-8 text-left">
                {t({ JP: "マザベジワイン", EN: "Mazavege Wine" })}
              </h2>

              {/* 画像とテキストのブロック */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* 画像 */}
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <img
                    src="/d7.jpg"
                    alt="Mazavege Wine"
                    className="w-full h-auto"
                  />
                </div>

                {/* テキストブロック */}
                <div className="w-full md:w-2/3 space-y-4">
                  <h3 className="text-green-400 text-sm md:text-2xl font-bold text-center">
                    {t({ JP: "ワインにAchieveを混ぜる", EN: "Mix Achieve into wine" })}
                  </h3>
                  {/* 横並びの2つのセクション */}
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* 直接使用のセクション */}
                    <div className="flex-1 text-white space-y-2 text-xs md:text-base">
                      <p className="font-semibold">{t({ JP: "【薄めに作りたい場合の目安量】", EN: "【Suggested amount for a light drink】" })}</p>
                      <p>{t({ JP: "①ワイン　1杯", EN: "① 1 glass of wine" })}</p>
                      <p>{t({ JP: "②", EN: "②" })}Achieve  <span style={{ color: '#4ade80' }}>{t({ JP: "1/5本", EN: "1/5 stick" })}</span></p>
                    </div>

                    {/* ボトルに混ぜる場合のセクション */}
                    <div className="flex-1 text-white space-y-2 text-xs md:text-base">
                      <p className="font-semibold">{t({ JP: "【濃いめに作りたい場合の目安量】", EN: "【Suggested amount for a strong drink】" })}</p>
                      <p>{t({ JP: "①ワイン　1杯", EN: "① 1 glass of wine" })}</p>
                      <p>{t({ JP: "②", EN: "②" })}Achieve  <span style={{ color: '#4ade80' }}>{t({ JP: "1/2本", EN: "1/2 stick" })}</span></p>
                    </div>
                  </div>
                  <div className="text-white space-y-2 text-xs md:text-sm mt-4">
                    <p>{t({ JP: "※始めに10mlほどの少量のお水またはワインでAchieveを溶き、1人分のワインを注いだグラスに混ぜてください。", EN: "*First dissolve Achieve in about 10ml of water or wine, then mix it into a glass filled with one serving of wine." })}</p>
                    <p>{t({ JP: "（ワインが薄くならないよう、お水で混ぜる場合は、お水の入れすぎにご注意ください）", EN: "(To avoid diluting the wine, be careful not to add too much water.)" })}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl px-6 md:px-12 py-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              {/* タイトル */}
              <h2 className="text-white text-xl md:text-3xl font-bold mb-8 text-left">
                {t({ JP: "マザベジジュース各種", EN: "Mazavege Juice – Blend" })}
              </h2>

              {/* 画像とテキストのブロック */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* 画像 */}
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <img
                    src="/d8.jpg"
                    alt="Mazavege Juice"
                    className="w-full h-auto"
                  />
                </div>

                {/* テキストブロック */}
                <div className="w-full md:w-2/3 space-y-4">
                  <h3 className="text-green-400 text-sm md:text-2xl font-bold text-center">
                    {t({ JP: "ジュースにAchieveを混ぜる", EN: "Mix Achieve into juice" })}
                  </h3>
                  {/* 横並びの2つのセクション */}
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* 直接使用のセクション */}
                    <div className="flex-1 text-white space-y-2 text-xs md:text-base">
                      <p className="font-semibold">{t({ JP: "【薄めに作りたい場合の目安量】", EN: "【Suggested amount for a light drink】" })}</p>
                      <p>{t({ JP: "①ジュース　1杯", EN: "① 1 glass of juice" })}</p>
                      <p>{t({ JP: "②", EN: "②" })}Achieve  <span style={{ color: '#4ade80' }}>{t({ JP: "1/5本", EN: "1/5 stick" })}</span></p>
                    </div>

                    {/* ボトルに混ぜる場合のセクション */}
                    <div className="flex-1 text-white space-y-2 text-xs md:text-base">
                      <p className="font-semibold">{t({ JP: "【濃いめに作りたい場合の目安量】", EN: "【Suggested amount for a strong drink】" })}</p>
                      <p>{t({ JP: "①ジュース　1杯", EN: "① 1 glass of juice" })}</p>
                      <p>{t({ JP: "②", EN: "②" })}Achieve  <span style={{ color: '#4ade80' }}>{t({ JP: "1本", EN: "1 stick" })}</span></p>
                      <p className="text-xs md:text-sm">{t({ JP: "（炭酸系の場合は1/5本程度に落としてください）", EN: "(For sparkling juice - 1/5 stick)" })}</p>
                    </div>
                  </div>
                  <div className="text-white space-y-2 text-xs md:text-sm mt-4">
                    <p>{t({ JP: "※始めに10mlほどの少量のジュースでAchieveを溶き、1人分のジュースを注いだグラスに混ぜてください。", EN: "*First dissolve Achieve in about 10ml of juice, then mix it into a glass filled with one serving of juice." })}</p>
                    <p>{t({ JP: "※炭酸系のジュースの場合、Achieveの分量が多すぎると、泡が溢れ出してしまう可能性があるめご注意ください。", EN: "*Please be aware that using too much Achieve in sparkling juice may cause excessive foaming and overflow." })}</p>
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