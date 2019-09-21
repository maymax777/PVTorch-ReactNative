import { createStackNavigator, createSwitchNavigator } from "react-navigation";

const DELAY_TIME = 700;

import SplashScreen from '../view/SplashScreen';
import NewsScreen from '../view/NewsScreen';
import NewsDetailScreen from '../view/NewsDetailScreen';
import NewsListScreen from '../view/NewsListScreen';

const MainNavigator = createStackNavigator({
  NewsScreen : NewsScreen,
  NewsDetailScreen:NewsDetailScreen,
  NewsListScreen:NewsListScreen,
});
const StartNavigator = createSwitchNavigator({  
  Splash: SplashScreen,
  MainNavigator:MainNavigator,
});

export default StartNavigator;
