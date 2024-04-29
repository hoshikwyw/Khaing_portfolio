import React from 'react'

const LanguageCard = ({src , text}) => {
  return (
    <div>
      <img src={src} alt="" />
      <h1>{text}</h1>
    </div>
  )
}

export default LanguageCard
