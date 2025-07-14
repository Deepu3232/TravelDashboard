import NetworkStatus from './components/NetworkStatus';
import MapView from './components/MapView'
import WeatherCard from './components/WeatherCard';
import UserPath from './components/UserPath';

import './App.css'

export default function App() {
  return (
    <div className='main'>
      <h1 className='heading'>Smart Travel Dashboard</h1>
      <div className='parent'>
        <div className='leftDiv'>
          <MapView/>
        </div>
        <div className='rightDiv'>
          <NetworkStatus/>
          <WeatherCard/>
        </div>
      </div>
      <div className='pathDiv'>
        <UserPath/>
      </div>
      
      
    </div>
  );
}

