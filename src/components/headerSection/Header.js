import React from 'react'
import '../../styles/Header.css'
import Brand from '../../img/archery.png'
import ruIcon from '../../img/ru.png'
import uzIcon from '../../img/uz.png'

export default function Header() {
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
              <div className='lang_content'>
                <a href="uz">
                  <img className='lang_icon' src={uzIcon} alt="uz icon" />
                </a>
                <a href="ru">
                  <img className='lang_icon' src={ruIcon} alt="ru icon" />
                </a>
              </div>
            </div>
            <input className='header_input' placeholder="поиск по сайту" type="search" name="search"  />
            <span>
              <i className='bx bx-search-alt search_icon'></i>
            </span>
            <h3 className='header_address'>Город Ташкент, Чиланзарский район, улица Фозилтепа, дом 38 
              {/* <i className='bx bx-location-plus location_icon'></i> */}
            </h3>
            <div className='lang_content2'>
              <a href="uz">
                <img className='lang_icon' src={uzIcon} alt="uz icon" />
              </a>
              <a href="ru">
                <img className='lang_icon' src={ruIcon} alt="ru icon" />
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
