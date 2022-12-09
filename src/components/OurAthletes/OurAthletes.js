import '../../styles/OurAthletes.css'
import Athletes_img1 from '../../img/athletes_img1.jpg'
import Athletes_img2 from '../../img/athletes_img2.jpg'
import Athletes_img3 from '../../img/athletes_img3.jpg'
import Athletes_img4 from '../../img/athletes_img4.jpg'
import Athletes_img5 from '../../img/athletes_img5.jpg'
import Athletes_img6 from '../../img/athletes_img6.png'
import { Link } from 'react-router-dom';

export default function OurAthletes() {
  return (
    <>
      <section className="our_athletes">
        <div className="container">
          <h2 className='athletes_title'>Наши спортсмены</h2>
          <span className='athletes_text'>профессионалы высшей категории</span>

          <div className='athletes_content'>
            <div className='athletes_infos'>
              <div className='athletes_info'>
                <img src={Athletes_img1} alt="athletes img" />
                <h3>Соладтенко Анастасия</h3>
              </div>
              <div className='athletes_info'>
                <img src={Athletes_img2} alt="athletes img" />
                <h3>Абдусаттарова Зиёдахон</h3>
              </div>
              <div className='athletes_info'>
                <img src={Athletes_img3} alt="athletes img" />
                <h3>Аловиддин Абдулбори</h3>
              </div>
            </div>
            <div className='athletes_infos'>
              <div className='athletes_info'>
                <img src={Athletes_img4} alt="athletes img" />
                <h3>Юнусова Камола</h3>
              </div>
              <div className='athletes_info'>
                <img src={Athletes_img5} alt="athletes img" />
                <h3>Ғофуров Зокиржон</h3>
              </div>
              <div className='athletes_info'>
                <img src={Athletes_img6} alt="athletes img" />
                <h3>Қароров Миржалол</h3>
              </div>
            </div>
          </div>
          <Link to='/seemore' className='see_more' href="#">see more</Link>
        </div>
      </section>
    </>
  )
}

