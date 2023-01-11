import React from 'react'
import '../../styles/Footer.css'
import ToTop from '../ToTop'
import { useTranslation } from 'react-i18next';

export default function Footer() {
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
      <footer id='site_footer'>
        <ToTop />

        <section className='footer_section'>
          <div className="container">
            <div className='footer_sites'>
              <a href="#">SITE 1</a>
              <a href="#">SITE 2</a>
              <a href="#">SITE 3</a>
              <a href="#">SITE 4</a>
            </div>
            <div className='footer_infos'>
              <a className='phone_num' href="tel:+998909796568">Tel: +998909796568</a>
              <h2>{t('site_name')}</h2>
              <a className='gmail' href="uaf.office@gmail.com">uaf.office@gmail.com</a>
            </div>
            <h2 className='created'> {t('created')} <a className='create_link' href="https://github.com/coderbekhub" target={'_blank'}>CoderBek</a></h2>
          </div>
        </section>
      </footer>
    </>
  )
}

