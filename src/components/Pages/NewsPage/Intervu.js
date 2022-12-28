import React from 'react'
import { Link } from 'react-router-dom'
import '../../../styles/NewsPage.css'
import GoogleMaps from '../../googleMap/GoogleMaps'

export default function Intervu() {
  return (
    <>
    <div className="container">
      <h2 className='intervu_title'>Интервью</h2>
      <div className='intervu_content'>
        <img src="https://picsum.photos/160/160" alt="newspage img" />
        <div className='intervu_info'>
          <p>Камондан отиш федерацияси президенти Отабек Сабитджанович Имамов билан суҳбат</p>
          <p>Хабарингиз бор, айни пайтда кенг тарқалган коронавирус сабаб тўрт йилликнинг энг муҳим мусобақаси – Олимпия ўйинлари 2021 йилга қолдирилди.</p>
          <p>Бу албатта ўз навбатида Ўзбекистон камондан отиш федерацияси режаларига ҳам ўз таъсирини кўрсатмай қолмади. Мазкур масалалар юзасидан Ўзбекистон камондан отиш матбуот хизмати, Ўзбекистон камондан отиш федерация президенти Имамов Отабек Сабитджанович билан қатор масалалар юзасидан интервью уюштирди.</p>
          <Link to='/moresee'>Подробнее</Link>
        </div>
      </div>
      <hr className='intervu_hr'/>
    </div>
      <GoogleMaps />
    </>
  )
}
