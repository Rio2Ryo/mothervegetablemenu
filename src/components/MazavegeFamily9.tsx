'use client'

import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper'
import { useLanguage } from '@/contexts/LanguageContext'

export default function MazavegeFamily() {
  const { t, language } = useLanguage()

  return (
    <section id="mazavege-family" className="py-24 relative overflow-hidden">
      <div id="drink" className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      <div className="relative z-10 justify-center mb-8">
        <img src="achieve-howto/htu2.png" alt="HTU" className="w-full max-w-60 md:max-w-72 h-auto mx-auto" />
        <div className="w-48 md:w-72 h-1.5 bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto rounded-full mt-4 opacity-80"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto space-y-8">
          <ScrollAnimationWrapper disabled={true}>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl px-6 md:px-12 py-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              {/* タイトル */}
              <h2 className="text-white text-xl md:text-3xl font-bold mb-8 text-left">
                {t({ JP: "マザベジピュアウォーター", EN: "Mazavege Pure Water" })}
              </h2>

              {/* 画像とテキストのブロック */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* 画像 */}
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <img
                    src="achieve-howto/d1.jpg"
                    alt="Mazavege Pure Water"
                    className="w-full h-auto"
                  />
                </div>

                {/* テキストブロック */}
                <div className="w-full md:w-2/3 space-y-4">
                  <h3 className="text-green-400 text-sm md:text-2xl font-bold text-center">
                    {t({ JP: "ミネラルウォーターにAchieveを混ぜる", EN: "Mix Achieve into mineral water." })}
                  </h3>
                  {/* 横並びの2つのセクション */}
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* 直接使用のセクション */}
                    <div className="flex-1 text-white space-y-2 text-xs md:text-base">
                      <p className="font-semibold">{t({ JP: "【薄めに作りたい場合の目安量】", EN: "【Suggested amount for a light drink】" })}</p>
                      <p>{t({ JP: "①ミネラルウォーター　1杯", EN: "① 1 glass of mineral water" })}</p>
                      <p>{t({ JP: "②", EN: "②" })}Achieve  <span style={{ color: '#4ade80' }}>{t({ JP: "1/2本", EN: "1/2 stick" })}</span></p>
                    </div>

                    {/* ボトルに混ぜる場合のセクション */}
                    <div className="flex-1 text-white space-y-2 text-xs md:text-base">
                      <p className="font-semibold">{t({ JP: "【濃いめに作りたい場合の目安量】", EN: "【Suggested amount for a strong drink】" })}</p>
                      <p>{t({ JP: "①ミネラルウォーター　1杯", EN: "① 1 glass of mineral water" })}</p>
                      <p>{t({ JP: "②", EN: "②" })}Achieve  <span style={{ color: '#4ade80' }}>{t({ JP: "1本", EN: "1 stick" })}</span></p>
                    </div>
                  </div>
                  <div className="text-white space-y-2 text-xs md:text-sm mt-4">
                    <p>{t({ JP: "※ショットグラスのような60mlほどの小さいサイズのグラスがおすすめです。", EN: "*A small glass, about 60ml like a shot glass, is recommended." })}</p>
                    <p>{t({ JP: "※始めに10mlほどの水でAchieveを溶き、その後、1人分のお水を入れた別のグラスに注いで混ぜてください。", EN: "*First dissolve Achieve in about 10ml of water, then pour it into the serving glass containing one serving of water and mix well." })}</p>
                    <p>{t({ JP: "（別のグラスにて少量のお水で一旦溶いてから、お客様への提供用グラスに混ぜるのがおすすめです）", EN: "(For best results, pre-dissolve it in a small amount of water in the serving glass before presenting to the customer.)" })}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="u2 mt-10 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl px-6 md:px-12 py-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              {/* タイトル */}
              <h2 className="text-white text-xl md:text-3xl font-bold mb-8 text-left">
                {t({ JP: "マザベジビール", EN: "Mazavege Beer" })}
              </h2>

              {/* 画像とテキストのブロック */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* 画像 */}
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <img
                    src="achieve-howto/d2.jpg"
                    alt="Mazavege Beer"
                    className="w-full h-auto"
                  />
                </div>

                {/* テキストブロック */}
                <div className="w-full md:w-2/3 space-y-4">
                  <h3 className="text-green-400 text-sm md:text-2xl font-bold text-center">
                    {t({ JP: "ビールにAchieveを混ぜる", EN: "Mix Achieve into beer" })}
                  </h3>
                  {/* 横並びの2つのセクション */}
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* 直接使用のセクション */}
                    <div className="flex-1 text-white space-y-2 text-xs md:text-base">
                      <p className="font-semibold">{t({ JP: "【薄めに作りたい場合の目安量】", EN: "【Suggested amount for a light drink】" })}</p>
                      <p>{t({ JP: "①ビール　1杯", EN: "① 1 glass of beer" })}</p>
                      <p>{t({ JP: "②", EN: "②" })}Achieve  <span style={{ color: '#4ade80' }}>{t({ JP: "1/5本", EN: "1/5 stick" })}</span></p>
                    </div>

                    {/* ボトルに混ぜる場合のセクション */}
                    <div className="flex-1 text-white space-y-2 text-xs md:text-base">
                      <p className="font-semibold">{t({ JP: "【濃いめに作りたい場合の目安量】", EN: "【Suggested amount for a strong drink】" })}</p>
                      <p>{t({ JP: "①ビール　1杯", EN: "① 1 glass of beer" })}</p>
                      <p>{t({ JP: "②", EN: "②" })}Achieve  <span style={{ color: '#4ade80' }}>{t({ JP: "1/2本", EN: "1/2 stick" })}</span></p>
                    </div>
                  </div>
                  <div className="text-white space-y-2 text-xs md:text-sm mt-4">
                    <p>
                      {language === 'JP'
                        ? <>※始めに10mlほどの<span style={{ color: 'red' }}>少量のお水でAchieveを溶き</span>、1人分のビールを注いだグラスに混ぜてください。</>
                        : <>*First dissolve Achieve in <span style={{ color: 'red' }}>about 10ml of water</span>, then mix it into a glass filled with one serving of beer.</>
                      }
                    </p>
                    <p>{t({ JP: "（ビールが薄くならないよう、お水の入れすぎにご注意ください）", EN: "(To avoid diluting the beer, be careful not to add too much water.)" })}</p>
                    <p>{t({ JP: "※他の飲み物に比べ、Achieveの分量が多すぎると、泡が溢れ出してしまう可能性があるめご注意ください。", EN: "*Please be aware that, compared with other drinks, using too much Achieve may cause excessive foaming and overflow" })}</p>
                    <p>
                      {language === 'JP'
                        ? <>※注ぐ際に泡が出ることがあるため、<span style={{ color: 'red' }}>お客様に混ぜる場合は泡が溢れた分の量を見越して、ビールの量を少なめにしてお出しください。</span></>
                        : <>*Since foaming may occur when pouring, <span style={{ color: 'red' }}>if guests will mix it themselves, please serve with slightly less beer</span></>
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="u3 mt-10 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl px-6 md:px-12 py-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              {/* タイトル */}
              <h2 className="text-white text-xl md:text-3xl font-bold mb-8 text-left">
                {t({ JP: "マザベジサワー", EN: "Mazavege Sour" })}
              </h2>

              {/* 画像とテキストのブロック */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* 画像 */}
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <img
                    src="achieve-howto/d3.jpg"
                    alt="Mazavege Sour"
                    className="w-full h-auto"
                  />
                </div>

                {/* テキストブロック */}
                <div className="w-full md:w-2/3 space-y-4">
                  <h3 className="text-green-400 text-sm md:text-2xl font-bold text-center">
                    {t({ JP: "サワーにAchieveを混ぜる", EN: "Mix Achieve into sour" })}
                  </h3>
                  {/* 横並びの2つのセクション */}
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* 直接使用のセクション */}
                    <div className="flex-1 text-white space-y-2 text-xs md:text-base">
                      <p className="font-semibold">{t({ JP: "【薄めに作りたい場合の目安量】", EN: "【Suggested amount for a light drink】" })}</p>
                      <p>{t({ JP: "①サワー　1杯", EN: "① 1 glass of sour" })}</p>
                      <p>{t({ JP: "②", EN: "②" })}Achieve  <span style={{ color: '#4ade80' }}>{t({ JP: "1/5本", EN: "1/5 stick" })}</span></p>
                    </div>

                    {/* ボトルに混ぜる場合のセクション */}
                    <div className="flex-1 text-white space-y-2 text-xs md:text-base">
                      <p className="font-semibold">{t({ JP: "【濃いめに作りたい場合の目安量】", EN: "【Suggested amount for a strong drink】" })}</p>
                      <p>{t({ JP: "①サワー　1杯", EN: "① 1 glass of sour" })}</p>
                      <p>{t({ JP: "②", EN: "②" })}Achieve  <span style={{ color: '#4ade80' }}>{t({ JP: "1/2本", EN: "1/2 stick" })}</span></p>
                    </div>
                  </div>
                  <div className="text-white space-y-2 text-xs md:text-sm mt-4">
                    <p>{t({ JP: "※始めに10mlほどの少量のお水でAchieveを溶き、1人分のサワーを注いだグラスに混ぜてください。", EN: "*First dissolve Achieve in about 10ml of water, then mix it into a glass filled with one serving of sour." })}</p>
                    <p>{t({ JP: "（サワーが薄くならないよう、お水の入れすぎにご注意ください）", EN: "(To avoid diluting the sour, be careful not to add too much water.)" })}</p>
                    <p>{t({ JP: "※Achieveの分量が多すぎると、泡が溢れ出してしまう可能性があるめご注意ください。", EN: "*Please be aware that using too much Achieve may cause excessive foaming and overflow." })}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl px-6 md:px-12 py-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              {/* タイトル */}
              <h2 className="text-white text-xl md:text-3xl font-bold mb-8 text-left">
                {t({ JP: "マザベジ梅酒（ロック）", EN: "Mazavege Plum Wine — on the Rocks" })}
              </h2>

              {/* 画像とテキストのブロック */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* 画像 */}
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <img
                    src="achieve-howto/d4.jpg"
                    alt="Mazavege Plum Wine"
                    className="w-full h-auto"
                  />
                </div>

                {/* テキストブロック */}
                <div className="w-full md:w-2/3 space-y-4">
                  <h3 className="text-green-400 text-sm md:text-2xl font-bold text-center">
                    {t({ JP: "梅酒にAchieveを混ぜる", EN: "Mix Achieve into plum wine" })}
                  </h3>
                  {/* 横並びの2つのセクション */}
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* 直接使用のセクション */}
                    <div className="flex-1 text-white space-y-2 text-xs md:text-base">
                      <p className="font-semibold">{t({ JP: "【薄めに作りたい場合の目安量】", EN: "【Suggested amount for a light drink】" })}</p>
                      <p>{t({ JP: "①梅酒　1杯", EN: "① 1 glass of plum wine" })}</p>
                      <p>{t({ JP: "②", EN: "②" })}Achieve  <span style={{ color: '#4ade80' }}>{t({ JP: "1/5本", EN: "1/5 stick" })}</span></p>
                    </div>

                    {/* ボトルに混ぜる場合のセクション */}
                    <div className="flex-1 text-white space-y-2 text-xs md:text-base">
                      <p className="font-semibold">{t({ JP: "【濃いめに作りたい場合の目安量】", EN: "【Suggested amount for a strong drink】" })}</p>
                      <p>{t({ JP: "①梅酒　1杯", EN: "① 1 glass of plum wine" })}</p>
                      <p>{t({ JP: "②", EN: "②" })}Achieve  <span style={{ color: '#4ade80' }}>{t({ JP: "1本", EN: "1 stick" })}</span></p>
                      <p className="text-xs md:text-sm">{t({ JP: "（ソーダ割の場合は1/2本程度に落としてください）", EN: "(for soda - 1/2 stick)" })}</p>
                    </div>
                  </div>
                  <div className="text-white space-y-2 text-xs md:text-sm mt-4">
                    <p>{t({ JP: "※始めに10mlほどの少量のお水または梅酒でAchieveを溶き、1人分の梅酒を注いだグラスに混ぜてください。", EN: "*First dissolve Achieve in about 10ml of water or Plum wine, then mix it into a glass filled with one serving of plum wine. (To avoid diluting the plum wine, be careful not to add too much water.)" })}</p>
                    <p>{t({ JP: "（梅酒が薄くならないよう、お水の入れすぎにご注意ください）", EN: "" })}</p>
                    <p>{t({ JP: "※ソーダ割の場合、Achieveの分量が多すぎると、泡が溢れ出してしまう可能性があるめご注意ください。", EN: "*Please be aware that when mixing with soda, adding too much Achieve may cause excessive foaming and overflow." })}</p>
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