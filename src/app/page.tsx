import { useEffect, useState } from 'react'
import Button from '@/components/Button'
import MemoryCard from '@/components/MemoryCard'
import Header from '../components/Header'
import Main from '../components/Main'
import RadioButton from '@/components/RadioButton'
import Remember from '@/components/Remember'
import { helperShuffleArray } from '@/helpers/arrayHelpers'
import { apiGetAllFlashCards } from '@/data/allFlashCards'

export default function Home() { 
  // BACK END
  const [allCards, setAllCards] = useState([]);

  // PARA ESTUDO
  const [studyCards, setStudyCards] = useState([]);
  const [loading, setLoading] = useState(true);

  const [ radioButtonShowTitle, setRadioButtonShowTitle ] = useState(true)

  useEffect (() => {
    // PROMISE
    // apiGetAllFlashCards().then((allFlashCards) => {
    //   setAllCards(allFlashCards);
    // });

    
    async function getAllCards() {
      const backEndAllCards = await apiGetAllFlashCards();
      setAllCards(backEndAllCards);
      setLoading(false);
    }
    getAllCards();
   // IIFE
    // (async function getAllCards() {
    //   const backEndAllCards = await apiGetAllFlashCards();
    //   setAllCards(backEndAllCards);
    // }) ();
    
  }, []);
    
 
  function handleshuffle() {
    const shuffledCards = helperShuffleArray(studyCards)
    setStudyCards(shuffledCards)
    }

    useEffect(() => {
      setStudyCards(allCards.map(card => ({...card, showTitle: true})));
    }, [allCards]);
   
    } 
    function handleRadioShowDescriptionClick() {
      // prittier-ignore
      const updateCards =
       [... studyCards].map(card => ({...card, showTitle: false}));
      setStudyCards(updateCards);
      setRadioButtonShowTitle(false);
          
    }
      
    function handleRadioShowTitleClick() {
      const updateCards =
      [...studyCards].map(card => ({...card, showTitle: true}));
      setStudyCards(updateCards);
      setRadioButtonShowTitle(true);
    }

    function handleToggleFlashCard(cardId) {
      const updateCards= [...studyCards];
      const cardIndex = updateCards.findIndex((card) => card.id === cardId);
      updateCards[cardIndex].showTitle = !updateCards[cardIndex].showTitle;
      setStudyCards(updateCards);
    }

    
  return (
    <>
      
      <Header>Flash Cards V2</Header>
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
          
          {studysCards.map(({id, title, description, showTitle }) => {
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


function setAllCards(updateCards: any[]) {
  throw new Error('Function not implemented.')
}


function setRadioButtonShowTitle(arg0: boolean) {
  throw new Error('Function not implemented.')
}
