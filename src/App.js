import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeandLocation from './components/TimeandLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forecast from './components/Forecast';
import getWeatherData from './services/weatherService'
import getFormattedWeatherData from './services/weatherService';

function App() {

  const fetchWeather = async () => {
    const data = await getFormattedWeatherData('weather', { q: 'london' });
    console.log(data);
  }

  fetchWeather();

  return (
    <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 shadow-xl shadow-gray-400'>
      <TopButtons />
      <Inputs />

      <TimeandLocation />
      <TemperatureAndDetails />
      <Forecast title={'hourly forecast'}/>
      <Forecast title={'daily forecast'}/>
    </div>
  );
}

export default App;
