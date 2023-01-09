import '../../styles/News.css'
import News_img1 from '../../img/news_img1.jpg'
import News_img2 from '../../img/news_img2.jpg'
import News_img4 from '../../img/news_img4.jpg'
import News_img5 from '../../img/news_img5.jpg'
import { Link } from 'react-router-dom';
import i18next, { t } from 'i18next'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
export default function NewsSection() {
  const {t} = useTranslation()
  const language = [
    {
      code: 'uz',
      name: 'O‘zbek',
      country_code: 'uz'
    },
    {
      code: 'ru',
      name: 'Русский',
      country_code: 'ru'
    },
    {
      code: 'en',
      name: 'English',
      country_code: 'gb'
    }
  ]

  return (
    <>
      <section className='news_section'>
        <div className="container">
          <h2 className='news_title'>{t('news_title')}</h2>
          <div className='news_content'>
            <div className='news_info'>
              <img src={News_img1} alt="news img" />
              <span>21.10.22</span>
              <h3> {t('newsInfo-h3')} </h3>
              <p> {t('newsInfo-p')} </p>
            </div>
            <div className='news_info'>
              <img src={News_img2} alt="news img" />
              <span>08.10.22</span>
              <h3> {t('newsInfo-h3/2')} </h3>
              <p> {t('newsInfo-p/2')} </p>
            </div>
            <div className='news_info'>
              <img src={News_img2} alt="news img" />
              <span>07.10.22</span>
              <h3> {t('newsInfo-h3/3')} </h3>
              <p> {t('newsInfo-p/3')} </p>
            </div>
            <div className='news_info'>
              <img src={News_img4} alt="news img" />
              <span>22.08.22</span>
              <h3> {t('newsInfo-h3/4')} </h3>
              <p> {t('newsInfo-p/4')} </p>
            </div>
            <div className='news_info'>
              <img src={News_img5} alt="news img" />
              <span>20.08.22</span>
              <h3> {t('newsInfo-h3/5')} </h3>
              <p> {t('newsInfo-p/5')} </p>
            </div>
          </div>
          <Link to='/allnews' className='all_news' href="#">{t('newsInfo-AllNews')}</Link>
        </div>
      </section>
    </>
  )
}