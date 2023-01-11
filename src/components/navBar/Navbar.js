import '../../global.css'
import '../../styles/Navbar.css'
import '../../styles/Header.css'
import '../headerSection/Header';
import { Link } from 'react-router-dom'
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa'
// FaTimes
import { useTranslation } from 'react-i18next';
import { useRef } from 'react'
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

export default function Navbar(props) {
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

  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const toggle2 = () => setDropdownOpen2((prevState) => !prevState);

  const navRef = useRef()
  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav')
  }

  return (
    <>
      <div className='container burger_lang'>
        <button className='nav_btn nav_burger' onClick={showNavbar}>
          <FaBars />
        </button>
      </div>
      <section className='nav_section'>
        <div className="container">
          <nav ref={navRef} className='nav_bar'>
            {/* <button className='nav_btn nav_close_btn' onClick={showNavbar}>
              <FaTimes />
            </button> */}
            
            <ul className="nav_list">
              <li><Link to="/" className="nav_link" onClick={showNavbar}>{t('nav_home')}</Link></li>
              <li><Link to="/federation" className="nav_link" onClick={showNavbar}>{t('nav_ourFederation')}</Link></li>
              <li><Link to="/gallery" className="nav_link" onClick={showNavbar}>{t('nav_gallery')}</Link></li>
              <li><Link to="/competition" className="nav_link" onClick={showNavbar}>{t('nav_competition')}</Link></li>
              {/* <li>
              <Link className="nav_link">
                <Dropdown isOpen={dropdownOpen} toggle={toggle} {...props}>
                  <DropdownToggle caret className='nav_link'>
                    РЕКОРДЫ
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem><Link to="/azia" className='records'>Рекорды Азии</Link></DropdownItem>
                    <DropdownItem><Link to="/world" className='records'>Рекорды Мира</Link></DropdownItem>
                    <DropdownItem><Link to="/uzb" className='records'>Рекорды Узбекистана</Link></DropdownItem>
                    <DropdownItem><Link to="/standards" className='records'>Нормативы присвоения</Link></DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </Link>
              </li> */}
              {/* <li>
              <Link className="nav_link">
                <Dropdown isOpen={dropdownOpen2} toggle={toggle2} {...props}>
                  <DropdownToggle caret className='nav_link'>
                    ФАКТЫ
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem><Link to='/psychological' className='records'>Психологическая подготовка</Link></DropdownItem>
                    <DropdownItem><Link to='/tactical' className='records'>Тактическая подготовка</Link></DropdownItem>
                    <DropdownItem><Link to='/physicaltraining'  className='records'>Физическая подготовка</Link></DropdownItem>
                    <DropdownItem><Link to='/willandsport' className='records'>Воля и спорт</Link></DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </Link>
              </li> */}
              <li>
                <Dropdown isOpen={dropdownOpen2} toggle={toggle2} {...props}>
                  <DropdownToggle caret>
                  <Link to="/news" className="drop">
                    {t('nav_news')}
                  </Link>
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem><Link to='/intervu' className='records' onClick={showNavbar}>{t('nav_interview')}</Link></DropdownItem>
                    {/* <DropdownItem><Link to='/photo' className='records'>Фото</Link></DropdownItem> */}
                    <DropdownItem><Link to='/video'  className='records' onClick={showNavbar}>{t('nav_video')}</Link></DropdownItem>
                    <DropdownItem><Link to='/training' className='records' onClick={showNavbar}>{t('nav_TrainingCamps')}</Link></DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </li>
              <li><Link to="/contacts" className="nav_link" onClick={showNavbar}>{t('nav_contacts')}</Link></li>
            </ul>
          </nav>
        </div>
      </section>
    </>
  )
}