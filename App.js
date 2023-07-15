import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Login from './src/Login.js'
import Home from './src/Home.js'
import Mentor from './src/Mentor.js'

export default function App() {
  return (
    <View>
      <Login />
      {/* <Home /> */}
      {/* <Mentor /> */}
      <StatusBar style='auto' />
    </View>
  )
}
