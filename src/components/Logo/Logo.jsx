import React from 'react'
import s from './style.module.css'

export const Logo = ({img,title,subtitle}) => {
  return (
    <>
    <div className={s.container}>
        <img src={img} alt="Logo" className={s.img}/>
        <div className={s.title}>{title}</div>
    </div>
    <div className={s.sutitle}>{subtitle}</div>
    </>
  )
}
