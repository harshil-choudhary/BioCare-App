import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  wrapper: {
    width,
    height,
    display: 'flex',
    justifyContent: 'flex-start',
  },
  bgImage: {
    width: '100%',
    height: '111%',
    resizeMode: 'cover',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  scrollWrapper: {
    width,
    height:height,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // backgroundColor: 'pink',
  },
  logoCont: {
    width: width,
    height: height*0.55,
    // marginTop: height * 0.03,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',

    // backgroundColor: 'pink',
  },
  loginLogo: {
    width: '40%',
    height: '40.09%',
    marginBottom:height*0.03,

  },
  textCont: {
    width: '80%',
    height: height * 0.09,
    justifyContent: 'center',
    // backgroundColor: 'yellow',

  },
  heading: {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: width * 0.055,
    
    color: '#59A3EE',
  },
  subText: {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: width * 0.032,
    marginTop: height * 0.008,
    color: '#333333',
  },
  numBtnCont: {
    width: '80%',
    height: height * 0.23,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    // backgroundColor: 'lightgreen',
  },
  numCont: {
    width: '100%',
    height: height * 0.08,
    borderBottomWidth: 1,
    // backgroundColor: 'silver',
  },
  countryPicker: {
    width: '100%',
    height: '100%',
    // backgroundColor: 'pink',
  },
  btnCont: {
    width: '105%',
    height: height * 0.1,
    justifyContent: 'center',
    marginTop:10,
    // backgroundColor: 'maroon',
  },
  btn: {
    // width: '100%',
    elevation: 5,
    borderWidth: 0,
    borderColor: '#ffffff',
  },
  loginError:{
    color:'red',
    paddingTop:3,
    paddingBottom:5

  },
  socialText: {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: width * 0.037,
 
    color: '#5588E7',
  },

  socialLoginWrapper: {
    color: '#5588E7',
  },

  //App Intro Css

  slideCont: {
    width,
    height,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  imgCont: {
    width,
    height: '68%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // backgroundColor: 'lightblue',
  },
  img: {
    width: width * 0.8,
    height: height * 0.68,
    marginTop: height * 0.025,
  },
  textCont2: {
    width: '65%',
    height: '18%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    // backgroundColor: 'yellow',
  },
  text: {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: width * 0.04,
    color: '#333333',
    lineHeight: 15,
    marginTop: height * 0.02,
  },
  skipBox: {
    width: width * 0.12,
    height: height * 0.08,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#8A9DA2',
    marginLeft: width * 0.01,
    // backgroundColor: 'lightblue',
  },
  skipText: {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: width * 0.04,
    color: '#8A9DA2',
    lineHeight: 15,
  },
});
