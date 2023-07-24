import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AuthContext } from './App/Context/AuthContext';
import HomeNavigation from './App/Navigations/HomeNavigation';
import Login from './App/Pages/Login';
import Services from './App/Shared/Services';


export default function App() {

  const [userData,setUserData]=useState();
  useEffect(()=>{
    Services.getUserAuth().then(resp=>{
      console.log(resp); 
      if(resp)
      {
        setUserData(resp)
      }
      else{
        setUserData(null)
      }
    })
  },[]) 
  return (
    <View style={styles.container}>
      <Text>Loading message</Text>
      <AuthContext.Provider 
      value={{userData,setUserData}}>
      {userData?
      <NavigationContainer>
          <HomeNavigation/>
      </NavigationContainer>
      :<Login/>}
      
      </AuthContext.Provider>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#F6F8FC',
    
  },
});
