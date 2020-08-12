import { createStackNavigator } from '@react-navigation/stack';
import Login from './App';
import Register from './components/Register'
const AppNavigator = createStackNavigator({
  Login: { screen: Login },
  Register: { screen: Register},
});