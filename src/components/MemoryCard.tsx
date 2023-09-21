'use client'

import { useState } from "react"

export default function MemoryCard({
  title = 'Título do card', 
  description = 'Descrição do card que pode conter mais palavras que o título',

}) {
  const [ showtitle, setShowtitle ] = useState(true)

  function handleCardClick() {
    setShowtitle(currentShowTitle => !currentShowTitle)}

  const  fontSizeClassName = showtitle ? 'text-xl' : 'text-sm'
  return (
    <div
      className={`shadow-lg p-4 w-80 h-48 m-2 cursor-pointer
      flex flex-row justify-center items-center
      font-semibold text-xl`}
      style={{fontFamily: "'jetbrains mono, monospace"}}
      onClick={handleCardClick}
    >

      {showtitle ?  title : description} 

    </div>

  ) 
   
}