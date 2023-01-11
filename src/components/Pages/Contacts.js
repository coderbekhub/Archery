import React from 'react'
import GoogleMaps from '../googleMap/GoogleMaps'
import { useTranslation } from 'react-i18next';

export default function Contacts() {
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
      <div className='contact_content'>
        <h1>{t('contactContent/h1')}</h1>
        <p>{t('contactContent/p')}</p>
        <a href="tel:+998909796568"><span>{t('contactContent/tell')}</span> +998909796568</a> <br />
        <a href="tel:+998930084887"><span>{t('contactContent/tell')}</span> +998930084887</a> <br />
        <a href="#" target={'_blank'}><span>{t('contactContent/email')}</span> uaf.office@gmail.com</a>
      </div>
    </div>
      <GoogleMaps />
    </>
  )
}
