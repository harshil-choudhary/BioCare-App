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
    top: '-0.23%',
    bottom: '0%',
    backgroundColor: '#F5F5F5',
  },
  upperCont: {
    position: 'absolute',
    left: '0%',
    right: '0%',
    top: '-6.89%',
    bottom: '59.77%',
    borderRadius: 50,
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
    height: width * 0.18,
    borderRadius: 100,
    borderStyle: 'solid',
    borderWidth: 1.5,
    borderColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.1,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
  },
  settingIconWrapper: {
    width: width * 0.2,
    height: height * 0.05,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  midWrapper: {
    width: '100%',
    height: height * 0.06,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  uName: {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: width * 0.04,
    lineHeight: 25,
    color: '#fff',
  },

  uNum: {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: width * 0.03,
    lineHeight: 14,
    color: '#fff',
  },

  lowerWrapper: {
    width: width * 0.5,
    height: height * 0.05,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 50,
    borderColor: '#ffffff',
    marginTop: height * 0.013,
  },

  lowerCont: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'absolute',
    left: '8.27%',
    right: '8.6%',
    top: '35.25%',
    bottom: '6.1%',
    backgroundColor: '#ffffff',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    borderRadius: 20,
    elevation: 1,
  },

  itemWrapper: {
    width: '95%',
    height: height * 0.065,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf:'center',
    borderBottomWidth: 1,
    borderBottomColor: '#7FE1D7',
  },

  itemWrapperLast: {
    width: '95%',
    height: height * 0.065,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf:'center',
  },

  middleItemWrap: {
    width: '60%',
    height: height * 0.08,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  itemName: {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontSize: width * 0.035,
    lineHeight: 25,
    color: '#8A9DA2',
  },
  myDoctorIcon:{
    width:24.38,
    height: 23.76,
  },
  onlineConsultIcon:{
    width:24.38,
    height: 23.76,
  },
  calendarIcon:{
    width:24.89,
    height: 24.99,
  },
  medicalRecordsIcon:{
    width:22.89,
    height: 24.48,
  },
  vacinationIcon:{
    width:25.89,
    height: 26.89,
   
  },
  remindersIcon:{
    width:16.47,
    height: 23.23,
  },
  offerIcon:{
    width:21.89,
    height: 21.63,
  },
  bookTestIcon:{
    width:25.89,
    height: 25.63,
  },
  paymentIcon:{
    width:23.94,
    height: 16.77,
  },
  healthInterestIcon:{
    width:21.43,
    height: 21.8,
  },
});
