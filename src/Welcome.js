import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default function Welcome({ navigation }) {
  const handleLogin = () => navigation.navigate('LogIn')
  const handleSignin = () => navigation.navigate('SignIn')

  return (
    <View style={styles.container}>
      <Image source={require('../assets/Welcome.png')} style={styles.img} />
      <View>
        <Text style={styles.headText}>Welcome to Skill Sage!!</Text>
        <Text style={styles.text}>Find your perfect mentor within clicks</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.btn}>
          <TouchableOpacity>
            <Text style={styles.btntext} onPress={handleLogin}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btn}>
          <TouchableOpacity>
            <Text style={styles.btntext} onPress={handleSignin}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
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
  body: {
    marginTop: 75,
    marginBottom: 75,
  },
  btn: {
    backgroundColor: '#FFC700',
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 20,
    marginBottom: 40,
  },
  btntext: {
    justifyContent: 'center',
    maxWidth: 300,
    alignSelf: 'center',
    color: '#006E7F',
    fontWeight: 500,
    fontSize: 16,
  },
})
