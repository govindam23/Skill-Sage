import { createStackNavigator } from 'react-navigation-stack'
import Login from '../src/Login.js'
// import Signup from '../screens/Signup'
import ForgotPassword from '../src/ForgotPassword.js'

const AuthNavigation = createStackNavigator(
  {
    Login: { screen: Login },
    ForgotPassword: { screen: ForgotPassword },
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
  }
)

export default AuthNavigation
