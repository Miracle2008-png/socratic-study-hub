import { supabase } from '../utils/supabase';

export interface Flashcard {
  id: string;
  topicId: string;
  front: string; // The question or concept name
  back: string;  // The answer or formula (LaTeX supported)
  interval: number; // Days until next review
  repetition: number; // Number of successful reviews in a row
  efactor: number; // Easiness factor
  nextReviewDate: number; // Timestamp
}

export type Grade = 0 | 1 | 2 | 3 | 4 | 5;
// 0: Complete blackout
// 1: Incorrect, but remembered the correct answer once shown
// 2: Incorrect, but seemed easy to recall
// 3: Correct, but required significant effort
// 4: Correct, after a hesitation
// 5: Perfect response

export class SRSEngine {
  static gradeCard(card: Flashcard, grade: Grade): Flashcard {
    let newInterval: number;
    let newRepetition: number;
    let newEfactor: number;

    if (grade >= 3) {
      if (card.repetition === 0) {
        newInterval = 1;
      } else if (card.repetition === 1) {
        newInterval = 6;
      } else {
        newInterval = Math.round(card.interval * card.efactor);
      }
      newRepetition = card.repetition + 1;
    } else {
      newRepetition = 0;
      newInterval = 1;
    }

    newEfactor = card.efactor + (0.1 - (5 - grade) * (0.08 + (5 - grade) * 0.02));
    if (newEfactor < 1.3) newEfactor = 1.3;

    const nextReviewDate = Date.now() + newInterval * 24 * 60 * 60 * 1000;

    return {
      ...card,
      interval: newInterval,
      repetition: newRepetition,
      efactor: newEfactor,
      nextReviewDate,
    };
  }

  static createCard(id: string, topicId: string, front: string, back: string): Flashcard {
    return {
      id,
      topicId,
      front,
      back,
      interval: 0,
      repetition: 0,
      efactor: 2.5,
      nextReviewDate: Date.now(), // Ready to review immediately
    };
  }

  static async saveFlashcardsToDeck(userId: string, newCards: Flashcard[]) {
    // Fetch current deck
    const { data } = await supabase.from('flashcards_decks').select('cards').eq('user_id', userId).single();
    let currentCards: Flashcard[] = [];
    
    if (data && data.cards) {
      currentCards = data.cards as Flashcard[];
    }
    
    // Append new cards
    const mergedCards = [...currentCards, ...newCards];
    
    // Upsert back
    await supabase.from('flashcards_decks').upsert({
      user_id: userId,
      cards: mergedCards as any,
      updated_at: new Date().toISOString()
    }, { onConflict: 'user_id' });
    
    return mergedCards;
  }
}
