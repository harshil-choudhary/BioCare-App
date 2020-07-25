import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

import styles from './style';

import {Icons, Images} from '../../utils';

//Libraries
import LinearGradient from 'react-native-linear-gradient';
import RadioForm from 'react-native-simple-radio-button';
import {ScrollView} from 'react-native-gesture-handler';
import { pharmacy } from '../../redux/actions/pharmacy';
import { connect } from 'react-redux';

const sort_by = [{label: 'Consultation Fee', value: 0}];
const availability = [
  {
    label: 'Available Any Day',
    value: 0,
  },
  {
    label: 'Available Today',
    value: 1,
  },
  {
    label: 'Available in next 3 Days',
    value: 2,
  },
  {
    label: 'Available coming weekend',
    value: 3,
  },
];
const hospital = [{label: 'In Hospital', value: 0}];
const online = [{label: 'Online Booking', value: 0}];
const consultation = [
  {
    label: 'Free',
    value: 0,
  },
  {
    label: '1-200',
    value: 1,
  },
  {
    label: '201-500',
    value: 2,
  },
  {
    label: '501-1000',
    value: 3,
  },
];
const gender = [
  {
    label: 'Male',
    value: 0,
  },
  {
    label: 'Female',
    value: 1,
  },
];

class DocFilteration extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
    };
  }

  ShowHideComponent = () => {
    if (this.state.show == true) {
      this.setState({show: false});
    } else {
      this.setState({show: true});
    }
  };
  render() {
    return (
      <>
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <View style={styles.filterContainer}>
              <View style={styles.filterTextImgWrapper}>
                <Image source={Icons.FilterWhiteIcon} />
                <Text style={styles.filterText}>Filter</Text>
              </View>
              <View style={styles.clearfilterWrapper}>
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => alert('Clear Pressed !!!')}>
                  <Text style={styles.clearText}>Clear Filter</Text>
                </TouchableOpacity>
              </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.cardContainer}>
                <Text style={styles.cardHeading}>Sort By</Text>
                <RadioForm
                  style={styles.radioBtnContainer}
                  radio_props={sort_by}
                  initial={0}
                  formHorizontal={false}
                  labelHorizontal={true}
                  buttonColor={'#6E78F7'}
                  buttonSize={10}
                  labelStyle={{
                    fontSize: 16,
                    color: '#313450',
                    fontWeight: '400',
                  }}
                  animation={false}
                  onPress={value => {
                    this.setState({value: value});
                  }}
                />
              </View>
              <View style={styles.cardContainer}>
                <Text style={styles.cardHeading}>Availability</Text>
                <RadioForm
                  radio_props={availability}
                  initial={0}
                  formHorizontal={false}
                  labelHorizontal={true}
                  buttonColor={'#6E78F7'}
                  style={styles.radioBtnContainer}
                  buttonSize={10}
                  labelStyle={{
                    fontSize: 16,
                    color: '#313450',
                    fontWeight: '400',
                    marginBottom: 8,
                  }}
                  animation={false}
                  onPress={value => {
                    this.setState({value: value});
                  }}
                />
              </View>
              <View style={styles.cardContainer}>
                <Text style={styles.cardHeading}>In Hospital</Text>
                <RadioForm
                  radio_props={hospital}
                  initial={0}
                  formHorizontal={false}
                  labelHorizontal={true}
                  buttonColor={'#6E78F7'}
                  style={styles.radioBtnContainer}
                  buttonSize={10}
                  labelStyle={{
                    fontSize: 16,
                    color: '#313450',
                    fontWeight: '400',
                  }}
                  animation={false}
                  onPress={value => {
                    this.setState({value: value});
                  }}
                />
              </View>
              <View style={styles.cardContainer}>
                <Text style={styles.cardHeading}>Online Booking</Text>
                <RadioForm
                  radio_props={online}
                  initial={0}
                  formHorizontal={false}
                  labelHorizontal={true}
                  buttonColor={'#6E78F7'}
                  style={styles.radioBtnContainer}
                  buttonSize={10}
                  labelStyle={{
                    fontSize: 16,
                    color: '#313450',
                    fontWeight: '400',
                  }}
                  animation={false}
                  onPress={value => {
                    this.setState({value: value});
                  }}
                />
              </View>
              <View style={styles.cardContainer}>
                <Text style={styles.cardHeading}>Consultation Fee</Text>
                <RadioForm
                  radio_props={consultation}
                  initial={0}
                  formHorizontal={false}
                  labelHorizontal={true}
                  buttonColor={'#6E78F7'}
                  style={styles.radioBtnContainer}
                  buttonSize={10}
                  labelStyle={{
                    fontSize: 16,
                    color: '#313450',
                    fontWeight: '400',
                    marginBottom: 8,
                  }}
                  animation={false}
                  onPress={value => {
                    this.setState({value: value});
                  }}
                />
              </View>
              <View style={styles.cardContainer}>
                <Text style={styles.cardHeading}>Gender</Text>
                <RadioForm
                  radio_props={gender}
                  initial={0}
                  formHorizontal={false}
                  labelHorizontal={true}
                  buttonColor={'#6E78F7'}
                  style={styles.radioBtnContainer}
                  buttonSize={10}
                  labelStyle={{
                    fontSize: 16,
                    color: '#313450',
                    fontWeight: '400',
                    marginBottom: 8,
                  }}
                  animation={false}
                  onPress={value => {
                    this.setState({value: value});
                  }}
                />
              </View>
            </ScrollView>
            <View style={styles.bottomBtnContainer}>
              {this.state.show ? (
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => alert('Apply Pressed')}>
                  <LinearGradient
                    colors={['#5FBEF4', '#75E4F7']}
                    start={{x: 0.1, y: 2}}
                    end={{x: 1.5, y: 1.9}}
                    locations={[0.1, 0.6]}
                    style={[styles.applyBtnContainer, {marginTop: 20}]}>
                    <Text style={styles.btnText}>Apply</Text>
                  </LinearGradient>
                </TouchableOpacity>
              ) : null}
              <View style={styles.closeContainer}>
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => this.ShowHideComponent()}>
                  <Image source={Icons.CloseIcon} />
                </TouchableOpacity>
              </View>
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
})(DocFilteration);
