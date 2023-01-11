import '../../styles/OurAthletes.css'
import Athletes_img1 from '../../img/athletes_img1.jpg'
import Athletes_img2 from '../../img/athletes_img2.jpg'
import Athletes_img3 from '../../img/athletes_img3.jpg'
import Athletes_img4 from '../../img/athletes_img4.jpg'
import Athletes_img5 from '../../img/athletes_img5.jpg'
import Athletes_img6 from '../../img/athletes_img6.png'
import { Link } from 'react-router-dom';
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next';

export default function OurAthletes() {
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
      <section className="our_athletes">
        <div className="container">
          <h2 className='athletes_title'>{t('athletsTitle')}</h2>
          <span className='athletes_text'>{t('athletesText')}</span>

          <div className='athletes_content'>
            <div className='athletes_infos'>
              <div className='athletes_info'>
                <img src={Athletes_img1} alt="athletes img" />
                <h3>{t('athletesName')}</h3>
              </div>
              <div className='athletes_info'>
                <img src={Athletes_img2} alt="athletes img" />
                <h3>{t('athletesName2')}</h3>
              </div>
              <div className='athletes_info'>
                <img src={Athletes_img3} alt="athletes img" />
                <h3>{t('athletesName3')}</h3>
              </div>
            </div>
            <div className='athletes_infos'>
              <div className='athletes_info'>
                <img src={Athletes_img4} alt="athletes img" />
                <h3>{t('athletesName4')}</h3>
              </div>
              <div className='athletes_info'>
                <img src={Athletes_img5} alt="athletes img" />
                <h3>{t('athletesName5')}</h3>
              </div>
              <div className='athletes_info'>
                <img src={Athletes_img6} alt="athletes img" />
                <h3>{t('athletesName6')}</h3>
              </div>
            </div>
          </div>
          <Link to='/seemore' className='see_more' href="#">{t('seeMore')}</Link>
        </div>
      </section>
    </>
  )
}

