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
  uName: {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: width * 0.04,
    lineHeight: 25,
    color: '#fff',
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
 

  // innerBox:{
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   width:width*0.7,
  //   height:'9%',
  //   backgroundColor: '#f2f2f2',
  //   shadowColor: 'rgba(0, 0, 0, 0.25)',
  //   borderRadius: 5,
  //   elevation: 2,
  //   margin: height*0.01,
  //   fontWeight: 'bold',
  //   fontSize:height*0.015,
  // },

//   innerBox:{
//     display: 'flex',
//     // justifyContent:'center',
//     // alignItems: 'center',
//     width:'100%',
//     height:'100%',
//     backgroundColor: '#f2f2f2',
//     shadowColor: 'rgba(0, 0, 0, 0.25)',
//     borderRadius: 5,
//     elevation: 2,
//     margin: height*0.01,
//     fontWeight: 'bold',
//     fontSize:height*0.020,
//     paddingVertical: 0,
//     paddingHorizontal: 15,
  
    
//   },
  plusImageWrapper:{
    justifyContent:'center',
    alignItems:'center'

  },

  innerBoxWrapper:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width:width*0.79,
    height:height*0.065,
    backgroundColor: '#f2f2f2',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    borderRadius: 5,
    elevation: 2,
    // margin: height*0.01,
    marginTop:height*0.04,
    fontWeight: 'bold',
    fontSize:height*0.015,
    // paddingTop:height*0.01
   
  },
 
  boxCont1: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'absolute',
    left: '7.03%',
    right: '7.1%',
    top: '30.22%',
    bottom: '13.5%',
    backgroundColor: '#ffffff',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    borderRadius: 20,
    elevation: 2,
  },
  pickerWrapper: {
    width: '100%',
    height: height * 0.07,
    display: 'flex',
    // flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop:30,
    backgroundColor: '#f2f2f2',
  },
  pickerWrapper2: {
    width: '100%',
    height: height * 0.07,
    display: 'flex',
    // flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop:20,
  },
  pickerBox: {
    width: width * 0.78,
    height: height * 0.07,
    display: 'flex',
    // borderColor: '#5588e7',
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 5,
    // borderWidth: 2,
    paddingLeft: 5,
    elevation: 4,
  },
  pickerStyle:{  
    height: 50,  
    width: "99%",  
   // color: '#344953',  
    justifyContent: 'center',

    
}  ,
innerBox:{
    display: 'flex',
    // justifyContent:'center',
    // alignItems: 'center',
    width:'100%',
    height:'100%',
    backgroundColor: '#f2f2f2',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    borderRadius: 5,
    elevation: 2,
    margin: height*0.01,
    fontWeight: 'bold',
    fontSize:height*0.020,
    paddingVertical: 0,
    paddingHorizontal: 15,
    
  
    
  },

  nameBoxWrapper:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width:width*0.8,
    height:height*0.075,
    backgroundColor: '#f2f2f2',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    borderRadius: 5,
    elevation: 2,
    // margin: height*0.01,
    marginTop:height*0.03,
    fontWeight: 'bold',
    fontSize:height*0.015,
    // paddingTop:height*0.01
   
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
});