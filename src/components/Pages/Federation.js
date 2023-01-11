import React from 'react'
import '../../styles/Pages.css'
import GoogleMaps from '../googleMap/GoogleMaps'
import { useTranslation } from 'react-i18next';

export default function Federation() {
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
        <div className='about_federation'>
          <h2>{t('federationTitle')}</h2>
          <h3>{t('aboutFederation/h3')}</h3>
          <p>{t('aboutFederation/p')}</p>
          <hr />
          <p> {t('aboutFederation/p2')} </p>
          <hr />
          <p> {t('aboutFederation/p3')} </p>
        </div>

        <div>
          <ul className='federation_list'>
            <h2>{t('federationList/h2')}</h2>
            <li>
              {t('federationList/li')}
            </li>
            <li>
              {t('federationList/li2')}
            </li>
            <li>
              {t('federationList/li3')}
            </li>
            <li>
              {t('federationList/li4')}
            </li>
            <li>
              {t('federationList/li5')}
            </li>
            <li>
              {t('federationList/li6')}
            </li>
            <li>
              {t('federationList/li7')}
            </li>
            <li>
              {t('federationList/li8')}
            </li>
          </ul>
          <span className='federation_text'>{t('federationText/span')}</span>

          <div className='federation_male'>
            <h2>{t('federationMale/h2')}</h2>
            <ol className='male_list'>
              <li>{t('maleList/li')}</li>
              <li>{t('maleList/li2')}</li>
              <li>{t('maleList/li3')}</li>
              <li>{t('maleList/li4')}</li>
            </ol>
          </div>
          <div className='federation_fmale'>
            <h2>{t('federationFmale/h2')}</h2>
            <ol className='fmale_list'>
              <li>{t('fmaleList/li')}</li>
              <li>{t('fmaleList/li2')}</li>
              <li>{t('fmaleList/li3')}</li>
              <li>{t('fmaleList/li4')}</li>
            </ol>
          </div>
        </div>

      </div>
      <GoogleMaps />
    </>
  )
}
