import React from 'react'
import GoogleMaps from '../googleMap/GoogleMaps'
import Kubok from '../../img/kubok.png'
import '../../styles/Competition.css'

export default function Competition() {
  return (
    <>
    {/* <div className="container">
      <div className='competition_content'>
        <h2>Правила стрельбы</h2>
        <p>В помещении стрельба ведется с расстояний в 18, 30 или 50 метров (для мужчин и женщин). На открытом воздухе расстояние до мишеней составляет 30, 50, 70 и 90 метров для мужчин и 30, 50, 60 и 70 метров для женщин. На Олимпийских играх стрельба из лука ведется только с расстояния 70 метров.</p>
        <p>Соревнования по стрельбе из лука проводятся как на открытом воздухе, так и в помещении. Стрельба на соревнованиях ведется сериями по 3 или 6 стрел. По стандартам FITA на серию из 3 стрел даётся 2 минуты, а на серию из 6 стрел 4 минуты.</p>
        <p> На всех соревнованиях сначала проводится квалификация, а затем, среди оставшихся спортсменов, по олимпийской системе, разыгрывается победитель. Эта система также актуальна для чемпионатов Мира и Европы. Стрельба из лука ведется по одобренным FITA мишеням. Мишени для стрельбы из лука сделаны из бумаги с изображенными на ней концентрическими кругами разного цвета. Мишени крепятся к специальным щитам, которые изготавливаются из прочного материала, препятствующего прохождению стрел насквозь. Размер мишени зависит от соревновательной дистанции. Внутри «десятки» размечена ещё одна окружность вдвое меньшего диаметра, она необходима для разрешения спорных ситуаций равенства очков и для фиксации мировых рекордов.</p>
      </div>

      <div className='organization'>
        <h2>Организации</h2>
        <p>Всемирная федерация стрельбы из лука (WA, ранее известная как FITA - Международная федерация стрельбы из лука) является руководящим органом спорта по стрельбе из лука. Основана 4 сентября 1931 года в Lwow, Польша (ныне Львов, Украина). Ее основателями были 7 государств: Франция, Чехословакия , Швеция, Польша, США, Венгрии и Италии. Объединяет 156 национальных федераций и других объединений по стрельбе из лука, и признается Международным олимпийским комитетом.</p>
        <p>В рамках празднования 80-летнего юбилея организации в июле 2011 года, подавляющее большинство делегатов Конгресса FITA проголосовали за изменение названия с Международной федерации стрельбы из лука (FITA) на Всемирную федерацию стрельбы из лука (WA).</p>
      </div>
    </div> */}
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
