import React from 'react'
import GoogleMaps from '../../googleMap/GoogleMaps'
import VideoArchery from '../../../img/videopage.mp4'
import '../../../styles/NewsPage.css'

export default function Video() {
  return (
    <>
    <div className="container">
      <div className='video_content'>
        <h2>Archery motivation video</h2>
        <video src={VideoArchery} controls="controls" preload="metadata"></video>
      </div>
    </div>
      <GoogleMaps />
    </>
  )
}
