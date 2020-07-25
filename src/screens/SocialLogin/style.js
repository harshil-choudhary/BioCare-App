import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  wrapper: {
    width,
    height,
    display: 'flex',
    justifyContent: 'flex-start',
  },
  bg: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  upperCont: {
    width: '100%',
    height: height * 0.1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    // backgroundColor: 'maroon',
  },
  arrowCont: {
    width: width * 0.15,
    height: height * 0.05,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: width * 0.055,
    // backgroundColor: 'pink',
  },
  textCont: {
    width: '80%',
    height: height * 0.1,
    marginTop: height * 0.01,
    justifyContent: 'center',
    // backgroundColor: 'pink',
  },
  heading: {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: width * 0.055,
    marginTop: height * 0.01,
    color: '#333333',
  },
  socialCont: {
    width: '80%',
    height: height * 0.3,
    marginTop: height * 0.01,
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'lightblue',
  },
  socialRow: {
    width: '100%',
    height: height * 0.08,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'silver',
  },
  iconTxtCont: {
    width: '60%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // backgroundColor: 'yellow',
  },
  socialText: {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: width * 0.035,
    marginLeft: width * 0.02,
    color: '#333333',
  },
  btnCont: {
    width: '40%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    // backgroundColor: 'violet',
  },
  btn: {
    elevation: 5,
    borderWidth: 0,
    borderColor: '#ffffff',
  },
  fbLogo:{
    width:34,
    height:34,
  },
  googleLogo:{
    width:34,
    height:34,
  },
  appleLogo:{
    width:34,
    height:40,
  },
});
