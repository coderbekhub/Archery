import React from 'react'
import '../../global.css'
import '../../styles/LittleAboutus.css'
import ArcheryCenter from '../../img/archerycentre.jpg'
import AboutImg1 from '../../img/about_img1.jpg'
import AboutImg2 from '../../img/about_img2.jpg'
import AboutImg3 from '../../img/about_img3.jpg'
import i18next, { t } from 'i18next'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next';

export default function LittleAboutus() {
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
      <section className='about_section'>
        <div className="container">
          <div className='about_content'>
            <img src={ArcheryCenter} alt="ArcheryCenter" />
            <div className='about_content2'>
              <h2> {t('aboutTitle')} </h2>
              <p className='about_text'> {t('aboutText')} </p>
              <p className='about_text2'>
                {t('aboutText2')}
              </p>
            </div>
          </div>

          <div className='about_infos'>
            <div className='about_info'>
              <img src={AboutImg1} alt="img" />
              <h2>{t('aboutRules')}</h2>
              <p className='about_info-text'>{t('aboutInfoText')}</p> <br />
              <p className='about_info-text'>{t('aboutInfoText2')}</p>
            </div>
            <div className='about_info'>
              <img src={AboutImg2} alt="img" />
              <h2>{t('aboutRules')}</h2>
              <p className='about_info-text'>{t('aboutInfoText3')}</p>
              <p className='about_info-text'>{t('aboutInfoText4')}</p>
            </div>
            <div className='about_info'>
              <img src={AboutImg3} alt="img" />
              <h2>{t('aboutRules')}</h2>
              <p className='about_info-text'>{t('aboutInfoText5')}</p> <br />
              <p className='about_info-text'>{t('aboutInfoText6')}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
