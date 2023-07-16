import { Image, StyleSheet, Text, View, TextInput, Button } from 'react-native'

export default function Welcome({ navigation }) {
  const pressHandler = () => navigation.navigate('Home')
  const handleSignin = () => navigation.navigate('SignIn')

  return (
    <View style={styles.container}>
      <Image source={require('../assets/Welcome.png')} style={styles.img} />
      <View>
        <Text style={styles.headText}>Welcome to Skill Sage!!</Text>
        <Text style={styles.text}>Find your perfect mentor within clicks</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  img: {
    marginTop: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: 0,
  },
  headText: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20,
    marginBottom: 10,
    color: '#006E7F',
    fontSize: 24,
    fontWeight: 500,
  },
  text: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 30,
    color: '#006E7F',
    fontWeight: 300,
  },
  text1: {
    marginLeft: 'auto',
    color: '#006E7F',
    fontWeight: 300,
    textDecorationLine: 'underline',
  },
  input: {
    marginVertical: 10,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  btn: {
    marginTop: 40,
    marginBottom: 20,
    // padding: 10,
  },
})
