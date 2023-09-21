"use client"

import React, { useState } from 'react'
import MemoryCard from '@/components/MemoryCard'
import Header from '../components/Header'
import Main from '../components/Main'
import { allFlashCards } from '../data/allFlashCards'
import Remember from '@/components/Remember'
import Button from '@/components/Button'
import { helperShuffleArray } from '@/helpers/arrayHelpers'
import RadioButton from '@/components/RadioButton'

export default function Home() { 
  const [allCards, setAllCards] = useState(allFlashCards)
  const [ showtitle, setShowtitle ] = useState(true)
  function handleButtonClick() {
    const shuffledCards = helperShuffleArray(allCards)
    setAllCards(shuffledCards)
    
  }
    function handleRadioShowTitleClick() {
      setShowtitle(false);
    }
    function handleRadioShowDescriptionClick() {
      setShowtitle(true);
    }

    console.log(showtitle)
    
  return (
    <>
      
      <Header>Flash Cards</Header>
      <Main>
        <div className='text-center mb-4'>
          <Button onButtonClick={handleButtonClick}>Embaralhar Cards</Button>
        </div>
        <div className='flex flex-row items-center justify-center space-x-4 m-4'>
          <RadioButton 
          id="radioButtonShowTitle" 
          name="showInfo"
          buttonChecked={showtitle}
          onButtonClick={handleRadioShowTitleClick}
          >
            Mostrar título
            
          </RadioButton>

          <RadioButton 
          id="radioButtonShowDescription" 
          name="showInfo"
          buttonChecked={showtitle}
          onButtonClick={handleRadioShowDescriptionClick}
          >
            Mostrar descrição
          
          </RadioButton>
        </div>
        
        <Remember>
          {
          allFlashCards.map((card) => {
            return (
              <MemoryCard key={card.title} title={card.title} description={card.description} />
    )
  })
  }
        </Remember>
      </Main>

    </>
   
  )
}