import { useState } from 'react';
import data from './data';
import Tours from './components/Tours';
import './App.css';

const App = () => {
  const [tours, setTours] = useState(data);
  
  console.log("App rendering with data:", tours);
  
  function removeTour(id) {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  if (tours.length === 0) {
    return (
      <div style={{textAlign: 'center', marginTop: '50px'}}>
        <h2>No Tours Left</h2>
        <button 
          style={{
            padding: '10px 20px',
            background: 'white',
            border: '1px solid blue',
            borderRadius: '4px',
            cursor: 'pointer',
            marginTop: '20px'
          }} 
          onClick={() => setTours(data)}
        >
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div style={{maxWidth: '1200px', margin: '0 auto', padding: '20px'}}>
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  );
};

export default App;