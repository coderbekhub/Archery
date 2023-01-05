import React from 'react'
import '../../styles/Header.css'
import Brand from '../../img/archery.png'
import ruIcon from '../../img/ruicon.png'
import uzIcon from '../../img/uzicon.png'
import enIcon from '../../img/enicon.png'
// import { useEffect } from 'react'
// import { ARCHERY_LANGUAGE } from '../../tools/constants'
// import { getLanguage, getText } from '../../Locales'
import { useTranslation } from 'react-i18next';

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
  const myChangeLanguage = (e) => {
    // localStorage.setItem(ARCHERY_LANGUAGE, e)
    // document.location.reload(true)
  }

  // useEffect(() => {
    
  // }, [])

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
                  {/* Федерация стрельбы из лука Узбекистана */}
              </div>
            </div>
            <input className='header_input' placeholder="поиск по сайту" type="search" name="search"  />
            <span>
              <i className='bx bx-search-alt search_icon'></i>
            </span>
            <h3 className='header_address'> 
              Город Ташкент, Чиланзарский район, улица Фозилтепа, дом 38
            </h3>

              {/* <ul className='lang_list'> */}
                {/* <li className='lang_item lang_wrap'> */}
                  {/* <h5>
                    {getLanguage() === 'en' ? <><img src={enIcon} alt="" /> English</> : getLanguage() === 'uz' ? <><img src={uzIcon} alt="" /> O'zbek</> : <><img src={ruIcon} alt="" /> Русский</>}
                  </h5> */}

                  {/* <div className="wrap">
                    <p onClick={() => myChangeLanguage('uz')}><i><img src={uzIcon} alt="..." /></i> O'zbek</p>
                    <p onClick={() => myChangeLanguage('ru')}><i><img src={ruIcon} alt="..." /></i> Русский</p>
                    <p onClick={() => myChangeLanguage('en')}><i><img src={enIcon} alt="..." /></i> English</p>
                  </div> */}
                {/* </li> */}
              {/* </ul> */}

              <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Select Language
                </button>
                <ul className="dropdown-menu">
                  {language.map(({code, name, country_code}) => (
                    <li key={country_code}>
                      <button className='dropdown-item'>{name}</button>
                    </li>
                  ))}
                  {/* <li><a className="dropdown-item" href="#">O'zbek</a></li>
                  <li><a className="dropdown-item" href="#">Русский</a></li>
                  <li><a className="dropdown-item" href="#">English</a></li> */}
                </ul>
              </div>
          </div>
        </div>
      </header>
    </>
  )
}
