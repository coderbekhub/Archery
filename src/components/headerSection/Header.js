import React from 'react'
import '../../styles/Header.css'
import Brand from '../../img/archery.png'
import ruIcon from '../../img/ruicon.png'
import uzIcon from '../../img/uzicon.png'
import enIcon from '../../img/enicon.png'
import { useEffect } from 'react'
import { ARCHERY_LANGUAGE } from '../../tools/constants'
import { getLanguage, getText } from '../../Locales'
// import { useTranslation } from 'react-i18next'

export default function Header() {
  const myChangeLanguage = (e) => {
    // i18n.changeLanguage(lang);
    localStorage.setItem(ARCHERY_LANGUAGE, e)
    document.location.reload(true)
  }

  // const { t, i18n } = useTranslation();

  useEffect(() => {
    
  }, [])

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
                  <h2 className='site_name'>Федерация стрельбы из лука Узбекистана</h2>
              </div>
            </div>
            <input className='header_input' placeholder="поиск по сайту" type="search" name="search"  />
            <span>
              <i className='bx bx-search-alt search_icon'></i>
            </span>
            <h3 className='header_address'> 
              Город Ташкент, Чиланзарский район, улица Фозилтепа, дом 38
            </h3>

              <ul className='lang_list'>
                <li className='lang_item lang_wrap'>
                  <h5>
                    {getLanguage() === 'en' ? <><img src={enIcon} alt="" /> English</> : getLanguage() === 'uz' ? <><img src={uzIcon} alt="" /> O'zbek</> : <><img src={ruIcon} alt="" /> Русский</>}
                  </h5>

                  <div className="wrap">
                    <p onClick={() => myChangeLanguage('uz')}><i><img src={uzIcon} alt="..." /></i> O'zbek</p>
                    <p onClick={() => myChangeLanguage('ru')}><i><img src={ruIcon} alt="..." /></i> Русский</p>
                    <p onClick={() => myChangeLanguage('en')}><i><img src={enIcon} alt="..." /></i> English</p>
                  </div>
                </li>
              </ul>
          </div>
        </div>
      </header>
    </>
  )
}
