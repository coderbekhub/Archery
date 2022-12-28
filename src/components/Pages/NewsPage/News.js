import React from 'react'
import GoogleMaps from '../../googleMap/GoogleMaps'
import '../../../styles/NewsPage.css'

export default function News() {
  return (
    <>
    <div className="container">
      <h2 className='newspage_title'>Новости</h2>
      <div className='newspage_content'>
        <div className='newsflex'>
          <img src="https://picsum.photos/160/160" alt="newspage img" />
          <div className='young_snipers'>
            <a href='#'>Ёш мерганларни саралаб берган қизиқарли беллашув</a>
            <p>Қорақалпоғистон Республикаси “Қўриқлаш” бошқармаси ходимлари ташаббуси билан куни кеча Нукус шаҳрида ёшларимизнинг спортга</p>
          </div>
        </div>
        <p className='young_sniper'>бўлган қизиқишларини янада ошириш, улар орасида соғлом рақобат ва мусобақа муҳитини яратиш, ёш авлодни буюк аждодларимиз каби мард ва жасур, жисмонан бақувват ва ватанпарвар этиб тарбиялаш мақсадида спортнинг камондан отиш тури бўйича ёшлар ўртасида “Қўриқлаш” бошқармаси бошлиғи кубоги  учун мусобақа ўтказилди.  </p>
        <span>21.10.2022 09:26</span>
        <a href="#">читать дальше...</a>
        <hr className='news_hr'/>
      </div>
    </div>
      <GoogleMaps />
    </>
  )
}
