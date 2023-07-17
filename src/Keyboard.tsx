import styles from './keyboard.module.css';

const KEYS = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

type KeyboardProps = {
  disabled?: boolean;
  activeLetters: string[];
  inActiveLetters: string[];
  addGuessedLetters: (letter: string) => void;
};

export function Keyboard({
  disabled,
  activeLetters,
  inActiveLetters,
  addGuessedLetters,
}: KeyboardProps) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(75px, 1fr))',
        gridGap: '.5rem',
      }}>
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInActive = inActiveLetters.includes(key);
        return (
          <button
            disabled={isInActive || isActive || disabled}
            className={`${styles.btn} ${isActive ? styles.active : ''} ${
              isInActive ? styles.inactive : ''
            }`}
            key={key}
            onClick={() => addGuessedLetters(key)}>
            {key}
          </button>
        );
      })}
    </div>
  );
}
