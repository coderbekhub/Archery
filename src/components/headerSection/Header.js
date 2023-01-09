import React from 'react'
import '../../styles/Header.css'
import Brand from '../../img/archery.png'
import GlobeIcon from '../../img/globe.svg'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import i18next from 'i18next'

export default function Header() {
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

  useEffect(() => {
    document.title = t('document_title')
  },[t]) 

  return (
    <>
      <header id='site_header'>
        <div className="container">
          <div className='header_content'>
            <div className='media_content'>
              <div className='flex'>
                <a id='top' href="/">
                  <img className='brand' src={Brand} alt="site brand" />
                </a>
                  <h2 className='site_name'>{t('site_name')}</h2>
              </div>
            </div>
            <input className='header_input' placeholder="поиск по сайту" type="search" name="search"  />
            <span>
              <i className='bx bx-search-alt search_icon'></i>
            </span>
            <h3 className='header_address'>
              {t('header_address')}
            </h3>
              <div className="dropdown dropdown2 ">
                <button className="btn btn-link dropdown-toggle drop_toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <img className='globe_icon' src={GlobeIcon} alt="..." />
                </button>
                <ul className="dropdown-menu">
                  {language.map(({code, name, country_code}) => (
                    <li className='menu_list' key={country_code}>
                      <button className='dropdown-item' onClick={() => i18next.changeLanguage(code)}>
                        <span className={`flag-icon flag-icon-${country_code}`}></span>
                        {name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
          </div>
        </div>
      </header>
    </>
  )
}
