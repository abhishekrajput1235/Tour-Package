import {useState} from 'react';
import data from './data';
import Tours from './components/Tours';
// import './App.css';


const App = () => {

  const [tours,setTours] = useState(data);

  function removeTour(id)
  {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }
  if(tours.length === 0)
  {
    return(
      <div className='refresh-page-container'>
        <h2 className='refresh-page-heading'>No Tour Left</h2>
        <button className='refresh-btn' onClick={() => setTours(data)}>Refresh</button>
      </div>
    );
  }

  return (
   <div className='App'>
      <Tours tours={tours} removeTour={removeTour}></Tours>
   </div>
  );
}

export default App;
