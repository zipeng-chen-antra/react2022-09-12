import React from 'react'
import "./card.scss"

export default function Card() {
  return (
    <div className='card'>
        <h1 className='card__title card__title--light'>Card</h1>
        <img className='card__image' src='' alt='image'/>
    </div>
  )
}
