// import * as React from "react";
// import store from "./redux/store";
// import { Provider } from "react-redux";
// import { registerRootComponent } from "expo";
// import MainTab from "./routes";
// import { NavigationContainer } from "@react-navigation/native";
// import Index from "./index";
// // import Notification from "./notifications/notification";
// // import StartScreen from "./screens/StartScreen";

// const App = () => {
//   return (
//     <NavigationContainer>
//       {/* <Index /> */}
//       <Index />
//     </NavigationContainer>
//   );
// };
// registerRootComponent(App);
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