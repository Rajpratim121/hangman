type HangmanWordProps = {
  reveal?: boolean;
  guessedLetters: string[];
  wordToGuess: string;
};

export function HangmanWord({
  reveal = false,
  guessedLetters,
  wordToGuess,
}: HangmanWordProps) {
  return (
    <div
      style={{
        display: 'flex',
        fontFamily: 'monospace',
        fontSize: '5em',
        gap: '.25em',
        fontWeight: 'bold',
        textTransform: 'uppercase',
      }}>
      {wordToGuess.split('').map((letter, index) => {
        return (
          <span style={{ borderBottom: '.1em solid black' }} key={index}>
            <span
              style={{
                visibility:
                  guessedLetters.includes(letter) || reveal
                    ? 'visible'
                    : 'hidden',
                color:
                  !guessedLetters.includes(letter) && reveal ? 'red' : 'black',
              }}>
              {letter}
            </span>
          </span>
        );
      })}
    </div>
  );
}
