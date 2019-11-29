import { createStackNavigator, createAppContainer } from "react-navigation";
import SettingsScreen from '../screens/SettingsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import NewsScreen from '../screens/NewsScreen';
import CameraScreen from '../screens/CameraScreen';


const newEmpNav = createStackNavigator(
  {
    NewsScreen: {
      screen: NewsScreen,
      title: "News"
    },

    CustomerTest: {
      screen: CustomerTest,
      navigationOptions: {
        title: "CustomerTest"
      }
    },
   
  },
  {
    initialRouteName: "NewEmpScreen",
    headerMode: "none"
  }
);

export default newEmpNav;