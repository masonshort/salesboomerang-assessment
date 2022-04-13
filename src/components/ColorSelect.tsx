import React from 'react';
import '../App.scss';
import { toast } from 'react-toastify';
import Card from 'react-bootstrap/Card';

interface CardProps {
  favColor: string;
  colorName: string;
}

const cardTextColor = (colorName: string): string => {
  if (colorName === 'Blue' || colorName === 'Indigo') {
    return 'white';
  }
  return 'black';
};

function ColorCard({ favColor, colorName }: CardProps) {
  return favColor !== colorName ? (
    <Card
      style={{
        textAlign: 'center',
        height: '20vh',
        background: `${colorName.toLowerCase()}`,
        color: cardTextColor(colorName),
      }}
    >
      <Card.Body
        style={{
          fontSize: '20px',
          textAlign: 'center',
        }}
      >
        {colorName}
      </Card.Body>
    </Card>
  ) : null;
}

export default function ColorSelect() {
  const [colorList, setColorList] = React.useState<Object>({});
  const [favColor, setFavColor] = React.useState<string>('');
  React.useEffect(() => {
    fetch('http://localhost:4000/', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => setColorList(data))
      .catch((error) => toast.error(`${error}`));
  }, []);

  return (
    <div className="App">
      {favColor !== '' && favColor !== 'Please select your favorite color' ? (
        <header className="App-header">{`My favorite color is  ${favColor}`}</header>
      ) : (
        <header className="App-header" />
      )}
      <div className="App-body">
        <select
          onChange={(event) => setFavColor(event.target.value)}
          className="form-select form-select-md mb-3"
          aria-label=".form-select-md example"
        >
          <option defaultChecked>Please select your favorite color</option>
          {Object.values(colorList).map((value, key) => (
            <option key={key} value={value}>
              {value}
            </option>
          ))}
        </select>
        <div style={{ fontSize: '25px', paddingBottom: '20px' }}>Colors available to select</div>
        <div className="card-group">
          {Object.values(colorList).map((value, key) => (
            <ColorCard favColor={favColor} colorName={value} key={key}></ColorCard>
          ))}
        </div>
      </div>
    </div>
  );
}
