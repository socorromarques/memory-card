import { get } from './httpServices';

const BACK_END_URL = 'http://localhost:3001/flashcards';

export async function apiGetAllFlashCards() {
    const allFlashCards = get(BACK_END_URL);
    return allFlashCards;       
}