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
  const [ radioButtonShowTitle, setRadioButtonShowTitle ] = useState(true)
  function handleButtonClick() {
    const shuffledCards = helperShuffleArray(allCards)
    setAllCards(shuffledCards)
    
  }
   
    } 
    function handleRadioShowDescriptionClick() {
      // prittier-ignore
      const updateCards =
       [... allCards].map(card => ({...card, showTitle: false}));
      setAllCards(updateCards);
      setRadioButtonShowTitle(false);
          
        }
      
    function handleRadioShowTitleClick() {
      [... allCards].map(card => ({...card, showTitle: true}));
      setAllCards(updateCards);
      setRadioButtonShowTitle(true);
    }

    function handleToggleFlashCard(cardId) {
      const updateCards= [...allCards];
      const cardIndex = updateCards.findIndex((card) => card.id === cardId);
      updateCards[cardIndex].showTitle = !updateCards[cardIndex].showTitle;
      setAllCards(updateCards);
    }

    
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
          buttonChecked={radioButtonShowTitle}
          onButtonClick={handleRadioShowTitleClick}
          >
            Mostrar título
            
          </RadioButton>

          <RadioButton 
          id="radioButtonShowDescription" 
          name="showInfo"
          buttonChecked={!radioButtonShowTitle}
          onButtonClick={handleRadioShowDescriptionClick}
          >
            Mostrar descrição
          
          </RadioButton>
        
        </div>

        <Remember>
          
          {allFlashCards.map(({id, title, description, showTitle }) => {
            return (
              <MemoryCard 
              key={id}
              id={id}
              title={title}
              description={description}
              showFlashCardTitle={showTitle}
              onToggleFlashCard={handleToggleFlashCard}
               />
    )
  }) }
 
        </Remember>
      </Main>

    </>
   
  );
}

function setAllCards(updateCards: any[]) {
  throw new Error('Function not implemented.')
}


function setRadioButtonShowTitle(arg0: boolean) {
  throw new Error('Function not implemented.')
}
