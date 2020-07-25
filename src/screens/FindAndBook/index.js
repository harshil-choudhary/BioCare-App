import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, FlatList} from 'react-native';

import styles from './style';

import {Icons, Images} from '../../utils';

//Libraries
import LinearGradient from 'react-native-linear-gradient';
import {TextInput} from 'react-native-gesture-handler';

import { my_doctors } from '../../redux/actions/my_doctors';
import { connect } from 'react-redux';

const banners = [
  {
    id: '1',
    image: Images.Banner1,
  },
  {
    id: '2',
    image: Images.Banner2,
  },
];


class FindAndBook extends Component {

  state = {myDoctors : []}

  componentDidMount(){
    this.setState({myDoctors: this.props.my_doctors('')})
  }

  state = {doctors : [
  {
    doc_id: '1',
    name: 'Doctors',
    doc_image: Icons.doctorIcon,
    doctor_count: 'Ophthalmologist, Dermatologist, etc.',
    screenName: 'DoctorCategory',
  },
  {
    doc_id: '2',
    name: 'Dentists',
    doc_image: Icons.dentistIcon,
    doctor_count: 'Dentist, Prosthodontist, etc.',
    screenName: 'DoctorCategory',
  },
  {
    doc_id: '3',
    name: 'Alternative Medicine Doctors',
    doc_image: Icons.alternatedocIcon,
    doctor_count: 'Ayurveda, Homeopath, etc.',
    screenName: 'DoctorCategory',
  },
  {
    doc_id: '4',
    name: 'Therapists & Nutritionists',
    doc_image: Icons.therapistIcon,
    doctor_count: 'Acupuncturist, Physiotherapist, etc.',
    screenName: 'DoctorCategory',
  },
]}
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
                  <Text style={styles.uName}>Find & Book</Text>
                </View>
                <View style={styles.settingIconWrapper} />
              </View>
            </LinearGradient>
            <View style={styles.inputWrapper}>
              <Image source={Icons.searchIcon} />
              <TextInput
                style={styles.searchinp}
                placeholder="Doctors, specialities, clinics"
              />
            </View>
          </View>
          <View style={styles.BannerWrapper}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={banners}
              renderItem={({item}) => <Image source={item.image} />}
              keyExtractor={item => item.id}
            />
          </View>
          <View style={styles.DocListWrapper}>
            <FlatList
              data={this.state.doctors}
              renderItem={({item}) => (
                <View style={styles.DocSpecsWrapper}>
                  <Image style={styles.docImg} source={Icons.doctorIcon} />
                  <View style={styles.docTextWrapper}>
                    <Text style={styles.docText}>{item.name}</Text>
                    <Text style={styles.docSubText}>{item.doctor_count}</Text>
                  </View>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.push('DoctorCategory')
                    }>
                    <Image style={styles.nextbtn} source={Icons.goIcon} />
                  </TouchableOpacity>
                </View>
              )}
              keyExtractor={item => item.doc_id}
            />
          </View>
        </View>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.my_doctors.my_doctors)
  return {
    my_doctors1:state.my_doctors.my_doctors
  };
};

export default connect(mapStateToProps, {
  my_doctors
})(FindAndBook);
