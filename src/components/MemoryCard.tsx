export default function MemoryCard({
  id,
  title = 'Título do card', 
  description = 'Descrição do card que pode conter mais palavras que o título',
  showFlashCardTitle = true,
  onToggleFlashCard = null,
}) {
  
  function handleCardClick() {
    if (onToggleFlashCard) {
      onToggleFlashCard(id);
    }
  }

  const  fontSizeClassName = showFlashCardTitle ? 'text-xl' : 'text-sm';
  return (
    <div
      className={`shadow-lg p-4 w-80 h-48 m-2 cursor-pointer
      flex flex-row justify-center items-center
      font-semibold ${fontSizeClassName} text-xl`}
      style={{fontFamily: "'jetbrains mono, monospace"}}
      onClick={handleCardClick}
    >

      {showFlashCardTitle ?  title : description} 

    </div>

  )
}
   
