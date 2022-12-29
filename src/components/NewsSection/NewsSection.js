import '../../styles/News.css'
import News_img1 from '../../img/news_img1.jpg'
import News_img2 from '../../img/news_img2.jpg'
import News_img4 from '../../img/news_img4.jpg'
import News_img5 from '../../img/news_img5.jpg'
// import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { ARCHERY_LANGUAGE } from '../../tools/constants'
// import { useEffect } from 'react'
// import { getLanguage, getText } from '../../Locales'

export default function NewsSection() {
  // const [dropdownOpen, setDropdownOpen] = useState(false);
  // const toggle = () => setDropdownOpen((prevState) => !prevState);

  // const changeLanguage = (e) => {
  //   localStorage.setItem(ARCHERY_LANGUAGE, e)
  //   document.location.reload(true)
  // }

  // useEffect(() => {
  //   changeLanguage()
  // }, [])

  return (
    <>
      <section className='news_section'>
        <div className="container">
          <h2 className='news_title'>Новости</h2>
          <div className='news_content'>
            <div className='news_info'>
              <img src={News_img1} alt="news img" />
              <span>21.10.22</span>
              <h3>Ёш мерганларни саралаб берган қизиқарли беллашув</h3>
              <p>Қорақалпоғистон Республикаси “Қўриқлаш” бошқармаси ходимлари ташаббуси билан куни кеча Нукус шаҳрида ёшларимизнинг спортга бўлган қизиқишларини янада ошириш, улар орасида соғлом рақобат ва мусобақа муҳитини яратиш, ёш авлодни буюк аждодларимиз каби мард ва жасур, жисмонан бақувват ва ватанпарвар этиб тарбиялаш мақсадида спортнинг камондан отиш тури бўйича ёшлар ўртасида “Қўриқлаш” бошқармаси бошлиғи кубоги  учун мусобақа ўтказилди.</p>
            </div>
            <div className='news_info'>
              <img src={News_img2} alt="news img" />
              <span>08.10.22</span>
              <h3>"Тўмарис кубоги" иккинчи халқаро турнири якунланди</h3>
              <p>"Кўҳна ва боқий Самарқанд шаҳрида  камондан отиш бўйича аёллар ўртасида ўтказилган "Тўмарис кубоги" иккинчи халқаро турнири якунланди ва унда Ўзбекистон терма жамоаси II Халқаро "Тўмарис кубоги" соҳиби бўлди.</p>
            </div>
            <div className='news_info'>
              <img src={News_img2} alt="news img" />
              <span>07.10.22</span>
              <h3>Завершился международный турнир по стрельбе из лука среди женщин «Кубок Тумарис»,</h3>
              <p>Завершился международный турнир по стрельбе из лука среди женщин «Кубок Тумарис», который проходил в течение трёх дней в древнем и вечно молодом городе Самарканде. Сборная Узбекистана стала обладателем II Международного «Кубка Тумарис».</p>
            </div>
            <div className='news_info'>
              <img src={News_img4} alt="news img" />
              <span>22.08.22</span>
              <h3>"Алпомиш ва Барчиной" халқаро турнири олдидан матбуот анжумани</h3>
              <p>Бугун пойтахтимиздаги Олимпия захиралар коллежида спортнинг Камондан отиш тури бўйича профессионал спортчилар ўртасидаги "Алпомиш ва Барчиной" номли халқаро турнири муносабати билан ОАВ вакиллари ҳамда халқаро экспертлар иштирокида матбуот анжумани бўлиб ўтди.</p>
            </div>
            <div className='news_info'>
              <img src={News_img5} alt="news img" />
              <span>20.08.22</span>
              <h3>"Алпомиш ва Барчиной" халқаро турнири бўлиб ўтади</h3>
              <p>Жорий йилнинг 22-26 август кунлари пойтахтимиздаги Олимпия захиралар коллежида спортнинг Камондан отиш тури бўйича профессионал спортчилар ўртасида</p>
            </div>
          </div>
          <Link to='/allnews' className='all_news' href="#">все новости</Link>
        </div>
      </section>
    </>
  )
}
