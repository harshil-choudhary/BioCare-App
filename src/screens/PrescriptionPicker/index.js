import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, Button, Alert, ScrollView} from 'react-native';

// import styles from './style';

import {Icons, Images} from '../../utils';
import {TextInput, FlatList} from 'react-native-gesture-handler';

//Libraries
import LinearGradient from 'react-native-linear-gradient';
import { pharmacy } from '../../redux/actions/pharmacy';
import { connect } from 'react-redux';
//import DocumentPicker from 'react-native-document-picker';

/*async function uploadNewPrescription(){
  try {
    const res = await DocumentPicker.pick({
      type: [DocumentPicker.types.images],
    });
    console.log(
      res.uri,
      res.type, // mime type
      res.name,
      res.size
    );
  } catch (err) {
    if (DocumentPicker.isCancel(err)) {
      // User cancelled the picker, exit any dialogs or menus and move on
    } else {
      throw err;
    }
  }
}*/


const prescriptions = [
  {
    cat_id: '1',
    cat_img: Images.labcatImg,
    cat_name: 'Prescription 1',
    screenName: 'LabDetailedCategory',
  },
  {
    cat_id: '2',
    cat_img: Images.labcatImg,
    cat_name: 'Prescription 2',
    screenName: 'LabDetailedCategory',
  },
  {
    cat_id: '3',
    cat_img: Images.labcatImg,
    cat_name: 'Prescription 3',
    screenName: 'LabDetailedCategory',
  },
  {
    cat_id: '4',
    cat_img: Images.labcatImg,
    cat_name: 'Prescription 4',
    screenName: 'LabDetailedCategory',
  },
  {
    cat_id: '5',
    cat_img: Images.labcatImg,
    cat_name: 'Prescription 5',
    screenName: 'LabDetailedCategory',
  },
  {
    cat_id: '6',
    cat_img: Images.labcatImg,
    cat_name: 'Prescription 6',
    screenName: 'LabDetailedCategory',
  },
  {
    cat_id: '7',
    cat_img: Images.labcatImg,
    cat_name: 'Prescription 7',
    screenName: 'LabDetailedCategory',
  },
  {
    cat_id: '8',
    cat_img: Images.labcatImg,
    cat_name: 'Prescription 8',
    screenName: 'LabDetailedCategory',
  },
];

class Prescription_Picker extends Component {
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
                  <Text style={styles.uName}>Prescriptions</Text>
                </View>
                <View style={styles.settingIconWrapper} />
              </View>
            </LinearGradient>
            <View style={styles.inputWrapper}>
              <Image source={Icons.searchIcon} />
              <TextInput
                style={styles.searchinp}
                placeholder="Search for your prescriptions"
              />
            </View>
          </View>
          <View style={styles.topText}>
            <Button 
                //onPress={uploadNewPrescription}
                title="Upload New Prescription"
            />
          </View>

          <View style={styles.docListWrapper}>
            <FlatList
              scrollEnabled={true}
              showsVerticalScrollIndicator={false}
              data={prescriptions}
              renderItem={({item}) => (
                <View style={styles.docTypeWrapper}>
                  <Image style={styles.labcatImg} source={item.cat_img} />
                  <View style={styles.textBox}>
                    <Text style={styles.specialText}>{item.cat_name}</Text>
                  </View>
                  <TouchableOpacity
                    onPress={() =>
                      alert("Pressed!")
                    }>
                    <Image source={Icons.goIcon} style={styles.iconStyle} />
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
  console.log(state.pharmacy.pharmacy)
  return {
    pharmacy1:state.pharmacy.pharmacy
  };
};

export default connect(mapStateToProps, {
 pharmacy
})(Prescription_Picker);


