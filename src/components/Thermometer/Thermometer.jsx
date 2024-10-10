import ReactSlider from 'react-slider';
import './Thermometer.css';
// import { useClimate, ClimateContext } from '../../context/ClimateContext';
import {useClimate} from '../../context/ClimateContext';
// import { useContext } from 'react';

function Thermometer() {
  const {temperature, setTemperature} = useClimate();
  

  return (
    <section>
      <h2>Thermometer</h2>
      <div className="actual-temp">Actual Temperature: {temperature}°F</div>
      <ReactSlider
        value={temperature}//{40}
        onAfterChange={(val) => {setTemperature(val)}}
        className="thermometer-slider"
        thumbClassName="thermometer-thumb"
        trackClassName="thermometer-track"
        ariaLabel={"Thermometer"}
        orientation="vertical"
        min={0}
        max={120}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Thermometer;
