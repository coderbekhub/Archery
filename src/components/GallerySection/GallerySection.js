import React from 'react'
import '../../styles/GalleryStyle.css'
import TeamCollective from '../../img/team_collective.jpg'
import TeamCollective2 from '../../img/team_collective2.jpg'
import TeamCollective3 from '../../img/team_collective3.jpg'
import Download from '../../img/download.svg'

export default function GallerySection() {
  return (
    <>  
      <section className='gallery_section'>
        <div className="container">
          <h2 className='gallery_title'>Галерея наших достижений</h2>
          <div className="gallery_content">
            <div className='gallery_info'>
              <img src={TeamCollective} alt="team collective img" />
              <h3>Сборная Узбекистана
                <i className='bx bx-right-arrow-alt bx-fade-left right_arrow' ></i>
              </h3>
            </div>
            <div className='gallery_info'>
              <img src={TeamCollective2} alt="team collective img" />
              <h3>Члены сборной Узбекистана в Турции обучаются секретам изготовления национального лука
                <i className='bx bx-right-arrow-alt bx-fade-left right_arrow' ></i>
              </h3>
            </div>
            <div className='gallery_info'>
              <img src={TeamCollective3} alt="team collective img" />
              <h3>Учебные тренировки по изготовлению лука
                <i className='bx bx-right-arrow-alt bx-fade-left right_arrow' ></i>
              </h3>
            </div>
          </div>

          <div className="choose_us">
            <h2 className='chooseus_title'>Почему выбирают нас</h2>
            <div className='chooseus_content'>
              <div className='chooseus_info'>
                <span>22</span>
                <img src={Download} alt="icon" />
                <h3>Филиала в городе</h3>
              </div>
              <div className='chooseus_info'>
                <span>278</span>
                <img src={Download} alt="icon" />
                <h3>Постоянных клиента</h3>
              </div>
              <div className='chooseus_info'>
                <span>800</span>
                <img src={Download} alt="icon" />
                <h3>Оказанных услуг</h3>
              </div>
              <div className='chooseus_info'>
                <span>32</span>
                <img src={Download} alt="icon" />
                <h3>Лучших специалистов</h3>
              </div>
            </div>
          </div>
        </div>
        <section className='pure_bgimg'></section>
      </section>
    </>
  )
}
