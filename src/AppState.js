import { combineReducers } from 'redux';

import fetchWeather from './containers/reducer';

const rootReducer = combineReducers({
  // state: (state = {}) => state
  weather: fetchWeather
});

export default rootReducer;