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
    top: '-3.4%',
    bottom: '72.54%',
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
  boxCont1: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'absolute',
    left: '8.03%',
    right: '8.1%',
    top: '14.22%',
    bottom: '24.5%',
    backgroundColor: '#ffffff',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    borderRadius: 20,
    elevation: 2,
  },

  innerBox:{
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection:'row',
    alignItems: 'center',
    width:width*0.75,
    height:'11%',
    backgroundColor: '#f2f2f2',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    borderRadius: 5,
    elevation: 2,
    margin: height*0.01,
    fontWeight: 'bold',
    fontSize:height*0.015,
  },
  

  dropDownIcon:{
    alignSelf:'flex-end',
    marginLeft:width*0.1,
  },

  cityBox:{
    
    width:width*0.7,
    height:'9%',
    backgroundColor: '#f2f2f2',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    borderRadius: 5,
    elevation: 2,
    margin: height*0.01,
    fontWeight: 'bold',
    fontSize:height*0.015,
  },


  bottomTextcont:{
    display: 'flex',
    flexDirection: 'row',
    marginTop:'40%',
   },

  bottomText:{
    fontFamily: 'Helvetica Neue',
    fontWeight: 'bold',
    fontSize: width * 0.035,
    color: '#9e9e9e',
  },

  tnc:{
    fontFamily: 'Helvetica Neue',
    fontWeight: 'bold',
    fontSize: width * 0.035,
    color: '#5588e7',
  },

  plus:{
    height:height*0.12,
    width:width*0.24,
    margin:height*0.01,
  },

  profileImgCont: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    left: '0%',
    right: '0%',
    top: '-16%',
    bottom: '77.34%',
  },

  profileImgWrap: {
    width: width * 0.22,
    height: width * 0.22,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#ffffff',
  },

  docImage: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
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

  profileTextWrap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.22,
    height: height * 0.05,
    marginTop: height * 0.05,
  },

  docText: {
    fontFamily: 'Helvetica Neue',
    fontWeight: 'normal',
    fontSize: width * 0.035,
    textAlign: 'center',
    color: '#000',
  },

  docName: {
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontStyle: 'normal',
    fontSize: width * 0.038,
    textAlign: 'center',
    color: '#000',
    lineHeight: 21,
    marginTop: height * 0.075,
  },

  docDesc: {
    fontFamily: 'Roboto',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontSize: width * 0.033,
    textAlign: 'center',
    color: '#898A8F',
    marginTop: height * 0.001,
  },

  docInfoWrap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    height: height * 0.05,
  },

  docInfoText: {
    fontFamily: 'Helvetica Neue',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontSize: width * 0.034,
    textAlign: 'center',
    color: '#000000',
  },

  docImgsWrap: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    height: height * 0.1,
    marginTop: height * 0.003,
  },

  docProfileImages: {
    width: '100%',
    height: '90%',
  },

  boxScrollCont: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'absolute',
    left: '8.03%',
    right: '8.1%',
    top: '48.22%',
    bottom: '16.5%',
    backgroundColor: '#ffffff',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    elevation: 2,
  },

  scrollWrapper: {
    width: '95%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  boxUpper: {
    width: width * 0.76,
    height: height * 0.1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#7FE1D7',
  },

  upperInfoWrapper: {
    width: width * 0.4,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  boxBtn2: {
    width: width * 0.22,
    height: height * 0.05,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginRight: width * 0.035,
  },

  btnText: {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: width * 0.03,
    lineHeight: 17,
    color: 'rgb(85,136,231)',
  },

  title: {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: width * 0.048,
    lineHeight: 20,
    color: '#000000',
  },

  description: {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: width * 0.035,
    lineHeight: 14,
    color: '#898A8F',
  },

  dateText: {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: width * 0.032,
    lineHeight: 14,
  },

  boxDate: {
    width: width * 0.76,
    height: height * 0.065,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#7FE1D7',
  },

  boxMap: {
    width: width * 0.76,
    height: height * 0.25,
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#7FE1D7',
  },

  boxMapUpper: {
    width: '100%',
    height: '12%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  mapText: {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: width * 0.0265,
    lineHeight: 12,
    color: '#898A8F',
    marginLeft: width * 0.02,
  },

  boxMapLower: {
    width: '90%',
    height: '70%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
  },

  mapImage: {
    width: '100%',
    height: '100%',
  },

  textBoxWrapper: {
    width: width * 0.76,
    height: height * 0.23,
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderBottomColor: '#7FE1D7',
  },

  verificationBox: {
    width: width * 0.76,
    height: height * 0.11,
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderBottomColor: '#7FE1D7',
  },

  verifyIndicator: {
    width: '100%',
    height: height * 0.03,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  colorIndicator: {
    width: width * 0.03,
    height: width * 0.03,
    borderRadius: 50,
    marginLeft: width * 0.03,
    backgroundColor: '#27AE60',
  },

  docText2: {
    fontFamily: 'Helvetica Neue',
    fontWeight: 'normal',
    fontSize: width * 0.035,
    textAlign: 'center',
    color: '#000',
    marginLeft: width * 0.03,
  },

  boxLower: {
    width: '95%',
    height: height * 0.14,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderBottomColor: '#7FE1D7',
  },

  boxLower2: {
    width: '95%',
    height: height * 0.14,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
  },

  boxLowerCont1: {
    width: width * 0.12,
    height: width * 0.12,
    borderRadius: 50,
    marginTop: height * 0.025,
  },

  userImage: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },

  boxLowerCont2: {
    width: '45%',
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },

  docProfileText: {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: width * 0.038,
    color: '#000000',
  },

  docDesc: {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: width * 0.033,
    color: '#898A8F',
  },

  boxLowerCont3: {
    width: '20%',
    height: width * 0.08,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: height * 0.05,
  },

  bfbottomWrapper: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 40,
    padding: 20,
    elevation: 1,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    borderColor: '#C7C7C7',
    borderWidth: 1,
    position: 'absolute',
    bottom: 50,
    marginHorizontal: 12,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.08,
    marginLeft: width * 0.045,
  },
  feedbackTextbtn: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
    marginLeft: 60,
  },
  bookTextbtnWrapper: {
    width: '65%',
    padding: 10,
    borderRadius: 40,
    marginTop:height*0.05,
    height: height * 0.08,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bookBtn: {
    width: '100%',
    borderRadius: 40,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bookTextbtn: {
    fontWeight: 'bold',
    fontSize: width * 0.05,
    textAlign: 'center',
  },
  inputHeads:{
  marginTop: height*0.1,
  fontWeight: 'bold',
  fontSize:height*0.02,
  marginLeft: height*0.03,
  alignSelf:'flex-start',
  color: '#8A9DA2',
  },
  doclocImg: {
    marginLeft: width * 0.028,
    height:18,
    width:18,
  },
  textInputBox: {
    width:'80%',
    height:50,
    marginBottom:-8,
    marginLeft:5,
  
    justifyContent:'center',
  },
  categoryInputBox: {
    width:'95%',
    alignItems:'center',
  },
  categoryText:{
    fontSize:height*0.02,
    marginLeft: height*0.02,
    color: '#8A9DA2',
  },
  modalWrapper:{
    backgroundColor:"#ffffff", 
    marginHorizontal:width*0.2,
    marginVertical:height*0.3,
    width:width*0.6,
    height:height*0.4,  
    padding:20, 
    borderRadius:20, 
    flex:1,
    //alignItems:'center',
  },
  docNameWrapper: {
    marginHorizontal:width*0.005,
    display: 'flex',
    flexDirection: 'column',
    width:width*0.3,
    height:'80%',
    justifyContent:'center'
  },
  docNameText: {
    fontFamily: 'Helvetica Neue',
    color: '#000',
    fontSize: width * 0.04,
    fontWeight: 'bold',
    paddingBottom: 1,
  },
  modalBoxBtn: {
    width: width * 0.3,
    height: height * 0.05,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginRight: width * 0.018,

  },
  modalContentWrapper: {
    width: '100%',
    height: height * 0.05,
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#7FE1D7',
  },
});
