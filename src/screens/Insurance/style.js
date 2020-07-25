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
    width: width * 0.29,
    height: width * 0.15,
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 90,
  },
  uName: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  inputWrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    left: '9.25%',
    right: '9.73%',
    top: '14.22%',
    bottom: '78.83%',
    backgroundColor: '#ffffff',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    borderRadius: 20,
    elevation: 1,
    paddingLeft: 20,
  },
  searchinp: {
    marginLeft: 12,
  },
  topText: {
    marginTop: height*0.23,
  },
  texthead: {
    color: '#5588E7',
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 16,
  },
  docListWrapper: {
    width,
    height: height * 0.8,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: height*0.2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  docTypeWrapper: {
    width: width * 0.9,
    height: height * 0.1,
    borderBottomWidth: 1,
    borderBottomColor: '#7FE1D7',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textBox: {
    width: '70%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  labcatImg: {
    marginLeft: width * 0.02,
    width: width *0.12,
    height: height *0.07,
  },
  iconStyle: {
    marginRight: width * 0.02,
  },
  specialText: {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: '#000',
    fontSize: width * 0.04,
    marginLeft: width * 0.01,
  },

  cmngSoon: {
    fontFamily: 'Helvetica Neue',
    fontWeight: 'bold',
    color: '#000',
    fontSize: width * 0.06,
  },
});
