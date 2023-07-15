import { Image, StyleSheet, Text, View, TextInput, Button } from 'react-native'
import ForgotPassword from './ForgotPassword'

export default function Login() {
  const goToForgotPassword = () =>
    this.props.navigation.navigate('ForgotPassword')
  return (
    <View style={styles.container}>
      <Image source={require('../assets/Login.png')} style={styles.img} />
      <View>
        <Text style={styles.headText}>Login</Text>
      </View>
      <View style={styles.innercontainer}>
        <View style={styles.input}>
          <TextInput placeholder='Email ID' />
        </View>
        <View style={styles.input}>
          <TextInput placeholder='Password' secureTextEntry={true} />
        </View>
        <View>
          <Text style={styles.text1} onPress={goToForgotPassword}>
            Forget Password?
          </Text>
        </View>
        <View style={styles.btn}>
          <Button title='Login' color={'#ffc700'} />
        </View>
        <View>
          <Text style={styles.text}>
            Don't have an account? <Text style={styles.text1}>Sign In</Text>
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  innercontainer: {
    marginHorizontal: 20,
  },
  img: {
    marginTop: 0,
    paddingTop: 0,
  },
  headText: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 50,
    marginBottom: 50,
    color: '#006E7F',
    fontSize: 24,
    fontWeight: 500,
  },
  text: {
    marginLeft: 'auto',
    marginRight: 'auto',
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
