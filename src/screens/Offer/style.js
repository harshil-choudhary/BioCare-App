import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    width,
    height,
    position: 'relative',
    backgroundColor: 'pink',
  },
  wrapper: {
    position: 'absolute',
    left: '0%',
    right: '0%',
    top: '0%',
    bottom: '0%',
    backgroundColor: '#F5F5F5',
  },
  upperCont: {
    position: 'absolute',
    left: '0%',
    right: '0%',
    top: '-3.04%',
    bottom: '82.26%',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  upperWrapper: {
    width: '100%',
    height: height * 0.22,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  backIconWrapper: {
    width: width * 0.2,
    height: height * 0.05,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

  },
  imageWrapper: {
    width: width * 0.18,
    height: width * 0.15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

  },

  settingIconWrapper: {
    width: width * 0.2,
    height: height * 0.05,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  boxCont1: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'absolute',
    left: '9.25%',
    right: '9.73%',
    top: '14.22%',
    bottom: '66.83%',
    backgroundColor: '#ffffff',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    borderRadius: 20,
    elevation: 1,
  },

  boxCont2: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'absolute',
    left: '9.25%',
    right: '9.73%',
    top: '34.87%',
    bottom: '46.17%',
    backgroundColor: '#ffffff',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    borderRadius: 20,
    elevation: 1,
  },

  boxCont3: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'absolute',
    left: '9.25%',
    right: '9.73%',
    top: '55.53%',
    bottom: '25.52%',
    backgroundColor: '#ffffff',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    borderRadius: 20,
    elevation: 1,
  },

  boxCont4: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'absolute',
    left: '9.25%',
    right: '9.73%',
    top: '76.18%',
    bottom: '4.86%',
    backgroundColor: '#ffffff',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    borderRadius: 20,
    elevation: 1,
  },

  boxUpper: {
    width: '85%',
    height: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  boxLower: {
    width: '85%',
    height: '50%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  boxBtn1: {
    width: width * 0.2,
    height: height * 0.05,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: 'rgb(85,136,231)',
  },

  boxBtn11: {
    width: width * 0.19,
    height: height * 0.045,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 1,
    backgroundColor: '#ffffff',
  },

  boxBtn2: {
    width: width * 0.2,
    height: height * 0.05,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },

  boxBtn22: {
    width: width * 0.19,
    height: height * 0.045,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    margin: 1,
    backgroundColor: '#ffffff',
  },

  uName: {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: width * 0.04,
    lineHeight: 25,
    color: '#fff',
  },

  title: {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: width * 0.03,
    lineHeight: 17,
    color: '#000000',
    marginTop: height * 0.01,
  },

  description: {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: width * 0.027,
    lineHeight: 14,
    color: '#898A8F',
    marginTop: height * 0.01,
  },

  code: {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: width * 0.03,
    lineHeight: 17,
    color: 'rgb(85,136,231)',
  },

  btnText: {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: width * 0.03,
    lineHeight: 17,
    color: 'rgb(85,136,231)',
  },
  cmngSoon: {
    fontFamily: 'Helvetica Neue',
    fontWeight: 'bold',
    color: '#000',
    fontSize: width * 0.06,
    alignSelf:"center",
    marginTop:height*0.5,
  },
});
