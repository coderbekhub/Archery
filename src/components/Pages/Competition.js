import React from 'react'
import GoogleMaps from '../googleMap/GoogleMaps'
import Kubok from '../../img/kubok.png'
import '../../styles/Competition.css'

export default function Competition() {
  return (
    <>
      <div className="container">
        <div className='competition_flex'>
          <div className='competition_content'>
            <h3>20 <span className='competition_month'>May</span></h3>
            <img src={Kubok} alt="Kubok" />
            <div className='competition_info'>
              <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum!</h2>
              <span>19-05-2022 - 22-05-2022</span>
              <span>Tashkent</span>
            </div>
          </div>
          <div className='competition_content'>
            <h3>20 <span className='competition_month'>May</span></h3>
            <img src={Kubok} alt="Kubok" />
            <div className='competition_info'>
              <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum!</h2>
              <span>19-05-2022 - 22-05-2022</span>
              <span>Tashkent</span>
            </div>
          </div>
          <div className='competition_content'>
            <h3>20 <span className='competition_month'>May</span></h3>
            <img src={Kubok} alt="Kubok" />
            <div className='competition_info'>
              <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum!</h2>
              <span>19-05-2022 - 22-05-2022</span>
              <span>Tashkent</span>
            </div>
          </div>
          <div className='competition_content'>
            <h3>20 <span className='competition_month'>May</span></h3>
            <img src={Kubok} alt="Kubok" />
            <div className='competition_info'>
              <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum!</h2>
              <span>19-05-2022 - 22-05-2022</span>
              <span>Tashkent</span>
            </div>
          </div>
        </div>
      </div>
      <GoogleMaps />
    </>
  )
}
