import React from 'react'
import GoogleMaps from '../googleMap/GoogleMaps'
import Kubok from '../../img/kubok.png'
import '../../styles/Competition.css'
import { useTranslation } from 'react-i18next';

export default function Competition() {
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
      <div className="container">
        <div className='competition_flex'>
          <div className='competition_content'>
            <h3>20 <span className='competition_month'>{t('competitionMonth')}</span></h3>
            <img src={Kubok} alt="Kubok" />
            <div className='competition_info'>
              <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum!</h2>
              <span>19-05-2022 - 22-05-2022</span>
              <span>{t('competitionCity')}</span>
            </div>
          </div>
          <div className='competition_content'>
            <h3>20 <span className='competition_month'>{t('competitionMonth')}</span></h3>
            <img src={Kubok} alt="Kubok" />
            <div className='competition_info'>
              <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum!</h2>
              <span>19-05-2022 - 22-05-2022</span>
              <span>{t('competitionCity')}</span>
            </div>
          </div>
          <div className='competition_content'>
            <h3>20 <span className='competition_month'>{t('competitionMonth')}</span></h3>
            <img src={Kubok} alt="Kubok" />
            <div className='competition_info'>
              <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum!</h2>
              <span>19-05-2022 - 22-05-2022</span>
              <span>{t('competitionCity')}</span>
            </div>
          </div>
          <div className='competition_content'>
            <h3>20 <span className='competition_month'>{t('competitionMonth')}</span></h3>
            <img src={Kubok} alt="Kubok" />
            <div className='competition_info'>
              <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum!</h2>
              <span>19-05-2022 - 22-05-2022</span>
              <span>{t('competitionCity')}</span>
            </div>
          </div>
        </div>
      </div>
      <GoogleMaps />
    </>
  )
}
