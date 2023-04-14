import * as React from "react";
import store from "./redux/store";
import { Provider } from "react-redux";
import { registerRootComponent } from "expo";
import MainTab from "./routes";
import { NavigationContainer } from "@react-navigation/native";
import Index from "./index";
// import StartScreen from './screens/StartScreen';

const App = () => {
  return (
    <NavigationContainer>
      <Index />
    </NavigationContainer>
  );
};
registerRootComponent(App);
