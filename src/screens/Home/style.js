import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    width,
    height,
    position: 'relative',
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  upperWrapper: {
    width: '100%',
    height: height * 0.1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  profileImgWrapper: {
    width: width * 0.12,
    height: width * 0.12,
    borderRadius: 50,
    borderWidth: 0.5,
    borderColor: '#ffffff',
    marginLeft: width * 0.03,
  },
  userNameWrapper: {
    width: width * 0.42,
    height: width * 0.15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  searchOptionWrapper: {
    width: width * 0.35,
    height: width * 0.15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginRight: width*0.06,
  },

  settingIconWrapper: {
    width: width * 0.22,
    height: height * 0.032,
    borderRadius: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    marginLeft: width*0.02,
  },

  iconSliderWrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'absolute',
    left: '9.25%',
    right: '9.73%',
    marginTop: '13.22%',
    bottom: '64%',
  },

  iconItemsWrapper: {
    width: width * 0.27,
    height: '98%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  sliderItemWrapper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  itemImgWrapper: {
    width: width * 0.18,
    height: width * 0.18,
    borderRadius: 50,
    elevation: 1,
  },

  itemImg: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },

  scrollIndicatorWrapper: {
    width: '100%',
    height: '10%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  scrollIndicatorBig: {
    width: width * 0.038,
    height: height * 0.008,
    borderRadius: 10,
    backgroundColor: '#5588E7',
    margin: 5,
  },

  scrollIndicatorSmall: {
    width: height * 0.009,
    height: height * 0.009,
    borderRadius: 50,
    backgroundColor: '#CBD5D7',
    margin: 5,
  },

  BannerWrapper: {
    width,
    height: height * 0.16,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: height * 0.38,

  },

  bannerImgWrapper: {
    width: width * 0.75,
    height: '100%',
    marginLeft: width * 0.05,
    borderRadius: 10,
  },

  bannerImg: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },

  docHeadingWrapper: {
    width,
    height: height * 0.04,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height*0.01,
  },

  docHeadingWrapper2: {
    width,
    height: height * 0.04,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height*0.4,
  },

  docTextBar: {
    width: '90%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },

  docListWrapper: {
    width,
    height: height * 0.3,
  },

  docItemWrapper: {
    width: width * 0.35,
    height: height * 0.24,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: width * 0.05,
    marginTop: height * 0.01,
  },

  docItemUpper: {
    width: width * 0.15,
    height: width * 0.15,
    borderRadius: 50,
    zIndex: 1000,
  },

  docItemLower: {
    width: '100%',
    height: height * 0.19,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'absolute',
    top: 30,
    borderRadius: 1,
    borderColor: '#000000',
    overflow: 'hidden',
    paddingBottom: 2,
    backgroundColor: '#ffffff',
  },

  docItemLowerShadowWrap: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    borderRadius: 3,
    elevation: 1,
  },

  docItemLowerWrap: {
    width: '80%',
    height: height * 0.14,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: height * 0.06,
  },

  docDescWrapper: {
    width: '100%',
    height: height * 0.05,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: height * 0.01,
  },

  ratingWrapper: {
    position:'absolute',
    top:'70%',
    width: '100%',
    height: height * 0.01,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  bottomTabWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: '0%',
    right: '0%',
    top: '85.21%',
    bottom: '-9.99%',
    backgroundColor: '#ffffff',
    borderRadius: 5,
    borderRadius: 30,
    elevation: 5,
  },

  tabWrapper: {
    height: '100%',
    width: '95%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  singleTabWrapper: {
    height: '100%',
    width: '20%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  uName: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    fontStyle: 'normal',
    color: '#FFFFFF',
    fontSize: 20,
    lineHeight: 22,
    marginLeft: width*0.02,
  },

  dropName: {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: width * 0.022,
    color: 'rgb(85,136,231)',
  },

  itemText: {
    fontFamily: 'Helvetica Neue',
    color: '#000',
    fontSize: width * 0.038,
    textAlign: 'center',
    marginTop: height * 0.005,
  },

  docText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    textAlign: 'center',
  },

  subText: {
    fontFamily: 'Helvetica Neue',
    color: '#8A9DA2',
    fontSize: width * 0.032,
    textAlign: 'center',
  },

  docName: {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: width * 0.03,
    lineHeight: 16,
    textAlign: 'center',
    color: '#333333',
  },

  docDesc: {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: width * 0.03,
    lineHeight: 13,
    textAlign: 'center',
    color: '#898A8F',
    flexShrink: 1
  },

  tabText: {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 12,
    textAlign: 'center',
    color: '#8A9DA2',
  },

  topBarIcon: {
    height: height*0.03,
    width: width*0.06,
    margin: 10,
  }
});
