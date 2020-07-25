import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';

import styles from './style';

import {Icons, Images} from '../../utils';
import {TextInput, FlatList} from 'react-native-gesture-handler';
import axios from 'axios';
//Libraries
import LinearGradient from 'react-native-linear-gradient';
import { pharmacy } from '../../redux/actions/pharmacy';
import { connect } from 'react-redux';


class DoctorCatagories extends Component {

  state = { doctors : []};


  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [],
      error: null,
      Test: [],
      arrayholder : [],
    };
    
  }

  componentDidMount(){
    axios.get('http://backend.bionische.com/api/patient/doctor-categories')
    .then(response => this.setState({doctors:response.data.data,data: response.data.data, arrayholder:response.data.data}))
    this.setState({ loading: true });
        this.setState({
          loading: false,
        });

  }




  searchFilterFunction = text => {
    this.setState({
      value: text,
    });

    const newData = this.state.arrayholder.filter(item => {
      const itemData = `${item.name.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      data: newData,
    });
  };

 
  render(props) {
    console.log(this.props.route.params)
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
                  <Text style={styles.uName}>Doctor Categories</Text>
                </View>
                <View style={styles.settingIconWrapper} />
              </View>
            </LinearGradient>
            <View style={styles.inputWrapper}>
              <Image source={Icons.searchIcon} />
              <TextInput
                style={styles.searchinp}
                onChangeText={text => this.searchFilterFunction(text)}
                placeholder="Doctors, specialities, clinics"
              />
            </View>
          </View>
          <View style={styles.topText}>
            <Text style={styles.texthead}>Top Specialities</Text>
          </View>
          <View style={styles.docListWrapper}>
            <FlatList
              scrollEnabled={true}
              showsVerticalScrollIndicator={false}
              data={this.state.data}
              renderItem={({item}) => (
                <View style={styles.docTypeWrapper}>
                  <Image style={styles.doccatImg} source={Icons.earIcon} />
                  <View style={styles.textBox}>
                    <Text style={styles.specialText}>{item.name}</Text>
                  </View>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.replace('DocDetailedCategory', {doctor_category:item.id,category_name:item.name, city:this.props.route.params.city, appointment_type:this.props.route.params.appointment_type})
                    }>
                    <Image source={Icons.goIcon} style={styles.iconStyle} />
                  </TouchableOpacity>
                </View>
              )}
              keyExtractor={item => item.id}
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
})(DoctorCatagories);
