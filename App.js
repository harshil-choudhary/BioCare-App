import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, StatusBar, Alert} from 'react-native';
import {Provider} from 'react-redux';
import SplashScreen from 'react-native-splash-screen'
// import PushController from './PushController';
// import LoadingView from './src/components/LoadingView';
// import {setContainer} from './src/services/navigatorService'
import {store} from './src/redux/store';
// import {PersistGate} from 'redux-persist/integration/react'
import AsyncStorage from '@react-native-community/async-storage';


//Navigation
import Navigation from './src/navigation';

export default function App() {
  const [isLoggedIn, setLogged] = useState(null)
  useEffect(()=>{
    //SplashScreen.hide()
    this.getToken()
  },[])


  getToken = async () => {
    var token = await AsyncStorage.getItem('token')
    if (token){
      setLogged(true)
    }
    else{
      setLogged(false)

    }
  }
  console.disableYellowBox = true;
  return (
    <Provider store={store}>
      <Navigation isLoggedIn={isLoggedIn} />
    </Provider>


    
  );
}
