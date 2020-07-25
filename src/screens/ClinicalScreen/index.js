import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Alert,
} from 'react-native';

import styles from './style';

import {Icons, Images} from '../../utils';
import { pharmacy } from '../../redux/actions/pharmacy';
import { connect } from 'react-redux';


//Libraries
import LinearGradient from 'react-native-linear-gradient';

class ClinicalScreen extends Component {
  render() {
    return (
      <>
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <ImageBackground
              source={Images.clinicalBg}
              style={styles.upperCont}>
              <View style={styles.upperWrapper}>
              <TouchableOpacity
                  style={styles.backIconWrapper}
                  activeOpacity={1}
                  onPress={() => this.props.navigation.goBack()}>
                  <Image source={Icons.BackIcon} />
                </TouchableOpacity>
                <View style={styles.titleWrapper}>
                  <Text style={styles.uName}>Select a time slot</Text>
                </View>
                <View style={styles.settingIconWrapper} />
              </View>
            </ImageBackground>
            <View style={styles.cardWrapper}>
              <View style={styles.boxUpper}>
                <View style={styles.upperInfoWrapper}>
                  <Text style={styles.title}>Glucamo Clinic</Text>
                  <Text style={[styles.description, {marginTop: 2}]}>
                    South Dehli
                  </Text>
                  <Image source={Images.starGroup} style={{marginTop: 5}} />
                </View>
              </View>
              <View style={styles.boxDate}>
                <Text style={styles.dateText}>Closed Today</Text>
                <Text style={styles.dateText}>9:30AM - 8:00PM</Text>
                <Text style={[styles.dateText, {color: '#3A58FC'}]}>
                  All Timing
                </Text>
              </View>
              <View style={styles.boxMap}>
                <View style={styles.boxMapUpper}>
                  <Image style={styles.doclocImg} source={Icons.locationIcon} />
                  <Text style={styles.mapText}>
                    P-13, South Extension Part 2, New Delhi, Delhi 110049
                  </Text>
                </View>
                <View style={styles.boxMapLower}>
                  <Image source={Images.mapImage} style={styles.mapImage} />
                </View>
              </View>
              <View style={styles.boxLower}>
                <View style={styles.boxLowerCont1}>
                  <Image source={Images.Profile} style={styles.userImage} />
                </View>
                <View style={styles.boxLowerCont2}>
                  <Text style={[styles.docText, {marginTop: 6}]}>
                    Dr. Sandeep Mehta
                  </Text>
                  <Text style={styles.docDesc}>Dermatologist</Text>
                  <Text style={styles.docText}>$ 900</Text>
                </View>
                <LinearGradient
                  colors={['#5588e7', '#75e4f7']}
                  start={{x: 0.1, y: 0.1}}
                  end={{x: 0.3, y: 1.9}}
                  locations={[0.1, 0.6]}
                  style={styles.boxLowerCont3}>
                  <Text style={[styles.dateText, {color: '#ffffff'}]}>
                    Book
                  </Text>
                </LinearGradient>
              </View>
              <View style={styles.boxLower2}>
                <View style={styles.boxLowerCont1}>
                  <Image source={Images.Profile} style={styles.userImage} />
                </View>
                <View style={styles.boxLowerCont2}>
                  <Text style={[styles.docText, {marginTop: 6}]}>
                    Dr. Sandeep Mehta
                  </Text>
                  <Text style={styles.docDesc}>Dermatologist</Text>
                  <Text style={styles.docText}>$ 900</Text>
                </View>
                <LinearGradient
                  colors={['#5588e7', '#75e4f7']}
                  start={{x: 0.1, y: 0.1}}
                  end={{x: 0.3, y: 1.9}}
                  locations={[0.1, 0.6]}
                  style={styles.boxLowerCont3}>
                  <Text style={[styles.dateText, {color: '#ffffff'}]}>
                    Book
                  </Text>
                </LinearGradient>
              </View>
            </View>
            <View style={styles.bfbottomWrapper}>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => console.log('Glucamo Clinic', 'Feedback')}>
                <Text style={styles.feedbackTextbtn}>Give Feedback</Text>
              </TouchableOpacity>
              <LinearGradient
                colors={['#5588e7', '#75e4f7']}
                start={{x: 0.1, y: 0.1}}
                end={{x: 0.3, y: 1.9}}
                locations={[0.1, 0.6]}
                style={styles.bookTextbtnWrapper}>
                <TouchableOpacity
                  activeOpacity={1}
                  style={styles.bookBtn}
                  onPress={() =>
                    console.log('Glucamo Clinic', 'Booking successful')
                  }>
                  <Text style={[styles.bookTextbtn, {color: '#ffffff'}]}>
                    Book
                  </Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
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
})(ClinicalScreen);
