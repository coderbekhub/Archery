import React from 'react'
import GoogleMaps from '../../googleMap/GoogleMaps'
import '../../../styles/NewsPage.css'
import TrainingImg from '../../../img/training_img.jpg'

export default function Training() {
  return (
    <>
      <div className="container">
        <div className="training_content">
          <h2>Учебно-тренировичные сборы</h2>
          <div className="training_info">
            <div className='training_img_content'>
              <img src={TrainingImg} alt="" />
            </div>
              <span className='training_photo_date'>2022-12-12</span>
          </div>
        </div>
      </div>
      <GoogleMaps />
    </>
  )
}
