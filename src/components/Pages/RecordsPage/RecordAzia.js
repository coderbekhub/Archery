import React from 'react'
import '../../../styles/Pages.css'
import GoogleMaps from '../../googleMap/GoogleMaps'

export default function RecordAzia() {
  return (
    <>
      <div className="container">
        <div className="azia_content">
          <h2>Рекорды Европы</h2>
          <p>Бурятская спортсменка Инна Степанова показала лучший результат в стрельбе из классического лука в квалификационном раунде на Кубке Азии. Бурятская лучница набрала 660 очков. На втором месте с результатом 654 балла расположилась Светлана Гомбоева, сообщили в Центре спортивной подготовки республики.</p>
        </div>
      </div>
      <GoogleMaps />
    </>
  )
}
