import { StyleSheet, Text, View } from 'react-native'
import Navigator from './routes/homestack.js'

export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName='Home'>
    //     <Stack.Screen name='home' component={Home} />
    //     <Stack.Screen name='mentor' component={Mentor} />
    //   </Stack.Navigator>
    //   {/* <View> */}
    //   {/* <Login /> */}
    //   {/* <Home /> */}
    //   {/* <Mentor /> /}
    //   {/* <StatusBar style='auto' /> */}
    //   {/* </View> */}
    // </NavigationContainer>
    <Navigator />
  )
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#fff',
    margin: 0,
    padding: 0,
  },
})
