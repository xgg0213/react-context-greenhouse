import dayImage from './images/greenhouse-day.jpg';
import nightImage from './images/greenhouse-night.jpg';
import './Greenhouse.css';
import ThemeProvider from '../../context/ThemeContext';
import {useTheme, ThemeContext} from '../../context/ThemeContext';

import LightSwitch from './LightSwitch';
import ClimateStats from './ClimateStats';
import { useContext } from 'react';

function Greenhouse() {
  const {themeName} = useContext(ThemeContext);
  let image;
  if (themeName === 'day') image = dayImage;
  if (themeName === 'night') image=nightImage;

  return (
    <section>
      <img  className='greenhouse-img'
            src={image}
            alt='greenhouse' 
      />
      <LightSwitch />
      <ClimateStats />
    </section>
  );
}

export default Greenhouse;
