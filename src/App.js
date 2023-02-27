import * as React from 'react';
import store from './redux/store';
import { Provider } from 'react-redux';
import { registerRootComponent } from 'expo';
import StartScreen from './screens/StartScreen';

const App = () => {
  return (
    <Provider store={store}>
      <StartScreen />
    </Provider>
  );
}
registerRootComponent(App);

