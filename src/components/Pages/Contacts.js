import React from 'react'
import GoogleMaps from '../googleMap/GoogleMaps'

export default function Contacts() {
  return (
    <>
    <div className="container">
      <div className='contact_content'>
        <h1>Контакты</h1>
        <p>Город Ташкент, Чиланзарский район, улица Фозилтепа, дом 38</p>
        <a href="tel:+998909796568"><span>Тел:</span> +998909796568</a> <br />
        <a href="tel:+998930084887"><span>Тел:</span> +998930084887</a> <br />
        <a href="#" target={'_blank'}><span>Электронная почта:</span> uaf.office@gmail.com</a>
      </div>
    </div>
      <GoogleMaps />
    </>
  )
}
