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

const sort_by = [{label: 'Date', value: 0}];
const availability = [
  {
    label: 'Blood Report',
    value: 0,
  },
  {
    label: 'Urine Report',
    value: 1,
  },
  {
    label: 'Stool Report',
    value: 2,
  },
  {
    label: 'X-Ray Report',
    value: 3,
  },
];
const hospital = [{label: 'In Lab', value: 0}];
const online = [{label: 'Online Booking', value: 0}];
const consultation = [
  {
    label: 'Recent',
    value: 0,
  },
  {
    label: 'A week ago',
    value: 1,
  },
  {
    label: 'A month ago',
    value: 2,
  },
  {
    label: 'More than a month ago',
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

class LabReportsFilter extends Component {

  state={sort_by:'', report_type:'', in_lab:'', online_booking:'', report_date:''} //filter state

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
                  onPress=
                  {(value, label) => {this.setState({value: value,sort_by: label});
                    }}
                />
              </View>
              <View style={styles.cardContainer}>
                <Text style={styles.cardHeading}>Report Type</Text>
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
                  onPress={(value, label) => {
                    this.setState({value: value,report_type:'lol'});
                  }}
                />
              </View>
              <View style={styles.cardContainer}>
                <Text style={styles.cardHeading}>In Lab</Text>
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
                  onPress={(value,label) => {
                    this.setState({value: value,online_booking:label});
                  }}
                />
              </View>
              <View style={styles.cardContainer}>
                <Text style={styles.cardHeading}>Report Date</Text>
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
                  onPress={(value, label) => {
                    this.setState({value: value,report_date:label});
                  }}
                />
              </View>
            
            </ScrollView>
            <View style={styles.bottomBtnContainer}>
              {this.state.show ? (
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => {
                    //this.props.navigation.state.params.updateFilterData(this.state.sort_by,this.state.report_type,this.state.in_lab,this.state.online_booking,this.state.report_date);  //PLEASE CHECK THIS
                    this.props.navigation.goBack();
                  
                  }}>
                  
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
})(LabReportsFilter);
