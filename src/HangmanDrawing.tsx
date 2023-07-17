const HEAD = (
  <div
    style={{
      height: '40px',
      width: '40px',
      borderRadius: '100%',
      border: '7px solid black',
      position: 'absolute',
      top: '40px',
      right: '-22.5px',
    }}
  />
);
const BODY = (
  <div
    style={{
      height: '75px',
      width: '7px',
      background: 'black',
      position: 'absolute',
      top: '90px',
      right: '0px',
    }}
  />
);
const RIGHT_ARM = (
  <div
    style={{
      height: '7px',
      width: '75px',
      background: 'black',
      position: 'absolute',
      top: '127.5px',
      right: '-75px',
      transform: 'rotate(-30deg)',
      transformOrigin: 'left bottom',
    }}
  />
);
const LEFT_ARM = (
  <div
    style={{
      height: '7px',
      width: '75px',
      background: 'black',
      position: 'absolute',
      top: '127.5px',
      right: '7px',
      transform: 'rotate(30deg)',
      transformOrigin: 'right bottom',
    }}
  />
);
const LEFT_LEG = (
  <div
    style={{
      height: '75px',
      width: '7px',
      background: 'black',
      position: 'absolute',
      top: '155px',
      right: '0px',
      transform: 'rotate(30deg)',
      transformOrigin: 'top left',
    }}
  />
);
const RIGHT_LEG = (
  <div
    style={{
      height: '75px',
      width: '7px',
      background: 'black',
      position: 'absolute',
      top: '155px',
      right: '0px',
      transform: 'rotate(-30deg)',
      transformOrigin: 'top right',
    }}
  />
);

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, LEFT_LEG, RIGHT_LEG];

  return (
    <div style={{ position: 'relative' }}>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      {/* {HEAD} {BODY} {RIGHT_ARM} {LEFT_ARM} {LEFT_LEG} {RIGHT_LEG} */}
      <div
        style={{
          height: '40px',
          width: '7px',
          backgroundColor: 'black',
          position: 'absolute',
          top: '0px',
          right: '0px',
        }}
      />
      <div
        style={{
          height: '7px',
          width: '175px',
          backgroundColor: 'black',
          marginLeft: '95px',
        }}
      />
      <div
        style={{
          height: '300px',
          width: '7px',
          backgroundColor: 'black',
          marginLeft: '95px',
        }}
      />
      <div
        style={{ height: '7px', width: '200px', backgroundColor: 'black' }}
      />
    </div>
  );
}
