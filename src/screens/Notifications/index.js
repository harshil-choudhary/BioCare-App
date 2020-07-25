import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, Button, ScrollView, Alert} from 'react-native';

import styles from './style';

import {Icons, Images} from '../../utils';
import {TextInput, FlatList} from 'react-native-gesture-handler';

//Libraries
import LinearGradient from 'react-native-linear-gradient';
import { notifications } from '../../redux/actions/notifications';
import { connect } from 'react-redux';


function GoIcon(buttoncheck) {
  
  if (buttoncheck=='yes')  {
      return<Image source={Icons.goIcon} style={styles.iconStyle} />
    };
  };
  

const notifz = [
  {
    cat_id: '1',
    cat_img: Images.report_test,
    cat_title: 'Radio Labs',
    cat_subtext: '16-06-2020  12:31:14',
    screenName: '',
    button:Icons.goIcon
  },
  {
    cat_id: '2',
    cat_img: Images.report_test,
    cat_title: 'Lab',
    cat_subtext: '16-06-2020  12:30:26',
    screenName: 'LabDetailedCategory',
    button:Icons.goIcon
  },
  {
    cat_id: '3',
    cat_img: Icons.doctorIcon,
    cat_title: 'Rupesh Gaikwad',
    cat_subtext: '16-06-2020  12:29:23',
    screenName: 'LabDetailedCategory',
    button:Icons.goIcon
  },
  {
    cat_id: '4',
    cat_img: Icons.doctorIcon,
    cat_title: 'Rupesh Gaikwad',
    cat_subtext: '16-06-2020  12:28:45',
    screenName: 'LabDetailedCategory',
    button:Icons.goIcon
  },
  {
    cat_id: '5',
    cat_img: Icons.doctorIcon,
    cat_title: 'Pritesh, Your appointment has been confirmed by Dr. Rupesh Gaikwad',
    cat_subtext: '16-06-2020  12:28:18',
    screenName: 'LabDetailedCategory',
    button:null
  },
  {
    cat_id: '6',
    cat_img: Icons.doctorIcon,
    cat_title: 'Pritesh, Your appointment has been confirmed by Dr. Rupesh Gaikwad',
    cat_subtext: '16-06-2020  12:27:14',
    screenName: 'LabDetailedCategory',
    button:null
  },

];

class Notifications extends Component {
  state = {
    notifs:'',
  }

  componentDidMount(){
    this.setState(
      {notifs: this.props.notifications()},
    
    )
  }
  render() {
    return (
      <>
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <LinearGradient
              colors={['#5588e7', '#75e4f7']}
              start={{x: 0.16, y: 0.1}}
              end={{x: 1.1, y: 1.1}}
              locations={[0.16, 50]}
              style={styles.upperCont}>
              <View style={styles.upperWrapper}>
                <TouchableOpacity
                  style={styles.backIconWrapper}
                  activeOpacity={1}
                  onPress={() => this.props.navigation.goBack()}>
                  <Image source={Icons.BackIcon} />
                </TouchableOpacity>
                <View style={styles.imageWrapper}>
                  <Text style={styles.uName}>Notifications</Text>
                </View>
                <View style={styles.settingIconWrapper} />
              </View>
            </LinearGradient>
            
          </View>
          <View style={styles.docListWrapper}>
            <FlatList
              scrollEnabled={true}
              showsVerticalScrollIndicator={false}
              data={this.props.notifications1}
              renderItem={({item}) => (
                <View style={styles.docTypeWrapper}>
                  <Image style={styles.labcatImg} source={item.cat_img} />
                  <View style={styles.textBox}>
                    <Text style={styles.specialText}>{item.cat_title}</Text>
                    <Text style={styles.subText}>{item.cat_subtext}</Text>
                  </View> 
                  
                  <TouchableOpacity
                    onPress={() =>
                      console.log("Notification","Details")
                    }>
                    <Image source={item.button} style={styles.iconStyle} />
                  </TouchableOpacity>
                </View>
              )}
              keyExtractor={item => item.cat_id}
              
            />
            
          </View>
        </View>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.notifications.notifications)
  return {
    notifications1:state.notifications.notifications
  };
};

export default connect(mapStateToProps, {
 notifications
})(Notifications);



