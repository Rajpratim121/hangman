import { useCallback, useEffect, useState } from 'react';
import { HangmanDrawing } from './HangmanDrawing';
import { HangmanWord } from './HangmanWord';
import { Keyboard } from './Keyboard';
import words from './wordList.json';

function App() {
  function getWord() {
    return words[Math.floor(Math.random() * words.length)];
  }

  const [wordToGuess, setWordToGuess] = useState(getWord);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess
    .split('')
    .every((letter) => guessedLetters.includes(letter));

  const addGuessedLetters = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return;

      setGuessedLetters((prevLetters) => [...prevLetters, letter]);
    },
    [guessedLetters, isLoser, isWinner]
  );

  // fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/late`)
  // .then((response) => response.json())
  // .then((data:) => {
  //   console.log(data[0].meanings[0].definitions[0].definition);
  //   // Process the retrieved data here
  // })
  // .catch((error) => {
  //   console.log('An error occurred:', error);
  // });

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetters(key);
    };

    document.addEventListener('keypress', handler);

    return () => {
      document.removeEventListener('keypress', handler);
    };
  }, [addGuessedLetters]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key !== 'Enter') return;

      e.preventDefault();
      setGuessedLetters([]);
      setWordToGuess(getWord);
    };

    document.addEventListener('keypress', handler);

    return () => {
      document.removeEventListener('keypress', handler);
    };
  }, []);

  return (
    <div
      style={{
        maxWidth: '800px',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        margin: '0 auto',
        alignItems: 'center',
      }}>
      <div style={{ fontSize: '2rem', textAlign: 'center', padding: '.2rem' }}>
        {isWinner && 'Winner! - Press Enter to try again'}
        {isLoser && 'Nice Try - Press Enter to try again'}
      </div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord
        reveal={isLoser}
        guessedLetters={guessedLetters}
        wordToGuess={wordToGuess}
      />
      <div style={{ fontSize: '1rem', textAlign: 'center', padding: '.2rem' }}>
        {' '}
      </div>
      <div style={{ alignSelf: 'stretch' }}>
        <Keyboard
          disabled={isLoser || isWinner}
          activeLetters={guessedLetters.filter((letter) =>
            wordToGuess.includes(letter)
          )}
          inActiveLetters={incorrectLetters}
          addGuessedLetters={addGuessedLetters}
        />
      </div>
    </div>
  );
}

export default App;
