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
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
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
    top: '-3.4%',
    bottom: '78.54%',
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
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  backIconWrapper: {
    width: width * 0.2,
    height: height * 0.05,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleWrapper: {
    width: width * 0.4,
    height: width * 0.15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  settingIconWrapper: {
    width: width * 0.22,
    height: height * 0.032,
    borderRadius: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: width * 0.09,
    backgroundColor: '#ffffff',
  },
  uName: {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: width * 0.04,
    lineHeight: 25,
    color: '#fff',
  },
  dropName: {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: width * 0.022,
    color: 'rgb(85,136,231)',
  },
  catTypeWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  catText: {
    backgroundColor: '#fff',
    marginLeft: 25,
    paddingLeft: 14,
    paddingRight: 14,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 20,
    marginTop: 1,
    fontWeight: '500',
  },

  docContWrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'absolute',
    left: '0%',
    right: '0%',
    top: '24.5%',
    bottom: '0%',
  },

  docCont: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'absolute',
    left: '0%',
    right: '0%',
    top: '0%',
    bottom: '46%',
  },

  docDetailedWrapper: {
    width: width * 0.9,
    height: height * 0.39,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingBottom: 35,
    borderRadius: 15,
    shadowColor: 'rgba(1, 1, 1, 1)',
    elevation: 4,
    marginLeft: width*0.05,
  },

  docDetailedWrapper2: {
    width: '90%',
    backgroundColor: '#fff',
    paddingBottom: 5,
    borderRadius: 15,
    shadowColor: 'rgba(1, 1, 1, 1)',
    elevation: 4,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  sponserWrapper: {
    width: '100%',
    height: height * 0.075,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  sponserText: {
    backgroundColor: '#fdf8e4',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    opacity: 0.8,
    marginTop: height * 0.02,
    fontSize: width * 0.032,
    fontWeight: 'bold',
    color: '#E6B12E',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  docSpecsWrapper: {
    width: '93%',
    display: 'flex',
    flexDirection: 'row',
    height:'30%',
  },
  docdetailImg: {
    width: width * 0.19,
    height: width * 0.19,
  },
  perText: {
    fontFamily: 'Helvetica Neue',
    position: 'absolute',
    backgroundColor: '#62D248',
    color: '#fff',
    padding: 4,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 50,
    fontSize: width * 0.024,
    fontWeight: 'normal',
    height: height * 0.05,
    width: height * 0.05,
    textAlignVertical: 'center',
    top: '60%',
    left: '12%',
  },
  docNameWrapper: {
    marginLeft: 10,
    display: 'flex',
    flexDirection: 'column',
  },
  docNameText: {
    fontFamily: 'Helvetica Neue',
    color: '#000',
    fontSize: width * 0.04,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  docSubNameText: {
    color: '#898A8F',
    fontSize: width * 0.033,
    fontWeight: '400',
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
  },
  docprofText: {
    color: '#898A8F',
    fontSize: width * 0.033,
    fontWeight: '400',
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
  },
  docExpText: {
    color: '#898A8F',
    fontSize: width * 0.033,
    fontWeight: 'bold',
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
  },
  middleWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: height * 0.01,
  },
  nodoctorWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  feedText: {
    fontSize: width * 0.0325,
    fontWeight: '700',
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    marginLeft: width * 0.03,
  },
  nodocImg: {
    marginLeft: width * 0.028,
    width: 10.37,
    height:12,
  },
  doclocImg: {
    marginLeft: width * 0.028,
    height:12,
    width:12,
  },
  nodocText: {
    fontSize: width * 0.035,
    color: '#898A8F',
    marginLeft: width * 0.01,
  },
  doclocText: {
    marginLeft: width * 0.01,
    fontSize: width * 0.035,
    color: '#898A8F',
  },
  bottom1Wrapper: {
    width: '93%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: height * 0.015,
  },
  moreText: {
    fontSize: width * 0.032,
    borderWidth: 1,
    borderColor: '#8A9DA2',
    borderRadius: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 5,
    paddingLeft: 5,
    textAlign: 'center',
    color: '#8A9DA2',
  },
  moneyWrapper: {
    width: width * 0.35,
    height: height * 0.048,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecfbf9',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: 'rgba(1,1,1,1)',
    elevation: 2,
  },
  moneyText: {
    fontSize: width * 0.035,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: width * 0.01,
  
  },
  bottom2Wrapper: {
    width: '100%',
    height: '18%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: height * 0.015,
  },
  boxBtn2: {
    width: width * 0.3,
    height: height * 0.05,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginRight: width * 0.018,
  },
  btnText: {
    fontWeight: 'bold',
  },

  docCont2: {
    width,
    marginBottom:30,
 
  
  },

  docDetailedWrapper2: {
    width: width * 0.9,
    height: height * 0.33,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    marginTop: height * 0.02,
    borderRadius: 15,
    shadowColor: 'rgba(1, 1, 1, 1)',
    elevation: 4,
    marginLeft: width*0.05,
  
  },

  filterBtnWrapper: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 12,
    width: width * 0.2,
    height: height * 0.12,
    marginBottom: 15,
  },

  filterBtnCont: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.2,
    height: width * 0.2,
    borderRadius: 50,
    elevation: 2,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    backgroundColor: '#ffffff',
  },
  dateText: {
    fontSize: width * 0.045,
    fontWeight: '700',
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    marginLeft: width * 0.03,
  },
  timeText: {
    fontSize: width * 0.03,
    fontWeight: '700',
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    marginLeft: width * 0.03,
  },
  filterImg:{
    height:26.49,
    width:22.66,
  },
});
