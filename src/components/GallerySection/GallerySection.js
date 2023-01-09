import React from 'react'
import '../../styles/GalleryStyle.css'
import TeamCollective from '../../img/team_collective.jpg'
import TeamCollective2 from '../../img/team_collective2.jpg'
import TeamCollective3 from '../../img/team_collective3.jpg'
import Download from '../../img/download.svg'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next';

export default function GallerySection() {
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
      <section className='gallery_section'>
        <div className="container">
          <h2 className='gallery_title'>{t('galleryTitle')}</h2>
          <div className="gallery_content">
            <div className='gallery_info'>
              <img src={TeamCollective} alt="team collective img" />
              <h3>
                {t('galleryText')}
                <i className='bx bx-right-arrow-alt bx-fade-left right_arrow' ></i>
              </h3>
            </div>
            <div className='gallery_info'>
              <img src={TeamCollective2} alt="team collective img" />
              <h3>
                {t('galleryText2')}
                <i className='bx bx-right-arrow-alt bx-fade-left right_arrow' ></i>
              </h3>
            </div>
            <div className='gallery_info'>
              <img src={TeamCollective3} alt="team collective img" />
              <h3>
                {t('galleryText3')}
                <i className='bx bx-right-arrow-alt bx-fade-left right_arrow' ></i>
              </h3>
            </div>
          </div>

          <div className="choose_us">
            <h2 className='chooseus_title'>{t('aboutChooseusTitle')}</h2>
            <div className='chooseus_content'>
              <div className='chooseus_info'>
                <span>22</span>
                <img src={Download} alt="icon" />
                <h3>{t('aboutBranches')}</h3>
              </div>
              <div className='chooseus_info'>
                <span>278</span>
                <img src={Download} alt="icon" />
                <h3>{t('aboutLoyalCustomers')}</h3>
              </div>
              <div className='chooseus_info'>
                <span>800</span>
                <img src={Download} alt="icon" />
                <h3>{t('aboutServices')}</h3>
              </div>
              <div className='chooseus_info'>
                <span>32</span>
                <img src={Download} alt="icon" />
                <h3>{t('aboutBestSpecialists')}</h3>
              </div>
            </div>
          </div>
        </div>
        <section className='pure_bgimg'></section>
      </section>
    </>
  )
}
