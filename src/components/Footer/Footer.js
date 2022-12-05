import React from 'react'
import '../../styles/Footer.css'
import ToTop from '../ToTop'
// import BankBrand from '../../img/bank_brand.jpg'
// import FooterGif from '../../img/footer_img.gif'

export default function Footer() {
  return (
    <>
      <footer id='site_footer'>
        <ToTop />

        <section className='footer_section'>
          <div className="container">
            {/* <div className='footer_imgs'>
              <img className='bank_brand' src={BankBrand} alt="BankBrand" />
              <a href="https://www.liveinternet.ru/?kamonfd.uz" target={'_blank'}>
                <img className='footer_gif' src={FooterGif} alt="FooterGif" />
              </a>
            </div> */}
            <div className='footer_sites'>
              <a href="#">SITE 1</a>
              <a href="#">SITE 2</a>
              <a href="#">SITE 3</a>
              <a href="#">SITE 4</a>
            </div>
            <div className='footer_infos'>
              <a className='phone_num' href="tel:+998909796568">Tel: +998909796568</a>
              <h2>Федерация Стрельбы из Лука Узбекистана</h2>
              <a className='gmail' href="uaf.office@gmail.com">uaf.office@gmail.com</a>
            </div>
          </div>
        </section>
      </footer>
    </>
  )
}
